import "server-only";
import { z } from "zod";
import { pageSchema, type PageContent } from "@/lib/content-schema";
import { homePageContent } from "@/constants/home/page-content";
import { packagePageContents } from "@/constants/packages/page-content";
import { newsPageContents } from "@/constants/news/page-content";
import { internetDetailPageContents } from "@/content/internet/page-content";
import { collectionPageContents } from "@/features/collections/page-content";
import { approvedRoutes } from "./approved-routes";

// Validate authored feature data once on the server, rather than reading and
// parsing a site-wide JSON file on every page/metadata/header lookup.
const groups = [
  homePageContent,
  packagePageContents,
  newsPageContents,
  internetDetailPageContents,
  collectionPageContents,
];
const entries = groups.flatMap((group) => Object.entries(group));
if (new Set(entries.map(([path]) => path)).size !== entries.length) {
  throw new Error("Duplicate authored page path");
}
export const pageContents: Record<string, PageContent> = z
  .record(z.string(), pageSchema)
  .parse(Object.fromEntries(entries));
if (
  entries.length !== approvedRoutes.length ||
  approvedRoutes.some((path) => !Object.hasOwn(pageContents, path))
) {
  throw new Error(
    "Authored TS content must cover exactly the 175 approved routes",
  );
}
for (const [path, page] of Object.entries(pageContents)) {
  if (
    page.product &&
    page.product.id !== path &&
    (page.kind === "package" || page.kind === "internet")
  ) {
    throw new Error(`Product identity must equal its page path: ${path}`);
  }
}
