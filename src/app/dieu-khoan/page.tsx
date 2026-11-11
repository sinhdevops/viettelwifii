import type { Metadata } from "next";
import Link from "next/link";
import { SiteInfoPage } from "@/components/site-pages/site-info-page";
import { metadataForSiteRoute } from "@/lib/site-page-metadata";

export const metadata: Metadata = metadataForSiteRoute("/dieu-khoan");

export default function TermsPage() {
  return (
    <SiteInfoPage
      path="/dieu-khoan"
      title="Điều khoản sử dụng"
      intro="Điều khoản đang được rà soát về thông tin pháp lý, quyền sử dụng nội dung và điều kiện tiếp nhận yêu cầu tư vấn."
      sections={[
        {
          heading: "Phạm vi thông tin",
          content: (
            <p>
              Nội dung gói cước và dịch vụ có thể thay đổi theo chính sách của
              nhà mạng. Hãy xác minh giá, điều kiện, thời hạn và cú pháp đăng ký
              tại kênh chính thức trước khi thực hiện.
            </p>
          ),
        },
        {
          heading: "Quan hệ với nhà mạng",
          content: (
            <p>
              Việc nhắc đến nhãn hiệu hoặc dịch vụ của nhà mạng nhằm nhận diện
              nội dung. Trang này không thay thế hợp đồng, điều khoản dịch vụ
              hoặc kênh hỗ trợ chính thức của nhà mạng.
            </p>
          ),
        },
        {
          heading: "Yêu cầu tư vấn qua biểu mẫu",
          content: (
            <p>
              Website có thể hiển thị biểu mẫu đăng ký tư vấn. Yêu cầu chỉ được
              tiếp nhận khi máy chủ có cấu hình lưu trữ phù hợp; biểu mẫu không
              đồng nghĩa với việc một hợp đồng dịch vụ đã được ký kết. Không gửi
              mật khẩu, mã OTP hoặc giấy tờ tùy thân qua biểu mẫu.
            </p>
          ),
        },
        {
          heading: "Nội dung đang được rà soát",
          content: (
            <p>
              Quyền sử dụng văn bản, hình ảnh, phông chữ và tài nguyên tham
              chiếu đang được xác minh. Chỉ nội dung đã được phê duyệt mới được
              dùng trên bản công khai.
            </p>
          ),
        },
        {
          heading: "Thông tin người quản lý và liên hệ",
          content: (
            <p>
              Tên pháp lý, địa chỉ đầy đủ, email và điều kiện áp dụng còn cần
              được xác nhận. Xem trang{" "}
              <Link className="underline underline-offset-4" href="/lien-he">
                Liên hệ
              </Link>{" "}
              để biết thông tin hiện có.
            </p>
          ),
        },
      ]}
    />
  );
}
