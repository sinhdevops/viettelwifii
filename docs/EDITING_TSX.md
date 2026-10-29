# Chỉnh giao diện và nội dung TSX

Code giao diện được tổ chức thành **bố cục/component dùng chung → dữ liệu có kiểu → nội dung riêng của trang**. Gói cước được đặt cạnh route trong `src/app/goi-cuoc-viettel`: `_components/` chứa giao diện, `_data/` chứa dữ liệu và `_content/` chứa nội dung TSX từng gói. Các thư mục có dấu `_` không tạo URL. Script gói cước nằm ở `scripts/packages/`, ảnh bằng chứng nằm ở `reports/integration/package-source-evidence/`.

## Tìm đúng file cần sửa

| Cần sửa                                               | File/thư mục                                                                                                              |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Bố cục chung của các gói di động                      | `src/app/goi-cuoc-viettel/_components/package-page.tsx`                                                                   |
| Tên, thông số tóm tắt, CTA và danh sách gói liên quan | `src/app/goi-cuoc-viettel/_data/package-data.ts`                                                                          |
| Kiểu dữ liệu gói di động                              | `src/app/goi-cuoc-viettel/_data/package-types.ts`                                                                         |
| Nội dung chi tiết gói 3N                              | `src/app/goi-cuoc-viettel/_content/general-3N.tsx`                                                                        |
| Nội dung gói MXH120 trả sau                           | `src/app/goi-cuoc-viettel/_content/postpaid-MXH120.tsx`                                                                   |
| Thẻ gói liên quan và dữ liệu thẻ                      | `src/app/goi-cuoc-viettel/_components/related-package-card.tsx`, `src/app/goi-cuoc-viettel/_data/related-package-data.ts` |
| Bố cục bài tin, tiêu đề và ngày đăng                  | `src/features/news/article-layout.tsx`                                                                                    |
| Tiêu đề/ngày đăng/danh sách tin liên quan             | `src/features/news/article-records.ts`                                                                                    |
| Nội dung bài so sánh Roaming                          | `src/features/news/source-pages/so-sanh-roaming.tsx`                                                                      |
| Trang danh sách tin                                   | `src/features/news/news-listing.tsx`, `listing-records.ts`                                                                |
| Thẻ tin dùng chung                                    | `src/features/news/news-card.tsx`, `card-records.ts`                                                                      |
| Trang Internet/GIC/Nine/Roaming                       | `src/features/collections/{internet,gic,nine,roaming}/`                                                                   |
| Thứ tự các phần trên trang Roaming                    | `src/features/collections/roaming/roaming-collection.tsx`                                                                 |
| Banner Roaming                                        | `src/features/collections/roaming/hero.tsx`                                                                               |
| Quốc gia phổ biến và FAQ Roaming                      | `src/features/collections/roaming/roaming-data.tsx`                                                                       |
| Popup chọn quốc gia / popup đăng ký                   | `src/features/collections/collection-country-picker.tsx`, `collection-signup-dialog.tsx`                                  |
| Trang chủ                                             | `src/features/home/home-content.tsx`, `home-source-data.ts`                                                               |
| Bố cục trang chi tiết Internet                        | `src/features/internet/internet-content.tsx`                                                                              |
| Nội dung riêng từng gói Internet                      | `src/features/internet/copy/`                                                                                             |
| Header/menu mobile                                    | `src/components/layout/site-header.tsx`                                                                                   |
| Route trang chủ / danh mục / bài viết                 | `src/app/**/page.tsx`                                                                                                     |
| Metadata, trạng thái và dữ liệu trang có kiểu         | `src/features/*/page-content.ts`, `src/app/goi-cuoc-viettel/_data/page-content.ts`                                        |
| Danh sách URL được duyệt và loader server             | `src/lib/approved-routes.ts`, `site-data.ts`, `page-content-registry.ts`                                                  |

## Ví dụ: gói 3N

Route động `/goi-cuoc-viettel/[code]` và `/goi-cuoc-viettel/tra-sau/[code]` dùng `PackageContent` để ghép `PackagePage`, dữ liệu trong `PACKAGE_PAGES` và component chi tiết tra theo đường dẫn đầy đủ. Mỗi file nội dung chỉ xuất phần chi tiết:

```tsx
export default function General3NPageDetails() {
  return (
    <div className="flex flex-col">
      {/* Đoạn văn, ảnh, bảng và hướng dẫn riêng của gói 3N. */}
    </div>
  );
}
```

Sửa bố cục/thông số hiển thị ở `PackagePage` và `package-data.ts`. Sửa đoạn giải thích, bảng, ảnh hoặc hướng dẫn riêng của 3N ở `General3NPageDetails`. `packageDetailsByRoute` trong `src/app/goi-cuoc-viettel/_content/index.ts` đăng ký các phần chi tiết; không ghép thêm `PackagePage` trong từng file. Nội dung bài viết dài vẫn là JSX đọc được; không ép các đoạn khác nhau vào một schema chung.

Giá/quyền lợi xuất hiện trong đoạn văn chi tiết vẫn là nội dung biên tập riêng: khi đổi thông số tóm tắt, cần đối chiếu cả đoạn văn có nhắc đến thông số đó. Giữ định danh đầy đủ `/goi-cuoc-viettel/tra-sau/MXH120` để phân biệt với gói cùng mã ở nhóm khác.

## Giữ giao diện khi chỉnh code

Nút hành động dùng `Button`, nút điều hướng dùng `ButtonLink` ở `src/components/ui/`. Xem [quy ước button](COMMON_BUTTONS.md) cho variants, kích thước và cách ghép với Radix.

- Dùng thuộc tính tĩnh như `className="..."`; dùng `{...}` khi có biến/biểu thức hoặc cần giữ chính xác khoảng trắng quanh chữ in đậm/link.
- Component bố cục và nội dung là Server Component mặc định. Chỉ phần có state/event/DOM mới dùng `"use client"`.
- CSS hiện hành là bundle nguồn `src/styles/viettelup-source.css`. Class Tailwind mới viết thêm chưa chắc có rule trong bundle; thêm CSS có phạm vi hoặc style rõ ràng và kiểm tra computed style trên trình duyệt.
- Asset đã tải local được tra qua `sourceAsset()`. Giữ đúng URL nguồn làm khóa tra hoặc dùng asset local đã có; không đổi ảnh vì refactor code.
- Các generator HTML cũ đã được chặn để tránh ghi đè code đã chỉnh. Không bỏ chặn để cập nhật nội dung; chỉnh trực tiếp component/dữ liệu tương ứng.

## Chạy và kiểm tra

Chạy `npm run dev` rồi mở `http://localhost:3000`. Draft preview đã được bật riêng cho dev; trạng thái duyệt nội dung và guard production vẫn giữ nguyên.

Sau khi sửa, chạy kiểm tra phù hợp:

```bash
npm run typecheck
npm run routes:check
npm test
```

Trong đợt tái cấu trúc này, `node scripts/verify-tsx-refactor.cjs` đối chiếu SSR với bản trước sửa ở `reports/integration/tsx-refactor/before/`. Đây là công cụ kiểm hồi quy cho lần refactor, không phải phép thử để buộc nội dung mới sau này phải giống nội dung cũ. Nó không kiểm thay cho hydration, tương tác hoặc ảnh giao diện; Next Link/Image và router được mô phỏng khi render offline.
