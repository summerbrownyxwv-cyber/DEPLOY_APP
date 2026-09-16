/* Figma 487:443. Original photographs and copy; shared navigation and form. */
window.XunAiFranchise=(()=>{
 const base='../../assets/figma-franchise-v1/';
 const img=(name,alt,priority=false,ext='png')=>`<img src="${base}${name}.${ext}" alt="${alt}" width="1440" height="960" ${priority?'fetchpriority="high"':'loading="lazy"'}>`;
 const media=(name,alt,cls='')=>`<figure class="xj-media ${cls}">${img(name,alt)}</figure>`;
 const supports=[['选址支持','大数据选址 + 模型数据参考'],['装修设计','统一设计，全套图纸'],['培训支持','线上小程序学习 + 总部实操培训 + 后期驻店指导'],['物流配送','自有小程序下单，物流直达'],['开业支持','开业方案 + 线上引流 + 人员指导'],['老师下店','根据门店情况，老师下店帮扶门店'],['品牌宣传','品牌团队全域全渠道矩阵式宣传'],['运营支持','门店日常经营，内群实时沟通解决'],['督导巡店','售后服务，解决问题']];
 const steps=['意向签约，锁定名额','商圈选址，快速落位','签约打款，开店启动','设计培训，双管齐下','装修验收，形象满意','策划开业，持续火爆'];
 const processPhotos=['imgRectangle64','imgRectangle75','imgRectangle78','imgRectangle76','imgRectangle63','imgRectangle89'];
 const processCopy=['沟通合作意向，了解店型与合作条件。','结合意向城市与商圈，开展选址沟通。','确认合作细节，推进签约与开店准备。','衔接空间设计与人员培训，准备门店运营。','完成装修与验收，落实门店形象。','筹备开业活动，衔接后续运营支持。'];
 let cleanup=()=>{};
 return {
  render(application=false){
   if(application)return `<div class="xj-page xj-application"><a class="text-link route-link" href="#/franchise">返回加盟合作</a><div class="xj-application-grid"><aside><h1>提交合作意向</h1><p>从一次交流开始，<br>了解适合你的寻艾门店。</p>${media('imgRectangle64','寻艾艾草产业基地')}</aside><section id="apply"><h2>介绍一下你的开店计划</h2><p class="xj-form-note">当前为表单预览，填写内容不会上传或保存。</p><div data-form-mount></div></section></div></div>`;
   return `<div class="xj-page">
    <section class="xj-hero">${img('imgRectangle1','寻艾艾灸馆空间',true)}<div class="xj-hero-copy"><h1>加盟合作</h1><p>品牌有实力 门店更放心</p><img class="xj-hero-signature" src="${base}img1.svg" alt="10年沉淀、100+门店、1000亩种植基地、12万平方米工厂" width="536" height="23"></div></section>
    <section class="xj-models xj-dark" id="requirements"><div class="xj-wrap"><div class="xj-model-grid"><div><h2>投资灵活，2种店型选择</h2><p class="xj-lead">无需经验，最低6万即可开店</p><div class="xj-store">${media('imgRectangle57','寻艾标准店门头','xj-standard')}<h3>标准店 <span>80–120m²</span></h3></div></div><div class="xj-store">${media('imgRectangle68','寻艾轻享店门头','xj-light-store')}<h3>轻享店 <span>30–60m²</span></h3></div></div><div class="xj-model-footer"><a class="xj-all route-link" href="#/stores/standard">查看所有<img src="${base}imgArrowNarrowUpRight.svg" alt="" width="22" height="22"></a></div></div></section>
    <section class="xj-headquarters" id="support"><header><h2>总部支持</h2><p class="xj-scale"><span>100+</span>门店，<span>200+</span>人团队支持</p><p class="xj-lead">整店输出，全程扶持，0经验也可开店</p></header><div class="xj-gallery" tabindex="0" aria-label="总部与门店图库，可拖动或使用左右方向键浏览">${[['imgRectangle89','寻艾门店空间'],['imgRectangle75','寻艾品牌空间'],['imgRectangle76','寻艾服务环境'],['imgRectangle78','寻艾门店细节']].map(([name,alt])=>media(name,alt,name==='imgRectangle75'?'xj-gallery-brand':'')).join('')}</div></section>
    <div class="xj-turn-stack"><div class="xj-turn-panel"><section class="xj-system xj-wrap"><div class="xj-system-copy"><h2>九大支持体系<br>365天24H响应扶持</h2><dl class="xj-support-grid">${supports.map(([title,copy])=>`<div tabindex="0"><dt>${title}</dt><dd>${copy}</dd></div>`).join('')}</dl></div>${media('imgRectangle62','艾草种植基地')}</section></div>
    <div class="xj-turn-panel xj-dark"><section class="xj-output xj-dark"><div class="xj-wrap xj-output-grid"><div><h2>总部整店输出<br>模式一键复制</h2>${media('imgRectangle89','寻艾门店接待空间')}</div>${media('imgRectangle63','寻艾艾灸馆服务空间')}</div></section></div>
    <div class="xj-turn-panel"><section class="xj-products xj-wrap"><header><h2>四大产品支持</h2><p class="xj-lead">燃、温、萃、植 — 从零售到服务，全场景覆盖</p></header><div class="xj-product-grid">${['燃','温','萃','植'].map((title,i)=>`<button type="button" class="xj-product" aria-pressed="${i===0}" data-product="${i}"><span class="xj-product-image">${img('imgRectangle'+(70+i),'艾艾贴'+title+'系列产品')}</span><span class="xj-product-title">${title}系列</span></button>`).join('')}</div></section></div>
    <section class="xj-process xj-dark"><div class="xj-wrap xj-process-grid"><div class="xj-process-nav"><h2>加盟流程</h2><p class="xj-lead">六步快速开店</p><ol>${steps.map((step,i)=>`<li class="${i===0?'is-current':''}"><button type="button" data-process-step="${i}" aria-controls="xj-process-photo-${i}" ${i===0?'aria-current="step"':''}><span>STEP ${i+1}</span><span>${step}</span></button><div class="xj-step-copy"><p>${processCopy[i]}</p></div></li>`).join('')}</ol></div><div class="xj-process-photos">${steps.map((step,i)=>`<figure id="xj-process-photo-${i}" aria-label="第 ${i+1} 步：${step}">${img(processPhotos[i],'流程配图占位：'+step)}</figure>`).join('')}</div></div></section></div>
   </div>`;
  },
  mount(main){
   cleanup();cleanup=()=>{};
   const gallery=main.querySelector('.xj-gallery');if(!gallery)return;
   const products=[...main.querySelectorAll('[data-product]')];
   const selectProduct=index=>{products.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));const strip=products[index].parentElement;strip.scrollTo({left:products[index].offsetLeft-strip.firstElementChild.offsetLeft,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});};
   products.forEach((button,i)=>{button.addEventListener('click',()=>selectProduct(i));button.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight'].includes(event.key))return;event.preventDefault();const next=Math.max(0,Math.min(products.length-1,i+(event.key==='ArrowRight'?1:-1)));selectProduct(next);products[next].focus()})});
   const strip=products[0].parentElement;let productDrag=null;strip.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'){productDrag={x:e.clientX,left:strip.scrollLeft};strip.setPointerCapture(e.pointerId)}});strip.addEventListener('pointermove',e=>{if(productDrag)strip.scrollLeft=productDrag.left+productDrag.x-e.clientX});strip.addEventListener('pointerup',()=>productDrag=null);strip.addEventListener('pointercancel',()=>productDrag=null);
   const reduce=matchMedia('(prefers-reduced-motion:reduce)');let drag=null;
   const move=direction=>gallery.scrollBy({left:direction*(gallery.firstElementChild.offsetWidth+24),behavior:reduce.matches?'instant':'smooth'});
   gallery.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();move(event.key==='ArrowRight'?1:-1)}});
   gallery.addEventListener('pointerdown',event=>{if(event.pointerType!=='mouse')return;drag={x:event.clientX,left:gallery.scrollLeft};gallery.setPointerCapture(event.pointerId);gallery.classList.add('is-dragging')});
   gallery.addEventListener('pointermove',event=>{if(drag)gallery.scrollLeft=drag.left+drag.x-event.clientX});
   const release=()=>{drag=null;gallery.classList.remove('is-dragging')};gallery.addEventListener('pointerup',release);gallery.addEventListener('pointercancel',release);
   gallery.scrollLeft=gallery.firstElementChild.offsetWidth*.65;
   gallery.addEventListener('wheel',event=>{
    if(event.ctrlKey||Math.abs(event.deltaX)>Math.abs(event.deltaY))return;
    const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?gallery.clientWidth:1);
    if((delta>0&&gallery.scrollLeft<gallery.scrollWidth-gallery.clientWidth-1)||(delta<0&&gallery.scrollLeft>0)){
     event.preventDefault();gallery.scrollLeft+=delta;
    }
   },{passive:false});
   const process=main.querySelector('.xj-process'),photos=[...process.querySelectorAll('.xj-process-photos figure')],buttons=[...process.querySelectorAll('[data-process-step]')];
   const stack=main.querySelector('.xj-turn-stack'),panels=[...stack.querySelectorAll('.xj-turn-panel')];
   const measure=()=>panels.forEach(panel=>{
    const header=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--x-header-height'))||88;
    panel.style.setProperty('--xj-pin-top',Math.min(header,innerHeight-panel.offsetHeight)+'px');
   });
   const resize=new ResizeObserver(measure);panels.forEach(panel=>resize.observe(panel));measure();
   // Restore a covered panel when keyboard navigation reaches one of its links.
   const revealFocus=event=>{
    const panel=event.target.closest('.xj-turn-panel');if(!panel||innerWidth<768||reduce.matches)return;
    const index=panels.indexOf(panel),next=panels[index+1]||process;
    if(next.getBoundingClientRect().top<event.target.getBoundingClientRect().bottom){
     const top=stack.getBoundingClientRect().top+scrollY+panels.slice(0,index).reduce((sum,item)=>sum+item.offsetHeight+parseFloat(getComputedStyle(item).marginBottom),0);
     window.scrollTo({top:top-88,behavior:'instant'});
    }
   };
   stack.addEventListener('focusin',revealFocus);
   const photoTop=index=>photos.slice(0,index).reduce((sum,photo)=>sum+photo.offsetHeight,0)+index*parseFloat(getComputedStyle(photos[0].parentElement).rowGap||0);
   let frame=0,current=-1;
   const draw=()=>{
    frame=0;const line=innerHeight*.48;
    const index=photos.reduce((active,photo,i)=>photo.parentElement.getBoundingClientRect().top+photoTop(i)<=line?i:active,0);
    if(index===current)return;current=index;
    buttons.forEach((button,i)=>{button.closest('li').classList.toggle('is-current',i===index);if(i===index)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current')});
   };
   const schedule=()=>{if(!frame)frame=requestAnimationFrame(draw)};
   buttons.forEach((button,i)=>button.addEventListener('click',()=>window.scrollTo({top:photos[i].parentElement.getBoundingClientRect().top+scrollY+photoTop(i)-parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--x-header-height'))-24,behavior:reduce.matches?'instant':'smooth'})));
   window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);window.addEventListener('resize',measure);draw();
   cleanup=()=>{resize.disconnect();stack.removeEventListener('focusin',revealFocus);window.removeEventListener('resize',measure);cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule)};
  }
 };
})();
