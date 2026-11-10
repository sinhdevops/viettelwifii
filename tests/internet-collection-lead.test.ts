import { afterEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

vi.mock("server-only", () => ({}));
const store = vi.hoisted(() => ({
  saveLead: vi.fn(),
  setLeadNotificationStatus: vi.fn(),
}));
vi.mock("../src/lib/server/lead-store", () => ({
  leadStoreConfigured: () => true,
  saveLead: store.saveLead,
  setLeadNotificationStatus: store.setLeadNotificationStatus,
}));
import { POST } from "../src/app/api/leads/route";
import { GET as getLeadPrivacyConfig } from "../src/app/api/leads/config/route";
import {
  privacyPolicyPath,
  siteRouteDefinitions,
} from "../src/lib/site-routes";

const privacyPolicyRoute = siteRouteDefinitions.find(
  ({ path }) => path === privacyPolicyPath,
);
const initialPrivacyPolicyStatus = privacyPolicyRoute?.status;

function setPrivacyPolicyStatus(status: "draft" | "ready") {
  if (!privacyPolicyRoute) {
    throw new Error(`Missing site-route fixture: ${privacyPolicyPath}`);
  }
  privacyPolicyRoute.status = status;
}

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

const policyVersion = "v1";
const publicationFlags = [
  "SITE_LIVE",
  "CONTENT_RIGHTS_CLEARED",
  "SITE_IDENTITY_VERIFIED",
  "PRODUCT_FACTS_VERIFIED",
  "PRIVACY_POLICY_APPROVED",
] as const;

function enableLeadCapture() {
  // Test-only explicit opt-in; never submit to an external service.
  vi.stubEnv("LEAD_CAPTURE_ENABLED", "true");
}

function approvePrivacy(version = policyVersion) {
  setPrivacyPolicyStatus("ready");
  for (const flag of publicationFlags) vi.stubEnv(flag, "true");
  vi.stubEnv("LEAD_CAPTURE_ENABLED", "true");
  vi.stubEnv("PRIVACY_POLICY_VERSION", version);
  vi.stubEnv("SUPABASE_URL", "https://qa-project.supabase.invalid");
  vi.stubEnv("SUPABASE_SECRET_KEY", "qa-service-role-secret");
  vi.stubEnv("TURNSTILE_SECRET_KEY", "");
  vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "");
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
  if (privacyPolicyRoute && initialPrivacyPolicyStatus) {
    privacyPolicyRoute.status = initialPrivacyPolicyStatus;
  }
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.resetAllMocks();
});

