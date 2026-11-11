import { afterEach, expect, it, vi } from "vitest";
import { leadSchema } from "../src/lib/lead-schema";

vi.mock("server-only", () => ({}));
import {
  saveLead,
  setLeadNotificationStatus,
} from "../src/lib/server/lead-store";

const lead = leadSchema.parse({
  name: "Khách thử nghiệm",
  phone: "+84 900 000 000",
  itemId: "/internet/MESHVT01",
  itemTitle: "untrusted client title",
  pagePath: "/internet",
  privacyPolicyVersion: "v1",
});
const consent = { consentAt: null, privacyPolicyVersion: null };

function mockStore() {
  vi.stubEnv("SUPABASE_URL", "https://store.example/");
  vi.stubEnv("SUPABASE_SECRET_KEY", "test-secret");
  const fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

it("requests the inserted ID and stores only trusted title and explicit consent", async () => {
  const fetchMock = mockStore();
  fetchMock.mockResolvedValue(
    Response.json([{ id: "lead-1" }], { status: 201 }),
  );
  await expect(saveLead(lead, "Gói Internet MESHVT01", consent)).resolves.toBe(
    "lead-1",
  );
  expect(fetchMock).toHaveBeenCalledOnce();
  const [url, options] = fetchMock.mock.calls[0];
  expect(url).toBe("https://store.example/rest/v1/leads?select=id");
  expect(options).toMatchObject({
    method: "POST",
    cache: "no-store",
    headers: {
      apikey: "test-secret",
      Prefer: "return=representation",
      "Content-Type": "application/json",
    },
  });
  expect(JSON.parse(options.body)).toEqual({
    name: lead.name,
    phone: lead.phone,
    note: "",
    item_id: "/internet/MESHVT01",
    item_title: "Gói Internet MESHVT01",
    page_path: "/internet",
    attribution: {},
    consent_at: null,
    privacy_policy_version: null,
  });
});

it.each(["http", "network", "json", "empty", "missing-id", "invalid-id"])(
  "rejects an unconfirmed insert: %s",
  async (failure) => {
    const fetchMock = mockStore();
    if (failure === "network")
      fetchMock.mockRejectedValue(new Error("offline"));
    else
      fetchMock.mockResolvedValue(
        failure === "http"
          ? Response.json({ error: "unavailable" }, { status: 503 })
          : failure === "json"
            ? new Response("invalid json")
            : Response.json(
                failure === "empty"
                  ? []
                  : failure === "missing-id"
                    ? [{}]
                    : [{ id: 42 }],
              ),
      );
    await expect(
      saveLead(lead, "Gói Internet MESHVT01", consent),
    ).rejects.toThrow();
    expect(fetchMock).toHaveBeenCalledOnce();
  },
);

it("rejects missing storage credentials without fetching", async () => {
  const fetchMock = mockStore();
  vi.stubEnv("SUPABASE_SECRET_KEY", "");
  await expect(
    saveLead(lead, "Gói Internet MESHVT01", consent),
  ).rejects.toThrow("missing configuration");
  expect(fetchMock).not.toHaveBeenCalled();
});

it.each(["eyJtest.legacy.jwt", "sb_secret_test"])(
  "uses the correct authorization for %s",
  async (key) => {
    const fetchMock = mockStore();
    vi.stubEnv("SUPABASE_SECRET_KEY", key);
    fetchMock.mockResolvedValue(Response.json([{ id: "lead-1" }]));
    await saveLead(lead, "Gói Internet MESHVT01", consent);
    const headers = fetchMock.mock.calls[0][1].headers;
    expect(headers.apikey).toBe(key);
    if (key.startsWith("eyJ"))
      expect(headers.Authorization).toBe(`Bearer ${key}`);
    else expect(headers).not.toHaveProperty("Authorization");
  },
);

it.each(["sent", "failed"] as const)(
  "updates notification status %s for only the inserted ID",
  async (status) => {
    const fetchMock = mockStore();
    fetchMock.mockResolvedValue(new Response(null, { status: 204 }));
    await setLeadNotificationStatus("lead/1", status);
    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe("https://store.example/rest/v1/leads?id=eq.lead%2F1");
    expect(options).toMatchObject({
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
    });
    expect(JSON.parse(options.body)).toEqual({
      telegram_status: status,
      telegram_sent_at: status === "sent" ? expect.any(String) : null,
    });
  },
);
