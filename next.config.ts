import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,
  // Lead/QA may use an isolated dev output while another dev process owns .next.
  // Only permit the dedicated local preview path; production keeps .next.
  ...(process.env.VIETTELUP_PREVIEW_ISOLATED === "1"
    ? { distDir: ".next-preview", devIndicators: false }
    : {}),
  // Cache Components are recommended for new Next.js 16.4 applications.
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
