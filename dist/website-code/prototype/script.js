const pageData = {
  "/brand/about": {
    coordinate: "BRAND / ABOUT",
    title: "品牌实力",
    aside: "从品牌定位、发展脉络与可核验资料建立信任。低保真阶段不填入未经确认的事实。",
    sections: [
      ["品牌介绍", "[品牌定位、使命与品牌关系说明待提供]", "#/brand/about"],
      ["品牌发展", "[时间节点、发展事件与来源文件待提供]", "#/brand/history"],
      ["明星产品", "[产品体系预览；正式详情跳转艾艾贴官网]", "#/brand/products"],
    ],
  },
  "/brand/history": {
    coordinate: "BRAND / HISTORY",
    title: "品牌发展",
    aside: "所有年份、规模与事件均需要来源和更新时间。",
    sections: [
      ["[年份待确认]", "[发展事件与证据占位]"],
      ["[年份待确认]", "[门店或服务体系节点占位]"],
      ["[当前阶段]", "[当前业务范围与资料来源占位]"],
    ],
  },
  "/brand/products": {
    coordinate: "BRAND / PRODUCTS",
    title: "明星产品",
    aside: "产品仅作品牌体系预览，真实产品信息与外链需要最终确认。",
    sections: [
      ["产品体系", "[产品分类与真实素材占位]"],
      ["品牌关系", "[寻艾与艾艾贴品牌关系说明待确认]"],
      ["了解更多", "[艾艾贴官网外链与跳转提示]"],
    ],
  },
  "/stores/standard": {
    coordinate: "STORES / STANDARD",
    title: "寻艾艾灸馆",
    aside: "用清晰的店型、服务与到店路径，帮助消费者快速理解线下体验。",
    sections: [
      ["标准店", "[定位、空间、服务卡项与适合场景占位]", "#/stores/standard"],
      ["黑金店", "[店型差异、高端服务与空间体验占位]", "#/stores/black-gold"],
      ["服务卡项", "[服务名称、流程、注意事项与边界占位]"],
      ["我要加盟", "[转入加盟合作的资质、条件与申请路径]", "#/franchise/apply"],
    ],
  },
  "/stores/black-gold": {
    coordinate: "STORES / BLACK GOLD",
    title: "黑金店",
    aside: "强调店型与服务差异，不以氛围画面替代必要信息。",
    sections: [
      ["店型定位", "[真实差异与目标用户说明待提供]"],
      ["空间体验", "[真实场景影像占位 / 16:9]"],
      ["服务流程", "[项目、流程与健康表述边界待审核]"],
    ],
  },
  "/about/culture": {
    coordinate: "ABOUT / XUNAI",
    title: "关于我们",
    aside: "企业文化、团队组织、品牌资讯与合作渠道的统一入口。",
    sections: [
      ["企业文化", "[使命、愿景与价值观正式版本待确认]", "#/about/culture"],
      ["团队与组织", "[真实人物、部门与授权资料待提供]"],
      ["品牌资讯", "[重要公告、门店动态与媒体资料入口]", "#/about/news"],
      ["加入与合作", "[人才、商务与海外合作入口]", "#/about/join"],
    ],
  },
  "/about/news": {
    coordinate: "ABOUT / NEWS",
    title: "品牌资讯",
    aside: "只展示正式发布且可追溯的信息。",
    sections: Array.from({ length: 5 }, (_, index) => [
      `[资讯标题 ${index + 1}]`,
      "[分类 / 日期 / 两行摘要 / 正式内容待提供]",
    ]),
  },
  "/about/join": {
    coordinate: "ABOUT / JOIN",
    title: "加入与合作",
    aside: "将人才招聘、商务合作与海外合作分成独立且明确的联系路径。",
    sections: [
      ["人才招聘", "[职位、地点、职责与申请入口占位]"],
      ["商务合作", "[合作类型、所需资料与联系表单占位]"],
      ["海外合作", "[地区、语言与合作形态占位]"],
    ],
  },
};

const services = [
  ["01", "寻艾艾灸馆", "标准店 / 黑金店 / 服务卡项", "#/stores/standard", "STORE MEDIA / 4:3"],
  ["02", "寻艾 AI", "价值 / 方式 / 场景 / 体验", "#/ai", "AI INTERFACE / 4:3"],
  ["03", "加盟合作", "资质 / 条件 / 总部支持", "#/franchise", "FRANCHISE / 4:3"],
  ["04", "品牌实力", "介绍 / 发展 / 明星产品", "#/brand/about", "BRAND STORY / 4:3"],
  ["05", "关于我们", "文化 / 资讯 / 加入合作", "#/about/culture", "ABOUT / 4:3"],
];

