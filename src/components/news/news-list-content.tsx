import type { PageContent } from "@/lib/content-schema";
import { sourceNewsRoutes } from "@/content/news/source-pages";
import styles from "./news-source.module.css";

/** Server-rendered source DOM for the approved /tin-tuc landing page. */
export function NewsListContent({
  page,
  path,
}: {
  page: PageContent;
  path: string;
}) {
  const SourceListing = sourceNewsRoutes[path];
  if (page.kind !== "news-list" || path !== "/tin-tuc" || !SourceListing)
    return null;
  return (
    <main
      className={`bg-background flex min-h-screen flex-col items-center ${styles.sourceNews}`}
    >
      <SourceListing />
    </main>
  );
}
