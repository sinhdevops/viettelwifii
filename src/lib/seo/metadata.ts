import type { Metadata } from "next";
import type { PageContent } from "../content-schema";
import { approvedRoutes } from "../approved-routes";

/** Minimal fields shared by an authored page and its route metadata. */
export type MetadataPage = Pick<
  PageContent,
  "title" | "description" | "status"
>;

const blockedRobots = { index: false, follow: false } as const;
const approvedPaths = new Set<string>(approvedRoutes);

/**
 * Build the metadata currently emitted by page-routing.ts.
 *
 * The caller resolves the approved, renderable page. A missing page returns
 * only noindex/nofollow. Canonical remains a relative path (including for
 * preview drafts); the root layout provides metadataBase.
 *
 * SITE_LIVE and draft-preview admission are owned by the caller/root routes.
 */
export function buildMetadata(
  path: string,
  page: MetadataPage | null,
): Metadata {
  // A caller can resolve the wrong page for a route during a routing change.
  // Never emit a canonical or indexable metadata for a path outside the manifest.
  if (!page || !approvedPaths.has(path)) return { robots: blockedRobots };

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    ...(page.status === "draft" ? { robots: blockedRobots } : {}),
  };
}
