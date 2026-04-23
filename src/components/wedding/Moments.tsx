import { useState } from "react";
import m1 from "@/assets/moment-1.jpg";
import m2 from "@/assets/moment-2.jpg";
import m3 from "@/assets/moment-3.jpg";
import m4 from "@/assets/moment-4.jpg";
import m5 from "@/assets/moment-5.jpg";

const slides = [m1, m2, m3, m4, m5];

export function Moments() {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((p) => (p + d + slides.length) % slides.length);

  return (
    <section className="px-6 py-18 sm:py-20 text-center">
       <h2 className="sm:text-xl tracking-vintage-tight sm:tracking-wider-vintage uppercase text-ink mb-10 font-serif-display text-lg">
        Moments
      </h2>

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
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                width={1024}
                height={1024}
                className={`absolute inset-0 w-full h-full object-cover image-soft-crisp transition-opacity duration-700 ${
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