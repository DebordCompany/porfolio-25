import { cva, type VariantProps } from "class-variance-authority";
import { FC } from "react";
import cn from "@/lib/utils/components";

export const cardVariants = cva(
  "w-fit overflow-hidden flex flex-col justify-between",
  {
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
      line: {
        small: "border border-neutral-800 dark:border-neutral-100",
        medium: "border-2 border-neutral-800 dark:border-neutral-100",
        big: "border-4 border-neutral-800 dark:border-neutral-100",
      },
    },
  }
);
export interface CardProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}
export const Card: FC<CardProps> = ({
  children,
  className,
  shadow,
  rounded,
  line,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(cardVariants({ className, shadow, rounded, line }))}
    >
      {children}
    </div>
  );
};
