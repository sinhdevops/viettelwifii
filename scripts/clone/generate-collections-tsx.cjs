/* eslint-disable @typescript-eslint/no-require-imports -- Archived standalone CommonJS converter. */
/**
 * One-way conversion: four user-approved, byte-preserved HTML captures into
 * inspectable TSX. Archived capture converter, superseded by authored sections.
 * It refuses to overwrite maintained collection entry points. Runtime never
 * parses HTML or fetches the source website.
 *
 * node scripts/clone/generate-collections-tsx.cjs
 */
const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const out = path.join(root, 'src/features/collections/source-pages');
// Preflight every destination before launching a browser or writing any file.
// Recapturing source must be reviewed separately from the maintained UI.
for (let index = 171; index < 175; index++) {
  const file = path.join(out, `SourceCollection${index}.tsx`);
  const feature = ['internet', 'gic', 'nine', 'roaming'][index - 171];
  const authored = path.join(root, 'src/features/collections', feature, `${feature}-collection.tsx`);
  if (fs.existsSync(authored) ||
      (fs.existsSync(file) && fs.readFileSync(file, 'utf8').includes('maintained sections are authored TSX'))) {
    throw new Error(
      'Archived converter blocked: collections are maintained as named TSX sections. ' +
      'Edit src/features/collections/{internet,gic,nine,roaming}/ instead. ' +
      'Do not regenerate over the compatibility entries or authored content.'
    );
  }
}
const { chromium } = require('@playwright/test');
const approved = require(path.join(root, 'data/approved-routes.json')).routes;
const assets = require(path.join(root, 'src/generated/viettelup-assets.json'));
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const ATTR = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly',
  autofocus: 'autoFocus', colspan: 'colSpan', rowspan: 'rowSpan', srcset: 'srcSet',
  crossorigin: 'crossOrigin', fetchpriority: 'fetchPriority', itemprop: 'itemProp',
  itemscope: 'itemScope', itemtype: 'itemType', datetime: 'dateTime', contenteditable: 'contentEditable',
  spellcheck: 'spellCheck', maxlength: 'maxLength', minlength: 'minLength',
  fill_rule: 'fillRule', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule',
  'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin', 'stroke-dasharray': 'strokeDasharray',
};
const BOOL = new Set(['disabled', 'hidden', 'required', 'multiple', 'checked', 'selected', 'readOnly', 'itemScope', 'autoFocus', 'open', 'controls', 'loop', 'muted', 'playsInline']);
const ALLOW = new Set(['id', 'class', 'href', 'alt', 'title', 'role', 'target', 'rel', 'width',
  'height', 'loading', 'decoding', 'scope', 'colspan', 'rowspan', 'itemprop', 'itemscope',
  'itemtype', 'datetime', 'name', 'type', 'value', 'dir', 'lang', 'placeholder', 'disabled',
  'hidden', 'required', 'multiple', 'checked', 'selected', 'tabindex', 'viewbox', 'd',
  'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-dasharray',
  'fill-rule', 'clip-rule', 'xmlns', 'focusable', 'preserveaspectratio', 'transform',
  'cx', 'cy', 'r', 'rx', 'ry', 'x', 'y', 'x1', 'x2', 'y1', 'y2', 'points',
  'opacity', 'stroke-opacity', 'fill-opacity', 'version', 'patternunits', 'clip-path',
  'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'poster', 'preload', 'src',
  'srcset', 'sizes', 'fetchpriority', 'crossorigin', 'contenteditable', 'spellcheck',
  'maxlength', 'minlength', 'download', 'start', 'open', 'colspan', 'rowspan', 'style']);
const EXCLUDE = new Set(['data-nimg', 'data-reactroot', 'data-state', 'aria-controls',
  'aria-expanded', 'aria-haspopup']);
const stats = [];
const missingAssets = new Set();
let sourceFaq = new Map();

// Parse captured Flight strings as data only. Never execute source scripts.
function capturedFaq(html) {
  let flight = '';
  for (const match of html.matchAll(/self\.__next_f\.push\((\[[\s\S]*?\])\)/g)) {
    const payload = JSON.parse(match[1]);
    if (payload[0] === 1 && typeof payload[1] === 'string') flight += payload[1];
  }
  const found = new Map();
  function visit(node) {
    if (!node || typeof node !== 'object') return;
    const props = Array.isArray(node) && node[0] === '$' ? node[3] : null;
    if (typeof props?.value === 'string' && Array.isArray(props.children)) {
      const content = props.children[1]?.[3];
      if (content && typeof content.className === 'string') found.set(props.value, content);
    }
    for (const child of Object.values(node)) visit(child);
  }
  for (const row of flight.split('\n')) {
    let value;
    try { value = JSON.parse(row.slice(row.indexOf(':') + 1)); }
    catch { continue; } // Module references and other non-JSON Flight rows.
    visit(value);
  }
  return found;
}

