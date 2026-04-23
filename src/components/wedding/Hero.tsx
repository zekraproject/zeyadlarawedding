import couplePortrait from "@/assets/couple-hero.jpg";
import gazebo from "@/assets/gazebo.png";

interface HeroProps {
  onOpenInvitation: () => void;
}

export function Hero({ onOpenInvitation }: HeroProps) {
  return (
    <section className="relative px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-xl text-center flex flex-col items-center">
        <h2 className="text-base sm:text-xl tracking-vintage-tight sm:tracking-wider-vintage uppercase text-ink mb-6 mt-4 animate-fade-up font-serif-display">
          We are getting married
        </h2>

        <img
          src={gazebo}
          alt=""
          width={400}
          height={400}
          className="w-56 sm:w-72 h-auto mx-auto mb-2 image-soft-crisp"
        />

        <h1 className="font-brides sm:text-7xl text-ink leading-tight mt-2 animate-fade-up whitespace-nowrap text-5xl">
          Zeyad Ashraf
        </h1>
        <span className="font-brides text-5xl sm:text-6xl text-ink-soft my-1">&amp;</span>
        <h1 className="font-brides sm:text-7xl text-ink leading-tight animate-fade-up whitespace-nowrap text-5xl">
          Lara Sherif
        </h1>

        <p className="mt-8 text-sm sm:text-base text-ink tracking-widest">
          Thursday, May 7<sup>th</sup> 2026
        </p>

        <button
          onClick={onOpenInvitation}
          className="mt-8 inline-flex items-center justify-center px-8 py-3 rounded-full bg-ink text-paper text-xs tracking-[0.3em] uppercase hover:bg-ink/90 transition-all hover:scale-105"
        >
          Check Details
        </button>

        <div className="mt-14 vintage-frame inline-block">
          <span className="corner-tr" />
          <span className="corner-bl" />
          <img
            src={couplePortrait}
            alt="Youssef and Salma"
            fetchPriority="high"
            decoding="async"
            width={1024}
            height={1280}
            className="w-80 sm:w-96 h-auto block object-cover aspect-[3/4] image-soft-crisp"
          />
        </div>

        <p className="mt-10 text-[11px] tracking-vintage-tight sm:tracking-wider-vintage uppercase text-ink-soft">
          The wedding of
        </p>
        <p className="font-brides text-5xl sm:text-6xl text-ink mt-2">
          Zeyad &amp; Lara 
        </p>
      </div>
    </section>
  );
}