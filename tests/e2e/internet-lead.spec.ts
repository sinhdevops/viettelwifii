import { expect, test, type Page } from "@playwright/test";

const policyVersion = "v1";
const successMessage = "Đã gửi đăng ký thành công. Chúng tôi sẽ liên hệ sớm!";
const captchaRequests = new WeakMap<Page, string[]>();

test.beforeEach(async ({ page }, testInfo) => {
  await page.setViewportSize(
    testInfo.project.name === "mobile"
      ? { width: 390, height: 844 }
      : { width: 1440, height: 900 },
  );
  const requests: string[] = [];
  captchaRequests.set(page, requests);
  page.on("request", (request) => {
    if (/challenges\.cloudflare\.com|turnstile|captcha/i.test(request.url()))
      requests.push(request.url());
  });
  // Fail closed: individual submission tests override this with local responses.
  await page.route("**/api/leads", (route) => route.abort("blockedbyclient"));
  await page.route("**/*", (route) => {
    const request = route.request();
    if (
      request.method() === "POST" &&
      new URL(request.url()).hostname !== "localhost"
    )
      return route.abort("blockedbyclient");
    return route.fallback();
  });
});

test.afterEach(async ({ page }) => {
  expect(captchaRequests.get(page)).toEqual([]);
  await expect(
    page.locator(
      'iframe[src*="cloudflare"], .cf-turnstile, [name="cf-turnstile-response"]',
    ),
  ).toHaveCount(0);
});

async function mockLeadConfig(
  page: import("@playwright/test").Page,
  available = true,
) {
  await page.route("**/api/leads/config", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(
        available ? { available: true, policyVersion } : { available: false },
      ),
    }),
  );
}

async function fillMeshForm(
  page: import("@playwright/test").Page,
  code = "MESHVT3",
) {
  await page.goto("/internet");
  const card = page.locator(".internet-card").filter({ hasText: code }).first();
  const signup = card.getByRole("button", { name: "Đăng ký" });
  if (["MESHVT01", "NETVT1"].includes(code)) {
    await expect(
      card.getByRole("link", { name: code, exact: true }),
    ).toHaveAttribute("href", `/internet/${code}`);
  }
  await expect
    .poll(() =>
      signup.evaluate((button) =>
        Object.keys(button).some((key) => key.startsWith("__reactProps$")),
      ),
    )
    .toBe(true);
  await signup.click();
  const dialog = page.getByRole("dialog", { name: "Thông tin đặt mua" });
  await expect(dialog).toBeVisible();
  await expect(
    page.locator(
      'iframe[src*="cloudflare"], .cf-turnstile, [name="cf-turnstile-response"]',
    ),
  ).toHaveCount(0);
  await expect(dialog).toHaveAttribute("data-source-product", code);
  await expect(
    dialog.getByRole("textbox", { name: "Nhập họ tên" }),
  ).toBeVisible();
  await expect(dialog.getByRole("checkbox")).toHaveCount(0);
  await expect(dialog.getByText(/Tôi đồng ý/)).toHaveCount(0);
  await expect(
    dialog.getByRole("link", { name: "Chính sách bảo mật" }),
  ).toHaveCount(0);
  const viewport = page.viewportSize()!;
  if (viewport.width < 640) {
    await expect
      .poll(async () => {
        const bounds = await dialog.boundingBox();
        return bounds
          ? Math.abs(bounds.y + bounds.height - viewport.height)
          : Infinity;
      })
      .toBeLessThan(2);
    expect((await dialog.boundingBox())!.x).toBeCloseTo(0, 0);
  } else {
    await expect
      .poll(async () => {
        const bounds = await dialog.boundingBox();
        return bounds
          ? Math.abs(bounds.y + bounds.height / 2 - viewport.height / 2)
          : Infinity;
      })
      .toBeLessThan(2);
  }
  const closeButton = dialog.getByRole("button", { name: "ĐÓNG", exact: true });
  expect(
    await closeButton.evaluate((button) => {
      const bounds = button.getBoundingClientRect();
      return document.elementFromPoint(bounds.x + 35, bounds.y + 1) === button;
    }),
  ).toBe(true);
  await expect(dialog.getByText("Bản xem trước")).toHaveCount(0);
  await dialog
    .getByRole("textbox", { name: "Nhập họ tên" })
    .fill("Khách thử nghiệm");
  await dialog
    .getByRole("textbox", { name: "Nhập số điện thoại" })
    .fill("+84 900 000 000");
  await dialog.getByRole("combobox", { name: "Chọn tỉnh/thành phố" }).click();
  const cityList = dialog.getByRole("listbox", { name: "Chọn tỉnh/thành phố" });
  await expect(cityList).toBeVisible();
  const bounds = await cityList.boundingBox();
  expect(bounds).not.toBeNull();
  expect(bounds!.y).toBeGreaterThanOrEqual(0);
  expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(
    page.viewportSize()!.height,
  );
  await cityList.getByRole("option", { name: "Cà Mau", exact: true }).click();
  const ward = dialog.getByRole("combobox", { name: "Chọn phường/xã" });
  await ward.click();
  await dialog
    .getByRole("listbox", { name: "Chọn phường/xã" })
    .getByRole("option", { name: "Phường Bạc Liêu", exact: true })
    .click();
  await dialog
    .getByRole("textbox", { name: "Nhập địa chỉ" })
    .fill("Kiệt 1 đường xóm bầu");
  return dialog;
}