const homeTemplate = () => `
  <div class="home-shell">
    <section class="home-hero" aria-labelledby="home-title" data-hero>
      <div class="hero-frame">
        <div class="hero-media" aria-hidden="true">
          <div class="media-layer is-active"></div>
          <div class="media-layer"></div>
          <div class="media-layer"></div>
        </div>
        <p class="media-label">FULLSCREEN MEDIA PLACEHOLDER / NO FINAL IMAGE</p>
        <h1 class="hero-heading" id="home-title"><span>寻艾</span> <span>XUNAI</span></h1>
        <div class="hero-promo">
          <p>[加盟资料包]<br />合作条件、支持与申请路径</p>
          <button class="promo-close" type="button" aria-label="关闭资料提示">×</button>
          <a class="pill-button route-link" href="#/franchise/apply">获取资料 ↗</a>
        </div>
        <div class="hero-meta">
          <span>线下艾灸 / 智能服务 / 品牌合作</span>
          <div class="hero-switcher" aria-label="首屏场景控制">
            <span data-scene-count>01 / 03</span>
            <button type="button" data-scene-toggle aria-label="暂停首屏场景切换">Ⅱ</button>
          </div>
          <span>[核心品牌主张待提供]</span>
        </div>
      </div>
    </section>

    <section class="section-block statement reveal" aria-labelledby="statement-title">
      <p class="section-kicker">POSITION / 01</p>
      <h2 id="statement-title">不是把信息堆在页面上，而是让每个人找到下一步。</h2>
      <p>[寻艾的品牌核心定位与一句话说明待确认。原型先用空间、层级和路径表达品牌的现代感与可信度。]</p>
    </section>

    <section class="total-section reveal" aria-labelledby="total-title">
      <p class="total-label">线下 × 数字化</p>
      <span class="arc left" aria-hidden="true"></span>
      <h2 id="total-title"><span>艾</span><span>AI</span></h2>
      <span class="arc right" aria-hidden="true"></span>
    </section>

    <section class="section-block services-section" aria-labelledby="services-title">
      <div class="services-heading reveal">
        <p class="section-kicker">PATHS / 02</p>
        <h2 id="services-title">选择你的路径</h2>
        <p>[所有核心操作在静态状态下均可发现，悬停只增强预览。]</p>
      </div>
      <div class="service-list">
        ${services.map(([index, title, meta, href, preview]) => `
          <a class="service-row route-link" href="${href}">
            <span class="row-meta">${index}</span>
            <h3>${title}</h3>
            <span class="row-meta">${meta} ↗</span>
            <span class="row-preview" aria-hidden="true"><span class="media-label">${preview}</span></span>
          </a>`).join("")}
      </div>
    </section>

    <section class="section-block cases-section" aria-labelledby="cases-title">
      <div class="cases-heading reveal">
        <p class="section-kicker">FEATURED / 03</p>
        <h2 id="cases-title">重点内容入口</h2>
      </div>
      <div class="case-filters" aria-label="内容筛选">
        <button class="filter-button" type="button" aria-pressed="true" data-filter="all">全部</button>
        <button class="filter-button" type="button" aria-pressed="false" data-filter="consumer">消费者</button>
        <button class="filter-button" type="button" aria-pressed="false" data-filter="partner">合作伙伴</button>
        <button class="filter-button" type="button" aria-pressed="false" data-filter="brand">品牌了解</button>
      </div>
      <div class="case-grid">
        <a class="case-card wide route-link" data-audience="consumer" href="#/stores/standard">
          <div class="case-media"><span>MEDIA / 门店空间 / 16:9</span></div>
          <div class="case-caption"><span>寻艾艾灸馆</span><span>STANDARD / BLACK GOLD</span></div>
        </a>
        <a class="case-card route-link" data-audience="consumer" href="#/ai">
          <div class="case-media"><span>MEDIA / AI 界面 / 4:3</span></div>
          <div class="case-caption"><span>寻艾 AI</span><span>VALUE / SCENARIO</span></div>
        </a>
        <a class="case-card route-link" data-audience="partner" href="#/franchise">
          <div class="case-media"><span>MEDIA / 加盟体系 / 4:3</span></div>
          <div class="case-caption"><span>加盟合作</span><span>QUALIFICATION / SUPPORT</span></div>
        </a>
        <a class="case-card wide route-link" data-audience="brand" href="#/brand/about">
          <div class="case-media"><span>MEDIA / 品牌资料 / 16:9</span></div>
          <div class="case-caption"><span>品牌实力</span><span>ABOUT / HISTORY</span></div>
        </a>
      </div>
    </section>

    <section class="texture-cta reveal" aria-labelledby="cta-title">
      <div>
        <p class="section-kicker">NEXT STEP / 04</p>
        <h2 id="cta-title">准备了解合作条件与支持？</h2>
        <a class="pill-button route-link" href="#/franchise/apply">获取招商资料 ↗</a>
      </div>
    </section>
  </div>`;

