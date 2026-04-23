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
  const items = [
    { value: String(display.d).padStart(2, "0"), label: "Days" },
    { value: String(display.h).padStart(2, "0"), label: "Hours" },
    { value: String(display.m).padStart(2, "0"), label: "Min" },
    { value: String(display.s).padStart(2, "0"), label: "Sec" },
  ];

  return (
    <div className="text-center">
       <p className="sm:text-xs tracking-vintage-tight sm:tracking-wider-vintage uppercase text-ink mb-4 text-lg">
        Happily ever begins after 
      </p>
      <div
        className="mt-2 inline-flex items-start justify-center gap-2 sm:gap-3"
        suppressHydrationWarning
      >
        {items.map((item, index) => (
          <div key={item.label} className="contents">
            <div className="w-14 sm:w-20 text-center">
              <p className="font-serif-display text-3xl sm:text-5xl text-ink tabular-nums tracking-wider leading-none">
                {item.value}
              </p>
              <p className="mt-2 text-[10px] sm:text-xs tracking-vintage-tight sm:tracking-wider-vintage uppercase text-ink-soft leading-none">
                {item.label}
              </p>
            </div>
            {index < items.length - 1 ? (
              <span className="font-serif-display text-3xl sm:text-5xl text-ink-soft leading-none pt-0.5">
                :
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}