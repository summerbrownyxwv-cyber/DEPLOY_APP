/* Figma 485:385. Replace news placeholders here when approved content arrives. */
window.XunAiAbout=(()=>{
 const base='../../assets/figma-about-v1/';
 const img=(name,alt,priority=false)=>`<img src="${base}${name}.png" alt="${alt}" width="1440" height="960" ${priority?'fetchpriority="high"':'loading="lazy"'}>`;
 const paths=['careers','business','overseas'];
 const titles=['人才招聘','商务合作','海外合作'];
 const photos=['imgRectangle66','imgRectangle67','imgRectangle72'];
 const news=[
  ['imgRectangle68','艾艾贴携手湖北中医药大学、时珍实验室共建「时珍·数智人」AI中医系统'],
  ['imgRectangle70','寻艾深圳大冲新城花园店，落座万象天地旁'],
  ['imgRectangle69','恁可来咧！寻艾开进洛阳盛唐至尊'],
  ['imgRectangle71','一座12万平方米的艾草工厂，建在李时珍的家乡']
 ];
 const group=(n)=>`<div class="xo-news-group" role="group" aria-label="第 ${n+1} 组，共 3 组">${news.map(([photo,title],i)=>`<a href="https://mp.weixin.qq.com/s/6hD4zklr7odxp2weKJM0GA" target="_blank" rel="noopener noreferrer" class="xo-story ${n?'xo-placeholder':''}">${n?`<div class="xo-image-placeholder">资讯图片占位 · ${n+1}—${i+1}</div>`:img(photo,title)}<h3>${n?`品牌资讯标题待补充 · ${n+1}—${i+1}`:title}</h3></a>`).join('')}</div>`;
 const field=(name,label,type='text',required=true)=>`<label class="xo-field"><span>${label}${required?' *':'（选填）'}</span><input name="${name}" type="${type}" ${required?'required':''} ${name==='name'?'autocomplete="name"':name==='email'?'autocomplete="email"':name==='phone'?'autocomplete="tel"':''}><small class="xo-error"></small></label>`;
 let cleanup=()=>{};
 function form(index){
  const extra=index===0?field('role','意向岗位')+field('city','意向工作城市')+field('portfolio','简历或作品链接','url',false):index===1?field('company','公司 / 机构名称')+field('category','合作方向')+field('city','所在城市'):field('company','公司 / 机构名称')+field('country','国家 / 地区')+field('market','意向合作市场');
  return `<div class="xo-page xo-application"><a class="text-link route-link" href="#/about/culture">返回关于寻艾</a><div class="xo-application-layout"><aside><div class="xo-form-photo">${img(photos[index],titles[index])}</div><h1>${titles[index]}</h1><p>${['把热爱带进日常，和寻艾一起成长。','从一次交流开始，探索与寻艾的合作可能。','连接不同市场，让寻艾走进更多人的日常。'][index]}</p><nav aria-label="其他申请入口">${titles.map((title,i)=>`<a class="route-link" href="#/about/${paths[i]}" ${i===index?'aria-current="page"':''}>${title}</a>`).join('')}</nav></aside><form class="xo-form" novalidate><h2>${index===0?'介绍一下你自己':'告诉我们你的合作意向'}</h2><p class="xo-form-note">标 * 为必填。当前为表单预览，信息不会上传或保存。</p><div class="xo-fields">${field('name','姓名')}${field('email','联系邮箱','email')}${field('phone','联系电话','tel',false)}${extra}<label class="xo-field xo-field-wide"><span>${index===0?'个人介绍':'合作需求'} *</span><textarea name="message" rows="5" required maxlength="3000"></textarea><small class="xo-error"></small></label></div><button class="pill-button" type="submit">检查填写内容</button><p class="xo-form-status" role="status"></p></form></div></div>`;
 }
 return {
  render(page){
   const index=paths.indexOf(page.split('/').pop());if(index>=0)return form(index);
   return `<div class="xo-page"><section class="xo-hero"><div class="xo-hero-photo">${img('imgRectangle53','东元集团团队合影',true)}</div><div class="xo-culture"><p>企业文化</p><h1>东元集团</h1><ul><li>企业使命</li><li>企业价值观</li><li>企业服务理念</li></ul></div></section><div class="xo-content"><section class="xo-announcements" id="announcements"><header><h2>置顶公告</h2><p>东元集团</p></header><div class="xo-announcement-list">${[1,2,3,4].map(n=>`<details><summary><span>0${n}</span><h3>公告标题待补充</h3></summary><div class="xo-announcement-copy"><p>公告正文占位 · 0${n}</p><p>发布日期、摘要及公告内容待补充。</p></div></details>`).join('')}</div></section><section class="xo-news" id="news"><header><h2>品牌资讯</h2></header><div class="xo-news-viewport" tabindex="0" aria-label="品牌资讯，使用左右方向键或滑动浏览">${[0,1,2].map(group).join('')}</div></section><section class="xo-join" id="join" aria-label="加入寻艾与合作">${titles.map((title,i)=>`<a class="xo-join-card route-link" href="#/about/${paths[i]}">${img(photos[i],title)}<h2>${title}</h2></a>`).join('')}</section></div></div>`;
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
   const viewport=root.querySelector('.xo-news-viewport'),reduce=matchMedia('(prefers-reduced-motion:reduce)');
   const clone=viewport.firstElementChild.cloneNode(true);clone.setAttribute('aria-hidden','true');clone.querySelectorAll('a').forEach(a=>a.tabIndex=-1);viewport.append(clone);
   let frame=0,last=0,remainder=0,interacting=false,until=0,inView=false;
   const visibility=new IntersectionObserver(([entry])=>{inView=entry.isIntersecting});visibility.observe(viewport);
   const step=()=>viewport.children[1].offsetLeft-viewport.children[0].offsetLeft;
   const draw=time=>{
    const width=step(),cycle=width*3;
    if(inView&&!interacting&&!reduce.matches&&!document.hidden&&time>until&&last){
     remainder+=Math.min(time-last,40)*.022;
     const pixels=Math.floor(remainder);viewport.scrollLeft+=pixels;remainder-=pixels;
    }
    if(viewport.scrollLeft>=cycle)viewport.scrollLeft-=cycle;
    last=time;frame=requestAnimationFrame(draw);
   };
   const move=direction=>{until=performance.now()+5000;const width=step();let target=Math.round(viewport.scrollLeft/width)+direction;if(target<0){viewport.scrollLeft=width*3;target=2}viewport.scrollTo({left:target*width,behavior:reduce.matches?'instant':'smooth'})};
   viewport.addEventListener('mouseenter',()=>interacting=true);viewport.addEventListener('mouseleave',()=>interacting=false);
   viewport.addEventListener('focusin',()=>interacting=true);viewport.addEventListener('focusout',()=>interacting=false);
   let drag=null,moved=false;
   viewport.addEventListener('click',event=>{if(moved){event.preventDefault();moved=false}},true);
   viewport.addEventListener('pointerdown',event=>{
    until=performance.now()+6000;
    if(event.pointerType==='mouse'){moved=false;drag={x:event.clientX,left:viewport.scrollLeft}}
   });
   viewport.addEventListener('pointermove',event=>{if(drag){if(Math.abs(drag.x-event.clientX)>6){moved=true;viewport.setPointerCapture(event.pointerId)}viewport.scrollLeft=drag.left+drag.x-event.clientX}});
   const release=()=>{drag=null;until=performance.now()+1200};
   viewport.addEventListener('pointerup',release);viewport.addEventListener('pointercancel',release);
   viewport.addEventListener('wheel',event=>{
    if(Math.abs(event.deltaX)>Math.abs(event.deltaY))return;
    const next=viewport.scrollLeft+event.deltaY,max=viewport.scrollWidth-viewport.clientWidth;
    if(next>0&&next<max){event.preventDefault();viewport.scrollLeft=next;until=performance.now()+1600}
   },{passive:false});
   viewport.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();move(event.key==='ArrowRight'?1:-1)}});
   frame=requestAnimationFrame(draw);cleanup=()=>{cancelAnimationFrame(frame);visibility.disconnect()};
   if(page==='/about/news'||page==='/about/join')requestAnimationFrame(()=>root.querySelector(page.endsWith('news')?'#news':'#join').scrollIntoView());
  }
 };
})();
