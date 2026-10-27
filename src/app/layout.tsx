import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getRenderablePage } from "@/lib/site-data";
// Exact stylesheets extracted by true-web-clone, with only local asset URLs rewritten.
import "@/styles/viettelup-source.css";

const live = process.env.SITE_LIVE === "true";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(rawSiteUrl),
  title: { default: "Website đang được xây dựng", template: "%s" },
  robots: live ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="__variable_13aad5 __variable_b4b002 __variable_094b27 __variable_17b387">
      <body>
        <SiteHeader newsLocal={getRenderablePage("/tin-tuc") !== null} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
