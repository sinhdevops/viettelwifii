# MASTER PLAN — ViettelUp reference clone → Next.js 16.4 core

**Trạng thái:** kế hoạch triển khai/kiểm tra đang tiếp tục, không phải nghiệm thu toàn website. Runtime đã có registry 175 route sản phẩm và 5 support (SEO allowlist 180); HTTP/build lịch sử không thay cho xác minh nội dung, quyền sử dụng và QA hiện hành. Các giai đoạn dưới là trình tự công việc, không phải xác nhận đã hoàn tất.

## 0. Phạm vi và các nguyên tắc không đổi

- Tham chiếu giao diện: https://viettelwifii.vn/ (kiểm tra ngày 2026-10-26).
- Tập 171 URL gốc nằm trong phụ lục master prompt; người dùng bổ sung 4 collection, thành **175 route sản phẩm/nội dung**. Runtime `src/lib/approved-routes.ts`, bản đối chiếu `data/approved-routes.json`; xem `docs/ROUTE_SCOPE.md`.
- 175 gồm home (1), gói Viettel (116), tin (36), Internet detail (18), collection (4). Năm support trong `src/lib/site-routes.ts` tách riêng, tổng SEO allowlist 180. Không tự mở rộng từ menu/link/sitemap công khai.
- Tách rõ **độ trung thực clone** và **chất lượng kỹ thuật Next.js**. Không sửa design trong đợt port.
- Không tự động sao chép/triển khai assets, brand, nội dung hoặc mã dịch vụ riêng khi chưa xác nhận quyền sử dụng. Form/analytics/private APIs phải làm lại bằng tích hợp được phép.

## 1. Điều kiện đầu vào (gate G0)

1. Đối chiếu registry 175 route hiện có với manifest và 5 support riêng; không yêu cầu người dùng gửi lại sitemap. `data/pages.json` giữ làm archive có chú thích, không phải runtime/test truth.
2. Ghi rõ tài nguyên nào được phép tái sử dụng, domain/brand sẽ xuất bản, logo và nội dung sẽ giữ hay thay.
3. Có output từ True Web Clone hoặc khả năng chạy skill đó trong môi trường đã cài; bổ sung thiết bị/viewport cần so sánh.
4. Cấu hình liên hệ qua env; form luôn mở, không cần Telegram để hiển thị hoặc gửi. Giao nhận thật cần Supabase lưu bền vững (hiện chưa cấu hình); Telegram tùy chọn sau lưu. Secrets nhập qua biến môi trường, không gửi vào repo.

**Gate dự kiến:** `pnpm routes:check` đối chiếu phạm vi; không nới allowlist để vượt kiểm tra. Dùng pnpm theo `packageManager` và duy nhất `pnpm-lock.yaml`; chưa chạy gate trong đợt sửa tài liệu này.

## 2. Giai đoạn A — Clone nguyên bản, KHÔNG port vội

1. Đọc 175 path được duyệt từ manifest/registry. Nhóm theo Home, Package Detail (gồm trả sau), Internet Detail, News Listing, News Detail và Collection; support có tiêu chí nội dung riêng.
2. True Web Clone chụp baseline từng archetype desktop 1440×900 và mobile 390×844; lấy DOM/CSS/font/img/SVG/JS, trạng thái hover, mở menu, slider, modal, sticky/floating. Crawl chỉ nội dung public trong scope.
3. Lưu output dưới `reference-clone/` (không đưa vào bản production). Kiểm tra máy local phục vụ static HTML qua HTTP; lưu report request lỗi, asset 404, console, screenshot. Các tích hợp private/backend dùng giả lập có đánh dấu.
4. So sánh tương đối visual diff tại cùng viewport, font load và thời điểm animation. Quy định tolerance cho anti-aliasing, nội dung động và hệ điều hành.
5. Ghi `docs/CLONE_AUDIT.md`: route, archetype, asset, interactive status, evidence, exception, reviewer approval.

