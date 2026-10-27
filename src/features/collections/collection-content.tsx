import type { PageContent } from "@/lib/content-schema";
import SourceCollection171 from "./source-pages/SourceCollection171";
import SourceCollection172 from "./source-pages/SourceCollection172";
import SourceCollection173 from "./source-pages/SourceCollection173";
import SourceCollection174 from "./source-pages/SourceCollection174";
import { CollectionRuntime } from "./collection-runtime";

export function CollectionContent({ page, path }: { page: PageContent; path: string }) {
  if (page.kind !== "collection") return null;
  const source = {
    "/internet": <SourceCollection171 />,
    "/goi-cuoc-gic": <SourceCollection172 />,
    "/goi-cuoc-nine": <><h1 className="sr-only">{page.heading}</h1><SourceCollection173 /></>,
    "/goi-cuoc-roaming": <SourceCollection174 />,
  }[path];
  return source ? <>{source}<CollectionRuntime key={path} /></> : null;
}
