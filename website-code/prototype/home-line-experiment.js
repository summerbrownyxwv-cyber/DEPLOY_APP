/* Independent homepage experiment. The production entry remains unchanged. */
(() => {
  document.body.classList.add('line-experiment');
  const design = window.XunAiDesign;
  const originalEnhance = design.enhance;
  const originalMarkup = design.responsiveMarkup;
  const originalMotion = window.XunAiMotion.mount;
  const heroSource = '../../assets/figma-stores-v1/imgE4A99442.webp';
  const chapters = [
    {
      id: 'hl-origin', name: '蕲春', title: '一株艾草，<br>一方水土。',
      copy: '从蕲春道地艾草开始。依托集团供应链，将原材品质带进每一件产品、每一次到店服务。',
      photo: '../../assets/figma-brand-v2/imgDji04701.webp', alt: '蕲春艾草种植基地的田畦', caption: '蕲春 · 艾草种植基地',
      detail: '../../assets/figma-brand-v2/imgDsc13822.webp', detailAlt: '艾草育苗基地',
      links: [['了解品牌实力', '/brand/about']]
    },
    {
      id: 'hl-research', name: '求新', title: '以现代科技，<br>延续东方温热。',
      copy: '务实研发与生产。将艾草原材、工艺研究与品质检测连接起来，让传统艾草文化进入现代日常。',
      photo: '../../assets/figma-brand-v2/research-replacement.webp', alt: '研究人员在实验室进行艾草产品研发', caption: '研发 · 从原材到产品',
      detail: '../../assets/figma-brand-v2/imgFrame68.webp', detailAlt: '艾艾贴温系列产品',
      links: [['查看产品体系', '/brand/products']]
    },
    {
      id: 'hl-service', name: '服务', title: '空间承载服务，<br>细节传递关怀。',
      copy: '寻艾艾灸馆，让产品、灸法与空间相遇。从到店体验到日常养护，把艾草的温热带进生活。',
      photo: heroSource, alt: '寻艾黑金店温润的接待空间与山水壁画', caption: '寻艾艾灸馆 · 黑金店空间',
      detail: '../../assets/figma-brand-v2/imgFrame73.webp', detailAlt: '寻艾门店艾灸服务空间',
      links: [['黑金店', '/stores/black-gold/detail'], ['标准店', '/stores/standard/detail'], ['服务卡项', '/stores/services']]
    },
    {
      id: 'hl-digital', name: '连接', title: '传统智慧，<br>新的连接。',
      copy: '寻艾 AI，以数字化能力辅助健康信息整理与门店服务，让到店体验拥有新的连接方式。',
      photo: '../../assets/figma-ai-v1/imgRectangle.webp', alt: '寻艾 AI 中医检测设备及采集摄像头', caption: '寻艾 AI · 辅助健康信息整理',
      detail: '../../assets/figma-ai-v1/imgRectangle8.webp', detailAlt: '用户在门店使用寻艾 AI 检测设备',
      links: [['了解寻艾 AI', '/ai']]
    },
    {
      id: 'hl-partner', name: '同行', title: '让艾，<br>走进更多日常。',
      copy: '以数智化管理连接选址筹建、运营指导、营销推广、招聘培训与产品供应链。与寻艾同行，从一次交流开始。',
      photo: '../../assets/review-20260920/store-light.webp', alt: '寻艾轻享店的接待与产品展示空间', caption: '与寻艾同行 · 门店经营与日常服务',
      links: [['了解加盟合作', '/franchise'], ['提交合作意向', '/franchise/apply']]
    }
  ];
  const photo = (src, alt, eager = false) => `<img src="${src}" alt="${alt}" width="1440" height="960" ${eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
  const links = items => items.map(([label, route]) => `<a class="hl-link route-link" href="#${route}"><span>${label}</span><span aria-hidden="true">↗</span></a>`).join('');

  design.home = () => `<div class="hl-home" data-home-line>
    <section class="hl-hero" data-immersive-hero aria-labelledby="home-title">
      ${photo(heroSource, '寻艾黑金店的山水壁画与接待空间', true)}
      <span class="hl-hero-word hl-seek" aria-hidden="true">寻</span>
      <span class="hl-hero-word hl-moxa" aria-hidden="true">艾</span>
      <button class="hl-hero-line" type="button" data-story-jump="hl-journey"><span>从艾草到日常</span><span aria-hidden="true">↓</span></button>
      <div class="hl-hero-copy"><p>寻艾艾灸馆</p><h1 id="home-title">与时代共鸣的<br>养生智慧</h1></div>
      <div class="hl-hero-foot"><p>以艾草为本，连接人与日常。</p><button type="button" data-story-jump="hl-journey">向下探索 <span aria-hidden="true">↓</span></button></div>
    </section>
    <section class="hl-intro" aria-labelledby="hl-intro-title"><h2 id="hl-intro-title">艾草文化的<br>现代转译者。</h2><div><p>「东元集团」旗下终端品牌，革新传统艾灸服务。</p><p>以线下艾灸馆为基础，连接道地蕲艾、艾艾贴产品、蕲春非遗灸法与自研体质检测 AI。从原材品质到到店体验，为长期经营建立可持续的服务体系。</p>${links([['认识寻艾', '/brand/about']])}</div></section>
    <section class="hl-journey" id="hl-journey" aria-labelledby="hl-journey-title">
      <header class="hl-journey-head"><h2 id="hl-journey-title" tabindex="-1">从艾草，<br>走向日常。</h2><p>原材、研发、服务与科技，<br>沿一条路径，彼此连接。</p></header>
      <nav class="hl-chapters" aria-label="首页叙事章节">${chapters.map(c => `<button type="button" data-story-jump="${c.id}">${c.name}</button>`).join('')}</nav>
      <div class="hl-path">
        <div class="hl-axis" aria-hidden="true"><i></i><b></b></div>
        ${chapters.map(c => `<article class="hl-chapter ${c.id}" id="${c.id}" aria-labelledby="${c.id}-title">
          <button type="button" class="hl-node" data-story-jump="${c.id}" aria-label="跳转至${c.name}章节"><i aria-hidden="true"></i><span>${c.name}</span></button>
          <figure class="hl-photo"><a class="hl-photo-link route-link" href="#${c.links[0][1]}" aria-label="${c.links[0][0]}">${photo(c.photo, c.alt)}</a><figcaption>${c.caption}</figcaption></figure>
          <div class="hl-copy"><h2 id="${c.id}-title" tabindex="-1">${c.title}</h2><p>${c.copy}</p><div class="hl-links">${links(c.links)}</div></div>
          ${c.detail ? `<figure class="hl-detail"><a class="hl-detail-link route-link" href="#${c.links[0][1]}" aria-label="${c.links[0][0]}">${photo(c.detail, c.detailAlt)}</a><figcaption>${c.detailAlt}</figcaption></figure>` : ''}
        </article>`).join('')}
      </div>
      <div class="hl-path-end"><span aria-hidden="true">·</span><p>艾有好状态</p></div>
    </section>
    <div class="hl-utilities"><details class="hl-directory"><summary><span>查询寻艾门店</span><span>城市 · 店型 <i aria-hidden="true">＋</i></span></summary>${window.XunAiStores.locations()}</details></div>
    <a class="hl-preview-back" href="./index.html?preview=final-main-d576500#/" aria-label="离开实验，返回当前最终版首页">返回最终版</a>
  </div>`;

  design.responsiveMarkup = function (html) {
    const markup = originalMarkup.call(this, html);
    if (!markup.includes('data-home-line')) return markup;
    const template = document.createElement('template');
    template.innerHTML = markup;
    const hero = template.content.querySelector('.hl-hero > img');
    hero.srcset += ', ' + heroSource + ' 4096w';
    hero.sizes = '100vw';
    template.content.querySelectorAll('.hl-detail img').forEach(img => img.sizes = '(max-width:1099px) 1px, 30vw');
    return template.innerHTML;
  };

  design.enhance = function (main, page) {
    if (page !== '/') return originalEnhance.call(this, main, page);
    this.homeMotionCleanup?.();
    document.title = '一线寻艾｜首页交互测试';
    const root = main.querySelector('[data-home-line]');
    const hero = root.querySelector('.hl-hero');
    const path = root.querySelector('.hl-path');
    const scenes = [...root.querySelectorAll('.hl-chapter')];
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const compact = matchMedia('(max-width:1024px)');
    const hover = matchMedia('(hover:hover) and (pointer:fine)');
    let frame = 0;
    let hovered = null;
    let focused = null;
    const draw = () => {
      frame = 0;
      const heroRect = hero.getBoundingClientRect();
      const pathRect = path.getBoundingClientRect();
      const sceneRects = scenes.map(el => el.getBoundingClientRect());
      const progress = Math.max(0, Math.min(1, (innerHeight * .48 - pathRect.top) / pathRect.height));
      const headerY = compact.matches ? 0 : Math.max(0, heroRect.height * .45 + heroRect.top);
      document.body.style.setProperty('--hl-header-y', headerY + 'px');
      document.body.classList.toggle('hl-header-docked', compact.matches ? heroRect.bottom <= 80 : headerY <= 0);
      const heroProgress = reduced.matches ? 0 : Math.max(0, Math.min(1, -heroRect.top / heroRect.height));
      hero.style.setProperty('--hl-hero-shift', heroProgress * (compact.matches ? 28 : 96) + 'px');
      hero.style.setProperty('--hl-hero-drift', heroProgress * 40 + 'px');
      hero.style.setProperty('--hl-word-opacity', 1 - heroProgress * .6);
      path.style.setProperty('--hl-progress', reduced.matches ? 1 : progress);
      let current = 0;
      sceneRects.forEach((rect, i) => { if (rect.top <= innerHeight * .48) current = i; });
      const active = focused || (hover.matches && hovered) || scenes[current];
      scenes.forEach((scene, i) => {
        scene.classList.toggle('hl-is-current', scene === active);
        const drift = reduced.matches || compact.matches ? 0 : Math.max(-28, Math.min(28, (sceneRects[i].top - innerHeight * .35) * -.035));
        scene.style.setProperty('--hl-photo-drift', drift + 'px');
        scene.querySelector('.hl-node').toggleAttribute('data-current', i === current);
      });
      root.querySelectorAll('.hl-chapters button').forEach((button, i) => {
        if (i === current) button.setAttribute('aria-current', 'step');
        else button.removeAttribute('aria-current');
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(draw); };
    const pointer = event => {
      const target = event.type === 'pointerout' ? event.relatedTarget : event.target;
      const next = target instanceof Element ? target.closest('.hl-photo-link,.hl-detail-link,.hl-node')?.closest('.hl-chapter') : null;
      if (next !== hovered) { hovered = next; schedule(); }
    };
    const focus = event => {
      const target = event.type === 'focusout' ? event.relatedTarget : event.target;
      focused = target instanceof Element ? target.closest('a,button')?.closest('.hl-chapter') : null;
      schedule();
    };
    const jump = event => {
      const button = event.target.closest('[data-story-jump]');
      if (!button) return;
      const target = document.getElementById(button.dataset.storyJump);
      target.scrollIntoView({behavior: reduced.matches ? 'auto' : 'smooth', block: 'start'});
      target.querySelector('h2')?.focus({preventScroll: true});
    };
    root.addEventListener('click', jump);
    root.addEventListener('pointerover', pointer);
    root.addEventListener('pointerout', pointer);
    root.addEventListener('focusin', focus);
    root.addEventListener('focusout', focus);
    window.addEventListener('scroll', schedule, {passive: true});
    window.addEventListener('resize', schedule);
    reduced.addEventListener('change', schedule);
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('hl-is-seen'); observer.unobserve(entry.target); }
    }), {threshold: .1});
    scenes.forEach(scene => observer.observe(scene));
    draw();
    this.homeMotionCleanup = () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reduced.removeEventListener('change', schedule);
      root.removeEventListener('click', jump);
      root.removeEventListener('pointerover', pointer);
      root.removeEventListener('pointerout', pointer);
      root.removeEventListener('focusin', focus);
      root.removeEventListener('focusout', focus);
      document.body.style.removeProperty('--hl-header-y');
      document.body.classList.remove('hl-header-docked');
    };
  };
  window.XunAiMotion.mount = function (main) {
    // The narrative owns its motion; only the existing directory uses shared reveals.
    return originalMotion.call(this, main.querySelector('.hl-utilities') || main);
  };
})();
