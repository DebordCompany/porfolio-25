import cn from "@/lib/utils/components";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { FC } from "react";

const pillVariants = cva("px-4 py-1 rounded-full  text-sm font-semibold", {
  variants: {
    colors: {
      default: "bg-neutral-800  dark:bg-neutral-50 dark:text-neutral-800",
      primary: "bg-pink-500  text-pink-500",
      secondary: "bg-blue-500 text-blue-500",
      success: "bg-green-500 text-green-500",
      error: "bg-red-500 text-red-500",
      warning: "bg-amber-500 text-amber-500",
    },
    variant: {
      line: "border-current border-2  bg-transparent dark:bg-transparent",
      fill: "text-neutral-50 dark:text-neutral-800",
    },
  },
  defaultVariants: {
    colors: "default",
    variant: "fill",
  },
});

export interface ChipTypes
  extends React.HtmlHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pillVariants> {}
export const Chip: FC<ChipTypes> = ({
  children,
  colors,
  variant,
  ...props
}) => {
  return (
    <span {...props} className={cn(pillVariants({ colors, variant }))}>
      {children}
    </span>
  );
};
