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

export function getRenderablePage(path: string): PageContent | null {
  if (!approved.has(path)) return null;
  const page = pageContents[path];
  return page ?? null;
}

export function getIndexablePages(): { path: string; page: PageContent }[] {
  return routes.flatMap((path) => {
    const page = pageContents[path];
    return page ? [{ path, page }] : [];
  });
}
