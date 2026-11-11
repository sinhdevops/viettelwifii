# ViettelUp Next.js Core — clone-first migration kit

Đang chuyển bản nguồn **True Web Clone → HTML/CSS/asset local → Next.js TSX → kiểm tra giao diện và tương tác**. Chưa nghiệm thu production.

Đọc trước: [MASTER_PLAN](docs/MASTER_PLAN.md), [Sơ đồ và cấu trúc](docs/ARCHITECTURE.md), [Phạm vi 175 route + 5 support](docs/ROUTE_SCOPE.md).

Để sửa UI/nội dung: xem [Hướng dẫn chỉnh TSX và vị trí component/dữ liệu](docs/EDITING_TSX.md). Các nhóm gói cước, tin tức và collection được tách bố cục dùng chung, dữ liệu có kiểu và nội dung riêng từng trang; không chạy lại generator HTML cũ để ghi đè code đang chỉnh.

Đội 10 agent đã được chuẩn bị trong `.codex/agents/`, kế thừa model và quyền của phiên chính, tối đa 5 subagent đang mở. Dùng [hướng dẫn khởi động](docs/START_AGENTS.md), [master prompt](docs/MASTER_PROMPT_VIETTELUP.md) và [Boardroom](docs/BOARDROOM.md) cho lần triển khai tiếp theo. Chat chính làm Lead; bộ agent chưa tự khởi động làm website.

## Trạng thái triển khai

Các số liệu capture/smoke dưới đây là checkpoint lịch sử trong Boardroom, không phải checks mới của đợt AUDIT-DOCS; chưa nghiệm thu lint/test/build sau tích hợp hiện hành.

Phạm vi hiện hành **175 path**: 171 trong phụ lục master prompt và bốn URL người dùng bổ sung (`/internet`, `/goi-cuoc-gic`, `/goi-cuoc-nine`, `/goi-cuoc-roaming`). Bản nguồn độc lập trong `outputs/viettelup-clone/` có 175 HTML và 699 asset đã kiểm tra. Next preview đạt HTTP smoke 175/175, 0 lỗi định danh/H1/noindex theo script, URL lạ 404; đây chưa phải nghiệm thu giao diện/tương tác. Theo dõi quyền sửa và kết quả QA thật tại [`docs/BOARDROOM.md`](docs/BOARDROOM.md).

Dùng **pnpm** (phiên bản trong `packageManager`), với một lockfile duy nhất `pnpm-lock.yaml`. Chạy UI Next bằng `pnpm dev`, mặc định tại `http://localhost:3000`; đổi cổng bằng `pnpm dev --port 4192`. Mọi route được duyệt render ở mọi môi trường, không cần cờ preview. Bản HTML nguồn: `node outputs/viettelup-clone/serve.mjs --port 4182`. Kiểm tra nguồn: `node outputs/viettelup-clone/verify.mjs`; kiểm tra Next đang chạy: `node scripts/clone/smoke-next-171.mjs http://localhost:3000` (tên script lịch sử, phạm vi thực tế 175).

Không cần yêu cầu người dùng gửi lại sitemap đã được thay bằng danh sách đầy đủ trong master prompt. Build production **cố ý dừng** nếu thiếu/khác tập route được duyệt; có manifest không đồng nghĩa đã có đủ nội dung được xác minh.

## Khởi chạy sau khi cài dependency

```bash
corepack enable
pnpm install
cp .env.example .env.local
pnpm dev
```

Trong `.env.local` cấu hình `NEXT_PUBLIC_SITE_URL` và thông tin liên hệ. Không dùng cờ xuất bản hay preview cũ: mọi route được duyệt render, nhưng **chỉ `ready` được index và vào sitemap**; `draft` có `noindex,nofollow`, không canonical và không JSON-LD. Form luôn mở, không phụ thuộc readiness của trang privacy; giao nhận thật vẫn cần Supabase. Kiểm tra theo mốc tích hợp bằng `pnpm routes:check`, `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`, `pnpm test:e2e`; đây là danh sách lệnh, không phải kết quả đã chạy. CI cấu hình routes/type/lint/test/format:check/build, chưa xác minh lần chạy sau tích hợp.

Lập bảng audit 175 route sản phẩm từ manifest hiện có: `pnpm routes:audit`. Kết quả là `reports/clone-checklist.csv`, dùng để đánh dấu baseline/asset/interactions/port/review từng trang.

Domain thật chỉ là một phần chuẩn bị production; vẫn cần xác minh quyền nội dung, thông tin sản phẩm, pháp lý và hạ tầng. Lead form luôn mở, không dùng `LEAD_CAPTURE_ENABLED` hoặc readiness của privacy làm gate. Consent thật vẫn bắt buộc; `PRIVACY_POLICY_VERSION` mặc định `v1` nếu thiếu/placeholder. Turnstile tùy chọn: nếu cấu hình phải đủ cặp khóa và xác minh token. Gửi thật cần Supabase (hiện chưa cấu hình); thiếu storage API trả `503 lead_storage_unconfigured` trước đọc body, form giữ dữ liệu và báo chưa gửi. Telegram tùy chọn sau lưu bền vững. Không chạy `output: "export"` vì API lead cần server. Không tự deploy, mở index hay gửi lead thật.

Domain được khai báo một lần bằng `NEXT_PUBLIC_SITE_URL` trong env. Code gọi `siteConfig.origin`, `siteConfig.hostname` hoặc `siteConfig.url(path)` từ `src/lib/site-config.ts`; xem [hướng dẫn env](docs/SITE_ENV.md). Sau khi đổi giá trị cần restart dev hoặc build lại vì Next đóng gói biến public khi build.

