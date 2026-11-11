import type { PageContent } from "@/lib/content-schema";

export type NormalisablePage = Pick<
  PageContent,
  "title" | "description" | "heading" | "kind"
> &
  Partial<Pick<PageContent, "intro" | "sections" | "product" | "article">>;

const clean = (text: string) => text.replace(/\s+/g, " ").trim();
const stripBrand = (text: string) =>
  clean(text)
    .replace(/\s*\|\s*ViettelWiFii\.vn$/i, "")
    .trim();

/** Prefer complete authored sentences; a snippet length budget is not a hard rule. */
function meaningfulExcerpt(text: string, max = 160): string {
  const value = clean(text);
  if (value.length <= max) return value;
  const sentences = [...value.matchAll(/[.!?](?=\s|$)/g)]
    .map((match) => value.slice(0, match.index! + 1).trim())
    .filter((part) => part.length <= max);
  // Preserve the whole author-supplied statement if it has no clean boundary.
  return sentences.at(-1) ?? value;
}

/** Keep authored package facts and editorial meaning in titles. */
export function normalizeSeoTitle(page: NormalisablePage): string {
  const title = stripBrand(page.title);
  if (title.length <= 60) {
    // Some captured Internet titles describe equipment but omit the plan code.
    if (
      page.kind === "internet" &&
      page.product &&
      !title.toLowerCase().includes(page.product.code.toLowerCase())
    ) {
      return `${stripBrand(page.heading)} – ${title}`;
    }
    // Brand is useful context on short support-page titles.
    return title.length < 30 ? clean(page.title) : title;
  }
  const clauses = [...title.matchAll(/\s(?:\||[–—-])\s|[.!?](?=\s)|,(?=\s)/g)]
    .map((match) => title.slice(0, match.index).trim())
    .filter((part) => part.length >= 30 && part.length <= 60);
  if (clauses.length) return clauses.at(-1)!;
  const heading = stripBrand(page.heading);
  if (heading.length >= 30 && heading.length <= 75) return heading;
  // Do not reduce a specific 65-char title to a generic 20-char H1.
  return title;
}

function isPlaceholder(description: string, title: string): boolean {
  return (
    !description ||
    description.toLowerCase() === title.toLowerCase() ||
    /^thông tin (?:chi tiết )?gói(?: cước)?(?: Viettel)? [a-z\d-]+$/i.test(
      description,
    ) ||
    /^(thông tin|cập nhật|tra cứu) (gói cước|dịch vụ|sản phẩm)[.!]?$/i.test(
      description,
    ) ||
    /^Cập nhật gói cước Viettel \d{4} mới nhất:/i.test(description)
  );
}

/** Reject copied/stale product fields that do not identify the visible plan. */
function pageIdentifiesProduct(page: NormalisablePage, code: string): boolean {
  const escaped = code.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const token = new RegExp(`(^|[^a-z0-9])${escaped}(?=$|[^a-z0-9])`, "i");
  return token.test(page.title) || token.test(page.heading);
}

/** A factual summary drawn from already-authored visible package fields. */
function productDescription(page: NormalisablePage): string {
  const product = page.product;
  if (!product || !pageIdentifiesProduct(page, product.code)) return "";
  if (page.kind === "internet") {
    let result = `Gói Internet ${product.code} Viettel`;
    if (product.speedLabel) result += ` có tốc độ ${product.speedLabel}`;
    const benefits = product.benefits?.slice(0, 2) ?? [];
    if (benefits.length) {
      result += `${product.speedLabel ? ", " : " "}kèm ${benefits.join(" và ")}`;
    }
    return `${result}.`;
  }
  if (page.kind !== "package") return "";
  let summary = `Gói ${product.subscription === "postpaid" ? "trả sau " : ""}${product.code} Viettel`;
  if (product.price) {
    summary += ` có mức cước ${product.price.sourceLabel}`;
    // Keep full cycle quantity, such as 12 tháng (never silently 1 tháng).
    if (product.price.cycle) summary += ` cho ${product.price.cycle.label}`;
  }
  const parts = [`${summary}.`];
  const allowance = product.dataAllowances?.[0];
  if (allowance) parts.push(`Dung lượng data ${allowance.sourceLabel}.`);
  if (product.conditions?.length) {
    const condition = clean(product.conditions[0]).replace(/[.!?]+$/, "");
    if (condition) parts.push(`${condition}.`);
  }
  return product.price || allowance || product.conditions?.length
    ? parts.join(" ")
    : "";
}

