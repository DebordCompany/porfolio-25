import { cva, type VariantProps } from "class-variance-authority";
import { FC } from "react";
import cn from "@/lib/utils/components";

export const cardVariants = cva("w-fit ", {
  variants: {
    rounded: {
      small: "rounded",
      medium: "rounded-md",
      big: "rounded-lg",
      extra: "rounded-xl",
    },
    shadow: {
      small: "shadow-sm",
      medium: "shadow-md",
      big: "shadow-lg",
      extra: "shadow-xl",
      vintage:
        "border-2 border-current bg-transparent dark:bg-transparent shadow-vintage",
    },
  },
});
export interface CardProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}
export const Card: FC<CardProps> = ({
  children,
  className,
  shadow,
  rounded,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(cardVariants({ className, shadow, rounded }))}
    >
      {children}
    </div>
  );
};
