/* Figma 485:385. Replace news placeholders here when approved content arrives. */
window.XunAiAbout=(()=>{
 const base='../../assets/figma-about-v1/';
 const img=(name,alt,priority=false)=>`<img src="${base}${name}.webp" alt="${alt}" width="1440" height="960" ${priority?'fetchpriority="high"':'loading="lazy"'}>`;
 const paths=['careers','business','overseas'];
 const titles=['人才招聘','商务合作','海外合作'];
 const photos=['imgRectangle66','imgRectangle67','imgRectangle72'];
 const news=[
  ['imgRectangle68','艾艾贴携手湖北中医药大学、时珍实验室共建「时珍·数智人」AI中医系统'],
  ['imgRectangle70','寻艾深圳大冲新城花园店，落座万象天地旁'],
  ['imgRectangle69','恁可来咧！寻艾开进洛阳盛唐至尊'],
  ['imgRectangle71','一座12万平方米的艾草工厂，建在李时珍的家乡']
 ];
 const group=(n)=>`<div class="xo-news-group" role="group" aria-label="第 ${n+1} 组，共 3 组">${news.map(([photo,title],i)=>`<a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&amp;__biz=Mzk0MDYxMzUxOQ==&amp;scene=124" target="_blank" rel="noopener noreferrer" class="xo-story ${n?'xo-placeholder':''}">${n?`<div class="xo-image-placeholder">资讯图片占位 · ${n+1}—${i+1}</div>`:img(photo,title)}<h3>${n?`品牌资讯标题待补充 · ${n+1}—${i+1}`:title}</h3></a>`).join('')}</div>`;
 const field=(name,label,type='text',required=true)=>`<label class="xo-field"><span>${label}${required?' *':'（选填）'}</span><input name="${name}" type="${type}" ${required?'required':''} ${name==='name'?'autocomplete="name"':name==='email'?'autocomplete="email"':name==='phone'?'autocomplete="tel"':''}><small class="xo-error"></small></label>`;
 let cleanup=()=>{};
 function form(index){
  const extra=index===0?field('role','意向岗位')+field('city','意向工作城市')+field('portfolio','简历或作品链接','url',false):index===1?field('company','公司 / 机构名称')+field('category','合作方向')+field('city','所在城市'):field('company','公司 / 机构名称')+field('country','国家 / 地区')+field('market','意向合作市场');
  return `<div class="xo-page xo-application"><a class="text-link route-link" href="#/about/culture">返回关于寻艾</a><div class="xo-application-layout"><aside><div class="xo-form-photo">${img(photos[index],titles[index])}</div><h1>${titles[index]}</h1><p>${['把热爱带进日常，和寻艾一起成长。','从一次交流开始，探索与寻艾的合作可能。','连接不同市场，让寻艾走进更多人的日常。'][index]}</p><p>咨询方式：${['0713-3671098','0755-22664794','ljh1@aiaitie.com'][index]}</p><nav aria-label="其他申请入口">${titles.map((title,i)=>`<a class="route-link" href="#/about/${paths[i]}" ${i===index?'aria-current="page"':''}>${title}</a>`).join('')}</nav></aside><form class="xo-form" novalidate><h2>${index===0?'介绍一下你自己':'告诉我们你的合作意向'}</h2><p class="xo-form-note">标 * 为必填。当前为表单预览，信息不会上传或保存。</p><div class="xo-fields">${field('name','姓名')}${field('email','联系邮箱','email')}${field('phone','联系电话','tel',false)}${extra}<label class="xo-field xo-field-wide"><span>${index===0?'个人介绍':'合作需求'} *</span><textarea name="message" rows="5" required maxlength="3000"></textarea><small class="xo-error"></small></label></div><button class="pill-button" type="submit">检查填写内容</button><p class="xo-form-status" role="status"></p></form></div></div>`;
 }
 return {
  render(page){
   const index=paths.indexOf(page.split('/').pop());if(index>=0)return form(index);
   return `<div class="xo-page"><section class="xo-hero"><div class="xo-hero-photo">${img('imgRectangle53','东元集团团队合影',true)}</div></section><div class="xo-content"><section class="xo-announcements" id="announcements"><header><h2>置顶公告</h2></header><div class="xo-announcement-list">${[1,2,3,4].map(n=>`<details><summary><span>0${n}</span><h3>公告标题待补充</h3></summary><div class="xo-announcement-copy"><p>公告正文占位 · 0${n}</p><p>发布日期、摘要及公告内容待补充。</p></div></details>`).join('')}</div></section><section class="xo-news" id="news"><header><h2><a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&amp;__biz=Mzk0MDYxMzUxOQ==&amp;scene=124" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none">品牌动态</a></h2></header><div class="xo-news-viewport" tabindex="0" aria-label="品牌动态，使用左右方向键或滑动浏览">${[0,1,2].map(group).join('')}</div></section><section class="xo-join" id="join" aria-label="加入寻艾与合作">${titles.map((title,i)=>`<a class="xo-join-card route-link" href="#/about/${paths[i]}">${img(photos[i],title)}<h2>${title}</h2></a>`).join('')}</section></div></div>`;
  },
  mount(main,page){
   cleanup();cleanup=()=>{};const root=main.querySelector('.xo-page');if(!root)return;
   const form=root.querySelector('.xo-form');
   if(form){
    const validate=input=>{
     const invalid=!input.validity.valid||(input.required&&!input.value.trim());
     input.setAttribute('aria-invalid',String(invalid));
     input.parentElement.querySelector('.xo-error').textContent=invalid?(input.validity.typeMismatch?'请填写有效的'+(input.type==='email'?'邮箱地址':'链接'):'请填写此项'):'';
     return invalid;
    };
    form.querySelectorAll('input,textarea').forEach(input=>{
     const error=input.parentElement.querySelector('.xo-error');error.id='xo-error-'+input.name;input.setAttribute('aria-describedby',error.id);
     input.addEventListener('blur',()=>validate(input));
    });
    form.addEventListener('submit',event=>{
     event.preventDefault();let first;
     form.querySelectorAll('input,textarea').forEach(input=>{
      if(validate(input)&&!first)first=input;
     });
     form.querySelector('.xo-form-status').textContent=first?'请检查标出的必填信息。':'填写检查通过。正式接收入口尚未接入，本次未发送或保存任何信息。';
     first?.focus();
    });
    return;
   }
   root.querySelectorAll('.xo-announcement-list details').forEach(item=>{
    item.addEventListener('toggle',()=>{if(item.open)root.querySelectorAll('.xo-announcement-list details').forEach(other=>{if(other!==item)other.open=false})});
   });
   root.querySelector('#news').addEventListener('click',event=>{if(event.defaultPrevented||!event.target.closest('a'))return;if(!window.confirm('即将前往微信，查看寻艾品牌动态。若浏览器未自动打开微信，请在微信中打开此链接。是否继续？'))event.preventDefault();});
   const viewport=root.querySelector('.xo-news-viewport'),reduce=matchMedia('(prefers-reduced-motion:reduce)');
   const track=document.createElement('div');track.className='xo-news-track';
   while(viewport.firstChild)track.append(viewport.firstChild);viewport.append(track);
   const originals=[...track.children];
   originals.forEach(group=>{const clone=group.cloneNode(true);clone.setAttribute('aria-hidden','true');clone.inert=true;track.append(clone)});
   let animation=null,inView=false,hover=false,focused=false,paused=false,step=0,cycle=0,drag=null,moved=false;
   const sync=()=>{
    if(!animation)return;
    if(!inView||hover||focused||paused||document.hidden||reduce.matches)animation.pause();else animation.play();
   };
   const measure=()=>{
    if(matchMedia('(min-width:768px) and (max-width:1023.98px)').matches){animation?.cancel();animation=null;step=viewport.clientWidth+parseFloat(getComputedStyle(track).gap);return}
    const progress=animation&&cycle?Number(animation.currentTime||0)/(cycle/22*1000):0;
    animation?.cancel();step=(matchMedia('(max-width:767.98px), (min-width:1920px)').matches?originals[0].getBoundingClientRect().width:viewport.clientWidth)+24;cycle=step*originals.length;
    if(reduce.matches){animation=null;return}
    viewport.scrollLeft=0;
    animation=track.animate([{transform:'translateX(0)'},{transform:'translateX(-'+cycle+'px)'}],{duration:cycle/22*1000,iterations:Infinity,easing:'linear'});
    animation.currentTime=progress*cycle/22*1000;sync();
   };
   const move=direction=>{
    paused=true;sync();
    if(!animation){viewport.scrollBy({left:direction*step,behavior:'instant'});return}
    const index=Math.round(Number(animation.currentTime||0)*22/1000/step);
    animation.currentTime=((index+direction+originals.length)%originals.length)*step/22*1000;
   };
   viewport.addEventListener('mouseenter',()=>{hover=true;sync()});viewport.addEventListener('mouseleave',()=>{hover=false;sync()});
   viewport.addEventListener('focusin',event=>{
    focused=true;sync();const index=originals.indexOf(event.target.closest('.xo-news-group'));
    if(index>=0&&animation){animation.currentTime=index*step/22*1000;viewport.scrollLeft=0}
   });
   viewport.addEventListener('focusout',()=>{focused=false;sync()});
   viewport.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();move(event.key==='ArrowRight'?1:-1)}});
   viewport.addEventListener('pointerdown',event=>{if(!animation)return;drag={x:event.clientX,time:Number(animation.currentTime||0)};moved=false;animation.pause()});
   viewport.addEventListener('pointermove',event=>{if(!drag||!animation)return;const dx=drag.x-event.clientX;if(Math.abs(dx)>6){moved=true;viewport.setPointerCapture(event.pointerId)}animation.currentTime=Math.max(0,drag.time+dx/22*1000)});
   const release=()=>{drag=null;sync()};
   viewport.addEventListener('pointerup',release);viewport.addEventListener('pointercancel',release);
   viewport.addEventListener('click',event=>{if(moved){event.preventDefault();moved=false}},true);
   const visibility=new IntersectionObserver(([entry])=>{inView=entry.isIntersecting;sync()});visibility.observe(viewport);
   const size=new ResizeObserver(measure);size.observe(viewport);
   document.addEventListener('visibilitychange',sync);reduce.addEventListener('change',measure);measure();
   cleanup=()=>{animation?.cancel();visibility.disconnect();size.disconnect();document.removeEventListener('visibilitychange',sync);reduce.removeEventListener('change',measure)};
  }
 };
})();
