import { HtmlHTMLAttributes, FC } from "react";

interface Arrow extends HtmlHTMLAttributes<SVGSVGElement> {
  transform?: boolean;
}

const RightArrow: FC<Arrow> = ({ transform, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`size-4 transition-all ${
        transform ? "rotate-90" : "rotate-0"
      } `}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};
export default RightArrow;
