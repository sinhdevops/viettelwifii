import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const source = join(root, "work/web-clone-benchmark/ASSETS.json");
const dest = join(root, "work/web-clone-benchmark/browser-jobs");
const saveDir = join(root, "work/web-clone-benchmark/raw/assets");
mkdirSync(dest, { recursive: true });
const all = JSON.parse(readFileSync(source, "utf8")).assets;
const batchSize = 50;
for (let offset = 0; offset < all.length; offset += batchSize) {
  const index = String(Math.floor(offset / batchSize)).padStart(3, "0");
  const items = all
    .slice(offset, offset + batchSize)
    .map(({ url, file }) => [url, file]);
  const archive = `assets-batch-${index}.tar`;
  const save = join(saveDir, archive);
  const code = `async (page) => {
    const items = ${JSON.stringify(items)};
    const save = ${JSON.stringify(save)};
    const downloadStarted = page.waitForEvent('download', { timeout: 180000 });
    const result = await page.evaluate(async (items) => {
      const enc = new TextEncoder();
      const completed = new Array(items.length);
      const data = new Array(items.length);
      let index = 0;
      await Promise.all(Array.from({ length: 8 }, async () => {
        while (true) {
          const i = index++;
          if (i >= items.length) return;
          const [url, filename] = items[i];
          try {
            const response = await fetch(url, { credentials: 'omit', cache: 'force-cache' });
            if (!response.ok) throw Error('HTTP ' + response.status);
            const bytes = new Uint8Array(await response.arrayBuffer());
            data[i] = bytes;
            completed[i] = { file: filename, bytes: bytes.length, status: 'downloaded', contentType: response.headers.get('content-type') };
          } catch (err) {
            completed[i] = { file: filename, bytes: 0, status: 'failed', reason: String(err) };
          }
        }
      }));
      const parts = [];
      const header = (name, size) => {
        const h = new Uint8Array(512);
        const str = (at, value) => h.set(enc.encode(value).subarray(0, 512 - at), at);
        const oct = (at, number, size) => str(at, number.toString(8).padStart(size - 1, '0') + '\\0');
        str(0, name);
        oct(100, 420, 8);
        oct(108, 0, 8);
        oct(116, 0, 8);
        oct(124, size, 12);
        oct(136, Math.floor(Date.now() / 1000), 12);
        h.fill(32, 148, 156);
        h[156] = 48;
        str(257, 'ustar\\0');
        str(263, '00');
        oct(148, h.reduce((sum, n) => sum + n, 0), 8);
        return h;
      };
      for (let i = 0; i < items.length; i++) {
        if (!data[i]) continue;
        const bytes = data[i];
        parts.push(header(items[i][1], bytes.length), bytes);
        const pad = (512 - bytes.length % 512) % 512;
        if (pad) parts.push(new Uint8Array(pad));
      }
      parts.push(new Uint8Array(1024));
      const blob = new Blob(parts, { type: 'application/x-tar' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = ${JSON.stringify(archive)};
      document.body.appendChild(a);
      a.click();
      a.remove();
      return { completed, archiveBytes: blob.size };
    }, items);
    const download = await downloadStarted;
    await download.saveAs(save);
    return { save, downloaded: result.completed.filter((x) => x.status === 'downloaded').length, failed: result.completed.filter((x) => x.status !== 'downloaded'), archiveBytes: result.archiveBytes };
  }`;
  writeFileSync(join(dest, `download-${index}.js`), code);
  console.log(
    JSON.stringify({
      index,
      count: items.length,
      filename: `work/web-clone-benchmark/browser-jobs/download-${index}.js`,
    }),
  );
}
