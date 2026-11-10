import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { sourceAsset } from "../src/lib/viettelup-source-assets";

const comparisonImage =
  "https://images.ctfassets.net/dbp77tujye9f/2ityVh2bIO2h28MbpcRmQY/e74c183506454c1ffcf7d25933da6272/viettel2_7.jpeg";
const optimizedImage =
  "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdbp77tujye9f%2F2ityVh2bIO2h28MbpcRmQY%2Fe74c183506454c1ffcf7d25933da6272%2Fviettel2_7.jpeg&w=3840&q=75";
const originalArtwork = "/assets/roaming-esim-viettelwifii.png";

describe("generated editorial asset replacements", () => {
  it("uses the branded roaming artwork for source and optimized image URLs", () => {
    expect(sourceAsset(comparisonImage)).toBe(originalArtwork);
    expect(sourceAsset(optimizedImage)).toBe(originalArtwork);
  });

  it("keeps the replacement when optimizer query parameters are reordered", () => {
    const reordered = optimizedImage.replace("&w=3840&q=75", "&q=75&w=3840");
    expect(sourceAsset(reordered)).toBe(originalArtwork);
  });

  it("points to an existing PNG file in public assets", () => {
    const filePath = resolve(process.cwd(), "public", originalArtwork.slice(1));
    expect(existsSync(filePath)).toBe(true);
    expect(readFileSync(filePath).subarray(0, 8)).toEqual(
      Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    );
  });
});
