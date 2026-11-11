import registry from "@/generated/viettelup-assets.json";
import optimizedImages from "@/generated/optimized-images.json";

const lookup = registry as Record<string, string>;
const optimizedLookup = optimizedImages as Record<string, string>;

/** Resolve a local original to its derivative, leaving other local assets intact. */
export function optimizedLocalAsset(local: string): string {
  if (!local.startsWith("/assets/")) return local;
  const url = new URL(local, "http://localhost");
  const optimized = optimizedLookup[url.pathname];
  return optimized ? `${optimized}${url.search}${url.hash}` : local;
}

function assetKey(value: string, sortQuery = false): string {
  const absolute = /^https?:\/\//i.test(value);
  const url = new URL(value, "http://localhost");
  url.hash = "";
  if (sortQuery) {
    const pairs = [...url.searchParams.entries()].sort(
      ([key, val], [other, otherVal]) =>
        key.localeCompare(other) || val.localeCompare(otherVal),
    );
    url.search = "";
    for (const [key, val] of pairs) url.searchParams.append(key, val);
  }
  return absolute ? url.href : `${url.pathname}${url.search}`;
}

// Original editorial artwork replaces the captured roaming comparison image at
// every captured size. Keep the source keys so existing data stays compatible.
const originalArtwork: Record<string, string> = {
  "https://images.ctfassets.net/dbp77tujye9f/2ityVh2bIO2h28MbpcRmQY/e74c183506454c1ffcf7d25933da6272/viettel2_7.jpeg":
    "/assets/roaming-esim-viettelwifii.png",
  "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F2ityVh2bIO2h28MbpcRmQY%2Fe74c183506454c1ffcf7d25933da6272%2Fviettel2_7.jpeg&w=1080&q=75":
    "/assets/roaming-esim-viettelwifii.png",
  "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F2ityVh2bIO2h28MbpcRmQY%2Fe74c183506454c1ffcf7d25933da6272%2Fviettel2_7.jpeg&w=3840&q=75":
    "/assets/roaming-esim-viettelwifii.png",
};
const sortedOriginalArtwork = new Map(
  Object.entries(originalArtwork).map(([key, local]) => [
    assetKey(key, true),
    local,
  ]),
);

// Captures with an alternate query parameter order are equivalent, but keep
// exact keys first so distinct original files remain addressable.
const sortedLookup = new Map(
  Object.entries(lookup).map(([key, local]) => [assetKey(key, true), local]),
);

/** Resolve captured media to the local public directory; never return a remote URL. */
export function sourceAsset(value: string): string {
  const replacement =
    originalArtwork[assetKey(value)] ??
    sortedOriginalArtwork.get(assetKey(value, true));
  if (replacement) return optimizedLocalAsset(replacement);
  // Direct local paths (including editorial artwork and existing derivatives)
  // remain resolvable even when they have no captured registry entry.
  if (value.startsWith("/assets/")) return optimizedLocalAsset(value);
  // The parser base is local and does not make network requests.
  const local =
    lookup[assetKey(value)] ?? sortedLookup.get(assetKey(value, true));
  if (local?.startsWith("/assets/")) return optimizedLocalAsset(local);
  throw new Error(`Original ViettelUp asset was not captured: ${value}`);
}
