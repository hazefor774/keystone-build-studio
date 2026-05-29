import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Kicker, StatusDot } from "./Kicker";

interface CTABandProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
  kicker?: string;
}

export function CTABand({
  title,
  subtitle,
  ctaLabel = "Book a Call",
  ctaTo = "/contact",
  kicker = "Engage",
}: CTABandProps) {
  return (
    <section className="relative border-y border-[var(--line)] bg-ink-800">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(31,182,196,0.15), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[2fr_1fr] md:items-center">
        <div>
          <Kicker index="//" label={kicker} />
          <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-[1.05] sm:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to={ctaTo} className="btn-primary">
              {ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <StatusDot label="Accepting Q3 engagements" />
          </div>
        </div>
        <div className="hidden border border-[var(--line)] bg-ink-900 p-6 font-mono-label text-[10px] text-muted-foreground md:block">
          <p className="text-teal-lit">// session.next()</p>
          <ul className="mt-4 space-y-2">
            <li>RESPONSE_SLA &nbsp;1 BUSINESS DAY</li>
            <li>ENGAGEMENT &nbsp;&nbsp;&nbsp;FIXED SCOPE / SOW</li>
            <li>DELIVERY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SENIOR-ONLY</li>
            <li>COVERAGE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SOUTHERN CA</li>
          </ul>
        </div>
      </div>
    </section>
  );
}