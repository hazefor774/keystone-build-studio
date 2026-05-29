const badges = [
  { code: "REG-001", label: "SAM.gov Registered" },
  { code: "NPI", label: "1043191950" },
  { code: "ENT", label: "California Corporation" },
  { code: "EXP-18Y", label: "Senior Network Engineering" },
  { code: "STACK", label: "Cisco · Palo Alto · Prisma" },
];

export function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      {badges.map(({ code, label }) => (
        <div
          key={code}
          className="inline-flex items-center gap-2.5 border border-[var(--line)] bg-ink-800 px-3 py-1.5"
        >
          <span className="font-mono-label text-[10px] text-teal-lit">{code}</span>
          <span className="h-3 w-px bg-[var(--line)]" />
          <span className="font-mono-label text-[10px] text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  );
}