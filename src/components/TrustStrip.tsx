import { firm } from "@/lib/firm-config";

/**
 * Quiet trust strip — facts only. Reads from firm-config so it cannot drift.
 */
export function TrustStrip({ className = "" }: { className?: string }) {
  const items = [
    `${firm.entity} · est. ${firm.foundedYear}`,
    "SAM.gov Registered",
    ...(firm.uei ? [`UEI · ${firm.uei}`] : []),
    ...(firm.cage ? [`CAGE · ${firm.cage}`] : []),
    "Cisco · Palo Alto Networks · Prisma",
  ];
  return (
    <ul
      className={`flex flex-wrap items-center gap-x-8 gap-y-3 ${className}`}
      aria-label="Corporate credentials"
    >
      {items.map((label, i) => (
        <li key={label} className="flex items-center gap-8">
          <span className="font-mono-label text-[10px] text-ink-soft">{label}</span>
          {i < items.length - 1 && (
            <span className="hidden h-3 w-px bg-[var(--hair)] sm:inline-block" aria-hidden="true" />
          )}
        </li>
      ))}
    </ul>
  );
}