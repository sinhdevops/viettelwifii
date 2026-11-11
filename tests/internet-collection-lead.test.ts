import { afterEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

vi.mock("server-only", () => ({}));
vi.mock("next/server", async (importOriginal) => {
  const actual = await importOriginal<typeof import("next/server")>();
  return { ...actual, connection: async () => {} };
});
const store = vi.hoisted(() => ({
  configured: vi.fn(() => true),
  saveLead: vi.fn(),
  setLeadNotificationStatus: vi.fn(),
}));
vi.mock("../src/lib/server/lead-store", () => ({
  leadStoreConfigured: store.configured,
  saveLead: store.saveLead,
  setLeadNotificationStatus: store.setLeadNotificationStatus,
}));
import { POST } from "../src/app/api/leads/route";
import { GET } from "../src/app/api/leads/config/route";

const payload = {
  name: "Khách thử nghiệm",
  phone: "0900000000",
  note: "Địa chỉ thử nghiệm, Đà Nẵng",
  itemId: "/internet/MESHVT3",
  itemTitle: "MESHVT3",
  pagePath: "/internet",
  attribution: {},
  privacyConsent: true,
  privacyPolicyVersion: "v1",
  company: "",
  turnstileToken: "",
};

function setup() {
  vi.stubEnv("NEXT_PUBLIC_SITE_URL", "http://localhost:3000");
  vi.stubEnv("PRIVACY_POLICY_VERSION", "");
  vi.stubEnv("TURNSTILE_SECRET_KEY", "");
  vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "");
  vi.stubEnv("TELEGRAM_BOT_TOKEN", "");
  vi.stubEnv("TELEGRAM_CHAT_ID", "");
  store.configured.mockReturnValue(true);
  store.saveLead.mockResolvedValue("lead-1");
  store.setLeadNotificationStatus.mockResolvedValue(undefined);
}

