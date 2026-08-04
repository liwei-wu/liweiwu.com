# Cloudflare 上线与运维

本文记录 `liweiwu.com` 的 Cloudflare 生产架构、首次上线结果、日常部署方式和故障排查边界。仓库不得保存 Cloudflare Token、R2 密钥或本机明文凭据。

## 生产资源

| 资源 | 当前值 |
| --- | --- |
| 域名注册商 | Namecheap |
| Cloudflare Account ID | `d304c8bb8c8f8779d4eb48aeda62111e` |
| Cloudflare Zone ID | `c988e19488ba12af07da46b338ed2ac7` |
| Zone | `liweiwu.com`，Full Zone，Free Website，`active` |
| 权威 Nameserver | `jack.ns.cloudflare.com`、`tara.ns.cloudflare.com` |
| apex Worker | `liweiwu-com` |
| www Worker | `liweiwu-com-www` |
| 规范站点地址 | `https://liweiwu.com` |

2026-08-04 首次完整上线后的生产版本是：

- `liweiwu-com`：`c71a72b9-2735-43fc-8c2c-2f24967beca7`
- `liweiwu-com-www`：`ea3c64fc-aba6-43af-8af7-fc3b5d775692`

版本 ID 会在每次部署后变化；以上值只作为首次上线基线，不应当被硬编码到脚本。

## 请求架构

Next.js 使用静态导出，生产构建位于 `out/`。

`liweiwu-com` 由 `wrangler.jsonc` 和 `worker.apex.js` 定义：

- Custom Domain 是 `liweiwu.com`。
- HTTP 请求以 308 永久跳转到同路径、同查询参数的 HTTPS URL。
- HTTPS 请求交给 `env.ASSETS`，从 `out/` 返回静态页面和资源。
- `not_found_handling` 使用 `404-page`，未知页面保持 404。
- `workers.dev` 关闭，生产入口只使用自定义域名。

`liweiwu-com-www` 由 `wrangler.www.jsonc` 和 `worker.www.js` 定义：

- Custom Domain 是 `www.liweiwu.com`。
- HTTP 和 HTTPS 均以 308 永久跳转到 `https://liweiwu.com`。
- 跳转保留原始路径和查询参数。

Cloudflare Custom Domain 会自动创建受代理管理的 DNS 记录并签发、续期边缘证书。当前可在 Zone 中看到 apex 和 `www` 的受代理 AAAA 占位记录 `100::`；不要把它们替换成虚构的源站 A 记录，也不需要手工创建 CNAME。

Zone 中还保留了 Namecheap 邮件转发所需的五条 `eforward*.registrar-servers.com` MX 记录和一条 SPF TXT 记录。部署网站时不得删除这些邮件记录。

## 开发机凭据入口

开发机不登录 Cloudflare。部署使用 DeepFlywheel 提供的本机明文配置运行器：

```text
$HOME/.config/deepflywheel/cloudflare/run
```

运行器从以下文件加载凭据；这个文件绝对不能复制到仓库、日志或聊天：

```text
$HOME/.config/deepflywheel/cloudflare/config/cloudflare.env
```

验证 Workers 身份时运行：

```bash
$HOME/.config/deepflywheel/cloudflare/run workers \
  npx --yes wrangler@4.118.0 whoami
```

当前权限边界经过实际上线验证：

- Workers Token 可以上传 Worker、发布版本并绑定 Custom Domain。
- DNS Token 可以读取和维护现有 Zone 的 DNS 记录。
- 现有 Workers/DNS Token 都不能创建 Zone，也不能调用 Zone activation check；这些操作需要额外的 Zone Write 权限。
- 新域名若仍使用当前 Token，应在管理机创建 Zone。注册商 Nameserver 修改仍须在注册商后台完成。

## 日常发布

上线前先确认依赖、构建与测试：

```bash
npm install
npm test
```

发布 apex 和 `www`：

```bash
$HOME/.config/deepflywheel/cloudflare/run workers npm run deploy:cloudflare
```

`deploy:cloudflare` 会依次执行生产构建、apex Worker 发布和 `www` Worker 发布。Wrangler 固定使用 `4.118.0`，避免不同开发机自动选取不同版本。

如只需重新发布其中一个 Worker：

```bash
# apex
$HOME/.config/deepflywheel/cloudflare/run workers \
  npx --yes wrangler@4.118.0 deploy

# www
$HOME/.config/deepflywheel/cloudflare/run workers \
  npx --yes wrangler@4.118.0 deploy --config wrangler.www.jsonc
```

