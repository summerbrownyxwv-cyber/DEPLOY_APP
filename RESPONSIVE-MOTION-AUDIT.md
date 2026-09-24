# 寻艾官网 Responsive + Motion 审计

更新日期：2026-09-21。基线：DEPLOY_APP 当前 review 工作区；未切换分支、提交或上传。保留此前图片、文案和未提交修改。当前为已实施、继续验收中的版本，不代表所有人工视觉与性能验收均已完成。

## 1. 原网站主要问题

两套 Reveal 监听阈值过低；计数过快、离屏仍完成；路由在滚动复位前启动监听。页面级规则覆盖 tokens，字号、间距不一致。固定高度、轮播等高与滚动占位导致移动端空白。全局滚轮接管与滚动模糊增加负担。大量 PNG 原图直接用于页面。字体原文件约 26 MiB，按用户要求保留。

## 2. 修改文件

- `design-system/xunai/tokens/tokens.css`：扩充现有 --x- tokens、保留旧别名。
- `website-code/prototype/brand-refinement.css`：取消冲突的根 token 覆盖。
- `website-code/prototype/site-consistency.css`：共享排版、容器、媒体及页面移动端例外。
- `website-code/prototype/motion-refinement.js`、`motion-refinement.css`：统一可见性、计数、暂停、Reduced Motion 与销毁。
- `website-code/prototype/script.js`：路由滚动定位先于动效挂载，移除重复 Reveal，完善抽屉 inert。
- `website-code/prototype/brand-refinement.js`：图片清单映射、视频 poster、表格滚动容器。
- `website-code/prototype/ai-page.js`：删除重复计数实现。
- `website-code/prototype/brand-figma.js`：取消 grid 尺寸动画；时间线按真实卡片偏移定位。
- `website-code/prototype/stores-page.js`：服务分页自然定高，动态换图继续使用 WebP。
- `website-code/prototype/franchise-page.js`：手机六步折叠、取消滚轮接管和 sticky 占位测量。
- `website-code/prototype/about-page.js`：资讯 transform 循环、暂停控制及生命周期。
- `website-code/prototype/index.html`：样式顺序、图片清单加载、页脚图片引用。
- 新增 `scripts/prepare-responsive-images.cjs`、`scripts/check-responsive-motion.cjs`、生成的 `website-code/prototype/responsive-images.js` 与 `assets/responsive/`。
- `dist/` 仅由现有 `npm run build` 生成，不手改。`.DS_Store` 及先前 review 图片修改不是此次清理对象。

## 3. Design Tokens

在原有 CSS token 文件中维护 Typography、Spacing、Container、Media、Motion；不引入第二套生成体系。容器上限 90rem/80rem；页面边距、常规/紧凑 section 间距、字号、行高、字距、媒体比例和动效时长使用语义变量。页面构图保留必要例外，不宣称消除了所有历史硬编码。

## 4. Typography

保持 OPPO、筑紫明朝、Crimson 字体角色；根字号不缩放。rem + clamp 层级：Display 40–88、H1 32–64、H2 26–40、H3 20–28、Body Large 16–18、Body 15–16、Caption/Label 12–14、Navigation 15–16、Button 14–16px 等效范围。标题行高约 1.3–1.4，正文 1.75。手机表单输入统一 1rem，实测 16px。

## 5. Responsive 规则

内容自然定高；全出血背景保留，共享容器对齐。手机图文堆叠、表单单列、提交按钮全宽。常规 section 间距手机 56–80、平板 80–112、桌面 120–160px 等效范围；密集模块使用紧凑 token。未用全局 overflow-x:hidden 隐藏问题。

## 6. Image Ratio 与 WebP

Hero 桌面 21:9/16:9，手机 4:5/3:4；内容图 4:3/3:2，新闻 16:10，人物与门店竖图 3:4。裁切使用 cover，资料图使用 contain；非沉浸媒体限制视口高度。原始 width/height、容器比例共同预留空间。

