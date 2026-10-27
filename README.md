# ViettelUp Next.js Core — clone-first migration kit

Đang chuyển bản nguồn **True Web Clone → HTML/CSS/asset local → Next.js TSX → kiểm tra giao diện và tương tác**. Chưa nghiệm thu production.

Đọc trước: [MASTER_PLAN](docs/MASTER_PLAN.md), [Sơ đồ và cấu trúc](docs/ARCHITECTURE.md), [Phạm vi 171 URL](docs/ROUTE_SCOPE.md).

Đội 10 agent đã được chuẩn bị trong `.codex/agents/`, kế thừa model và quyền của phiên chính, tối đa 5 subagent đang mở. Dùng [hướng dẫn khởi động](docs/START_AGENTS.md), [master prompt](docs/MASTER_PROMPT_VIETTELUP.md) và [Boardroom](docs/BOARDROOM.md) cho lần triển khai tiếp theo. Chat chính làm Lead; bộ agent chưa tự khởi động làm website.

## Trạng thái triển khai

Phạm vi hiện hành **175 path**: 171 trong phụ lục master prompt và bốn URL người dùng bổ sung (`/internet`, `/goi-cuoc-gic`, `/goi-cuoc-nine`, `/goi-cuoc-roaming`). Bản nguồn độc lập trong `outputs/viettelup-clone/` có 175 HTML và 699 asset đã kiểm tra. Next preview đạt HTTP smoke 175/175, 0 lỗi định danh/H1/noindex theo script, URL lạ 404; đây chưa phải nghiệm thu giao diện/tương tác. Theo dõi quyền sửa và kết quả QA thật tại [`docs/BOARDROOM.md`](docs/BOARDROOM.md).

Chạy UI Next bằng `pnpm dev` hoặc `npm run dev`, mặc định tại `http://localhost:3000`. Lệnh dev tự bật `SITE_PREVIEW_DRAFTS=1` để hiện các trang đang phát triển. Đổi cổng bằng `pnpm dev --port 4192` hoặc `npm run dev -- --port 4192`. Bản HTML nguồn: `node outputs/viettelup-clone/serve.mjs --port 4182`. Kiểm tra nguồn: `node outputs/viettelup-clone/verify.mjs`; kiểm tra Next đang chạy: `node scripts/clone/smoke-next-171.mjs http://localhost:3000` (tên script lịch sử, phạm vi thực tế 175).

Không cần yêu cầu người dùng gửi lại sitemap đã được thay bằng danh sách đầy đủ trong master prompt. Build production **cố ý dừng** nếu thiếu/khác tập route được duyệt; có manifest không đồng nghĩa đã có đủ nội dung được xác minh.

## Khởi chạy sau khi cài dependency

```bash
corepack enable
pnpm install
cp .env.example .env.local
pnpm dev
```

Trong `.env.local`, giữ `SITE_LIVE=false`. Lệnh `dev` tự bật preview draft; có thể tắt bằng biến môi trường `SITE_PREVIEW_DRAFTS=0` trước khi chạy. Chạy trực tiếp `next dev` cần tự đặt `SITE_PREVIEW_DRAFTS=1`. Lệnh build/start production vẫn giữ guard, không xuất bản nội dung draft. Kiểm tra bằng `pnpm routes:check`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`, `pnpm test:e2e` theo mốc tích hợp.

Lập bảng audit đúng 171 URL sau khi nhận manifest: `pnpm routes:audit`. Kết quả là `reports/clone-checklist.csv`, dùng để đánh dấu baseline/asset/interactions/port/review từng trang.

Để triển khai production, cần `NEXT_PUBLIC_SITE_URL` domain thật, đủ dữ liệu, quyền tài nguyên, thông tin liên hệ, Telegram và anti-spam đã cấu hình, kiểm tra riêng việc bảo vệ dữ liệu, rồi mới chuyển `SITE_LIVE=true`. Không chạy `output: "export"` vì form Telegram cần server.

## Nhập nội dung route

`data/approved-routes.json` chấp nhận `{"routes": ["/", "/tin-tuc", ...]}` hoặc array path. **Bắt buộc đúng 175 URL** gồm 171 gốc theo tỉ lệ 1/116/36/18 và bốn collection được duyệt.

`data/pages.json` là object với keys chính xác bằng URL; dữ liệu page gồm:

- `status`: `draft` hoặc `ready`.
- `kind`: `home`, `package`, `internet`, `news-list`, `news-article`, `collection`.
- `title`, `description`, `heading`, `intro` tùy chọn.
- `sections`: `text`, `cards`, `faq`; mở rộng template khi port HTML thật.

Chỉ page `ready` trong allowlist mới có route/sitemap; page khác trả 404 (trừ trang chủ scaffold). Không trích toàn bộ các link ngoài vào tập URL được phép.

## Tích hợp đã sẵn khung

- TypeScript, Next.js 16.4, App Router, Tailwind CSS 4, ESLint flat config, Prettier, Husky, lint-staged, Vitest, Playwright.
- shadcn-style button/dialog, CVA/clsx/tailwind-merge, Lucide, Sonner.
- React Hook Form + Zod; form gắn `itemId`, Zod server revalidate, Cloudflare Turnstile server verify, Telegram Bot API server-only.
- Floating phone/Zalo; `dataLayer` events cho GTM (`contact_phone_click`, `contact_zalo_click`, `lead_submit_success`), không chứa PII.
- SEO metadata/canonical, robots noindex trước launch, sitemap từ page thật.

Shadcn component khác **chỉ thêm khi clone archetype cần**: `pnpm dlx shadcn@latest add badge breadcrumb calendar checkbox dropdown-menu input select sidebar skeleton spinner tooltip popover tabs accordion table pagination command switch radio-group alert-dialog`. Carousel của shadcn dựa trên Embla; chỉ cài Swiper nếu reference thật sự cần hiệu ứng Swiper.

## Chưa làm / không được khẳng định đã làm

- Đã capture 175 HTML và local hóa 699 asset; các component TSX vẫn cần nghiệm thu theo từng nhóm. Không coi toàn bộ route đã hoàn thiện chỉ dựa vào HTTP smoke.
- Đã có so sánh Playwright mobile/tablet/desktop theo lô tại `reports/integration/` và `reports/qa/`; các sai khác/tương tác còn lại được ghi tại Boardroom.
- Form chưa có thông tin bot thật, hệ thống rate limit distributed, hàng đợi lưu lead dự phòng; nếu lượng Ads lớn cần bổ sung trước launch.
- SEO và CWV chỉ có nền kỹ thuật, chưa thể đánh giá kết quả khi chưa có trang thật và deployment thật.

## Security

Không commit `.env.local`, bot token, chat ID, lead cá nhân, hoặc clone HTML chứa key bên thứ ba. Telegram credentials chỉ ở server. Chỉ kích hoạt tracking theo cấu hình consent phù hợp. Với website gốc bên thứ ba, xác minh quyền sử dụng logo, hình ảnh và nội dung trước khi public.