test.setTimeout(90_000);

// Real config endpoint; never submit real personal data or contact external services.
test("Internet signup form opens without deployment approval flags", async ({
  page,
}) => {
  const response = await page.request.get("/api/leads/config");
  expect(response.ok()).toBe(true);
  expect(await response.json()).toMatchObject({ available: true });
  await page.goto("/internet");
  const signup = page
    .locator(".internet-card")
    .filter({ hasText: "MESHVT3" })
    .first()
    .getByRole("button", { name: "Đăng ký" });
  await expect
    .poll(() =>
      signup.evaluate((button) =>
        Object.keys(button).some((key) => key.startsWith("__reactProps$")),
      ),
    )
    .toBe(true);
  await signup.click();
  const dialog = page.getByRole("dialog", { name: "Thông tin đặt mua" });
  await expect(
    dialog.getByRole("textbox", { name: "Nhập họ tên" }),
  ).toBeVisible();
  await expect(
    dialog.getByRole("textbox", { name: "Nhập số điện thoại" }),
  ).toBeVisible();
  await expect(
    dialog.getByRole("combobox", { name: "Chọn tỉnh/thành phố" }),
  ).toBeVisible();
});

test("Missing storage keeps entered form data and never reports success", async ({
  page,
}) => {
  await mockLeadConfig(page);
  await page.route("**/api/leads", (route) =>
    route.fulfill({
      status: 503,
      contentType: "application/json",
      body: JSON.stringify({ error: "lead_storage_unconfigured" }),
    }),
  );
  const dialog = await fillMeshForm(page);
  await dialog.getByRole("button", { name: "XÁC NHẬN" }).click();
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("textbox", { name: "Nhập họ tên" }),
  ).toHaveValue("Khách thử nghiệm");
  await expect(
    page.getByText(
      "Chưa cấu hình nơi nhận đăng ký. Vui lòng gọi hotline để được hỗ trợ; thông tin chưa được gửi.",
    ),
  ).toBeVisible();
  await expect(
    dialog.getByRole("textbox", { name: "Nhập số điện thoại" }),
  ).toHaveValue("+84 900 000 000");
  await expect(
    dialog.getByRole("textbox", { name: "Nhập địa chỉ" }),
  ).toHaveValue("Kiệt 1 đường xóm bầu");
  await expect(
    dialog.getByRole("combobox", { name: "Chọn tỉnh/thành phố" }),
  ).toContainText("Cà Mau");
  await expect(
    dialog.getByRole("combobox", { name: "Chọn phường/xã" }),
  ).toContainText("Phường Bạc Liêu");
  await expect(page.getByText(successMessage)).toHaveCount(0);
});

test("Internet dropdown supports keyboard selection and Escape", async ({
  page,
}) => {
  await mockLeadConfig(page);
  await page.goto("/internet");
  const signup = page
    .locator(".internet-card")
    .filter({ hasText: "MESHVT3" })
    .first()
    .getByRole("button", { name: "Đăng ký" });
  await expect
    .poll(() =>
      signup.evaluate((button) =>
        Object.keys(button).some((key) => key.startsWith("__reactProps$")),
      ),
    )
    .toBe(true);
  await signup.click();
  const dialog = page.getByRole("dialog", { name: "Thông tin đặt mua" });
  const city = dialog.getByRole("combobox", { name: "Chọn tỉnh/thành phố" });
  await city.focus();
  await city.press("ArrowDown");
  await expect(
    dialog.getByRole("listbox", { name: "Chọn tỉnh/thành phố" }),
  ).toBeVisible();
  await city.press("End");
  await city.press("Enter");
  await expect(city).toContainText("Vĩnh Long");
  await city.press("ArrowDown");
  await city.press("Escape");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("listbox", { name: "Chọn tỉnh/thành phố" }),
  ).toBeHidden();
});

