/* Shared native motion; pages retain ownership of copy and business data. */
(() => {
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 let cleanup=()=>{};
 const token=(name,fallback)=>parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--x-motion-'+name))||fallback;
 const ease='cubic-bezier(.22,1,.36,1)';
 const animate=(el,frames,duration=400)=>!reduce.matches&&el?.animate?el.animate(frames,{duration,easing:ease}):null;
 const formatCount=(final,progress)=>progress>=1?final:final.replace(/\d[\d,]*(?:\.\d+)?/g,part=>{
  const precision=(part.split('.')[1]||'').length;
  const value=(Number(part.replaceAll(',',''))*progress).toFixed(precision);
  const [whole,fraction]=value.split('.');
  return (part.includes(',')?whole.replace(/\B(?=(\d{3})+(?!\d))/g,','):whole)+(fraction===undefined?'':'.'+fraction);
 });
 const isVisible=(entry,threshold)=>entry.isIntersecting&&entry.intersectionRatio>=threshold;
 window.XunAiMotion={
  formatCount,isVisible,
  unmount(){cleanup();cleanup=()=>{}},
  panel(group,panels,index,previous){
   group.dispatchEvent(new Event('xm-select'));
   animate(panels[index],[{opacity:.2,transform:'translateX('+(index>=previous?24:-24)+'px)'},{opacity:1,transform:'translateX(0)'}],token('normal',400));
  },
  mount(main){
   this.unmount();const disposers=[],states=new Map();let observer,resizeFrame=0;
   const listen=(el,event,fn,options)=>{el.addEventListener(event,fn,options);disposers.push(()=>el.removeEventListener(event,fn,options))};
   main.querySelectorAll('a.text-link,a.xh-link,a.xu-detail-link,.xf-subheading>a,a.xj-all,a.xs-booklet-open,.xs-products-more>a').forEach(link=>{
    link.classList.add('xu-action-link');if(link.querySelector('.xu-action-arrow'))return;
    link.querySelectorAll(':scope > img,:scope > svg,:scope > span[aria-hidden]').forEach(icon=>icon.remove());
    const arrow=document.createElement('span');arrow.className='xu-action-arrow';arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';link.append(arrow);
   });
   const reset=state=>{
    cancelAnimationFrame(state.frame);clearTimeout(state.timer);state.animation?.cancel();state.animation=null;
    state.el.dataset.motionState='pending';if(state.counter)state.value.textContent=formatCount(state.final,0);
   };
   const finish=state=>{reset(state);state.done=true;state.el.dataset.motionState='complete';if(state.counter)state.value.textContent=state.final};
   const start=state=>{
    if(state.done||state.el.dataset.motionState==='running')return;
    if(reduce.matches){finish(state);return}state.el.dataset.motionState='running';
    state.timer=setTimeout(()=>{
     if(!state.visible||document.hidden){reset(state);return}
     if(state.counter){
      const began=performance.now(),duration=token('counter',2200);
      const tick=now=>{const p=Math.min(1,(now-began)/duration);state.value.textContent=formatCount(state.final,1-Math.pow(1-p,3));if(p<1)state.frame=requestAnimationFrame(tick);else finish(state)};
      state.frame=requestAnimationFrame(tick);
     }else{
      const distance=state.el.matches('h1,h2,h3')?32:16;
      state.animation=state.el.animate([{opacity:0,translate:'0 '+distance+'px'},{opacity:1,translate:'0 0'}],{duration:token(state.el.matches('figure')?'visual':'slow',950),easing:ease,fill:'both'});
      state.animation.onfinish=()=>finish(state);
     }
    },state.delay);
   };
   // Only bounded reading blocks: a tall section cannot reach a useful threshold.
   const targets=[...main.querySelectorAll('h1,h2,h3,p,figure')].filter(el=>!el.closest('dialog,details,[role=tabpanel],.xa-stage,.xa-reports,.xf-history-card,.xs-service-card,.xj-process,.xj-gallery,.xo-news-track')&&!el.parentElement.closest('figure')&&!el.querySelector('[data-count]'));
   targets.forEach(el=>{
    const rect=el.getBoundingClientRect();if(!rect.height||rect.height>innerHeight*.9)return;
    el.classList.add('xm-reveal');el.dataset.motionState='pending';
    states.set(el,{el,done:false,visible:false,delay:Math.min([...el.parentElement.children].indexOf(el),5)*token('stagger',100)});
   });
   main.querySelectorAll('[data-count]').forEach((el,i)=>{
    const final=el.dataset.count;if(!/\d/.test(final))return;
    el.classList.add('xm-counter');el.setAttribute('aria-label',final);
    const ghost=document.createElement('span'),value=document.createElement('span');
    ghost.className='xm-counter-space';ghost.textContent=final;ghost.setAttribute('aria-hidden','true');
    value.className='xm-counter-value';value.setAttribute('aria-hidden','true');el.replaceChildren(ghost,value);
    const state={el,counter:true,final,value,done:false,visible:false,delay:token('counter-delay',200)+Math.min(i%6,5)*token('stagger',100)};
    states.set(el,state);reset(state);
   });
   const connect=()=>{
    observer?.disconnect();
    if(reduce.matches||!('IntersectionObserver' in window)||!Element.prototype.animate){states.forEach(finish);return}
    const header=document.querySelector('.site-header'),top=header?Math.max(0,header.getBoundingClientRect().bottom):0;
    observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
     const state=states.get(entry.target);state.visible=isVisible(entry,state.counter ? .45 : .4);
     if(state.done)return;if(state.visible&&!document.hidden)start(state);else reset(state);
    }),{threshold:[0,.4,.45,1],rootMargin:'-'+Math.round(top)+'px 0px -'+Math.round(innerHeight*.1)+'px 0px'});
    states.forEach(state=>{if(!state.done)observer.observe(state.el)});
   };
   listen(window,'resize',()=>{cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(connect)},{passive:true});
   listen(document,'visibilitychange',()=>{states.forEach(state=>{if(!state.done)reset(state)});if(!document.hidden)connect()});
   listen(main,'focusin',event=>states.forEach(state=>{if(state.el.contains(event.target))finish(state)}));
   listen(reduce,'change',connect);connect();
   disposers.push(()=>{observer?.disconnect();cancelAnimationFrame(resizeFrame);states.forEach(finish)});
   main.querySelectorAll('[data-switch]').forEach(group=>{
    const bar=group.querySelector('[role=tablist]');if(!bar)return;
    const marker=document.createElement('i');marker.className='xm-tab-indicator';marker.setAttribute('aria-hidden','true');bar.prepend(marker);bar.classList.add('xm-tabs-ready');
    const position=()=>{const tab=bar.querySelector('[aria-selected=true]');if(tab){marker.style.width=tab.offsetWidth+'px';marker.style.height=tab.offsetHeight+'px';marker.style.transform='translate('+tab.offsetLeft+'px,'+tab.offsetTop+'px)'}};
    const size=new ResizeObserver(position);size.observe(bar);position();listen(group,'xm-select',position);disposers.push(()=>size.disconnect());
   });
   main.querySelectorAll('details').forEach(detail=>{
    const summary=detail.querySelector(':scope > summary');if(!summary)return;detail.classList.add('xu-disclosure');
    summary.querySelectorAll(':scope > img[alt=""],:scope > svg[aria-hidden="true"]').forEach(icon=>icon.remove());
    if(!summary.querySelector('.xu-toggle-icon')){const icon=document.createElement('span');icon.className='xu-toggle-icon';icon.setAttribute('aria-hidden','true');summary.append(icon)}
    listen(detail,'toggle',()=>{if(detail.open)animate(detail.querySelector(':scope > :not(summary)'),[{opacity:.2},{opacity:1}],token('normal',400))});
   });
   main.querySelectorAll('.xa-stage,.xa-star-trails,video').forEach(el=>{
    let visible=false;
    const sync=()=>{
     const paused=!visible||document.hidden||reduce.matches||!!el.closest('.is-paused');
     if(el.tagName==='VIDEO'){el.muted=true;el.loop=true;el.controls=reduce.matches;if(paused)el.pause();else el.play().catch(()=>{})}
     else el.getAnimations({subtree:true}).forEach(a=>paused?a.pause():a.play());
    };
    if('IntersectionObserver' in window){const visibility=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync()},{threshold:0});visibility.observe(el);disposers.push(()=>visibility.disconnect())}
    listen(document,'visibilitychange',sync);listen(reduce,'change',sync);listen(main,'click',sync);
    disposers.push(()=>{if(el.tagName==='VIDEO')el.pause();else el.getAnimations({subtree:true}).forEach(a=>a.cancel())});
   });
   cleanup=()=>disposers.forEach(fn=>fn());
  }
 };
})();
