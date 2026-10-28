/** Public configuration shared by server components and browser code. */
export function parseSiteOrigin(value: string | undefined): string {
  if (!value?.trim()) throw new Error("NEXT_PUBLIC_SITE_URL is required");
  let url: URL;
  try {
    url = new URL(value.trim());
  } catch {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an absolute http(s) origin");
  }
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be an http(s) origin without path or credentials",
    );
  }
  return url.origin;
}

export const siteConfig = {
  get phoneNumber(): string {
    return process.env.NEXT_PUBLIC_PHONE_NUMBER?.trim() || "";
  },
  get phoneHref(): string {
    return `tel:${this.phoneNumber.replace(/[^+\d]/g, "")}`;
  },
  get origin(): string {
    // Keep this direct access so Next can inline NEXT_PUBLIC_ in browser bundles.
    return parseSiteOrigin(process.env.NEXT_PUBLIC_SITE_URL);
  },
  get hostname(): string {
    return new URL(this.origin).hostname;
  },
  url(path = "/"): string {
    if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\"))
      throw new Error("Site URL requires a local absolute path");
    const origin = this.origin;
    const url = new URL(path, origin);
    if (url.origin !== origin)
      throw new Error("Site URL must stay on the configured origin");
    return url.href;
  },
};
