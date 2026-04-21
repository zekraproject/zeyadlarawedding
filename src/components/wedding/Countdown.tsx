import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-07T17:00:00").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-center">
      <p className="text-[11px] sm:text-xs tracking-wider-vintage uppercase text-ink mb-4">
        Happily ever after begins in
      </p>
      <div className="font-serif-display text-3xl sm:text-5xl text-ink tabular-nums tracking-wider">
        <span>{String(t.d).padStart(3, "0")}</span>
        <span className="mx-2 text-ink-soft">:</span>
        <span>{String(t.h).padStart(2, "0")}</span>
        <span className="mx-2 text-ink-soft">:</span>
        <span>{String(t.m).padStart(2, "0")}</span>
        <span className="mx-2 text-ink-soft">:</span>
        <span>{String(t.s).padStart(2, "0")}</span>
      </div>
      <div className="flex justify-center gap-4 sm:gap-8 mt-2 text-[10px] sm:text-xs tracking-wider-vintage uppercase text-ink-soft">
        <span className="w-12 sm:w-16">Days</span>
        <span className="w-8 sm:w-12">Hours</span>
        <span className="w-8 sm:w-12">Min</span>
        <span className="w-8 sm:w-12">Sec</span>
      </div>
    </div>
  );
}