# Chỉnh giao diện và nội dung TSX

Code chia thành **component dùng chung → dữ liệu có kiểu → nội dung riêng từng trang**. App Router chỉ ghép route, metadata và component; không sửa bản sao package private folder cũ trong app. Dùng registry thực tế, không giả định mọi metadata đã nằm trong `src/content/`.

## Tìm đúng file cần sửa

| Cần sửa                              | File/thư mục hiện hành                                                                                |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Bố cục gói di động                   | `src/components/packages/package-page.tsx`                                                            |
| Thông số tóm tắt, CTA, danh sách gói | `src/constants/packages/package-data.ts`                                                              |
| Kiểu dữ liệu gói                     | `src/types/packages/`                                                                                 |
| Chi tiết 3N / MXH120 trả sau         | `src/content/packages/general-3N.tsx`, `src/content/packages/postpaid-MXH120.tsx`                     |
| Registry chi tiết gói                | `src/content/packages/index.ts`, `src/content/packages/package-route.ts`                              |
| Thẻ gói liên quan                    | `src/components/packages/related-package-card.tsx`, `src/constants/packages/related-package-data.ts`  |
| Bố cục bài tin                       | `src/components/news/article-layout.tsx`                                                              |
| Tiêu đề/ngày/danh sách tin           | `src/constants/news/{article-records,listing-records,card-records}.ts`                                |
| Nội dung so sánh Roaming             | `src/content/news/source-pages/so-sanh-roaming.tsx`                                                   |
| Listing/thẻ tin/tải thêm             | `src/components/news/{news-listing,news-card,news-load-more}.tsx`                                     |
| Collection GIC/Nine/Roaming          | `src/components/{gic,nine,roaming}/`                                                                  |
| Collection Internet                  | `src/features/collections/internet/`                                                                  |
| Roaming hero/thứ tự section          | `src/components/roaming/{hero,roaming-collection}.tsx`                                                |
| Dữ liệu Roaming                      | `src/constants/roaming/roaming-data.tsx`                                                              |
| Popup chọn quốc gia/đăng ký          | `src/features/collections/{collection-country-picker,collection-signup-dialog}.tsx`                   |
| Trang chủ                            | `src/components/home/home-content.tsx`, `src/constants/home/home-source-data.ts`                      |
| Chi tiết Internet                    | `src/components/internet/internet-content.tsx`, `src/content/internet/copy/`                          |
| Header/menu                          | `src/components/layout/site-header.tsx`                                                               |
| Route entry                          | `src/app/**/page.tsx`                                                                                 |
| Metadata/status home/news/packages   | `src/constants/{home,news,packages}/page-content.ts`                                                  |
| Metadata/status Internet/collection  | `src/content/internet/page-content.ts`, `src/features/collections/page-content.ts`                    |
| Allowlist và repository              | `src/lib/{approved-routes,site-routes,page-content-registry}.ts`, `src/lib/server/page-repository.ts` |

## Ví dụ: gói 3N

Hai route động `/goi-cuoc-viettel/[code]` và `/goi-cuoc-viettel/tra-sau/[code]` dùng `PackageContent` ghép `PackagePage`, record trong `PACKAGE_PAGES` và phần chi tiết tra theo full path. File nội dung chỉ xuất chi tiết:

```tsx
export default function General3NPageDetails() {
  return (
    <div className="flex flex-col">
      {/* Đoạn văn, ảnh, bảng và hướng dẫn riêng của gói 3N. */}
    </div>
  );
}
```

Sửa bố cục ở `PackagePage`, thông số ở `package-data.ts`, đoạn riêng ở `General3NPageDetails`. `packageDetailsByRoute` đăng ký phần chi tiết; không ghép thêm `PackagePage` trong từng file. Giữ bài dài là JSX đọc được, không ép nội dung khác nhau vào cây JSON.

Giá/quyền lợi trong đoạn văn là nội dung biên tập riêng: khi đổi thông số tóm tắt phải đối chiếu cả chi tiết. Full path `/goi-cuoc-viettel/tra-sau/MXH120` khác gói thường cùng mã. Không tự đoán thông số khi thiếu nguồn.

## Giữ giao diện khi chỉnh code

Nút hành động dùng `Button`, điều hướng dùng `ButtonLink` trong `src/components/ui/`; xem [quy ước button](COMMON_BUTTONS.md).

- Dùng thuộc tính tĩnh như `className="..."`; dùng biểu thức khi có biến hoặc cần bảo toàn khoảng trắng quanh chữ/link.
- Server Component mặc định; chỉ state/event/DOM mới dùng `"use client"`. Đọc guide Next cục bộ trước khi viết code Next.
- Giữ CSS hiện hành `src/styles/viettelup-source.css`. Utility mới chưa chắc có rule; dùng CSS scoped/style rõ ràng và kiểm computed style.
- Media tra qua `sourceAsset()` hoặc asset local đã có; không thay ảnh chỉ vì refactor.
- Không bỏ chặn generator cũ để ghi đè code đã biên tập.

## Render, SEO và kiểm tra

Dùng pnpm theo `packageManager`, một lockfile `pnpm-lock.yaml`. `pnpm dev` phục vụ mặc định `http://localhost:3000`, không cần cờ preview. Tất cả 175 approved product/content route và 5 support render; chỉ `ready` được index/sitemap/canonical/JSON-LD. Draft `noindex,nofollow`, không canonical/JSON-LD. Form luôn mở, không phụ thuộc readiness của privacy.

CAPTCHA đã gỡ; giữ validation/origin/honeypot/chống gửi lặp và định danh sản phẩm. Form chung giữ consent thật/phiên bản mặc định `v1`; modal collection `/internet` không có control consent, không suy diễn chấp thuận, lưu cặp consent DB là `null` khi không có consent. API chờ `saveLead` trả ID, đăng ký Telegram/cập nhật trạng thái qua Next `after()`, rồi trả ngay `{ok:true}` để form hiện toast thành công. Telegram lỗi không đổi thành công; DB vẫn theo dõi `failed`/`pending`, không tự gửi lại/queue. Form giữ dữ liệu khi lỗi lưu. Biến storage hiện có giá trị, Supabase đã trả `404 PGRST205` do thiếu `public.leads`; cần chạy `db/setup-leads.sql` trong SQL Editor rồi xác minh lại; xem `docs/SITE_ENV.md`. Không thử lead/Telegram thật.

Lệnh kiểm tra theo phạm vi (không phải kết quả đã chạy):

```bash
pnpm routes:check
pnpm typecheck
pnpm lint
pnpm test
```

CI có `pnpm format:check` và `pnpm build` ở mốc tích hợp do coordinator quản lý, chưa xác minh lần chạy; không format toàn repo hoặc tự chạy build trong task tài liệu.

`node scripts/verify-tsx-refactor.cjs` đối chiếu SSR với `reports/integration/tsx-refactor/before/` là công cụ hồi quy lịch sử, không ép nội dung mới giống nội dung cũ và không thay kiểm hydration/tương tác/hình ảnh. `data/pages.json` cũng chỉ là archive, không phải runtime/test truth.

## Cleanup dự kiến

Các package private folders `src/app/goi-cuoc-viettel/{_components,_data,_content}/`, orphan `src/features/{home,internet}/page-content.ts`, collection source pages và UI carousel cũ không còn ở đường dẫn cũ. News generate/verify CJS hiện ở `scripts/news/`, evidence tại `reports/source-news/`; scripts package hiện ở `scripts/packages/`, evidence package tại `reports/integration/package-source-evidence/`. GTM config không dùng sẽ xóa, không bật. Chưa coi danh sách này là cleanup đã hoàn tất.
