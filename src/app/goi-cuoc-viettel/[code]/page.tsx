import type { Metadata } from "next";
import { PackageContent } from "@/components/packages/package-content";
import { PageJsonLd } from "@/components/site-pages/page-json-ld";
import {
  metadataForPage,
  pathFromSegment,
  requirePage,
  staticRouteSegments,
} from "@/lib/page-routing";

type Props = { params: Promise<{ code: string }> };
export const instant = false;

export function generateStaticParams() {
  return staticRouteSegments("/goi-cuoc-viettel/").map((code) => ({ code }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metadataForPage(
    pathFromSegment("/goi-cuoc-viettel/", (await params).code),
  );
}

export default async function Page({ params }: Props) {
  const path = pathFromSegment("/goi-cuoc-viettel/", (await params).code);
  const page = requirePage(path, "package");
  return (
    <>
      <PageJsonLd path={path} page={page} />
      <PackageContent page={page} path={path} />
    </>
  );
}
