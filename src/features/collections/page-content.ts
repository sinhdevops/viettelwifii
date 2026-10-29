import { siteConfig } from "@/lib/site-config";
import type { PageContent } from "@/lib/content-schema";
import { internetPageContent } from "./internet/page-content";

/** Route metadata; visible sections remain authored in each collection feature. */
export const collectionPageContents: Record<string, PageContent> = {
  "/internet": internetPageContent,
  "/goi-cuoc-gic": {
    status: "ready",
    kind: "collection",
    title: "GIC Viettel là gì? Gói cước dành cho học sinh, sinh viên",
    description: "GIC Viettel là gì? Gói cước dành cho học sinh, sinh viên",
    heading: "Đề bài: GIC là gì?",
    sections: [],
    source: {
      url: siteConfig.url("/goi-cuoc-gic"),
      capturedAt: "2026-10-27T11:26:12.084Z",
      evidencePaths: ["work/web-clone-benchmark/raw/html/0172.html"],
      verifiedFields: ["title", "description", "heading", "path"],
      unverifiedFields: ["tsx-content", "interaction-parity", "visual-parity"],
      notes: [
        "Original HTML SHA256: 186457859dd29929622761f365691267d1e54564136e77319dd7f5359652c201",
      ],
    },
  },
  "/goi-cuoc-nine": {
    status: "ready",
    kind: "collection",
    title: "NINE Viettel – Gói cước trả sau cao cấp, nhiều đặc quyền",
    description: "NINE Viettel – Gói cước trả sau cao cấp, nhiều đặc quyền",
    heading: "NINE Viettel – Gói cước trả sau cao cấp, nhiều đặc quyền",
    sections: [],
    source: {
      url: siteConfig.url("/goi-cuoc-nine"),
      capturedAt: "2026-10-27T11:26:12.084Z",
      evidencePaths: ["work/web-clone-benchmark/raw/html/0173.html"],
      verifiedFields: ["title", "description", "heading", "path"],
      unverifiedFields: ["tsx-content", "interaction-parity", "visual-parity"],
      notes: [
        "Original HTML SHA256: b6772bbc39e7f4da8100ef26c4912413bda39bd893c92af1f7fc2e2bbe450cd7",
      ],
    },
  },
  "/goi-cuoc-roaming": {
    status: "ready",
    kind: "collection",
    title:
      "Gói Data Roaming Viettel – Dùng Internet Khi Ra Nước Ngoài, Không Cần Đổi SIM",
    description:
      "Gói Data Roaming Viettel – Dùng Internet Khi Ra Nước Ngoài, Không Cần Đổi SIM",
    heading: "Gói cước roaming – Dùng Internet khi đi nước ngoài",
    sections: [],
    source: {
      url: siteConfig.url("/goi-cuoc-roaming"),
      capturedAt: "2026-10-27T11:26:12.084Z",
      evidencePaths: ["work/web-clone-benchmark/raw/html/0174.html"],
      verifiedFields: ["title", "description", "heading", "path"],
      unverifiedFields: ["tsx-content", "interaction-parity", "visual-parity"],
      notes: [
        "Original HTML SHA256: 89e90ec9ddb36462dc5eab39c54cf9b7da67ed767a35bbe1d4d995e2351705cd",
      ],
    },
  },
};