test("Internet signup shows success only after API confirmation", async ({
  page,
}) => {
  await mockLeadConfig(page);
  let sent: Record<string, unknown> | undefined;
  await page.route("**/api/leads", async (route) => {
    sent = route.request().postDataJSON() as Record<string, unknown>;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true, notificationSent: true }),
    });
  });
  const dialog = await fillMeshForm(page);
  await dialog.getByRole("button", { name: "XÁC NHẬN" }).click();
  await expect(dialog).toBeHidden();
  await expect(
    page.getByText("Đã gửi đăng ký thành công. Chúng tôi sẽ liên hệ sớm!"),
  ).toBeVisible();
  expect(sent?.itemId).toBe("/internet/MESHVT3");
  expect(sent?.pagePath).toBe("/internet");
  expect(sent?.note).toContain("Cà Mau");
  expect(sent?.privacyConsent).toBe(false);
  expect(sent?.privacyPolicyVersion).toBe(policyVersion);
});

for (const [code, notification] of [
  ["MESHVT01", {}],
  ["NETVT1", { notificationSent: false }],
] as const) {
  test(`Internet Link-title card preserves ${code} and succeeds without Telegram confirmation`, async ({
    page,
  }, testInfo) => {
    await mockLeadConfig(page);
    let sent: Record<string, unknown> | undefined;
    await page.route("**/api/leads", async (route) => {
      sent = route.request().postDataJSON() as Record<string, unknown>;
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true, ...notification }),
      });
    });
    const dialog = await fillMeshForm(page, code);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({
      path: `reports/qa/lead-nocaptcha/${testInfo.project.name}-${code}-filled.png`,
    });
    await dialog.getByRole("button", { name: "XÁC NHẬN" }).click();
    await expect(dialog).toBeHidden();
    await expect(page.getByText(successMessage)).toBeVisible();
    expect(sent?.itemId).toBe(`/internet/${code}`);
    expect(sent?.itemTitle).toBe(code);
    expect(sent?.pagePath).toBe("/internet");
    expect(sent?.phone).toBe("+84 900 000 000");
    expect(sent?.note).toContain("Phường Bạc Liêu, Cà Mau");
    expect(sent).not.toHaveProperty("turnstileToken");
    expect(
      Object.keys(sent!).some((key) => /captcha|turnstile/i.test(key)),
    ).toBe(false);
    await page.screenshot({
      path: `reports/qa/lead-nocaptcha/${testInfo.project.name}-${code}-success.png`,
    });
  });
}

test("Internet tablet waits for saved response and prevents duplicate submit", async ({
  page,
}) => {
  await page.setViewportSize({ width: 768, height: 900 });
  await mockLeadConfig(page);
  let release!: () => void;
  const ready = new Promise<void>((resolve) => {
    release = resolve;
  });
  let posts = 0;
  await page.route("**/api/leads", async (route) => {
    posts += 1;
    await ready;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true }),
    });
  });
  const dialog = await fillMeshForm(page, "NETVT1");
  try {
    await dialog.getByRole("button", { name: "XÁC NHẬN" }).click();
    const pending = dialog.getByRole("button", { name: "ĐANG GỬI…" });
    await expect(pending).toBeDisabled();
    await dialog
      .getByRole("textbox", { name: "Nhập số điện thoại" })
      .press("Enter");
    await expect.poll(() => posts).toBe(1);
    await expect(dialog).toBeVisible();
    await expect(page.getByText(successMessage)).toHaveCount(0);
  } finally {
    release();
  }
  await expect(dialog).toBeHidden();
  await expect(page.getByText(successMessage)).toBeVisible();
  expect(posts).toBe(1);
});

