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
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
