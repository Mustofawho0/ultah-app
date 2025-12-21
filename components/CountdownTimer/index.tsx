"use client";
import { useMemo } from "react";
import Image from "next/image";

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
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-42 h-42">
            <Image
              src={"/calendar_5106298.png"}
              alt="Calendar"
              fill
              className="object-contain opacity-40"
            />
          </div>
          <div className="absolute flex items-center justify-center">
            <p className="text-6xl font-semibold opacity-80 -translate-y-2.5 translate-x-1">
              {padCount}
            </p>
          </div>
          <p className="text-xl">{label}</p>
        </div>
      </div>
    </>
  );
};
