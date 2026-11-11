"""Derive local WebP assets; preserve source bytes and provenance registries.

Run with bundled Python/Pillow. No network or runtime dependencies beyond Pillow.
Manifest keys/values are public URL paths. Encoding is reproducible with the same
Pillow/libwebp versions. Existing derived files must match; never overwrite them.
"""
from __future__ import annotations

import hashlib
import io
import json
from pathlib import Path

from PIL import Image, ImageOps, __version__ as pillow_version, features

ROOT = Path(__file__).resolve().parents[2]
PUBLIC = ROOT / "public"
ASSETS = PUBLIC / "assets"
DERIVED = ASSETS / "optimized"
MANIFEST = ROOT / "src/generated/optimized-images.json"
THRESHOLD_BYTES = 300_000  # decimal KB; includes all images above 300 KiB too
MAX_WIDTH = 1600
QUALITY = 82


def main() -> None:
    mapping: dict[str, str] = {}
    reports = []
    for source in sorted(ASSETS.rglob("*")):
        if not source.is_file() or DERIVED in source.parents:
            continue
        if source.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
            continue
        original = source.read_bytes()
        if len(original) <= THRESHOLD_BYTES:
            continue
        with Image.open(io.BytesIO(original)) as opened:
            opened.load()
            if getattr(opened, "n_frames", 1) != 1:
                raise ValueError(f"Animated source requires explicit handling: {source}")
            image = ImageOps.exif_transpose(opened)
            original_size = image.size
            image = image.convert("RGBA" if image.mode in {"RGBA", "LA"} or "transparency" in image.info else "RGB")
            if image.width > MAX_WIDTH:
                height = max(1, round(image.height * MAX_WIDTH / image.width))
                image = image.resize((MAX_WIDTH, height), Image.Resampling.LANCZOS)
            output = io.BytesIO()
            image.save(output, format="WEBP", quality=QUALITY, method=6, exact=True)
            encoded = output.getvalue()
            with Image.open(io.BytesIO(encoded)) as check:
                check.load()
                if check.format != "WEBP" or check.size != image.size or check.width > MAX_WIDTH:
                    raise ValueError(f"Derived validation failed: {source}")
            if len(encoded) >= len(original):
                raise ValueError(f"Derived image has no savings: {source}")
            local = "/" + source.relative_to(PUBLIC).as_posix()
            # Full source hash prevents collisions and makes provenance explicit.
            digest = hashlib.sha256(original).hexdigest()
            target = DERIVED / (source.relative_to(ASSETS).as_posix() + f".{digest}.webp")
            target.parent.mkdir(parents=True, exist_ok=True)
            if target.exists():
                if target.read_bytes() != encoded:
                    raise ValueError(f"Existing derivative differs; refusing overwrite: {target}")
            else:
                target.write_bytes(encoded)
            if source.read_bytes() != original:
                raise ValueError(f"Source changed during processing: {source}")
            mapping[local] = "/" + target.relative_to(PUBLIC).as_posix()
            reports.append({"original": local, "derived": mapping[local], "sourceSha256": digest,
                            "originalDimensions": original_size, "derivedDimensions": image.size,
                            "originalBytes": len(original), "derivedBytes": len(encoded),
                            "savedBytes": len(original) - len(encoded)})
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(mapping, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
    before = sum(row["originalBytes"] for row in reports)
    after = sum(row["derivedBytes"] for row in reports)
    print(json.dumps({"pillow": pillow_version, "libwebp": features.version("webp"),
                      "thresholdBytes": THRESHOLD_BYTES, "maxWidth": MAX_WIDTH, "quality": QUALITY,
                      "count": len(reports), "originalBytes": before, "derivedBytes": after,
                      "savedBytes": before - after,
                      "savedPercent": round(100 * (before - after) / before, 2) if before else 0,
                      "images": reports}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
