import type { Metadata, Viewport } from "next";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getRenderablePage } from "@/lib/server/page-repository";
import { siteConfig } from "@/lib/site-config";
import {
  buildSiteJsonLd,
  getPublicationOrigin,
  serializeJsonLd,
} from "@/features/seo/page-seo";
import { isSiteRouteRenderable, siteRouteDefinitions } from "@/lib/site-routes";
import { sourceFont } from "./fonts";
// Exact stylesheets extracted by true-web-clone, with only local asset URLs rewritten.
import "@/styles/viettelup-source.css";
import "@/styles/brand.css";
import "@/styles/fonts.css";
// Theme + utilities only (no Preflight), so authored components get the utility
// classes the captured bundle never contained. Captured rules stay authoritative.
import "@/styles/utilities.css";

const publicationEnabled = getPublicationOrigin() !== null;
export const viewport: Viewport = { themeColor: "#ed1c24" };
const availableSiteRoutes = siteRouteDefinitions
  .filter(({ path }) => isSiteRouteRenderable(path))
  .map(({ path }) => path);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.origin),
  icons: {
    icon: "/icon-192.png",
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "Thông tin gói cước Internet và di động | ViettelWiFii.vn",
    template: "%s",
  },
  description:
    "Thông tin tra cứu về gói cước di động và dịch vụ Internet. Kiểm tra giá và điều kiện hiện hành với nhà mạng trước khi đăng ký.",
  robots: {
    index: publicationEnabled,
    follow: publicationEnabled,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "ViettelWiFii.vn",
    title: "Thông tin gói cước Internet và di động | ViettelWiFii.vn",
    description:
      "Thông tin tra cứu về gói cước di động và dịch vụ Internet. Kiểm tra giá và điều kiện hiện hành với nhà mạng trước khi đăng ký.",
  },
  twitter: {
    card: "summary",
    title: "Thông tin gói cước Internet và di động | ViettelWiFii.vn",
    description:
      "Thông tin tra cứu về gói cước di động và dịch vụ Internet. Kiểm tra giá và điều kiện hiện hành với nhà mạng trước khi đăng ký.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const siteJsonLd = buildSiteJsonLd();
  return (
    <html lang="vi" className={sourceFont.variable}>
      <body>
        {siteJsonLd.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteJsonLd) }}
          />
        )}
        <NextTopLoader color="var(--brand)" showSpinner={false} />
        <SiteHeader
          newsLocal={getRenderablePage("/tin-tuc") !== null}
          availableSiteRoutes={availableSiteRoutes}
        />
        {children}
        <SiteFooter availableSiteRoutes={availableSiteRoutes} />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
