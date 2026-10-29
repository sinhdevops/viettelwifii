import { describe, expect, it } from "vitest";
import { approvedRoutes } from "../src/lib/approved-routes";
import { PACKAGE_PAGES } from "../src/constants/packages/package-data";
import { getPackageRouteContent } from "../src/content/packages/package-route";
import { packageDetailsByRoute } from "../src/content/packages";
import GeneralMXH120Details from "../src/content/packages/general-MXH120";
import PostpaidMXH120Details from "../src/content/packages/postpaid-MXH120";

describe("shared package template route selection", () => {
  const routes = Object.keys(PACKAGE_PAGES);

  it("covers exactly the 116 approved package routes, including 15 postpaid routes", () => {
    expect(routes).toHaveLength(116);
    expect(Object.keys(packageDetailsByRoute).sort()).toEqual(
      [...routes].sort(),
    );
    expect([...routes].sort()).toEqual(
      approvedRoutes
        .filter((route) => route.startsWith("/goi-cuoc-viettel/"))
        .sort(),
    );
    expect(routes.filter((route) => route.includes("/tra-sau/"))).toHaveLength(
      15,
    );
  });

  it.each(routes)(
    "selects the original data and Details module for %s",
    async (route) => {
      const result = getPackageRouteContent(route);
      const postpaid = route.includes("/tra-sau/");
      const code = route.split("/").at(-1)!;
      const filename = `${postpaid ? "postpaid" : "general"}-${code}`;
      const original = await import(`../src/content/packages/${filename}.tsx`);

      expect(result).toBeDefined();
      expect(result!.record).toBe(
        PACKAGE_PAGES[route as keyof typeof PACKAGE_PAGES],
      );
      expect(result!.record.code).toBe(code);
      expect(result!.record.postpaid).toBe(postpaid);
      expect(result!.Details).toBe(original.default);
    },
  );

  it("keeps the two MXH120 variants distinct", () => {
    const general = getPackageRouteContent("/goi-cuoc-viettel/MXH120")!;
    const postpaid = getPackageRouteContent(
      "/goi-cuoc-viettel/tra-sau/MXH120",
    )!;
    expect(general.Details).toBe(GeneralMXH120Details);
    expect(postpaid.Details).toBe(PostpaidMXH120Details);
    expect(general.Details).not.toBe(postpaid.Details);
    expect(general.record).not.toBe(postpaid.record);
  });

  it.each([
    "",
    "/goi-cuoc-viettel/UNKNOWN",
    "/goi-cuoc-viettel/mxh120",
    "/goi-cuoc-viettel/Tra-sau/MXH120",
    "/goi-cuoc-viettel/5G20/",
    "MXH120",
    "toString",
    "constructor",
    "__proto__",
    "hasOwnProperty",
  ])("rejects unknown, case-mismatched or inherited key %s", (route) => {
    expect(getPackageRouteContent(route)).toBeUndefined();
  });
});
