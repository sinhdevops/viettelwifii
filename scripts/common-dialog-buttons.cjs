const fs = require("node:fs");
const ts = require("typescript");
for (const [file, button] of [
  ["src/components/ui/dialog.tsx", "Button"],
  ["src/components/layout/site-header.tsx", "AppButton"],
  ["src/features/collections/collection-signup-dialog.tsx", "AppButton"],
  ["src/features/collections/collection-country-picker.tsx", "AppButton"],
]) {
  let source = fs.readFileSync(file, "utf8");
  const ast = ts.createSourceFile(
      file,
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    ),
    edits = [];
  function visit(node) {
    if (ts.isJsxElement(node)) {
      const tag = node.openingElement.tagName.getText(ast);
      if (
        ["Dialog.Close", "DialogPrimitive.Close"].includes(tag) &&
        !node.openingElement.attributes.properties.some(
          (p) => p.name?.getText(ast) === "asChild",
        )
      ) {
        const attrs = node.openingElement.attributes.getText(ast);
        const children = source.slice(
          node.openingElement.end,
          node.closingElement.pos,
        );
        edits.push({
          start: node.getStart(ast),
          end: node.end,
          text: `<${tag} asChild><${button} variant="unstyled" size="unstyled" ${attrs}>${children}</${button}></${tag}>`,
        });
        return;
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  for (const e of edits.sort((a, b) => b.start - a.start))
    source = source.slice(0, e.start) + e.text + source.slice(e.end);
  if (file.endsWith("ui/dialog.tsx"))
    source = source.replace(
      'import { X } from "lucide-react";',
      'import { X } from "lucide-react";\nimport { Button } from "./button";',
    );
  fs.writeFileSync(file, source);
  console.log(file, edits.length);
}