const standardPageTemplate = (page) => `
  <div class="page-shell">
    <section class="page-hero">
      <p class="route-coordinate">${page.coordinate}</p>
      <h1>${page.title}</h1>
      <p class="hero-aside">${page.aside}</p>
      <div class="page-media">FULL-WIDTH MEDIA PLACEHOLDER / 16:6</div>
    </section>
    <div class="wire-list">
      ${page.sections.map(([title, body, href], index) => `
        <section class="wire-row reveal">
          <span class="route-coordinate">0${index + 1}</span>
          <h2>${href ? `<a class="route-link" href="${href}">${title} ↗</a>` : title}</h2>
          <p>${body}</p>
        </section>`).join("")}
    </div>
    <section class="texture-cta">
      <div><p class="section-kicker">NEXT / ACTION</p><h2>找到对应的下一步</h2><a class="pill-button route-link" href="#/franchise/apply">获取招商资料 ↗</a></div>
    </section>
  </div>`;

const aiTemplate = () => window.XunAiAI.render();

const franchiseTemplate = (application = false) => window.XunAiFranchise.render(application);

function formTemplate(step = 1) {
  if (step === 3) {
    return `<div class="form-success" tabindex="-1"><h3>原型提交完成</h3><p>这里将显示后续联系流程与官方核验方式。当前没有发送或保存任何数据。</p><button class="pill-button" type="button" data-form-restart>重新演示</button></div>`;
  }
  if (step === 2) {
    return `<form class="prototype-form" data-step="2" novalidate>
      <p class="form-progress">STEP 02 / 意向信息</p>
      <div class="form-grid">
        <label class="field">意向店型<select name="store_type" required autocomplete="off"><option value="">请选择</option><option>标准店</option><option>轻享店</option><option>黑金店</option><option>暂不确定</option></select></label>
        <label class="field">意向区域<input name="area" required autocomplete="off" placeholder="[城市 / 商圈]…" /></label>
        <label class="field span-2">补充说明<textarea name="note" autocomplete="off" placeholder="[请勿在原型填写真实敏感信息]…"></textarea></label>
      </div>
      <div class="form-actions"><button class="filter-button" type="button" data-form-back>返回</button><button class="pill-button" type="submit">模拟提交 ↗</button></div>
    </form>`;
  }
  return `<form class="prototype-form" data-step="1" novalidate>
    <p class="form-progress">STEP 01 / 基本信息</p>
    <div class="form-grid">
      <label class="field">姓名<input name="name" required autocomplete="off" placeholder="[姓名]…" /></label>
      <label class="field">手机号码<input name="phone" type="tel" inputmode="tel" required autocomplete="off" placeholder="[手机号码]…" /></label>
      <label class="field span-2">所在城市<input name="city" required autocomplete="off" placeholder="[城市]…" /></label>
    </div>
    <div class="form-actions"><span></span><button class="pill-button" type="submit">下一步 ↗</button></div>
  </form>`;
}

const main = document.querySelector("main");
const header = document.querySelector("[data-header]");
const drawer = document.querySelector(".mobile-drawer");
const scrim = document.querySelector(".page-scrim");
const menuToggle = document.querySelector(".menu-toggle");
const dialog = document.querySelector(".service-dialog");
const dialogTitle = document.querySelector("#service-title");
const dialogDescription = document.querySelector("#service-description");
const liveRegion = document.querySelector(".live-region");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let lastFocused = null;
let heroTimer = null;
let heroObserver = null;
let initialRender = true;
let serviceLastFocused = null;
let formDirty = false;
let formState = {};
let curtainTimers = [];

