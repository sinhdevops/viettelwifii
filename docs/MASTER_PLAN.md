# MASTER PLAN — ViettelUp reference clone → Next.js 16.4 core

**Trạng thái:** source framework / execution plan, **chưa phải bản clone 171 trang**. Không công bố bản sản xuất nếu chưa có `data/approved-routes.json` chính xác và nội dung/asset đã xác minh.

## 0. Phạm vi và các nguyên tắc không đổi

- Tham chiếu giao diện: https://viettelwifii.vn/ (kiểm tra ngày 2026-10-26).
- Nguồn duy nhất của tập URL được phép: sitemap **do người dùng cung cấp** và `data/approved-routes.json`, theo `docs/ROUTE_SCOPE.md`.
- **171 URL chính xác**: `/` (1), gói Viettel (116), tin tức (36), Internet (18). Không suy diễn hoặc tự mở rộng URL từ menu/link/sitemap công khai khác.
- Tách rõ **độ trung thực clone** và **chất lượng kỹ thuật Next.js**. Không sửa design trong đợt port.
- Không tự động sao chép/triển khai assets, brand, nội dung hoặc mã dịch vụ riêng khi chưa xác nhận quyền sử dụng. Form/analytics/private APIs phải làm lại bằng tích hợp được phép.

## 1. Điều kiện đầu vào (gate G0)

1. Nhận `approved-routes.json` đủ 171 path chính xác hoặc sitemap XML người dùng cung cấp để tạo manifest. Hiện file này **chưa có trong tài liệu đính kèm**.
2. Ghi rõ tài nguyên nào được phép tái sử dụng, domain/brand sẽ xuất bản, logo và nội dung sẽ giữ hay thay.
3. Có output từ True Web Clone hoặc khả năng chạy skill đó trong môi trường đã cài; bổ sung thiết bị/viewport cần so sánh.
4. Có số điện thoại/Zalo và Telegram Bot API credentials trước khi bật form; secrets nhập qua biến môi trường, không gửi vào repo.

**Gate:** `pnpm routes:check` pass; chưa có manifest thì cố ý fail.

## 2. Giai đoạn A — Clone nguyên bản, KHÔNG port vội

1. Đọc đúng 171 path từ manifest. Phân nhóm 5 archetype: Home, Package Detail (gồm nested slug), Internet, News Listing, News Detail.
2. True Web Clone chụp baseline từng archetype desktop 1440×900 và mobile 390×844; lấy DOM/CSS/font/img/SVG/JS, trạng thái hover, mở menu, slider, modal, sticky/floating. Crawl chỉ nội dung public trong scope.
3. Lưu output dưới `reference-clone/` (không đưa vào bản production). Kiểm tra máy local phục vụ static HTML qua HTTP; lưu report request lỗi, asset 404, console, screenshot. Các tích hợp private/backend dùng giả lập có đánh dấu.
4. So sánh tương đối visual diff tại cùng viewport, font load và thời điểm animation. Quy định tolerance cho anti-aliasing, nội dung động và hệ điều hành.
5. Ghi `docs/CLONE_AUDIT.md`: route, archetype, asset, interactive status, evidence, exception, reviewer approval.

**Gate G1:** clone baseline các archetype đã duyệt bằng mắt và Playwright; không còn 404 asset nghiêm trọng; danh sách ngoại lệ công khai có giải thích. _Không cam kết pixel-perfect tuyệt đối khi trang gốc dùng API/private assets không khả dụng._

## 3. Giai đoạn B — Đóng băng HTML baseline

- Gắn version/tag cho clone, chụp screenshot baseline desktop/mobile, lưu checksum assets và HTML. Không thay clone baseline trong khi port.
- Mapping từ route → archetype → data → components; tách dữ liệu card khỏi DOM. Đảm bảo 171 route không tự biến thành 171 component copy-paste.

**Gate G2:** clone và bảng mapping đã ổn định.

## 4. Giai đoạn C — Port sang Next.js

- Framework: Next.js `^16.4.1` (đã có bản vá an ninh), React 19, TypeScript, App Router, Tailwind 4, shadcn/ui, Server Components mặc định.
- Tái tạo layout Header/Footer/Nav, Hero, PackageCard, InternetCard, NewsCard và các section từ HTML. Client Component **chỉ** khi có interaction.
- Bản port **không** inject nguyên HTML clone vào `dangerouslySetInnerHTML` hoặc iframe; dùng JSX đã kiểm soát và data chuẩn hoá.
- Đi từng archetype một. Sau mỗi port, Playwright screenshot + click/keyboard/mobile + console; đối chiếu lại với baseline G1.
- `generateStaticParams` trả về **chỉ các route có trong manifest và có content trạng thái `ready`**. Route chưa xong = 404, không index, không sitemap.

