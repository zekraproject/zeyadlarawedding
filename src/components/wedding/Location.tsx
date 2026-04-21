import venue from "@/assets/venue.jpg";

export function Location() {
  return (
    <section className="px-6 py-16 text-center">
      <h2 className="text-base sm:text-xl tracking-wider-vintage uppercase text-ink mb-8 font-serif-display">
        Location
      </h2>
      <div className="mx-auto max-w-md vintage-frame inline-block">
        <span className="corner-tr" />
        <span className="corner-bl" />
        <img
          src={venue}
          alt="Four Seasons Hotel Cairo"
          loading="lazy"
          width={1024}
          height={896}
          className="w-full h-auto block"
        />
      </div>
      <p className="mt-6 font-serif-display text-xl text-ink tracking-wide">
        Four Seasons Hotel, Cairo
      </p>
      <a
        href="https://maps.google.com/?q=Four+Seasons+Hotel+Cairo+at+Nile+Plaza"
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-ink text-paper text-xs tracking-[0.3em] uppercase hover:bg-ink/90 transition-all hover:scale-105"
      >
        Google Maps
      </a>
    </section>
  );
}