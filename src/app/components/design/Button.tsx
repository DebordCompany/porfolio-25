"use client";
import { ButtonHTMLAttributes, FC } from "react";
import cn from "@/lib/utils/components";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("px-6 py-2 uppercase shadow-xl transition-all", {
  variants: {
    colors: {
      default: "bg-yellow-500",
      primary: "bg-neutral-400",
    },
    variant: {
      outline:
        "border border-yellow-500 text-yellow-500 hover:bg-yellow-400 hover:shadow-none hover:text-neutral-800  bg-transparent shadow-vintage",
      basic: "rounded-none",
      rounded: "rounded-lg",
      pill: "rounded-full",
    },
  },
  defaultVariants: {
    colors: "default",
    variant: "basic",
  },
});
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  click?: (item) => void;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  colors,
  variant,
  click,
  ...props
}) => {
  function handlerClick(item) {
    click(item);
  }
  return (
    <button
      {...props}
      onClick={(item) => handlerClick(item.target)}
      className={cn(buttonVariants({ className, colors, variant }))}
    >
      {children}
    </button>
  );
};
export default Button;
