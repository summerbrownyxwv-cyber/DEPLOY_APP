/* Brand overview reconstructed from Figma 216:286. Shared shell stays outside. */
(() => {
  const base='../../assets/figma-brand-v2/';
  const image=(name,alt,extra='')=>`<img src="${base}${name}.png" alt="${alt}" width="1440" height="960" ${extra||'loading="lazy"'}>`;
  const icon=name=>name==='imgPlus'?`<svg class="xf-icon" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14"/><path class="xf-plus-vertical" d="M12 5v14"/></svg>`:`<img class="xf-icon" src="${base}${name}.svg" width="24" height="24" alt="">`;
  const stages=[
    ['上游','掌握原材品质','imgDsc13822','imgDji04701','我们的品质','道地','大别山南麓<br>北纬30度的自然馈赠','《本草纲目》记载:「自成化以来，则以蕲州者胜，用充方物，天下重之，谓之蕲艾。」蕲艾之所以为艾草之王，得益于得天独厚的气候条件。北纬30度穿过大别山南麓，留下了骄阳沃土，为艾草的生长提供了最佳环境。寻艾坚持选用道地蕲艾，并恪守天时，于每年端午前后采收第一茬。此时艾草内挥发油、总黄酮和鞣酸含量更为充沛，方得以将这份自然馈赠，转化为每一缕艾灸中的温暖体验。'],
    ['中游','务实研发与生产','research-replacement','imgRectangle5','我们的规模','求新','以现代科技<br>激活传统艾草文化','配备国际顶尖品牌分析设备，可全面满足艾草产品开发工艺研究，质量标准研究及质量检测跟踪和微生物技术研究等多方面的深度探索实践。采用目前国内顶级的 InPlant 自动化智能自控系统，5实现精准投料、沸腾、提取、浓缩、冷却、收集、排渣全自动流程作业，从而能获得更天然、纯净、品质更加稳定的艾草精华。'],
    ['下游','运营服务与连锁','imgRectangle3','imgRectangle6','我们的服务','寻艾','革新传统艾灸服务','以数据驱动基于用户关系经营的全渠道经营企业，创立商品+服务+社交模式，以艾灸师服务模式替代传统卖货模式，并在已经建立了育种、种植、生产、研发、线上APP自有小程序、社群、线下标准化数字化门店一体的全渠道前提下，提供一站式艾灸养生产品、艾灸调理服务以及养生交互个性化服务。寻艾以用户为中心，深耕垂直人群，致力于打造重度会员模式下的单客经济模型，努力成为中国艾灸行业的万店榜首，全球艾灸首选服务商。']
  ];
  const businesses=()=>`<section class="xf-section" id="business"><header class="xf-heading"><h2>新商业范式</h2></header><div class="xf-business" data-business><div class="xf-covers">${stages.map(([title,sub,cover],i)=>`<button type="button" data-stage="${i}" aria-expanded="false" aria-controls="xf-stage-${i}">${image(cover,sub)}<span><strong>${title}</strong><span>${sub}</span></span></button>`).join('')}</div><div class="xf-detail-viewport" hidden><div class="xf-detail-track">${stages.map(([title,sub,cover,photo,label,heading,tag,copy],i)=>`<article id="xf-stage-${i}" class="xf-stage" inert><button type="button" class="xf-stage-cover" data-stage-close aria-label="收起${title}详情" aria-expanded="true">${image(cover,sub)}<span><strong>${title}</strong><span>${sub}</span></span></button><div class="xf-stage-content">${image(photo,tag.replaceAll('<br>','，'))}<h3>${label}</h3>${i===0?`<img class="xf-origin" src="${base}imgGroup5.svg" alt="蕲艾产区示意" width="377" height="342">`:''}<div class="xf-stage-copy"><h4>${heading}</h4><p>${tag}</p><p>${copy}</p></div></div></article>`).join('')}</div></div></div></section>`;
  const introduction=()=>`<section class="xf-section xf-intro" id="introduction"><div class="xf-intro-copy"><div><p>寻艾艾灸馆·让艾灸更简单</p><h2>「东元集团」旗下终端品牌<br>革新传统艾灸服务</h2><p class="xf-muted">以客为尺，科技为路，匠造品质艾灸体验，<br>艾草文化的现代转译者，品质艾灸的传播践行者。</p></div><div class="xf-principles">${[['品牌愿景','成为全球艾灸首选服务商'],['品牌价值观','客户第一，技术创造价值，服务门店，协作共赢'],['品牌战略','数字化、平台化、内容化、标准化、产品化、透明化'],['品牌slogan','艾有好状态']].map(([a,b],i)=>`<details class="xf-principle"><summary>${a}</summary><p>${b}</p></details>`).join('')}</div></div><figure>${image('imgE4A00331','寻艾艾灸服务空间')}</figure></section>`;
  const timeline=history=>`<section class="xf-section xf-history" id="history"><header class="xf-heading"><div><h2>企业历程</h2><p>让积累，成为下一步的基础。</p></div></header><div class="xf-years" aria-label="企业发展年份">${Array.from({length:11},(_,i)=>String(2015+i)).map(year=>{const index=history.findIndex(item=>item[0]===year);return `<button type="button" data-year="${index}" ${index<0?'disabled title="设计稿未提供该年事件"':''} aria-pressed="${index===0}">${year}</button>`;}).join('')}</div><div class="xf-history-viewport"><div class="xf-history-track">${history.map(([year,,copy],i)=>`<button class="xf-history-card ${i===0?'is-active':''}" type="button" data-history="${i}" aria-pressed="${i===0}"><span class="xf-history-visual">${i===0?image('imgKhp016632','2015年艾灸器1.0'):`<span class="xf-history-placeholder">${year} 年图片待补充</span>`}</span><span class="xf-history-copy"><time>${year}</time><span>${copy}</span></span></button>`).join('')}</div></div></section>`;
  const group=()=>`<section class="xf-section xf-group"><h2>东元集团</h2><p class="xf-group-sub">寻艾X艾艾贴</p><div class="xf-group-grid"><figure>${image('imgRectangle','寻艾艾灸馆品牌标识')}<figcaption>「东元集团」旗下终端品牌 革新传统艾灸服务</figcaption></figure><figure><figcaption>「东元集团」旗下自有供应链品牌<br>艾灸行业十年深度耕耘</figcaption>${image('imgRectangle1','艾艾贴品牌')}</figure></div></section>`;
  const products=()=>`<section class="xf-section" id="products"><header class="xf-heading"><h2>明星产品</h2><p>资质、荣誉与社会责任。</p></header><div class="xf-subheading"><h3>艾艾贴</h3><a href="https://www.aiaitie.com" target="_blank" rel="noopener noreferrer">查看所有${icon('imgArrowNarrowUpRight')}</a></div><div class="xf-products">${[['imgFrame68','温系列'],['imgFrame21','燃系列'],['imgFrame22','艾灸器'],['imgFrame71','精华帖'],['imgFrame70','萃系列'],['imgFrame69','植系列']].map(([img,title])=>`<figure>${image(img,title)}<figcaption>${title}</figcaption></figure>`).join('')}</div></section>`;
  const terminal=()=>`<section class="xf-section" id="stores"><header class="xf-heading"><h2>终端服务</h2><p>艾灸养生，<br>连接日常。</p></header><div class="xf-subheading"><h3>寻艾</h3><a class="route-link" href="#/stores/standard">查看所有${icon('imgArrowNarrowUpRight')}</a></div><div class="xf-terminal"><a class="route-link" href="#/stores/black-gold">${image('imgFrame72','寻艾艾灸馆黑金店')}<p class="xf-muted">寻艾艾灸馆黑金店</p><p>寻艾以艾草产业为基础，将产品、线下服务与数字化能力连接起来。从原材品质到到店体验，为长期经营建立可持续的服务体系。</p></a><figure>${image('imgFrame73','服务场景')}<figcaption><span>服务场景</span>到店体验与居家养护</figcaption></figure><figure>${image('imgFrame74','产品销售')}<figcaption><span>产品销售</span>从艾草育种到终端服务</figcaption></figure></div></section>`;
  const honors=evidence=>`<section class="xf-section" id="recognition"><header class="xf-heading"><div><h2>企业荣誉</h2><p>资质、荣誉与社会责任。</p></div></header>${evidence.map(([category,items],i)=>`<section class="xf-honor"><h3><span>0${i+1}</span>${category}</h3><div>${[...items].sort((a,b)=>{const key=date=>{const n=date.match(/\d+/g);return n?Number(n[0])*10000+Number(n[1]||1)*100+Number(n[2]||1):Infinity};return key(a[2])-key(b[2])}).map(([title,detail,date,id],n)=>`<details class="xf-certificate"><summary><time>${date||'日期待核实'}</time><span>${title}</span>${icon('imgPlus')}</summary><div><p>${detail}</p>${id?`<a href="../../assets/02-brand-detail/02-brand-part2-08-${id}.webp" target="_blank" rel="noopener noreferrer"><img src="../../assets/02-brand-detail/02-brand-part2-08-${id}.webp" alt="${title}原件" width="640" height="450" loading="lazy"></a>`:'<p>原件待补充</p>'}</div></details>`).join('')}</div></section>`).join('')}</section>`;
  window.XunAiFigmaBrand={
    render(evidence){
      const events={2015:'售出第一盒艾灸器1.0；自此成为品牌纪念',2016:'在艾都蕲春成立生产基地',2017:'艾灸器2.0正式发布',2019:'研发、生产、仓储、物流一体化新园区正式落成'};
      const history=Array.from({length:11},(_,i)=>[String(2015+i),'',events[2015+i]||'历程内容待补充']);
      const source01=evidence[0][1];
      const first=[source01[0],source01[3],source01[2],source01[1],source01[5],source01[4]].map(item=>[...item]);
      first[0][0]='高兴技术企业';
      ['2019年12月','2020年9月','2021年8月','2021年8月','2023年1月','2024年7月'].forEach((date,i)=>first[i][2]=date);
      return `<div class="xf-brand"><section class="xf-hero" data-immersive-hero>${image('imgDji04701','艾草种植影像','fetchpriority="high"')}<div class="xf-hero-copy"><img src="${base}img1.svg" alt="寻艾艾灸馆" width="216" height="78"><h1>与时代共鸣的养生智慧</h1><p>艾灸，这缕穿越千年的东方温热，正以其温和、深入且顺应自然的独特魅力，成为现代人对抗疲劳、恢复能量、重获身心平衡的理想之选。它不再只是一项传统技艺，更是一种与时代共鸣的智慧生活方式，市场前景广阔而深远。</p></div></section>${introduction()}${businesses()}<div class="xf-dark">${timeline(history)}${group()}</div>${products()}${terminal()}${honors([['权威资质',first],...evidence.slice(1)])}</div>`;
    },
    mount(main){
      if(!main.querySelector('.xf-brand'))return;
      const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
      const business=main.querySelector('[data-business]'),covers=business.querySelector('.xf-covers'),viewport=business.querySelector('.xf-detail-viewport'),track=business.querySelector('.xf-detail-track');
      let active=-1,closing=null;
      const select=index=>{
        closing?.cancel();closing=null;const opening=viewport.hidden;
        active=Math.max(0,Math.min(stages.length-1,index));viewport.hidden=false;covers.inert=true;business.classList.add('is-expanded');
        track.style.transition=opening?'none':'';track.style.transform=`translateX(${-active*100}%)`;
        [...track.children].forEach((slide,i)=>slide.inert=i!==active);
        covers.querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-expanded',String(i===active)));
        const slide=track.children[active];slide.querySelector('[data-stage-close]').focus({preventScroll:true});
        if(opening&&!reduced()){
          const columns=matchMedia('(max-width:767px)').matches;
          slide.animate(columns?[{gridTemplateRows:'180px 1fr'},{gridTemplateRows:'160px 1fr'}]:[{gridTemplateColumns:'1fr 2fr'},{gridTemplateColumns:'.85fr 2.15fr'}],{duration:550,easing:'cubic-bezier(.22,1,.36,1)'});
          slide.querySelector('.xf-stage-cover img').animate([{opacity:1},{opacity:.78}],{duration:550,fill:'backwards'});
          const label=slide.querySelector('.xf-stage-cover>span');
          label.getAnimations().forEach(animation=>animation.cancel());
          label.animate([{transform:'translateY(-64px) scale(1.12)',opacity:.7},{transform:'none',opacity:1}],{duration:550,easing:'cubic-bezier(.22,1,.36,1)'});
        }
      };
      covers.querySelectorAll('[data-stage]').forEach((button,i)=>button.addEventListener('click',()=>select(i)));
      const close=()=>{
        closing?.cancel();business.classList.remove('is-expanded');const finish=()=>{viewport.hidden=true;business.classList.remove('is-expanded');covers.inert=false;covers.querySelectorAll('button').forEach(button=>button.setAttribute('aria-expanded','false'));covers.children[active]?.focus({preventScroll:true});};
        if(reduced()){finish();return;}
        closing=viewport.animate([{opacity:1,transform:'translateX(0)'},{opacity:0,transform:'translateX(-8px)'}],{duration:280,easing:'ease-out'});closing.onfinish=finish;
      };
      business.querySelectorAll('[data-stage-close]').forEach(button=>button.addEventListener('click',close));
      business.addEventListener('keydown',event=>{if(active<0||viewport.hidden)return;if(event.key==='Escape'){close();event.preventDefault();}if(['ArrowLeft','ArrowRight'].includes(event.key)){select(active+(event.key==='ArrowRight'?1:-1));event.preventDefault();}});
      let pointer=null,swiped=false;
      viewport.addEventListener('pointerdown',event=>{if(!event.isPrimary||event.button!==0)return;pointer=[event.clientX,event.clientY];swiped=false;});
      viewport.addEventListener('pointerup',event=>{if(!pointer)return;const dx=event.clientX-pointer[0],dy=event.clientY-pointer[1];pointer=null;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.3){swiped=true;select(active+(dx>0?1:-1));}});
      viewport.addEventListener('pointercancel',()=>{pointer=null;});
      viewport.addEventListener('click',event=>{if(swiped){event.preventDefault();event.stopPropagation();swiped=false;}},true);
      viewport.addEventListener('dragstart',event=>event.preventDefault());
      const cards=[...main.querySelectorAll('[data-history]')],years=[...main.querySelectorAll('[data-year]')],historyTrack=main.querySelector('.xf-history-track');
      let selectedYear=0;
      const positionYear=()=>{const ratio=matchMedia('(max-width:767px)').matches?.46:.19;historyTrack.style.transform=`translateX(-${selectedYear*(historyTrack.clientWidth*ratio+20)}px)`;};
      const setYear=index=>{selectedYear=index;cards.forEach((card,i)=>{card.classList.toggle('is-active',i===index);card.setAttribute('aria-pressed',String(i===index));});years.forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.year)===index)));positionYear();};
      years.filter(button=>!button.disabled).forEach(button=>button.addEventListener('click',()=>setYear(Number(button.dataset.year))));cards.forEach((card,i)=>card.addEventListener('click',()=>setYear(i)));
      historyTrack.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight'].includes(event.key))return;event.preventDefault();const i=cards.findIndex(card=>card.classList.contains('is-active'));const next=Math.max(0,Math.min(cards.length-1,i+(event.key==='ArrowRight'?1:-1)));setYear(next);cards[next].focus({preventScroll:true});});
      let historyTouch=null;historyTrack.addEventListener('touchstart',event=>{historyTouch=[event.touches[0].clientX,event.touches[0].clientY];},{passive:true});historyTrack.addEventListener('touchend',event=>{if(!historyTouch)return;const dx=event.changedTouches[0].clientX-historyTouch[0],dy=event.changedTouches[0].clientY-historyTouch[1];if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy))setYear(Math.max(0,Math.min(cards.length-1,selectedYear+(dx<0?1:-1))));historyTouch=null;},{passive:true});
      const resize=new ResizeObserver(positionYear);resize.observe(historyTrack);const dispose=()=>{resize.disconnect();window.removeEventListener('hashchange',dispose);};window.addEventListener('hashchange',dispose);
    }
  };
})();
