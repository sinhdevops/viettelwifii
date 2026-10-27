import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const variants = cva("inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 disabled:opacity-50", {
  variants: {
    variant: { primary: "bg-rose-600 px-4 py-2 text-white hover:bg-rose-700", outline: "border border-neutral-300 bg-white px-4 py-2 hover:bg-neutral-100", ghost: "px-3 py-2 hover:bg-neutral-100" },
    size: { normal: "min-h-11 text-sm", small: "min-h-9 text-sm" },
  },
  defaultVariants: { variant: "primary", size: "normal" },
});

type Props = React.ComponentProps<"button"> & VariantProps<typeof variants>;
export function Button({ variant, size, className, ...props }: Props) {
  return <button className={cn(variants({ variant, size }), className)} {...props} />;
}
