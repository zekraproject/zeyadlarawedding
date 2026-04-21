import bird from "@/assets/bird.png";
import mountain from "@/assets/mountain.png";

export function Footer() {
  return (
    <footer className="relative px-6 pt-20 pb-10 overflow-hidden">
      <img
        src={mountain}
        alt=""
        className="absolute bottom-0 left-0 w-40 sm:w-56 opacity-70 pointer-events-none"
      />
      <img
        src={mountain}
        alt=""
        className="absolute bottom-0 right-0 w-40 sm:w-56 opacity-70 pointer-events-none scale-x-[-1]"
      />

      <div className="relative mx-auto max-w-xl text-center">
        <p className="font-serif-display italic text-ink leading-relaxed text-base sm:text-lg max-w-lg mx-auto">
          We are grateful for the love and support of our family and friends.
          Your presence will make our day more special, and we look forward to
          celebrating with you and creating unforgettable memories together.
        </p>

        <div className="my-10 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-ink/30" />
          <img src={bird} alt="" className="w-10 h-10 opacity-80" />
          <span className="h-px w-16 bg-ink/30" />
        </div>

        <p className="font-script text-5xl sm:text-6xl text-ink leading-none">
          Youssef &amp; Salma
        </p>
        <p className="mt-6 text-[10px] tracking-wider-vintage uppercase text-ink-soft">
          07 · 05 · 2026
        </p>
      </div>
    </footer>
  );
}