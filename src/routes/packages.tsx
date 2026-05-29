import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { TrustBadges } from "@/components/TrustBadges";
import { CTABand } from "@/components/CTABand";
import { Kicker, StatusDot } from "@/components/Kicker";

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
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24">
          <Kicker index="//" label="Packages" />
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1] tracking-tight sm:text-6xl">
            Fixed scope. Senior delivery.{" "}
            <span className="text-gradient-brand">Evidence you can hand an auditor.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground sm:text-lg">
            Every engagement runs under a written SOW. Pricing is a starting point — final
            scope is confirmed on a 30-minute intro call.
          </p>
          <div className="mt-10">
            <TrustBadges className="justify-start" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <article key={p.code} className="tech-card flex flex-col p-7">
              <span className="tick-bl" />
              <span className="tick-br" />

              <div className="flex items-center justify-between">
                <span className="font-mono-label text-[11px] text-teal-lit">{p.code}</span>
                <StatusDot />
              </div>

              <h2 className="mt-6 text-xl font-bold leading-snug">{p.name}</h2>

              <div className="mt-5 flex items-baseline gap-2 border-b border-[var(--line)] pb-5">
                <span className="font-mono-label text-[10px] text-muted-foreground">STARTING AT</span>
                <span
                  className="text-2xl font-extrabold text-text"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.price}
                </span>
                {p.duration && (
                  <span className="ml-auto font-mono-label text-[10px] text-muted-foreground">
                    {p.duration}
                  </span>
                )}
                {i === 0 && (
                  <span className="ml-auto border border-[var(--amber)]/40 px-2 py-0.5 font-mono-label text-[9px] text-amber">
                    LIMITED Q3
                  </span>
                )}
              </div>

              <dl className="mt-5 flex-1 divide-y divide-[var(--line)] text-sm">
                <div className="grid grid-cols-[80px_1fr] gap-4 py-3">
                  <dt className="font-mono-label text-[10px] text-teal-lit">WHO</dt>
                  <dd className="text-text/90">{p.who}</dd>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-4 py-3">
                  <dt className="font-mono-label text-[10px] text-teal-lit">WHAT</dt>
                  <dd className="text-muted-foreground">{p.get}</dd>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-4 py-3">
                  <dt className="font-mono-label text-[10px] text-teal-lit">BEST WHEN</dt>
                  <dd className="text-muted-foreground">{p.best}</dd>
                </div>
              </dl>

              <Link
                to="/contact"
                search={{ pkg: p.code }}
                className="mt-6 inline-flex items-center justify-between border-t border-[var(--line)] pt-5 font-mono-label text-[11px] text-teal-lit transition hover:text-text"
              >
                <span>Discuss this package</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 border border-[var(--line)] bg-ink-800 p-10">
          <Kicker index="//" label="Scaling model" />
          <h3 className="mt-4 text-2xl font-bold">How engagements compound.</h3>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Clients begin with an <span className="text-teal-lit">Audit</span> (HSI-001), move into
            a <span className="text-teal-lit">Sprint</span> (HSI-002–006) to implement the
            highest-priority fix, then transition to a{" "}
            <span className="text-teal-lit">Retainer</span> for ongoing architecture review and
            evidence support.
          </p>
          <p className="mt-5 inline-flex items-start gap-2 font-mono-label text-[10px] text-muted-foreground">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green" />
            ALL WORK AUTHORIZED UNDER WRITTEN SOW
          </p>
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