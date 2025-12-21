"use client";
import { useMemo } from "react";
import { BackgroundGradient } from "../ui/background-gradient";

interface countdownTimerProps {
  count: number;
  prev: number;
  label: string;
}

export const CountdownTimer = ({ count, prev, label }: countdownTimerProps) => {
  const padCount = useMemo(() => {
    return String(count).padStart(2, "0");
  }, [count]);

  return (
    <>
      <div className="flex items-center justify-center flex-col ">
        <BackgroundGradient className="flex justify-center text-8xl p-4 font-sans">
          <div className="p-2 text-center">
            <p>{padCount}</p>
          </div>
        </BackgroundGradient>
        <p className="text-2xl pt-2">{label}</p>
      </div>
    </>
  );
};
