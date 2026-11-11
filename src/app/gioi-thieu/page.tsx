import type { Metadata } from "next";
import Link from "next/link";
import { SiteInfoPage } from "@/components/site-pages/site-info-page";
import { metadataForSiteRoute } from "@/lib/site-page-metadata";

export const metadata: Metadata = metadataForSiteRoute("/gioi-thieu");

export default function AboutPage() {
  return (
    <SiteInfoPage
      path="/gioi-thieu"
      title="Giới thiệu"
      intro="ViettelWiFii.vn hiện đang được chuẩn bị lại về nội dung, quyền sử dụng tài nguyên và thông tin pháp lý trước khi mở công khai."
      sections={[
        {
          heading: "Người quản lý website",
          content: <p>Lê Văn Sinh.</p>,
        },
        {
          heading: "Phạm vi nội dung",
          content: (
            <>
              <p>
                Website dự kiến cung cấp thông tin tra cứu về gói cước di động
                và dịch vụ Internet. Giá, điều kiện sử dụng và chương trình ưu
                đãi có thể thay đổi; cần xác minh với nhà mạng trước khi đăng
                ký.
              </p>
              <p>
                Quyền sử dụng nội dung, hình ảnh, phông chữ và tài nguyên của
                website tham chiếu đang được xác minh. Các trang chưa được phê
                duyệt sẽ không được lập chỉ mục hoặc dùng làm trang đích quảng
                cáo.
              </p>
            </>
          ),
        },
        {
          heading: "Kênh hỗ trợ chính thức",
          content: (
            <p>
              Trang này không thay thế các kênh hỗ trợ khách hàng chính thức của
              nhà mạng. Vui lòng kiểm tra thông tin hiện hành trực tiếp với nhà
              mạng trước khi thực hiện giao dịch.
            </p>
          ),
        },
        {
          heading: "Cách kiểm tra và điều chỉnh thông tin",
          content: (
            <>
              <p>
                Nội dung trên website được tổng hợp để tham khảo. Các thông tin
                về giá, thời hạn, ưu đãi, khu vực áp dụng và cú pháp đăng ký cần
                được đối chiếu với thông báo hiện hành của nhà mạng trước khi sử
                dụng. Bài viết cũ có thể mô tả chương trình đã kết thúc.
              </p>
              <p>
                Nếu phát hiện thông tin thiếu chính xác, trùng lặp hoặc tài
                nguyên có vấn đề về quyền sử dụng, vui lòng phản hồi qua trang{" "}
                <Link href="/lien-he">Liên hệ</Link>, kèm đường dẫn trang và nội
                dung cần kiểm tra. Người quản lý sẽ rà soát trước khi sửa hoặc
                gỡ nội dung.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
