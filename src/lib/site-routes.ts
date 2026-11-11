/** Non-product support routes stay separate from the approved content-route manifest. */
export type SiteRouteDefinition = {
  path: string;
  kind: "package-hub" | "about" | "contact" | "privacy" | "terms";
  title: string;
  description: string;
  status: "draft" | "ready";
};

export const siteRouteDefinitions: SiteRouteDefinition[] = [
  {
    path: "/goi-cuoc-viettel",
    kind: "package-hub",
    title: "Danh mục gói cước Viettel",
    description:
      "Tra cứu danh mục gói cước theo nhóm. Giá, điều kiện và cú pháp đăng ký cần được xác minh với nhà mạng trước khi sử dụng.",
    status: "ready",
  },
  {
    path: "/gioi-thieu",
    kind: "about",
    title: "Giới thiệu | ViettelWiFii.vn",
    description: "Thông tin về người quản lý trang và phạm vi nội dung.",
    status: "ready",
  },
  {
    path: "/lien-he",
    kind: "contact",
    title: "Liên hệ | ViettelWiFii.vn",
    description: "Thông tin liên hệ người quản lý website.",
    status: "ready",
  },
  {
    path: "/chinh-sach-bao-mat",
    kind: "privacy",
    title: "Chính sách bảo mật | ViettelWiFii.vn",
    description:
      "Thông tin về việc thu thập, sử dụng và bảo vệ dữ liệu cá nhân.",
    status: "ready",
  },
  {
    path: "/dieu-khoan",
    kind: "terms",
    title: "Điều khoản sử dụng | ViettelWiFii.vn",
    description: "Điều khoản sử dụng và giới hạn trách nhiệm của website.",
    status: "ready",
  },
];

export const siteRoutes = siteRouteDefinitions.map(({ path }) => path);
export const privacyPolicyPath = "/chinh-sach-bao-mat";

export function isPrivacyPolicyRouteReady(): boolean {
  return siteRouteDefinitions.some(
    (route) => route.path === privacyPolicyPath && route.status === "ready",
  );
}
export const indexableSiteRoutes = siteRouteDefinitions
  .filter(({ status }) => status === "ready")
  .map(({ path }) => path);

/** Every registered support route is served in every environment. */
export function isSiteRouteRenderable(path: string): boolean {
  return siteRouteDefinitions.some((entry) => entry.path === path);
}
