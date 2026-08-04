# 吴立威的个人写作网站

一个以 Markdown 为内容源的静态个人网站，关注 AI、软件与作者身份。设计参考 [darioamodei.com](https://darioamodei.com/)：克制的排版、单栏阅读、按需显示的目录，以及深浅色主题。网站支持多语言 URL，并明确标注 AI 翻译内容。

## 作者

- 中文名：吴立威
- 英文名：Liwei Wu
- 日文名：呉立威

## 本地开发

```bash
npm install
npm run dev
```

打开 <http://localhost:3000>。根路由只负责匹配用户保存的语言或浏览器语言，并跳转到显式语言路径；若没有对应的已发布版本，则进入 `/en/`。

构建并运行测试：

```bash
npm test
```

构建结果导出到 `out/`，可部署至任意静态托管服务。本仓库不含 Codex Sites 部署配置。

生产环境使用 Cloudflare Workers Static Assets；域名、Worker、凭据入口、发布命令和验收方法见 [Cloudflare 上线与运维](docs/cloudflare-deployment.md)。

## 搜索与 AI 收录

构建会生成以下公开入口：

- `/sitemap.xml`：包含多语言关联的站点地图
- `/robots.txt`：允许主流搜索引擎及 AI 搜索爬虫访问
- `/feed.xml`：全文 RSS Feed
- `/llms.txt` 与 `/llms-full.txt`：面向 AI 工具的内容索引

如需验证站点所有权，请在构建环境中设置对应平台提供的验证值，并重新构建。支持 Google、Bing、百度、360、搜狗和 Yandex。

配置 `INDEXNOW_KEY` 或百度搜索资源平台提供的完整 `BAIDU_PUSH_ENDPOINT`。提交脚本直接读取 `npm run build` 生成的 `out/sitemap.xml`，因此先完成生产构建和部署，再主动提交 URL：

```bash
npm run submit:indexing
```

提交前可用 `npm run submit:indexing -- --dry-run` 核对 Sitemap 中的 canonical URL。脚本不会自行扫描 `content/`，从而避免内容目录结构与提交 URL 规则发生漂移。验证值和百度提交地址不得提交到仓库。

上线、验证和各站长平台的操作顺序见 [搜索收录运行手册](docs/search-discovery.md)。

## 首页内容

各语言的首页介绍、SEO 标题和描述存放在：

```text
content/pages/home/<locale>.md
```

页面正文使用 Markdown，标题、描述和翻译状态使用 Front Matter。`site.config.ts` 只保存跨语言共用的作者、公司和外部链接等配置。

公司、高校等机构链接使用 `[名称][entity-配置键]` 引用，并由 `site.config.ts` 集中提供各语言官网地址；详细规则见 [多语言发布规范](docs/localization.md#机构实体与外部链接)。

## 发布文章

每篇文章使用独立目录，并以语言标签作为 Markdown 文件名：

```text
content/essays/<slug>/<locale>.md
```

例如中文原文位于 `content/essays/<slug>/zh-Hans.md`，英文和其他语言版本放在同一目录。以现有文章的 Front Matter 为模板；添加文件后重启开发服务器，使静态路由参数生效。

新文章可以先只发布简体中文原文，英文审校版和 A1 译文随后逐步加入。缺失的译文不会生成文章路由，语言选择器会将对应语言标为不可用；A1 译文发布时仍须同时具备简体中文原文和英文审校版。

当前发布模型只支持长篇 `essay`。未来若增加 short post，将作为独立内容类型、目录和路由设计，不预留尚未实现的 `note` 类型。

## 添加翻译

译文是仓库内的普通 Markdown 内容，不依赖翻译 API、密钥或运行时翻译服务。为一个 A1 语言发布文章版本时，需要先确保该语言的首页 `content/pages/home/<locale>.md` 已存在，再添加对应的 `content/essays/<slug>/<locale>.md`，并按 A0 参考文本逐篇翻译、检查 Markdown 结构和外部链接。

A0 语言属于受保护的权威参考版本：简体中文原稿使用 `original`，人工审校后的英文使用 `author-reviewed`。A1 文件使用 `ai-translated`，并在 Front Matter 中保存参考文本的 `source_hash`；修改 A0 内容后，应重新核对所有已发布的 A1 版本并更新该值。构建和测试会检查首页与界面文案完整覆盖已配置语言，并检查每篇文章已经发布的语言版本是否符合对应等级要求。

翻译状态、A1 页面的 AI 翻译提示、相对链接和新增语言检查清单见 [多语言发布规范](docs/localization.md)；品牌、产品、人物和核心概念的标准写法见 [内容翻译词汇表](docs/translation-glossary.md)；A0/A1 语言等级、出处和适用边界见 [翻译语言发布等级](docs/translation-language-tiers.md)。

## 语言规则

`config/locales.json` 是机器可读的语言发布配置，当前定义 2 个 A0 权威参考语言和 12 个 A1 AI 翻译候选语言。ISO 语言代码全集不再作为翻译目标清单；新增语言必须先确定发布等级、翻译状态和审校要求。地区变体会匹配相应的基础语言，例如 `zh-Hant-HK` 和 `zh-Hant-TW` 均匹配 `zh-Hant`。

所有正式内容都使用显式语言前缀，例如 `/en/`、`/zh-Hans/`、`/ja/` 和 `/en/essay/<slug>/`。`/` 是自动语言入口，不承载正式英文版本；历史无前缀文章路径仅作为不收录的兼容跳转入口。

顶部使用无文字的地球图标打开可搜索语言选择器。选择器只列出已经发布的语言，并按当前页面跳转到对应译文；搜索引擎通过各页面的 `hreflang` 与 Sitemap 发现语言版本，不再提供重复的 `/languages/` 目录页。A1 页面底部提供同页 `/en/` 英文版和 `/zh-Hans/` 简体中文版链接。完整规则见 [多语言发布规范](docs/localization.md)。
