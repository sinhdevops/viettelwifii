import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ViettelWiFii.vn",
    short_name: "ViettelWiFii",
    description: "Tra cứu thông tin gói cước Internet và di động.",
    lang: "vi",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ed1c24",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
