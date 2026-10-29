import type { Metadata } from "next";
import { InternetContent } from "@/components/internet/internet-content";
import {
  metadataForPage,
  pathFromSegment,
  requirePage,
  staticRouteSegments,
} from "@/lib/page-routing";

type Props = { params: Promise<{ code: string }> };
export const instant = false;

export function generateStaticParams() {
  return staticRouteSegments("/internet/").map((code) => ({ code }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metadataForPage(pathFromSegment("/internet/", (await params).code));
}

export default async function Page({ params }: Props) {
  const path = pathFromSegment("/internet/", (await params).code);
  const page = requirePage(path, "internet");
  return <InternetContent page={page} path={path} />;
}
