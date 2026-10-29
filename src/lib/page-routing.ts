import "server-only";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { PageContent } from "./content-schema";
import { buildMetadata } from "./seo/metadata";
import { getRenderablePage } from "./server/page-repository";

export { pathFromSegment, staticRouteSegments } from "./routing/route-segments";

/** Keep the existing metadata and draft behavior across explicit route entries. */
export function metadataForPage(path: string): Metadata {
  return buildMetadata(path, getRenderablePage(path));
}

export function requirePage(
  path: string,
  kind: PageContent["kind"],
): PageContent {
  const page = getRenderablePage(path);
  if (!page || page.kind !== kind) notFound();
  return page;
}
