import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Kicker } from "@/components/Kicker";
import { ArchMark } from "@/components/Logo";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/lib/case-studies";
import { formatDateLong } from "@/lib/firm-config";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.study;
    const title = s ? `${s.title} — Case study` : "Case study — Herman Stone INC";
    const description = s?.excerpt ?? "An anonymized senior network engagement.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: s ? `/work/${s.slug}` : "/work" },
      ],
      links: [{ rel: "canonical", href: s ? `/work/${s.slug}` : "/work" }],
      scripts: s
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: s.title,
                description: s.excerpt,
                datePublished: s.date,
                author: { "@type": "Organization", name: "Herman Stone INC" },
                publisher: { "@type": "Organization", name: "Herman Stone INC" },
              }),
            },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16 lg:py-20 sm:py-16 sm:py-14 sm:py-12 sm:py-16 lg:py-20 lg:py-24 lg:py-28 lg:py-32">
      <Kicker index="—" label="404" />
      <h1 className="mt-6 text-5xl" style={{ fontFamily: "var(--font-display)" }}>
        That case study isn't here.
      </h1>
      <Link to="/work" className="btn-primary mt-10">
        All case studies <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16 lg:py-20 sm:py-16 sm:py-14 sm:py-12 sm:py-16 lg:py-20 lg:py-24 lg:py-28 lg:py-32">
      <p className="font-mono-label text-[11px] text-ink-soft">Error</p>
      <h1 className="mt-6 text-4xl">Couldn't load this case study.</h1>
      <p className="mt-4 text-ink-soft">{error.message}</p>
      <button onClick={reset} className="btn-primary mt-8">
        Try again
      </button>
    </div>
  ),
  component: WorkDetail,
});

function WorkDetail() {
  const { study } = Route.useLoaderData() as { study: CaseStudy };
  const idx = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article>
      <header className="border-b border-[var(--hair)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 pb-16 pt-24">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono-label text-[10px] text-ink-soft hover:text-ink"
          >
            <ArrowLeft className="h-3 w-3" /> All case studies
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-4 font-mono-label text-[10px] text-ink-soft">
            <span>{study.sector}</span>
            <span>·</span>
            <span>{formatDateLong(study.date)}</span>
          </div>
          <h1
            className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {study.title}
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-ink-soft">{study.excerpt}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16 lg:py-20">
        <Section label="Situation">{study.situation}</Section>
        <Section label="Constraint">{study.constraint}</Section>

        <div className="mt-14">
          <SectionLabel label="What we did" />
          <ul className="mt-6 space-y-3 text-lg leading-relaxed text-ink-soft">
            {study.action.map((a, i) => (
              <li key={i} className="grid grid-cols-[auto_1fr] gap-4">
                <span className="mt-3 h-px w-5 bg-ink/40" aria-hidden="true" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <SectionLabel label="Outcome" />
          <dl className="mt-6 grid gap-px border border-[var(--hair)] bg-[var(--hair)] sm:grid-cols-3">
            {study.outcome.map((o) => (
              <div key={o.label} className="bg-paper px-6 py-8">
                <dt
                  className="text-[clamp(2rem,3vw,2.75rem)] font-medium leading-none text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {o.metric}
                </dt>
                <dd className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {o.label}
                  {!o.confirmed && (
                    <span className="ml-1 align-super text-[9px] text-ink-soft/70">†</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 font-mono-label text-[9px] text-ink-soft">
            † TODO(hsi-v5): confirm metric before publish.
          </p>
        </div>

        <p className="mt-14 text-lg leading-relaxed text-ink-soft">{study.closing}</p>

        <div className="mt-20 flex items-center justify-center opacity-60">
          <ArchMark className="h-6 w-auto" />
        </div>
      </div>

      <section className="border-t border-[var(--hair)] bg-paper-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-16 lg:py-20">
          <Kicker index="—" label="Read next" />
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <div>
              <div className="flex items-center gap-4 font-mono-label text-[10px] text-ink-soft">
                <span>{next.sector}</span>
                <span>·</span>
                <span>{formatDateLong(next.date)}</span>
              </div>
              <h3
                className="mt-4 max-w-[24ch] text-3xl font-medium leading-tight tracking-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {next.title}
              </h3>
            </div>
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-ink transition group-hover:gap-3">
              Continue <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </section>
    </article>
  );
}

function SectionLabel({ label }: { label: string }) {
  return <p className="font-mono-label text-[10px] text-ink-soft">{label}</p>;
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-14 first:mt-0">
      <SectionLabel label={label} />
      <p className="mt-6 text-lg leading-relaxed text-ink-soft">{children}</p>
    </div>
  );
}