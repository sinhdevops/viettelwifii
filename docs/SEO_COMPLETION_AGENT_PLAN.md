# KẾ HOẠCH BÀN GIAO — HOÀN TẤT SEO BẰNG AGENT TEAM

> Đầu vào cho agent điều phối mới. Hãy đọc toàn bộ tài liệu rồi tự phân việc, triển khai, tích hợp và kiểm chứng; không dừng ở việc lập thêm kế hoạch.
>
> Snapshot bàn giao: đêm 11–12/11/2026 (Asia/Bangkok). Workspace hiện tại: `F:\WORKSPACE\viettelwifii`. Trạng thái dưới đây là snapshot, không thay thế việc đọc lại source và git diff.
>
> Người dùng đã cho phép sửa local toàn bộ lỗi SEO và tiếp tục mọi todo. Sau đó yêu cầu dừng code ở phiên cũ để viết kế hoạch này. Phiên mới nhận lệnh triển khai từ người dùng mới bắt đầu thực hiện tiếp. Chưa có quyền deploy/push/bật index production/gửi lead thật.

## 0. Lệnh giao việc — sao chép cùng tài liệu này cho agent mới

```text
Bạn là Lead/Integrator của repository viettelwifii. Hãy triển khai tiếp toàn bộ công việc trong docs/SEO_COMPLETION_AGENT_PLAN.md, không chỉ phân tích hay lập kế hoạch.

Đọc AGENTS.md, .codex/agents/vt_lead.toml, docs/MASTER_PROMPT_VIETTELUP.md, docs/BOARDROOM.md, tài liệu bàn giao và git status/diff trước khi sửa. Đây là source đang làm dở, không phải starter. Giữ mọi thay đổi của người dùng; không reset, không ghi đè hàng loạt.

Tự chia các đầu việc độc lập cho specialist/subagent theo ownership trong kế hoạch, tối đa 5 worker đồng thời. Chat chính làm Lead, không tạo coordinator thứ hai. Nếu custom roles không có, dùng worker chuẩn và truyền nguyên hướng dẫn profile tương ứng. Mỗi worker có task_id, file scopes, phụ thuộc, hợp đồng và tiêu chí đạt; không worker nào delegate tiếp.

Tiếp tục đến khi mọi việc kỹ thuật khả thi đã sửa và kiểm chứng. Ưu tiên sửa lỗi test dang dở, tích hợp source hiện tại, rồi các TODO chưa làm. Chỉ hỏi người dùng khi cần dữ kiện thật/quyền nội dung/cho phép thay đổi ngoài scope; vẫn làm phần độc lập. Không bịa tác giả, ngày cập nhật, giá, khả dụng, đánh giá, email hay giấy phép để đánh dấu hoàn tất.

Giữ đúng 175 content routes + 5 support routes, chữ hoa/thường và tra-sau. Không thêm route bài/author/pagination ngoài manifest nếu chưa được cho phép; có thể bổ sung section/anchor trong support pages hiện hữu. Không deploy, push, submit URL, gửi lead/SMS thật, đổi DNS/hosting hoặc bật production indexing. Mọi bài test form dùng mock.

Đọc local Next 16.4 docs trước khi sửa Next API. Tự kiểm, rồi QA độc lập, cuối cùng Lead chạy lại test/typecheck/lint/build/crawl/browser trên build mới. Không coi HTTP200 hay tsc là hoàn tất SEO. Ghi báo cáo kết quả + bằng chứng + phần còn chờ dữ kiện người dùng; không tự chấm hết nếu chưa đo.
```

## 1. Quy tắc bất biến và cách bắt đầu

1. Xác nhận working directory thực bằng `pwd`; không suy từ đường dẫn Harness.
2. Đọc [AGENTS.md](../AGENTS.md), [profile Lead](../.codex/agents/vt_lead.toml), [master prompt](MASTER_PROMPT_VIETTELUP.md), [Boardroom](BOARDROOM.md), [package.json](../package.json) và tài liệu này.
3. Kiểm `git status --short`, `git diff --stat`, đọc diff liên quan. Không reset/revert/stash tự động. Có file của người dùng đã thay đổi từ trước.
4. Đọc docs API tương ứng trong `node_modules/next/dist/docs/`. Next thực tế đã quan sát: **16.4.3**, React19, TS5.9, `cacheComponents:true`, `partialPrefetching:true`, `src/proxy.ts` thay Middleware. Recheck phiên bản thực tế, không nâng dependency hàng loạt.
5. Đọc ownership tại Boardroom, kiểm worker/server đang chạy. Chỉ Lead quản lý build/server/tích hợp cross-feature. Không giết tiến trình người dùng hoặc dùng chung output build với dev server.
6. Tạo todo/shared task board, phân công file rời nhau, cập nhật checkpoint Boardroom. Các đường dẫn mới thuộc Lead cho đến khi giao rõ.
7. Không sửa `.env.local`/secret của người dùng. Test origin dùng biến môi trường chỉ trong process; tuyệt đối không commit secret.

### Giữ nguyên manifest

