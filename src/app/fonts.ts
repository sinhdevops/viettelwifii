import localFont from "next/font/local";

export const sourceFont = localFont({
  src: [
    {
      path: "../../public/assets/fpt/shared/sf-pro-display-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fpt/shared/sf-pro-display-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fpt/shared/sf-pro-display-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fpt/shared/sf-pro-display-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-site",
});
