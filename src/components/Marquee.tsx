/**
 * Slow auto-scrolling marquee strip. CSS-driven for performance; paused on
 * hover; renders static under prefers-reduced-motion.
 */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div
      className="marquee group relative overflow-hidden border-y border-[var(--hair)] bg-paper"
      aria-label={items.join(" · ")}
    >
      <div className="marquee-track flex min-w-max gap-12 py-5 font-mono-label text-[11px] text-ink-soft">
        {row.map((label, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span>{label}</span>
            <span aria-hidden className="text-[var(--hair)]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}