- [approved-routes.ts](../src/lib/approved-routes.ts): **175** content routes: home1, package116, news36 (listing1 + article35), Internet18, collection4. Collection là `/internet`, `/goi-cuoc-gic`, `/goi-cuoc-nine`, `/goi-cuoc-roaming`.
- [site-routes.ts](../src/lib/site-routes.ts): **5** support: `/goi-cuoc-viettel`, `/gioi-thieu`, `/lien-he`, `/chinh-sach-bao-mat`, `/dieu-khoan`.
- Union SEO180; sitemap thực tế có thể ít hơn nếu trang bị noindex có lý do. Không nới test để che mất route.
- Case-sensitive paths, uppercase code và nested `/tra-sau/` là có chủ đích.
- Không gộp/xóa route hay redirect sang nguồn để xử lý duplication. Giữ exact manifest; thêm giá trị riêng hoặc đề xuất thay đổi cần phê duyệt.

## 2. Bằng chứng audit ban đầu — baseline, không phải kết quả sau sửa

Đọc [báo cáo gốc](../reports/seo-performance/SEO-AUDIT-2026-11-11.md), [199 dòng title/meta](../reports/seo-performance/audit-title-meta-fixes-2026-11-11.csv) và các JSON cùng thư mục.

Baseline build cũ (11/11/2026, localhost origin):

- 180/180 HTTP200, không broken link/title/description/canonical/H1 thiếu; CLS lab0–0.0131.
- 180 canonical/OG/sitemap quảng bá localhost — C1.
- 22 orphan, 25 URL không tới được từ home; 27 bài không có anchor trong HTML listing do client load-more.
- 121 title>60, 30 desc>160, 20 desc<70, 13 desc=title; 6 title<30; 2 desc default trùng.
- Chỉ WebPage/CollectionPage; không entity site/breadcrumb/Product/Article có điều kiện.
- 40 trang>1MB ảnh; roaming PNG1536×1024 khoảng2.3MB, dùng lặp; chưa có responsive srcset; gần mọi ảnh lazy kể cả hero.
- Source text gần nguyên văn viettelup.vn; 40 cặp nội bộ similarity≥0.7. Quyền text/asset chưa có chứng cứ xác nhận.
- Không byline xác minh, không chính sách biên tập, microdata NewsArticle thiếu trường, About/Contact ngắn.
- Thiếu security headers; thiếu llms/icon đủ; heading lỗi4 trang; anchor internal tuyệt đối; 404 title chung.

**Điều chỉnh cách hiểu audit:** thiếu một schema không tự là lỗi bắt buộc; Offer/Article/FAQ/SearchAction chỉ thêm khi đúng nội dung + dữ kiện thật. Title=H1 không tự là lỗi SEO. Không có lastModified khi chưa biết ngày sửa là đúng hơn bịa ngày. llms.txt/security.txt/PWA icon không bảo đảm tăng thứ hạng. Các nhận định hướng dẫn Google/FAQ trong audit cần kiểm lại nguồn chính thức hiện hành trước khi viện dẫn.

## 3. Trạng thái source đã sửa — ĐỌC TRƯỚC, KHÔNG LÀM LẠI

### 3.1 Đã có code nhưng chưa nghiệm thu tích hợp

| Nhóm               | Source hiện tại                                                                                                                                                                       | Trạng thái/việc cần kiểm lại                                                                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| C1 origin          | [page-seo.ts](../src/features/seo/page-seo.ts)                                                                                                                                        | Production http/loopback/127/8 fail-closed; development/test vẫn dùng local. Kiểm IPv6/local hosts + root/robots/sitemap consistency. Không tự bật publication gate mới.                                                                               |
| H4 copy            | [metadata-normalize.ts](../src/features/seo/metadata-normalize.ts)                                                                                                                    | Helper đã sửa title<=60/desc120–160, giữ cycle quantity; worker isolated check175 titles/descs unique. Phải chạy full SSR180 và đọc mẫu chất lượng.                                                                                                    |
| H1 schema          | [page-seo.ts](../src/features/seo/page-seo.ts)                                                                                                                                        | Export `buildSiteJsonLd`, `buildPageJsonLdGraph`, `serializeJsonLd`; verified Article chỉ khi author/date+verifiedFields; Product identity không Offer. Không fabricated author/InStock/seller.                                                        |
| Schema integration | [layout.tsx](../src/app/layout.tsx), [page-json-ld.tsx](../src/components/site-pages/page-json-ld.tsx)                                                                                | Lead đã wire site nodes + graph array, root robots theo getPublicationOrigin, themeColor. Chưa build/SSR kiểm. Không emit empty graph script nếu origin blocked là cải tiến nên xem xét.                                                               |
| Social             | [page-seo.ts](../src/features/seo/page-seo.ts)                                                                                                                                        | Explicit `/opengraph-image`, Twitter summary_large_image. [OG handler](../src/app/opengraph-image.tsx) có sẵn. Cần fetch image thật, tránh assume chỉ home có.                                                                                         |
| H2 listing         | [news-load-more.tsx](../src/components/news/news-load-more.tsx), [CSS](../src/components/news/news-load-more.module.css), [news-listing.tsx](../src/components/news/news-listing.tsx) | Đã thay useState bằng native nested details,6 card/batch, all35 links SSR. Kiểm JS disabled, mobile/desktop, keyboard, crawler. Chưa browser build mới.                                                                                                |
| News images        | [news-card.tsx](../src/components/news/news-card.tsx), [listing](../src/components/news/news-listing.tsx)                                                                             | next/image + sizes, hero/featured eager, heading sửa. Cần đo responsive/CLS/LCP và broken image trên build mới.                                                                                                                                        |
| H5/H6 template     | [article-layout.tsx](../src/components/news/article-layout.tsx)                                                                                                                       | Removed incomplete microdata; archive notice cho2024/2025/promos + truthful unverified author/source note. Ngày/fact không đổi. Chưa noindex policy riêng; chưa author data.                                                                           |
| Assets             | [optimized-images.json](../src/generated/optimized-images.json), [resolver](../src/lib/viettelup-source-assets.ts), [script](../scripts/seo/optimize-images.py)                       | 34 WebP derivatives trong `public/assets/optimized/`, originals giữ nguyên.20,233,729→5,035,538 bytes (-75.11% các file này, KHÔNG phải page transfer). `sourceAsset` áp mapping; `optimizedLocalAsset` export. Cần rà path direct không qua resolver. |
| Security           | [next.config.ts](../next.config.ts)                                                                                                                                                   | 5 headers mới: nosniff, SAMEORIGIN, referrer, permissions, CSP base/object/frame. Chưa HSTS, report-only CSP, www redirect. Kiểm chưa break embed/Turnstile/form.                                                                                      |
| Footer             | [site-footer.tsx](../src/components/layout/site-footer.tsx)                                                                                                                           | h5→h2, chưa visual check; CSS source tag selectors có thể ảnh hưởng.                                                                                                                                                                                   |
| 404                | [not-found.tsx](../src/app/not-found.tsx)                                                                                                                                             | Metadata title riêng + noindex mới thêm, phải kiểm build và HTTP404 thực. Không ép canonical404.                                                                                                                                                       |
| Sitemap            | [sitemap.ts](../src/app/sitemap.ts)                                                                                                                                                   | Chưa lastModified, đã ghi lý do: không có verified modification date. Không lấy capturedAt/publishedLabel/build time thay thế.                                                                                                                         |

