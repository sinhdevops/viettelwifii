import type { Metadata } from "next";
import { NewsArticleContent } from "@/components/news/news-article-content";
import { PageJsonLd } from "@/components/site-pages/page-json-ld";
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
  return (
    <>
      <PageJsonLd path={path} page={page} />
      <NewsArticleContent page={page} path={path} />
    </>
  );
}
