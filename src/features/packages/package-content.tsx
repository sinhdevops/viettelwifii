import type { PageContent } from "@/lib/content-schema";
import { sourcePackageRoutes } from "./source-pages";
import styles from "./package-content.module.css";

export type PackageContentProps = { page: PageContent; path: string };

/** Original source hierarchy is compiled to route-specific semantic TSX. */
export function PackageContent({ page, path }: PackageContentProps) {
  const SourcePage = sourcePackageRoutes[path];

  if (!SourcePage || page.kind !== "package") {
    return (
      <main className="flex min-h-screen flex-col items-center bg-background">
        <article className="w-full max-w-[1140px] px-4 py-10">
          <h1>{page.heading}</h1>
          <p>Nội dung gói cước chưa có bản nguồn được phê duyệt.</p>
        </article>
      </main>
    );
  }

  return (
    <main className={`flex min-h-screen flex-col items-center bg-background ${styles.sourcePackage}`}>
      <article className="w-full max-w-[1140px]">
        <SourcePage />
      </article>
    </main>
  );
}
