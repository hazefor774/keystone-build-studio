import { ShieldCheck, BadgeCheck, Building2, Award, Network } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "SAM.gov Registered" },
  { icon: BadgeCheck, label: "NPI 1043191950" },
  { icon: Building2, label: "California Corporation" },
  { icon: Award, label: "18+ Years Senior Network Engineering" },
  { icon: Network, label: "Cisco · Palo Alto · Prisma" },
];

export function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 ${className}`}>
      {badges.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm"
        >
          <Icon className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}