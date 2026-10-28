# Trang /internet

Giao diện được viết bằng TSX, giữ nguyên class Tailwind/CSS và media local hiện có.

- `internet-collection.tsx`: bố cục và thứ tự các section.
- `page-content.ts`: title, description, trạng thái xuất bản và nguồn đối chiếu; thay cho metadata JSON của riêng route này.
- `hero.tsx`, `pricing.tsx`, `mesh-pricing.tsx`, `faq.tsx`, `news.tsx`: các section.
- `internet-data.tsx`: dữ liệu có kiểu của card và nội dung FAQ có JSX.
- `internet-plan-card.tsx`: khung dùng chung cho card combo và card Internet cá nhân.
- `combo-internet-card.tsx`, `broadband-internet-card.tsx`: nội dung riêng của hai loại card.
- `regional-pricing.tsx`, `internet-region-picker.tsx`: chọn khu vực và giá bằng React state.

`src/app/internet/page.tsx` ghép trực tiếp `InternetCollection` và runtime tương tác. Chi tiết gói nằm ở `src/app/internet/[code]/page.tsx`, dùng feature `src/features/internet/`. Metadata TypeScript được ghép vào registry server; loader vẫn giữ allowlist và quy tắc draft/production.

Các JSON về asset, danh sách route và tỉnh/phường vẫn là dữ liệu kỹ thuật; không phải cây giao diện JSON. Không đổi trạng thái `draft` để mở production trong một đợt refactor.
