"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import styles from "./sheet.module.css";

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetPortal = DialogPrimitive.Portal;
export const SheetClose = DialogPrimitive.Close;
export const SheetTitle = DialogPrimitive.Title;
export const SheetDescription = DialogPrimitive.Description;

export function SheetOverlay({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(styles.overlay, className)}
      {...props}
    />
  );
}

export function SheetContent({
  className,
  mobileSide = "bottom",
  ...props
}: ComponentProps<typeof DialogPrimitive.Content> & {
  mobileSide?: "bottom" | "center";
}) {
  return (
    <DialogPrimitive.Content
      className={cn(
        styles.content,
        mobileSide === "bottom" ? styles.bottom : styles.center,
        className,
      )}
      {...props}
    />
  );
}
