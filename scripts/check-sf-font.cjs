const fs=require('node:fs'),assert=require('node:assert/strict');const{chromium}=require('@playwright/test');let browser;
(async()=>{
 browser=await chromium.launch({headless:true});const rows=[];
 for(const width of [390,768,1440]){
  const p=await browser.newPage({viewport:{width,height:1000}});const errors=[],failedFonts=[];
  p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(/\.(woff2?|ttf)(?:\?|$)/.test(r.url())&&r.status()>=400)failedFonts.push(r.url())});
  for(const route of ['/','/internet','/goi-cuoc-viettel/5G20','/tin-tuc/so-sanh-roaming','/tin-tuc/cap-nhat-goi-cuoc-GIC','/goi-cuoc-roaming','/duong-dan-khong-ton-tai']){
   const response=await p.goto('http://localhost:3000'+route,{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
   const metrics=await p.evaluate(()=>{
    const family=getComputedStyle(document.body).fontFamily;
    const texts=[...document.querySelectorAll('body *')].filter(e=>!['SCRIPT','STYLE','SVG','PATH'].includes(e.tagName)&&[...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim()));
    return {family,weights:[...document.fonts].filter(f=>f.family===family.split(',')[0].replaceAll('"','').trim()).map(f=>({weight:f.weight,status:f.status})),otherFonts:texts.filter(e=>getComputedStyle(e).fontFamily.split(',')[0]!==family.split(',')[0]).slice(0,8).map(e=>({tag:e.tagName,text:e.textContent.slice(0,35),font:getComputedStyle(e).fontFamily})),overflow:document.documentElement.scrollWidth>innerWidth};
   });
   assert.ok(!/magistral|beausans|ui-sans-serif/.test(metrics.family),'SF must be the primary family');assert.deepEqual(metrics.otherFonts,[]);assert.deepEqual(errors,[]);assert.deepEqual(failedFonts,[]);assert.equal(metrics.overflow,false,`Overflow at ${width} ${route}`);
   rows.push({width,route,status:response.status(),...metrics});
   if(route==='/'&&width===1440)await p.screenshot({path:'reports/integration/sf-font-preview/after-home.png',fullPage:true});
   if(route==='/internet'&&width===390)await p.screenshot({path:'reports/integration/sf-font-preview/after-internet-mobile.png',fullPage:true});
  }await p.close();
 }
 fs.writeFileSync('reports/integration/sf-font-preview/VERIFY.json',JSON.stringify(rows,null,2));console.log(JSON.stringify({cases:rows.length,passed:rows.length,sample:rows[0]}));
})().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>browser?.close());