function parseRoute() {
  const raw = location.hash.slice(1) || "/";
  const segments = raw.split("/").filter(Boolean);
  if (!segments.length) return { page: "/", anchor: "" };
  if (segments[0] === "brand" && ["about", "history"].includes(segments[1])) {
    return { page: `/brand/${segments[1]}`, anchor: segments[2] || "" };
  }
  if (segments[0] === "franchise" && segments[1] === "apply") return { page: "/franchise/apply", anchor: "" };
  if (["ai", "franchise"].includes(segments[0])) {
    return { page: `/${segments[0]}`, anchor: segments[1] || "" };
  }
  return { page: `/${segments.join("/")}`, anchor: "" };
}

function setActiveNav(page) {
  document.querySelectorAll(".route-link").forEach((link) => {
    const target = (link.getAttribute("href") || "").replace(/^#/, "");
    const storeNavigation = link.closest('.desktop-nav, .drawer-nav') && page.startsWith('/stores/') && target === '/stores/standard';
    const brandNavigation = link.closest('.desktop-nav, .drawer-nav') && page.startsWith('/brand/') && target === '/brand/about';
    const aboutNavigation = link.closest('.desktop-nav, .drawer-nav') && page.startsWith('/about/') && target === '/about/culture';
    const franchiseNavigation = link.closest('.desktop-nav, .drawer-nav') && page.startsWith('/franchise') && target === '/franchise';
    const active = storeNavigation || brandNavigation || aboutNavigation || franchiseNavigation || (page !== "/" && target === page);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

let renderedPage = null;
let motionMountFrame = 0;
function renderRoute() {
  clearInterval(heroTimer);
  const { page, anchor } = parseRoute();
  if (page === renderedPage) {
    if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth" });
    else window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }
  cancelAnimationFrame(motionMountFrame);
  window.XunAiMotion?.unmount();
  renderedPage = page;
  const routeTitles = {
    "/": "首页",
    "/ai": "寻艾 AI",
    "/franchise": "加盟合作",
    "/franchise/apply": "提交合作意向",
    "/brand/about": "品牌实力",
    "/brand/history": "品牌发展",
    "/brand/products": "明星产品",
    "/stores/standard": "寻艾艾灸馆",
    "/stores/black-gold": "黑金店",
    "/stores/services": "服务卡项",
    "/about/culture": "关于我们",
    "/about/news": "品牌资讯",
    "/about/join": "加入与合作",
    "/about/careers": "人才招聘",
    "/about/business": "商务合作",
    "/about/overseas": "海外合作",
  };
  document.title = `${routeTitles[page] || "页面"}｜寻艾官网设计验证版`;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", page === "/" ? "#050505" : "#ffffff");
  document.body.classList.toggle("home-route", page === "/");
  document.body.classList.toggle("figma-brand-route", page === "/brand/about");
  if (page === "/") main.innerHTML = window.XunAiDesign.responsiveMarkup(window.XunAiDesign.home());
  else if (["/brand/about", "/brand/history", "/brand/products"].includes(page)) main.innerHTML = window.XunAiDesign.responsiveMarkup(window.XunAiBrand.render(page));
  else if (["/stores/standard", "/stores/black-gold", "/stores/services", "/stores/standard/detail", "/stores/black-gold/detail"].includes(page)) main.innerHTML = window.XunAiDesign.responsiveMarkup(window.XunAiStores.render(page));
  else if (page === "/ai") main.innerHTML = window.XunAiDesign.responsiveMarkup(aiTemplate());
  else if (["/about/culture","/about/news","/about/join","/about/careers","/about/business","/about/overseas"].includes(page)) main.innerHTML = window.XunAiDesign.responsiveMarkup(window.XunAiAbout.render(page));
  else if (page === "/franchise" || page === "/franchise/apply") {
    main.innerHTML = window.XunAiDesign.responsiveMarkup(franchiseTemplate(page === "/franchise/apply"));
    if (page === "/franchise/apply") mountForm(1);
  } else {
    const fallback = { coordinate: "404 / PROTOTYPE", title: "页面尚未定义", aside: "请从主导航返回已配置页面。", sections: [["返回路径", "[该原型路由未配置]"]] };
    main.innerHTML = window.XunAiDesign.responsiveMarkup(standardPageTemplate(pageData[page] || fallback));
  }
  window.XunAiDesign.enhance(main, page);
  main.querySelectorAll('.xh-partner,.xb-partner-next,.xs-cta,.texture-cta').forEach(section=>section.remove());
  setActiveNav(page);
  window.XunAiBrand.mount(main);
  window.XunAiStores.mount(main);
  window.XunAiAI.mount(main);
  window.XunAiAbout.mount(main,page);
  window.XunAiFranchise.mount(main);
  setupPageInteractions();
  const target = anchor || ({'/about/news':'news','/about/join':'join'})[page];
  if (target) document.getElementById(target)?.scrollIntoView({behavior:'instant'});
  else window.scrollTo({top:0,behavior:'instant'});
  motionMountFrame=requestAnimationFrame(()=>{
    window.XunAiMotion?.mount(main);
    if(!reduceMotion.matches) main.animate([{opacity:.65},{opacity:1}],{duration:250,easing:'ease-out'});
  });
}

function renderWithTransition() {
  renderRoute();
  initialRender = false;
}

function setupHero() {
  const layers = [...document.querySelectorAll(".media-layer")];
  const count = document.querySelector("[data-scene-count]");
  const toggle = document.querySelector("[data-scene-toggle]");
  if (!layers.length || !toggle) return;
  let index = 0;
  let playing = !reduceMotion.matches;
  const show = (next) => {
    index = next % layers.length;
    layers.forEach((layer, layerIndex) => layer.classList.toggle("is-active", layerIndex === index));
    count.textContent = `0${index + 1} / 0${layers.length}`;
  };
  const start = () => {
    clearInterval(heroTimer);
    if (playing) heroTimer = window.setInterval(() => show(index + 1), 6000);
  };
  toggle.textContent = playing ? "Ⅱ" : "▶";
  toggle.setAttribute("aria-label", playing ? "暂停首屏场景切换" : "播放首屏场景切换");
  toggle.addEventListener("click", () => {
    playing = !playing;
    toggle.textContent = playing ? "Ⅱ" : "▶";
    toggle.setAttribute("aria-label", playing ? "暂停首屏场景切换" : "播放首屏场景切换");
    liveRegion.textContent = playing ? "首屏场景切换已播放" : "首屏场景切换已暂停";
    start();
  });
  start();
}

function setupReveal() {
  // The shared motion mount owns viewport entrances.
  document.querySelectorAll('.reveal').forEach(item => item.classList.add('is-visible'));
}

function setupHeaderTone() {
  heroObserver?.disconnect();
  const hero = main.querySelector("[data-immersive-hero], [data-hero]");
  document.body.classList.toggle('immersive-route', !!hero?.hasAttribute('data-immersive-hero'));
  if (!hero) {
    header.classList.add("is-solid");
    return;
  }
  heroObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle("is-solid", !entry.isIntersecting || entry.intersectionRatio < 0.72);
  }, { threshold: [0.72] });
  heroObserver.observe(hero);
}

function setupFilters() {
  const current = new URL(location.href).searchParams.get("view") || "all";
  document.querySelectorAll("[data-filter]").forEach((item) => {
    item.setAttribute("aria-pressed", String(item.dataset.filter === current));
  });
  document.querySelectorAll("[data-audience]").forEach((card) => {
    card.hidden = current !== "all" && card.dataset.audience !== current;
  });
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      document.querySelectorAll("[data-audience]").forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.audience !== filter;
      });
      const url = new URL(location.href);
      if (filter === "all") url.searchParams.delete("view");
      else url.searchParams.set("view", filter);
      history.replaceState(null, "", url);
    });
  });
}

