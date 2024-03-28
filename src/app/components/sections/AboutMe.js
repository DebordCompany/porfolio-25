"use client";
import { useState } from "react";

export function AboutMe({ aboutMe }) {
  const [show, setShow] = useState(true);
  function showMore() {
    setShow(!show);
  }
  return (
    <>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-3 my-4 md:h-fit  text-ellipsis ${
          !show ? "" : "h-40 overflow-hidden"
        }`}
      >
        {aboutMe.map((element) => {
          return <p key={element}>{element}</p>;
        })}
      </div>
      <button
        className={`underline md:hidden ${show ? "" : "hidden"}`}
        onClick={showMore}
      >
        ver más...
      </button>
    </>
  );
}
