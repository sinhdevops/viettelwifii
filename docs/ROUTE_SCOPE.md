# Phạm vi URL được phép triển khai

Nguồn duy nhất cho danh sách trang: sitemap XML do người dùng cung cấp ngày 2026-10-26.

Tổng cộng **171 URL chính xác**:

- Trang chủ: **1**.
- Gói cước Viettel `/goi-cuoc-viettel/[...slug]`: **116**.
- Tin tức: **36** (gồm 1 listing và 35 bài).
- Internet `/internet/[code]`: **18**.

Đọc danh sách machine-readable: `VIETTELUP-CODEX-KIT/data/approved-routes.json`.

**Quy tắc:** chỉ route trong JSON được xuất bản. Không crawl link để tự mở rộng scope. Nếu link điều hướng tham chiếu đến đường dẫn không trong allowlist thì không sinh thêm trang; báo cáo hoặc sử dụng external link đã xác minh nếu thích hợp. `generateStaticParams` / sitemap đều lấy dữ liệu từ manifest, chỉ đưa trang thực sự có nội dung/đủ điều kiện index. Không sao chép sitemap có sẵn với giả định tất cả URL đã hoạt động.

Ví dụ URL có thật trong sitemap:

- `/`
- `/tin-tuc`
- `/goi-cuoc-viettel/5G20`
- `/goi-cuoc-viettel/tra-sau/MXH120`
- `/internet/NETVT01`
- `/internet/MESHVT1_GIAITRI`

Chú ý `/goi-cuoc-viettel/tra-sau/[code]` là nested route; nên dùng `[...slug]` để hỗ trợ cả hai cấp dưới `/goi-cuoc-viettel`.
