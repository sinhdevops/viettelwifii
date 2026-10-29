const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require('@playwright/test');
const phase = process.argv[2] || 'before';
const out = path.resolve('reports/integration/internet-pilot');
fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  for (const width of [390, 768, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    const response = await page.goto('http://localhost:3000/internet', { waitUntil: 'networkidle' });
    await page.evaluate(async () => { await document.fonts.ready; for (const img of document.images) img.loading = 'eager'; });
    await page.waitForTimeout(1200);
    const dom = await page.locator('main').evaluate(el => {
      const clone = el.cloneNode(true);
      clone.querySelectorAll('script').forEach(e => e.remove());
      return clone.outerHTML.replace(/_r_[^"\s<>]+/g, 'REACT_ID').replace(/radix-[^"\s<>]+/g, 'RADIX_ID');
    });
    const file = path.join(out, `${width}.html`);
    if (phase === 'before') fs.writeFileSync(file, dom);
    else assert.equal(dom, fs.readFileSync(file, 'utf8'), `DOM changed at ${width}`);
    await page.screenshot({ path: path.join(out, `${phase}-${width}.png`), fullPage: true, animations: 'disabled', mask: [page.locator('canvas')] });
    results.push({ width, status: response.status(), errors, h1: await page.locator('h1').count() });
    await page.close();
  }
  await browser.close();
  fs.writeFileSync(path.join(out, `${phase}.json`), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results));
})().catch(e => { console.error(e); process.exitCode = 1; });
