/** Compare authored TSX with the immutable local pre-refactor snapshot.
 * This checks offline SSR structure/content, not hydration or visual parity.
 * node scripts/verify-tsx-refactor.cjs [packages|news|collections]
 */
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const root = process.cwd();
const snapshot = path.join(root, "reports/integration/tsx-refactor/before");

function makeLoader() {
  const cache = new Map();
  function load(filename) {
    // Historical snapshots may import the former feature location.
    // Resolve those references only in this offline verifier.
    const oldPackages = path.join(root, "src/features/packages");
    if (filename.startsWith(oldPackages + path.sep)) {
      const relative = path.relative(oldPackages, filename);
      const components = new Set([
        "package-content",
        "package-content.module.css",
        "package-page",
        "package-source-dialog-trigger",
        "related-package-card",
      ]);
      filename =
        relative === "source-pages"
          ? path.join(root, "src/content/packages")
          : relative.startsWith("source-pages" + path.sep)
            ? path.join(
                root,
                "src/content/packages",
                relative.slice("source-pages".length + 1),
              )
            : path.join(
                root,
                "src",
                components.has(relative)
                  ? "components/packages"
                  : "constants/packages",
                relative,
              );
    }
    const candidates = [
      filename,
      ...[".tsx", ".ts", ".json", ".js", ".cjs"].map((ext) => filename + ext),
      path.join(filename, "index.tsx"),
      path.join(filename, "index.ts"),
    ];
    const resolved = candidates
      .flatMap((file) => [file, file + ".snapshot"])
      .find((file) => fs.existsSync(file) && fs.statSync(file).isFile());
    if (!resolved) throw new Error(`Cannot resolve local module: ${filename}`);
    if (resolved.endsWith(".json"))
      return JSON.parse(fs.readFileSync(resolved, "utf8"));
    if (cache.has(resolved)) return cache.get(resolved).exports;
    const evaluatedModule = { exports: {} };
    cache.set(resolved, evaluatedModule);
    const localRequire = (name) => {
      if (name === "server-only") return {};
      if (name === "next/navigation")
        return {
          useRouter: () => ({ push() {}, replace() {}, prefetch() {} }),
          usePathname: () => "/",
        };
      if (name.endsWith(".css"))
        return new Proxy(
          {},
          { get: (_, key) => (key === "__esModule" ? false : String(key)) },
        );
      if (name === "next/link")
        return {
          __esModule: true,
          default: ({ children, href, ...props }) =>
            React.createElement("a", { ...props, href }, children),
        };
      if (name === "next/image")
        return {
          __esModule: true,
          default: (props) => {
            const nativeProps = { ...props };
            for (const key of ["unoptimized", "priority", "fill"])
              delete nativeProps[key];
            return React.createElement("img", nativeProps);
          },
        };
      if (name.startsWith("@/"))
        return load(path.join(root, "src", name.slice(2)));
      if (name.startsWith(".")) {
        let target = path.resolve(path.dirname(resolved), name);
        if (
          resolved.startsWith(snapshot + path.sep) &&
          !target.startsWith(snapshot + path.sep)
        ) {
          const originalDirectory = path.join(
            root,
            "src/features",
            path.relative(snapshot, path.dirname(resolved)),
          );
          target = path.resolve(originalDirectory, name);
        }
        return load(target);
      }
      return require(name);
    };
    const compiled = ts.transpileModule(fs.readFileSync(resolved, "utf8"), {
      fileName: resolved.replace(/\.snapshot$/, ""),
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
        resolveJsonModule: true,
      },
    }).outputText;
    new Function("require", "module", "exports", compiled)(
      localRequire,
      evaluatedModule,
      evaluatedModule.exports,
    );
    return evaluatedModule.exports;
  }
  return load;
}

function normalize(markup) {
  const cleaned = markup
    .replace(/<link\b[^>]*rel="preload"[^>]*>/g, "")
    .replace(/<!--[^]*?-->/g, "")
    .replace(/_[Rr]_[A-Za-z0-9]+_/g, "_REACT_ID_");
  const tags = [...cleaned.matchAll(/<\/?[A-Za-z][^>]*>/g)].map(([tag]) => {
    if (tag.startsWith("</")) return tag;
    const name = tag.match(/^<([^\s/>]+)/)[1];
    const attrs = [
      ...tag.slice(name.length + 1).matchAll(/([^\s=/>]+)(?:="([^"]*)")?/g),
    ]
      .map(([, key, value]) => {
        if (key === "class")
          value = value.split(/\s+/).filter(Boolean).sort().join(" ");
        if (key === "style")
          value = value.split(";").filter(Boolean).sort().join(";");
        return [key, value ?? ""];
      })
      .sort(([a], [b]) => a.localeCompare(b));
    return [name, attrs];
  });
  const text = cleaned
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  // Track the element that owns each text segment, so moving copy between
  // otherwise identical siblings cannot pass the flattened-text comparison.
  const textByElement = [];
  const parents = [];
  const voidTags = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ]);
  let elementIndex = 0;
  for (const token of cleaned.split(/(<\/?[A-Za-z][^>]*>)/g)) {
    if (token.startsWith("</")) parents.pop();
    else if (token.startsWith("<")) {
      const tag = token.match(/^<([^\s/>]+)/)[1];
      const index = elementIndex++;
      if (!voidTags.has(tag.toLowerCase()) && !token.endsWith("/>"))
        parents.push(index);
    } else if (token.trim()) {
      textByElement.push([
        parents.at(-1) ?? -1,
        token.replace(/\s+/g, " ").trim(),
      ]);
    }
  }
  return { tags, text, textByElement };
}

