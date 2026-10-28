import "server-only";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { PageContent } from "./content-schema";
import {
  getApprovedRoutes,
  getIndexablePages,
  getRenderablePage,
} from "./site-data";

/** Keep the existing metadata and draft behavior across explicit route entries. */
export function metadataForPage(path: string): Metadata {
  const page = getRenderablePage(path);
  return page
    ? {
        title: page.title,
        description: page.description,
        alternates: { canonical: path },
        ...(page.status === "draft"
          ? { robots: { index: false, follow: false } }
          : {}),
      }
    : { robots: { index: false, follow: false } };
}

export function requirePage(
  path: string,
  kind: PageContent["kind"],
): PageContent {
  const page = getRenderablePage(path);
  if (!page || page.kind !== kind) notFound();
  return page;
}

export function pathFromSegment(prefix: string, segment: string): string {
  if (!segment || /[\\/?#]/.test(segment)) notFound();
  return `${prefix}${segment}`;
}

/** Match exactly one segment; never absorb nested or unapproved URLs. */
export function staticRouteSegments(prefix: string): string[] {
  const candidates = getApprovedRoutes().filter(
    (path) =>
      path.startsWith(prefix) && !path.slice(prefix.length).includes("/"),
  );
  const ready = new Set(getIndexablePages().map(({ path }) => path));
  const published = candidates.filter((path) => ready.has(path));
  // Cache Components requires a sample; requirePage still enforces publishing.
  return (published.length ? published : candidates.slice(0, 1)).map((path) =>
    path.slice(prefix.length),
  );
}
