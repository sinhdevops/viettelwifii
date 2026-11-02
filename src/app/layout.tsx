import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getRenderablePage } from "@/lib/server/page-repository";
import { siteConfig } from "@/lib/site-config";
import { sourceFont } from "./fonts";
// Exact stylesheets extracted by true-web-clone, with only local asset URLs rewritten.
import "@/styles/viettelup-source.css";
import "@/styles/brand.css";
import "@/styles/fonts.css";

const live = process.env.SITE_LIVE === "true";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.origin),
  title: { default: "Website đang được xây dựng", template: "%s" },
  robots: live
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={sourceFont.variable}>
      <body>
        <NextTopLoader color="var(--brand)" showSpinner={false} />
        <SiteHeader newsLocal={getRenderablePage("/tin-tuc") !== null} />
        {children}
        <SiteFooter />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
