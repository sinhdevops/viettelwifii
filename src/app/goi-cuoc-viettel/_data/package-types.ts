import type { RelatedPackageId } from "./related-package-data";

/** Literal source values; no inferred pricing, allowances or CTA destinations. */
export type PackageStat = { label: string; icon: string; iconAlt: string } & (
  | { kind: "price" | "validity" | "data"; value: string }
  | { kind: "sms"; command: string; connector: string; recipient: string }
);
export type PackageCta = {
  channel: "sms" | "money" | "contact";
  itemPath: string;
  desktopLabel: string;
  mobileLabel: string;
  mobileHref: string;
};
export type RelatedPackage = {
  code: string;
  path: string;
  allowance: {
    kind: "data" | "social";
    value: string;
    period: string;
    description: string;
  };
  benefits: {
    paragraphs: readonly string[];
    largeText: boolean;
    icons: readonly { name: string; src: string }[];
    note?: string;
  };
  price: { amount: string; period: string };
  cta: {
    itemPath: string;
    desktopLabel: string;
    mobileLabel: string;
    mobileHref: string;
    variant: "registration" | "postpaid-contact";
  };
};
export type PackagePageRecord = {
  code: string;
  postpaid: boolean;
  titlePrefix: string;
  description?: string;
  stats: readonly PackageStat[];
  cta: PackageCta;
  mobilePrice: { amount: string; period: string };
  related: readonly RelatedPackageId[];
};