**Gate G3:** route mapping và visual test của từng archetype pass; không thêm route ngoài allowlist.

## 5. Giai đoạn D — Tích hợp core kỹ thuật

| Lớp     | Thành phần                                                                  | Tiêu chí                                                                                   |
| ------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| UI      | Tailwind 4, shadcn/ui, CVA, clsx, tailwind-merge, Lucide                    | Dùng có chọn lọc; không kéo toàn bộ component vào client bundle                            |
| Form    | React Hook Form, Zod, Dialog, Sonner                                        | Form ngắn lấy `itemId` và title chuẩn từ dữ liệu đã duyệt                                  |
| Lead    | Server endpoint `/api/leads` → Telegram Bot API                             | Secrets chỉ server; validate lại card; Turnstile server-side; không log PII                |
| Contact | Floating phone `tel:` và Zalo outbound                                      | Không che nội dung mobile; nhãn accessibility                                              |
| SEO     | metadata từng path, canonical, sitemap, robots, structured data khi phù hợp | Chỉ `ready` + approved indexable; HTML semantic, heading đúng                              |
| Ads     | GTM, GA4/Google Ads qua GTM, UTM/GCLID                                      | Click phone/Zalo là micro-conversion; lead thành công là primary conversion; không gửi PII |
| QA      | ESLint, Prettier, Husky, lint-staged, Vitest, Playwright                    | CI check type/lint/tests/build và smoke mobile/desktop                                     |

**Chưa triển khai:** Lưu lead bền vững/queue, rate limit distributed, backup khi Telegram lỗi, banner consent tuỳ khu vực, domain và policy privacy. Những phần này phải được chốt trước launch sản xuất (đặc biệt nếu lượng ads cao).

## 6. Giai đoạn E — Performance và SEO theo dữ liệu thực

- Hạn chế JS client, lazy-load slider/video, tránh dùng cả Swiper và Embla cho cùng một tính năng. Có thể dùng `next/image` và `next/font` khi xác minh tài nguyên.
- Giảm CLS: dự trữ tỷ lệ ảnh/banner; LCP: hero nhẹ và ưu tiên đúng; INP: hạn chế script thứ ba.
- Kiểm tra PageSpeed Insights và dữ liệu thực tế; mục tiêu _good_ CWV tại phân vị 75: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. Mục tiêu là kiểm tra sau khi có content và hạ tầng, **không phải kết quả hiện đã đạt**.
- Với Google Ads, đánh giá độ liên quan từ khóa → copy quảng cáo → nội dung URL đích; kiểm tra tracking conversion trước khi chạy tiền.

**Gate G4:** noindex đã tắt đúng thời điểm; sitemap chỉ chứa page được duyệt; test form Telegram với bot riêng, kiểm tra event GTM ở chế độ debug; kiểm tra trên thiết bị thật; bảo mật cơ bản; quyền nội dung và data privacy hoàn tất.

## 7. Acceptance checklist theo từng URL

- [ ] Có mặt trong `approved-routes.json` và được phân loại đúng.
- [ ] Đã đối chiếu screenshot + layout responsive với baseline.
- [ ] Font, media, link, slider, menu, button dùng được; không critical 404 / console error.
- [ ] Dữ liệu gói cước, CTA và nội dung đã được người phụ trách duyệt.
- [ ] title, description, canonical, `h1`, internal links, structured data (nếu phù hợp).
- [ ] Click phone/Zalo và form hoạt động; tracking không rò dữ liệu cá nhân.
- [ ] Playwright pass và audit accessibility/click targets/CLS.
- [ ] Page status `ready` được đưa vào sitemap; page khác bị chặn index.

## 8. Quy tắc phối hợp

1. **Không có manifest thì không crawl thêm path, không tự điền 171 URL từ trí nhớ hoặc Google.**
2. Ghi rõ "clone fidelity" khác "framework migration" trong issue/commit.
3. Phân loại lỗi: fidelity, content, route, backend integration, performance, SEO, tracking.
4. Duyệt từng archetype trước rồi mới scale toàn bộ route cùng kiểu.
5. Giữ HTML baseline độc lập để khôi phục/check regressions; production chỉ dùng Next source.