function setupPageInteractions() {
  setupHero();
  setupReveal();
  setupHeaderTone();
  setupFilters();
  document.querySelector(".promo-close")?.addEventListener("click", (event) => {
    event.currentTarget.closest(".hero-promo")?.classList.add("is-closed");
    liveRegion.textContent = "招商资料提示已关闭";
  });
}

function mountForm(step) {
  const mount = document.querySelector("[data-form-mount]");
  if (!mount) return;
  mount.innerHTML = formTemplate(step);
  mount.querySelectorAll("[name]").forEach((control) => {
    if (formState[control.name] !== undefined) control.value = formState[control.name];
  });
  const form = mount.querySelector("form");
  if (form) {
    form.addEventListener("input", (event) => {
      formDirty = true;
      if (event.target.name) formState[event.target.name] = event.target.value;
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!validateForm(form)) return;
      mountForm(step === 1 ? 2 : 3);
      if (step === 2) formDirty = false;
      mount.querySelector("input, select, .form-success")?.focus();
    });
  }
  mount.querySelector("[data-form-back]")?.addEventListener("click", () => mountForm(1));
  mount.querySelector("[data-form-restart]")?.addEventListener("click", () => {
    formState = {};
    formDirty = false;
    mountForm(1);
  });
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll(".field").forEach((field, index) => {
    field.classList.remove("has-error");
    field.querySelector(".field-error")?.remove();
    const input = field.querySelector("input, select, textarea");
    if (input?.required && !input.value.trim()) {
      valid = false;
      field.classList.add("has-error");
      const error = document.createElement("span");
      error.className = "field-error";
      error.id = `field-error-${index}`;
      error.textContent = "请完成此项后继续";
      field.append(error);
      input.setAttribute("aria-describedby", error.id);
      input.setAttribute("aria-invalid", "true");
    } else if (input) {
      input.removeAttribute("aria-describedby");
      input.removeAttribute("aria-invalid");
    }
  });
  if (!valid) {
    form.querySelector(".has-error input, .has-error select")?.focus();
    liveRegion.textContent = "表单中有未完成的必填项";
  }
  return valid;
}

