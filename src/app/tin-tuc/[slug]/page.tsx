import type { Metadata } from "next";
import { NewsArticleContent } from "@/features/news/news-article-content";
import {
  metadataForPage,
  pathFromSegment,
  requirePage,
  staticRouteSegments,
} from "@/lib/page-routing";

type Props = { params: Promise<{ slug: string }> };
export const instant = false;

export function generateStaticParams() {
  return staticRouteSegments("/tin-tuc/").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metadataForPage(pathFromSegment("/tin-tuc/", (await params).slug));
}

export default async function Page({ params }: Props) {
  const path = pathFromSegment("/tin-tuc/", (await params).slug);
  const page = requirePage(path, "news-article");
  return <NewsArticleContent page={page} path={path} />;
}
