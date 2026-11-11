import { z } from "zod";

const pathSchema = z
  .string()
  .min(1)
  .refine(
    (value) =>
      value === "/" ||
      (value.startsWith("/") &&
        !value.endsWith("/") &&
        !value.includes("?") &&
        !value.includes("#")),
  );
const pathEntrySchema = z.union([pathSchema, z.object({ path: pathSchema })]);
export const rawManifestSchema = z.union([
  z.array(pathEntrySchema),
  z.object({ routes: z.array(pathEntrySchema) }),
]);

export function parseApprovedRoutes(raw: unknown): string[] {
  const data = rawManifestSchema.parse(raw);
  const entries = Array.isArray(data) ? data : data.routes;
  const routes = entries.map((entry) =>
    typeof entry === "string" ? entry : entry.path,
  );
  if (new Set(routes).size !== routes.length)
    throw new Error("Duplicate approved URL paths");
  const counts = {
    home: routes.filter((p) => p === "/").length,
    internet: routes.filter((p) => /^\/internet\/[^/]+$/.test(p)).length,
    news: routes.filter((p) => p === "/tin-tuc" || /^\/tin-tuc\/[^/]+$/.test(p))
      .length,
    packages: routes.filter((p) =>
      /^\/goi-cuoc-viettel\/(?:[^/]+\/)?[^/]+$/.test(p),
    ).length,
  };
  const additions = [
    "/internet",
    "/goi-cuoc-gic",
    "/goi-cuoc-nine",
    "/goi-cuoc-roaming",
  ];
  const unchangedOriginal =
    routes.length === 175 &&
    additions.every((path, index) => routes[171 + index] === path);
  if (
    !unchangedOriginal ||
    counts.home !== 1 ||
    counts.internet !== 18 ||
    counts.news !== 36 ||
    counts.packages !== 116
  ) {
    throw new Error(
      `Route scope mismatch; expected original 171 and four appended collections (175 total), got ${JSON.stringify(counts)} and ${routes.length} total`,
    );
  }
  return routes;
}
