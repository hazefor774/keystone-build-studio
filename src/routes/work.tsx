import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Kicker } from "@/components/Kicker";
import { caseStudies } from "@/lib/case-studies";
import { formatDateLong } from "@/lib/firm-config";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Case studies — Herman Stone INC" },
      {
        name: "description",
        content:
          "Anonymized case studies from senior network and security engagements — situation, constraint, action, and measured outcome. Sector and shape only, never client names.",
      },
      { property: "og:title", content: "Case studies — Herman Stone INC" },
      {
        property: "og:description",
        content: "Anonymized engagements: SD-WAN cutovers, ISE upgrades, Panorama rule-base cleanups.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-12 pt-24 sm:pt-28">
          <Kicker index="—" label="Case studies" />
          <h1
            className="mt-6 max-w-[22ch] text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.02] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Anonymized engagements,{" "}
            <span className="italic text-teal-deep">written for the engineer who reads carefully.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Sector and shape, never client names. Each study covers the situation, the constraint,
            what we did, and the measured outcome.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--hair)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8">
          <ul>
            {caseStudies.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/work/$slug"
                  params={{ slug: c.slug }}
                  className="group grid items-baseline gap-8 border-b border-[var(--hair)] py-14 transition hover:bg-paper/60 lg:grid-cols-[200px_1fr_auto] lg:gap-12"
                >
                  <div className="flex flex-col gap-1 font-mono-label text-[10px] text-ink-soft">
                    <span>{c.sector}</span>
                    <span>{formatDateLong(c.date)}</span>
                  </div>
                  <div>
                    <h2
                      className="text-[clamp(1.5rem,2.4vw,2.25rem)] font-medium leading-[1.15] tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {c.title}
                    </h2>
                    <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-ink-soft">{c.excerpt}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-ink transition group-hover:gap-3">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}