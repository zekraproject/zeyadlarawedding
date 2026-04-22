import bird from "@/assets/bird.png";
import mountain from "@/assets/mountain.png";

export function Footer() {
  return (
    <footer className="relative px-6 pt-24 pb-14 overflow-hidden">
      <img
        src={mountain}
        alt=""
        className="absolute bottom-0 left-0 w-40 sm:w-56 opacity-60 pointer-events-none"
      />
      <img
        src={mountain}
        alt=""
        className="absolute bottom-0 right-0 w-40 sm:w-56 opacity-60 pointer-events-none scale-x-[-1]"
      />

      <div className="relative mx-auto max-w-xl text-center">
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-ink/40" />
           <span className="tracking-wider-vintage uppercase text-ink-soft text-base">
            With love
          </span>
          <span className="h-px w-12 bg-ink/40" />
        </div>

        <p className="font-handwritten text-ink leading-relaxed text-2xl sm:text-3xl max-w-lg mx-auto">
          We are grateful for the love and support of our family and friends.
          Your presence will make our day more special — we look forward to
          creating unforgettable memories together.
        </p>

        <div className="my-12 flex items-center justify-center gap-4">
          <span className="h-px w-20 bg-ink/30" />
          <img src={bird} alt="" className="w-12 h-12 opacity-80" />
          <span className="h-px w-20 bg-ink/30" />
        </div>

         <p className="font-brides sm:text-8xl text-ink leading-none text-7xl">
          Zeyad &amp; Lara
        </p>
        <p className="mt-8 text-[11px] tracking-wider-vintage uppercase text-ink-soft">
          07 · 05 · 2026
        </p>
      </div>
    </footer>
  );
}