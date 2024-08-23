"use client";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cn from "@/lib/utils/components";
import { cva, type VariantProps } from "class-variance-authority";
import { Span } from "next/dist/trace";

const buttonVariants = cva(
  "px-6 py-1 uppercase transition-all flex gap-2 items-center hover:scale-[1.03] text-[14px]",
  {
    variants: {
      colors: {
        default:
          "bg-neutral-800 text-neutral-800 dark:bg-neutral-50 dark:text-neutral-50",
        white: "bg-neutral-50 text-neutral-800",

        primary: "bg-pink-500  text-pink-500",
        secondary: "bg-blue-500  text-blue-500",
        success: "bg-green-500  text-green-500",
        error: "bg-red-500  text-red-500",
        warning: "bg-amber-500  text-amber-500",
      },
      variant: {
        line: "border-current border-2  bg-transparent dark:bg-transparent",
        basic: "rounded-none border-none bg-transparent dark:bg-transparent",
        fill: "text-neutral-50 dark:text-neutral-50",
        vintage:
          "border-2 border-current hover:shadow-none bg-transparent dark:bg-transparent shadow-vintage",
      },
      rounded: {
        small: "rounded",
        medium: "rounded-md",
        big: "rounded-lg",
        extra: "rounded-xl",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      colors: "default",
      variant: "basic",
    },
  }
);
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode;
  link?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  colors,
  variant,
  rounded,
  icon,
  link,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ className, variant, colors, rounded }))}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
};
export default Button;
