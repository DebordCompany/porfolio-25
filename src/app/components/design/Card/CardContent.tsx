import cn from "@/lib/utils/components";
import { FC, HtmlHTMLAttributes } from "react";

export interface CardContentTypes extends HtmlHTMLAttributes<HTMLDivElement> {}
export const CardContent: FC<CardContentTypes> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn("flex flex-col ", className)}>
      {children}
    </div>
  );
};