function openDrawer() {
  lastFocused = document.activeElement;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  scrim.hidden = false;
  document.body.classList.add("is-locked");
  document.querySelectorAll('main,.site-header,.site-footer,.service-rail,body>.xf-cta').forEach(el => el.inert = true);
  drawer.querySelector(".drawer-close")?.focus();
}

function closeDrawer() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  scrim.hidden = true;
  document.body.classList.remove("is-locked");
  document.querySelectorAll('main,.site-header,.site-footer,.service-rail,body>.xf-cta').forEach(el => el.inert = false);
  lastFocused?.focus();
}

function openService(type) {
  const content = {
    consumer: ["消费者服务", "[咨询方式、服务时间、门店查询与二维码待提供]"],
    business: ["商务咨询", "[商务合作类型、联系人与表单入口待提供]"],
    verify: ["官方验证 / 投诉", "[官方渠道验证、投诉流程与隐私说明待提供]"],
  }[type] || ["官方服务", "[内容待提供]"];
  dialogTitle.textContent = content[0];
  dialogDescription.textContent = content[1];
  document.querySelector('#service-complaint').hidden = type === 'verify';
  if (!dialog.open) { serviceLastFocused = document.activeElement; dialog.showModal(); }
  else dialog.querySelector('[value=close]').focus();
}

menuToggle.addEventListener("click", openDrawer);
drawer.querySelector(".drawer-close").addEventListener("click", closeDrawer);
scrim.addEventListener("click", closeDrawer);

document.addEventListener("click", (event) => {
  const routeLink = event.target.closest(".route-link");
  if (routeLink && formDirty && !window.confirm("你填写的原型信息尚未保存，仍要离开吗？")) {
    event.preventDefault();
    return;
  }
  const serviceButton = event.target.closest(".service-open");
  if (serviceButton) openService(serviceButton.dataset.service);
  if (routeLink && drawer.classList.contains("is-open")) closeDrawer();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
  if (event.key === "Tab" && drawer.classList.contains("is-open")) {
    const focusable = [...drawer.querySelectorAll('a[href], button:not([disabled])')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

dialog.addEventListener("close", () => serviceLastFocused?.focus());
window.addEventListener("beforeunload", (event) => {
  if (!formDirty) return;
  event.preventDefault();
  event.returnValue = "";
});

window.addEventListener("hashchange", renderWithTransition);

// Collapse the shared footer on phones and tablets; restore desktop columns above the breakpoint.
const footerPhone = matchMedia('(max-width:1199.98px)');
const footerGroups = [...document.querySelectorAll('.footer-columns > section,.footer-columns > nav')].map((group,index) => {
  const heading = group.querySelector('h2');
  return { heading, nodes:[...heading.childNodes], items:[...group.children].filter(el => el !== heading), index };
});
function syncPhoneFooter() {
  footerGroups.forEach(({heading,nodes,items,index}) => {
    if (!footerPhone.matches) {
      heading.replaceChildren(...nodes);
      items.forEach(item => { item.hidden = false; item.removeAttribute('id'); });
      return;
    }
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'footer-mobile-toggle';
    button.textContent = nodes.map(node => node.textContent).join('');
    button.setAttribute('aria-expanded','false');
    items.forEach((item,i) => { item.id = `footer-mobile-${index}-${i}`; item.hidden = true; });
    button.setAttribute('aria-controls',items.map(item => item.id).join(' '));
    button.addEventListener('click',() => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded',String(open));
      items.forEach(item => item.hidden = !open);
    });
    heading.replaceChildren(button);
  });
}
footerPhone.addEventListener('change',syncPhoneFooter);
if (footerPhone.matches) syncPhoneFooter();

renderWithTransition();
window.setTimeout(() => document.body.classList.remove("is-loading"), reduceMotion.matches ? 0 : 760);
