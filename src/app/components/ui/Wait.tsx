import { FC } from "react";
import LoadingDots from "./Animations/LoadingDots";

export default function Wait({
  message,
  button,
  buttonText,
  animation,
}: {
  message?: string;
  button?: () => void;
  buttonText?: string;
  animation?: boolean;
}) {
  function buttonEmiter() {
    button();
  }
  return (
    <>
      <div className="w-full h-dvh bg-opacity-30 bg-neutral-800 fixed top-0 left-0 flex justify-center items-center z-30">
        <div className="p-10 bg-neutral-50 dark:bg-neutral-800 shadow-2xl">
          <p className="text-xl">{message}</p>
          {button && (
            <button
              onClick={buttonEmiter}
              className="bg-white px-4 py-2 text-sm text-neutral-800 mt-4"
            >
              {buttonText}
            </button>
          )}
          {animation && <LoadingDots />}
        </div>
      </div>
    </>
  );
}
