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
