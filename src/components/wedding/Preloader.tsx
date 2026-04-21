import { useEffect, useState } from "react";
import birdImg from "@/assets/bird.png";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadingOut(true), 1700);
    const removeTimer = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center paper-bg transition-opacity duration-700 ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6 px-8 text-center animate-fade-in-slow">
        <img src={birdImg} alt="" className="w-20 h-20 opacity-90" />
        <div className="font-script text-5xl text-ink leading-none">​Z &amp; L</div>
        <div className="h-px w-24 bg-ink/40" />
        <p className="text-[11px] sm:text-xs tracking-wider-vintage uppercase text-ink-soft max-w-xs">
          You have received an invitation from
        </p>
        <p className="font-serif-display text-lg sm:text-xl text-ink tracking-widest uppercase">
          Zeyad &amp; Lara
        </p>
      </div>
    </div>
  );
}