已将 assets 中全部 **135 张 PNG/JPG/JPEG** 生成 WebP，包含未在当前页面使用的原素材；SVG 与已有 WebP 不重复转码。原图完整保留，无 AI 重绘。按 768/1440/1920 宽度生成、不放大；Logo 使用无损 WebP。普通图 quality 88。源文件合计 809,780,731 bytes；每图最大档 WebP 合计 41,693,310 bytes（约减少 94.85%，同时包含缩小尺寸的收益，不是同尺寸编码对照）。多档副本及原图均保留，因此仓库/发布包不会按该比例变小。

路由 HTML 使用生成清单设置 srcset/sizes、尺寸与 async decode，首屏 Hero eager/high；视频 poster 同步映射。动态门店图使用相同入口。转换命令需本机 sharp 环境：`NODE_PATH=/Users/dabao/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules node scripts/prepare-responsive-images.cjs`。

## 7. Motion

Micro 220ms、UI 400ms、Reveal 950ms、大视觉 1200ms、路由淡入 250ms。主缓动 cubic-bezier(.22,1,.36,1)。标题位移 32px，正文 16px；错峰 100ms，上限 500ms。

Reveal 观察有限高度阅读块，40% 可见才开始，扣除 Header 与底部 10% 视口。未完成即离开则取消复位；完成后本次访问不重复。后台停止、键盘聚焦立即可读；Reduced Motion 动态切换直接显示内容。路由卸载释放 observer/timer/rAF/监听。

资讯长带按约 22px/s 匀速 transform 循环，复制内容 aria-hidden/inert；hover、focus、离屏、后台和手动按钮可暂停。手动轮播不新增自动播放。AI 圆环增加暂停按钮；视频离屏暂停。保留局部必要交互，移除全局滚轮接管与滚动模糊。

## 8. Counter

45% 可见，延迟 200ms、时长 2200ms、easeOutCubic；错峰 100ms、最多 500ms。范围、分隔符、小数与单位保留，非数字文本静态。最终值占位防抖，辅助技术读取最终值而非逐帧播报。未完成离屏/后台复位，完成后只播一次；Reduced Motion 直接最终值。

## 9. Breakpoint

Mobile <768；Tablet 768–1024；Desktop 1025–1439；Wide Desktop ≥1440。≤1024 使用现有手机菜单，不挤压桌面导航。测试档位见下表。

## 10. 特殊 Mobile 适配

首页/AI：标题、正文与设备分开构图，设备与圆环重新定位，隐藏部分装饰。品牌时间线：可滑动卡片，正文自然排版，选中位置按实际宽度计算。服务卡项：仅当前页参与布局，第三页不保留前页高度。门店详情：结束图限制 85svh；语义 table 放入可聚焦局部滚动区域。加盟六步：首步默认展开，点击显示对应文字与原图。加入我们：430px 也单列。公告取消多余最小高度。表单保持现有前端校验、不新增接收后台。

## 11. 实测证据与尚未解决问题

### 自动/几何测试

`node scripts/check-responsive-motion.cjs` 通过：数字格式、阈值、延迟、早退/返回、后台、完成状态、Reduced Motion、销毁与 WebP 文件引用。

18 路由：`/`、`/brand/about`、`/brand/history`、`/brand/products`、`/stores/standard`、`/stores/black-gold`、`/stores/services`、`/stores/standard/detail`、`/stores/black-gold/detail`、`/ai`、`/franchise`、`/franchise/apply`、`/about/culture`、`/about/news`、`/about/join`、`/about/careers`、`/about/business`、`/about/overseas`。

| 视口 | 路由数 | 实际 viewport 宽度匹配 | 整页横向溢出 | 单个 H1 |
|---|---:|---|---|---|
| 375×812 | 18 | 通过 | 无 | 通过 |
| 390×844 | 18 | 通过 | 无 | 通过 |
| 430×932 | 18 | 通过 | 无 | 通过 |
| 768×1024 | 18 | 通过 | 无 | 通过 |
| 1024×768 | 18 | 通过 | 无 | 通过 |
| 1366×768 | 18 | 通过 | 无 | 通过 |
| 1440×900 | 18 | 通过 | 无 | 通过 |
| 1920×1080 | 18 | 通过 | 无 | 通过 |

