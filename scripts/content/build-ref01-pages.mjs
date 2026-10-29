/**
 * REF-01 -> DATA-01 first draft batch. This script reads only audited evidence.
 * Idempotently merges approved, evidence-backed paths into data/pages.json.
 * Existing records outside this batch are preserved; it never sets ready.
 *
 * Usage: node scripts/content/build-ref01-pages.mjs
 */
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");
const readJson = (relative) =>
  JSON.parse(readFileSync(resolve(root, relative), "utf8"));
const routes = new Set(readJson("data/approved-routes.json").routes);
const evidence = readJson("data/sources/ref-01/archetypes.json");
const outputPath = resolve(root, "data/pages.json");
const existing = existsSync(outputPath) ? readJson("data/pages.json") : {};

const fromSource = (r, verifiedFields, otherUnverified = []) => ({
  url: r.sourceUrl,
  capturedAt: evidence.observedAt,
  evidencePaths: ["data/sources/ref-01/archetypes.json", r.rawCapture],
  verifiedFields,
  unverifiedFields: [
    ...new Set([
      "HTTP status / redirect chain",
      "final rendered DOM / live CTA handling",
      "meta description",
      ...(r.unverified ?? []),
      ...otherUnverified,
    ]),
  ],
  notes: [
    "Source was a bounded public text extraction; not original HTML and not a complete DOM capture.",
    ...(r.sourceAnomaly ? [r.sourceAnomaly] : []),
  ],
});
const paragraph = (heading, paragraphs) => ({
  type: "text",
  heading,
  paragraphs,
});
const list = (heading, items) => ({ type: "list", heading, items });
const cards = (heading, items) => ({
  type: "cards",
  heading,
  cards: items.map(
    (
      { path, productPath, code, title, priceText, dataLabel, displayDate },
      index,
    ) => ({
      id: path ?? productPath ?? `card-${index}`,
      ...(productPath ? { productId: productPath } : {}),
      title: code ?? title,
      ...(dataLabel || displayDate
        ? { subtitle: dataLabel ?? displayDate }
        : {}),
      ...(priceText ? { price: priceText } : {}),
      href: path ?? productPath,
    }),
  ),
});
const pageBase = (r, verifiedFields, otherUnverified = []) => ({
  status: "draft",
  kind: r.kind,
  title: r.pageTitle,
  description: r.pageTitle, // Observed title repeated until actual source meta description is extracted.
  heading: r.h1,
  sections: [],
  source: fromSource(r, verifiedFields, otherUnverified),
});
const formatAmount = (value) =>
  new Intl.NumberFormat("vi-VN").format(value) + "đ";
const cycle = (p) => ({
  quantity: p.amount,
  unit: p.unit,
  label: p.sourceLabel,
});
const packageProduct = (r) => {
  const p = {
    id: r.path,
    code: r.path.split("/").at(-1),
    subscription: r.subscriptionType === "postpaid" ? "postpaid" : "general",
  };
  if (r.price)
    p.price = {
      amountVND: r.price.value,
      sourceLabel: r.price.sourceLabel,
      ...(r.price.cycle ? { cycle: cycle(r.price.cycle) } : {}),
    };
  if (r.dataAllowance)
    p.dataAllowances = r.dataAllowance.map((d) => ({
      value: d.value,
      unit: d.unit,
      period: d.period,
      sourceLabel: d.sourceLabel,
    }));
  if (r.benefits?.length) p.benefits = [...r.benefits];
  if (r.conditions?.length || r.eligibilitySourceText) {
    p.conditions = [
      ...(r.conditions ?? []),
      ...(r.eligibilitySourceText ? [r.eligibilitySourceText] : []),
    ];
  }
  if (r.sms?.registration)
    p.registration = {
      smsText: r.sms.registration,
      shortcode: r.sms.registrationShortcode,
      ...(r.sms.cancellation
        ? {
            note: `Hủy: ${r.sms.cancellation} gửi ${r.sms.cancellationShortcode}`,
          }
        : {}),
    };
  return p;
};
const internetProduct = (r) => ({
  id: r.path,
  code: r.path.split("/").at(-1),
  subscription: "unspecified",
  ...(r.speed
    ? {
        speedLabel: `${r.speed.value} ${r.speed.unit}${r.speed.symmetric ? " đối xứng" : ""}`,
      }
    : {}),
  ...(r.regionalPrices
    ? {
        regionalPrices: r.regionalPrices.map((p) => ({
          regionLabel: p.regionSourceText,
          amountVND: p.amountVND,
          periodLabel: p.cycle === "month" ? "tháng" : p.cycle,
        })),
      }
    : {}),
  ...(r.included?.length || r.extraFees?.length || r.promotion
    ? {
        benefits: [
          ...(r.included ?? []),
          ...(r.extraFees ?? []),
          ...(r.promotion ? [r.promotion] : []),
        ],
      }
    : {}),
  ...(r.availabilitySourceText || r.speed?.conditionalSpeedClaim
    ? {
        conditions: [
          ...(r.availabilitySourceText ? [r.availabilitySourceText] : []),
          ...(r.speed?.conditionalSpeedClaim
            ? [r.speed.conditionalSpeedClaim]
            : []),
        ],
      }
    : {}),
});

