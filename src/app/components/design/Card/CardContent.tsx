import { FC, HtmlHTMLAttributes } from "react";

export interface CardContentTypes extends HtmlHTMLAttributes<HTMLDivElement> {}
export const CardContent: FC<CardContentTypes> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={`p-2 flex flex-col  gap-2 ${className}`}>
      {children}
    </div>
  );
};
