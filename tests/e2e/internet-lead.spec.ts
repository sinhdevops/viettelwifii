import { expect, test } from "@playwright/test";

const policyVersion = "v1";

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

async function fillMeshForm(page: import("@playwright/test").Page) {
  await page.goto("/internet");
  const card = page
    .locator(".internet-card")
    .filter({ hasText: "MESHVT3" })
    .first();
  const signup = card.getByRole("button", { name: "Đăng ký" });
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
    .fill("0900000000");
  await dialog.getByRole("combobox", { name: "Chọn tỉnh/thành phố" }).click();
  const cityList = dialog.getByRole("listbox", { name: "Chọn tỉnh/thành phố" });
  await expect(cityList).toBeVisible();
  const bounds = await cityList.boundingBox();
  expect(bounds).not.toBeNull();
  expect(bounds!.y).toBeGreaterThanOrEqual(0);
  expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(
    page.viewportSize()!.height,
  );
  await cityList.getByRole("option", { name: "Đà Nẵng" }).click();
  const ward = dialog.getByRole("combobox", { name: "Chọn phường/xã" });
  await ward.click();
  await dialog
    .getByRole("listbox", { name: "Chọn phường/xã" })
    .getByRole("option", { name: "Phường Hải Vân" })
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
  expect(sent?.note).toContain("Đà Nẵng");
  expect(sent?.privacyConsent).toBe(false);
  expect(sent?.privacyPolicyVersion).toBe(policyVersion);
});

test("Internet signup keeps entered data on failed delivery", async ({
  page,
}) => {
  await mockLeadConfig(page);
  await page.route("**/api/leads", (route) =>
    route.fulfill({
      status: 502,
      contentType: "application/json",
      body: JSON.stringify({ error: "delivery_failed" }),
    }),
  );
  const dialog = await fillMeshForm(page);
  await dialog.getByRole("button", { name: "XÁC NHẬN" }).click();
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("textbox", { name: "Nhập họ tên" }),
  ).toHaveValue("Khách thử nghiệm");
  await expect(
    page.getByText("Chưa gửi được đăng ký. Vui lòng thử lại."),
  ).toBeVisible();
});

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