## Nhập nội dung route

Danh sách runtime nằm ở `src/lib/approved-routes.ts`: **đúng 175 URL**, giữ nguyên chữ hoa/thường và `tra-sau`. `data/approved-routes.json` được giữ làm bản đối chiếu phạm vi và kiểm thử.

Nội dung runtime được quản lý bằng TSX và dữ liệu TypeScript. `data/pages.json` và JSON capture là **archive lịch sử**, không phải nguồn sự thật runtime hoặc fixture chuẩn của test hiện hành. Registry thực tế `src/lib/page-content-registry.ts` nhập metadata/trạng thái từ `src/constants/{home,news,packages}/page-content.ts`, `src/content/internet/page-content.ts` và `src/features/collections/page-content.ts`; giao diện chính nằm trong `src/components/`, nội dung chi tiết trong `src/content/`. Dữ liệu page gồm:

- `status`: `draft` hoặc `ready`.
- `kind`: `home`, `package`, `internet`, `news-list`, `news-article`, `collection`.
- `title`, `description`, `heading`, `intro` tùy chọn.
- `sections`: dữ liệu nội dung được bảo toàn khi chuyển đổi; giao diện hiện hành được ghép trực tiếp bằng component TSX theo nhóm route.

App Router được chia rõ: `/internet/[code]`, `/goi-cuoc-viettel/[code]`, `/goi-cuoc-viettel/tra-sau/[code]`, `/tin-tuc/[slug]`. Trang chủ, `/tin-tuc` và bốn collection có `page.tsx` riêng. Không còn catch-all `[...segments]` hoặc bộ render giao diện JSON toàn site. Xem [sơ đồ route](docs/ARCHITECTURE.md).

175 route sản phẩm nằm trong `src/lib/approved-routes.ts`; 5 support route nằm riêng trong `src/lib/site-routes.ts`, hợp thành **SEO allowlist 180 route**, không đồng nghĩa 180 route indexable. Tất cả route được duyệt render; chỉ `ready` vào sitemap. Route ngoài hai registry trả 404. Không trích các link ngoài để tự mở rộng phạm vi.

## Tích hợp đã sẵn khung

- TypeScript, Next.js 16.4, App Router, Tailwind CSS 4, ESLint flat config, Prettier, Husky, lint-staged, Vitest, Playwright.
- shadcn-style button/dialog, CVA/clsx/tailwind-merge, Lucide, Sonner.
- React Hook Form + Zod; form gắn `itemId`, Zod server revalidate, Cloudflare Turnstile server verify, Telegram Bot API server-only.
- Floating phone/Zalo; không đưa PII vào telemetry. GTM chưa được tích hợp; cấu hình GTM không dùng sẽ được coordinator xóa, không bật tracking trong đợt này.
- SEO metadata/canonical và JSON-LD chỉ cho route `ready`; draft render nhưng noindex, không canonical/JSON-LD; sitemap lọc theo readiness.

Shadcn component khác **chỉ thêm khi clone archetype cần**: `pnpm dlx shadcn@latest add badge breadcrumb calendar checkbox dropdown-menu input select sidebar skeleton spinner tooltip popover tabs accordion table pagination command switch radio-group alert-dialog`. Carousel của shadcn dựa trên Embla; chỉ cài Swiper nếu reference thật sự cần hiệu ứng Swiper.

## Cleanup dự kiến do coordinator thực hiện

- Các package private folders, orphan metadata home/Internet, collection source pages và UI carousel cũ không còn ở các đường dẫn runtime cũ; đây chỉ là kiểm tra cây file, không phải nghiệm thu hồi quy.
- News generate/verify CJS hiện ở `scripts/news/`, evidence tại `reports/source-news/`; không chạy generator để ghi đè nội dung đã chỉnh.
- Giữ `data/pages.json` với chú thích archive; không dùng archive làm gate test/runtime. CI routes/type/lint/test/build còn cần tích hợp và kiểm tra. Các mục này là kế hoạch, chưa phải xác nhận cleanup/CI hoàn tất.

## Chưa làm / không được khẳng định đã làm

- Đã capture 175 HTML và local hóa 699 asset; các component TSX vẫn cần nghiệm thu theo từng nhóm. Không coi toàn bộ route đã hoàn thiện chỉ dựa vào HTTP smoke.
- Đã có so sánh Playwright mobile/tablet/desktop theo lô tại `reports/integration/` và `reports/qa/`; các sai khác/tương tác còn lại được ghi tại Boardroom.
- Lead được lưu vào Supabase trước khi gửi Telegram. Cần cấu hình `SUPABASE_URL`, `SUPABASE_SECRET_KEY` ở môi trường server và chạy `db/001_create_leads.sql` trong Supabase SQL Editor trước khi nhận lead. Nếu Telegram lỗi, API vẫn xác nhận lead đã lưu; kiểm tra các bản ghi `telegram_status = 'failed'` hoặc `pending` trong database. Chưa có cơ chế tự gửi lại Telegram hoặc rate limit distributed; cần bổ sung nếu lượng Ads lớn.
- SEO và CWV chỉ có nền kỹ thuật, chưa thể đánh giá kết quả khi chưa có trang thật và deployment thật.

## Security

Không commit `.env.local`, bot token, chat ID, lead cá nhân, hoặc clone HTML chứa key bên thứ ba. Telegram credentials chỉ ở server. Chỉ kích hoạt tracking theo cấu hình consent phù hợp. Với website gốc bên thứ ba, xác minh quyền sử dụng logo, hình ảnh và nội dung trước khi public.
