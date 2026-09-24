/* Brand manual 2026-09-08. Existing routes and form behavior remain shared. */
window.XunAiDesign = {
  responsiveMarkup(html) {
    const template=document.createElement('template');template.innerHTML=html;
    template.content.querySelectorAll('img').forEach(img=>{
      const item=window.XunAiImages?.[img.getAttribute('src')];if(!item)return;
      img.width=item.width;img.height=item.height;
      img.srcset=item.variants.map(([src,width])=>src+' '+width+'w').join(', ');
      const hero=!!img.closest('[data-immersive-hero],.xj-hero,.xo-hero,.xa-hero');
      img.sizes=hero?'100vw':'(max-width:767px) 100vw, (max-width:1024px) 70vw, 50vw';
      img.src=item.variants.at(-1)[0];img.decoding='async';
      if(hero){img.loading='eager';img.fetchPriority='high'}
    });
    template.content.querySelectorAll('video[poster]').forEach(video=>{
      const item=window.XunAiImages?.[video.getAttribute('poster')];
      if(item)video.poster=item.variants.at(-1)[0];
    });
    return template.innerHTML;
  },
  home() {
    return `<div class="home-shell xh-home">
      <section class="xh-opening" data-immersive-hero aria-labelledby="home-title">
        <img class="xh-opening-image" src="../../assets/figma-stores-v1/imgE4A99442.png" width="4096" height="2731" fetchpriority="high" alt="寻艾黑金店的山水壁画与接待空间">
        <div class="xh-opening-copy"><p>寻艾艾灸馆</p><h1 id="home-title">与时代共鸣的<br><span>养生智慧</span></h1></div>
        <div class="xh-opening-bottom"><p>以艾草为本，连接人与日常。</p></div>
      </section>
      <section class="xh-origin xh-section" aria-labelledby="xh-origin-title"><div class="xh-origin-heading"><p class="xh-label">寻艾是谁</p><h2 id="xh-origin-title">一株艾草，<br>一种生活。</h2><a class="xh-link route-link" href="#/brand/about">了解品牌<span aria-hidden="true">↗</span></a></div><div class="xh-origin-story"><figure><img src="../../assets/figma-brand-v2/imgDsc13822.png" width="4096" height="2731" loading="lazy" alt="蕲春艾草种植基地"></figure><div class="xh-origin-caption"><span>从蕲春出发</span><p>寻艾是「东元集团」旗下终端品牌。以线下艾灸馆为基础业态，将艾草、产品与服务带入日常。</p></div></div></section>
      <section class="xh-system xh-section" aria-labelledby="xh-system-title"><header class="xh-section-head"><h2 id="xh-system-title">从艾草到服务</h2><a class="xh-link route-link" href="#/brand/about/business">新商业范式<span aria-hidden="true">↗</span></a></header><div class="xh-industry-grid">${[['imgDsc13822.png','原材品质','蕲春艾草'],['research-replacement.png','研发生产','务实研发与生产'],['imgRectangle3.png','终端服务','运营服务与连锁']].map(([img,title,caption])=>`<a class="xh-industry route-link" href="#/brand/about/business"><figure><img src="../../assets/figma-brand-v2/${img}" width="1920" height="1280" loading="lazy" alt="${title}"></figure><div><h3>${title}</h3><span aria-hidden="true">↗</span></div><p>${caption}</p></a>`).join('')}</div></section>
      <section class="xh-sanctuary" aria-labelledby="xh-stores-title"><div class="xh-sanctuary-heading"><p>寻艾艾灸馆</p><h2 id="xh-stores-title">留一刻，<br>给自己。</h2></div><figure class="xh-sanctuary-image"><img src="../../assets/figma-stores-v2/comp-imgRectangle5.png" width="678" height="878" loading="lazy" alt="寻艾门店温润的空间与服务细节"></figure><div class="xh-sanctuary-links"><p>空间承载服务，细节传递关怀。</p><a class="xh-row route-link" href="#/stores/black-gold/detail"><span>黑金店</span><span aria-hidden="true">↗</span></a><a class="xh-row route-link" href="#/stores/standard/detail"><span>标准店</span><span aria-hidden="true">↗</span></a><a class="xh-row route-link" href="#/stores/services"><span>服务卡项</span><span aria-hidden="true">↗</span></a></div></section>
      <section class="xh-digital xh-section" aria-labelledby="xh-ai-title"><div class="xh-digital-copy"><p class="xh-label">寻艾 AI</p><h2 id="xh-ai-title">传统智慧，<br>新的连接。</h2><p>以数字化能力，辅助健康信息整理与门店服务。</p><a class="xh-link route-link" href="#/ai">了解寻艾 AI<span aria-hidden="true">↗</span></a></div><div class="xh-ai-visual">${window.XunAiAI.stage()}</div></section>
      <section class="xh-connection xh-section" aria-labelledby="xh-connection-title"><div><p class="xh-label">与寻艾同行</p><h2 id="xh-connection-title">让艾，<br>走进更多日常。</h2></div><div class="xh-connection-links"><a class="xh-row route-link" href="#/franchise"><span>加盟合作</span><span aria-hidden="true">↗</span></a><a class="xh-row route-link" href="#/brand/products"><span>产品体系</span><span aria-hidden="true">↗</span></a><a class="xh-row route-link" href="#/about/culture"><span>关于寻艾</span><span aria-hidden="true">↗</span></a></div></section>
    </div>`;
  },

  enhance(main, page) {
    this.homeMotionCleanup?.();
    main.querySelectorAll('table').forEach(table=>{
      if(table.parentElement.classList.contains('xu-table-scroll'))return;
      const region=document.createElement('div');region.className='xu-table-scroll';
      region.tabIndex=0;region.setAttribute('role','region');region.setAttribute('aria-label','表格，可横向滚动查看完整内容');
      table.before(region);region.append(table);
    });
    if(page==='/'){
      const hero=main.querySelector('.xh-opening'),picture=hero.querySelector('img'),reduce=matchMedia('(prefers-reduced-motion:reduce)');
      let frame=0;
      const draw=()=>{frame=0;const rect=hero.getBoundingClientRect();if(reduce.matches){picture.style.transform='';return}if(rect.bottom<=0||rect.top>=innerHeight)return;const progress=Math.max(0,Math.min(1,-rect.top/rect.height));picture.style.transform=`scale(${1.04-progress*.04}) translateY(${progress*3}%)`;};
      const schedule=()=>{if(!frame)frame=requestAnimationFrame(draw)};
      window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);reduce.addEventListener('change',schedule);draw();
      this.homeMotionCleanup=()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);reduce.removeEventListener('change',schedule)};
    }
    if (main.querySelector('.xb-page,.xs-page,.xf-brand,.xa-page,.xo-page,.xj-page')) return;
    // Avoid repeated brand marks and self-links masquerading as navigation.
    main.querySelectorAll('.wire-row h2 a').forEach(link=>{
      if(link.getAttribute('href')==='#'+page) link.replaceWith(document.createTextNode(link.textContent));
    });
    main.querySelectorAll('.route-coordinate,.section-kicker,.section-note').forEach(el => el.remove());
    main.querySelectorAll('.hero-aside').forEach(el => {
      if (page === '/brand/about') el.textContent = '了解寻艾的品牌介绍、发展历程与产品体系。';
      if (page === '/stores/standard') el.textContent = '了解标准店、黑金店与服务卡项。';
      if (page === '/about/culture') el.textContent = '企业文化、团队组织与官方联系渠道。';
    });
    const media = main.querySelector('.page-media');
    if (media) {
      if (page.startsWith('/brand/') || page.startsWith('/about/')) {
        media.innerHTML = '<img src="../../assets/02-brand-detail/02-brand-logo-01.webp" alt="寻艾艾灸馆品牌标识">';
        media.classList.add('official-brand-media');
      } else {
        media.textContent = page === '/ai' ? 'AI 实际界面 · 素材待提供' : '空间与服务影像 · 素材待提供';
      }
    }
    if(page.startsWith('/about/')){
      media?.remove();
      main.querySelector('.page-hero')?.classList.add('text-only-hero');
    }
    main.querySelectorAll('.wire-row').forEach(row => {
      const heading = row.querySelector('h2');
      if (heading) heading.innerHTML = heading.innerHTML.replaceAll(' ↗', '');
      if(heading && !heading.querySelector('a')){
        const copy=row.querySelector('p');
        if(copy){
          const disclosure=document.createElement('details');
          disclosure.className='site-disclosure';
          const summary=document.createElement('summary');
          summary.append(heading);disclosure.append(summary,copy);row.replaceWith(disclosure);
        }
      }
    });
    main.querySelectorAll('.texture-cta h2').forEach(el => el.textContent = '进一步了解寻艾');
    main.querySelectorAll('.texture-cta').forEach(el => el.classList.add('quiet-next'));
    main.querySelectorAll('.content-placeholder').forEach(el => {
      const text = el.textContent;
      el.innerHTML = '<p class="placeholder-note"></p><div class="copy-lines" aria-hidden="true"><i></i><i></i><i></i></div>';
      el.querySelector('p').textContent = text;
    });
    if (page === '/brand/products') {
      const last = main.querySelector('.wire-list');
      last?.insertAdjacentHTML('beforeend','<div class="product-external"><a class="text-link" href="https://www.aiaitie.com" target="_blank" rel="noopener noreferrer">前往艾艾贴官网（新窗口）</a></div>');
    }
    document.querySelector('meta[name="theme-color"]').content = '#ffffff';
  }
};
