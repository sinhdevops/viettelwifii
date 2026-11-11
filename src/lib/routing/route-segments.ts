import "server-only";
import { notFound } from "next/navigation";
import { getApprovedRoutes } from "../server/page-repository";

/** Resolve one case-sensitive route segment without absorbing nested paths. */
export function pathFromSegment(prefix: string, segment: string): string {
  if (!segment || /[\\/?#]/.test(segment)) notFound();
  return `${prefix}${segment}`;
}

/** Use only paths from the approved manifest; preserve Next 16 sample params. */
export function staticRouteSegments(prefix: string): string[] {
  const candidates = getApprovedRoutes().filter(
    (path) =>
      path.startsWith(prefix) && !path.slice(prefix.length).includes("/"),
  );
  // Rendering is independent of indexing: prerender draft content too.
  return candidates.map((path) => path.slice(prefix.length));
}
