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

## 搜索与 AI 收录

构建会生成以下公开入口：

- `/sitemap.xml`：包含多语言关联的站点地图
- `/robots.txt`：允许主流搜索引擎及 AI 搜索爬虫访问
- `/feed.xml`：全文 RSS Feed
- `/llms.txt` 与 `/llms-full.txt`：面向 AI 工具的内容索引

如需验证站点所有权，请在 `.env.local` 中填写对应平台提供的验证值，并重新构建。支持 Google、Bing、百度、360、搜狗和 Yandex。

配置 `INDEXNOW_KEY` 或百度搜索资源平台提供的完整 `BAIDU_PUSH_ENDPOINT`，部署最新构建后主动提交 URL：

```bash
npm run submit:indexing
```

提交前可用 `npm run submit:indexing -- --dry-run` 核对 URL 数量。验证值和百度提交地址不得提交到仓库。

上线、验证和各站长平台的操作顺序见 [搜索收录运行手册](docs/search-discovery.md)。

## 发布文章

在以下目录添加 Markdown 文件：

```text
content/zh-Hans/essays/<slug>.md
```

以现有文章的 Front Matter 为模板。添加文件后重启开发服务器，使静态路由参数生效。

## 生成翻译

复制环境变量示例，填入 OpenAI API 密钥，再将变量导入当前 shell：

```bash
cp .env.example .env.local
# 编辑 .env.local 后执行：
set -a
source .env.local
set +a
```

生成单个语言版本：

```bash
npm run translate -- --locale en
```

强制重新生成翻译：

```bash
npm run translate -- --locale en --force
```

确认 API 费用后，生成全部目标语言：

```bash
CONFIRM_ALL_TRANSLATIONS=1 npm run translate -- --all
```

译文以普通 Markdown 文件保存，并包含 `source_hash`；源文未变时会跳过生成。简体中文原稿使用 `original`，人工审校后的译文使用 `author-reviewed`，未经审校的译文保留 `ai-translated` 标记。

翻译状态、非中英文页面的页底提示、相对链接和新增语言检查清单见 [多语言发布规范](docs/localization.md)。

## 语言规则

`languages.json` 包含 185 个语言标签：采用现行 ISO 639 Set 1 列表，并以 `zh-Hans` 和 `zh-Hant` 取代 `zh`。地区变体会匹配相应的基础语言，例如 `zh-Hant-HK` 和 `zh-Hant-TW` 均匹配 `zh-Hant`。

所有正式内容都使用显式语言前缀，例如 `/en/`、`/zh-Hans/`、`/ja/` 和 `/en/essay/<slug>/`。`/` 是自动语言入口，不承载正式英文版本；历史无前缀文章路径仅作为不收录的兼容跳转入口。

顶部使用无文字的地球图标打开可搜索语言选择器。选择器只列出已经发布的语言，并按当前页面跳转到对应译文；完整的可抓取语言目录位于 `/languages/`。非中英文页面底部提供同页 `/en/` 英文版和 `/zh-Hans/` 中文版链接。完整规则见 [多语言发布规范](docs/localization.md)。
