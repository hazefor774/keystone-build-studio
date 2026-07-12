import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TrustBadges } from "@/components/TrustBadges";
import { CTABand } from "@/components/CTABand";
import { Kicker } from "@/components/Kicker";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Engagements — Herman Stone INC" },
      { name: "description", content: "Fixed-scope, senior-delivered network security engagements — audits, sprints, and assessments under a written SOW." },
      { property: "og:title", content: "Engagements — Herman Stone INC" },
      { property: "og:description", content: "Fixed scope. Senior delivery. Evidence you can hand to an auditor." },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: Packages,
});

const engagements = [
  {
    code: "HSI-001",
    name: "Secure Network & AI Trust Readiness Audit",
    duration: "10 business days",
    who: "CTOs, IT Directors, MSPs",
    scope: "Network / access / cloud / logging / AI inventory and review — full read of the environment.",
    outcome: "Top-10 findings, prioritized 90-day roadmap, evidence pack.",
    best: "Facing a customer security questionnaire, audit prep, a cloud move, or a flat/messy network.",
  },
  {
    code: "HSI-002",
    name: "Firewall Rule Cleanup & Segmentation Sprint",
    duration: "4 – 6 weeks",
    who: "IT Directors, MSPs",
    scope: "Zone model design, rule-base audit, cutover plan, logging design.",
    outcome: "Cleaned rule base, least-privilege business flows, logging evidence.",
    best: "Years of accumulated any-any rules and unclear blast radius.",
  },
  {
    code: "HSI-003",
    name: "Hybrid Cloud Network Security Baseline",
    duration: "3 – 5 weeks",
    who: "Cloud / DevOps / CTO",
    scope: "AWS / Azure VPC + VNet review, route tables, SG/NSG, peering, flow logs.",
    outcome: "Documented reachability, segmentation gaps closed, logging baseline.",
    best: "Post-migration and no one can prove what's reachable or logged.",
  },
  {
    code: "HSI-004",
    name: "ZTNA / VPN & Admin Access Hardening",
    duration: "3 – 4 weeks",
    who: "CIO, IT, remote-heavy teams",
    scope: "Identity-controlled access design, jump-host architecture, AAA review.",
    outcome: "Brokered admin access, no flat VPN landings, logged sessions.",
    best: "Remote admins land directly on the internal network.",
  },
  {
    code: "HSI-005",
    name: "Network Visibility & SIEM Starter",
    duration: "3 – 5 weeks",
    who: "Security / IT / MSP",
    scope: "Firewall / VPN / identity / cloud log pipeline, starter detections, dashboard.",
    outcome: "Working alerts on the highest-signal events, evidence retention.",
    best: "Logs exist but nothing turns them into alerts.",
  },
  {
    code: "HSI-006",
    name: "AI Guardrail & Data-Use Review",
    duration: "3 – 4 weeks",
    who: "AI-enabled SaaS, legal/compliance",
    scope: "AI inventory, data classes, prompt + tool risk review, policy controls.",
    outcome: "Documented guardrails, logging design, and a defensible control narrative.",
    best: "Rolling out an AI assistant that touches customer or regulated data.",
  },
  {
    code: "HSI-007",
    name: "MSP White-Label Assessment",
    duration: "Per-engagement",
    who: "MSP / vCISO / compliance partners",
    scope: "A repeatable assessment your team can resell under your brand.",
    outcome: "Senior network-security capacity, branded deliverables.",
    best: "You own client trust but need senior network-security capacity.",
  },
];

function Packages() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-20 pt-24 sm:pt-28">
          <Kicker index="—" label="Engagements" />
          <h1
            className="mt-6 max-w-[22ch] text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.02] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Fixed scope. Senior delivery.{" "}
            <span className="italic text-teal-deep">Evidence you can hand an auditor.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Every engagement runs under a written SOW. Scope and timeline are confirmed on a
            thirty-minute scoping call; a written proposal follows.
          </p>
          {/* Scannable engagement index — jump-list at top */}
          <div className="mt-16 grid gap-px border-t border-b border-[var(--hair)] bg-[var(--hair)] sm:grid-cols-2 lg:grid-cols-4">
            {engagements.map((p) => (
              <a
                key={p.code}
                href={`#${p.code}`}
                className="group flex flex-col justify-between gap-6 bg-paper px-5 py-6 transition hover:bg-paper-2"
              >
                <span className="font-mono-label text-[10px] text-ink-soft">{p.code}</span>
                <span
                  className="text-base font-medium leading-snug tracking-tight text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.name}
                </span>
                <span className="font-mono-label text-[10px] text-ink-soft">
                  {p.duration}
                </span>
              </a>
            ))}
          </div>
          <div className="mt-10">
            <TrustBadges />
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--hair)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8">
          <ul>
            {engagements.map((p) => (
              <li key={p.code} id={p.code} className="scroll-mt-24">
                <Link
                  to="/contact"
                  search={{ pkg: p.code }}
                  className="group grid grid-cols-1 items-baseline gap-8 border-b border-[var(--hair)] py-14 transition hover:bg-paper/60 lg:grid-cols-[100px_1fr_auto] lg:gap-12"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono-label text-[11px] text-ink-soft">{p.code}</span>
                  </div>
                  <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
                    <div>
                      <h2
                        className="text-[clamp(1.625rem,2.6vw,2.25rem)] font-medium leading-[1.1] tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {p.name}
                      </h2>
                      <div className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-2 font-mono-label text-[10px] text-ink-soft">
                        <span>Duration · <span className="text-ink">{p.duration}</span></span>
                        <span>·</span>
                        <span>For · <span className="text-ink">{p.who}</span></span>
                      </div>
                    </div>
                    <dl className="space-y-4 text-sm leading-relaxed">
                      <div>
                        <dt className="font-mono-label text-[10px] text-ink-soft">Scope</dt>
                        <dd className="mt-1 text-ink-soft">{p.scope}</dd>
                      </div>
                      <div>
                        <dt className="font-mono-label text-[10px] text-ink-soft">Outcome</dt>
                        <dd className="mt-1 text-ink-soft">{p.outcome}</dd>
                      </div>
                      <div>
                        <dt className="font-mono-label text-[10px] text-ink-soft">Best when</dt>
                        <dd className="mt-1 text-ink-soft">{p.best}</dd>
                      </div>
                    </dl>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-ink transition group-hover:gap-3">
                    Request a scoped proposal <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-24 grid gap-10 border-t border-[var(--hair)] py-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <Kicker index="—" label="How engagements compound" />
              <h3
                className="mt-5 text-3xl font-medium tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Audit. Sprint. Retainer.
              </h3>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-ink-soft">
                Clients typically begin with an <span className="italic text-ink">Audit</span> (HSI-001),
                move into a <span className="italic text-ink">Sprint</span> (HSI-002–006) to implement
                the highest-priority fix, then transition to a{" "}
                <span className="italic text-ink">Retainer</span> for ongoing architecture review and
                audit-grade evidence support.
              </p>
              <p className="mt-8 font-mono-label text-[10px] text-ink-soft">
                All work authorized under written SOW.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        kicker="Match"
        title="Not sure which engagement fits?"
        subtitle="A 30-minute scoping call is the fastest way to find out."
        ctaLabel="Book a scoping call"
      />
    </>
  );
}