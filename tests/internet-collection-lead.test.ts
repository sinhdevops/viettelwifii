import { afterEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

vi.mock("server-only", () => ({}));
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
});

describe("Internet collection lead delivery", () => {
  it("only confirms success after Telegram accepts the message", async () => {
    vi.stubEnv("TELEGRAM_BOT_TOKEN", "test-token");
    vi.stubEnv("TELEGRAM_CHAT_ID", "test-chat");
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "");
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
    expect(await accepted.json()).toEqual({ ok: true });
    expect(send.mock.calls[0][0]).toBe(
      "https://api.telegram.org/bottest-token/sendMessage",
    );
    expect(JSON.parse(send.mock.calls[0][1].body).text).toContain("MESHVT3");

    const rejected = await POST(request());
    expect(rejected.status).toBe(502);
    expect(await rejected.json()).toEqual({ error: "delivery_failed" });
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
