/**
 * Curated public-text observations for approved package batches.
 * Additive and collision-safe: no speculative routes, no ready statuses, no UI edits.
 * Usage: node --experimental-strip-types scripts/content/build-data01-batch02.mjs [evidence.json]
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { pageSchema } from "../../src/lib/content-schema.ts";

const root = resolve(import.meta.dirname, "../..");
const absolute = (path) => resolve(root, path);
const readJson = (path) => JSON.parse(readFileSync(absolute(path), "utf8"));
const evidencePath = process.argv[2] ?? "data/sources/data-01/batch-02.json";
const evidence = readJson(evidencePath);
const rawFolder = evidence.rawFolder ?? "batch-02";
const allowed = new Set(readJson("data/approved-routes.json").routes);
const pages = existsSync(absolute("data/pages.json"))
  ? readJson("data/pages.json")
  : {};
const records = [];

for (const record of evidence.records) {
  const path = `/goi-cuoc-viettel/${record.code}`;
  const sourceUrl = `https://viettelwifii.vn${path}`;
  const rawPath = `reference-clone/raw/data-01/${rawFolder}/${record.code}.txt`;
  if (!allowed.has(path)) throw new Error(`Not approved: ${path}`);
  if (pages[path])
    throw new Error(`Existing page must be reviewed, not overwritten: ${path}`);
  if (records.some((item) => item.path === path))
    throw new Error(`Duplicate code: ${record.code}`);
  if (!record.excerpts?.length || !record.headings?.length || !record.lead) {
    throw new Error(`Incomplete evidence: ${path}`);
  }
  const verifiedFields = [
    "visible page title and H1",
    "public-text product price and cycle",
    "data allowance display labels",
    "visible SMS registration text and shortcode",
    "bounded section headings",
    ...(record.benefits?.length ? ["visible benefits"] : []),
    ...(record.conditions?.length
      ? ["visible limitations and conditions"]
      : []),
  ];
  const page = {
    status: "draft",
    kind: "package",
    title: record.title,
    description: record.lead,
    heading: `Gói cước Viettel ${record.code}`,
    sections: [
      {
        type: "text",
        heading: record.headings[0],
        paragraphs: [
          `Cước phí: ${new Intl.NumberFormat("vi-VN").format(record.price)}đ`,
          `Thời hạn sử dụng: ${record.cycle.label}`,
          ...record.allowances.map(
            (allowance) => `Dung lượng: ${allowance.sourceLabel}`,
          ),
          `Đăng ký SMS: ${record.code} UP gửi 290`,
        ],
      },
      ...(record.benefits?.length
        ? [
            {
              type: "list",
              heading: record.headings[1] ?? "Ưu đãi đặc biệt",
              items: record.benefits,
            },
          ]
        : []),
      ...(record.conditions?.length
        ? [
            {
              type: "list",
              heading: "Điều kiện và lưu ý",
              items: record.conditions,
            },
          ]
        : []),
    ],
    product: {
      id: path,
      code: record.code,
      subscription: "general",
      price: {
        amountVND: record.price,
        sourceLabel: `${new Intl.NumberFormat("vi-VN").format(record.price)}đ`,
        cycle: record.cycle,
      },
      dataAllowances: record.allowances,
      ...(record.benefits?.length ? { benefits: record.benefits } : {}),
      ...(record.conditions?.length ? { conditions: record.conditions } : {}),
      registration: {
        smsText: `${record.code} UP`,
        shortcode: "290",
        ...(record.cancelSms
          ? {
              note: `Cú pháp hủy nêu trong nội dung nguồn: ${record.cancelSms} gửi 191.`,
            }
          : {}),
        ...(!record.cancelSms && record.code.startsWith("5G")
          ? {
              note: `Nguồn hướng dẫn kiểm tra KTTK gửi 191 và hủy HUY ${record.code} gửi 191.`,
            }
          : {}),
      },
    },
    source: {
      url: sourceUrl,
      capturedAt: evidence.observedAt,
      evidencePaths: [evidencePath, rawPath],
      verifiedFields,
      unverifiedFields: [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation",
      ],
      notes: [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        `Observed H2 sequence: ${record.headings.join(" | ")}`,
        ...(record.notes ?? []),
      ],
    },
  };
  const result = pageSchema.safeParse(page);
  if (!result.success) throw new Error(`${path}: ${result.error.message}`);
  records.push({ path, rawPath, sourceUrl, record, page });
}

for (const { path, rawPath, sourceUrl, record, page } of records) {
  const raw =
    [
      "DATA-01 bounded public source text excerpt (manually selected, not original HTML).",
      `Source: ${sourceUrl}`,
      `Observed: ${evidence.observedAt}`,
      `Method: ${evidence.method}`,
      "Source references: extracted public page lines; HTTP status and redirects unverified.",
      "",
      ...record.excerpts,
      "",
      `Source-supported short fact summary: ${record.lead}`,
    ].join("\n") + "\n";
  mkdirSync(dirname(absolute(rawPath)), { recursive: true });
  writeFileSync(absolute(rawPath), raw, "utf8");
  pages[path] = page;
}
for (const [path, page] of Object.entries(pages)) {
  if (!allowed.has(path))
    throw new Error(`Unexpected unapproved route: ${path}`);
  if (page.status !== "draft") throw new Error(`Not draft: ${path}`);
  if (
    ["package", "internet"].includes(page.kind) &&
    page.product?.id !== path
  ) {
    throw new Error(`Broken full-path product ID: ${path}`);
  }
  const valid = pageSchema.safeParse(page);
  if (!valid.success)
    throw new Error(`Invalid page ${path}: ${valid.error.message}`);
}
writeFileSync(
  absolute("data/pages.json"),
  JSON.stringify(pages, null, 2) + "\n",
);
console.log(
  `DATA-01 ${evidence.batchId}: added ${records.length} draft pages; total ${Object.keys(pages).length}; all Zod-valid and approved.`,
);
