import type { Metadata } from "next";
import { PackageContent } from "@/app/goi-cuoc-viettel/_components/package-content";
import {
  metadataForPage,
  pathFromSegment,
  requirePage,
  staticRouteSegments,
} from "@/lib/page-routing";

type Props = { params: Promise<{ code: string }> };
export const instant = false;

export function generateStaticParams() {
  return staticRouteSegments("/goi-cuoc-viettel/tra-sau/").map((code) => ({
    code,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metadataForPage(
    pathFromSegment("/goi-cuoc-viettel/tra-sau/", (await params).code),
  );
}

export default async function Page({ params }: Props) {
  const path = pathFromSegment(
    "/goi-cuoc-viettel/tra-sau/",
    (await params).code,
  );
  const page = requirePage(path, "package");
  return <PackageContent page={page} path={path} />;
}
