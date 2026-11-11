import "server-only";
import type { PageContent } from "../content-schema";
import { approvedRoutes } from "../approved-routes";
import { parseApprovedRoutes } from "../scope";
import { pageContents } from "../page-content-registry";

const routes = parseApprovedRoutes([...approvedRoutes]);
const approved = new Set(routes);

export function getApprovedRoutes(): string[] {
  return [...routes];
}

export function getPage(path: string): PageContent | null {
  if (!approved.has(path)) return null;
  const page = pageContents[path];
  return page ?? null;
}

/**
 * Status no longer restricts rendering: every approved route is served in every
 * environment. Draft readiness controls indexing separately, not rendering.
 */
export function getRenderablePage(path: string): PageContent | null {
  if (!approved.has(path)) return null;
  return pageContents[path] ?? null;
}

/**
 * Indexability is separate from renderability: only `ready` pages may enter the
 * sitemap or emit an indexable robots directive. Draft pages still render so
 * internal links do not break, but they stay `noindex, nofollow`.
 */
export function isIndexablePage(path: string): boolean {
  if (!approved.has(path)) return false;
  return pageContents[path]?.status === "ready";
}

export function getIndexablePages(): { path: string; page: PageContent }[] {
  return routes.flatMap((path) => {
    const page = pageContents[path];
    return page && page.status === "ready" ? [{ path, page }] : [];
  });
}
