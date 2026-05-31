import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TrustBadges } from "@/components/TrustBadges";
import { CTABand } from "@/components/CTABand";
import { Kicker } from "@/components/Kicker";
import { ArchMark, ArchOutline } from "@/components/Logo";
import { caseStudies } from "@/lib/case-studies";
import { formatDateLong } from "@/lib/firm-config";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Herman Stone INC — Senior Network Engineering & Security" },
      { name: "description", content: "Senior Cisco, Palo Alto, and network automation expertise as fixed-scope audits, sprints, and retainers — for healthcare, enterprise, and public-sector teams in Southern California." },
      { property: "og:title", content: "Herman Stone INC" },
      { property: "og:description", content: "Enterprise networks, engineered to hold under pressure." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const capabilities = [
  { n: "01", title: "Cisco SD-WAN & WAN Modernization", desc: "Catalyst SD-WAN design, multi-circuit branch cutovers, Cloud onRamp to Azure." },
  { n: "02", title: "Cisco ISE & Network Access Control", desc: "Cluster design, 802.1X, posture and profiling — validated before any production cutover." },
  { n: "03", title: "Palo Alto Networks & Prisma", desc: "Panorama, PA-series HA, Prisma SD-WAN, and rule-base hygiene." },
  { n: "04", title: "Network Automation & Standards", desc: "Python and Ansible across IOS-XE, NX-OS, FTD — with rollback and ISO-9001-style documentation." },
];

const proofs = [
  // TODO(hsi-v5): confirm each metric is true and current. Soften further if needed.
  { num: "18+", label: "Years senior network engineering" },
  { num: "59", label: "Branch SD-WAN cutover, no user-visible downtime" },
  { num: "0", label: "Unplanned outages across documented cutovers" },
  { num: "100%", label: "Engagements under written SOW" },
];

const sectors = ["Healthcare", "Enterprise IT", "Public Sector", "MSPs", "Fintech", "AI-enabled SaaS"];

function Home() {
  return (
    <>
      {/* Hero — left-weighted editorial statement */}
      <section className="anchor-deep relative overflow-hidden">
        {/* Oversized arch watermark bleeding off the edge */}
        <ArchOutline
          className="pointer-events-none absolute -right-32 -top-16 h-[680px] w-auto text-bone opacity-[0.07]"
          strokeWidth={0.4}
        />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-8 pb-32 pt-28 sm:pt-36 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-24">
          <div>
            <div className="reveal reveal-1">
              <p className="font-mono-label text-[10px] text-[var(--on-teal-soft)]">
                Accepting Q3 engagements · Southern California
              </p>
            </div>
            <h1
              className="reveal reveal-2 mt-10 max-w-[20ch] text-[clamp(2.5rem,6.4vw,5.5rem)] font-medium leading-[1.04] tracking-tight text-[var(--on-teal)]"
              style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"opsz" 72' }}
            >
              Senior network and security architecture for organizations that can&rsquo;t
              <span className="italic text-[var(--on-teal-emph)]"> afford to get it wrong.</span>
            </h1>
            <p className="reveal reveal-3 mt-10 max-w-[56ch] text-lg leading-relaxed text-[var(--on-teal-soft)]">
              A boutique advisory practice. Fixed-scope audits, implementation sprints, and
              ongoing architecture review — delivered by our principal engineer. No juniors
              learning on your network.
            </p>
            <div className="reveal reveal-4 mt-12 flex flex-wrap items-center gap-10">
              <Link to="/contact" className="btn-primary">
                Book a scoping call <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link to="/packages" className="text-sm uppercase tracking-[0.16em] text-[var(--on-teal)] hover:text-white">
                View engagements →
              </Link>
            </div>
          </div>

          {/* Arch mark — the hero centerpiece */}
          <div className="reveal reveal-3 relative flex items-center justify-center">
            <ArchMark
              className="h-auto w-full max-w-[380px]"
              variant="reversed"
            />
          </div>
        </div>
      </section>

      {/* Proof band — oversized numbers, hairline separated */}
      <Reveal as="section" className="border-b border-[var(--hair)] bg-paper">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <Kicker index="01" label="In the field" />
          <div className="mt-12 grid gap-px bg-[var(--hair)] sm:grid-cols-2 lg:grid-cols-4">
            {proofs.map((p) => (
              <div key={p.label} className="bg-paper px-6 py-10">
                <p
                  className="text-[clamp(3rem,5vw,4.5rem)] font-medium leading-none text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.num}
                </p>
                <p className="mt-5 max-w-[20ch] text-sm leading-relaxed text-ink-soft">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Principal statement — deep teal anchor, anonymous */}
      <Reveal as="section" className="anchor-deep relative">
        <div className="mx-auto max-w-5xl px-8 py-32 sm:py-40">
          <p className="font-mono-label text-[10px] text-[var(--on-teal-soft)]">02 — A note from our principal engineer</p>
          <blockquote
            className="mt-10 text-[clamp(1.75rem,3.4vw,2.875rem)] font-medium leading-[1.2] tracking-tight text-[var(--on-teal)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            &ldquo;Eighteen years on the production-cutover side of the network teaches you one
            thing above all: the engineer who knows how to roll back is the engineer you want
            holding the keyboard. Every engagement here is senior, rehearsed, and reversible
            &mdash; because the work has to be right the first time.&rdquo;
          </blockquote>
          <div className="mt-12 flex items-center gap-6">
            <div className="h-px w-10 bg-green/80" />
            <p className="font-mono-label text-[10px] text-[var(--on-teal-soft)]">
              Our Principal Engineer · Herman Stone INC
            </p>
          </div>
        </div>
      </Reveal>

      {/* Capabilities — editorial spec rows */}
      <Reveal as="section">
        <div className="mx-auto max-w-7xl px-8 py-28">
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-[var(--hair)] pb-10">
            <div className="max-w-2xl">
              <Kicker index="03" label="Capabilities" />
              <h2
                className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Four disciplines. Delivered by a principal.
              </h2>
            </div>
            <Link to="/services" className="link-underline text-sm uppercase tracking-[0.16em]">
              View all services
            </Link>
          </div>

          <ul className="mt-4">
            {capabilities.map((c) => (
              <li key={c.n}>
                <Link
                  to="/services"
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-10 border-b border-[var(--hair)] py-10 transition hover:bg-paper/60"
                >
                  <span className="font-mono-label text-[11px] text-ink-soft">{c.n}</span>
                  <div className="grid gap-3 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
                    <h3
                      className="text-2xl font-medium leading-tight tracking-tight sm:text-3xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {c.title}
                    </h3>
                    <p className="max-w-[60ch] text-base leading-relaxed text-ink-soft">{c.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-ink-soft transition group-hover:translate-x-1 group-hover:text-ink" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Engagement model — three columns, generous air */}
      <Reveal as="section" className="bg-paper">
        <div className="mx-auto max-w-7xl px-8 py-28">
          <Kicker index="04" label="Engagement model" />
          <h2
            className="mt-5 max-w-3xl text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Audit. Sprint. Retainer.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Fixed scope first. Implementation next. Ongoing advisory as trust compounds.
          </p>

          <div className="mt-16 grid gap-px bg-[var(--hair)] md:grid-cols-3">
            {[
              { n: "I.", title: "Audit", desc: "Map risk. Find urgent fixes. Deliver a prioritized 90-day roadmap.", meta: "10 business days" },
              { n: "II.", title: "Sprint", desc: "Implement the fix — segmentation, access, logging, cloud, AI guardrails.", meta: "4 – 8 weeks" },
              { n: "III.", title: "Retainer", desc: "Architecture review, change advisory, and audit-grade evidence support.", meta: "Monthly" },
            ].map((s) => (
              <div key={s.n} className="bg-paper px-8 py-12">
                <span
                  className="text-3xl text-ink-soft"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                >
                  {s.n}
                </span>
                <h3
                  className="mt-6 text-3xl font-medium tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p className="mt-5 max-w-xs text-base leading-relaxed text-ink-soft">{s.desc}</p>
                <p className="mt-8 font-mono-label text-[10px] text-ink-soft">{s.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Client profile — restrained list */}
      <Reveal as="section">
        <div className="mx-auto max-w-7xl px-8 py-28">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
            <div>
              <Kicker index="05" label="Client profile" />
              <h2
                className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                For teams that can't afford a bad cutover.
              </h2>
            </div>
            <ul className="grid gap-px bg-[var(--hair)] sm:grid-cols-2">
              {sectors.map((s) => (
                <li
                  key={s}
                  className="bg-bone py-6 pl-1 text-2xl font-medium tracking-tight text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* Case study teaser — single featured */}
      {caseStudies[0] && (
        <Reveal as="section" className="border-y border-[var(--hair)] bg-paper-2">
          <div className="mx-auto max-w-7xl px-8 py-28">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
              <div>
                <Kicker index="06" label="Recent work" />
                <h2
                  className="mt-5 text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.05] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Anonymized case studies.
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
                  Sector and shape, never names. Each study covers the situation, what was at
                  stake, what we did, and the measured outcome.
                </p>
                <Link to="/work" className="link-underline mt-10 inline-flex text-sm uppercase tracking-[0.16em]">
                  All case studies
                </Link>
              </div>
              <Link
                to="/work/$slug"
                params={{ slug: caseStudies[0].slug }}
                className="group block border border-[var(--hair)] bg-bone p-10 transition hover:border-ink/30"
              >
                <div className="flex flex-wrap items-center gap-4 font-mono-label text-[10px] text-ink-soft">
                  <span>{caseStudies[0].sector}</span>
                  <span>·</span>
                  <span>{formatDateLong(caseStudies[0].date)}</span>
                </div>
                <h3
                  className="mt-6 text-[clamp(1.5rem,2.4vw,2rem)] font-medium leading-[1.15] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {caseStudies[0].title}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-ink-soft">{caseStudies[0].excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-ink transition group-hover:gap-3">
                  Read the case study <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      )}

      {/* Credentials strip — quiet */}
      <Reveal as="section">
        <div className="mx-auto max-w-7xl px-8 py-16">
          <TrustBadges />
        </div>
      </Reveal>

      <CTABand
        kicker="Engage"
        title="Not sure where the risk is? Start with a readiness audit."
        subtitle="Fixed scope, ten business days. We'll know what to fix — and in what order — by week two."
        ctaLabel="Request a scoped proposal"
      />
    </>
  );
}
