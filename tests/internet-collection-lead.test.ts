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

const payload = {
  name: "Khách thử nghiệm",
  phone: "0900000000",
  note: "Địa chỉ thử nghiệm, Đà Nẵng",
  itemId: "/internet/MESHVT3",
  itemTitle: "MESHVT3",
  pagePath: "/internet",
  attribution: {},
  company: "",
  turnstileToken: "",
};

function request(body = payload) {
  return new NextRequest("http://localhost:3000/api/leads", {
    method: "POST",
    headers: {
      origin: "http://localhost:3000",
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.clearAllMocks();
});

describe("Internet collection lead delivery", () => {
  it("stores before Telegram and retains a saved lead when notification fails", async () => {
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
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "");
    store.saveLead.mockRejectedValue(new Error("database unavailable"));
    const send = vi.fn();
    vi.stubGlobal("fetch", send);
    const response = await POST(request());
    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({ error: "storage_failed" });
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects unknown products before contacting Telegram", async () => {
    const send = vi.fn();
    vi.stubGlobal("fetch", send);
    const response = await POST(
      request({ ...payload, itemId: "/internet/UNKNOWN" }),
    );
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "invalid_item" });
    expect(send).not.toHaveBeenCalled();
  });
});
