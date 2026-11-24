"use client";

import { useEffect, useState } from "react";

// Target launch date: 30 days from now, configurable
export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 30, hours: 0, minutes: 0, seconds: 0 });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Use stored launch target or set to 30 days ahead from first visit
    const storedTarget = localStorage.getItem("carmech_launch_target");
    let targetTime: number;

    if (storedTarget) {
      targetTime = parseInt(storedTarget, 10);
    } else {
      // 30 days from now in milliseconds
      targetTime = Date.now() + 30 * 24 * 60 * 60 * 1000;
      localStorage.setItem("carmech_launch_target", targetTime.toString());
    }

    const updateCountdown = () => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: mounted ? timeLeft.days : 30 },
    { label: "HOURS", value: mounted ? timeLeft.hours : 0 },
    { label: "MINUTES", value: mounted ? timeLeft.minutes : 0 },
    { label: "SECONDS", value: mounted ? timeLeft.seconds : 0 },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <div className="text-center mb-3">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
          Official Launch Countdown
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {timeUnits.map((unit, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl bg-gradient-to-b from-[#0a122c]/90 to-[#050814]/90 border border-[#d4af37]/25 shadow-lg shadow-[#050814]/80 backdrop-blur-md relative overflow-hidden group hover:border-[#d4af37]/50 transition-all duration-300"
          >
            {/* Top gold highlight line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            <span className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-mono drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#d4af37]/90 mt-1 uppercase">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
