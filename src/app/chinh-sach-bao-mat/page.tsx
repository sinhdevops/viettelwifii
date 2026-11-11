import type { Metadata } from "next";
import { SiteInfoPage } from "@/components/site-pages/site-info-page";
import { metadataForSiteRoute } from "@/lib/site-page-metadata";

export const metadata: Metadata = metadataForSiteRoute("/chinh-sach-bao-mat");

export default function PrivacyPolicyPage() {
  return (
    <SiteInfoPage
      path="/chinh-sach-bao-mat"
      title="Chính sách bảo mật"
      intro="Chính sách này chưa được phê duyệt. Biểu mẫu thu thập thông tin sẽ được tắt cho đến khi người kiểm soát dữ liệu, mục đích, thời hạn lưu trữ và quyền của người dùng được xác nhận đầy đủ."
      sections={[
        {
          heading: "Trạng thái xử lý dữ liệu",
          content: (
            <p>
              Không gửi thông tin cá nhân qua biểu mẫu khi trang này còn hiển
              thị trạng thái bản nháp. Không có dữ liệu nào được lưu theo chính
              sách này trước khi chính sách được hoàn thiện và công bố.
            </p>
          ),
        },
        {
          heading: "Thông tin phải được công bố trước khi bật biểu mẫu",
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
              Nội dung này là khung nháp, không phải tư vấn pháp lý hay chính
              sách đã được phê duyệt. Biểu mẫu chỉ được bật sau khi thông tin
              còn thiếu được cung cấp, chính sách được rà soát và phiên bản áp
              dụng được cấu hình.
            </p>
          ),
        },
      ]}
    />
  );
}
