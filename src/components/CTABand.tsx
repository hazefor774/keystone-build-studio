import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface CTABandProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export function CTABand({
  title,
  subtitle,
  ctaLabel = "Book a Call",
  ctaTo = "/contact",
}: CTABandProps) {
  return (
    <section className="gradient-brand">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 text-white/90 sm:text-lg">{subtitle}</p>}
        <Link
          to={ctaTo}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-ink shadow-lg transition hover:bg-white/95"
        >
          {ctaLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}