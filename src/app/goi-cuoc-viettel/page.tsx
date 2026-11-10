import type { Metadata } from "next";
import { PackageHub } from "@/components/packages/package-hub";
import { SiteInfoPage } from "@/components/site-pages/site-info-page";
import { approvedRoutes } from "@/lib/approved-routes";
import { metadataForSiteRoute } from "@/lib/site-page-metadata";
import { getPage } from "@/lib/server/page-repository";

export const metadata: Metadata = metadataForSiteRoute("/goi-cuoc-viettel");

function getPackageEntries() {
  return approvedRoutes.flatMap((path) => {
    if (!path.startsWith("/goi-cuoc-viettel/")) return [];
    const page = getPage(path);
    if (!page || page.kind !== "package") return [];
    return [{ path, title: page.heading }];
  });
}

export default function PackageHubPage() {
  return (
    <SiteInfoPage
      path="/goi-cuoc-viettel"
      title="Danh mục gói cước Viettel"
      intro="Danh sách route gói cước hiện có trong hệ thống. Giá, điều kiện và cú pháp đăng ký cần được xác minh với nhà mạng trước khi sử dụng."
      sections={[
        {
          heading: "Danh sách gói cước",
          content: <PackageHub packages={getPackageEntries()} />,
        },
      ]}
    />
  );
}
