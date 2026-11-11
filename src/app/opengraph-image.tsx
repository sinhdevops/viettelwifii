import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = "Thông tin gói cước Internet và di động";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#ffffff",
        color: "#171717",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          color: "#ed1c24",
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        {siteConfig.hostname}
      </div>
      <div style={{ display: "flex", fontSize: 40, marginTop: 36 }}>
        Internet &amp; di động
      </div>
      <div style={{ display: "flex", fontSize: 28, marginTop: 24 }}>
        Tra cứu thông tin gói cước
      </div>
    </div>,
    size,
  );
}
