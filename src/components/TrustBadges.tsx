const badges = [
  "SAM.gov Registered",
  "NPI · 1043191950",
  "California Corporation",
  "Cisco · Palo Alto · Prisma",
];

export function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-10 gap-y-3 ${className}`}>
      {badges.map((label, i) => (
        <li key={label} className="flex items-center gap-10">
          <span className="font-mono-label text-[10.5px] text-ink-soft">
            {label}
          </span>
          {i < badges.length - 1 && (
            <span className="hidden h-3 w-px bg-[var(--hair)] sm:inline-block" />
          )}
        </li>
      ))}
    </ul>
  );
}