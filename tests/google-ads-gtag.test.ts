import { afterEach, describe, expect, it, vi } from "vitest";
import {
  googleAdsConfig,
  toVietnamE164,
  trackContactClickConversion,
  trackLeadFormConversion,
} from "../src/lib/gtag";
import { isTrackedContactHref } from "../src/components/analytics/google-ads-tag";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("toVietnamE164", () => {
  it("normalizes common Vietnamese formats", () => {
    for (const input of [
      "0325610016",
      "032 561 0016",
      "032.561.0016",
      "84325610016",
      "+84325610016",
      "+84 0325610016",
      "(+84) 325-610-016",
    ])
      expect(toVietnamE164(input)).toBe("+84325610016");
    expect(toVietnamE164("02438123456")).toBe("+842438123456");
  });
  it("rejects numbers that are not Vietnamese", () => {
    for (const input of ["", "12345", "+1 415 555 0100", "0123", "00000000000"])
      expect(toVietnamE164(input)).toBeNull();
  });
});

describe("googleAdsConfig", () => {
  it("accepts only well-formed IDs and labels", () => {
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_ADS_ID", "AW-123456789");
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL", "AbC-12_x");
    expect(googleAdsConfig.conversionId).toBe("AW-123456789");
    expect(googleAdsConfig.leadFormLabel).toBe("AbC-12_x");
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_ADS_ID", "AW-1'); alert(1); //");
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL", "bad label");
    expect(googleAdsConfig.conversionId).toBeNull();
    expect(googleAdsConfig.leadFormLabel).toBeNull();
  });
});

describe("conversion helpers", () => {
  function stubGtag() {
    const gtag = vi.fn();
    vi.stubGlobal("window", { gtag });
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_ADS_ID", "AW-111111111");
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL", "lead");
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL", "contact");
    return gtag;
  }

  it("sets E.164 user_data before the lead conversion", () => {
    const gtag = stubGtag();
    trackLeadFormConversion({ phone: "0325 610 016" });
    expect(gtag.mock.calls).toEqual([
      ["set", "user_data", { phone_number: "+84325610016" }],
      ["event", "conversion", { send_to: "AW-111111111/lead" }],
    ]);
  });

  it("skips user_data for an invalid phone but still converts", () => {
    const gtag = stubGtag();
    trackLeadFormConversion({ phone: "12" });
    expect(gtag.mock.calls).toEqual([
      ["event", "conversion", { send_to: "AW-111111111/lead" }],
    ]);
  });

  it("sends the contact conversion", () => {
    const gtag = stubGtag();
    trackContactClickConversion();
    expect(gtag).toHaveBeenCalledWith("event", "conversion", {
      send_to: "AW-111111111/contact",
    });
  });

  it("is a no-op without gtag or configuration", () => {
    vi.stubGlobal("window", {});
    expect(() =>
      trackLeadFormConversion({ phone: "0325610016" }),
    ).not.toThrow();
    const gtag = vi.fn();
    vi.stubGlobal("window", { gtag });
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_ADS_ID", "");
    trackContactClickConversion();
    expect(gtag).not.toHaveBeenCalled();
  });
});

describe("isTrackedContactHref", () => {
  const hotline = "0325610016";
  const zalo = "https://zalo.me/0325610016";
  it("matches the hotline in any tel: format", () => {
    expect(isTrackedContactHref("tel:0325610016", hotline, zalo)).toBe(true);
    expect(isTrackedContactHref("tel:+84325610016", hotline, zalo)).toBe(true);
  });
  it("ignores other phone numbers such as the Viettel switchboard", () => {
    expect(isTrackedContactHref("tel:18008098", hotline, zalo)).toBe(false);
    expect(isTrackedContactHref("tel:198", hotline, zalo)).toBe(false);
  });
  it("matches Zalo links", () => {
    expect(isTrackedContactHref(zalo, hotline, zalo)).toBe(true);
    expect(isTrackedContactHref("https://zalo.me/g/abc", hotline)).toBe(true);
    expect(isTrackedContactHref("https://chat.zalo.me/", hotline)).toBe(true);
  });
  it("ignores ordinary links", () => {
    expect(isTrackedContactHref("/internet", hotline, zalo)).toBe(false);
    expect(isTrackedContactHref("https://example.com", hotline, zalo)).toBe(
      false,
    );
    expect(isTrackedContactHref("https://notzalo.me/x", hotline, zalo)).toBe(
      false,
    );
  });
});
