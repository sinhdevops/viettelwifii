import wardSource from "../../../data/content/internet-wards.json";

export function getSignupWards(
  city: string,
): readonly { name: string; ward_code: string }[] {
  return (
    (
      wardSource.cities as Record<
        string,
        { wards: { name: string; ward_code: string }[] }
      >
    )[city]?.wards ?? []
  );
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
