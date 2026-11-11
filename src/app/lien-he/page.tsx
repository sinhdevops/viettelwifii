import type { Metadata } from "next";
import Link from "next/link";
import { SiteInfoPage } from "@/components/site-pages/site-info-page";
import { metadataForSiteRoute } from "@/lib/site-page-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = metadataForSiteRoute("/lien-he");

const topics = [
  "Tư vấn gói cước di động và Internet",
  "Kiểm tra điều kiện lắp đặt theo khu vực",
  "Hướng dẫn đăng ký, gia hạn và hủy gói",
] as const;

export default function ContactPage() {
  return (
    <SiteInfoPage
      path="/lien-he"
      title="Liên hệ"
      intro="Thông tin liên hệ do người quản lý website cung cấp. Vui lòng kiểm tra lại thông tin hiện hành trước khi thực hiện giao dịch."
      secondaryHref="/internet"
      secondaryLabel="Xem Internet"
      sections={[
        {
          heading: "Điện thoại tư vấn",
          content: siteConfig.phoneNumber ? (
            <>
              <p>
                Gọi <a href={siteConfig.phoneHref}>{siteConfig.phoneNumber}</a>{" "}
                để được tư vấn trực tiếp về gói cước và lắp đặt.
              </p>
              <ul>
                {topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>Chưa cấu hình số điện thoại liên hệ.</p>
          ),
        },
        {
          heading: "Khu vực liên hệ",
          content: (
            <>
              <p>Ông Ích Khiêm, Cẩm Lệ, Đà Nẵng.</p>
              <p>
                Đây chưa phải địa chỉ đăng ký đầy đủ. Email liên hệ và địa chỉ
                đầy đủ cần được xác nhận trước khi website mở công khai.
              </p>
            </>
          ),
        },
        {
          heading: "Trước khi gửi thông tin",
          content: (
            <p>
              Chỉ gửi họ tên, số điện thoại và địa chỉ lắp đặt khi thực sự có
              nhu cầu. Không gửi số tài khoản, mật khẩu, mã OTP hoặc giấy tờ tùy
              thân qua bất kỳ kênh liên hệ nào. Xem thêm{" "}
              <Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link> và{" "}
              <Link href="/dieu-khoan">Điều khoản sử dụng</Link>.
            </p>
          ),
        },
        {
          heading: "Người quản lý",
          content: <p>Lê Văn Sinh.</p>,
        },
      ]}
    />
  );
}
