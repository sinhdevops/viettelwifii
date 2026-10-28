"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useId } from "react";
import styles from "./internet-region-picker.module.css";

export type InternetRegion = "HN-HCM" | "Other";

type InternetRegionPickerProps = {
  capitalRadioId: string;
  regionalRadioId: string;
  value: InternetRegion;
  onValueChange: (value: InternetRegion) => void;
};

export function InternetRegionPicker({
  capitalRadioId,
  regionalRadioId,
  value,
  onValueChange,
}: InternetRegionPickerProps) {
  // Camera cards exist in both mobile and desktop trees at the same time.
  const instanceId = useId();
  const capitalId = `${capitalRadioId}-${instanceId}`;
  const regionalId = `${regionalRadioId}-${instanceId}`;

  return (
    <RadioGroup
      aria-label="Khu vực lắp đặt"
      orientation="horizontal"
      dir="ltr"
      value={value}
      onValueChange={(region) => {
        if (region === "HN-HCM" || region === "Other") onValueChange(region);
      }}
      data-shadcn-region=""
      className={styles.group}
    >
      <div className={styles.option}>
        <RadioGroupItem id={capitalId} value="HN-HCM" />
        <label className={styles.label} htmlFor={capitalId}>
          HN &amp; TP.HCM
        </label>
      </div>
      <div className={styles.option}>
        <RadioGroupItem id={regionalId} value="Other" />
        <label className={styles.label} htmlFor={regionalId}>
          Tỉnh/TP khác
        </label>
      </div>
    </RadioGroup>
  );
}
