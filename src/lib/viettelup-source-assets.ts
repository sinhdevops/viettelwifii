import registry from '@/generated/viettelup-assets.json';

const lookup = registry as Record<string, string>;

/** Map an original ViettelUp public asset URL onto its byte-identical local copy. */
export function sourceAsset(value: string): string {
  if (value.startsWith('/assets/viettelup/')) return value;
  const url = new URL(value, 'https://www.viettelup.vn');
  url.hash = '';
  const pairs = [...url.searchParams.entries()].sort(([key, val], [other, otherVal]) =>
    key.localeCompare(other) || val.localeCompare(otherVal));
  url.search = '';
  for (const [key, val] of pairs) url.searchParams.append(key, val);
  const direct = lookup[url.href];
  if (direct) return direct;
  // Earlier captures could record a different query-key order.
  const match = Object.entries(lookup).find(([name]) => {
    const candidate = new URL(name);
    candidate.hash = '';
    const query = [...candidate.searchParams.entries()].sort(([key, val], [other, otherVal]) =>
      key.localeCompare(other) || val.localeCompare(otherVal));
    candidate.search = '';
    for (const [key, val] of query) candidate.searchParams.append(key, val);
    return candidate.href === url.href;
  });
  if (match) return match[1];
  throw new Error(`Original ViettelUp asset was not captured: ${value}`);
}
