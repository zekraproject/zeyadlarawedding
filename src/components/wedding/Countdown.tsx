import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-07T17:00:00Z").getTime();

function calc(now: number) {
  const diff = Math.max(0, TARGET - now);
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

const ZERO = { d: 0, h: 0, m: 0, s: 0 };

export function Countdown() {
  const [t, setT] = useState(ZERO);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    setT(calc(Date.now()));
    const id = setInterval(() => setT(calc(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);
  const display = mounted ? t : ZERO;

  return (
    <div className="text-center">
       <p className="sm:text-xs tracking-wider-vintage uppercase text-ink mb-4 text-lg">
        Happily ever begins after 
      </p>
      <div className="flex justify-center items-start gap-4 sm:gap-8 tabular-nums" suppressHydrationWarning>
        {[
          { value: display.d, label: "Days" },
          { value: display.h, label: "Hours" },
          { value: display.m, label: "Min" },
          { value: display.s, label: "Sec" },
        ].map((unit, i, arr) => (
          <div key={unit.label} className="flex items-start gap-4 sm:gap-8">
            <div className="flex flex-col items-center">
              <span className="font-serif-display text-3xl sm:text-5xl text-ink tracking-wider leading-none">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="mt-2 text-[10px] sm:text-xs tracking-wider-vintage uppercase text-ink-soft">
                {unit.label}
              </span>
            </div>
            {i < arr.length - 1 && (
              <span className="font-serif-display text-3xl sm:text-5xl text-ink-soft leading-none">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}