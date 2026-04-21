import couplePortrait from "@/assets/couple-portrait.jpg";
import gazebo from "@/assets/gazebo.png";

interface HeroProps {
  onOpenInvitation: () => void;
}

export function Hero({ onOpenInvitation }: HeroProps) {
  return (
    <section className="relative px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-xl text-center flex flex-col items-center">
        <p className="text-[11px] sm:text-xs tracking-wider-vintage uppercase text-ink mb-6 animate-fade-up">
          We are getting married
        </p>

        <img
          src={gazebo}
          alt=""
          width={400}
          height={400}
          className="w-56 sm:w-72 h-auto mx-auto mb-2 animate-float"
        />

        <h1 className="font-script text-5xl sm:text-6xl text-ink leading-[0.95] mt-2 animate-fade-up">
          Youssef Ghareb
        </h1>
        <span className="font-script-alt text-3xl sm:text-4xl text-ink-soft my-1">&amp;</span>
        <h1 className="font-script text-5xl sm:text-6xl text-ink leading-[0.95] animate-fade-up">
          Salma Gamel
        </h1>

        <p className="mt-8 text-sm sm:text-base text-ink tracking-widest">
          Thursday, May 7<sup>th</sup> 2026
        </p>

        <button
          onClick={onOpenInvitation}
          className="mt-8 inline-flex items-center justify-center px-8 py-3 rounded-full bg-ink text-paper text-xs tracking-[0.3em] uppercase hover:bg-ink/90 transition-all hover:scale-105"
        >
          Open Invitation
        </button>

        <div className="mt-14 vintage-frame inline-block">
          <span className="corner-tr" />
          <span className="corner-bl" />
          <img
            src={couplePortrait}
            alt="Youssef and Salma"
            width={1024}
            height={1024}
            className="w-64 sm:w-80 h-auto block"
          />
        </div>

        <p className="mt-10 text-[11px] tracking-wider-vintage uppercase text-ink-soft">
          The wedding of
        </p>
        <p className="font-script text-4xl sm:text-5xl text-ink mt-1">
          Youssef &amp; Salma
        </p>
      </div>
    </section>
  );
}