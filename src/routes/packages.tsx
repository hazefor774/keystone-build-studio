import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TrustBadges } from "@/components/TrustBadges";
import { CTABand } from "@/components/CTABand";
import { Kicker } from "@/components/Kicker";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages — Herman Stone INC" },
      { name: "description", content: "Fixed-scope, senior-delivered network security packages — audits, sprints, and assessments under a written SOW." },
      { property: "og:title", content: "Packages — Herman Stone INC" },
      { property: "og:description", content: "Fixed scope. Senior delivery. Evidence you can hand to an auditor." },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: Packages,
});

const packages = [
  {
    code: "HSI-001",
    name: "Secure Network & AI Trust Readiness Audit",
    price: "$7.5K",
    duration: "10 business days",
    who: "CTOs, IT Directors, MSPs",
    get: "Network / access / cloud / logging / AI risk map, top 10 findings, prioritized 90-day roadmap.",
    best: "Facing a customer security questionnaire, audit prep, a cloud move, or a flat/messy network.",
  },
  {
    code: "HSI-002",
    name: "Firewall Rule Cleanup & Segmentation Sprint",
    price: "$25K",
    who: "IT Directors, MSPs",
    get: "Zone model, cleaned rule base, least-privilege business flows, logging evidence.",
    best: "Years of accumulated any-any rules and unclear blast radius.",
  },
  {
    code: "HSI-003",
    name: "Hybrid Cloud Network Security Baseline",
    price: "$20K",
    who: "Cloud / DevOps / CTO",
    get: "AWS/Azure VPC/VNet review; route table, SG/NSG, and flow-log evidence.",
    best: "Post-migration and no one can prove what's reachable or logged.",
  },
  {
    code: "HSI-004",
    name: "ZTNA / VPN & Admin Access Hardening",
    price: "$15K",
    who: "CIO, IT, remote-heavy teams",
    get: "Identity-controlled access, jump-host design, AAA + logging.",
    best: "Remote admins land directly on the internal network.",
  },
  {
    code: "HSI-005",
    name: "Network Visibility & SIEM Starter",
    price: "$18K",
    who: "Security / IT / MSP",
    get: "Firewall / VPN / identity / cloud log pipeline, starter detections, dashboard.",
    best: "Logs exist but nothing turns them into alerts.",
  },
  {
    code: "HSI-006",
    name: "AI Guardrail & Data-Use Review",
    price: "$15K",
    who: "AI-enabled SaaS, legal/compliance",
    get: "AI inventory, data classes, prompt/tool risk review, logging and policy controls.",
    best: "Rolling out an AI assistant that touches customer or regulated data.",
  },
  {
    code: "HSI-007",
    name: "MSP White-Label Assessment",
    price: "$4K",
    who: "MSP / vCISO / compliance partners",
    get: "A repeatable assessment your team can resell under your brand.",
    best: "You own client trust but need senior network-security capacity.",
  },
];

function Packages() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-8 pb-20 pt-28">
          <Kicker index="—" label="Packages" />
          <h1
            className="mt-6 max-w-[22ch] text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.02] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Fixed scope. Senior delivery.{" "}
            <span className="text-gradient-brand">Evidence you can hand an auditor.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Every engagement runs under a written SOW. Pricing is a starting point — final
            scope is confirmed on a thirty-minute intro call.
          </p>
          <div className="mt-14 border-t border-[var(--hair)] pt-8">
            <TrustBadges />
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--hair)]">
        <div className="mx-auto max-w-7xl px-8 py-8">
          <ul>
            {packages.map((p) => (
              <li key={p.code}>
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
                        <span>From <span className="text-ink text-base font-medium" style={{ fontFamily: "var(--font-display)" }}>{p.price}</span></span>
                        {p.duration && <span>· {p.duration}</span>}
                      </div>
                    </div>
                    <dl className="space-y-4 text-sm leading-relaxed">
                      <div>
                        <dt className="font-mono-label text-[10px] text-ink-soft">For</dt>
                        <dd className="mt-1 text-ink">{p.who}</dd>
                      </div>
                      <div>
                        <dt className="font-mono-label text-[10px] text-ink-soft">Includes</dt>
                        <dd className="mt-1 text-ink-soft">{p.get}</dd>
                      </div>
                      <div>
                        <dt className="font-mono-label text-[10px] text-ink-soft">Best when</dt>
                        <dd className="mt-1 text-ink-soft">{p.best}</dd>
                      </div>
                    </dl>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-ink transition group-hover:gap-3">
                    Discuss <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-24 grid gap-10 border-t border-[var(--hair)] py-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <Kicker index="—" label="Scaling model" />
              <h3
                className="mt-5 text-3xl font-medium tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How engagements compound.
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
        title="Not sure which package fits?"
        subtitle="A 30-minute intro call is the fastest way to find out."
      />
    </>
  );
}