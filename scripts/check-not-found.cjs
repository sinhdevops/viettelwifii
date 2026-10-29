const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const{chromium}=require('@playwright/test');let browser;
(async()=>{
 const out=path.resolve('reports/integration/not-found');fs.mkdirSync(out,{recursive:true});
 browser=await chromium.launch({headless:true});const rows=[];
 for(const width of [390,768,1440]){
  const page=await browser.newPage({viewport:{width,height:1000}});const errors=[],remoteMedia=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('request',r=>{if(r.resourceType()==='image'&&!r.url().startsWith('http://localhost:3000/'))remoteMedia.push(r.url())});
  const response=await page.goto('http://localhost:3000/goi-cuoc-viettel',{waitUntil:'networkidle'});
  assert.equal(response.status(),404);
  const img=page.getByRole('img',{name:'404 — Liên kết không tồn tại'});await img.evaluate(e=>e.decode());
  assert.equal(await img.evaluate(e=>e.naturalWidth),300);
  assert.equal(await page.locator('main h1').innerText(),'Liên kết không tồn tại');
  assert.match((await page.locator('meta[name="robots"]').evaluateAll(es=>es.map(e=>e.content).join(','))),/noindex/);
  assert.equal(await page.locator('footer').count(),1);
  assert.match(await page.locator('footer').innerText(),/0325610016/);
  assert.match(await page.locator('footer').innerText(),/Ông Ích Khiêm, Cẩm Lệ, Đà Nẵng/);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  await page.screenshot({path:path.join(out,`local-${width}.png`),fullPage:true});
  await page.locator('main').getByRole('link',{name:'Trang chủ',exact:true}).click();await page.waitForURL('http://localhost:3000/');
  await page.locator('h1:visible').filter({hasText:'GÓI CƯỚC DATA'}).waitFor();
  assert.deepEqual(errors,[]);assert.deepEqual(remoteMedia,[]);
  rows.push({width,status:response.status(),noindex:true,localImage:true,homeLink:true,errors});await page.close();
 }
 const page=await browser.newPage();for(const route of ['/duong-dan-khong-ton-tai','/internet/not-a-plan','/tin-tuc/not-an-article']){
  const response=await page.goto('http://localhost:3000'+route,{waitUntil:'networkidle'});assert.equal(response.status(),404);assert.equal(await page.locator('main h1').innerText(),'Liên kết không tồn tại');rows.push({route,status:404});
 }await page.close();fs.writeFileSync(path.join(out,'VERIFY.json'),JSON.stringify(rows,null,2));console.log(JSON.stringify(rows));
})().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>browser?.close());
