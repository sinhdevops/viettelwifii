# Data provenance

- `approved-routes.json`: bản đối chiếu phạm vi 175 URL, giữ chữ hoa/thường; runtime dùng `src/lib/approved-routes.ts` và test kiểm tra hai bản khớp nhau.
- `pages.json`: historical fixture (171 record), giữ để đối chiếu các lần capture/chuyển đổi cũ. Không phải nguồn nội dung runtime, không phải golden fixture cho trạng thái ready/draft hiện hành. Các script lịch sử trong `scripts/content/` có thể đọc/ghi bản lưu trữ này; không chạy để cập nhật website hiện hành.
- Nội dung đang chạy được khai báo tại các module được import trong `src/lib/page-content-registry.ts`, validate một lần bằng Zod. Sửa module TypeScript tương ứng thay vì sửa `pages.json`.
