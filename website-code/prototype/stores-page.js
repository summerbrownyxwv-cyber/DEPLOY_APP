/* Figma 5:3; shared shell and brand fonts are retained. */
window.XunAiStores=(()=>{
 const base='../../assets/figma-stores-v1/';
 const image=(file,alt,extra='')=>`<img src="${base}${file}.png" alt="${alt}" width="1440" height="960" ${extra||'loading="lazy"'}>`;
 const arrow=()=>`<img src="${base}imgArrowNarrowUpRight.svg" width="20" height="20" alt="">`;
 const pending=label=>`<p class="xs-pending">${label}：【待补充】</p>`;
 const media=(file,alt)=>`<img src="../../assets/figma-stores-v2/${file}.png" alt="${alt}" loading="lazy" width="900" height="1200">`;
 const strengths=[['自研项目','独创五行配方<br>双效灸膏+黄金艾绒','comp-imgRectangle2'],['科技赋能','AI中医检测系统','comp-imgImg62611'],['独家研发','融合蕲春艾灸古法技艺','comp-imgRectangle3'],['艾灸空间','以现代人的审美需求建立','comp-imgRectangle5']];
 const strengthCard=(i,large=false)=>`<button type="button" class="xs-strength ${large?'is-large':''}" data-strength="${i}" aria-label="${large?'当前展示':'放大查看'}${strengths[i][0]}"><span class="xs-strength-photo">${media(strengths[i][2],strengths[i][0])}</span><span class="xs-strength-caption"><strong>${strengths[i][0]}</strong><span>${strengths[i][1]}</span></span></button>`;
 const competence=()=>`<section class="xs-section xs-competence">${heading('寻艾竞争力','四大核心领先 × 一站式解决方案<br>打造可持续的新中式艾草养生生活方式')}<div class="xs-strength-layout"><div class="xs-strength-thumbs">${[0,1,2].map(i=>strengthCard(i)).join('')}</div><div class="xs-strength-feature" aria-live="polite">${strengthCard(3,true)}<p>打破传统的空间体验，对艾灸文化进行重新演绎。在都市语境中重构传统艾灸的疗愈智慧，以现代人的审美需求建立有温度的艾灸空间。</p></div></div></section>`;
 const booklet=standard=>{
  const type=standard?'标准店':'黑金店',prefix=standard?'standard':'black-gold';
  const photo=(file,label)=>`<img src="../../assets/figma-booklets-v3/${prefix}-img${file}.png" alt="${type}${label}" loading="${file==='Rectangle1'?'eager':'lazy'}" width="900" height="1200">`;
  const productLink=(content,label)=>`<a class="xs-product-link" href="https://www.aiaitie.com/" target="_blank" rel="noopener noreferrer" aria-label="${label}（前往艾艾贴官网，新窗口打开）">${content}</a>`;
  const stories=standard?[['标准化建店','Rectangle8','Rectangle11','Rectangle5'],['标准卡项','Rectangle12','Rectangle13','Rectangle6']]:[['茶室','Rectangle8','Rectangle11','Rectangle8'],['AI中医师','I9A42','Rectangle13','Rectangle6']];
  return `<header class="xs-booklet-heading"><h1>寻艾艾灸馆 · ${type}</h1><a class="route-link" href="#/stores/${prefix}">返回店型概览</a></header>
  <div class="xs-booklet-lead"><figure>${photo('Rectangle1','空间')}</figure><div class="xs-booklet-lead-copy"><p>2025年，寻艾将这套数智化艾灸馆的成熟模式推向加盟市场——以全数智化管理系统，贯通选址筹建、运营指导、营销推广、招聘培训、优质产品供应全链路。</p>${pending('标准化优势说明')}<div><h2>标准化建店</h2><table><thead><tr><th scope="col">项目</th><th scope="col">标准</th><th scope="col">说明</th></tr></thead><tbody>${['户外装修','接待区','坐灸区','独立艾灸房'].map(item=>`<tr><td>待补充</td><td>${item}</td><td>标准化建店</td></tr>`).join('')}</tbody></table></div></div></div>
  <section class="xs-booklet-products"><h2>自研产品</h2><div>${(standard?[9,10,15,16]:[9,10,12,15]).map((n,i)=>productLink(photo('Rectangle'+n,'自研产品展示'+(i+1)),'查看产品详情')).join('')}</div><p class="xs-products-more">${productLink('查看所有 '+arrow(),'查看所有产品')}</p></section>
  ${stories.map(([title,square,strip,large],i)=>`<section class="xs-booklet-story ${(standard?i===0:i===1)?'is-reverse':''}"><div class="xs-booklet-story-copy"><div class="xs-booklet-square">${photo(square,title+'细节')}</div><h2>${title}</h2>${!standard&&i===0?'<p>商业会晤</p>':''}${pending(title+'介绍')}<div class="xs-booklet-strip">${photo(strip,title+'展示')}</div>${pending('使用与体验说明')}</div><figure>${photo(large,title+'空间')}</figure></section>`).join('')}
  <section class="xs-booklet-ending ${standard?'is-reverse':''}"><div>${photo('Rectangle7',standard?'产品展示':'产品陈列')}<h2>${standard?'【场景介绍待补充】':'产品陈列'}</h2>${pending('场景介绍')}</div><figure>${photo('Rectangle14',standard?'门店荣誉展示':'产品陈列空间')}</figure></section>`;
 };
 const services=[['随心·颈/腰/关节灸','通络'],['自在·古法罐灸','调和'],['深调·古法蕴体灸','固本'],['乳腺养护灸','散郁'],['轻养·头部放松灸','解压'],['成人艾草精华泡浴','暖透'],['全息刮痧·肩/腰','放松'],['坐灸·泡脚','循环'],['古法·肩颈舒缓灸','舒筋'],['草本舒缓·关节','轻盈']];
 const nav=page=>`<nav class="xs-nav" aria-label="店型与服务"><div><span>店型</span><div><a class="route-link" href="#/stores/black-gold/detail" ${page==='/stores/black-gold'?'aria-current="page"':''}>黑金店</a><a class="route-link" href="#/stores/standard/detail" ${page==='/stores/standard'?'aria-current="page"':''}>标准店</a></div></div><a class="route-link" href="#/stores/services" ${page==='/stores/services'?'aria-current="page"':''}>服务卡项</a></nav>`;
 const serviceInfo=[
 ['王牌项目','三选一',['肩颈舒缓：找回精神头','腰部舒健：助腰部恢复轻松温暖好状态','关节养护：关节健康，“行动力”才能加倍'],['智能经络仪通络','三年陈艾小罐灸','艾灸器施灸'],50,'198','1680'],
 ['王牌项目','暖 / 润',['古法罐灸·暖：脏腑调理，暖护内在运化，守护代谢平衡','古法罐灸·润：润泽内火，呵护内在清爽小世界'],['手法放松','智能经络仪通络','黄金艾绒罐灸'],60,'298','2680'],
 ['明星项目','暖 / 润',['古法蕴体灸·暖：补充阳气，找回平衡','古法蕴体灸·润：安抚烦躁、上火，呵护上下肢循环'],['高倍浓缩艾草精华泡浴液','手法放松','智能经络仪通络','黄金艾绒温灸','封穴醒汗','头部放松'],80,'368','3380'],
 ['女性项目','',['女性特调方案，疏解压力，不让心里的“千千结”陪你过夜'],['背部手法放松','背部经络疏通','乳腺经络疏通','古法艾灸箱艾灸'],60,'298','2380'],
 ['服务项目','',['1秒即热，5秒灸感直达皮下','艾灸效果看得见'],['头部放松手法','三年陈艾小罐灸'],30,'168','1280'],
 ['服务项目','',['呵护肌肤健康好状态','以温暖之力帮助身心平衡'],['精油香薰','泡浴三进三出','醒神收汗','颂钵唤醒'],60,'168','1280'],
 ['服务项目','',['20分钟轻养生，释放肩、腰压力，帮助赶走疲劳'],['古法开穴','专业手法放松','能量刮痧'],20,'39',''],
 ['服务项目','',['臀足双向调理，暖暖的好植愈'],['蕲艾原液泡脚','蕲艾坐灸'],30,'69.9',''],
 ['服务项目','',['深度放松肩颈'],['肩颈手法','古法艾灸箱艾灸'],40,'168',''],
 ['服务项目','',['天然草本融合专业手法','舒适缓解关节僵硬、肌肉紧张'],['肩膀放松','肩颈仪器疏通','涂抹艾草金油'],20,'68','']
 ];
 const intro=i=>{const [category,variant,benefits,steps,minutes,price,pack]=serviceInfo[i];return `<div class="xs-project-copy"><p class="xs-project-category">${category}</p><h3>${services[i][0]}</h3>${variant?`<p class="xs-project-variant">${variant}</p>`:''}<ul class="xs-project-benefits">${benefits.map(text=>`<li>${text}</li>`).join('')}</ul><div class="xs-project-price"><p><span>${minutes}分钟 / 次</span><strong>${price}元</strong></p>${pack?`<p><span>十次套餐</span><strong>${pack}元</strong></p>`:''}</div><details class="xs-service-steps"><summary>服务流程 <span>${steps.length}项</span></summary><ol>${steps.map(step=>`<li>${step}</li>`).join('')}</ol></details></div>`};

 const serviceSection=(standalone=false)=>`<section class="xs-services-section xs-section" id="services" data-services><header class="xs-service-heading"><${standalone?'h1':'h2'}>服务卡项</${standalone?'h1':'h2'}><p>独家自研项目套组 传承古法<br>高品质艾+服务标准化</p></header><div class="xs-service-layout"><aside class="xs-project"><div id="xs-project-description" aria-live="polite" aria-atomic="true"></div><nav class="xs-service-pager" aria-label="服务卡项翻页"><button type="button" data-service-prev aria-label="上一组服务卡项" disabled>‹</button><span data-service-count aria-live="polite">1 / 3</span><button type="button" data-service-next aria-label="下一组服务卡项">›</button></nav></aside><div class="xs-service-viewport"><div class="xs-service-track">${Array.from({length:3},(_,group)=>`<div class="xs-service-group" ${group?'inert':''} role="group" aria-label="第 ${group+1} 组服务卡项">${services.slice(group*4,group*4+4).map(([title,tag],offset)=>{const i=group*4+offset;return `<button type="button" class="xs-service-card" data-service="${i}" aria-pressed="false" aria-controls="xs-project-description"><span class="xs-card-photo">${image('imgReplaceImageHere',title+'，设计稿服务示意图')}</span><span class="xs-card-label"><span>${title}</span><span>${tag}</span></span></button>`}).join('')}</div>`).join('')}</div></div></div></section>`;
 const heading=(title,sub)=>`<header class="xs-section-heading"><h2>${title}</h2><p>${sub}</p></header>`;
 const locations=()=>`<section class="xs-section" id="locations">${heading('门店信息','城市·店型·汇总')}<div class="xs-location-group"><h3>黑金店</h3><div>${[['深圳','深圳湾寻艾艾灸馆黑金店'],['武汉','武汉寻艾艾灸馆黑金店']].map(([city,name])=>`<details class="site-disclosure"><summary><span class="xs-city">${city}</span><span>门店名称：${name}</span><img src="${base}imgGroup20.svg" width="18" height="18" alt=""></summary>${pending('地址、营业时间及联系方式')}</details>`).join('')}</div></div><div class="xs-location-group"><h3>标准店</h3><div>${['深圳','武汉'].map(city=>`<details class="site-disclosure"><summary><span class="xs-city">${city}</span><span>门店名称：【待补充】</span><img src="${base}imgGroup20.svg" width="18" height="18" alt=""></summary>${pending('地址、营业时间及联系方式')}</details>`).join('')}</div></div></section>`;
 const comparison=()=>`<section class="xs-section" id="types">${heading('店型对比','寻艾艾灸馆<br>黑金店 · 标准店')}${[['黑金店','imgE4A99442'],['标准店','imgRectangle']].map(([type,file],i)=>`<article class="xs-type ${i?'xs-type-reverse':''}"><div class="xs-type-copy"><h3>寻艾艾灸馆<br>${type}</h3>${pending(type+'定位与差异说明')}<a class="xs-booklet-open route-link" href="#/stores/${i?'standard':'black-gold'}/detail">查看详情 ${arrow()}</a></div><figure>${image(file,type+(i?'设计参考':'空间'))}${i?'<figcaption>标准店设计参考</figcaption>':''}</figure></article>`).join('')}</section>`;
 return {
  render(page){
   if(page.endsWith('/detail'))return `<div class="xs-page"><section class="xs-section xs-booklet">${booklet(page==='/stores/standard/detail')}</section></div>`;
   if(page==='/stores/services')return `<div class="xs-page xs-services">${nav(page)}${serviceSection(true)}</div>`;
   return `<div class="xs-page"><section class="xs-hero"><div class="xs-hero-media"><video class="opening-film" muted playsinline loop autoplay preload="metadata" poster="../../assets/figma-stores-v1/imgE4A99442.png" aria-label="寻艾黑金店空间影像"><source src="../../assets/03-Xun Ai Moxibustion Clinic-detail/黑金店体验流程.mp4" type="video/mp4"></video></div><div class="xs-hero-content"><p>了解标准店、黑金店与服务卡项。</p><h1>寻艾艾灸馆</h1>${nav(page)}<div class="xs-hero-intro"><span>体验·轻养·服务</span><p>寻艾是以线下艾灸馆为基础业态的终端品牌。依托集团强大的供应链，将蕲春道地艾草与艾艾贴产品带进终端门店，结合自研体质检测AI与蕲春非遗灸法，革新传统艾灸服务，让顾客的艾灸体验焕然一新。</p></div></div></section>${competence()}${locations()}${comparison()}${serviceSection()}</div>`;
  },
  mount(main){
   window.XunAiReview.mount(main);
   const layout=main.querySelector('.xs-strength-layout');
   if(layout){let active=3;layout.addEventListener('click',event=>{const button=event.target.closest('[data-strength]');if(!button)return;const index=Number(button.dataset.strength);if(index===active)return;const from=button.querySelector('img').getBoundingClientRect();const old=active;active=index;layout.querySelector('.xs-strength-thumbs').innerHTML=[0,1,2,3].filter(i=>i!==active).map(i=>strengthCard(i)).join('');const feature=layout.querySelector('.xs-strength-feature');feature.innerHTML=strengthCard(active,true)+(active===3?'<p>打破传统的空间体验，对艾灸文化进行重新演绎。在都市语境中重构传统艾灸的疗愈智慧，以现代人的审美需求建立有温度的艾灸空间。</p>':pending('详细介绍'));const img=feature.querySelector('img'),to=img.getBoundingClientRect();if(!matchMedia('(prefers-reduced-motion: reduce)').matches)img.animate([{transform:`translate(${from.left-to.left}px,${from.top-to.top}px) scale(${from.width/to.width},${from.height/to.height})`},{transform:'none'}],{duration:550,easing:'cubic-bezier(.22,1,.36,1)'});layout.querySelector(`[data-strength="${old}"]`).focus({preventScroll:true});});}
   const root=main.querySelector('[data-services]');if(!root)return;
   const track=root.querySelector('.xs-service-track'),groups=[...track.children],cards=[...root.querySelectorAll('[data-service]')],copy=root.querySelector('#xs-project-description'),prev=root.querySelector('[data-service-prev]'),next=root.querySelector('[data-service-next]');
   const reduce=matchMedia('(prefers-reduced-motion: reduce)');let selected=-1,page=0;
   const select=(index,focus=false,reveal=true)=>{
    index=Math.max(0,Math.min(services.length-1,index));const old=selected;selected=reveal?index:-1;page=Math.floor(index/4);
    track.style.transform=`translateX(-${page*100}%)`;groups.forEach((group,i)=>group.inert=i!==page);
    cards.forEach((card,i)=>card.setAttribute('aria-pressed',String(i===selected)));
    copy.innerHTML=reveal?intro(index):'';prev.disabled=page===0;next.disabled=page===groups.length-1;
    root.querySelector('[data-service-count]').textContent=`${page+1} / ${groups.length}`;
    copy.getAnimations().forEach(animation=>animation.cancel());
    if(reveal&&old!==index&&!reduce.matches)copy.animate([{opacity:.3,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:550,easing:'cubic-bezier(.22,1,.36,1)'});
    if(focus)cards[index].focus({preventScroll:true});
   };
   cards.forEach((card,i)=>card.addEventListener('click',()=>{select(i);if(innerWidth<768)copy.scrollIntoView({block:'center',behavior:reduce.matches?'auto':'smooth'})}));
   prev.addEventListener('click',()=>select((page-1)*4,false,false));next.addEventListener('click',()=>select((page+1)*4,false,false));
   track.addEventListener('keydown',event=>{const move={ArrowRight:1,ArrowLeft:-1,ArrowDown:2,ArrowUp:-2}[event.key];if(move){event.preventDefault();select(Number(event.target.closest('[data-service]').dataset.service)+move,true,false)}});
   let point=null,swiped=false;const viewport=root.querySelector('.xs-service-viewport');
   viewport.addEventListener('pointerdown',event=>{if(event.isPrimary&&event.button===0){point=[event.clientX,event.clientY];swiped=false}});
   viewport.addEventListener('pointerup',event=>{if(!point)return;const dx=event.clientX-point[0],dy=event.clientY-point[1];point=null;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.3){swiped=true;select(Math.max(0,Math.min(groups.length-1,page+(dx<0?1:-1)))*4,false,false)}});
   viewport.addEventListener('pointercancel',()=>point=null);
   viewport.addEventListener('click',event=>{if(swiped){event.preventDefault();event.stopPropagation();swiped=false}},true);
   viewport.addEventListener('dragstart',event=>event.preventDefault());
  }
 };
})();