function flightContent(value, route, counts) {
  if (typeof value === 'string' || typeof value === 'number') return `{${JSON.stringify(value)}}`;
  if (value == null || typeof value === 'boolean') return '';
  if (Array.isArray(value) && value[0] === '$') {
    const [, tag, , props] = value;
    if (!['a', 'p', 'span', 'strong', 'em', 'br'].includes(tag)) throw new Error(`Unsupported captured FAQ element ${tag}`);
    const { children, ...rawAttrs } = props;
    const attrs = Object.fromEntries(Object.entries(rawAttrs).map(([key, val]) => [key === 'className' ? 'class' : key, val]));
    const content = flightContent(children, route, counts);
    const element = jsx({ tag, attrs, css: [], children: [] }, route, counts);
    return element.replace(`</${tag}>`, `${content}</${tag}>`);
  }
  if (Array.isArray(value)) return value.map(child => flightContent(child, route, counts)).join('');
  throw new Error('Unsupported captured FAQ data');
}

function localAsset(url) {
  try {
    const parsed = new URL(url, 'http://localhost');
    parsed.hash = '';
    const ordered = [...parsed.searchParams.entries()].sort((a,b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]));
    parsed.search = '';
    for (const [k,v] of ordered) parsed.searchParams.append(k,v);
    const expected = /^https?:\/\//.test(url) ? parsed.href : `${parsed.pathname}${parsed.search}`;
    if (assets[expected] || Object.keys(assets).some(x => {
      const p = new URL(x, 'http://localhost');
      const sorted = [...p.searchParams.entries()].sort((a,b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]));
      p.search = '';
      for (const [k,v] of sorted) p.searchParams.append(k,v);
      return (x.startsWith('http') ? p.href : `${p.pathname}${p.search}`) === expected;
    })) return `sourceAsset(${JSON.stringify(url)})`;
    missingAssets.add(url);
  } catch { missingAssets.add(url); }
  return JSON.stringify(url);
}
function sourceHref(value) {
  if (!value) return value;
  try {
    const u = new URL(value, 'https://viettelwifii.vn');
    if ((u.hostname === 'viettelwifii.vn' || u.hostname === 'viettelwifii.vn') && approved.includes(u.pathname))
      return u.pathname + u.search + u.hash;
    if (u.hostname === 'viettelwifii.vn' && !approved.includes(u.pathname)) return u.href;
  } catch { /* Retain source verbatim. */ }
  return value;
}
function cssKey(key) {
  if (key.startsWith('--')) return key;
  return key.replace(/-([a-z])/g, (_, x) => x.toUpperCase()).replace(/^webkit/, 'Webkit');
}
function cssExpr(pairs) {
  const rows = pairs.map(([key,val]) => `${JSON.stringify(cssKey(key))}: ${JSON.stringify(val)}`);
  return `{ ${rows.join(', ')} }`;
}
function jsx(node, route, counts) {
  if (node.text !== undefined) return `{${JSON.stringify(node.text)}}`;
  if (['script','style','noscript','template'].includes(node.tag)) return '';
  const heading = node.children.find(child => child.tag === 'h3');
  const trigger = heading?.children.find(child => child.tag === 'button' && child.attrs['aria-controls']);
  const region = node.children.find(child => child.attrs?.role === 'region');
  if (trigger && region) {
    const answer = sourceFaq.get(trigger.textValue);
    if (!answer) throw new Error(`Missing source FAQ answer: ${route} ${trigger.textValue}`);
    counts.faqs++;
    return `<CollectionAccordionItem className={${JSON.stringify(node.attrs.class || '')}} headingClassName={${JSON.stringify(heading.attrs.class || '')}} buttonClassName={${JSON.stringify(trigger.attrs.class || '')}} regionClassName={${JSON.stringify(region.attrs.class || '')}} answerClassName={${JSON.stringify(answer.className)}} trigger={<>${trigger.children.map(child => jsx(child, route, counts)).join('')}</>}>${flightContent(answer.children, route, counts)}</CollectionAccordionItem>`;
  }
  const sourceTag = node.tag;
  let tag = sourceTag;
  const isDialog = sourceTag === 'button' && node.attrs['aria-haspopup'] === 'dialog';
  const isSlider = sourceTag === 'button' && /^(previous|next) slide$/i.test(node.attrs['aria-label'] || node.textValue || '');
  if (isDialog) { tag = 'CollectionDialogButton'; counts.dialogs++; }
  if (isSlider) { tag = 'CollectionSliderButton'; counts.sliders++; }
  const attrs = [];
  for (const [raw, val] of Object.entries(node.attrs)) {
    if (raw === 'style' || raw === 'src' || raw === 'srcset' || raw.startsWith('on')) continue;
    if (EXCLUDE.has(raw) || (!ALLOW.has(raw) && !raw.startsWith('data-') && !raw.startsWith('aria-'))) continue;
    if (raw === 'href') { attrs.push(`href={${JSON.stringify(sourceHref(val))}}`); continue; }
    const name = ATTR[raw] || ({viewbox:'viewBox', preserveaspectratio:'preserveAspectRatio', playsinline:'playsInline', autoplay:'autoPlay'}[raw] || raw);
    if (BOOL.has(name)) {
      if (val === '' || val === raw || val === 'true') attrs.push(name);
      continue;
    }
    if (name === 'tabIndex' || (name === 'start' && /^-?\d+$/.test(val))) {
      attrs.push(`${name}={${Number(val)}}`);
      continue;
    }
    attrs.push(`${name}={${JSON.stringify(val)}}`);
  }
  if (node.css.length) attrs.push(`style={${cssExpr(node.css)} as CSSProperties}`);
  if (node.attrs.src) {
    const value = ['img','source'].includes(sourceTag) ? localAsset(node.attrs.src) : JSON.stringify(node.attrs.src);
    attrs.push(`src={${value}}`);
  }
  if (node.attrs.srcset) {
    const pieces = node.attrs.srcset.split(/,\s*/).map(part => part.trim().split(/\s+/));
    // Every image candidate is registered separately in the source asset manifest.
    const expressions = pieces.map(([url,scale]) => `${url} ${scale || ''}`.trim());
    const mapped = expressions.map(item => {
      const [url, ...rest] = item.split(/\s+/);
      return `\`${'${' + localAsset(url) + '}'}${rest.length ? ' '+rest.join(' ') : ''}\``;
    });
    attrs.push(`srcSet={[${mapped.join(',')}].join(', ')}`);
  }
  if (sourceTag === 'img') counts.images++;
  if (sourceTag === 'a') counts.anchors++;
  if (isDialog) attrs.push(`dialogLabel={${JSON.stringify(node.textValue || 'Đăng ký')}}`, `pagePath={${JSON.stringify(route)}}`);
  if (isSlider) attrs.push(`direction={${JSON.stringify(/previous/i.test(node.textValue || node.attrs['aria-label'] || '') ? 'previous' : 'next')}}`);
  const str = attrs.length ? ' ' + attrs.join(' ') : '';
  if (VOID.has(tag)) return `<${tag}${str} />`;
  return `<${tag}${str}>${node.children.map(n => jsx(n,route,counts)).join('')}</${tag}>`;
}

