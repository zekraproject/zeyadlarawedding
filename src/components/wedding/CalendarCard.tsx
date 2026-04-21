const days = ["M", "T", "W", "T", "F", "S", "S"];
// May 2026 starts on Friday (index 4 in Mon-Sun)
const FIRST_OFFSET = 4;
const DAYS_IN_MAY = 31;

export function CalendarCard() {
  const cells: (number | null)[] = [
    ...Array(FIRST_OFFSET).fill(null),
    ...Array.from({ length: DAYS_IN_MAY }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="mx-auto max-w-sm sketch-border bg-card/60 px-5 py-6 rounded-sm">
      <p className="text-center font-serif-display text-xl text-ink mb-4">May, 2026</p>
      <div className="grid grid-cols-7 gap-y-2 text-center text-sm">
        {days.map((d, i) => (
          <div key={i} className="text-ink-soft text-xs tracking-widest uppercase">
            {d}
          </div>
        ))}
        {cells.map((n, i) => {
          const isWedding = n === 7;
          return (
            <div
              key={i}
              className={`relative h-8 flex items-center justify-center text-ink ${
                n ? "" : "opacity-0"
              }`}
            >
              {isWedding && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="block w-8 h-8 rounded-full border-2 border-ink" />
                </span>
              )}
              <span className={`relative ${isWedding ? "font-semibold" : ""}`}>{n}</span>
            </div>
          );
        })}
      </div>
      <div className="border-t border-ink/20 mt-4 pt-3 text-center text-xs text-ink-soft tracking-wide">
        May 7, 2026 · Our Wedding Day · 5:00 PM
      </div>
    </div>
  );
}