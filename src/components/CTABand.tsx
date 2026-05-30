import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Kicker } from "./Kicker";

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
  ctaLabel = "Request a scoped proposal",
  ctaTo = "/contact",
  kicker = "Engage",
}: CTABandProps) {
  return (
    <section className="anchor-deep relative">
      <div className="mx-auto max-w-6xl px-8 py-28 sm:py-36 text-center">
        <Kicker index="—" label={kicker} className="!text-bone/60 justify-center inline-flex" />
        <h2
          className="mx-auto mt-8 max-w-3xl text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-7 max-w-xl text-base text-bone/70 sm:text-lg">{subtitle}</p>
        )}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          <Link to={ctaTo} className="btn-primary">
            {ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href="mailto:hello@hermanstone.com"
            className="text-sm uppercase tracking-[0.18em] text-bone/80 hover:text-white"
          >
            hello@hermanstone.com
          </a>
        </div>
        <div className="mx-auto mt-16 h-px w-12 bg-green/60" />
      </div>
    </section>
  );
}