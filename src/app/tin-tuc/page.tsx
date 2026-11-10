import { NewsListContent } from "@/components/news/news-list-content";
import { PageJsonLd } from "@/components/site-pages/page-json-ld";
import { metadataForPage, requirePage } from "@/lib/page-routing";

export function generateMetadata() {
  return metadataForPage("/tin-tuc");
}
export default function NewsPage() {
  const page = requirePage("/tin-tuc", "news-list");
  return (
    <>
      <PageJsonLd path="/tin-tuc" page={page} />
      <NewsListContent page={page} path="/tin-tuc" />
    </>
  );
}
