const fs = require("node:fs"),
  path = require("node:path"),
  ts = require("typescript");
let count = 0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(file);
      continue;
    }
    if (!/\.tsx?$/.test(file)) continue;
    let source = fs.readFileSync(file, "utf8");
    if (!/1800[ .-]?8168/.test(source)) continue;
    const ast = ts.createSourceFile(
        file,
        source,
        ts.ScriptTarget.Latest,
        true,
        file.endsWith("tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
      ),
      edits = [];
    function visit(node) {
      if (ts.isStringLiteral(node) && /1800[ .-]?8168/.test(node.text)) {
        const parts = node.text.split(/1800[ .-]?8168(?:\s*\([Mm]iễn phí\))?/g);
        let text = parts
          .map((x) => JSON.stringify(x))
          .join(" + siteConfig.phoneNumber + ");
        if (ts.isJsxAttribute(node.parent)) text = `{${text}}`;
        edits.push({ start: node.getStart(ast), end: node.end, text });
        return;
      }
      if (ts.isJsxText(node) && /1800[ .-]?8168/.test(node.getText(ast))) {
        edits.push({
          start: node.pos,
          end: node.end,
          text: source
            .slice(node.pos, node.end)
            .replace(
              /1800[ .-]?8168(?:\s*\([Mm]iễn phí\))?/g,
              "{siteConfig.phoneNumber}",
            ),
        });
        return;
      }
      ts.forEachChild(node, visit);
    }
    visit(ast);
    if (edits.length) {
      for (const e of edits.sort((a, b) => b.start - a.start))
        source = source.slice(0, e.start) + e.text + source.slice(e.end);
      if (!/import \{ siteConfig \}/.test(source))
        source = 'import { siteConfig } from "@/lib/site-config";\n' + source;
      fs.writeFileSync(file, source);
      count++;
    }
  }
}
walk("src");
console.log(`Updated ${count} runtime files`);
