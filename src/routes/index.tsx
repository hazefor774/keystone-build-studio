import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrustBadges } from "@/components/TrustBadges";
import { CTABand } from "@/components/CTABand";
import { Kicker } from "@/components/Kicker";
import { ArchMark, ArchOutline } from "@/components/Logo";
import { caseStudies } from "@/lib/case-studies";
import { formatDateLong } from "@/lib/firm-config";
import { Reveal, RevealItem } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Marquee } from "@/components/Marquee";

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
  { num: "59", label: "Branch SD-WAN program in delivery \u2014 zero user-visible downtime to date" },
  { num: "0", label: "Unplanned outages across documented cutovers" },
  { num: "100%", label: "Engagements under written SOW" },
];

const sectors = ["Healthcare", "Enterprise IT", "Public Sector", "MSPs", "Fintech", "AI-enabled SaaS"];

const heroEase = [0.2, 0.7, 0.2, 1] as const;
const heroRise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: heroEase, delay },
});

const marqueeItems = [
  "Cisco",
  "Palo Alto",
  "Prisma",
  "SD-WAN",
  "ISE",
  "Network Automation",
  "Cloud Security",
];

function Home() {
  const { scrollY } = useScroll();
  const watermarkY = useTransform(scrollY, [0, 600], [0, 40]);
  return (
    <>
      {/* Hero — left-weighted editorial statement */}
      <section className="anchor-deep relative overflow-hidden">
        {/* Oversized arch watermark — drifts on scroll */}
        <motion.div
          style={{ y: watermarkY }}
          className="pointer-events-none absolute -right-32 -top-16"
        >
          <ArchOutline
            className="h-[680px] w-auto text-bone opacity-[0.07]"
            strokeWidth={0.4}
          />
        </motion.div>
        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 pb-20 sm:pb-32 pt-24 sm:pt-28 sm:pt-36 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-24">
          <div>
            <motion.p
              {...heroRise(0.05)}
              className="font-mono-label text-[10px] text-[var(--on-teal-soft)]"
            >
              Network &amp; security advisory · Southern California
            </motion.p>
            <motion.h1
              {...heroRise(0.18)}
              className="mt-10 max-w-[20ch] text-[clamp(2.5rem,6.4vw,5.5rem)] font-medium leading-[1.04] tracking-tight text-[var(--on-teal)]"
              style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"opsz" 72' }}
            >
              Senior network and security architecture for organizations that
              <span className="italic text-[var(--on-teal-emph)]"> can&rsquo;t afford to get it wrong.</span>
            </motion.h1>
            <motion.p
              {...heroRise(0.32)}
              className="mt-10 max-w-[56ch] text-lg leading-relaxed text-[var(--on-teal-soft)]"
            >
              A boutique advisory practice serving healthcare, enterprise IT, and public-sector
              teams. Fixed-scope audits, implementation sprints, and ongoing architecture review
              &mdash; delivered by our principal engineer. No juniors learning on your network.
            </motion.p>
            <motion.div
              {...heroRise(0.44)}
              className="mt-12 flex flex-wrap items-center gap-10"
            >
              <Link to="/contact" className="btn-primary">
                Book a scoping call <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link to="/packages" className="text-sm uppercase tracking-[0.16em] text-[var(--on-teal)] hover:text-white">
                View engagements →
              </Link>
            </motion.div>
          </div>

          {/* Arch mark — the hero centerpiece */}
          <motion.div
            {...heroRise(0.25)}
            className="relative flex items-center justify-center"
          >
            <ArchMark
              className="h-auto w-full max-w-[380px]"
              variant="reversed"
              animated
            />
          </motion.div>
        </div>
      </section>

      {/* Proof band — oversized numbers, hairline separated */}
      <Reveal as="section" className="border-b border-[var(--hair)] bg-paper" stagger>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-16 lg:py-20">
          <RevealItem><Kicker index="01" label="In the field" /></RevealItem>
          <div className="mt-12 grid gap-px bg-[var(--hair)] sm:grid-cols-2 lg:grid-cols-4">
            {proofs.map((p) => (
              <RevealItem key={p.label} className="bg-paper px-6 py-10">
                <p
                  className="text-[clamp(3rem,5vw,4.5rem)] font-medium leading-none text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <CountUp value={p.num} />
                </p>
                <p className="mt-5 max-w-[20ch] text-sm leading-relaxed text-ink-soft">{p.label}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Ambient marquee — slow drift between sections */}
      <Marquee items={marqueeItems} />

      {/* Principal statement — deep teal anchor, anonymous */}
      <Reveal as="section" className="anchor-deep relative">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-12 sm:py-16 lg:py-20 sm:py-16 sm:py-14 sm:py-12 sm:py-16 lg:py-20 lg:py-24 lg:py-28 lg:py-32 sm:py-40">
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
      <Reveal as="section" stagger>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-14 sm:py-12 sm:py-16 lg:py-20 lg:py-24 lg:py-28">
          <RevealItem className="flex flex-wrap items-end justify-between gap-8 border-b border-[var(--hair)] pb-10">
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
          </RevealItem>

          <ul className="mt-4">
            {capabilities.map((c) => (
              <RevealItem key={c.n} as="li">
                <Link
                  to="/services"
                  className="row-accent group grid grid-cols-[auto_1fr_auto] items-baseline gap-5 border-b border-[var(--hair)] py-8 transition hover:-translate-y-0.5 hover:bg-paper/60 sm:gap-10 sm:py-10"
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
                  <ArrowRight className="h-4 w-4 text-ink-soft transition group-hover:translate-x-2 group-hover:text-ink" />
                </Link>
              </RevealItem>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Engagement model — three columns, generous air */}
      <Reveal as="section" className="bg-paper" stagger>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-14 sm:py-12 sm:py-16 lg:py-20 lg:py-24 lg:py-28">
          <RevealItem>
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
          </RevealItem>

          <div className="mt-16 grid gap-px bg-[var(--hair)] md:grid-cols-3">
            {[
              { n: "I.", title: "Audit", desc: "Map risk. Find urgent fixes. Deliver a prioritized 90-day roadmap.", meta: "10 business days" },
              { n: "II.", title: "Sprint", desc: "Implement the fix — segmentation, access, logging, cloud, AI guardrails.", meta: "4 – 8 weeks" },
              { n: "III.", title: "Retainer", desc: "Architecture review, change advisory, and audit-grade evidence support.", meta: "Monthly" },
            ].map((s) => (
              <RevealItem key={s.n} className="row-accent bg-paper px-5 sm:px-8 py-12 transition hover:-translate-y-0.5">
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
              </RevealItem>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Client profile — restrained list */}
      <Reveal as="section" stagger>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-14 sm:py-12 sm:py-16 lg:py-20 lg:py-24 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
            <RevealItem>
              <Kicker index="05" label="Client profile" />
              <h2
                className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                For teams that can't afford a bad cutover.
              </h2>
            </RevealItem>
            <ul className="grid gap-px bg-[var(--hair)] sm:grid-cols-2">
              {sectors.map((s) => (
                <RevealItem
                  key={s}
                  as="li"
                  className="bg-bone py-6 pl-1 text-2xl font-medium tracking-tight text-ink"
                >
                  <span style={{ fontFamily: "var(--font-display)" }}>{s}</span>
                </RevealItem>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* Case study teaser — single featured */}
      {caseStudies[0] && (
        <Reveal as="section" className="border-y border-[var(--hair)] bg-paper-2">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-14 sm:py-12 sm:py-16 lg:py-20 lg:py-24 lg:py-28">
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
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
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
