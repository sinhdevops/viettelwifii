import { readFile, writeFile } from "node:fs/promises";

const audit = JSON.parse(
  await readFile("reports/seo-performance/audit-2026-11-11.json", "utf8"),
);
const rows = audit.pages;

const csvEscape = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
const lines = ["path,issue,detail,current_value,suggested_action"];

for (const p of rows) {
  const t = p.title ?? "";
  const d = p.description ?? "";
  if (t.length > 60)
    lines.push(
      [
        p.path,
        "title-too-long",
        `${t.length} chars`,
        t,
        "Rút về 50-60 ký tự, giữ từ khoá chính ở đầu",
      ]
        .map(csvEscape)
        .join(","),
    );
  if (t.length < 30)
    lines.push(
      [
        p.path,
        "title-too-short",
        `${t.length} chars`,
        t,
        "Bổ sung lợi ích/giá/thương hiệu để đạt 50-60 ký tự",
      ]
        .map(csvEscape)
        .join(","),
    );
  if (d.length > 160)
    lines.push(
      [
        p.path,
        "description-too-long",
        `${d.length} chars`,
        d,
        "Rút còn 140-160 ký tự",
      ]
        .map(csvEscape)
        .join(","),
    );
  if (d.length < 70)
    lines.push(
      [
        p.path,
        "description-too-short",
        `${d.length} chars`,
        d,
        "Viết lại 140-160 ký tự có CTA và lợi ích",
      ]
        .map(csvEscape)
        .join(","),
    );
  if (d === t && t)
    lines.push(
      [
        p.path,
        "description-equals-title",
        "meta description trùng tiêu đề",
        d,
        "Viết mô tả riêng, khác tiêu đề",
      ]
        .map(csvEscape)
        .join(","),
    );
  if ((p.h1?.length ?? 0) === 1 && p.h1[0] === t)
    lines.push(
      [
        p.path,
        "h1-equals-title",
        "H1 trùng title",
        t,
        "Đổi H1 theo ý định tìm kiếm, giữ title giàu từ khoá",
      ]
        .map(csvEscape)
        .join(","),
    );
  if ((p.words ?? 0) < 300)
    lines.push(
      [
        p.path,
        "thin-content",
        `${p.words} words`,
        "",
        "Bổ sung nội dung thực chất hoặc gộp/không index",
      ]
        .map(csvEscape)
        .join(","),
    );
}

await writeFile(
  "reports/seo-performance/audit-title-meta-fixes-2026-11-11.csv",
  lines.join("\n") + "\n",
  "utf8",
);
console.log("rows:", lines.length - 1);
const byIssue = {};
for (const l of lines.slice(1)) {
  const issue = l.split(",")[1].replace(/"/g, "");
  byIssue[issue] = (byIssue[issue] || 0) + 1;
}
console.log(byIssue);
