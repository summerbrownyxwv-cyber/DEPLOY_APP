/* Explicit content from content/02-Brand.md. Source boards are not webpage images. */
(() => {
  const root = '../../assets/02-brand-detail/';
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const missing = label => `<p class="xb-missing">${esc(label)}：【待补充】</p>`;
  const history = [
    ['2015','7月28日','售出第一盒艾灸器1.0；自此成为品牌纪念日'],
    ['2016','','在艾都蕲春成立生产基地'],
    ['2017','','艾灸器2.0正式发布'],
    ['2019','','研发、生产、仓储、物流一体化新园区正式落成'],
    ['2020','','与中国中医科学院中药研究所签约启动艾草种苗及基因稳定性研究'],
    ['2021','','艾草行业领先的智能化提取产线正式投产'],
    ['2022','','与蕲春政府及行业协会共同成立蕲艾产业技术研究院，为行业赋能'],
    ['2023','','艾草新品种「蕲优一号」培育并注册成功'],
    ['2024','','获得全国首张《品质中药材 艾叶》认证证书'],
    ['2025','','寻艾升级，盈利跑通，快速复制，启动千城万店']
  ];
  const chain = [
    ['育种研发','Breeding and Research Development','与中国中医科学院联合培育“蕲优1号”行业唯一自培育蕲艾种苗'],
    ['道地种植','Origin Standard Cultivation','湖北蕲春·北纬30°黄金产区，近千亩无公害基地，GAP标准化种植'],
    ['AI数字化研发','AI Digital Research Development','AI+中医数字化，自研中医AI大模型与智能辨识系统，融合四诊、穴位打造全链路智慧健康解决方案。'],
    ['陈化仓储','Aging and Professional Warehousing','三年以上科学陈化，专用保鲜仓+陈化仓，去燥烈、提艾能，最终达到艾绒色泽金黄、软细如棉的状态'],
    ['深加工提取线','Deep Processing and Extraction','配置精油自动化提取线10条，年产出精油10吨，年产出纯露1080吨，艾草黄酮糊膏810吨'],
    ['学校培训','Institutional Professional Training','蕲春县人社局定点培训机构、专业“艾灸疗法”培训学校，开展“保健灸疗”技能培训，颁发国家认可职业技能证书'],
    ['终端服务','Comprehensive Terminal Service','以艾灸馆沉浸式服务为核心，以燃 / 温 / 萃 / 植系列产品为延伸，打通到店体验 + 居家养护双场景']
  ];
  const evidence = [
    ['权威资质',[
      ['高新技术企业','湖北省科学技术厅 / 湖北省财政厅 / 湖北省税务局','2019年12月','01-01'],
      ['国家现代农业蕲艾产业园示范企业','湖北艾艾贴健康科技有限公司 · 湖北省农业农村厅','2021年8月','01-02'],
      ['Certificate of Compliance','Hubei Aiaitie Health Technology Co., Ltd. · Moxibustion Device · ECM','01 February 2021','01-03'],
      ['Certification of Registration','Hubei Aiaitie Health Technology Co., Ltd. · Owner / Operator Number: 100916338','2020','01-04'],
      ['品质中药材 艾叶 产品认证证书','湖北艾艾贴健康科技有限公司 · 中质协质量保证中心','2024年07月12日','01-05'],
      ['湖北省中药材新品种鉴定证书','蕲优1号 · 鄂品鉴药2023-003；培育单位：中国中医科学院中药研究所、湖北艾艾贴健康科技有限公司、成都中医药大学','2023年01月06日','01-06']
    ]],
    ['荣誉证书',[
      ['科创新物种','湖北艾艾贴健康科技有限公司 · 湖北省科学技术厅','2021年12月','02-01'],
      ['2021年省级专精特新小巨人企业','湖北省经济和信息化厅办公室','2021年12月','02-02'],
      ['隐形冠军企业','湖北艾艾贴健康科技有限公司 · 湖北省经济和信息化厅办公室','2021年12月','02-03'],
      ['蕲艾最具影响力品牌','艾艾贴 · 蕲春县蕲艾产业协会','2016年12月','02-04']
    ]],
    ['社会责任',[
      ['深圳市慈善会·元梦公益基金','详情：【待补充】','2017年4月',null],
      ['深圳手信','艾艾贴（向阳而生灸贴礼盒）· 深圳前海艾艾贴生物科技有限公司；详情：【待补充】','',null],
      ['2023年全国首届乡村振兴高峰论坛暨成果展 乡村振兴创新引领典型推介','湖北艾艾贴健康科技有限公司 · 中国农业电影电视中心 / 丰饶中国组委会','2023.4.22','03-03'],
      ['2023年度深圳健康产业 消费者信赖品牌','深圳前海艾艾贴生物科技有限公司 · 颁发机构以证书原图为准','2024年3月','03-04'],
      ['2023年度深圳健康产业 慈善楷模','深圳前海艾艾贴生物科技有限公司 · 颁发机构以证书原图为准','2024年3月','03-05']
    ]]
  ];
  // Keep source records above intact; public copy avoids unsupported superlatives and profit promises.
  const historyCopy = (year, event) => year==='2025'?'寻艾品牌升级，推进连锁服务布局':event.replace('行业领先的','').replace('全国首张','');
  const chainCopy = [
    '与中国中医科学院中药研究所开展育种研究，联合培育“蕲优1号”蕲艾种苗。',
    '扎根湖北蕲春，以标准化种植连接艾草原材与品质管理。',
    '将数字化能力用于健康信息与服务辅助，连接到店前后的服务场景。',
    '通过专用仓储与科学陈化，管理艾草原料的储存和加工状态。',
    '配置艾草精油提取产线，连接原料加工与产品开发。',
    '围绕艾灸服务开展技能培训，支持终端服务人员的专业成长。',
    '以艾灸馆服务为核心，连接燃、温、萃、植系列产品与居家养护场景。'
  ];
  const figma = '../../assets/figma-brand/';
  const media = {herb:'imgDji04701',greenhouse:'imgDsc13822','store-space':'imgE4A00331','store-reception':'imgRectangle3','store-detail':'imgE4A202'};
  const photo = (name,alt,cls='',eager=false) => `<img class="xb-photo ${cls}" src="${figma}${media[name] || name}.png" alt="${esc(alt)}" width="1440" height="960" ${eager?'fetchpriority="high"':'loading="lazy"'}>`;
  const intro = () => `<section class="xb-section xb-intro" id="introduction"><div class="xb-intro-copy"><p class="xb-label">寻艾艾灸馆</p><h2>艾灸养生，<br>连接日常。</h2><p>寻艾以艾草产业为基础，将产品、线下服务与数字化能力连接起来。从原材品质到到店体验，为长期经营建立可持续的服务体系。</p><dl class="xb-positioning"><div><dt>产业基础</dt><dd>从艾草育种到终端服务</dd></div><div><dt>服务场景</dt><dd>到店体验与居家养护</dd></div><div><dt>品牌主张</dt><dd>艾草为本，品质为基，服务致远</dd></div></dl></div><figure>${photo('store-space','寻艾黑金店的空间与陈设')}<figcaption>寻艾艾灸馆 · 黑金店空间</figcaption></figure></section>`;
  const stages = [
    ['上游','掌握原材品质','imgDsc13822','imgDji04701','我们的品质','道地，从一株艾草开始。','扎根湖北蕲春，将育种研究、道地种植与原材管理连接起来。品质的起点，是对每一株艾草的认真。'],
    ['中游','务实研发与生产','imgRectangle2','imgRectangle6','我们的规模','以现代科技，连接传统艾草文化。','从原料仓储到深加工提取，以研发与生产承接艾草的应用探索，为产品与终端服务提供产业支持。'],
    ['下游','运营服务与连锁','imgRectangle3','imgRectangle7','我们的服务','寻艾，革新传统艾灸服务。','以艾灸馆为终端，连接产品、服务与日常交流。依托集团供应链与数字化管理，支持门店持续经营。']
  ];
  const business = () => `<section class="xb-section xb-business" id="business"><div class="xb-section-heading"><h2>新商业范式</h2><p>从一株艾草，到一次到店体验。<br>以完整产业连接品质与服务。</p></div><div class="xb-business-images">${stages.map(([title,copy,img],i)=>`<button type="button" data-stage="${i}" aria-expanded="false" aria-controls="business-detail">${photo(img,copy)}<span><strong>${title}</strong><span>${copy}</span><small>探索详情 ＋</small></span></button>`).join('')}</div><div class="xb-business-detail" id="business-detail" hidden><div class="xb-slide-controls"><p>产业与服务</p><button type="button" data-close-business>收起详情 −</button></div><div class="xb-business-track" tabindex="0" aria-label="上中下游详情，可左右滑动">${stages.map(([title,copy,img,detail,label,heading,text],i)=>`<article class="xb-business-slide" aria-label="${title}详情">${photo(detail,copy)}<div><p>${label}</p><h3>${heading}</h3><p>${text}</p><span>0${i+1} / 03</span></div></article>`).join('')}</div></div></section>`;
  const industryFocus = () => `<section class="xb-section xb-industry" id="industry"><div class="xb-section-heading"><h2>一条完整产业</h2><p>从育种研发，到终端服务。<br>七个环节，共同构成寻艾的产业基础。</p></div><ol class="xb-industry-overview">${chain.map(([title],i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><h3>${esc(title)}</h3><p>${chainCopy[i]}</p></li>`).join('')}</ol><details class="xb-disclosure xb-industry-details"><summary>查看完整产业资料<span class="xb-count">7 个环节</span></summary><div class="xb-industry-full">${chain.map(([title,en],i)=>`<article><h3>${title}</h3><p>${chainCopy[i]}</p>${i===4?'<p class="xb-missing">资料记载：精油提取线10条，年产出精油10吨、纯露1080吨、艾草黄酮糊膏810吨。统计时间与现行产能待确认。</p>':''}${i===5?'<p class="xb-missing">培训资质、课程及证书适用范围以相关正式资料为准。</p>':''}</article>`).join('')}<p class="xb-missing">AI 用于健康信息与服务辅助，不提供诊断，不替代专业医疗意见。</p></div></details></section>`;
  const historyFocus = () => `<section class="xb-history" id="history"><div class="xb-section"><div class="xb-section-heading"><h2>企业历程</h2><p>2015 — 2025<br>让积累，成为下一步的基础。</p></div><nav class="xb-year-nav" aria-label="按年份查看企业历程">${history.map(([year],i)=>`<button type="button" data-year="${i}" aria-pressed="${i===0}" aria-controls="history-${year}">${year}</button>`).join('')}</nav><ol class="xb-history-list" tabindex="0" aria-label="企业历程，可左右滑动">${history.map(([year,date,event],i)=>`<li id="history-${year}">${i<6?photo(['imgFrame68','imgFrame21','imgFrame22','imgFrame70','imgFrame71','imgFrame69'][i],`${year}年企业历程资料图片`):`<div class="xb-history-year-art" aria-hidden="true">${year}</div>`}<div><time datetime="${year}">${year}</time>${date?`<p class="xb-date">${date}</p>`:''}<h3>${esc(historyCopy(year,event))}</h3></div></li>`).join('')}</ol><p class="xb-history-source">依据所供品牌历程资料整理；项目主体与详细范围以原始资料为准。</p></div></section>`;
  const storeFocus = () => `<section class="xb-section xb-terminal" id="stores"><div class="xb-terminal-heading"><h2>产业的另一端，<br>是人与人的服务。</h2><p>产品承接居家需求，服务建立到店信任，数字化辅助持续连接。让产业能力在真实门店中被感知。</p><a class="text-link route-link" href="#/stores/standard">了解寻艾艾灸馆</a></div><div><figure>${photo('store-detail','寻艾门店的材质、器物与空间细节')}<figcaption>空间承载服务，细节传递关怀。</figcaption></figure><dl class="xb-terminal-relations"><div><dt>产品</dt><dd>到家承接需求</dd></div><div><dt>服务</dt><dd>到店建立信任</dd></div><div><dt>数字化</dt><dd>辅助信息与服务连接</dd></div></dl></div></section>`;
  const recognitionFocus = () => `<section class="xb-section" id="recognition"><div class="xb-section-heading"><h2>企业实力证明</h2><p>资质、荣誉与社会责任。<br>资料名称与颁发时间常显，原件可展开查看。</p></div><p class="xb-evidence-note">所列资料涉及湖北艾艾贴健康科技有限公司等主体，不等同于对所有寻艾门店或服务的认证；完整范围与有效期以原件为准。</p><div class="xb-evidence-groups">${evidence.map(([category,items])=>`<section class="xb-evidence-group"><h3>${category}<span class="xb-count">${items.length} 项资料</span></h3><div>${items.map(([title,detail,date,id])=>`<details class="xb-disclosure"><summary><span>${esc(title)}</span>${date?`<time>${esc(date)}</time>`:''}</summary><div class="xb-evidence-detail"><p>${esc(detail)}</p>${id?`<a class="xb-certificate-link" href="${root}02-brand-part2-08-${id}.webp" target="_blank" rel="noopener noreferrer"><img loading="lazy" src="${root}02-brand-part2-08-${id}.webp" alt="${esc(title)}证书原件" width="640" height="450"><span>打开原件（新窗口）</span></a>`:missing('独立高清素材')}</div></details>`).join('')}</div></section>`).join('')}</div></section>`;
  const productFocus = () => `<section class="xb-section xb-product" id="products"><div><h2>明星产品</h2><p>从到店体验，延伸至居家养护。</p></div><div><p>产品详情请前往艾艾贴官网查看。</p><a class="text-link" href="https://www.aiaitie.com" target="_blank" rel="noopener noreferrer">前往艾艾贴官网（新窗口）</a><p class="xb-missing">寻艾官网产品展示资料待补充。</p></div></section>`;
  const partnerCTA = () => `<section class="xb-partner-next"><div><h2>了解寻艾，<br>从一次交流开始。</h2><p>加盟条件、总部支持与合作意向，统一进入加盟合作。</p></div><a class="pill-button route-link" href="#/franchise/apply">提交合作意向</a></section>`;
  const focusedNav = () => `<nav class="xb-nav" aria-label="品牌页章节">${[['introduction','品牌介绍'],['business','商业模式'],['industry','产业基础'],['history','企业历程'],['recognition','资质荣誉']].map(([id,label])=>`<a class="route-link" href="#/brand/about/${id}">${label}</a>`).join('')}</nav>`;
  window.XunAiBrand = {
    render(page) {
      if(page === '/brand/about') return window.XunAiFigmaBrand.render(evidence,history);
      if(page === '/brand/history') return `<div class="xb-page xb-high-fidelity"><header class="xb-inner-title"><h1>品牌发展</h1><a class="route-link text-link" href="#/brand/about">返回品牌总览</a></header>${historyFocus(page)}${partnerCTA()}</div>`;
      if(page === '/brand/products') return `<div class="xb-page xb-high-fidelity"><header class="xb-inner-title"><h1>明星产品</h1><a class="route-link text-link" href="#/brand/about">返回品牌总览</a></header>${productFocus()}${partnerCTA()}</div>`;
      return `<div class="xb-page xb-high-fidelity"><section class="xb-hero" data-immersive-hero>${photo('herb','蕲艾种植环境中的艾草','xb-hero-image',true)}<div class="xb-hero-content"><img class="xb-hero-logo" src="${root}02-brand-logo-01.webp" width="1740" height="472" alt="寻艾艾灸馆 · Be Loving Be Growing"><h1>艾草为本，品质为基，服务致远</h1><p>从艾草产业，到终端服务。<br>让关怀融入日常。</p></div><a class="xb-hero-next route-link" href="#/brand/about/introduction">了解寻艾<span aria-hidden="true">↓</span></a></section>${focusedNav()}${intro()}${business()}${industryFocus()}${historyFocus()}${storeFocus()}${recognitionFocus()}${productFocus()}${partnerCTA()}</div>`;
    },
    mount(main) {
      if(main.querySelector('.xf-brand')) { window.XunAiFigmaBrand.mount(main); return; }
      const behavior = () => matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
      const stageButtons = [...main.querySelectorAll('[data-stage]')];
      const detail = main.querySelector('#business-detail');
      const track = main.querySelector('.xb-business-track');
      stageButtons.forEach((button,i)=>button.addEventListener('click',()=>{
        detail.hidden=false;
        stageButtons.forEach((item,n)=>item.setAttribute('aria-expanded',String(n===i)));
        track.scrollTo({left:track.children[i].offsetLeft-track.offsetLeft,behavior:behavior()});
      }));
      main.querySelector('[data-close-business]')?.addEventListener('click',()=>{
        const active=stageButtons.find(button=>button.getAttribute('aria-expanded')==='true');
        detail.hidden=true;stageButtons.forEach(button=>button.setAttribute('aria-expanded','false'));active?.focus();
      });
      const years=[...main.querySelectorAll('[data-year]')], historyTrack=main.querySelector('.xb-history-list');
      years.forEach((button,i)=>button.addEventListener('click',()=>historyTrack.scrollTo({left:historyTrack.children[i].offsetLeft-historyTrack.offsetLeft,behavior:behavior()})));
      const sync=(scroller,buttons,attribute)=>{
        if(!scroller)return;
        const update=()=>{const index=[...scroller.children].reduce((best,child,i,all)=>Math.abs(child.offsetLeft-scroller.offsetLeft-scroller.scrollLeft)<Math.abs(all[best].offsetLeft-scroller.offsetLeft-scroller.scrollLeft)?i:best,0);buttons.forEach((button,i)=>button.setAttribute(attribute,String(i===index)));};
        scroller.addEventListener('scroll',update,{passive:true});
        scroller.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight'].includes(event.key))return;event.preventDefault();const i=Math.max(0,buttons.findIndex(button=>button.getAttribute(attribute)==='true'));buttons[Math.max(0,Math.min(buttons.length-1,i+(event.key==='ArrowRight'?1:-1)))].click();});
      };
      sync(track,stageButtons,'aria-expanded');sync(historyTrack,years,'aria-pressed');
      main.querySelectorAll('.xb-nav a').forEach(link => {
        if (link.hash === location.hash) link.setAttribute('aria-current','location');
      });
    }
  };
})();