### 3.2 Các lỗi/test dang dở cần ưu tiên ngay

**Lần full test gần nhất tại Lead:** `node node_modules/vitest/vitest.mjs run --configLoader runner` chạy191 tests: **188 pass,3 fail**.

- **2 fail asset test** ở [source-assets.test.ts](../tests/source-assets.test.ts): vẫn expect resolver trả PNG gốc. Code mới hợp lệ trả derivative WebP.
  - File test đã được thêm `import optimizedImages from '../src/generated/optimized-images.json'` nhưng **chưa dùng import**, chưa sửa expectations. Đây là thao tác dở khi người dùng chuyển yêu cầu sang viết plan; có thể lỗi lint unused import.
  - Sửa 3 assertions source/captured/reordered so với mapping của PNG, giữ nguyên test kiểm PNG gốc còn tồn tại + PNG signature.
  - Thêm kiểm derivative thực tồn tại, RIFF/WEBP signature, nhỏ hơn original và không làm mất query/hash; original vẫn có provenance.
- **1 fail breadcrumb test** ở [seo-core.test.ts](../src/features/seo/seo-core.test.ts): assertion cũ sai, nghĩ package hub không allowed. Worker đã sửa SAU lần test:
  - [page-seo.ts](../src/features/seo/page-seo.ts): parent label package hub từ “Internet”→“Gói cước Viettel”.
  - Test assert hub hợp lệ và narrow allowlist `[path]` chỉ home+leaf.
  - Formatting/lint/diff check worker pass, **chưa rerun Vitest/tsc sau fix này**. Đọc lại rồi chạy.
- Trước đó suite mới fail import `server-only`; đã thêm `vi.mock('server-only',()=>({}))` trong test mới, lỗi startup đó đã hết.
- Worker scoped typecheck/lint pass ở các mốc trước; KHÔNG có full build mới/crawl mới/browser mới.
- Worker thấy server cũ localhost3000 trả500. Không suy đó là lỗi build đã sửa; kiểm log/process/output trước khi tái dùng. Không kill server người dùng.

### 3.3 Những thay đổi không được vô tình ghi đè

- [internet-lead.spec.ts](../tests/e2e/internet-lead.spec.ts) đã có thay đổi trước đợt này: helper nhận code, test MESHVT01 giữ đúng itemId/title. **Không phải SEO patch; giữ nguyên**.
- [next-env.d.ts](../next-env.d.ts) cũng đã thay đổi/generate ở snapshot mới; kiểm diff, không tự coi của mình rồi revert.
- [Boardroom](BOARDROOM.md) có SEO-AUDIT-01; chưa ghi toàn bộ SEO fixes mới. Lead mới cập nhật với trạng thái thực, không tuyên bố verified.
- Nhiều script/report/asset đang untracked hoặc ignore. Không `git add -A`, không tự commit/push; phân biệt file final và artifact.

## 4. Phân công subagent — tối đa5 worker, ownership độc quyền

Lead giao đúng profile có sẵn trong `.codex/agents/`; nếu tên profile thực khác, glob/read rồi dùng đúng tên. Không tự đổi model/permissions.

### Wave A — hoàn thiện source (4 worker + Lead)

**A1 / SEO-CORE-FINAL / vt_seo_performance**

