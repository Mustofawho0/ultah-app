"use client";

import { useState } from "react";
import { LaunchCountdown } from "@/containers/LaunchCountdown";
import { Texts } from "@/components/Text";

export default function Home() {
  const [finished, setFinished] = useState(false);

  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center font-sans">
        {/* Countdown */}
        <div
          className={`absolute transition-all duration-1000 ease-in-out
        ${
          finished
            ? "opacity-0 scale-95 pointer-events-none"
            : "opacity-100 scale-100"
        }
        `}
        >
          <div className="flex space-x-9">
            <LaunchCountdown onComplete={() => setFinished(true)} />
          </div>
        </div>

        {/* Button */}
        <div
          className={`flex flex-col items-center justify-center absolute transition-all duration-1000 ease-in-out
        ${
          finished
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }
        `}
        >
          <div className=" max-w-4xl flex justify-center p-4">
            <Texts />
          </div>
          <button className="px-8 py-4 text-xl cursor-pointer rounded-lg bg-black text-white hover:opacity-80">
            Open 💕
          </button>
        </div>
      </div>
    </>
  );
}
