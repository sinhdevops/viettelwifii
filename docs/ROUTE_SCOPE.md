# Phạm vi URL được phép triển khai

## Phạm vi hiện hành

**175 route sản phẩm/nội dung + 5 support = SEO allowlist 180 route.** Đây là phạm vi, không phải số trang hoàn thiện hoặc đủ điều kiện index.

171 route gốc trong phụ lục master prompt gồm:

- Trang chủ: 1.
- Gói Viettel: 116 (101 thường, 15 trả sau).
- Tin tức: 36 (1 listing, 35 bài).
- Chi tiết Internet: 18.

Người dùng bổ sung 4 collection: `/internet`, `/goi-cuoc-gic`, `/goi-cuoc-nine`, `/goi-cuoc-roaming`. Không cần yêu cầu lại sitemap.

Registry runtime sản phẩm là `src/lib/approved-routes.ts`; `data/approved-routes.json` là bản đối chiếu phạm vi. Support nằm riêng trong `src/lib/site-routes.ts`: `/goi-cuoc-viettel`, `/gioi-thieu`, `/lien-he`, `/chinh-sach-bao-mat`, `/dieu-khoan`. Không gộp support vào manifest 175.

## Render và SEO

- Mọi route trong hai registry đều render ở mọi môi trường, không dùng cờ preview hoặc xuất bản cũ.
- Chỉ route `ready` được index và vào sitemap. Draft render với `noindex,nofollow`, không canonical và không JSON-LD.
- Readiness của privacy không chặn form: form luôn mở. Gửi thật cần Supabase (hiện chưa cấu hình); consent/phiên bản vẫn được kiểm tra, Turnstile tùy chọn theo cặp khóa, Telegram tùy chọn sau lưu bền vững.
- Route ngoài allowlist trả 404. Không crawl link để tự thêm scope; đích ngoài phạm vi chỉ dùng external link đã xác minh khi phù hợp.
- `generateStaticParams` dùng các route được duyệt, không lọc draft khỏi render. Sitemap lọc readiness độc lập.

## App Router

Bốn nhóm động dùng segment tường minh: `/goi-cuoc-viettel/[code]`, `/goi-cuoc-viettel/tra-sau/[code]`, `/internet/[code]`, `/tin-tuc/[slug]`. Trang chủ, listing, collection và support có entry riêng. Không dùng catch-all toàn site.

Giữ nguyên chữ hoa/thường và full path: `/goi-cuoc-viettel/MXH120` khác `/goi-cuoc-viettel/tra-sau/MXH120`. HTTP 200 không chứng minh nội dung đúng hoặc route đã nghiệm thu.

`data/pages.json` là archive trước migration, không phải nguồn sự thật runtime/test hiện hành. Kiểm tra phạm vi bằng `pnpm routes:check`; lệnh này chưa được chạy trong đợt sửa tài liệu này.
