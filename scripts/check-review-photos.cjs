// Run with Playwright available via NODE_PATH and the preview running on port 4180.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
 try{
  const page=await browser.newPage({reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  for(const width of [1156,390]){
   await page.setViewportSize({width,height:935});
   for(const route of ['brand/about','stores/standard','franchise']){
    await page.goto('http://127.0.0.1:4180/website-code/prototype/index.html#/'+route);
    await page.locator(route==='brand/about'?'#history':route==='franchise'?'.xj-process':'#services').waitFor();
    const images=page.locator('main img[src*="review-20260920"]');
    await images.evaluateAll(async imgs=>{await Promise.all(imgs.map(img=>{img.loading='eager';return img.decode()}))});
    assert.equal(await images.count(),route==='brand/about'?10:route==='franchise'?8:9);
    assert(await images.evaluateAll(imgs=>imgs.every(img=>img.naturalWidth>0)));
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    if(route==='brand/about'){
     assert.deepEqual(await page.locator('.xf-years button').allTextContents(),['2015','2016','2017','2019','2020','2021','2022','2023','2024','2025']);
     for(const year of ['2020','2022','2025']){
      await page.locator('.xf-years button').getByText(year,{exact:true}).click();
      assert.equal(await page.locator('.xf-history-card.is-active time').innerText(),year);
      assert(await page.locator('.xf-history-card.is-active').evaluate(card=>card.querySelector('.xf-history-copy').getBoundingClientRect().bottom<=card.getBoundingClientRect().bottom));
     }
     await page.locator('#history').scrollIntoViewIfNeeded();
    }else if(route==='franchise'){
     assert.equal(await page.locator('.xj-product-grid').evaluate(el=>getComputedStyle(el).scrollbarWidth),'none');
     await page.locator('[data-product="0"]').focus();await page.keyboard.press('ArrowRight');
     assert.equal(await page.locator('[data-product="1"]').getAttribute('aria-pressed'),'true');
     const sizes=await page.locator('.xj-process-photos figure').evaluateAll(items=>items.map(el=>[el.offsetWidth,el.offsetHeight]));
     assert(sizes.every(([w,h])=>w===sizes[0][0]&&h===sizes[0][1]&&Math.abs(w-h)<=1));
     for(let i=0;i<6;i++){
      await page.locator(`[data-process-step="${i}"]`).click();
      await page.waitForFunction(index=>document.querySelector(`[data-process-step="${index}"]`).getAttribute('aria-current')==='step',i);
     }
     await page.locator('.xj-process').scrollIntoViewIfNeeded();
    }else{
     await page.locator('[data-service-next]').click();
     assert.equal(await page.locator('[data-service-count]').innerText(),'2 / 3');
     await page.locator('[data-service-next]').click();
     assert.equal(await page.locator('[data-service-count]').innerText(),'3 / 3');
     await page.locator('#services').scrollIntoViewIfNeeded();
    }
    await page.screenshot({path:'/tmp/xunai-'+route.replace('/','-')+'-'+width+'.png'});
    console.log('PASS',width,route);
   }
  }
  assert.deepEqual(errors,[]);
 }finally{await browser.close()}
})().catch(error=>{console.error(error);process.exitCode=1});