function request(body: unknown = payload) {
  return new NextRequest("http://localhost:3000/api/leads", {
    method: "POST",
    headers: {
      origin: "http://localhost:3000",
      "content-type": "application/json",
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.resetAllMocks();
});

describe("Internet collection lead delivery without manual gates", () => {
  it("opens the form without capture flags, approved privacy status, or backend credentials", async () => {
    setup();
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("LEAD_CAPTURE_ENABLED", "false");
    vi.stubEnv("SUPABASE_URL", "");
    vi.stubEnv("SUPABASE_SECRET_KEY", "");
    const response = await GET();
    expect(await response.json()).toEqual({
      available: true,
      policyVersion: "v1",
    });
    expect(response.headers.get("cache-control")).toBe("no-store, max-age=0");
  });

  it("uses a default consent version instead of hiding the form for missing or placeholder config", async () => {
    setup();
    for (const version of [
      undefined,
      "",
      "unapproved",
      "bad version",
      "#bad",
    ]) {
      vi.stubEnv("PRIVACY_POLICY_VERSION", version);
      expect(await (await GET()).json()).toEqual({
        available: true,
        policyVersion: "v1",
      });
    }
    vi.stubEnv("PRIVACY_POLICY_VERSION", "policy-v2");
    expect(await (await GET()).json()).toEqual({
      available: true,
      policyVersion: "policy-v2",
    });
  });

  it("stores consent before Telegram and retains the lead when notification fails", async () => {
    setup();
    vi.stubEnv("TELEGRAM_BOT_TOKEN", "test-token");
    vi.stubEnv("TELEGRAM_CHAT_ID", "test-chat");
    const send = vi
      .fn()
      .mockResolvedValueOnce(Response.json({ ok: true }))
      .mockResolvedValueOnce(Response.json({ ok: false }));
    vi.stubGlobal("fetch", send);
    expect(await (await POST(request())).json()).toEqual({
      ok: true,
      notificationSent: true,
    });
    expect(store.saveLead).toHaveBeenCalledBefore(send);
    expect(store.saveLead.mock.calls[0][2]).toEqual({
      consentAt: expect.any(String),
      privacyPolicyVersion: "v1",
    });
    expect(JSON.parse(send.mock.calls[0][1].body).text).toContain("MESHVT3");
    expect(await (await POST(request())).json()).toEqual({
      ok: true,
      notificationSent: false,
    });
    expect(store.setLeadNotificationStatus).toHaveBeenLastCalledWith(
      "lead-1",
      "failed",
    );
  });

  it("allows production without optional CAPTCHA when neither key is configured", async () => {
    setup();
    vi.stubEnv("NODE_ENV", "production");
    const send = vi.fn();
    vi.stubGlobal("fetch", send);
    const response = await POST(request());
    expect(response.status).toBe(200);
    expect(store.saveLead).toHaveBeenCalledOnce();
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects missing storage before reading the body, without pretending to save", async () => {
    setup();
    store.configured.mockReturnValue(false);
    const send = vi.fn();
    vi.stubGlobal("fetch", send);
    const req = request("{ malformed json");
    const response = await POST(req);
    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({
      error: "lead_storage_unconfigured",
    });
    expect(req.bodyUsed).toBe(false);
    expect(store.saveLead).not.toHaveBeenCalled();
    expect(send).not.toHaveBeenCalled();
  });

  it("does not confirm or notify when the database fails", async () => {
    setup();
    store.saveLead.mockRejectedValue(new Error("database unavailable"));
    const send = vi.fn();
    vi.stubGlobal("fetch", send);
    const response = await POST(request());
    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({ error: "lead_intake_unavailable" });
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects unknown products before storing", async () => {
    setup();
    const response = await POST(
      request({ ...payload, itemId: "/internet/UNKNOWN" }),
    );
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "invalid_item" });
    expect(store.saveLead).not.toHaveBeenCalled();
  });

  it.each([true, false, undefined])(
    "rejects stale policy versions with consent %s",
    async (privacyConsent) => {
      setup();
      vi.stubEnv("PRIVACY_POLICY_VERSION", "policy-v2");
      const response = await POST(request({ ...payload, privacyConsent }));
      expect(response.status).toBe(409);
      expect(await response.json()).toEqual({
        error: "privacy_policy_version_mismatch",
      });
      expect(store.saveLead).not.toHaveBeenCalled();
    },
  );

  it.each([false, undefined])(
    "accepts Internet consent %s without recording acceptance",
    async (privacyConsent) => {
      setup();
      expect((await POST(request({ ...payload, privacyConsent }))).status).toBe(
        200,
      );
      expect(store.saveLead).toHaveBeenCalledWith(
        expect.objectContaining({ privacyConsent: false }),
        expect.any(String),
        { consentAt: null, privacyPolicyVersion: null },
      );
    },
  );

  it.each([
    "/",
    "/internet/MESHVT3",
    "/goi-cuoc-viettel/5G20",
    "/internet-other",
  ])("requires affirmative consent on %s", async (pagePath) => {
    setup();
    for (const privacyConsent of [false, undefined]) {
      const response = await POST(
        request({ ...payload, pagePath, privacyConsent }),
      );
      expect(response.status).toBe(400);
      expect(await response.json()).toEqual({ error: "invalid_input" });
    }
    expect(store.saveLead).not.toHaveBeenCalled();
  });

  it("rejects invalid consent types and missing versions on Internet", async () => {
    setup();
    const withoutVersion = Object.fromEntries(
      Object.entries(payload).filter(([key]) => key !== "privacyPolicyVersion"),
    );
    for (const body of [
      ...[null, "true", "false", "on", 0, 1, {}, []].map((privacyConsent) => ({
        ...payload,
        privacyConsent,
      })),
      ...[true, false, undefined].flatMap((privacyConsent) =>
        [undefined, null, "", "bad version", "#bad", "a".repeat(65)].map(
          (privacyPolicyVersion) => ({
            ...payload,
            privacyConsent,
            privacyPolicyVersion,
          }),
        ),
      ),
      withoutVersion,
    ]) {
      expect((await POST(request(body))).status).toBe(400);
    }
    expect(store.saveLead).not.toHaveBeenCalled();
  });

  it("verifies CAPTCHA when configured and rejects incomplete keys", async () => {
    setup();
    vi.stubEnv("TURNSTILE_SECRET_KEY", "test-secret");
    expect((await POST(request())).status).toBe(503);
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "test-site-key");
    const send = vi.fn().mockResolvedValue(Response.json({ success: false }));
    vi.stubGlobal("fetch", send);
    const response = await POST(request());
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "captcha_failed" });
    expect(send.mock.calls[0][0]).toBe(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    );
    expect(store.saveLead).not.toHaveBeenCalled();
  });
});
