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
- Gửi thật cần `SUPABASE_URL`/`SUPABASE_SECRET_KEY`. Kiểm tra ngày 2026-11-17 (đọc với secret key): bảng `public.leads` đã tồn tại và quyền theo `db/002` đã áp dụng (service_role chỉ SELECT cột `id`). Chưa áp dụng `db/003_lead_installation_guard_notify.sql` (cột địa chỉ lắp đặt, `lead_intake_guard`, RPC thông báo) — cần chạy trong Supabase SQL Editor. `db/setup-leads.sql` ghép 001 → 002 → 003 cho dự án mới. Thiếu cấu hình, API trả `503 lead_storage_unconfigured` trước đọc body; lỗi lưu trả `503 lead_intake_unavailable`; form giữ dữ liệu.
- Modal `/internet` gửi `installation` (tỉnh, mã/tên phường, địa chỉ, khu vực, giá hiển thị) thay vì ghép vào `note`; lưu ở cột `install_*`/`displayed_price`. Trước khi chạy `db/003`, insert lỗi `PGRST204`/`42501` sẽ tự lưu lại theo dạng cũ (địa chỉ trong `note`). Danh sách phường/xã là file tĩnh `public/data/internet-wards/<tỉnh>.json`, sinh bằng `node scripts/content/split-internet-wards.mjs` từ `data/content/internet-wards.json`.
- Chống spam phía server: `lead_intake_guard` (db/003) giới hạn 5 lần/10 phút theo HMAC IP và 3 lần/giờ theo SĐT (`429 rate_limited`); cùng SĐT + gói trong 30 phút trả `{ok:true}` mà không tạo bản ghi/tin nhắn mới. RPC lỗi hoặc chưa có thì bỏ qua (fail-open). `LEAD_RATE_LIMIT_SALT` tùy chọn.
- Telegram: `LEAD_NOTIFY_MODE=next` (mặc định) — API gửi qua Next `after()` sau khi DB xác nhận, cập nhật `telegram_status`. `LEAD_NOTIFY_MODE=supabase` — chỉ bật sau khi deploy Edge Function `supabase/functions/lead-telegram` và chạy `db/004_lead_telegram_webhook.sql` (trigger pg_net khi INSERT + pg_cron retry 5 phút, tối đa 5 lần). Chưa deploy/kiểm thử trên Supabase thật.
- CAPTCHA đã gỡ hoàn toàn: không còn widget, token, schema, server verify, dependency hoặc biến env mẫu. Giữ validation, honeypot, origin và chống gửi lặp. Form chung yêu cầu consent thật; riêng modal collection `/internet` không có control consent và không suy diễn chấp thuận. Khi không có consent, DB lưu `consent_at`/`privacy_policy_version` là `null`; kiểm tra phiên bản payload vẫn giữ.
- GTM/Ads chưa được tích hợp hoặc bật. Coordinator xóa cấu hình GTM/legal/Ads không dùng; không hướng dẫn điền ID để kích hoạt tracking trong đợt này. `SITE_CONTACT_EMAIL` vẫn được dùng ở runtime, cần giữ khi cấu hình liên hệ.

## Chạy và kiểm tra cấu hình

Dùng pnpm theo `packageManager` và một lockfile `pnpm-lock.yaml`: `pnpm dev`; sau thay đổi public env cần restart/build lại theo mốc tích hợp. CI cấu hình routes/type/lint/test/format:check/build, chưa xác minh lần chạy. Tài liệu này không khẳng định đã chạy checks, triển khai, gửi lead hay đo DNS/TLS. Capture và `data/pages.json` là archive lịch sử, không phải cấu hình/runtime/test truth.
