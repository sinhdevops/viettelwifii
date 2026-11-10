import type { Metadata } from "next";
import { SiteInfoPage } from "@/components/site-pages/site-info-page";
import { metadataForSiteRoute } from "@/lib/site-page-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = metadataForSiteRoute("/lien-he");

export default function ContactPage() {
  return (
    <SiteInfoPage
      path="/lien-he"
      title="Liên hệ"
      intro="Thông tin dưới đây là thông tin liên hệ được người quản lý website cung cấp; trang vẫn ở trạng thái bản nháp."
      sections={[
        {
          heading: "Điện thoại tư vấn",
          content: siteConfig.phoneNumber ? (
            <p>
              <a className="underline underline-offset-4" href={siteConfig.phoneHref}>
                {siteConfig.phoneNumber}
              </a>
            </p>
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
          heading: "Người quản lý",
          content: <p>Lê Văn Sinh.</p>,
        },
      ]}
    />
  );
}
