const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..');
const base=process.env.REVIEW_URL||'http://127.0.0.1:4180/website-code/prototype/index.html';
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
 try{
  const page=await browser.newPage({reducedMotion:'reduce'}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  const routes=['/','/brand/about','/brand/history','/brand/products','/stores/standard','/stores/black-gold','/stores/services','/stores/standard/detail','/stores/black-gold/detail','/ai','/franchise','/franchise/apply','/about/culture','/about/business','/about/careers','/about/overseas'];
  for(const width of [390,820,1440]){
   await page.setViewportSize({width,height:1180});
   for(const route of routes){
    await page.goto(base+'?review='+encodeURIComponent(route)+'#'+route);await page.locator('main>*').first().waitFor();await page.evaluate(()=>document.fonts.ready);
    await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`Page overflow ${width} ${route}`);
    const assets=await page.locator('img,video,source').evaluateAll(nodes=>nodes.flatMap(n=>[n.getAttribute('src'),n.getAttribute('poster'),...(n.getAttribute('srcset')||'').split(',').map(x=>x.trim().split(' ')[0])]).filter(Boolean));
    for(const src of assets){
     const url=new URL(src,base);if(url.origin!==new URL(base).origin)continue;
     assert(!/\.(png|jpe?g)$/i.test(url.pathname),`Legacy image ${src}`);
     assert(fs.existsSync(path.join(root,decodeURIComponent(url.pathname))),`Missing ${route} ${src}`);
    }
    if(route==='/franchise/apply'){
     await page.locator('[name="name"]').fill('测试');await page.locator('[name="phone"]').fill('13800138000');await page.locator('[name="city"]').fill('深圳');
     await page.locator('.prototype-form button[type="submit"]').click();
     assert.deepEqual(await page.locator('[name="store_type"] option').allTextContents(),['请选择','标准店','轻享店','暂不确定']);
     await page.evaluate(()=>{formDirty=false});
    }
    if(route==='/franchise'&&width===820){
     assert.equal(await page.locator('.xj-step-copy:visible').count(),6,'Tablet must expose all process descriptions');
     assert.equal(await page.locator('.xj-support-grid dd:visible').count(),9,'Tablet must expose all support details');
    }
    if(route==='/about/culture'){
     assert.equal(await page.locator('#news a').count(),1);assert.equal(await page.locator('.xo-story a').count(),0);
     assert.equal(await page.locator('#news a').textContent(),'前往公众号阅读↗');
     assert(await page.locator('#news a').evaluate(a=>a.classList.contains('xu-action-link')));
    }
    if(route==='/ai'){
     assert.equal(await page.locator('#value>figure>video').count(),1);
     assert.equal(await page.locator('.xa-values-layout>figure>img').count(),1);
     assert.equal(await page.locator('.xa-values-layout>figure>video').count(),0);
     assert(await page.locator('video').evaluate(v=>!v.controls&&v.loop&&v.muted&&v.playsInline));
     assert((await page.locator('.xa-stats dd').first().evaluate(el=>getComputedStyle(el).fontFamily)).includes('XunAi OPPO'));
    }
   }
   await page.locator('.service-rail').click();assert.equal(await page.locator('#service-title').textContent(),'合作咨询');
   assert(await page.locator('#service-business-links').isVisible());
   await page.locator('.service-dialog [data-service="consumer"]').click();assert.equal(await page.locator('#service-title').textContent(),'消费者服务');
   assert(await page.locator('#service-consumer-links').isVisible());await page.keyboard.press('Escape');
   console.log(`PASS ${width}px: 16 routes, all image references, no overflow, store types, news and contact entries`);
  }
  await page.emulateMedia({reducedMotion:'no-preference'});await page.goto(base+'#/ai');
  const video=page.locator('.xa-demo-video');await video.scrollIntoViewIfNeeded();
  await page.waitForFunction(()=>{const v=document.querySelector('.xa-demo-video');return v&&!v.paused&&v.currentTime>0},{},{timeout:30000});
  assert(await video.evaluate(v=>!v.controls&&v.videoWidth===1920&&v.videoHeight===1080));
  await page.locator('#value').screenshot({path:'/tmp/xunai-ai-demo-layout.png'});
  await page.evaluate(()=>scrollTo(0,0));await page.waitForFunction(()=>document.querySelector('.xa-demo-video').paused);
  assert.deepEqual(errors,[]);console.log('PASS video: 1080p, muted loop, no controls, pauses offscreen; no runtime errors');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