- Quyền ghi: `src/features/seo/**`, `src/app/robots.ts`, `src/app/sitemap.ts`, report namespace SEO.
- Đầu vào: audit, helper mới, content-schema, support registry (read-only).
- Làm: core regression/breadcrumb, metadata quality180, origin tests, graph correctness, offer/Article honest gates; freshness/noindex helper nếu Lead chốt; no fake lastModified.
- Không sửa root/layout/config/schema/tests/**.
- Handoff: API/type thay đổi, expected sitemap/index policy, test commands, before/after180 metadata table.

**A2 / NEWS-FINAL / vt_news**

- Quyền ghi: `src/components/news/**`, `src/features/news/**`, `src/content/news/**`, `src/constants/news/**` và type news nếu Lead giao rõ. Không sửa SEO core/shared schema.
- Làm: SSR35 links, native details usability, all news heading order, accurate archive notice, date `<time dateTime>` từ parse strict, source attribution/byline chỉ verified. Chốt6 bài audit stale bằng route thực có trong manifest.
- Không tự tạo author/date hiện tại. Không đổi fact2024 thành2026. Nếu nguồn chưa xác minh, giữ note và ghi blocker.
- Handoff:35 route coverage, valid dates, script-free links, viewport screenshots, đề nghị noindex route cụ thể cho Lead/SEO.

**A3 / IMAGES-PERF-FINAL / vt_assets_reference hoặc profile assets tương ứng**

- Quyền ghi: `public/assets/**` DERIVED ONLY, `src/lib/viettelup-source-assets.ts`, manifest optimized và script tối ưu; components image cụ thể CHỈ khi Lead chuyển quyền, không đụng News worker.
- Làm: review34 derivatives, tìm direct image refs bypass mapping, responsive variants hoặc gửi patch UI cho owner; đo original/derivative readability (ảnh chữ giá cước phải đọc được). Không upscale, không tải ảnh remote mới, không xóa original.
- Handoff: mapping, sizes/bytes, unchanged originals hashes, repeatable script, phần cần UI tích hợp.

**A4 / CONTENT-TRUST / vt_source_data**

- Ban đầu read-only inventory toàn source, tác giả/source/license/tariff/freshness.
- Quyền ghi: data evidence/report riêng; constants/content chỉ theo file grants từ Lead, tránh overlap NEWS và package/internet owners.
- Làm: bảng175 route evidence (source, capture, official current verification, rights status), ưu tiên duplicates40 pairs. Soạn factual improvements và editorial process trong support sections; Lead tích hợp.
- Không xem source công khai là quyền sử dụng; không suy người dùng là nhân viên Viettel nên có quyền text/ảnh nguồn. Không viết lại chỉ để đánh lừa duplicate detector.
- Handoff: verified vs missing fields, câu hỏi người dùng tối thiểu, patch factual có citation/evidence.

**Lead / INTEGRATION-TRUST-CONFIG**

- Sở hữu root/config/proxy/schema/routing/support/Boardroom; phân tiếp packages/internet/shared nếu cần waveB.
- Hoàn tất headers/host handling/icon/manifest/llms; About/Contact/editorial sections; root graph/metadata; integration tests.
- Không đồng thời sửa file worker giữ quyền.

### Wave B — scoped UI/link cleanup + QA

Sau khi A1/A2/A3 bàn giao, giải phóng scope rồi:

- `vt_packages`: `src/content/packages/**`, `src/components/packages/**`, constants package khi cần; relative anchors + heading + accurate unique content. Không đổi116 route/tariffs không có evidence.
- `vt_internet`: Internet components/content/constants tương ứng; responsive media/heading/relative links,18 detail và collection tương tác. Không break regional pricing/form product code.
- `vt_shared_home`: home/layout scopes được Lead cấp; carousel LCP strategy, anchor text và home direct assets, footer semantic/visual.
- `vt_qa`: `tests/**`, `reports/qa/**`; độc lập review diff + regression/browser matrix. Tests SEO colocated để SEO worker xong rồi QA read-only hoặc chuyển quyền rõ.
- SEO worker re-audit report sau tích hợp. Không nhiều agent build/crawl cùng lúc.

### Hợp đồng bắt buộc cho mỗi task

```text
Task ID / owner / allowed files / forbidden files
Input sources + dependencies + exported API unchanged/changed
Implementation acceptance criteria (có số đo/đường dẫn)
Tests actually run + exact commands + results
Changed file list + known limitations + proposed next owner
No deploy/push/real forms; no delegation; no Boardroom edits by worker
```

## 5. Work breakdown chi tiết và tiêu chí hoàn thành

### P0 — khôi phục baseline kiểm thử, không viết lại từ đầu

1. Read current tests/source and pending diff; sửa asset tests đúng hành vi mới, không xóa assertions để xanh.
2. Rerun core test + full suite; không chốt191 mãi nếu thêm test. Ghi count thực.
3. Chạy typecheck/lint scope rồi full. Giữ lỗi preexisting riêng, không giả full pass nếu chỉ scope.
4. Review graph array script + site nodes root tránh duplicates, empty graph và XSS (`serializeJsonLd` escape `<`).
5. Chạy route-scope check trước và sau mọi content/schema integration.

### P1 — C1 origin / indexing consistency

- Test production: http public, localhost, sub.localhost, *.local, 127/8 cả shorthand URL normalization, IPv6 loopback; invalid path/credentials/query/hash; mismatch caller origin.
- Valid production HTTPS origin: canonical/OG/schema/sitemap khớp cùng origin.
- Production loopback: không canonical localhost; root/page noindex, robots disallow all, sitemap rỗng, JSON-LD quảng bá URL không có.
- Development/tests local vẫn render được. Không tự sửa `.env.local` sang domain thật.
- Xem xét private/staging IP policy có chủ đích; document không tự nhận đã chặn toàn private network nếu chưa test.
- `isPublicationEnabled()` currently hardcodedtrue là inherited behavior; không tự diễn giải quyền sửa SEO thành quyền bật production indexing. Nếu thêm release gate phải fail-closed, Lead thiết kế + tests + hướng dẫn rõ, không silently đổi existing site policy.
- Origin guard chưa chứng minh DNS/TLS/hosting. Deployment setup chờ quyền riêng.

### P2 — schema và social metadata trung thực

- `WebSite` + publishing identity root, stable ids. Không bịa Viettel official ownership/legal company/contact/logo. Website brand entity≠claim official carrier.
- Breadcrumb liên kết route tồn tại, label đúng; nested tra-sau không link parent404; narrow allowlist không bị mở rộng.
- Article chỉ khi tác giả + date verified và hiển thị khớp. Không gán website làm author của bài copied. Nếu thiếu giữ WebPage, ghi “data pending”, không đánh “schema lỗi” chỉ vì không đủ rich result.
- Product identity khi product.id khớp path; không Offer/priceValidUntil/InStock/seller/ratings từ snapshot cũ. Nếu có current official offer evidence, Lead mở rộng schema contract an toàn và UI cũng hiển thị condition/verification date; otherwise omit.
- Không SearchAction nếu site không có search thật, không review/rating/FAQ rich-result hứa hẹn.
- All180 intended ready routes: OG:image+Twitter image actual200/image MIME, absolute URLs resolve đúng metadataBase, card large; article-specific image chỉ lấy từ source được phép có thật.
- Test JSON-LD native arrays/graphs; crawler cũ có thể chỉ đếm top-level object, phải nâng parser hỗ trợ array/`@graph` thay vì kết luận thiếu schema.

### P3 — H2 SSR crawlability / H6 freshness

- `/tin-tuc` HTML thô phải có `<a href>` tới đủ35 article paths, không chỉ Next flight payload/script.
- Native details hoạt động khi JS tắt, keyboard Enter/Space, focus visible; mobile/desktop không hide mọi đường tới article.
- Dùng cùng35 registry records, không tạo pagination route ngoài manifest. Nếu muốn pagination thực phải xin mở scope, không giả `?page=2` là pagination.
- Crawl BFS từ home:0 approved page orphan và0 unreachable (ngoại trừ exclusion có lý do được ghi). Không coi việc có trong sitemap là internal inbound link.
- Giữ published date cũ; cảnh báo archived cho historical/promos. Thay regex broad bằng explicit reviewed route policy nếu đang gắn sai bài còn current.
- Audit ghi `/tin-tuc/goi-cuoc-viettel-thang-2-2025` nhưng actual manifest là `/tin-tuc/goi-cuoc-4g-5g-viettel-cap-nhat-thang-2-2025`; dùng actual path, không tạo route typo.
- Với event historical vẫn hữu ích: archive notice có thể đủ, tuổi bài không tự là lý do noindex. Với promotion hết hạn/misleading hoặc chưa kiểm chứng: Lead chốt noindex/exclude sitemap (route vẫn render), áp nhất quán ở metadata/robots/schema/sitemap và tests. Noindex không thay thế sửa CTA gây hiểu lầm.
- Đối chiếu source article SMS/CTA cũ, không kích hoạt thật; không tự thay ưu đãi hiện tại bằng đoán.

### P4 — H3/M3/M2 images và hiệu năng

- Kiểm34 derived files; original hashes giữ nguyên; mapping local-only; unknown remote không trở thành hotlink.
- PNG roaming direct refs ở home constants cần đi qua `sourceAsset`/`optimizedLocalAsset`, không chỉ source capture keys.
- Rà home, collection, source news body, Internet, package cards: ảnh raster lớn cần responsive `sizes/srcset` hoặc next/image; SVG/icon nhỏ giữ simple/unoptimized khi hợp lý.
- Hero/LCP: eager và fetchPriority high/preload phù hợp docs Next16.4; không preload mọi slide/mobile+desktop đồng thời. Offscreen lazy. Width/height/aspect ratio giữ đúng.
- Đặc biệt đọc [home-carousel.tsx](../src/components/home/home-carousel.tsx) và UI thực trước khi sửa first slide strategy.
- Không bật optimizer toàn ảnh mù quáng làm CLS/crop/chậm. Kiểm next/image quality/allowed local query behavior trên build thật.
- Mục tiêu planning: roaming WebP<=150KB nếu readable; nếu q82 vượt thì thử quality/width đúng displayed size và giữ readability, ghi tradeoff. Không phá artwork để ép số.
- Đo cả transferred eager assets (network thực) và total referenced assets; details đóng/lazy vẫn là references, crawler cũ có thể cộng toàn bộ và overstate first-load weight.
- Giảm trang>1MB ảnh có bằng chứng; không hứa0 trang nếu long article hợp lệ nhiều ảnh. Report nguyên nhân phần còn lại và số giảm.
- Đo JS/DOM sau SSR details: có thể HTML tăng, client payload giảm. Không xóa nội dung để hạ điểm; xem client boundaries/duplicate mobile cards/libraries, giữ slider/dialog/form hoạt động. Không upgrade deps để “tối ưu”.

### P5 — metadata và heading/link cleanup

- Render180 route mới: title meaningful, không cắt mất code/chu kỳ, gợi ý30–60; desc120–160, unique/khác title. Character gates là editorial budget không phải Google hard limit.
- Manual review home, MI50K,5G20,3N,7N,postpaid MXH120,NETVT01,GIGA4,long news titles và support pages.
- Không thêm brand lặp, generic CTA vô nghĩa hay dấu câu cắt dở để đủ độ dài; helper không thay thế authored per-page copy nếu câu xấu.
- Title=H1 **không tự sai**: chỉ sửa7 case khi có value; không ép khác để làm audit xanh.
- Heading: oneH1 per route; H1→H3 trên khuyến mại20-7, H2→H4 roaming, Internet/footer; đọc whole page, sửa đúng semantic chứ không đổi mọi heading global. Footer h2 patch mới phải visual regression.
- Internal anchors: các `href={siteConfig.url('/...')}` trong compiled packages/news/home đổi path local/Link khi phù hợp; bỏ unused imports sau. Canonical/OG/schema/sitemap vẫn absolute. External/SMS/tel giữ nguyên semantics/rel.
- Không tự redirect case variants. Query canonical clean;404 true status404/noindex/title riêng, không fake canonical.
- Anchor labels có context: thêm accessible name chứa package/article title cho “Chi tiết/Xem thêm” khi cần, không nhồi keyword hoặc thay mọi CTA.

### P6 — H5/M7 content trust / duplicate risk

- About/Contact: nâng nội dung hữu ích, không viết filler400 từ chỉ vì gate. Có thể đạt>=400 bằng phạm vi, cách tra cứu, giới hạn, quy trình liên hệ, bảo vệ dữ liệu, correction request, editorial/source methodology.
- Giữ tên Lê Văn Sinh/khu vực đã có như user-supplied, không tự gán giấy phép/nhân viên/chứng chỉ/pháp nhân. Email/full address chưa có -> ghi dữ kiện thiếu, không bịa mailbox.
- Dùng section anchors trong `/gioi-thieu` cho chính sách biên tập/tác giả/corrections, không thêm route mới nếu chưa authorized.
- Policy phải mô tả thực tế: không nói “mọi giá đã verified” hay “đã xin quyền” nếu chưa làm. Không đổi ngày hôm nay thành published/updated cho bài cũ.
- Source attribution thật nếu có URL gốc bằng chứng; `source.url` hiện nhiều record trỏ `siteConfig.url` (local), **không tự coi đó là provenance external**. Dò evidencePaths/captures để xác định nguồn thật.
- C2: inventory quyền/attribution cho text/images/fonts/logo. Chỉ written confirmation/license phù hợp mới đánh cleared. Public accessibility không phải permission.
- Nội dung riêng: bảng facts/điều kiện/đối tượng/checklist/troubleshooting/FAQ có nguồn verified cho từng code, không generic paragraph thay code. Không tự viết lại tariff.
- Internal duplicates40 pairs: phân tích main content bỏ header/footer/template, thêm value riêng khi evidence có; không gộp route trái manifest, không dùng cross-canonical để che copied pages.
- Nếu không có rights/facts: hoàn tất toàn bộ kỹ thuật có thể làm, bàn giao danh sách human blockers theo route/asset, không tuyên bố toàn bộ content đã hoàn thiện.

### P7 — security, host, llms và manifest

- Review5 headers đã thêm trong next.config; thực fetch header trên new build. CSP hiện là baseline `object-src 'none'; base-uri 'self'; frame-ancestors 'self'`, **không phải strict CSP hoàn chỉnh**. Không thêm unsafe policy hoặc nonce phá static caching chỉ để tick checkbox.
- Kiểm YouTube embedSD90/Turnstile optional/forms/navigation sau policy. Không bật tracking.
- HSTS chỉ cho HTTPS domain đã kiểm soát/TLS xác minh; không preload/includeSubDomains mù quáng. Local HTTP không ép HSTS upgrade.
- Không thêm X-Robots-Tag toàn site `index` làm override noindex. COOP/COEP không bắt buộc SEO và có thể break integrations; chỉ có lý do/test mới thêm.
- www canonicalization: dựa configured public origin, chỉ redirect counterpart exact host tới canonical, giữ path/query; không arbitrary Host header/open redirect, không loop, local/fixture không redirect ra production. Proxy hiện matcher chỉ content nested; nếu thay phải preserve unknown404 và metadata/assets/API exclusion.
- Không map URL cũ/source domain khi không có migration plan/quyền domain.
- `/llms.txt`: plain text truthful site summary + các hubs/public support URLs + disclaimers; không include leads/admin/secrets, không bảo đảm LLM dùng/SEO tăng. Dùng route handler config origin nếu cần, kiểm route-scope script trước; không mở thêm marketing content route.
- `security.txt` optional: chỉ tạo RFC9116 hợp lệ nếu có Contact thực đang được giám sát + Expires đúng; không dùng phone/email giả. Thiếu contact ghi conditional deferred.
- Manifest hiện chỉ favicon: bổ sung id/scope/icon192/512/apple180, thiết kế đơn giản lấy artwork brand được phép hoặc typographic site identity; không upscale favicon48 rồi gọi high-quality. Không tự nhận maskable nếu chưa safe-zone test; default purpose any trước.
- ThemeColor root đã thêm, kiểm head thật. Kiểm MIME/dimensions/icon transparency và manifest linked.

### P8 — sitemap lastModified có kiểm chứng

- Hiện không có field verified `dateModified` trong content-schema. `capturedAt` là ngày chụp; publishedLabel là ngày đăng, không phải ngày sửa.
- Nếu không có source modification evidence: **giữ omit và đánh resolved-by-design**, không pending vô hạn chỉ để đủ field.
- Nếu có evidence thật: Lead mở schema optional validated ISO + verification provenance; SEO chỉ emit cho record có evidence; UI “cập nhật” cũng khớp. Không default newDate/build timestamp.

## 6. Quy trình chạy và chứng cứ kiểm chứng

### 6.1 Commands nền tảng (PowerShell, chạy tại root)

```powershell
pwd
git status --short
node scripts/verify-route-scope.mjs
node node_modules/typescript/bin/tsc --noEmit
node node_modules/eslint/bin/eslint.js .
node node_modules/vitest/vitest.mjs run --configLoader runner
```

- Project pnpm pinned11.25; nếu `pnpm build` bị store lock, dùng installed CLIs, không tự sửa global package manager/store.
- Vite/Playwright từng `spawn EPERM` dưới sandbox Windows do pipe boundary. Tuân thủ quyền phiên mới; nếu denied không retry đổi pool/path mù quáng. Chỉ xin exact escalation khi phiên cho phép; policy never-ask thì báo limitation và làm independent work. Phiên cũ Lead đã chạy full Vitest được khi danger-full-access.
- Không dùng format toàn repo; format changed files sau khi workers release ownership.

### 6.2 Build thật và hai mode origin

Lead độc quyền build, đọc local docs/config/env loading trước. Dùng process-only environment; không ghi `.env.local`.

**ModeA fail-closed**: production build với `NEXT_PUBLIC_SITE_URL=http://localhost:3000` -> render approved routes vẫn đúng, nhưng robots blocked/sitemap empty/no localhost canonicals. Có thể unit/integration tests policy trước; nếu full build modeA cần tách output để không overwrite modeB.

**ModeB representative HTTPS**: build cục bộ với origin HTTPS fixture hoặc configured site, chỉ bind server127.0.0.1; đây không phải deploy. Không submit Search Console. Kiểm `.env.local` không override process env rồi ghi origin thực trong report.

```powershell
# Chỉ thực hiện khi Lead đã kiểm không có server dùng cùng output .next.
$env:NEXT_PUBLIC_SITE_URL = 'https://seo-verification.example'
node scripts/verify-route-scope.mjs
node node_modules/next/dist/bin/next build
node scripts/verify-built-styles.mjs
# Khởi động managed background job bằng công cụ agent; lấy ID, port riêng chưa dùng.
node node_modules/next/dist/bin/next start -H 127.0.0.1 -p 3100
```

Xóa/restore biến process khi xong, không thay secret. Không start bằng detached Start-Process không quản lý. Job ID phải collect output/stop khi hết cần; không kill process có sẵn của người dùng.

### 6.3 Crawl all180 không phụ thuộc sitemap rỗng

- Update/read audit scripts trước: `audit-site.mjs` có `--base/--out`; `audit-links.mjs` dùng AUDIT_BASE nhưng output hardcoded baseline; vài script còn hardcode localhost.
- Thêm `--out`/run directory cho scripts cần thiết, tránh overwrite JSON baseline11/11. Output mới `reports/seo-performance/final-<run-id>/...`.
- Có một path list union manifest175+support5 để crawl all180, kể cả noindex không có sitemap. Không để empty sitemap→0 pages rồi audit “pass”.
- Request origin local, resolve URLs theo canonical origin nhưng map internal host về local khi crawl; không request `.example` qua network.
- Parse metadata có thể stream ở body: ghi user-agent/bot và completion; không chỉ regex head nếu Next behavior khác. Parse JSON-LD array/@graph.
- BFS home thật bằng anchors, không dùng sitemap làm edges. Phân biệt unique article paths với duplicate responsive card anchors.
- Validate404 + case variants + trailing slash308 + query canonical; sitemap excludes noindex đúng policy.
- Fetch OG image, optimized srcset variants, icons, manifest, llms/security status/header.

### 6.4 Browser/interaction matrix

Ít nhất390/768/1440px, routes đại diện:

1. `/` hero/carousel/menu/cards.
2. `/tin-tuc` initial/full native details + JS disabled.
3. `/tin-tuc/so-sanh-roaming` large image + current article.
4. `/tin-tuc/khuyen-mai-nap-the-viettel-20-7` headings/archive.
5. `/tin-tuc/tong-hop-cach-dang-ky-xem-tron-bo-euro-2024-tren-tv360` archived offer/CTA.
6. `/goi-cuoc-viettel/5G20`, `/goi-cuoc-viettel/3N` long body/schema.
7. `/goi-cuoc-viettel/tra-sau/MXH120` nested variant/form mapping.
8. `/internet/NETVT01`, `/internet`, `/goi-cuoc-roaming`, `/goi-cuoc-nine`.
9. `/gioi-thieu`, `/lien-he`, nonexistent404.

Checks: no pageerror/hydration warnings/broken images/horizontal overflow; main text/readability/oneH1; keyboard disclosure/menu/dialog; preserved CTA product IDs; source text/table width; LCP first image and lazy rest.

Use [playwright.config.ts](../playwright.config.ts): `VIETTELUP_E2E_MODE=production` + explicit `VIETTELUP_E2E_BASE_URL=http://127.0.0.1:3100` để không autostart khác server. Read test files trước; API requests đều mocked để không gửi lead thật. Existing internet test changes giữ nguyên.

### 6.5 Perf và QA độc lập

- Rerun same12 paths×2 device configs với cold cache nếu khả thi; ghi network/throttle/environment. LCP/CLS local là lab, không fieldCWV/GSC.
- So before/after transferred images/JS/CSS/DOM/HTMLgzip, không lấy total derivative savings làm page performance savings.
- QA độc lập kiểm source và output, không chỉ lặp self-check worker. Findings theo severity + repro + file lines + expected/actual; owner sửa rồi QA retest.
- Không tạo scoreSEO/Lighthouse/CWV mới nếu không chạy measurement tương ứng. Không đảm bảo index/ranking.

## 7. Checklist đóng việc — trạng thái phải có bằng chứng

Mỗi mục gắn một trong: `verified`, `implemented-not-verified`, `resolved-by-design`, `waiting-owner-data`, `out-of-scope/requires-authorization`.

- [ ] Preserve175+5 routes/case/path; route check và inventory tests pass.
- [ ] Fix asset regression tests + breadcrumb rerun; full test count/pass thực.
- [ ] Typecheck/full lint/build/styles verification pass (hoặc preexisting fail riêng có evidence).
- [ ] Production local/insecure origin failclosed; valid HTTPS canonical/OG/sitemap correct.
- [ ]180 page crawl successful, oneH1/no missing metadata; no accidental noindex/index mismatch.
- [ ] Titles/descriptions quality + duplicate checks cả support pages.
- [ ] Site/page graph valid/safe, no fake author/offer, social images200.
- [ ]35 news links nativeSSR;0 orphan/0unreachable có ý nghĩa.
- [ ] Historical route policy explicit; notice/CTA/index/sitemap consistent.
- [ ] Image derivative originals preserved, responsive/LCP verified, actual page transfer reduced.
- [ ] Heading/relative links/404 behavior verified.
- [ ] About/Contact/editorial useful + source/identity honest; missing evidence reported.
- [ ] Security headers measured; no regression integration; host redirects safe nếu implemented.
- [ ] Manifest/icons/theme/llms verified; security.txt chỉ nếu Contact thật.
- [ ] Sitemap modified dates either evidence-backed or intentionally omitted.
- [ ] Duplicate/rights/current-offer inventory completed; không gọi cleared khi thiếu chứng cứ.
- [ ] Browser3 widths + JSdisabled + mocked form regression pass.
- [ ] QA độc lập final findings closed or human blockers explicit.
- [ ] Boardroom + final report + run commands/evidence saved; no deploy/push/real leads/index activation.

## 8. Bàn giao cuối cần xuất cho người dùng

1. `reports/seo-performance/SEO-FIX-FINAL.md`: summary before/after, each finding ID, exact implementation, validation, outstanding condition.
2. `reports/seo-performance/final-<run-id>/`: crawl/link graph/meta/schema/image/perf JSON + screenshots/chứng cứ lệnh; giữ baseline cũ.
3. `reports/qa/SEO-FIX-FINAL.md`: independent review + retest, không biến authored self-check thành QA độc lập.
4. `docs/BOARDROOM.md`: updated ownership/task states/checkpoint/limitations.
5. Nếu thiếu facts: `reports/seo-performance/OWNER-INPUTS.md` bảng từng dữ kiện cần: item/route/asset, lý do, evidence chấp nhận, ảnh hưởng, việc nào vẫn xong. Hỏi gọn một lần, không yêu cầu user gửi lại sitemap.

### Các dữ kiện có thể chỉ người dùng/owner cung cấp

- Quyền sử dụng text/images/fonts/logo nguồn, điều kiện license/attribution cụ thể.
- Danh tính tác giả/người biên tập và sự đồng ý hiển thị; không mặc định website owner là author35 bài.
- Email thực đang nhận hỗ trợ/security, địa chỉ đầy đủ/pháp nhân nếu muốn công khai; không suy từ khu vực hiện có.
- Official/current tariffs, eligibility, validUntil, discontinued promotions, verification timestamp/source.
- Domain/DNS/TLS/hosting/config và quyền deploy/index production (quyền riêng, chưa có).

**Định nghĩa hoàn tất:** mọi việc kỹ thuật khả thi được triển khai, test/build/crawl/browser trên source mới và QA lại; những mục phụ thuộc người thật được tách rõ, không bịa để đánh xanh. Không có kế hoạch nào có thể tự tạo giấy phép hay dữ kiện chưa tồn tại; agent phải bàn giao trung thực phần đó thay vì tuyên bố “fix100%”.
