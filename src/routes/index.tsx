import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Preloader } from "@/components/wedding/Preloader";
import { Hero } from "@/components/wedding/Hero";
import { Countdown } from "@/components/wedding/Countdown";
import { CalendarCard } from "@/components/wedding/CalendarCard";
import { Location } from "@/components/wedding/Location";
import { Journey } from "@/components/wedding/Journey";
import { Moments } from "@/components/wedding/Moments";
import { FAQ } from "@/components/wedding/FAQ";
import { Footer } from "@/components/wedding/Footer";
import mountain from "@/assets/mountain.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Youssef & Salma · Wedding Invitation" },
      {
        name: "description",
        content:
          "Youssef Ghareb & Salma Gamel are getting married on May 7th, 2026 at the Four Seasons Hotel, Cairo. Open the invitation.",
      },
      { property: "og:title", content: "Youssef & Salma · Wedding Invitation" },
      {
        property: "og:description",
        content:
          "A vintage invitation to the wedding of Youssef Ghareb & Salma Gamel — May 7th, 2026, Four Seasons Cairo.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const detailsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="paper-bg min-h-screen text-ink relative overflow-x-hidden">
      <Preloader />

      {/* Decorative top corners */}
      <img
        src={mountain}
        alt=""
        className="absolute top-0 left-0 w-32 sm:w-44 opacity-50 pointer-events-none rotate-180"
      />
      <img
        src={mountain}
        alt=""
        className="absolute top-0 right-0 w-32 sm:w-44 opacity-50 pointer-events-none rotate-180 scale-x-[-1]"
      />

      <Hero
        onOpenInvitation={() =>
          detailsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <div ref={detailsRef} className="px-6 py-16">
        <Countdown />
        <div className="mt-10">
          <CalendarCard />
        </div>
      </div>

      <Location />
      <Journey />
      <Moments />
      <FAQ />
      <Footer />
    </div>
  );
}
