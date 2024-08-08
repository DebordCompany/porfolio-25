"use client";
import { useState } from "react";
import { getColor } from "@/lib/utils/primaryColors";
export default function Button({
  children,
  rounded = false,
  outline = false,
  colors = "primary",
  click,
}) {
  const [clickAnimation, setClickAnimation] = useState(false);
  function handleClick(event) {
    if (click) click(event);
    setClickAnimation(true);
    setTimeout(() => {
      setClickAnimation(false);
    }, 150);
  }
  const color = getColor(colors);
  console.log(color);
  const round = "rounded-full";
  const outlined = `border`;
  const animated = `bg-inherit ]`;
  return (
    <button
      style={{ color: color, backgroundColor: color }}
      onClick={handleClick}
      className={`px-6 py-2 uppercase transition-all border-inherit
          ${clickAnimation && outline ? animated : ""}
          ${rounded ? round : ""}
          ${outline ? outlined : ""}
          `}
    >
      {children}
    </button>
  );
}