Custom Domain 已写入 Wrangler 配置，正常发布不需要再手工修改 DNS。

## Namecheap 与首次激活记录

2026-08-04 首次上线时，在 Namecheap 将域名的 Custom DNS 设置为：

```text
jack.ns.cloudflare.com
tara.ns.cloudflare.com
```

Cloudflare Zone 从 `pending` 变为 `active` 后才绑定两个 Custom Domain。公共 DNS-over-HTTPS 已从 Cloudflare 和 Google 两侧确认新 Nameserver 与 Cloudflare SOA 生效，父区没有遗留 DNSSEC DS 记录。

当前 Namecheap 不需要进一步设置。除非 Cloudflare 为 Zone 重新分配 Nameserver，否则不要再次修改注册商配置。

## 发布后验收

每次部署至少检查以下行为：

```bash
# HTTP apex 必须升级为 HTTPS，并保留路径和查询参数
curl -I 'http://liweiwu.com/path?q=1'

# 主页与语言版本必须成功
curl -I https://liweiwu.com/
curl -I https://liweiwu.com/en/
curl -I https://liweiwu.com/zh-Hans/

# www 必须永久跳转到 HTTPS apex
curl -I 'https://www.liweiwu.com/path?q=1'

# 404 与抓取资源
curl -I https://liweiwu.com/definitely-missing/
curl -I https://liweiwu.com/sitemap.xml
curl -I https://liweiwu.com/robots.txt
curl -I https://liweiwu.com/feed.xml
```

预期结果：

- `http://liweiwu.com/...`：308，`Location` 指向相同路径的 `https://liweiwu.com/...`。
- `https://liweiwu.com/` 和已发布页面：200。
- `https://www.liweiwu.com/...`：308，`Location` 指向 HTTPS apex。
- 不存在的页面：404，而不是软 404。
- `sitemap.xml`：200，`Content-Type` 是 `application/xml`。
- TLS 校验成功，证书 SAN 至少同时覆盖 `liweiwu.com` 和 `www.liweiwu.com`；Cloudflare 可能同时加入其托管所需的其他 SAN，不依赖某个固定的通配符形式。

检查 Canonical 与证书：

```bash
curl -s https://liweiwu.com/ \
  | rg -o '<link rel="canonical"[^>]*>|<title>[^<]*</title>'

echo | openssl s_client -connect liweiwu.com:443 -servername liweiwu.com 2>/dev/null \
  | openssl x509 -noout -subject -issuer -dates -ext subjectAltName
```

检查生产部署历史：

```bash
$HOME/.config/deepflywheel/cloudflare/run workers \
  npx --yes wrangler@4.118.0 deployments list --name liweiwu-com

$HOME/.config/deepflywheel/cloudflare/run workers \
  npx --yes wrangler@4.118.0 deployments list --name liweiwu-com-www
```

## 故障排查

### Zone 长时间 pending

先从两个独立公共解析器确认 Nameserver，而不是只看本机缓存：

```bash
curl -s 'https://cloudflare-dns.com/dns-query?name=liweiwu.com&type=NS' \
  -H 'accept: application/dns-json'
curl -s 'https://dns.google/resolve?name=liweiwu.com&type=NS'
```

如果父区已经返回 Cloudflare Nameserver，只需等待 Cloudflare 后台激活检查。当前 Token 无权主动触发 activation check。

### Custom Domain 绑定失败

检查 apex 和 `www` 是否已有冲突的 A、AAAA 或 CNAME。只删除经过确认的 parking/旧托管记录；不得删除 MX、SPF 或其他所有权验证记录。成功绑定后，Cloudflare 会自动维护 Custom Domain DNS 与证书。

### 刚绑定时 TLS 或 Worker 暂时失败

新 Custom Domain 的 DNS、证书和边缘 Worker 配置可能短暂不同步。先确认 Workers Domains 中域名已经 `enabled` 且存在证书 ID，再等待边缘传播并复测；不要因为几秒钟的 TLS 握手失败立即重建 Zone。

### 本机 DNS 与公网结果不一致

开发环境可能缓存或映射旧 IP。用 Google/Cloudflare DNS-over-HTTPS 确认公网记录；必要时使用 `curl --resolve` 指向公共解析器返回的 Cloudflare 边缘 IP做独立验证。