**Gate G1:** clone baseline các archetype đã duyệt bằng mắt và Playwright; không còn 404 asset nghiêm trọng; danh sách ngoại lệ công khai có giải thích. _Không cam kết pixel-perfect tuyệt đối khi trang gốc dùng API/private assets không khả dụng._

## 3. Giai đoạn B — Đóng băng HTML baseline

- Gắn version/tag cho clone, chụp screenshot baseline desktop/mobile, lưu checksum assets và HTML. Không thay clone baseline trong khi port.
- Mapping route → archetype → data → components; tách dữ liệu card khỏi DOM. Không tạo component bố cục copy-paste theo từng URL; giữ nội dung TSX riêng khi thực sự khác.

**Gate G2:** clone và bảng mapping đã ổn định.

## 4. Giai đoạn C — Port sang Next.js

- Framework: Next.js `^16.4.1` (đã có bản vá an ninh), React 19, TypeScript, App Router, Tailwind 4, shadcn/ui, Server Components mặc định.
- Tái tạo layout Header/Footer/Nav, Hero, PackageCard, InternetCard, NewsCard và các section từ HTML. Client Component **chỉ** khi có interaction.
- Bản port **không** inject nguyên HTML clone vào `dangerouslySetInnerHTML` hoặc iframe; dùng JSX đã kiểm soát và data chuẩn hoá.
- Đi từng archetype một. Sau mỗi port, Playwright screenshot + click/keyboard/mobile + console; đối chiếu lại với baseline G1.
- `generateStaticParams` bao phủ route được duyệt; mọi approved route render dù draft. Chỉ `ready` được index/sitemap/canonical/JSON-LD; draft `noindex,nofollow`, không canonical/JSON-LD. Ngoài allowlist trả 404, không dùng cờ preview/xuất bản cũ.
- Registry thực tế đọc `src/constants/{home,news,packages}/page-content.ts`, `src/content/internet/page-content.ts`, `src/features/collections/page-content.ts`; UI chính trong `src/components/`, nội dung chi tiết trong `src/content/`.

**Gate G3:** route mapping và visual test của từng archetype pass; không thêm route ngoài allowlist.

## 5. Giai đoạn D — Tích hợp core kỹ thuật

| Lớp      | Thành phần                                                                  | Tiêu chí                                                                                        |
| -------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| UI       | Tailwind 4, shadcn/ui, CVA, clsx, tailwind-merge, Lucide                    | Dùng có chọn lọc; không kéo toàn bộ component vào client bundle                                 |
| Form     | React Hook Form, Zod, Dialog, Sonner                                        | Form ngắn lấy `itemId` và title chuẩn từ dữ liệu đã duyệt                                       |
| Lead     | Server endpoint `/api/leads` → Supabase → Telegram tùy chọn                 | Secrets chỉ server; validate lại card; Turnstile tùy chọn, xác minh nếu cấu hình; không log PII |
| Contact  | Floating phone `tel:` và Zalo outbound                                      | Không che nội dung mobile; nhãn accessibility                                                   |
| SEO      | metadata từng path, canonical, sitemap, robots, structured data khi phù hợp | Chỉ `ready` + approved indexable; HTML semantic, heading đúng                                   |
| Tracking | Không bật GTM/Ads trong đợt này; cấu hình GTM không dùng sẽ xóa             | Không mang tracking nguồn hoặc PII vào analytics                                                |
| QA       | ESLint, Prettier, Husky, lint-staged, Vitest, Playwright                    | CI routes/type/lint/test/format:check/build cần xác minh; smoke mobile/desktop theo mốc         |

**Cần xác minh trước launch:** cấu hình Supabase lưu lead trước Telegram, migration, xử lý Telegram thất bại, rate limit distributed/queue nếu cần, domain, quyền nội dung và policy privacy. Form luôn mở, không có capture flag hoặc gate privacy-ready. Consent thật/phiên bản (mặc định `v1`) vẫn bắt buộc. Turnstile tùy chọn mọi môi trường: đủ cặp khóa và xác minh token nếu cấu hình. Supabase hiện chưa cấu hình; thiếu storage trả `503 lead_storage_unconfigured` trước đọc body, form giữ dữ liệu và báo chưa gửi. Telegram tùy chọn sau lưu bền vững; không dùng cấu hình mẫu làm bằng chứng tích hợp.

