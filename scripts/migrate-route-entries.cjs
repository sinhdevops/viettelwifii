// One-time scaffold for the explicit App Router entry points. UI stays in features.
const fs = require("node:fs");
const path = require("node:path");
function write(file, body) {
  const target = path.join("src/app", file, "page.tsx");
  if (fs.existsSync(target)) throw new Error(`Refusing to overwrite ${target}`);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, body);
}
const families = [
  [
    "goi-cuoc-viettel/[code]",
    "/goi-cuoc-viettel/",
    "code",
    "package",
    "PackageContent",
    "packages/package-content",
  ],
  [
    "goi-cuoc-viettel/tra-sau/[code]",
    "/goi-cuoc-viettel/tra-sau/",
    "code",
    "package",
    "PackageContent",
    "packages/package-content",
  ],
  [
    "internet/[code]",
    "/internet/",
    "code",
    "internet",
    "InternetContent",
    "internet/internet-content",
  ],
  [
    "tin-tuc/[slug]",
    "/tin-tuc/",
    "slug",
    "news-article",
    "NewsArticleContent",
    "news/news-article-content",
  ],
];
for (const [file, prefix, param, kind, Component, module] of families) {
  write(
    file,
    `import type { Metadata } from "next";
import { ${Component} } from "@/features/${module}";
import { metadataForPage, pathFromSegment, requirePage, staticRouteSegments } from "@/lib/page-routing";

type Props = { params: Promise<{ ${param}: string }> };
export const instant = false;

export function generateStaticParams() {
  return staticRouteSegments("${prefix}").map(${param} => ({ ${param} }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metadataForPage(pathFromSegment("${prefix}", (await params).${param}));
}

export default async function Page({ params }: Props) {
  const path = pathFromSegment("${prefix}", (await params).${param});
  const page = requirePage(path, "${kind}");
  return <${Component} page={page} path={path} />;
}
`,
  );
}
write(
  "tin-tuc",
  `import { NewsListContent } from "@/features/news/news-list-content";
import { metadataForPage, requirePage } from "@/lib/page-routing";

export function generateMetadata() { return metadataForPage("/tin-tuc"); }
export default function NewsPage() {
  const page = requirePage("/tin-tuc", "news-list");
  return <NewsListContent page={page} path="/tin-tuc" />;
}
`,
);
for (const [route, feature, Component] of [
  ["internet", "internet", "InternetCollection"],
  ["goi-cuoc-gic", "gic", "GicCollection"],
  ["goi-cuoc-nine", "nine", "NineCollection"],
  ["goi-cuoc-roaming", "roaming", "RoamingCollection"],
]) {
  write(
    route,
    `import ${Component} from "@/features/collections/${feature}/${feature}-collection";
import { CollectionRuntime } from "@/features/collections/collection-runtime";
import { metadataForPage, requirePage } from "@/lib/page-routing";

export function generateMetadata() { return metadataForPage("/${route}"); }
export default function Page() {
  ${feature === "nine" ? "const page = " : ""}requirePage("/${route}", "collection");
  return <>${feature === "nine" ? '<h1 className="sr-only">{page.heading}</h1>' : ""}<${Component} /><CollectionRuntime key="/${route}" /></>;
}
`,
  );
}