const buildPage = (r) => {
  if (r.kind === "home") {
    const p = pageBase(r, [
      "H1",
      "page title",
      "section headings",
      "sample product card labels",
    ]);
    p.sections = [
      list("Gói cước tháng", r.sectionOrderObserved.slice(1, 4)),
      list("Gói cước ngày", r.sectionOrderObserved.slice(5, 9)),
      cards("GÓI CƯỚC DATA 4G 5G VIETTEL", r.examples),
      paragraph("Tin tức", []),
    ];
    p.source.unverifiedFields.push(
      "full card listing and ordering",
      "source image URLs",
    );
    return p;
  }
  if (r.kind === "package") {
    const p = pageBase(r, [
      "page title",
      "H1",
      "price and cycle",
      "data allowance",
      "H2 headings",
      "visible CTA text",
    ]);
    p.product = packageProduct(r);
    const facts = [
      ...(r.price
        ? [
            `Cước phí: ${r.price.sourceLabel}`,
            `Thời hạn sử dụng: ${r.price.cycle?.sourceLabel ?? "chưa rõ"}`,
          ]
        : []),
      ...(r.dataAllowance ?? []).map(
        (d) => `Dung lượng data: ${d.sourceLabel}`,
      ),
      ...(r.sms?.registration
        ? [
            `Cú pháp đăng ký: ${r.sms.registration} gửi ${r.sms.registrationShortcode}`,
          ]
        : []),
    ].filter((s) => !s.endsWith("chưa rõ"));
    p.sections = [
      paragraph(r.headings[0], facts),
      ...(r.benefits?.length ? [list("Ưu đãi", r.benefits)] : []),
      ...(r.conditions?.length || r.eligibilitySourceText
        ? [
            list("Điều kiện và lưu ý", [
              ...(r.conditions ?? []),
              ...(r.eligibilitySourceText ? [r.eligibilitySourceText] : []),
            ]),
          ]
        : []),
      ...(r.sms?.cancellation
        ? [
            paragraph("Cách đăng ký gói " + p.product.code, [
              `Hủy gói: ${r.sms.cancellation} gửi ${r.sms.cancellationShortcode}`,
            ]),
          ]
        : []),
    ];
    // Source heading order is preserved separately because the bounded excerpts
    // don't support filling the original sections with full article prose.
    p.source.notes.push("Observed H2 sequence: " + r.headings.join(" | "));
    p.source.unverifiedFields.push(
      "complete original prose",
      "related-package cards",
      "media src",
    );
    return p;
  }
  if (r.kind === "internet") {
    const p = pageBase(r, [
      "page title",
      "H1",
      "speed",
      "region-specific price labels",
      "equipment/benefits",
      "H2 headings",
    ]);
    p.product = internetProduct(r);
    p.sections = [
      paragraph(r.headings[0], [
        ...(r.speed ? [`Tốc độ: ${p.product.speedLabel}`] : []),
        ...(r.included ?? []),
      ]),
      ...(r.regionalPrices?.length
        ? [
            {
              type: "table",
              heading: "Chi phí & điều kiện đăng ký",
              table: {
                headings: ["Khu vực", "Cước phí"],
                rows: r.regionalPrices.map((price) => [
                  price.regionSourceText,
                  `${formatAmount(price.amountVND)}/${price.cycle === "month" ? "tháng" : price.cycle}`,
                ]),
              },
            },
          ]
        : []),
      ...(r.extraFees?.length
        ? [list("Chi phí & khuyến mại", r.extraFees)]
        : []),
      ...(r.installation
        ? [
            paragraph("Phí hòa mạng", [
              `Phí hòa mạng: ${formatAmount(r.installation.connectionFeeVND)}`,
              ...(r.installation.vatIncluded ? ["Giá đã bao gồm VAT"] : []),
            ]),
          ]
        : []),
      ...(r.promotion ? [paragraph("Ưu đãi", [r.promotion])] : []),
      ...(r.availabilitySourceText
        ? [paragraph("Khu vực áp dụng", [r.availabilitySourceText])]
        : []),
    ];
    p.source.notes.push("Observed H2 sequence: " + r.headings.join(" | "));
    p.source.unverifiedFields.push(
      "full comparison table values",
      "full FAQ answers",
      "source image URLs",
    );
    return p;
  }
  if (r.kind === "news-list") {
    const p = pageBase(r, [
      "page title",
      "H1",
      "visible news card titles",
      "displayed dates",
      "approved article link paths",
    ]);
    p.sections = [
      cards("Tin tức", [
        {
          path: r.featured.articlePath,
          title: r.featured.title,
          displayDate: r.featured.displayDate,
        },
        ...r.visibleItems,
      ]),
      paragraph("Gói Cước Hot", []),
    ];
    p.source.unverifiedFields.push(
      "complete listing",
      "pagination/load-more results",
      "hero/cover image URLs",
    );
    return p;
  }
  if (r.kind === "news-article") {
    const p = pageBase(r, [
      "page title",
      "H1",
      "visible publication date",
      "H2 sequence",
      "related section headings",
    ]);
    p.article = {
      publishedLabel: r.publishedDate.display,
      blocks: r.articleHeadings.map((heading) => ({
        type: "heading",
        level: 2,
        text: heading,
      })),
    };
    p.sections = r.relatedSections.map((heading) => paragraph(heading, []));
    p.source.unverifiedFields.push(
      "full article paragraphs and lists",
      "inline media src",
      "complete related article links",
    );
    p.source.notes.push(
      "Article blocks retain only observed heading structure; full body is incomplete.",
    );
    return p;
  }
  throw new Error(`Unrecognized kind ${r.kind}`);
};

