import { FC, HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Text: FC<HtmlHTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p {...props} className={twMerge("text-pretty", className)}>
      {children}
    </p>
  );
};
export default Text;
