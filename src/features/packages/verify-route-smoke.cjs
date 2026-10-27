/** Read-only HTTP smoke test for all 116 approved package routes. */
const fs = require("node:fs");
const path = require("node:path");
const routes = require("../../../data/approved-routes.json").routes.slice(2, 118);
const base = process.env.VIETTELUP_PREVIEW_URL || "http://localhost:4191";
const results = new Array(routes.length);
let cursor = 0;

async function worker() {
  while (cursor < routes.length) {
    const index = cursor++;
    const route = routes[index];
    try {
      const response = await fetch(new URL(route, base), { signal: AbortSignal.timeout(30000) });
      const html = await response.text();
      const match = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
      const h1 = match?.[1].replace(/<[^>]+>/g, "").replace(/<!--.*?-->/g, "").trim() || "";
      const code = route.split("/").at(-1);
      const passed = response.status === 200 && h1.toUpperCase().includes(code.toUpperCase());
      results[index] = { route, status: response.status, h1, passed };
    } catch (error) {
      results[index] = { route, passed: false, error: String(error) };
    }
  }
}

Promise.all(Array.from({ length: 4 }, worker)).then(() => {
  const failed = results.filter(result => !result.passed);
  const reportPath = path.resolve(__dirname, "../../../reports/agent-handoffs/vt_packages/ROUTE-SMOKE-RESULTS.json");
  const report = { base, createdAt: new Date().toISOString(), checked: routes.length,
    passed: routes.length - failed.length, failed: failed.length,
    postpaidRoutes: routes.filter(route => route.includes("/tra-sau/")).length, results };
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify({ base, checked: routes.length, passed: routes.length - failed.length,
    failed: failed.length, postpaidRoutes: routes.filter(route => route.includes("/tra-sau/")).length,
    failures: failed.slice(0, 20), reportPath }, null, 2));
  if (failed.length) process.exitCode = 1;
}).catch(error => { console.error(error); process.exitCode = 1; });