describe("Internet collection lead delivery", () => {
  it("stores server-approved consent before Telegram and retains a saved lead when notification fails", async () => {
    enableLeadCapture();
    approvePrivacy();
    vi.stubEnv("TELEGRAM_BOT_TOKEN", "test-token");
    vi.stubEnv("TELEGRAM_CHAT_ID", "test-chat");
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "");
    store.saveLead.mockResolvedValue("lead-1");
    store.setLeadNotificationStatus.mockResolvedValue(undefined);
    const send = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ ok: true }), { status: 200 }),
      )
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ ok: false }), { status: 200 }),
      );
    vi.stubGlobal("fetch", send);

    const accepted = await POST(request());
    expect(accepted.status).toBe(200);
    expect(await accepted.json()).toEqual({ ok: true, notificationSent: true });
    expect(store.saveLead).toHaveBeenCalledBefore(send);
    const savedConsent = store.saveLead.mock.calls[0][2] as {
      consentAt: string;
      privacyPolicyVersion: string;
    };
    expect(savedConsent.privacyPolicyVersion).toBe(policyVersion);
    expect(savedConsent.consentAt).toBe(
      new Date(savedConsent.consentAt).toISOString(),
    );
    expect(store.setLeadNotificationStatus).toHaveBeenCalledWith(
      "lead-1",
      "sent",
    );
    expect(send.mock.calls[0][0]).toBe(
      "https://api.telegram.org/bottest-token/sendMessage",
    );
    expect(JSON.parse(send.mock.calls[0][1].body).text).toContain("MESHVT3");

    const rejected = await POST(request());
    expect(rejected.status).toBe(200);
    expect(await rejected.json()).toEqual({
      ok: true,
      notificationSent: false,
    });
    expect(store.setLeadNotificationStatus).toHaveBeenCalledWith(
      "lead-1",
      "failed",
    );
  });

  it("does not notify or confirm when storage fails", async () => {
    enableLeadCapture();
    approvePrivacy();
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "");
    store.saveLead.mockRejectedValue(new Error("database unavailable"));
    const send = vi.fn();
    vi.stubGlobal("fetch", send);
    const response = await POST(request());
    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({
      error: "lead_intake_unavailable",
    });
    expect(response.headers.get("cache-control")).toBe(
      "no-store, max-age=0",
    );
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects unknown products before contacting Telegram", async () => {
    enableLeadCapture();
    approvePrivacy();
    const send = vi.fn();
    vi.stubGlobal("fetch", send);
    const response = await POST(
      request({ ...payload, itemId: "/internet/UNKNOWN" }),
    );
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "invalid_item" });
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects draft products even when the request has current consent", async () => {
    enableLeadCapture();
    approvePrivacy();
    const send = vi.fn();
    vi.stubGlobal("fetch", send);
    const draftPath = "/goi-cuoc-viettel/FB5K";
    const response = await POST(
      request({
        ...payload,
        itemId: draftPath,
        itemTitle: "FB5K",
        pagePath: draftPath,
      }),
    );
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "invalid_item" });
    expect(store.saveLead).not.toHaveBeenCalled();
    expect(send).not.toHaveBeenCalled();
  });

  it("fails closed before parsing when any publication/intake gate or policy version is invalid", async () => {
    const send = vi.fn();
    vi.stubGlobal("fetch", send);
    const closedCases = [
      ...publicationFlags.map(
        (gate) => [gate, () => vi.stubEnv(gate, "false")] as const,
      ),
      ["LEAD_CAPTURE_ENABLED", () => vi.stubEnv("LEAD_CAPTURE_ENABLED", "false")] as const,
      [
        "PRIVACY_POLICY_VERSION unset",
        () => vi.stubEnv("PRIVACY_POLICY_VERSION", undefined),
      ] as const,
      [
        "PRIVACY_POLICY_VERSION unapproved",
        () => vi.stubEnv("PRIVACY_POLICY_VERSION", "unapproved"),
      ] as const,
      [
        "PRIVACY_POLICY_VERSION malformed",
        () => vi.stubEnv("PRIVACY_POLICY_VERSION", "bad version"),
      ] as const,
    ];

    for (const [gate, close] of closedCases) {
      enableLeadCapture();
      approvePrivacy();
      close();

      const response = await POST(request("{ malformed json"));
      expect(response.status, `${gate}: unavailable`).toBe(503);
      expect(await response.json(), `${gate}: generic error`).toEqual({
        error: "lead_intake_unavailable",
      });
      expect(response.headers.get("cache-control"), `${gate}: no-store`).toBe(
        "no-store, max-age=0",
      );
    }

    expect(store.saveLead).not.toHaveBeenCalled();
    expect(store.setLeadNotificationStatus).not.toHaveBeenCalled();
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects stale consent versions before storing or notifying", async () => {
    enableLeadCapture();
    approvePrivacy("qa-policy-v2");
    const send = vi.fn();
    vi.stubGlobal("fetch", send);

    const response = await POST(request(payload));
    expect(response.status).toBe(409);
    expect(await response.json()).toEqual({
      error: "privacy_policy_version_mismatch",
    });
    expect(response.headers.get("cache-control")).toBe(
      "no-store, max-age=0",
    );
    expect(store.saveLead).not.toHaveBeenCalled();
    expect(send).not.toHaveBeenCalled();
  });

  it("requires affirmative consent and a submitted policy version", async () => {
    enableLeadCapture();
    approvePrivacy();
    const withoutConsent = Object.fromEntries(
      Object.entries(payload).filter(([key]) => key !== "privacyConsent"),
    );
    const withoutVersion = Object.fromEntries(
      Object.entries(payload).filter(([key]) => key !== "privacyPolicyVersion"),
    );

    for (const body of [
      { ...payload, privacyConsent: false },
      withoutConsent,
      withoutVersion,
    ]) {
      const response = await POST(request(body));
      expect(response.status).toBe(400);
      expect(await response.json()).toEqual({ error: "invalid_input" });
    }
    expect(store.saveLead).not.toHaveBeenCalled();
  });

  it("exposes only approved policy configuration and disables caching", async () => {
    enableLeadCapture();
    approvePrivacy();
    vi.stubEnv("PRIVACY_POLICY_APPROVED", "false");
    const unavailable = await getLeadPrivacyConfig();
    expect(unavailable.status).toBe(200);
    expect(await unavailable.json()).toEqual({ available: false });
    expect(unavailable.headers.get("cache-control")).toBe(
      "no-store, max-age=0",
    );

    approvePrivacy();
    expect(privacyPolicyRoute?.status).toBe("ready");
    const available = await getLeadPrivacyConfig();
    expect(await available.json()).toEqual({
      available: true,
      policyVersion,
    });
    expect(available.headers.get("cache-control")).toBe(
      "no-store, max-age=0",
    );

    for (const invalidVersion of [
      undefined,
      "",
      "unapproved",
      "contains spaces",
      "#bad",
    ]) {
      vi.stubEnv("PRIVACY_POLICY_VERSION", invalidVersion);
      expect(await (await getLeadPrivacyConfig()).json()).toEqual({
        available: false,
      });
    }
  });

  it("fails closed when all intake gates are open but the privacy route is draft", async () => {
    approvePrivacy();
    expect(privacyPolicyRoute?.status).toBe("ready");
    setPrivacyPolicyStatus("draft");

    const config = await getLeadPrivacyConfig();
    expect(config.status).toBe(200);
    expect(await config.json()).toEqual({ available: false });
    expect(config.headers.get("cache-control")).toBe("no-store, max-age=0");

    const send = vi.fn();
    vi.stubGlobal("fetch", send);
    const response = await POST(request("{ malformed json"));
    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({
      error: "lead_intake_unavailable",
    });
    expect(response.headers.get("cache-control")).toBe(
      "no-store, max-age=0",
    );
    expect(store.saveLead).not.toHaveBeenCalled();
    expect(store.setLeadNotificationStatus).not.toHaveBeenCalled();
    expect(send).not.toHaveBeenCalled();
  });

  it("requires every exact gate, configured storage, and production Turnstile", async () => {
    for (const gate of [...publicationFlags, "LEAD_CAPTURE_ENABLED"] as const) {
      enableLeadCapture();
      approvePrivacy();
      vi.stubEnv(gate, "false");
      expect(await (await getLeadPrivacyConfig()).json(), gate).toEqual({
        available: false,
      });
    }

    enableLeadCapture();
    approvePrivacy();
    vi.stubEnv("SUPABASE_SECRET_KEY", "");
    expect(await (await getLeadPrivacyConfig()).json()).toEqual({
      available: false,
    });

    approvePrivacy();
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "");
    expect(await (await getLeadPrivacyConfig()).json()).toEqual({
      available: false,
    });
    vi.stubEnv("TURNSTILE_SECRET_KEY", "qa-turnstile-secret");
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "qa-turnstile-site-key");
    expect(await (await getLeadPrivacyConfig()).json()).toEqual({
      available: true,
      policyVersion,
    });
  });
});
