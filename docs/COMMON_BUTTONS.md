# Button dùng chung

`src/components/ui/button.tsx` là primitive duy nhất render `<button>` trong app. Giữ `ref` (React 19), event handler, aria/data attributes và mặc định `type="button"`; nút gửi form phải ghi rõ `type="submit"`.

`src/components/ui/button-link.tsx` dùng Next Link để điều hướng thật, mở tab mới và giữ URL `sms:`/`tel:`. Không lồng button trong link hoặc link trong button.

```tsx
<Button onClick={openDialog}>Đăng ký</Button>
<Button type="submit" disabled={pending}>Gửi đăng ký</Button>
<ButtonLink href="/internet" variant="outline">Chi tiết</ButtonLink>
```

Các variant: `primary`, `outline`, `ghost`, `package`, `packageOutline`, `unstyled`. Size: `normal`, `small`, `card`, `unstyled`. Cặp `package/packageOutline` + size `card` dùng cho CTA thẻ gói trang chủ, căn giữa và cùng kích thước. Breakpoint desktop của CSS hiện hành là **960px**.

Style cập nhật theo yêu cầu: chữ 16px, sans-serif Beausans của app, semibold 600, bo góc 12px, màu nhấn `#AA00A3`. Bỏ font Magistral kế thừa trên CTA và bo góc viên thuốc cũ. `unstyled` vẫn dành cho control chuyên biệt (accordion/menu/icon), không ép chúng thành nút CTA.

Để giữ giao diện control chuyên biệt (menu, accordion, carousel, country picker), dùng `variant="unstyled" size="unstyled"` và giữ class/handler cũ. Với Radix Close/Trigger dùng `asChild` bọc Button, tránh sinh hai nút lồng nhau.

Style chung nằm trong `button.module.css`; không cần trông chờ utility mới có sẵn trong stylesheet nguồn. Button chỉ xử lý hình thức/semantics, không tự gọi API hoặc mở popup. Hành vi do component chuyên trách điều khiển.

Trang chủ chỉ mở form lead cho sản phẩm ready. Trong local draft preview, CTA desktop mở hướng dẫn SMS/Money hiện có của đúng gói. Mobile giữ link SMS. Thay đổi này không đổi status hoặc quyền nhận lead production.
