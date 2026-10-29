import { describe, expect, it } from "vitest";
import type { MetadataPage } from "@/lib/seo/metadata";
import { buildMetadata } from "@/lib/seo/metadata";

const path = "/goi-cuoc-viettel/5G20";
const page: MetadataPage = {
  title: "Gói 5G20 Viettel",
  description: "Thông tin gói 5G20",
  status: "draft",
};

describe("route metadata compatibility", () => {
  it("keeps draft title, description and canonical path while blocking indexing", () => {
    expect(buildMetadata(path, page)).toEqual({
      title: page.title,
      description: page.description,
      alternates: { canonical: path },
      robots: { index: false, follow: false },
    });
  });

  it("keeps ready metadata without overriding the root robots policy", () => {
    expect(buildMetadata(path, { ...page, status: "ready" })).toEqual({
      title: page.title,
      description: page.description,
      alternates: { canonical: path },
    });
  });

  it("blocks a missing route without inventing a canonical or title", () => {
    expect(buildMetadata("/khong-ton-tai", null)).toEqual({
      robots: { index: false, follow: false },
    });
  });

  it("blocks an unapproved path even if the caller supplies page content", () => {
    expect(
      buildMetadata("/internet/not-approved", { ...page, status: "ready" }),
    ).toEqual({
      robots: { index: false, follow: false },
    });
  });

  it("preserves case, nested routes and the root canonical without supplying metadataBase", () => {
    for (const route of [
      "/",
      "/goi-cuoc-viettel/tra-sau/MXH120",
      "/tin-tuc/cap-nhat-goi-cuoc-GIC",
    ]) {
      const result = buildMetadata(route, page);
      expect(result.alternates).toEqual({ canonical: route });
      expect(result.metadataBase).toBeUndefined();
      expect(result.openGraph).toBeUndefined();
      expect(result.twitter).toBeUndefined();
    }
  });
});
