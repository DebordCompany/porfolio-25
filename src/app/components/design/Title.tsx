import react, { FC, HTMLAttributes } from "react";

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}
export const Title: FC<TitleProps> = ({
  children,
  level = "h1",
  variant = level,
  className = "",
  ...props
}) => {
  const variants = [
    {
      component: "h1",
      style: "text-3xl leading-10",
    },
    { component: "h2", style: "text-2xl leading-8" },
    { component: "h3", style: "text-xl leading-6" },
    { component: "h4", style: "leading-5 text-base" },
    { component: "h5", style: "leading-5 text-sm" },
    { component: "h6", style: "leading-5 text-xs" },
    { component: "p", style: "leading-5 text-base font-normal" },
  ];
  const variantStyle = variants.find((element) => {
    return element.component === variant;
  });
  if (level === "h1" || "h2" || "h3" || "h4" || "h5" || "h6") {
    return react.createElement(
      level,
      {
        className: `font-bold ${variantStyle?.style} ${className}`,
        ...props,
      },
      children
    );
  } else {
    return react.createElement("h1", null, children);
  }
};
