import cn from "@/lib/utils/components";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { FC } from "react";

const pillVariants = cva(
  "px-4 py-1 rounded-full text-neutral-50 text-sm font-semibold",
  {
    variants: {
      colors: {
        default: "bg-neutral-800  dark:bg-neutral-50 dark:text-neutral-800",
        primary: "bg-pink-500  ",
        secondary: "bg-blue-500 ",
        success: "bg-green-500 ",
        error: "bg-red-500 ",
        warning: "bg-amber-500 ",
      },
    },
    defaultVariants: {
      colors: "default",
    },
  }
);

export interface ChipTypes
  extends React.HtmlHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pillVariants> {}
export const Chip: FC<ChipTypes> = ({ children, colors, ...props }) => {
  return (
    <span {...props} className={cn(pillVariants({ colors }))}>
      {children}
    </span>
  );
};
