/** Validate local draft source data without running Next.js or modifying files. */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pageSchema } from "../../src/lib/content-schema.ts";

const root = resolve(import.meta.dirname, "../..");
const json = (file) => JSON.parse(readFileSync(resolve(root, file), "utf8"));
const allowed = new Set(json("data/approved-routes.json").routes);
const pages = json("data/pages.json");
const errors = [];
const counts = {};
const sources = {};
for (const [path, page] of Object.entries(pages)) {
  if (!allowed.has(path)) errors.push(`Unapproved: ${path}`);
  const parsed = pageSchema.safeParse(page);
  if (!parsed.success)
    errors.push(
      `Schema: ${path}: ${parsed.error.issues.map((i) => i.path.join(".")).join(", ")}`,
    );
  if (page.status !== "draft") errors.push(`Not draft: ${path}`);
  if (
    !page.source?.url ||
    !page.source.capturedAt ||
    !page.source.evidencePaths?.length
  )
    errors.push(`Missing provenance: ${path}`);
  for (const evidence of page.source?.evidencePaths ?? []) {
    if (!existsSync(resolve(root, evidence)))
      errors.push(`Missing evidence: ${path} -> ${evidence}`);
  }
  if (["internet", "package"].includes(page.kind) && page.product?.id !== path)
    errors.push(`Product ID mismatch: ${path}`);
  for (const section of page.sections ?? []) {
    if (section.type !== "cards") continue;
    for (const card of section.cards) {
      if (card.href?.startsWith("/") && !allowed.has(card.href))
        errors.push(`Unapproved card href: ${path} -> ${card.href}`);
      if (card.productId && !allowed.has(card.productId))
        errors.push(`Unapproved card product ID: ${path} -> ${card.productId}`);
    }
  }
  counts[page.kind] = (counts[page.kind] ?? 0) + 1;
  const batch = page.source.evidencePaths.some((item) =>
    item.includes("batch-03"),
  )
    ? "batch-03"
    : page.source.evidencePaths.some((item) => item.includes("batch-02"))
      ? "batch-02"
      : "ref-01";
  sources[batch] = (sources[batch] ?? 0) + 1;
}
console.log(
  JSON.stringify(
    {
      approved: allowed.size,
      draftPages: Object.keys(pages).length,
      remaining: allowed.size - Object.keys(pages).length,
      kindCounts: counts,
      batchCounts: sources,
      errors,
    },
    null,
    2,
  ),
);
if (errors.length) process.exitCode = 1;
