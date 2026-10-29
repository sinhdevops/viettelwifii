import "server-only";
import { notFound } from "next/navigation";
import {
  getApprovedRoutes,
  getIndexablePages,
} from "../server/page-repository";

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
  const ready = new Set(getIndexablePages().map(({ path }) => path));
  const published = candidates.filter((path) => ready.has(path));
  // Cache Components requires a sample; requirePage still enforces publishing.
  return (published.length ? published : candidates.slice(0, 1)).map((path) =>
    path.slice(prefix.length),
  );
}
