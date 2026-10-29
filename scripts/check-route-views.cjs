const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require('@playwright/test');
const phase=process.argv[2]||'before';
const out=path.resolve('reports/integration/explicit-routes/views');
const routes=['/','/internet','/internet/NETVT01','/goi-cuoc-viettel/5G20','/goi-cuoc-viettel/tra-sau/MXH120','/tin-tuc','/tin-tuc/so-sanh-roaming','/goi-cuoc-gic','/goi-cuoc-nine','/goi-cuoc-roaming'];
fs.mkdirSync(out,{recursive:true});
(async()=>{
 const browser=await chromium.launch({headless:true});const rows=[];
 for(const width of [390,768,1440]){
  for(let i=0;i<routes.length;i++){
   const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
   const errors=[];page.on('pageerror',e=>errors.push(e.message));
   const response=await page.goto('http://localhost:3000'+routes[i],{waitUntil:'networkidle'});
   await page.evaluate(async()=>{await document.fonts.ready;for(const img of document.images)img.loading='eager';await Promise.all([...document.images].map(img=>img.decode().catch(()=>{})));});
   await page.waitForTimeout(250);
   const metrics=await page.evaluate(()=>({h1:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth>innerWidth,broken:[...document.images].filter(x=>!x.complete||x.naturalWidth===0).length}));
   await page.screenshot({path:path.join(out,`${phase}-${width}-${i}.png`),fullPage:true,animations:'disabled',mask:[page.locator('canvas')]});
   rows.push({width,path:routes[i],status:response.status(),errors:[...errors],...metrics});
   await page.close();
  }
 }
 await browser.close();fs.writeFileSync(path.join(out,phase+'.json'),JSON.stringify(rows,null,2));console.log(JSON.stringify({phase,cases:rows.length,errors:rows.filter(x=>x.errors.length||x.status!==200||x.broken)}));
})().catch(e=>{console.error(e);process.exitCode=1});
