"use client";

import { useState } from "react";

export default function Pre({
  children,
  heigth,
}: {
  children: string;
  heigth?: number;
}) {
  const [copy, setCopy] = useState(false);
  const heigthCode = [{ id: 1, className: "min-h-30" }];
  const minHeigth = heigthCode.find((element) => element.id === heigth);
  function copyText() {
    navigator.clipboard.writeText(children);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 150);
  }
  return (
    <div className={`flex flex-col gap-2 relative`} onClick={copyText}>
      <div
        className={`p-6 bg-neutral-950 rounded-lg shadow-lg overflow-auto min-w-full max-h-96   ${
          heigth ? minHeigth.className : ""
        }`}
      >
        <pre className="h-full">
          <div title="Copy text" className=" absolute -top-4 right-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#f4f4f4"
              className={`size-6 p-1 bg-neutral-950 shadow-md rounded-md transition ease-in duration-75 border-2 border-neutral-100  ${
                copy ? "scale-110 " : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
          </div>
          <code className="text-neutral-50 text-sm">{children}</code>
        </pre>
      </div>
    </div>
  );
}
