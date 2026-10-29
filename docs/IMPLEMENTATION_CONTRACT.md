# ViettelUp — Implementation Contract v1 (2026-10-27)

## Current scope addendum — 175 routes / source-first migration

The user added `/internet`, `/goi-cuoc-gic`, `/goi-cuoc-nine`, and `/goi-cuoc-roaming` to the original 171 paths. The exact allowlist now has 175 entries; the appendix remains the original 171. `PageContent.kind` additionally permits `collection`. Lead owns `src/features/collections/**` except the temporary explicit worker assignments recorded in Boardroom. `CollectionContent` dispatches those four source-captured pages. Their DOM/classes/assets come from captures 0171–0174; original CSS is localized. Captured public Flight data may be parsed at generation time into inspectable JSX for content omitted from closed server-rendered widgets; it must never be executed or become an arbitrary runtime HTML renderer. All four remain draft previews until independent visual and interaction QA passes. The source-first user instruction supersedes conflicting migration advice in the historical first-batch contract below.

Owner: `vt_lead`. State: **active for first representative batch**. Source: `data/sources/ref-01/archetypes.json`, `reports/source-audit/REF-01.md`, six three-viewport baselines in `reference-clone/baseline/v1/`, and `docs/MASTER_PROMPT_VIETTELUP.md`. This contract defines interfaces, not verification or publication of any page.

## Path, identity and editorial state

- `data/approved-routes.json` is the exact, case-sensitive allowlist of 171 paths. Preserve path casing and nested `/goi-cuoc-viettel/tra-sau/*` paths. Never derive the allowlist from source-site navigation or dynamically create additional product routes.
- A `PageContent` record is keyed by the **full local path** in `data/pages.json`. `kind` is one of `home | package | internet | news-list | news-article`; `status` is `draft | ready`; `title`, `description`, `heading`, `sections` remain mandatory. Product `id` MUST equal the full local path. `code` is a display label and is NOT the identity: `/goi-cuoc-viettel/MXH120` and `/goi-cuoc-viettel/tra-sau/MXH120` are distinct.
- Use the expanded types in `src/lib/content-schema.ts`: `PageContent`, `ProductContent`, `ArticleContent`, `SectionContent`, `PageSource`. `product.subscription` is `general | postpaid | unspecified`, never inferred merely from a matching code. Store price as `amountVND` plus source display label and billing cycle (`quantity`, `unit`, `label`), data allowance as value/unit/period/source label; Internet tariff rows need their original `regionLabel`, `amountVND`, `periodLabel`. Unknown source fields must remain absent; never fill absent tariff, cycle, speed or allowances by inference.
- `source.url`, `source.capturedAt`, `source.evidencePaths`, `source.verifiedFields`, `source.unverifiedFields` distinguish observed from assumed facts. Record source contradictions explicitly in `source.notes`. `ready` requires actual source content and QA; `draft` is normal while incomplete. Only `vt_source_data` writes `data/pages.json` and `data/content/**`.
- Article body uses typed blocks (`paragraph`, `heading`, `list`, `quote`, `image`, `table`), rendered as semantic TSX. No HTML-tree JSON or arbitrary `dangerouslySetInnerHTML`. Preserve byline, source date and real internal article links when observed. Other sections use the schema's `text/cards/faq/list/table/media` variants.

## React contracts and ownership

- Lead keeps `src/components/site/page-renderer.tsx`, shared schema, loader, routes and app root. It dispatches on `page.kind`. Each feature exports one Server Component accepting `{ page: PageContent; path: string }`: `HomeContent` in `src/features/home/home-content.tsx`, `PackageContent` in `src/features/packages/package-content.tsx`, `InternetContent` in `src/features/internet/internet-content.tsx`, `NewsListContent` in `src/features/news/news-list-content.tsx`, `NewsArticleContent` in `src/features/news/news-article-content.tsx`.
- `vt_shared_home` owns `src/components/layout/**` (export `SiteHeader`, `SiteFooter` from named files), `src/components/shared/**`, `src/features/home/**`, `src/app/globals.css`, and shared UI primitives. Lead wires header/footer into root layout after exports exist. Header menu must only link to approved, intentional paths or verified external destinations. Communicate stable optional shared props before use by other workers.
- `vt_packages`, `vt_internet`, `vt_news` own only their `src/features/<group>/**`. They must not write schema, `data/pages.json`, routes, or files owned by other active agents. Use actual source/asset evidence; show missing facts honestly; do not render placeholder claims. Lead controls the dispatch integration and can start local dev server. Workers should read relevant local `node_modules/next/dist/docs/` guides before Next code.
- Presentational media refers to local `/assets/viettelup/...` entries in `data/asset-registry.json`. `vt_assets_reference` owns download, registry and reference screenshots. Asset rows should include `sourceUrl`, `localPath`, `sourcePage`, `dimensions`, `verifiedAt`, `verificationStatus`, and usage/rights notes if available. Do not hotlink or include source website scripts.

## CTA and server identity

- Every signup CTA carries `pagePath` (full approved route) and `itemId` (full product path) to the existing `LeadDialog`. For a detail page, use `page.product.id`; for listing cards, use `card.productId` (approved path), never an arbitrary label or duplicate code. Card links have real routes and route-specific identity.
- The POST `/api/leads` server must re-resolve `pagePath` and `itemId` against trusted ready data: accept the page's own `product.id` or a product referenced by a card with `productId`; don't trust form-supplied product name/price. `vt_forms_integrations` owns the API, modal, client validation and telemetry. Optional UI props should preserve the current modal API or be communicated to Lead before integrating.
- Test lead flows with mocks/sandbox only; no real Telegram message or PII logging. Display success only on positive confirmed response; absent secrets produce a visible unavailable/error state. Keep Turnstile, duplicate-submit protection, focus/keyboard behavior, attribution allowlist and origin checks.

## SEO and draft preview

- Root metadata uses configured `NEXT_PUBLIC_SITE_URL`; never canonicalize to source. `SITE_LIVE` remains unset/false. `robots` disallows indexing unless explicitly enabled. Sitemap includes only ready, approved paths and must also respect `SITE_LIVE`.
- `getPage(path)` remains **ready-only**. `getRenderablePage(path)` may expose a `draft` ONLY when `NODE_ENV !== 'production'` and `SITE_PREVIEW_DRAFTS=1`, with route-level `noindex,nofollow`. Production and absent preview flag preserve 404 for drafts. `getIndexablePages()` remains ready-only. Any draft preview is an implementation aid, not a route acceptance signal.
- Metadata title/description and optional JSON-LD must match observed content. Only use verified structured fields and never publish preview pages via sitemap.

## Review milestones

1. Agent delivers feature export plus local self-check and handoff evidence in `reports/agent-handoffs/<agent>/<task>.md`.
2. Lead reviews, integrates routing/layout and source data, runs TypeScript/lint/targeted tests, and starts preview locally.
3. QA checks representative variants against 390×844, 768×1024, 1440×900 source baseline, keyboard/CTA links, 404, and route identity; reports actual divergences.
4. Only checked pages with verified facts, visual and interaction evidence move to `ready`. `reports/clone-checklist.csv` and `reports/qa/ROUTE-MATRIX.csv` independently track remaining route work. Production build belongs to final milestone.

Observed first-batch exceptions: `/internet/NETVT01` source prose mentions `NETVT1` once; `/internet/GIGA1` title mentions `GIGA1_H`; package code `MXH120` exists in two subscription paths. Preserve and report discrepancies; do not silently normalize facts.