for (const [status, error, message] of [
  [502, "delivery_failed", "Chưa gửi được đăng ký. Vui lòng thử lại."],
  [
    503,
    "lead_intake_unavailable",
    "Biểu mẫu tạm thời chưa khả dụng. Vui lòng quay lại sau.",
  ],
] as const) {
  test(`Internet signup keeps entered data on ${error}`, async ({ page }) => {
    await mockLeadConfig(page);
    await page.route("**/api/leads", (route) =>
      route.fulfill({
        status,
        contentType: "application/json",
        body: JSON.stringify({ error }),
      }),
    );
    const dialog = await fillMeshForm(page);
    await dialog.getByRole("button", { name: "XÁC NHẬN" }).click();
    await expect(dialog).toBeVisible();
    await expect(
      dialog.getByRole("textbox", { name: "Nhập họ tên" }),
    ).toHaveValue("Khách thử nghiệm");
    await expect(page.getByText(message)).toBeVisible();
    await expect(
      dialog.getByRole("textbox", { name: "Nhập số điện thoại" }),
    ).toHaveValue("+84 900 000 000");
    await expect(
      dialog.getByRole("textbox", { name: "Nhập địa chỉ" }),
    ).toHaveValue("Kiệt 1 đường xóm bầu");
    await expect(
      dialog.getByRole("combobox", { name: "Chọn tỉnh/thành phố" }),
    ).toContainText("Cà Mau");
    await expect(
      dialog.getByRole("combobox", { name: "Chọn phường/xã" }),
    ).toContainText("Phường Bạc Liêu");
    await expect(
      dialog.getByRole("button", { name: "XÁC NHẬN" }),
    ).toBeEnabled();
    await expect(page.getByText(successMessage)).toHaveCount(0);
  });
}

test("Internet signup hides personal-data fields when intake is unavailable", async ({
  page,
}) => {
  await mockLeadConfig(page, false);
  await page.goto("/internet");
  const signup = page
    .locator(".internet-card")
    .filter({ hasText: "MESHVT3" })
    .first()
    .getByRole("button", { name: "Đăng ký" });
  await expect
    .poll(() =>
      signup.evaluate((button) =>
        Object.keys(button).some((key) => key.startsWith("__reactProps$")),
      ),
    )
    .toBe(true);
  await signup.click();
  const dialog = page.getByRole("dialog", { name: "Thông tin đặt mua" });
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByText("Biểu mẫu tạm thời chưa khả dụng. Vui lòng quay lại sau."),
  ).toBeVisible();
  await expect(
    dialog.getByRole("textbox", { name: "Nhập họ tên" }),
  ).toHaveCount(0);
  await expect(
    dialog.getByRole("textbox", { name: "Nhập số điện thoại" }),
  ).toHaveCount(0);
});

test("Internet signup waits for config before showing the modal", async ({
  page,
}) => {
  let releaseConfig!: () => void;
  const configReady = new Promise<void>((resolve) => {
    releaseConfig = resolve;
  });
  await page.route("**/api/leads/config", async (route) => {
    await configReady;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ available: true, policyVersion }),
    });
  });
  await page.goto("/internet");
  const signup = page
    .locator(".internet-card")
    .filter({ hasText: "MESHVT3" })
    .first()
    .getByRole("button", { name: "Đăng ký" });
  await expect
    .poll(() =>
      signup.evaluate((button) =>
        Object.keys(button).some((key) => key.startsWith("__reactProps$")),
      ),
    )
    .toBe(true);
  await signup.click();
  const dialog = page.getByRole("dialog", { name: "Thông tin đặt mua" });
  try {
    await expect(signup).toHaveAttribute("aria-busy", "true");
    await expect(dialog).toHaveCount(0);
  } finally {
    releaseConfig();
  }
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("textbox", { name: "Nhập họ tên" }),
  ).toBeVisible();
  await expect(
    dialog.getByText("Đang kiểm tra khả năng gửi đăng ký…"),
  ).toHaveCount(0);
});

test("Internet signup submits without a checkbox or implied policy acceptance", async ({
  page,
}) => {
  await mockLeadConfig(page);
  let postCount = 0;
  let sent: Record<string, unknown> | undefined;
  await page.route("**/api/leads", async (route) => {
    postCount += 1;
    sent = route.request().postDataJSON() as Record<string, unknown>;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true, notificationSent: true }),
    });
  });

  const dialog = await fillMeshForm(page);
  const submit = dialog.getByRole("button", { name: "XÁC NHẬN" });
  await expect(submit).toBeEnabled();
  expect(postCount).toBe(0);
  await submit.click();
  await expect(dialog).toBeHidden();
  expect(postCount).toBe(1);
  expect(sent?.privacyConsent).toBe(false);
  expect(sent?.privacyPolicyVersion).toBe(policyVersion);
});