/** Natural copy per page type, without duplicating titles or blind padding. */
export function normalizeSeoDescription(page: NormalisablePage): string {
  const stored = clean(page.description);
  const title = clean(page.title);
  if (!isPlaceholder(stored, title)) return meaningfulExcerpt(stored);

  if (page.kind === "home") {
    return "Tra cứu các gói data 4G, 5G Viettel theo ngày hoặc tháng, gồm data, mạng xã hội và gói combo. Xem thông tin từng gói trước khi đăng ký.";
  }
  if (page.kind === "news-list") {
    return "Tin tức về gói cước, khuyến mãi và hướng dẫn sử dụng mạng Viettel, gồm bài viết về roaming, eSIM và cách bật 5G trên điện thoại.";
  }

  const factual = productDescription(page);
  if (factual) return meaningfulExcerpt(factual);

  if (page.kind === "news-article") {
    const firstParagraph = page.article?.blocks.find(
      (block) => block.type === "paragraph" && clean(block.text).length > 35,
    );
    if (firstParagraph?.type === "paragraph") {
      const excerpt = meaningfulExcerpt(firstParagraph.text);
      if (excerpt.toLowerCase() !== title.toLowerCase()) return excerpt;
    }
    if (title.includes("Roaming, eSIM")) {
      return "So sánh gói cước Roaming, eSIM du lịch và SIM vật lý khi ra nước ngoài; tìm hiểu đặc điểm từng lựa chọn được đề cập trong bài viết.";
    }
  }

  if (page.kind === "collection") {
    if (title.startsWith("Internet Viettel")) {
      return "Tổng hợp thông tin về Internet cáp quang và WiFi Viettel, giúp người đọc tham khảo các gói kết nối trước khi lựa chọn.";
    }
    if (title.startsWith("GIC Viettel")) {
      return "Tìm hiểu gói cước GIC Viettel dành cho học sinh, sinh viên, với nội dung giải đáp GIC là gì và thông tin liên quan.";
    }
    if (title.startsWith("NINE Viettel")) {
      return "Giới thiệu gói cước trả sau NINE Viettel và các quyền lợi được nêu trong nội dung gói.";
    }
    if (title.startsWith("Gói Data Roaming Viettel")) {
      return "Tìm hiểu gói data Roaming Viettel để sử dụng internet khi ra nước ngoài mà không cần đổi SIM.";
    }
  }

  // A bounded extract from visible page text is safer than a fake generic claim.
  const firstText = page.sections
    ?.flatMap((section) => (section.type === "text" ? section.paragraphs : []))
    .find((text) => clean(text).length >= 40);
  if (firstText) {
    const excerpt = meaningfulExcerpt(firstText);
    return /[.!?]$/.test(excerpt) ? excerpt : `${excerpt}.`;
  }

  // Support and collection copy can be short when no verified details exist.
  const intro = clean(page.intro ?? "");
  if (intro && intro.toLowerCase() !== title.toLowerCase())
    return meaningfulExcerpt(intro);
  return stored;
}

/** Strict display-date conversion, never inferred from capture time. */
export function toIsoDate(label: string | undefined): string | null {
  const value = label?.trim();
  if (!value) return null;
  const match = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value);
  const iso = match
    ? `${match[3]}-${match[2].padStart(2, "0")}-${match[1].padStart(2, "0")}`
    : value;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  const parsed = Date.parse(`${iso}T00:00:00Z`);
  return Number.isFinite(parsed) &&
    new Date(parsed).toISOString().slice(0, 10) === iso
    ? iso
    : null;
}