## 6. Giai đoạn E — Performance và SEO theo dữ liệu thực

- Hạn chế JS client, lazy-load slider/video, tránh dùng cả Swiper và Embla cho cùng một tính năng. Có thể dùng `next/image` và `next/font` khi xác minh tài nguyên.
- Giảm CLS: dự trữ tỷ lệ ảnh/banner; LCP: hero nhẹ và ưu tiên đúng; INP: hạn chế script thứ ba.
- Kiểm tra PageSpeed Insights và dữ liệu thực tế; mục tiêu _good_ CWV tại phân vị 75: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. Mục tiêu là kiểm tra sau khi có content và hạ tầng, **không phải kết quả hiện đã đạt**.
- Với Google Ads, đánh giá độ liên quan từ khóa → copy quảng cáo → nội dung URL đích; kiểm tra tracking conversion trước khi chạy tiền.

**Gate G4 dự kiến:** sitemap chỉ gồm approved + ready; draft không canonical/JSON-LD; kiểm form qua mock/sandbox không gửi lead thật; kiểm trên thiết bị thật, bảo mật, quyền nội dung và privacy. Không bật GTM hoặc tự deploy/index. Không coi mục tiêu CWV hay checklist là kết quả đo đã đạt.

## 7. Acceptance checklist theo từng URL

- [ ] Có mặt trong registry sản phẩm hoặc support tương ứng và được phân loại đúng.
- [ ] Đã đối chiếu screenshot + layout responsive với baseline.
- [ ] Font, media, link, slider, menu, button dùng được; không critical 404 / console error.
- [ ] Dữ liệu gói cước, CTA và nội dung đã được người phụ trách duyệt.
- [ ] title, description, canonical, `h1`, internal links, structured data (nếu phù hợp).
- [ ] Click phone/Zalo và form hoạt động; tracking không rò dữ liệu cá nhân.
- [ ] Playwright pass và audit accessibility/click targets/CLS.
- [ ] Page status `ready` được đưa vào sitemap; page khác bị chặn index.

## 8. Quy tắc phối hợp

1. **Không tự thêm URL ngoài hai registry; không điền từ trí nhớ hoặc Google.**
2. Ghi rõ "clone fidelity" khác "framework migration" trong issue/commit.
3. Phân loại lỗi: fidelity, content, route, backend integration, performance, SEO, tracking.
4. Duyệt từng archetype trước rồi mới scale toàn bộ route cùng kiểu.
5. Giữ HTML baseline độc lập để khôi phục/check regressions; production chỉ dùng Next source.

## 9. Cleanup và CI dự kiến — coordinator sở hữu

- Đối chiếu cây file: package private folders `src/app/goi-cuoc-viettel/{_components,_data,_content}/`, orphan `src/features/{home,internet}/page-content.ts`, source pages collection và UI carousel cũ không còn ở đường dẫn cũ; cần nghiệm thu hồi quy riêng.
- News generate/verify CJS hiện ở `scripts/news/`, evidence tại `reports/source-news/`; không chạy generator ghi đè code biên tập.
- Giữ `data/pages.json` có chú thích archive, loại khỏi vai trò runtime/test truth; xóa cấu hình GTM không dùng, không bật GTM.
- Xác minh CI đã cấu hình `pnpm routes:check`, `pnpm typecheck`, lint (`pnpm exec eslint . --max-warnings 0`), `pnpm test`, `pnpm format:check`, `pnpm build` với pnpm single lockfile. Đây là kế hoạch xác minh, không phải tuyên bố cleanup hoặc checks đã hoàn tất. Không format toàn repo hoặc build trong task tài liệu.
