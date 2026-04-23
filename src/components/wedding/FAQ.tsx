import { useState } from "react";

const faqs = [
  {
    q: "Is parking available at the venue?",
    a: "Yes, complimentary valet parking is available for all our guests at the Four Seasons Hotel Cairo throughout the evening.",
  },
  {
    q: "Are children welcome?",
    a: "While we adore your little ones, we have chosen to make our wedding an adults-only celebration so everyone can relax and enjoy the night.",
  },
  {
    q: "What is the dress code?",
    a: "Formal attire — long dresses or elegant cocktail dresses for ladies, and a suit for gentlemen. Soft blue and cream tones are encouraged.",
  },
  {
    q: "Can I take photos during the ceremony?",
    a: "We kindly ask you to be fully present during the ceremony. Our photographers will capture every moment, and you may share your photos during the reception.",
  },
  {
    q: "Will there be dietary options?",
    a: "Absolutely. A range of vegetarian, vegan, and gluten-free options will be served. Please let us know about any allergies when you RSVP.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 py-18 sm:py-20">
       <h2 className="text-center sm:text-xl tracking-vintage-tight sm:tracking-wider-vintage uppercase text-ink mb-12 font-serif-display text-lg">
        Good to Know
      </h2>
      <div className="mx-auto max-w-xl">
        {faqs.map((f, idx) => {
          const isOpen = open === idx;
          return (
            <div key={idx} className="border-b border-ink/20">
              <button
                onClick={() => setOpen(isOpen ? null : idx)}
                className="w-full flex justify-between items-center text-left py-5 group"
              >
                <span className="font-serif-display text-base sm:text-lg text-ink pr-4">
                  {f.q}
                </span>
                <span
                  className={`text-ink text-2xl font-light transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-500 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-ink-soft text-sm sm:text-base leading-relaxed font-serif-display italic">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}