后七档另查 figure 高度 >1.15 viewport：无命中。矩阵在 Reduced Motion 下检查几何，**不等于 144 组逐屏人工视觉验收，也不代表所有文字截断/图片焦点均已通过**。

### 交互抽查

- 浏览器计数实测：进入 120ms 仍 0%；约570ms 为37%；退出复位0%；离屏2400ms仍0%；返回重新开始，完成92%。
- 动态 Reduced Motion：数字最终值、隐藏 Reveal 为0。
- 手机加盟点击第4步：仅该步展开、图高约240px。
- 服务第3页：前两组高度0，第三组约274px，无等高尾部空白。
- 手机菜单 Escape 关闭并将焦点返回菜单按钮。
- 招聘空表单校验：5项无效、聚焦姓名；各手机表单输入实测16px。
- AI 暂停按钮 aria-pressed=true，三个环动画均 paused；手机设备组合截图已检查。
- 品牌2025年卡片：390px下卡片宽约284px，卡片左侧约26px、视窗左侧20px，最后年份可见。
- 手机门店表格保留语义与 tabindex=0；当前内容能完整适配，不强制制造横向滚动。
- dist 门店页面可渲染，图片引用 WebP；构建命令已通过。

### 未验证/限制

尚未完成冷缓存/慢网络 LCP、CLS 实测及前后基线对照；不能宣称 CLS<0.1。200% 浏览器缩放、真实 iOS/Android、全部路由逐屏截图、所有图片焦点、前进后退与深锚点组合仍需完成。原字体约26MiB未转换，慢网字体切换仍有风险。原图保留导致 dist 仍大，后续如需去掉发布包原图须另做引用审查，不能直接删除。

原有 `check-review-photos.cjs` 本次运行因本地缺少 playwright 包未执行；没有把它计为通过。测试通过的是新增纯 Node 状态测试及本地浏览器抽查。新闻、联系方式、备案等待补充内容和未接入的表单后台保持原状。

## 12. 推荐人工检查页面

优先首页与 AI 的手机/桌面构图、品牌页最后年份与资质原图、两种门店详情长页、服务最后一页、加盟六步在768/1024临界尺寸、资讯持续滚动暂停与键盘焦点、招聘和加盟表单。发布前需补齐上一节未验证项；本报告不将其标作已完成。

## 13. 2026-09-21：18 条批注修订

### 后续批注修订（最新规则）

2026-09-22追加两条：加盟流程取消滚动占位与sticky，按内容自然定高，上下固定48px；桌面整个模块可见时，区域内滚轮切换图片与步骤，首尾放行页面滚动，点击和键盘也可切换。手机保留折叠。总部支持图库figure不注册Reveal。1668×1398实测内容614px、区域710px、上下48px，图库Reveal目标0；合成wheel事件由第3步切至第4步，scrollY保持5054.5不变。390×844无横向溢出、仅一张折叠图片显示。真实触控板惯性和触摸手势仍建议人工体验。

后续10条及加盟4条批注覆盖本节下面的旧交互说明：移除全站暂停动效按钮、资讯控制条和加盟前后箭头；保留Reduced Motion与离屏暂停。门店视频按原片2730:1440比例完整展示，查询区缩至416px并右对齐，删除指定的两行占位说明（搜索结果反馈仍保留），优势说明降为16px。AI标题改为H2视觉字号，设备轨道放大，背景圆轨迹移入同一中心容器。

加盟输出图绝对填满4:3容器，右图额外放大12%以裁掉图内边带，并统一圆角。流程左侧恢复六个步骤，非当前步骤透明度40%，当前步骤显示正文；右侧六图共用正方形窗口、8px圆角，一次仅显示一图。桌面步距240px，顶部48px/底部32px固定留白，点击步骤与自然滚动同步。手机继续折叠展示，图片同为正方形。修复像素取整导致点击步骤偶尔停在前一步的问题。

