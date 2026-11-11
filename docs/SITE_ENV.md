# Domain website từ env

Đặt origin website ở `.env.local` khi chạy local, và biến môi trường của nền tảng hosting khi build production:

```dotenv
NEXT_PUBLIC_SITE_URL=https://viettelwifii.vn
```

Không thêm path, query, fragment hoặc thông tin đăng nhập vào giá trị này.

```tsx
import { siteConfig } from "@/lib/site-config";

siteConfig.origin; // origin đầy đủ
siteConfig.hostname; // tên domain để hiển thị
siteConfig.url("/internet"); // URL tuyệt đối của trang
```

App dùng helper này cho metadataBase, sitemap/robots, SEO, footer, link và dữ liệu TypeScript. Các link trong phạm vi app vốn là URL tương đối vẫn giữ tương đối để điều hướng local. Tên domain không được ghi cứng lại trong code runtime.

Next.js đóng gói `NEXT_PUBLIC_` vào JavaScript trình duyệt khi build. Sau khi đổi domain, khởi động lại dev hoặc build/deploy lại để client và server dùng cùng một giá trị. Đây là cấu hình công khai, không đặt secret vào biến `NEXT_PUBLIC_`.

Guard API lead dùng cùng origin; local dev vẫn chấp nhận request cùng origin localhost để kiểm tra preview. Không nới guard production. JSON/capture/báo cáo lịch sử vẫn giữ URL đã ghi nhận, không dùng làm cấu hình runtime.

## Render, index và intake

- Không dùng `SITE_LIVE`, bốn cờ `CONTENT_RIGHTS_CLEARED`, `PRODUCT_FACTS_VERIFIED`, `SITE_IDENTITY_VERIFIED`, `PRIVACY_POLICY_APPROVED` hoặc `SITE_PREVIEW_DRAFTS`. Không thêm lại các flags này để xem draft.
- Mọi route được duyệt render ở cả local và production: 175 product/content trong `src/lib/approved-routes.ts` và 5 support trong `src/lib/site-routes.ts`. SEO allowlist là 180, **không phải số entry sitemap cố định**.
- Chỉ `ready` được index và vào sitemap; draft có `noindex,nofollow`, không canonical và không JSON-LD. Readiness không bị origin hoặc môi trường tự nâng lên.
- `NEXT_PUBLIC_SITE_URL` quyết định URL tuyệt đối canonical/OG/sitemap khi trang đủ điều kiện. Local có thể dùng `http://localhost:3000`; production phải dùng origin công khai thật.
- DNS/TLS, quyền nội dung, thông tin sản phẩm và pháp lý vẫn phải xác minh riêng; cấu hình origin không chứng minh các điều kiện đó đã đạt. Không tự deploy hoặc mở index.
- Form đăng ký luôn mở, không dùng `LEAD_CAPTURE_ENABLED` hay trạng thái `ready` của trang chính sách làm cờ chặn. `PRIVACY_POLICY_VERSION` là phiên bản consent tùy chọn, mặc định `v1` nếu thiếu/placeholder; không phải cờ bật form. Không đổi nội dung hoặc trạng thái SEO của chính sách chỉ để mở form.
- Gửi thật cần `SUPABASE_URL`/`SUPABASE_SECRET_KEY` để lưu bền vững. Kiểm tra cục bộ ngày 2026-11-12 chỉ xác nhận hai biến trong `.env.local` có giá trị; GET Supabase chỉ đọc với cả hai biến thể auth đã trả `404 PGRST205`: thiếu bảng `public.leads`. Người dùng cần chạy `db/setup-leads.sql` trong Supabase SQL Editor (ghép `db/001_create_leads.sql` → `db/002_lead_privacy_rls.sql`) rồi xác minh lại bảng/quyền. Không coi env có giá trị là bằng chứng tích hợp đã chạy. Thiếu cấu hình, API trả `503 lead_storage_unconfigured` trước đọc body; lỗi lưu trả `503 lead_intake_unavailable`; form giữ dữ liệu và báo chưa gửi.
- API chờ `saveLead` trả ID, đăng ký gửi Telegram và cập nhật trạng thái qua Next `after()`, rồi trả ngay `{ok:true}` sau xác nhận DB để form hiện toast thành công. Không chờ Telegram; lỗi thông báo không thay đổi thành công. `TELEGRAM_BOT_TOKEN`/`TELEGRAM_CHAT_ID` hiện rỗng, chỉ dùng ở server. Theo dõi `telegram_status` trong DB bằng quyền phù hợp: `sent` khi gửi thành công, `failed` khi gửi lỗi/thiếu cấu hình, còn `pending` nếu cập nhật trạng thái lỗi. Không thêm tự gửi lại hoặc queue.
- CAPTCHA đã gỡ hoàn toàn: không còn widget, token, schema, server verify, dependency hoặc biến env mẫu. Giữ validation, honeypot, origin và chống gửi lặp. Form chung yêu cầu consent thật; riêng modal collection `/internet` không có control consent và không suy diễn chấp thuận. Khi không có consent, DB lưu `consent_at`/`privacy_policy_version` là `null`; kiểm tra phiên bản payload vẫn giữ.
- GTM/Ads chưa được tích hợp hoặc bật. Coordinator xóa cấu hình GTM/legal/Ads không dùng; không hướng dẫn điền ID để kích hoạt tracking trong đợt này. `SITE_CONTACT_EMAIL` vẫn được dùng ở runtime, cần giữ khi cấu hình liên hệ.

## Chạy và kiểm tra cấu hình

Dùng pnpm theo `packageManager` và một lockfile `pnpm-lock.yaml`: `pnpm dev`; sau thay đổi public env cần restart/build lại theo mốc tích hợp. CI cấu hình routes/type/lint/test/format:check/build, chưa xác minh lần chạy. Tài liệu này không khẳng định đã chạy checks, triển khai, gửi lead hay đo DNS/TLS. Capture và `data/pages.json` là archive lịch sử, không phải cấu hình/runtime/test truth.
