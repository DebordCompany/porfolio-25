import cn from "@/lib/utils/components";
import { cva, type VariantProps } from "class-variance-authority";
import { FC, HtmlHTMLAttributes } from "react";

export interface CardSpacingTypes
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardSpacingVariants> {}

const cardSpacingVariants = cva("", {
  variants: {
    spacing: {
      small: "p-2",
      medium: "p-3",
      big: "p-4",
    },
  },
  defaultVariants: {
    spacing: "medium",
  },
});

export const CardSpacing: FC<CardSpacingTypes> = ({
  children,
  spacing,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn(cardSpacingVariants({ spacing, className }))}>
      {children}
    </div>
  );
};
