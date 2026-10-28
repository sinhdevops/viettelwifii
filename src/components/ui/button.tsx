import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import styles from "./button.module.css";

export const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      primary: `${styles.control} ${styles.primary}`,
      outline: `${styles.control} ${styles.outline}`,
      ghost: `${styles.control} ${styles.ghost}`,
      package: `${styles.control} ${styles.package}`,
      packageOutline: `${styles.control} ${styles.packageOutline}`,
      unstyled: "",
    },
    size: {
      normal: styles.normal,
      small: styles.small,
      card: styles.card,
      unstyled: "",
    },
  },
  defaultVariants: { variant: "primary", size: "normal" },
});

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;
/** React 19 forwards ref as a prop, including through Radix asChild triggers. */
export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
