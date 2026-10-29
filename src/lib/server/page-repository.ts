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

/** Only reviewed content can be used by production leads. */
export function getPage(path: string): PageContent | null {
  if (!approved.has(path)) return null;
  const page = pageContents[path];
  return page?.status === "ready" ? page : null;
}

/** Preserve local draft preview; a refactor never publishes draft content. */
export function getRenderablePage(path: string): PageContent | null {
  if (!approved.has(path)) return null;
  const page = pageContents[path];
  if (page?.status === "ready") return page;
  if (
    process.env.NODE_ENV === "production" ||
    process.env.SITE_PREVIEW_DRAFTS !== "1"
  )
    return null;
  return page ?? null;
}

export function getIndexablePages(): { path: string; page: PageContent }[] {
  return routes.flatMap((path) => {
    const page = pageContents[path];
    return page?.status === "ready" ? [{ path, page }] : [];
  });
}