function entries(load, base, group) {
  if (group === "packages") {
    const current = base === path.join(root, "src/features");
    const packageBase = path.join(base, group);
    const registry = load(
      current
        ? path.join(root, "src/content/packages")
        : path.join(packageBase, "source-pages"),
    );
    if (registry.sourcePackageRoutes)
      return Object.entries(registry.sourcePackageRoutes);
    const { PackagePage } = load(
      current
        ? path.join(root, "src/components/packages/package-page")
        : path.join(packageBase, "package-page"),
    );
    const { PACKAGE_PAGES } = load(
      current
        ? path.join(root, "src/constants/packages/package-data")
        : path.join(packageBase, "package-data"),
    );
    return Object.entries(registry.packageDetailsByRoute).map(
      ([route, Details]) => [
        route,
        () =>
          React.createElement(
            PackagePage,
            { record: PACKAGE_PAGES[route] },
            React.createElement(Details),
          ),
      ],
    );
  }
  if (group === "news")
    return Object.entries(
      load(path.join(base, group, "source-pages")).sourceNewsRoutes,
    );
  if (group === "home") {
    const { HomeContent } = load(path.join(base, group, "home-content"));
    return [
      [
        "/",
        () =>
          React.createElement(HomeContent, {
            path: "/",
            page: { kind: "home" },
          }),
      ],
    ];
  }
  if (group === "internet") {
    const { InternetContent } = load(
      path.join(base, group, "internet-content"),
    );
    const { INTERNET_SOURCE_PAGES } = load(
      path.join(base, group, "source-pages"),
    );
    return Object.keys(INTERNET_SOURCE_PAGES).map((route) => [
      route,
      () =>
        React.createElement(InternetContent, {
          path: route,
          page: { kind: "internet", product: { id: route } },
        }),
    ]);
  }
  return [
    "/internet",
    "/goi-cuoc-gic",
    "/goi-cuoc-nine",
    "/goi-cuoc-roaming",
  ].map((route, index) => [
    route,
    load(
      path.join(base, group, "source-pages", `SourceCollection${171 + index}`),
    ).default,
  ]);
}

const groups = process.argv[2]
  ? [process.argv[2]]
  : ["packages", "news", "collections", "home", "internet"];
const beforeLoad = makeLoader();
const afterLoad = makeLoader();
const results = [];
for (const group of groups) {
  const before = entries(beforeLoad, snapshot, group);
  const after = new Map(
    entries(afterLoad, path.join(root, "src/features"), group),
  );
  for (const [route, Component] of before) {
    const current = after.get(route);
    if (!current) {
      results.push({
        group,
        route,
        pass: false,
        error: "missing route component",
      });
      continue;
    }
    try {
      const a = normalize(renderToStaticMarkup(React.createElement(Component)));
      const b = normalize(renderToStaticMarkup(React.createElement(current)));
      const sameText = a.text === b.text;
      const sameTextOwners =
        JSON.stringify(a.textByElement) === JSON.stringify(b.textByElement);
      const sameStructure = JSON.stringify(a.tags) === JSON.stringify(b.tags);
      const hash = (value) =>
        crypto.createHash("sha256").update(JSON.stringify(value)).digest("hex");
      results.push({
        group,
        route,
        pass: sameText && sameStructure && sameTextOwners,
        sameText,
        sameTextOwners,
        sameStructure,
        beforeHash: hash(a),
        afterHash: hash(b),
        ...(!sameText ? { beforeText: a.text, afterText: b.text } : {}),
        ...(!sameTextOwners
          ? {
              firstTextOwnerDifference: a.textByElement.findIndex(
                (item, index) =>
                  JSON.stringify(item) !==
                  JSON.stringify(b.textByElement[index]),
              ),
            }
          : {}),
        ...(!sameStructure
          ? {
              firstTagDifference: a.tags.findIndex(
                (tag, i) => JSON.stringify(tag) !== JSON.stringify(b.tags[i]),
              ),
              beforeTagCount: a.tags.length,
              afterTagCount: b.tags.length,
            }
          : {}),
      });
    } catch (error) {
      results.push({ group, route, pass: false, error: error.stack });
    }
  }
  for (const route of after.keys())
    if (!before.some(([old]) => old === route))
      results.push({
        group,
        route,
        pass: false,
        error: "unexpected route component",
      });
}
const report = {
  scope:
    "Offline SSR structure and text; Next Link/Image represented as native elements; React useId normalized; no browser/hydration claim",
  checked: results.length,
  passed: results.filter((row) => row.pass).length,
  results,
};
const output = path.join(
  root,
  "reports/integration/tsx-refactor",
  `ssr-parity-${groups.join("-")}.json`,
);
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(report, null, 2));
console.log(
  JSON.stringify(
    {
      checked: report.checked,
      passed: report.passed,
      failed: results
        .filter((row) => !row.pass)
        .map(
          ({
            group,
            route,
            error,
            sameText,
            sameStructure,
            firstTagDifference,
          }) => ({
            group,
            route,
            error,
            sameText,
            sameStructure,
            firstTagDifference,
          }),
        ),
      report: path.relative(root, output),
    },
    null,
    2,
  ),
);
if (report.checked !== report.passed) process.exitCode = 1;
