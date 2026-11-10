import {
  buildPageJsonLd,
  seoApprovedRoutes,
  serializeJsonLd,
} from "@/features/seo/page-seo";
import type { SeoPage } from "@/features/seo/page-seo";

export function PageJsonLd({
  path,
  page,
}: {
  path: string;
  page: SeoPage | null;
}) {
  const jsonLd = buildPageJsonLd({
    path,
    page,
    approvedRoutes: seoApprovedRoutes,
  });
  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
    />
  );
}
