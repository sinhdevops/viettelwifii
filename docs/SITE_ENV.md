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
- Gửi thật vẫn cần `SUPABASE_URL`/`SUPABASE_SECRET_KEY` để lưu bền vững; môi trường hiện tại chưa cấu hình Supabase nên chưa thể nhận lead thật. Thiếu cấu hình, API trả `503 lead_storage_unconfigured` trước khi đọc body; form giữ nguyên dữ liệu và báo chưa gửi, không giả thành công. Telegram tùy chọn, gửi sau khi lưu.
- Turnstile tùy chọn cả local/production: bỏ cả hai khóa để không dùng; nếu cấu hình phải đủ cặp và API vẫn xác minh token. Consent thật, validation, honeypot và kiểm tra origin vẫn giữ.
- GTM/Ads chưa được tích hợp hoặc bật. Coordinator xóa cấu hình GTM/legal/Ads không dùng; không hướng dẫn điền ID để kích hoạt tracking trong đợt này. `SITE_CONTACT_EMAIL` vẫn được dùng ở runtime, cần giữ khi cấu hình liên hệ.

## Chạy và kiểm tra cấu hình

Dùng pnpm theo `packageManager` và một lockfile `pnpm-lock.yaml`: `pnpm dev`; sau thay đổi public env cần restart/build lại theo mốc tích hợp. CI cấu hình routes/type/lint/test/format:check/build, chưa xác minh lần chạy. Tài liệu này không khẳng định đã chạy checks, triển khai, gửi lead hay đo DNS/TLS. Capture và `data/pages.json` là archive lịch sử, không phải cấu hình/runtime/test truth.
