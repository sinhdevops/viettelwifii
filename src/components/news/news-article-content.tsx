import type { PageContent } from "@/lib/content-schema";
import { sourceNewsRoutes } from "@/content/news/source-pages";
import styles from "./news-source.module.css";

/** Each approved article is compiled from its own full original DOM. */
export function NewsArticleContent({
  page,
  path,
}: {
  page: PageContent;
  path: string;
}) {
  const SourceArticle = sourceNewsRoutes[path];
  if (page.kind !== "news-article" || !SourceArticle) return null;
  return (
    <main
      className={`bg-background flex min-h-screen flex-col items-center ${styles.sourceNews}`}
    >
      <SourceArticle />
    </main>
  );
}