(async () => {
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  try {
    for (let index = 171; index < 175; index++) {
      const route = approved[index];
      const capture = String(index).padStart(4, '0');
      const html = fs.readFileSync(path.join(root, `work/web-clone-benchmark/raw/html/${capture}.html`), 'utf8');
      sourceFaq = capturedFaq(html);
      const tree = await page.evaluate(source => {
        const doc = new DOMParser().parseFromString(source, 'text/html');
        const main = doc.querySelector('main');
        return main ? serializeInBrowser(main) : null;
        function serializeInBrowser(node) {
          if (node.nodeType === Node.TEXT_NODE) return { text: node.textContent };
          if (node.nodeType !== Node.ELEMENT_NODE) return null;
          return {
            tag: node.tagName.toLowerCase(),
            attrs: Object.fromEntries([...node.attributes].map(a => [a.name, a.value])),
            css: node.getAttribute('style') ? [...node.style].map(key => [key, node.style.getPropertyValue(key)]) : [],
            textValue: node.textContent?.trim().slice(0, 180),
            children: [...node.childNodes].map(serializeInBrowser).filter(Boolean),
          };
        }
      }, html);
      if (!tree || !route) throw new Error(`Missing captured main: ${capture}`);
      const counters = { images: 0, anchors: 0, dialogs: 0, sliders: 0, faqs: 0 };
      const rendered = jsx(tree, route, counters);
      const component = `SourceCollection${index}`;
      const file = path.join(out, `${component}.tsx`);
      fs.writeFileSync(file,
        `/* Captured source DOM ${capture}.html: ${route}. Generated reviewable TSX. */\n`+
        `/* eslint-disable @next/next/no-img-element */\n`+
        `import { sourceAsset } from '@/lib/viettelup-source-assets';\n`+
        `import { CollectionDialogButton${counters.sliders ? ', CollectionSliderButton' : ''} } from '../collection-controls';\n`+
        `import { CollectionAccordionGroup, CollectionAccordionItem } from '../collection-accordion';\n`+
        `import type { CSSProperties } from 'react';\n`+
        `export default function ${component}() { return (<CollectionAccordionGroup>${rendered}</CollectionAccordionGroup>); }\n`, 'utf8');
      stats.push({ route, capture, generatedFile: path.relative(root,file), jsxBytes: fs.statSync(file).size, ...counters });
    }
  } finally { await browser.close(); }
  const report = { routes: stats, uncapturedAssetRefs: [...missingAssets] };
  fs.mkdirSync(path.join(root, 'reports/integration'), { recursive: true });
  fs.writeFileSync(path.join(root,'reports/integration/collections-tsx-conversion.json'),JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify(report,null,2));
  if (missingAssets.size) process.exitCode = 1;
})().catch(error => {console.error(error); process.exitCode = 1;});
