import type { Metadata } from "next";
import { SiteInfoPage } from "@/components/site-pages/site-info-page";
import { metadataForSiteRoute } from "@/lib/site-page-metadata";

export const metadata: Metadata = metadataForSiteRoute("/chinh-sach-bao-mat");

export default function PrivacyPolicyPage() {
  return (
    <SiteInfoPage
      path="/chinh-sach-bao-mat"
      title="Chính sách bảo mật"
      intro="Thông tin về việc tiếp nhận dữ liệu qua biểu mẫu đang được rà soát. Bản chính sách hiện tại chưa được người quản lý phê duyệt đầy đủ."
      sections={[
        {
          heading: "Biểu mẫu liên hệ hiện tại",
          content: (
            <>
              <p>
                Các biểu mẫu đăng ký có thể hiển thị trên website. Khi dịch vụ
                lưu trữ thông tin liên hệ chưa được cấu hình, máy chủ từ chối
                tiếp nhận yêu cầu. Việc biểu mẫu hiển thị không bảo đảm rằng
                thông tin gửi đi đã được tiếp nhận thành công.
              </p>
              <p>
                Nếu biểu mẫu hoạt động, dữ liệu được yêu cầu có thể gồm họ tên,
                số điện thoại và địa chỉ cần lắp đặt, cùng thông tin về trang
                hoặc gói cước mà bạn đang quan tâm. Chỉ gửi thông tin khi đã đọc
                và đồng ý với nội dung áp dụng tại thời điểm gửi.
              </p>
            </>
          ),
        },
        {
          heading: "Thông tin còn chờ xác nhận",
          content: (
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Tên và địa chỉ liên hệ đầy đủ của người kiểm soát dữ liệu.
              </li>
              <li>Loại dữ liệu thu thập và mục đích sử dụng từng loại.</li>
              <li>
                Đơn vị xử lý dữ liệu, nơi lưu trữ và việc chuyển dữ liệu nếu có.
              </li>
              <li>
                Thời hạn lưu trữ, cách yêu cầu truy cập, chỉnh sửa hoặc xóa.
              </li>
              <li>
                Đầu mối tiếp nhận yêu cầu và khiếu nại về dữ liệu cá nhân.
              </li>
            </ul>
          ),
        },
        {
          heading: "Phê duyệt",
          content: (
            <p>
              Đây là bản thông tin tạm thời, chưa thay thế chính sách bảo mật
              đầy đủ đã được phê duyệt. Người quản lý cần hoàn tất các mục còn
              thiếu trước khi sử dụng biểu mẫu để tiếp nhận dữ liệu thực tế.
            </p>
          ),
        },
      ]}
    />
  );
}
