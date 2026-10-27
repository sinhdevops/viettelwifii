import "server-only";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { z } from "zod";
import { pageSchema, type PageContent } from "@/lib/content-schema";
import { parseApprovedRoutes } from "@/lib/scope";
import sourcePages from "@/generated/viettelup-source-pages.json";

const dataPath = (...parts: string[]) => join(process.cwd(), "data", ...parts);

export function getApprovedRoutes(): string[] {
  const filename = dataPath("approved-routes.json");
  if (!existsSync(filename)) {
    // Development permits an empty scaffold but never silently invents routes.
    if (process.env.NODE_ENV !== "production") return [];
    throw new Error("Missing data/approved-routes.json. Expected the user-approved 175-path manifest.");
  }
  return parseApprovedRoutes(JSON.parse(readFileSync(filename, "utf8")));
}

function allPages(): Record<string, PageContent> {
  const filename = dataPath("pages.json");
  if (!existsSync(filename)) return {};
  const parsed = z.record(z.string(), pageSchema).parse(JSON.parse(readFileSync(filename, "utf8")));
  const approved = new Set(getApprovedRoutes());
  for (const [path, page] of Object.entries(parsed)) {
    if (!approved.has(path)) throw new Error(`Content path is not approved: ${path}`);
    if (page.product && page.product.id !== path && (page.kind === "package" || page.kind === "internet")) {
      throw new Error(`Product identity must equal its page path: ${path}`);
    }
  }
  return parsed;
}

export function getPage(path: string): PageContent | null {
  if (!getApprovedRoutes().includes(path)) return null;
  const page = allPages()[path];
  return page?.status === "ready" ? page : null;
}

/** Drafts may be previewed on local dev only. Never use for sitemap or production leads. */
export function getRenderablePage(path: string): PageContent | null {
  if (!getApprovedRoutes().includes(path)) return null;
  const page = allPages()[path];
  if (page?.status === "ready") return page;
  if (process.env.NODE_ENV === "production" || process.env.SITE_PREVIEW_DRAFTS !== "1") return null;
  if (page) return page;

  // All approved pages were captured as real source HTML. Preview the exact
  // source title/H1 and stable product identity until a specialist completes
  // its TSX migration and independent QA. No price, data allowance, body copy
  // or readiness is synthesized here.
  const source = (sourcePages as Record<string, {
    kind: PageContent["kind"];
    title: string;
    description: string;
    heading: string;
    sourceUrl: string;
    capturedAt: string;
    rawHtmlPath: string;
    rawSha256: string;
    product?: PageContent["product"];
  }>)[path];
  if (!source) return null;
  return {
    status: "draft", kind: source.kind, title: source.title,
    description: source.description, heading: source.heading,
    sections: [], ...(source.product ? { product: source.product } : {}),
    source: {
      url: source.sourceUrl, capturedAt: source.capturedAt,
      evidencePaths: [source.rawHtmlPath],
      verifiedFields: ["title", "description", "heading", "path"],
      unverifiedFields: ["tsx-content", "interaction-parity", "visual-parity"],
      notes: [`Original HTML SHA256: ${source.rawSha256}`],
    },
  };
}

export function getIndexablePages(): { path: string; page: PageContent }[] {
  const pages = allPages();
  return getApprovedRoutes().flatMap((path) => {
    const page = pages[path];
    return page?.status === "ready" ? [{ path, page }] : [];
  });
}