for (const record of evidence.records) {
  if (!routes.has(record.path))
    throw new Error(`Unapproved evidence route: ${record.path}`);
  if (
    !record.sourceUrl ||
    !record.rawCapture ||
    !existsSync(resolve(root, record.rawCapture))
  ) {
    throw new Error(`Missing source evidence: ${record.path}`);
  }
  if (existing[record.path]?.status === "ready") {
    throw new Error(`Refusing to overwrite ready record: ${record.path}`);
  }
  if (
    existing[record.path] &&
    !existing[record.path].source?.evidencePaths?.includes(record.rawCapture)
  ) {
    throw new Error(
      `Unexpected preexisting record; review before overwriting: ${record.path}`,
    );
  }
  existing[record.path] = buildPage(record);
}
for (const [path, page] of Object.entries(existing)) {
  if (!routes.has(path))
    throw new Error(`Unapproved path in pages.json: ${path}`);
  if (
    ["package", "internet"].includes(page.kind) &&
    page.product?.id !== path
  ) {
    throw new Error(`Incorrect product full-path identity: ${path}`);
  }
}
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, JSON.stringify(existing, null, 2) + "\n", "utf8");
console.log(
  `DATA-01: ${evidence.records.length} REF-01 records merged; ${Object.keys(existing).length} records total; all 9 remain draft.`,
);
