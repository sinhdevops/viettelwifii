import type { ReactNode } from "react";
import type { PageContent } from "@/lib/content-schema";
import { PackagePage } from "./package-page";
import { getPackageRouteContent } from "@/content/packages/package-route";
import styles from "./package-content.module.css";

export type PackageContentProps = { page: PageContent; path: string };

/** Original source hierarchy is compiled to route-specific semantic TSX. */
export function PackageContent({ page, path }: PackageContentProps) {
  const content = getPackageRouteContent(path);

  if (!content || page.kind !== "package") {
    return (
      <main className="bg-background flex min-h-screen flex-col items-center">
        <article className="w-full max-w-[1140px] px-4 py-10">
          <h1>{page.heading}</h1>
          <p>Nội dung gói cước chưa có bản nguồn được phê duyệt.</p>
        </article>
      </main>
    );
  }

  const { record, Details } = content;
  const h1Override = verifiedPackageH1(page, path);

  return (
    <main
      className={`bg-background flex min-h-screen flex-col items-center ${styles.sourcePackage}`}
    >
      <article className="w-full max-w-[1140px]">
        <PackagePage record={record} h1Override={h1Override}>
          <Details />
        </PackagePage>
      </article>
    </main>
  );
}

function verifiedPackageH1(page: PageContent, path: string): ReactNode | undefined {
  const product = page.product;
  const verifiedFields = page.source?.verifiedFields ?? [];

  if (
    page.kind !== "package" ||
    product?.id !== path ||
    !verifiedFields.includes("price and cycle") ||
    !verifiedFields.includes("data allowance") ||
    !product.price?.cycle ||
    !product.dataAllowances?.length
  ) {
    return undefined;
  }

  const allowance = product.dataAllowances
    .map((item) => item.sourceLabel)
    .join(" + ");
  return (
    <>
      Gói cước Viettel{" "}
      <span className="text-primary">{product.code}</span>: {allowance} –{" "}
      {product.price.sourceLabel}/{product.price.cycle.label}
    </>
  );
}
