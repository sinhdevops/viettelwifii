const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const { chromium } = require('@playwright/test');
const phase = process.argv[2] || 'before';
const out = path.resolve('reports/integration/explicit-routes');
const routes = require('../data/approved-routes.json').routes;
fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch({headless:true});
  const context = await browser.newContext({javaScriptEnabled:false});
  await context.route('**/*', route => route.abort());
  const snapshots = {};
  let cursor = 0;
  await Promise.all(Array.from({length:4}, async () => {
    const page = await context.newPage();
    while(cursor < routes.length) {
      const url = routes[cursor++];
      const response = await fetch('http://localhost:3000'+url);
      const html = await response.text();
      await page.setContent(html,{waitUntil:'domcontentloaded'});
      const data = await page.evaluate(() => {
        const main = document.querySelector('main')?.cloneNode(true);
        main?.querySelectorAll('script,link[rel="preload"]').forEach(e=>e.remove());
        const normalize = s => s?.replace(/_R_[^"\s<>]+|_r_[^"\s<>]+|radix-[^"\s<>]+/g,'REACT_ID');
        return {main:normalize(main?.outerHTML), title:document.title, description:document.querySelector('meta[name="description"]')?.content, canonical:document.querySelector('link[rel="canonical"]')?.getAttribute('href'), robots:document.querySelector('meta[name="robots"]')?.content};
      });
      assert.equal(response.status,200,url);
      assert.ok(data.main,url+' missing main');
      snapshots[url] = {...data,status:response.status};
    }
    await page.close();
  }));
  const file = path.join(out,'before.json');
  if(phase==='before') {
    fs.writeFileSync(file,JSON.stringify(snapshots));
    fs.copyFileSync('src/lib/site-data.ts',path.join(out,'site-data.before.ts.snapshot'));
  } else {
    const before=JSON.parse(fs.readFileSync(file,'utf8'));
    const failures=routes.filter(url=>JSON.stringify(snapshots[url])!==JSON.stringify(before[url]));
    fs.writeFileSync(path.join(out,'after.json'),JSON.stringify(snapshots));
    fs.writeFileSync(path.join(out,'dom-result.json'),JSON.stringify({checked:routes.length,failures},null,2));
    assert.deepEqual(failures,[],'SSR or metadata changed');
  }
  await browser.close();
  console.log(`${phase}: ${routes.length} HTTP/SSR/metadata snapshots PASS`);
})().catch(e=>{console.error(e);process.exitCode=1});