新增实测：390×844、610×774、768×1024、1502×774、1502×1013，四个受影响路由共20组无整页横向溢出，指定控制组件均为0。610px输出图容器与图片尺寸均约547×410px；1502×1013流程六图均620×620px、8px圆角，仅一图可见。状态/资源测试与语法检查通过；不将几何检查称为完整视觉或真实设备验收。

本节覆盖前文相应旧规范。修改仍集中在现有 tokens、site-consistency.css、motion-refinement.js、franchise-page.js、brand-refinement.css 与 index.html，未更换框架、文案或字体；dist 由构建生成。

### 字号与组件比例

H1 使用 `clamp(2rem,1.5rem + 1.95vw,3.25rem)`（32–52px）；H2 使用 `clamp(1.625rem,1.25rem + 1.2vw,2.25rem)`（26–36px）；H3 保留20–28px。正文15–16px，导语16–18px，注释12–14px。标题继承所在明暗主题的前景色，注释使用语义次要色，不把深色背景文字强制改为深色。首页行链接使用 Body Large，品牌理念折叠标题使用 Button 层级，箭头与点击区域同步收敛。

AI Hero 按批注14明确保留原有 H1 比例，是字号例外；门店店型标题虽然语义为 H3，但作为独立图文区标题采用 H2 视觉层级。其他页面 H1/H2/H3 由共享规则统一。Header 收紧高度（手机64px、其余72px），不缩窄整页背景；移除旧手机76px覆盖。

| 批注 | 已实施处理 |
|---|---|
| 1 | 导航纵向留白缩小，保留既有容器和移动菜单 |
| 2、3 | 首页两组行链接降为统一 Body Large，箭头与行距协调 |
| 4、5 | 品牌 H1/H2 纳入新流式字号，不写1027px专用补丁 |
| 6 | 品牌理念左侧折叠项使用较小统一字号 |
| 7 | 时间线卡片等宽，自然等高；图片均显示，移除正文位移与过大高度 |
| 8 | Footer 修复为已存在且与附件同内容的Logo，CSS反白，避免失效文件名 |
| 9 | 门店 Hero 占满扣除Header后的视口，视频、色块与文字弹性布局 |
| 10 | 门店查询采用桌面左右双列、小字号；手机保持可读单列 |
| 11 | 全站共享折叠组件移除左侧装饰图标，仅保留右侧加减号 |
| 12、13 | 店型标题升级H2视觉层级，与图片顶边对齐；同类图文布局顶部对齐 |
| 14 | AI设备和圆环居中，标题独立参与文档布局，保留标题字号 |
| 15 | 报告图区不再注册Reveal，进入页面直接显示 |
| 16 | 总部输出两图统一4:3、相同圆角与尺寸 |
| 17、18 | 桌面六步图片sticky堆叠，缩短步进距离；左侧仅当前步骤显示并置顶，增加前后步按钮；手机保留六步折叠 |

### 本轮实测

- 重新运行上述18路由×8视口共144组：整页横向溢出为0，均仅一个H1。这是几何检查，不是全部逐屏视觉验收。
- 1027×994：Header72px，品牌H1约44.03px、H2约32.32px；前三张时间线卡片均约277×336px。
- 1668×994：两张总部输出图片均约614×461px，四角均8px；门店Hero922px，加Header72px恰为994px。
- 同视口门店查询两列约630px；两店型标题36px，标题与对应图片顶边坐标相同；重复左侧空alt图标为0。
- AI组合中心与页面内容中心同为826.5px；标题64px不变，与设备组合留有间隔；报告区Reveal目标为0。
- 桌面加盟切换第二步仅一条步骤文字显示，图片堆叠；手机仍沿用原折叠行为。断点切换时补齐当前步骤非负状态。
- `check-responsive-motion.cjs`、JavaScript语法检查、`git diff --check`与静态构建通过。

尚未完成项仍以第11节为准：尤其真实设备、全量图片焦点、冷缓存性能与200%缩放，不以本轮几何测试替代。建议人工重点确认新的桌面加盟叠图节奏是否符合预期，以及品牌时间线统一卡片的阅读密度。
