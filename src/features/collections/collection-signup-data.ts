export type SignupWard = { name: string; ward_code: string };

/** Keep in sync with wardCitySlug() in scripts/content/split-internet-wards.mjs. */
export function wardCitySlug(city: string): string {
  return city
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[đĐ]/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const wardCache = new Map<string, Promise<readonly SignupWard[]>>();

/**
 * Wards are static per-city files generated from data/content/internet-wards.json
 * (scripts/content/split-internet-wards.mjs), fetched only for the chosen city.
 */
export function loadSignupWards(city: string): Promise<readonly SignupWard[]> {
  if (!(signupCities as readonly string[]).includes(city))
    return Promise.resolve([]);
  let pending = wardCache.get(city);
  if (!pending) {
    pending = fetch(`/data/internet-wards/${wardCitySlug(city)}.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`Ward list ${response.status}`);
        return response.json() as Promise<SignupWard[]>;
      })
      .catch((error: unknown) => {
        wardCache.delete(city); // allow a retry on the next selection
        throw error;
      });
    wardCache.set(city, pending);
  }
  return pending;
}

/** Captured from the open /internet source dialog (COLLECTION-CTA-02). */
export const signupCities = [
  "An Giang",
  "Cà Mau",
  "Cần Thơ",
  "Cao Bằng",
  "Bắc Ninh",
  "Đà Nẵng",
  "Đắk Lắk",
  "Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Lai Châu",
  "Lào Cai",
  "Lạng Sơn",
  "Gia Lai",
  "Hà Nội",
  "Hải Phòng",
  "Hà Tĩnh",
  "Hồ Chí Minh",
  "Huế",
  "Hưng Yên",
  "Khánh Hòa",
  "Lâm Đồng",
  "Nghệ An",
  "Ninh Bình",
  "Phú Thọ",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sơn La",
  "Tây Ninh",
  "Tuyên Quang",
  "Thái Nguyên",
  "Thanh Hóa",
  "Vĩnh Long",
] as const;

export type SignupSelection = {
  code?: string;
  smsHref?: string;
  region?: string;
  price?: string;
};

/** Read only the clicked source card. Never substitute a different product. */
export function readSignupSelection(
  button: HTMLButtonElement,
  pagePath: string,
): SignupSelection {
  let card: HTMLElement | null = button.parentElement;
  while (card && !card.matches("main, article, body")) {
    if (pagePath === "/goi-cuoc-gic") {
      const sms = card.querySelector<HTMLAnchorElement>('a[href^="sms:"]');
      if (sms) {
        const href = sms.getAttribute("href") ?? "";
        const body = href.split("body=")[1];
        if (body)
          return {
            code: decodeURIComponent(body).replace(/ UP$/, ""),
            smsHref: href,
          };
      }
    } else if (
      pagePath === "/internet" &&
      card.classList.contains("internet-card")
    ) {
      return {
        code: card.querySelector(".border-l-2")?.textContent?.trim(),
        region:
          card
            .querySelector('[role="radio"][aria-checked="true"]')
            ?.getAttribute("value") ?? undefined,
        price: [...card.querySelectorAll("p")]
          .find((p) => p.textContent?.includes("đ/tháng"))
          ?.textContent?.trim(),
      };
    } else if (pagePath === "/goi-cuoc-nine") {
      const title = card.querySelector(".font-beausans.font-bold");
      if (title) return { code: title.textContent?.trim() };
    }
    card = card.parentElement;
  }
  return {};
}
