import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { StatusScreen } from "@/components/site/status-screen";

export default function NotFound() {
  return (
    <StatusScreen
      code="Lỗi 404"
      title="Liên kết không tồn tại"
      description={
        <>
          Rất tiếc, liên kết bạn tìm không tồn tại hoặc đã được thay đổi. Hãy
          kiểm tra lại địa chỉ, hoặc chọn một trang bên dưới.
        </>
      }
      icon={
        <Image
          unoptimized
          src="/assets/viettelup/not-found.png"
          width={40}
          height={40}
          alt=""
          aria-hidden="true"
        />
      }
      primary={
        <ButtonLink href="/" variant="primary">
          <ArrowLeft size={18} strokeWidth={2.4} aria-hidden="true" /> Về trang
          chủ
        </ButtonLink>
      }
      secondary={
        <ButtonLink href="/goi-cuoc-viettel" variant="outline">
          Xem gói cước
        </ButtonLink>
      }
    />
  );
}
