import { cva, type VariantProps } from "class-variance-authority";
import { FC } from "react";
import cn from "@/lib/utils/components";

export const cardMediaVariants = cva("w-full object-cover", {
  variants: {
    rounded: {
      small: "rounded",
      medium: "rounded-md",
      big: "rounded-lg",
      extra: "rounded-xl",
    },
    ratio: {
      square: "aspect-square",
      scene: "aspect-video",
      reel: "aspect-[9/16]",
    },
  },
  defaultVariants: {
    ratio: "scene",
  },
});
export interface CardMediaProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof cardMediaVariants> {
  height?: number;
}
export const CardMedia: FC<CardMediaProps> = ({
  children,
  className,
  rounded,
  ratio,
  height,
  ...props
}) => {
  return (
    <img
      {...props}
      className={cn(cardMediaVariants({ className, rounded, ratio }))}
      style={{ height: `${height}px` }}
    />
  );
};
