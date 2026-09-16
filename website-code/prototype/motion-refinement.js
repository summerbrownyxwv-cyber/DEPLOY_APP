/* No brand copy, ordering or business data is owned by this module. */
(() => {
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 let cleanup=()=>{};
 const ease='cubic-bezier(.22,1,.36,1)';
 const animate=(el,frames,options={})=>{
  if(!el||reduce.matches)return null;
  el.getAnimations().forEach(a=>a.cancel());
  return el.animate(frames,{duration:560,easing:ease,...options});
 };
 window.XunAiMotion={
  panel(group,panels,index,previous){
   group.dispatchEvent(new Event('xm-select'));
   if(reduce.matches)return;
   const direction=index>=previous?1:-1;
   const panel=panels[index];
   animate(panel,[{opacity:.2,transform:`translateX(${direction*28}px)`,clipPath:direction>0?'inset(0 0 0 3%)':'inset(0 3% 0 0)'},{opacity:1,transform:'translateX(0)',clipPath:'inset(0 0 0 0)'}]);
   const diagram=panel.querySelector('.xb-process-mark');
   animate(diagram,[{transform:'scale(.96)',opacity:.6},{transform:'scale(1)',opacity:1}],{duration:680});
  },
  mount(main){
   cleanup();const disposers=[];const details=[];
   main.querySelectorAll('a.text-link,a.xh-link,a.xu-detail-link,.xf-subheading>a,a.xj-all,a.xs-booklet-open,.xs-products-more>a').forEach(link=>{
    link.classList.add('xu-action-link');
    link.querySelectorAll(':scope > img,:scope > svg,:scope > span[aria-hidden]').forEach(icon=>icon.remove());
    const arrow=document.createElement('span');arrow.className='xu-action-arrow';arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';link.append(arrow);
   });
   // One wheel smoother for every route; native nested scrolling and touch remain native.
   let wheelFrame=0,wheelTarget=scrollY,lastWheelTime=0;
   const stopWheel=()=>{cancelAnimationFrame(wheelFrame);wheelFrame=0;lastWheelTime=0};
   const stepWheel=time=>{
    const dt=Math.min(40,time-lastWheelTime||16);lastWheelTime=time;
    const remaining=wheelTarget-scrollY,movement=remaining*(1-Math.exp(-dt/150));
    scrollTo({top:Math.abs(movement)<1?wheelTarget:scrollY+movement,behavior:'instant'});
    if(Math.abs(wheelTarget-scrollY)>.8)wheelFrame=requestAnimationFrame(stepWheel);else stopWheel();
   };
   const wheel=event=>{
    if(event.defaultPrevented||reduce.matches||matchMedia('(pointer:coarse)').matches||event.ctrlKey||event.metaKey||Math.abs(event.deltaX)>Math.abs(event.deltaY)||document.querySelector('dialog[open]')||document.body.classList.contains('is-locked')){stopWheel();return}
    let el=event.target;
    while(el instanceof Element&&el!==document.body){
     const css=getComputedStyle(el);
     if(el.matches('input,textarea,select')||(/auto|scroll/.test(css.overflowY)&&el.scrollHeight>el.clientHeight+1)||(/auto|scroll/.test(css.overflowX)&&el.scrollWidth>el.clientWidth+1)){stopWheel();return}el=el.parentElement;
    }
    event.preventDefault();if(!wheelFrame)wheelTarget=scrollY;
    const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?innerHeight:1);
    wheelTarget=Math.max(0,Math.min(document.documentElement.scrollHeight-innerHeight,wheelTarget+delta*.65));
    if(!wheelFrame)wheelFrame=requestAnimationFrame(stepWheel);
   };
   window.addEventListener('wheel',wheel,{passive:false});
   ['keydown','pointerdown','touchstart','resize'].forEach(name=>window.addEventListener(name,stopWheel,{passive:true}));reduce.addEventListener('change',stopWheel);
   disposers.push(()=>{stopWheel();window.removeEventListener('wheel',wheel);['keydown','pointerdown','touchstart','resize'].forEach(name=>window.removeEventListener(name,stopWheel));reduce.removeEventListener('change',stopWheel)});
   // Section entrances do not hide content before JavaScript or affect the shared controls.
   const scenes=[...main.querySelectorAll('section')].filter(el=>!el.querySelector('section')&&!el.closest('[data-switch]'));
   const seen=new WeakSet();
   const reveal=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
    target.classList.toggle('xm-in-view',isIntersecting);
    if(!isIntersecting||seen.has(target))return;seen.add(target);
    if(!reduce.matches&&target.getBoundingClientRect().top>innerHeight*.55)animate(target,[{opacity:.35,translate:'0 18px'},{opacity:1,translate:'0 0'}],{duration:600});
   }),{threshold:0,rootMargin:'0px 0px -8% 0px'});
   scenes.forEach(el=>{el.classList.add('xm-scroll-scene');reveal.observe(el)});
   let scrollFrame=0;
   const depth=()=>{scrollFrame=0;scenes.forEach(el=>{const bottom=el.getBoundingClientRect().bottom;el.classList.toggle('xm-scroll-past',!reduce.matches&&bottom<180&&bottom>0&&!el.contains(document.activeElement))})};
   const scheduleDepth=()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(depth)};
   window.addEventListener('scroll',scheduleDepth,{passive:true});window.addEventListener('resize',scheduleDepth);main.addEventListener('focusin',scheduleDepth);reduce.addEventListener('change',scheduleDepth);
   disposers.push(()=>{reveal.disconnect();cancelAnimationFrame(scrollFrame);window.removeEventListener('scroll',scheduleDepth);window.removeEventListener('resize',scheduleDepth);main.removeEventListener('focusin',scheduleDepth);reduce.removeEventListener('change',scheduleDepth)});
   main.querySelectorAll('[data-switch]').forEach(group=>{
    const bar=group.querySelector('[role=tablist]');
    const marker=document.createElement('i');marker.className='xm-tab-indicator';marker.setAttribute('aria-hidden','true');bar.prepend(marker);bar.classList.add('xm-tabs-ready');
    const position=()=>{const tab=bar.querySelector('[aria-selected=true]');if(!tab)return;marker.style.width=tab.offsetWidth+'px';marker.style.height=tab.offsetHeight+'px';marker.style.transform=`translate(${tab.offsetLeft}px,${tab.offsetTop}px)`;};
    const observer=new ResizeObserver(position);observer.observe(bar);position();group.addEventListener('xm-select',position);
    disposers.push(()=>observer.disconnect());
   });
   main.querySelectorAll('details').forEach(detail=>{
    const summary=detail.querySelector(':scope > summary');
    detail.classList.add('xu-disclosure');
    summary.querySelectorAll(':scope > img,:scope > svg').forEach(icon=>icon.remove());
    const icon=document.createElement('span');icon.className='xu-toggle-icon';icon.setAttribute('aria-hidden','true');summary.append(icon);
    const body=document.createElement('div');body.className='xm-detail-body';[...detail.children].filter(el=>el!==summary).forEach(el=>body.append(el));detail.append(body);
    let running=null,target=detail.open;
    const settle=()=>{running?.cancel();running=null;detail.open=target;detail.style.height='';detail.style.overflow='';};
    summary.addEventListener('click',event=>{
     if(event.defaultPrevented)return;event.preventDefault();target=!(running?target:detail.open);
     if(reduce.matches){settle();return;}
     const from=detail.getBoundingClientRect().height;running?.cancel();
     detail.open=true;detail.style.height='';
     const to=target?detail.getBoundingClientRect().height:summary.getBoundingClientRect().height+parseFloat(getComputedStyle(detail).paddingTop||0)+1;
     detail.style.overflow='clip';
     running=detail.animate([{height:from+'px'},{height:to+'px'}],{duration:target?560:360,easing:ease});
     if(target)animate(body,[{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:480});
     running.onfinish=settle;
    });
    details.push(settle);disposers.push(()=>running?.cancel());
   });
   const expanding=main.querySelector('[data-media-expand]');
   if(expanding){
    let frame=0;
    const draw=()=>{frame=0;if(reduce.matches||innerWidth<768){expanding.style.transform='';return;}const progress=Math.max(0,Math.min(1,(innerHeight-expanding.parentElement.getBoundingClientRect().top)/(innerHeight*.8)));expanding.style.transform=`scale(${.92+.08*progress})`;};
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(draw);};
    window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);reduce.addEventListener('change',schedule);draw();
    disposers.push(()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);reduce.removeEventListener('change',schedule);});
   }
   const films=[...main.querySelectorAll('video')];
   films.forEach(film=>{
    film.loop=true;film.muted=true;film.controls=false;
    const fit=()=>{if(film.closest('.xs-hero-media')&&film.videoWidth&&film.videoHeight)film.parentElement.style.setProperty('--xs-film-ratio',film.videoWidth+'/'+film.videoHeight)};
    fit();film.addEventListener('loadedmetadata',fit);disposers.push(()=>film.removeEventListener('loadedmetadata',fit));
    const visible=()=>{const r=film.getBoundingClientRect();return r.bottom>0&&r.top<innerHeight};
    const sync=()=>{if(reduce.matches||document.hidden||!visible())film.pause();else film.play().catch(()=>{});};
    const observer=new IntersectionObserver(sync,{threshold:0});observer.observe(film);
    document.addEventListener('visibilitychange',sync);reduce.addEventListener('change',sync);sync();
    disposers.push(()=>{observer.disconnect();film.pause();document.removeEventListener('visibilitychange',sync);reduce.removeEventListener('change',sync)});
   });
   const reduced=()=>{if(reduce.matches){main.getAnimations({subtree:true}).forEach(a=>a.cancel());details.forEach(settle=>settle());films.forEach(film=>film.pause());}};
   reduce.addEventListener('change',reduced);disposers.push(()=>reduce.removeEventListener('change',reduced));
   cleanup=()=>disposers.forEach(fn=>fn());
  }
 };
})();
