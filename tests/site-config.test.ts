import { describe, expect, it, vi, afterEach } from "vitest";
import { parseSiteOrigin, siteConfig } from "../src/lib/site-config";
import { NextRequest } from "next/server";
vi.mock("server-only", () => ({}));
import { POST } from "../src/app/api/leads/route";

afterEach(() => vi.unstubAllEnvs());
describe("deployment domain configuration", () => {
  it("derives URLs and display hostname from the configured origin", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://changed.example/");
    expect(siteConfig.origin).toBe("https://changed.example");
    expect(siteConfig.hostname).toBe("changed.example");
    expect(siteConfig.url("/goi-cuoc-viettel/5G20?x=1#details")).toBe(
      "https://changed.example/goi-cuoc-viettel/5G20?x=1#details",
    );
  });
  it("rejects malformed configuration instead of silently using another domain", () => {
    for (const value of [
      undefined,
      "",
      "domain-only.example",
      "ftp://example.com",
      "https://user:password@example.com",
      "https://example.com/path",
      "https://example.com/?x=1",
      "https://example.com/#part",
    ])
      expect(() => parseSiteOrigin(value)).toThrow();
  });
  it("keeps site links on the configured host", () => {
    for (const path of [
      "https://other.example",
      "//other.example",
      "/\\other.example",
      "/\n/other.example",
    ])
      expect(() => siteConfig.url(path)).toThrow();
  });

  it("uses the configured origin for production API requests and permits only same-origin local preview", async () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://changed.example");
    // Unsupported content type stops before parsing a lead or making network calls.
    const check = (origin: string, crossSite = false) =>
      POST(
        new NextRequest("http://localhost:3000/api/leads", {
          method: "POST",
          headers: {
            origin,
            "content-type": "text/plain",
            ...(crossSite ? { "sec-fetch-site": "cross-site" } : {}),
          },
          body: "not a lead",
        }),
      );
    vi.stubEnv("NODE_ENV", "production");
    expect((await check("https://changed.example")).status).toBe(415);
    expect((await check("http://localhost:3000")).status).toBe(403);
    expect((await check("https://untrusted.example")).status).toBe(403);
    vi.stubEnv("VERCEL_URL", "viettelwifii.vercel.app");
    expect((await check("https://viettelwifii.vercel.app")).status).toBe(403);
    expect(
      (
        await POST(
          new NextRequest("https://viettelwifii.vercel.app/api/leads", {
            method: "POST",
            headers: {
              origin: "https://viettelwifii.vercel.app",
              "content-type": "text/plain",
            },
            body: "not a lead",
          }),
        )
      ).status,
    ).toBe(415);
    vi.stubEnv("NODE_ENV", "development");
    expect((await check("http://localhost:3000")).status).toBe(415);
    expect((await check("http://localhost:3001")).status).toBe(403);
    expect((await check("http://localhost:3000", true)).status).toBe(403);
  });
});
