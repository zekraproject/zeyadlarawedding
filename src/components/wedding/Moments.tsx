import { useState } from "react";
import m1 from "@/assets/moment-1.jpg";
import m2 from "@/assets/moment-2.jpg";
import m3 from "@/assets/moment-3.jpg";

const slides = [m1, m2, m3];

export function Moments() {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((p) => (p + d + slides.length) % slides.length);

  return (
    <section className="px-6 py-16 text-center">
      <p className="text-[11px] sm:text-xs tracking-wider-vintage uppercase text-ink mb-8">
        Moments
      </p>

      <div className="relative mx-auto max-w-md">
        <div className="vintage-frame inline-block w-full">
          <span className="corner-tr" />
          <span className="corner-bl" />
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-paper-deep">
            {slides.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Moment ${idx + 1}`}
                loading="lazy"
                width={1024}
                height={1024}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  idx === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="absolute -left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-paper border border-ink/40 text-ink hover:bg-ink hover:text-paper transition-colors flex items-center justify-center"
        >
          ‹
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="absolute -right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-paper border border-ink/40 text-ink hover:bg-ink hover:text-paper transition-colors flex items-center justify-center"
        >
          ›
        </button>

        <div className="flex justify-center gap-2 mt-5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-ink" : "w-1.5 bg-ink/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}