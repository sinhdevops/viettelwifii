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

## Xuất bản, index và Ads

- **Không còn `SITE_LIVE`.** Cùng với nó, bốn cờ `CONTENT_RIGHTS_CLEARED`, `PRODUCT_FACTS_VERIFIED`, `SITE_IDENTITY_VERIFIED`, `PRIVACY_POLICY_APPROVED` và guard build trong `next.config.ts` đã bị gỡ. Production render và index mọi route đã duyệt giống hệt local; `sitemap.xml` liệt kê toàn bộ 175 route sản phẩm + 5 route hỗ trợ, `robots.txt` cho phép crawl.
- Trạng thái `draft`/`ready` trong dữ liệu **không còn chặn** render, index hay sitemap. Nó chỉ còn là nhãn theo dõi nội dung nội bộ.
- `NEXT_PUBLIC_SITE_URL` vẫn là cấu hình duy nhất quyết định canonical/OG/sitemap. Ở local có thể là `http://localhost:3000/`; production phải là origin công khai thật.
- DNS và TLS của domain vẫn phải kiểm tra riêng trước triển khai; cấu hình origin không tự chứng minh domain đã trỏ hoặc chứng chỉ hoạt động.
- Lead form tách khỏi phần xuất bản: chỉ mở khi `LEAD_CAPTURE_ENABLED=true`, `PRIVACY_POLICY_VERSION` hợp lệ (khác `unapproved`), có `SUPABASE_URL`/`SUPABASE_SECRET_KEY` và đủ cặp khóa Turnstile. Thiếu bất kỳ điều kiện nào thì API trả 503 và form bị ẩn.
- Mặc định `ADS_LAUNCH=false`, `GOOGLE_ADS_CONVERSION_ID=` và `NEXT_PUBLIC_GTM_ID=`. Chưa có GTM/Ads tag nào được cài hoặc bật trong source.
