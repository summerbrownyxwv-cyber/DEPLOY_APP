/* Figma 487:443. Original photographs and copy; shared navigation and form. */
window.XunAiFranchise=(()=>{
 const base='../../assets/figma-franchise-v1/';
 const img=(name,alt,priority=false,ext='png')=>`<img src="${base}${name}.${ext}" alt="${alt}" width="1440" height="960" ${priority?'fetchpriority="high"':'loading="lazy"'}>`;
 const media=(name,alt,cls='')=>`<figure class="xj-media ${cls}">${img(name,alt)}</figure>`;
 const supports=[['选址支持','大数据选址 + 模型数据参考'],['装修设计','统一设计，全套图纸'],['培训支持','线上小程序学习 + 总部实操培训 + 后期驻店指导'],['物流配送','自有小程序下单，物流直达'],['开业支持','开业方案 + 线上引流 + 人员指导'],['老师下店','根据门店情况，老师下店帮扶门店'],['品牌宣传','品牌团队全域全渠道矩阵式宣传'],['运营支持','门店日常经营，内群实时沟通解决'],['督导巡店','售后服务，解决问题']];
 const steps=['意向签约，锁定名额','商圈选址，快速落位','签约打款，开店启动','设计培训，双管齐下','装修验收，形象满意','策划开业，持续火爆'];
 const reviewPhoto=(name,alt)=>`<img src="../../assets/review-20260920/${name}.webp" alt="${alt}" width="1000" height="1000" loading="lazy">`;
 const processCopy=['沟通合作意向，了解店型与合作条件。','结合意向城市与商圈，开展选址沟通。','确认合作细节，推进签约与开店准备。','衔接空间设计与人员培训，准备门店运营。','完成装修与验收，落实门店形象。','筹备开业活动，衔接后续运营支持。'];
 let cleanup=()=>{};
 return {
  render(application=false){
   if(application)return `<div class="xj-page xj-application"><a class="text-link route-link" href="#/franchise">返回加盟合作</a><div class="xj-application-grid"><aside><h1>提交合作意向</h1><p>从一次交流开始，<br>了解适合你的寻艾门店。</p>${media('imgRectangle64','寻艾艾草产业基地')}</aside><section id="apply"><h2>介绍一下你的开店计划</h2><p class="xj-form-note">当前为表单预览，填写内容不会上传或保存。</p><div data-form-mount></div></section></div></div>`;
   return `<div class="xj-page">
    <section class="xj-hero">${img('imgRectangle1','寻艾艾灸馆空间',true)}<div class="xj-hero-copy"><h1>加盟合作</h1><p>品牌有实力 门店更放心</p><img class="xj-hero-signature" src="${base}img1.svg" alt="10年沉淀、100+门店、1000亩种植基地、12万平方米工厂" width="536" height="23"></div></section>
    <section class="xj-models xj-dark" id="requirements"><div class="xj-wrap"><div class="xj-model-grid"><div><h2>投资灵活，2种店型选择</h2><p class="xj-lead">无需经验，最低6万即可开店</p><div class="xj-store"><figure class="xj-media xj-standard">${reviewPhoto('store-standard','寻艾标准店门头')}</figure><h3>标准店 <span>80–120m²</span></h3></div></div><div class="xj-store"><figure class="xj-media xj-light-store">${reviewPhoto('store-light','寻艾轻享店接待空间')}</figure><h3>轻享店 <span>30–60m²</span></h3></div></div><div class="xj-model-footer"><a class="xj-all route-link" href="#/stores/standard">查看所有<img src="${base}imgArrowNarrowUpRight.svg" alt="" width="22" height="22"></a></div></div></section>
    <section class="xj-headquarters" id="support"><header><h2>总部支持</h2><p class="xj-scale"><span>100+</span>门店，<span>200+</span>人团队支持</p><p class="xj-lead">整店输出，全程扶持，0经验也可开店</p></header><div class="xj-gallery" tabindex="0" aria-label="总部与门店图库，可拖动或使用左右方向键浏览">${[['imgRectangle89','寻艾门店空间'],['imgRectangle75','寻艾品牌空间'],['imgRectangle76','寻艾服务环境'],['imgRectangle78','寻艾门店细节']].map(([name,alt])=>media(name,alt,name==='imgRectangle75'?'xj-gallery-brand':'')).join('')}</div></section>
    <div class="xj-turn-stack"><div class="xj-turn-panel"><section class="xj-system xj-wrap"><div class="xj-system-copy"><h2>九大支持体系<br>365天24H响应扶持</h2><dl class="xj-support-grid">${supports.map(([title,copy])=>`<div tabindex="0"><dt>${title}</dt><dd>${copy}</dd></div>`).join('')}</dl></div>${media('imgRectangle62','艾草种植基地')}</section></div>
    <div class="xj-turn-panel xj-dark"><section class="xj-output xj-dark"><div class="xj-wrap xj-output-grid"><div><h2>总部整店输出<br>模式一键复制</h2>${media('imgRectangle89','寻艾门店接待空间')}</div>${media('imgRectangle63','寻艾艾灸馆服务空间')}</div></section></div>
    <div class="xj-turn-panel"><section class="xj-products xj-wrap"><header><h2>四大产品支持</h2><p class="xj-lead">燃、温、萃、植 — 从零售到服务，全场景覆盖</p></header><div class="xj-product-grid">${['燃','温','萃','植'].map((title,i)=>`<button type="button" class="xj-product" aria-pressed="${i===0}" data-product="${i}"><span class="xj-product-image">${img('imgRectangle'+(70+i),'艾艾贴'+title+'系列产品')}</span><span class="xj-product-title">${title}系列</span></button>`).join('')}</div></section></div>
    <section class="xj-process xj-dark"><div class="xj-wrap xj-process-grid"><div class="xj-process-nav"><h2>加盟流程</h2><p class="xj-lead">六步快速开店</p><ol>${steps.map((step,i)=>`<li class="${i===0?'is-current':''}"><button type="button" data-process-step="${i}" aria-controls="xj-process-photo-${i}" ${i===0?'aria-current="step"':''}><span>STEP ${i+1}</span><span>${step}</span></button><div class="xj-step-copy"><p>${processCopy[i]}</p></div></li>`).join('')}</ol></div><div class="xj-process-photos">${steps.map((step,i)=>`<figure id="xj-process-photo-${i}" aria-label="第 ${i+1} 步：${step}">${reviewPhoto('process-'+(i+1),step)}</figure>`).join('')}</div></div></section></div>
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
   const process=main.querySelector('.xj-process'),photoList=process.querySelector('.xj-process-photos');
   const photos=[...photoList.children],buttons=[...process.querySelectorAll('[data-process-step]')];
   const mobile=matchMedia('(max-width:767px)');
   let current=0,lastWheel=0,touchY=null;
   const select=index=>{
    current=index;
    buttons.forEach((button,i)=>{
     const active=i===index,li=button.closest('li');
     li.classList.toggle('is-current',active);
     if(active)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');
     if(mobile.matches)button.setAttribute('aria-expanded',String(active));else button.removeAttribute('aria-expanded');
     photos[i].hidden=mobile.matches&&!active;
     photos[i].classList.toggle('is-current',active);
     li.querySelector('.xj-step-copy').hidden=mobile.matches&&!active;
    });
   };
   const wheel=event=>{
    if(mobile.matches||event.ctrlKey||Math.abs(event.deltaY)<4)return;
    const rect=process.getBoundingClientRect(),header=document.querySelector('.site-header').getBoundingClientRect().bottom;
    if(rect.top<header-8||rect.bottom>innerHeight)return;
    const next=current+(event.deltaY>0?1:-1);
    if(next<0||next>=photos.length)return;
    event.preventDefault();
    if(performance.now()-lastWheel<450)return;
    lastWheel=performance.now();select(next);
   };
   const arrange=()=>{
    photos.forEach((photo,i)=>{
     (mobile.matches?buttons[i].closest('li'):photoList).append(photo);
     photo.classList.toggle('xj-step-photo',mobile.matches);
    });
    select(mobile.matches?0:Math.max(0,current));
   };
   buttons.forEach((button,i)=>button.addEventListener('click',()=>{
    if(mobile.matches){select(current===i?-1:i);return}
    select(i);
   }));
   photoList.tabIndex=0;
   photoList.setAttribute('aria-label','加盟流程图片，可上下滑动或使用方向键切换步骤');
   photoList.addEventListener('keydown',event=>{if(['ArrowDown','ArrowRight','ArrowUp','ArrowLeft'].includes(event.key)){event.preventDefault();select(Math.max(0,Math.min(5,current+(['ArrowDown','ArrowRight'].includes(event.key)?1:-1))))}});
   photoList.addEventListener('touchstart',event=>{touchY=event.touches[0].clientY},{passive:true});
   photoList.addEventListener('touchend',event=>{if(touchY===null)return;const dy=touchY-event.changedTouches[0].clientY;if(Math.abs(dy)>40)select(Math.max(0,Math.min(5,current+(dy>0?1:-1))));touchY=null},{passive:true});
   mobile.addEventListener('change',arrange);
   process.addEventListener('wheel',wheel,{passive:false});
   window.addEventListener('resize',arrange);
   arrange();
   cleanup=()=>{mobile.removeEventListener('change',arrange);process.removeEventListener('wheel',wheel);window.removeEventListener('resize',arrange)};
  }
 };
})();
