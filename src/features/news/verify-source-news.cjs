/** Browser/SSR verification against the archived original 36 news documents.
 * Run with an existing Next dev server: node src/features/news/verify-source-news.cjs
 * Override NEWS_QA_URL to choose the local preview port. Never submits leads.
 */
const {chromium} = require("@playwright/test");
const fs = require("node:fs");
const path = require("node:path");
const root = process.cwd();
const base = process.env.NEWS_QA_URL || "http://127.0.0.1:4191";
const approved = require(path.join(root,"data/approved-routes.json")).routes;
const indices=[1,...Array.from({length:35},(_,i)=>118+i)];
const dir=path.join(root,"src/features/news/evidence");

async function main() {
  const browser=await chromium.launch({headless:true});
  const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});
  const differences=[];
  const errors=[];
  let passed=0;
  try {
    for(const index of indices) {
      const route=approved[index];
      const raw=fs.readFileSync(path.join(root,"work/web-clone-benchmark/raw/html",String(index).padStart(4,"0")+".html"),"utf8");
      try {
        const res=await page.goto(base+route,{waitUntil:"domcontentloaded",timeout:30000});
        const comparison=await page.evaluate(source=>{
          const doc=new DOMParser().parseFromString(source,"text/html");
          const old=doc.querySelector("main > article");
          const now=document.querySelector("main > article");
          if(!now || !old) return {missing:true};
          const counts=el=>({h1:el.querySelectorAll("h1").length,images:el.querySelectorAll("img").length,tables:el.querySelectorAll("table").length,links:el.querySelectorAll("a").length});
          const sourceCounts=counts(old), renderedCounts=counts(now);
          return {sameText:old.textContent===now.textContent,sourceChars:old.textContent.length,renderedChars:now.textContent.length,
            source:sourceCounts,rendered:renderedCounts,externalImages:[...now.querySelectorAll("img")].filter(img=>!img.getAttribute("src")?.startsWith("/assets/viettelup/")).map(img=>img.getAttribute("src")).slice(0,5),
            pageOverflow:document.documentElement.scrollWidth>window.innerWidth+1};
        },raw);
        if(res?.status()!==200 || comparison.missing || !comparison.sameText ||
          JSON.stringify(comparison.source)!==JSON.stringify(comparison.rendered) || comparison.externalImages?.length || comparison.pageOverflow) {
          differences.push({route,status:res?.status(),...comparison});
        } else passed++;
      } catch(error) { errors.push({route,error:error.message}); }
    }
    fs.mkdirSync(dir,{recursive:true});
    const cases=[
      ["/tin-tuc","listing",[390,768,1440]],
      ["/tin-tuc/goi-cuoc-viettel-thang-3-2026","article-tables",[390,768,1440]],
      ["/tin-tuc/lo-trinh-trien-khai-5g-viettel","article-images",[390]],
      ["/tin-tuc/tong-hop-cach-dang-ky-xem-tron-bo-euro-2024-tren-tv360","article-history",[1440]],
    ];
    for(const [route,tag,widths] of cases) for(const width of widths) {
      await page.setViewportSize({width,height:width===768?1024:width===390?844:900});
      await page.goto(base+route,{waitUntil:"load",timeout:30000});
      await page.screenshot({path:path.join(dir,`${tag}-${width}.png`),animations:"disabled"});
      if(tag==="article-tables" && width===390) {
        await page.locator("main table").first().scrollIntoViewIfNeeded();
        await page.screenshot({path:path.join(dir,"article-first-table-390.png"),animations:"disabled"});
      }
    }
  } finally {await browser.close();}
  console.log(JSON.stringify({base,pages:indices.length,passed,differences,errors,screenshots:9},null,2));
  if(differences.length||errors.length) process.exitCode=1;
}
main().catch(error=>{console.error(error);process.exitCode=1;});
