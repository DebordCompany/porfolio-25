import { FC, PropsWithChildren } from "react";
export interface SeparatorTypes extends PropsWithChildren {
  height?: number;
  className?: string;
}

export const Separator: FC<SeparatorTypes> = ({
  height = 4,
  className = "",
  ...props
}) => {
  const spaces = [
    { id: 1, value: "pt-1" },
    { id: 2, value: "pt-2" },
    { id: 3, value: "pt-4" },
    { id: 4, value: "pt-6" },
    { id: 5, value: "pt-8" },
    { id: 6, value: "pt-12" },
    { id: 7, value: "pt-16" },
    { id: 8, value: "pt-20" },
    { id: 9, value: "pt-24" },
    { id: 10, value: "pt-32" },
  ];
  function getHeight() {
    const result = spaces.find((item) => item.id === height);
    return result?.value;
  }
  return (
    <div {...props} className={`w-full ${getHeight()} ${className}`}></div>
  );
};
