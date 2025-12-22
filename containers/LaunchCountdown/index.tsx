"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { CountdownTimer } from "@/components/CountdownTimer";

interface LaunchCountdownProps {
  onComplete?: () => void;
}

export const LaunchCountdown = ({ onComplete }: LaunchCountdownProps) => {
  const [targetTime, setTargetTime] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());
  const completedRef = useRef(false);

  // Fetch
  useEffect(() => {
    const fetchTargetTime = async () => {
      const res = await fetch("api/launch-time");
      const data = await res.json();
      setTargetTime(data.targetTime);
    };
    fetchTargetTime();
  }, []);

  // Tick every second
  useEffect(() => {
    if (!targetTime) return;

    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  // Calculate remaining time
  const remainTime = useMemo(() => {
    if (!targetTime) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const diff = Math.max(0, Math.floor((targetTime - now) / 1000));

    return {
      total: diff, // 👈 expose total seconds
      days: Math.floor(diff / 86400),
      hours: Math.floor((diff % 86400) / 3600),
      minutes: Math.floor((diff % 3600) / 60),
      seconds: diff % 60,
    };
  }, [now, targetTime]);

  // ✅ SIDE EFFECT: notify completion
  useEffect(() => {
    if (remainTime.total === 0 && !completedRef.current) {
      completedRef.current = true;
      onComplete?.();
    }
  }, [remainTime.total, onComplete]);

  return (
    <>
      <CountdownTimer count={remainTime.days} label="Days" prev={0} />
      <CountdownTimer count={remainTime.hours} label="Hours" prev={0} />
      <CountdownTimer count={remainTime.minutes} label="Minutes" prev={0} />
      <CountdownTimer count={remainTime.seconds} label="Seconds" prev={0} />
    </>
  );
};
