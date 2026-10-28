import { siteConfig } from "@/lib/site-config";
import type { PageContent } from "@/lib/content-schema";

/** /internet owns its metadata here; visible sections are authored in internet-collection.tsx. */
export const internetPageContent: PageContent = {
  status: "draft",
  kind: "collection",
  title: "Internet Viettel - WiFi Cáp Quang Nhanh, Ổn Định, Giá Tốt",
  description: "Internet Viettel - WiFi Cáp Quang Nhanh, Ổn Định, Giá Tốt",
  heading: "Trải nghiệm Internet không giới hạnTừ 195.000đ/tháng",
  sections: [],
  source: {
    url: siteConfig.url("/internet"),
    capturedAt: "2026-10-27T11:26:12.084Z",
    evidencePaths: ["work/web-clone-benchmark/raw/html/0171.html"],
    verifiedFields: ["title", "description", "heading", "path"],
    unverifiedFields: ["tsx-content", "interaction-parity", "visual-parity"],
    notes: ["Original HTML SHA256: 6e847c84a8e86cff66ff8869f562f46e2d2b0fe5abfb1b3fe888a8feb85ebe77"],
  },
};
