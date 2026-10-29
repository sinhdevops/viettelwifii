import { describe, expect, it } from "vitest";
import { parseApprovedRoutes } from "../src/lib/scope";

describe("route allowlist", () => {
  it("refuses partial input", () => {
    expect(() => parseApprovedRoutes({ routes: ["/", "/tin-tuc"] })).toThrow(
      /Route scope mismatch/,
    );
  });
  it("refuses duplicate input", () => {
    expect(() => parseApprovedRoutes({ routes: ["/", "/"] })).toThrow(
      /Duplicate/,
    );
  });
});
