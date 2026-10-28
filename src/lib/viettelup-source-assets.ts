import registry from '@/generated/viettelup-assets.json';

const lookup = registry as Record<string, string>;

function assetKey(value: string, sortQuery = false): string {
  const absolute = /^https?:\/\//i.test(value);
  const url = new URL(value, 'http://localhost');
  url.hash = '';
  if (sortQuery) {
    const pairs = [...url.searchParams.entries()].sort(([key, val], [other, otherVal]) =>
      key.localeCompare(other) || val.localeCompare(otherVal));
    url.search = '';
    for (const [key, val] of pairs) url.searchParams.append(key, val);
  }
  return absolute ? url.href : `${url.pathname}${url.search}`;
}

// Captures with an alternate query parameter order are equivalent, but keep
// exact keys first so distinct original files remain addressable.
const sortedLookup = new Map(
  Object.entries(lookup).map(([key, local]) => [assetKey(key, true), local]),
);

/** Resolve captured media to the local public directory; never return a remote URL. */
export function sourceAsset(value: string): string {
  if (value.startsWith('/assets/viettelup/')) return value;
  // The parser base is local and does not make network requests.
  const local = lookup[assetKey(value)] ?? sortedLookup.get(assetKey(value, true));
  if (local?.startsWith('/assets/viettelup/')) return local;
  throw new Error(`Original ViettelUp asset was not captured: ${value}`);
}
