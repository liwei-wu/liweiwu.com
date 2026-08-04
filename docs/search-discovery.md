# 搜索与 AI 收录运行手册

代码负责提供可抓取、可理解和可提交的站点；域名、部署和站长账号仍需在生产环境中完成。建议严格按以下顺序操作。

## 1. 上线前

1. 将 `liweiwu.com` 指向实际托管服务，并启用 HTTPS。
2. 确认根域名是唯一规范域名；`www`、HTTP 和旧域名应永久重定向到对应的 HTTPS 根域名 URL。
3. 生产构建使用 `NEXT_PUBLIC_SITE_URL=https://liweiwu.com`。
4. 不要在 CDN、WAF 或防爬策略中拦截搜索引擎和 AI 搜索爬虫。
5. 如果部署在中国大陆服务器，先完成 ICP 备案；如果部署在境外，选择对中国大陆连接稳定的节点和 CDN。

站点字体、脚本和图片均由本站托管，页面渲染不依赖境外第三方资源。

## 2. 站点所有权验证

在对应平台创建站点后，把平台给出的验证值写入 `.env.local`：

```dotenv
GOOGLE_SITE_VERIFICATION=
BING_SITE_VERIFICATION=
BAIDU_SITE_VERIFICATION=
SO_SITE_VERIFICATION=
SOGOU_SITE_VERIFICATION=
YANDEX_SITE_VERIFICATION=
```

重新构建并部署，再在平台中完成验证：

- [Google Search Console](https://search.google.com/search-console/about)
- [Bing Webmaster Tools](https://www.bing.com/webmasters/about)
- [百度搜索资源平台](https://ziyuan.baidu.com/)
- [360 站长平台](https://zhanzhang.so.com/)
- [搜狗站长平台](https://zhanzhang.sogou.com/)
- [Yandex Webmaster](https://webmaster.yandex.com/)

验证值不是应用运行所需的秘密，但仍建议只保存在部署环境中。百度主动提交地址包含令牌，必须按密钥管理。

## 3. 提交抓取入口

在 Google、Bing、百度、360、搜狗和 Yandex 中提交：

```text
https://liweiwu.com/sitemap.xml
```

同时检查以下地址均能直接返回成功响应，且不要求登录、不触发验证码：

```text
https://liweiwu.com/robots.txt
https://liweiwu.com/sitemap.xml
https://liweiwu.com/feed.xml
https://liweiwu.com/llms.txt
https://liweiwu.com/llms-full.txt
```

## 4. 主动提交更新

从 IndexNow 获取一个密钥，并把它配置为 `INDEXNOW_KEY`。百度搜索资源平台会提供包含站点和令牌的完整提交地址，把它配置为 `BAIDU_PUSH_ENDPOINT`。

先构建并部署。部署会公开 `/indexnow-key.txt`，脚本会在提交前核对线上密钥。然后运行：

```bash
npm run submit:indexing -- --dry-run
npm run submit:indexing
```

脚本只提交带显式语言前缀的规范 URL，不提交根语言入口、历史无前缀跳转、重复 URL 或抓取辅助文件。

## 5. 发布后的验收

1. 用 Google 和 Bing 的 URL 检查工具分别检查 `/en/` 英文首页、`/zh-Hans/` 中文首页和一篇带语言前缀的文章。
2. 在百度抓取诊断中检查中文首页与中文文章。
3. 用 Google Rich Results Test 检查首页 `ProfilePage` 和文章 `BlogPosting` 数据。
4. 检查页面源代码中的 Canonical、`hreflang`、标题、描述、Open Graph 和 JSON-LD，而不是只检查浏览器运行后的 DOM。
5. 确认 WAF 对 `Googlebot`、`Bingbot`、`Baiduspider`、`OAI-SearchBot` 和 `PerplexityBot` 不返回 403 或 JavaScript 挑战。
6. 每次发布或修订文章后重新构建站点，并运行主动提交脚本。

## 6. 持续监测

每月检查一次各平台的索引量、抓取错误、结构化数据错误和搜索词表现。若删除或迁移文章，应同步更新 Sitemap、设置永久重定向，并通过 IndexNow 或站长平台通知搜索引擎。

搜索引擎和 AI 搜索系统自行决定是否抓取、索引、引用和排序。技术配置可以消除发现障碍，但不能保证收录或排名。
