import journey1 from "@/assets/journey-1.jpg";
import journey2 from "@/assets/journey-2.jpg";
import butterfly from "@/assets/butterfly.png";
import rose from "@/assets/rose.png";
import tree from "@/assets/tree.png";

function Arrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={`w-24 h-16 text-ink ${flip ? "scale-x-[-1]" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path
        d="M5 10 Q 60 0 90 35 T 80 70"
        strokeDasharray="4 5"
      />
      <path d="M70 60 L80 72 L90 62" />
    </svg>
  );
}

export function Journey() {
  return (
    <section className="px-6 py-20 relative overflow-hidden">
      <p className="text-center text-[11px] sm:text-xs tracking-wider-vintage uppercase text-ink mb-12">
        A Journey of Love
      </p>

      <div className="mx-auto max-w-2xl space-y-16">
        {/* First moment */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <div className="vintage-frame inline-block flex-shrink-0">
            <span className="corner-tr" />
            <span className="corner-bl" />
            <img
              src={journey1}
              alt="First met"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-48 sm:w-56 h-auto block"
            />
          </div>
          <div className="flex-1 text-center sm:text-left relative">
            <img src={rose} alt="" className="absolute -top-12 right-0 w-16 h-16 opacity-80 hidden sm:block" />
            <p className="font-script-alt text-2xl sm:text-3xl text-ink leading-snug">
              We first met and little did we know it was the beginning of something beautiful.
            </p>
          </div>
        </div>

        <div className="flex justify-center"><Arrow /></div>

        {/* Second moment */}
        <div className="flex flex-col sm:flex-row-reverse items-center gap-6 sm:gap-10">
          <div className="vintage-frame inline-block flex-shrink-0">
            <span className="corner-tr" />
            <span className="corner-bl" />
            <img
              src={journey2}
              alt="Started our journey"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-48 sm:w-56 h-auto block"
            />
          </div>
          <div className="flex-1 text-center sm:text-right relative">
            <img src={butterfly} alt="" className="absolute -top-10 left-0 w-16 h-16 opacity-80 hidden sm:block animate-float" />
            <p className="font-script-alt text-2xl sm:text-3xl text-ink leading-snug">
              We started our journey together, sharing laughter, dreams, and countless memories.
            </p>
          </div>
        </div>

        <div className="flex justify-center"><Arrow flip /></div>

        {/* Tree + final note */}
        <div className="flex flex-col items-center gap-4 pt-4">
          <img src={tree} alt="" loading="lazy" width={768} height={768} className="w-48 sm:w-64 h-auto opacity-90" />
          <p className="font-script-alt text-2xl sm:text-3xl text-ink text-center max-w-md leading-snug">
            One photo is still missing... the one that completes our journey — and it will be with you at our wedding.
          </p>
        </div>
      </div>
    </section>
  );
}