import { NewsListContent } from "@/features/news/news-list-content";
import { metadataForPage, requirePage } from "@/lib/page-routing";

export function generateMetadata() {
  return metadataForPage("/tin-tuc");
}
export default function NewsPage() {
  const page = requirePage("/tin-tuc", "news-list");
  return <NewsListContent page={page} path="/tin-tuc" />;
}
