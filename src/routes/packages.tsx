import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { TrustBadges } from "@/components/TrustBadges";
import { CTABand } from "@/components/CTABand";

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
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Packages</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">
            Fixed scope. Senior delivery. Evidence you can hand to an auditor.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground sm:text-lg">
            Every engagement runs under a written SOW. Pricing below is a starting point — final
            scope is confirmed on a 30-minute intro call.
          </p>
          <TrustBadges className="mt-10" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.code}
              className="flex flex-col rounded-lg border border-border bg-card p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-teal hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-bold tracking-wider text-teal">
                  {p.code}
                </span>
                {p.duration && (
                  <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] text-muted-foreground">
                    {p.duration}
                  </span>
                )}
              </div>
              <h2 className="mt-3 text-lg font-semibold leading-snug">{p.name}</h2>
              <p className="mt-3 text-2xl font-bold text-foreground">
                Starting at <span className="text-gradient-brand">{p.price}</span>
              </p>
              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold uppercase tracking-wider text-[11px] text-teal">Who it's for</dt>
                  <dd className="mt-1 text-foreground/90">{p.who}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wider text-[11px] text-teal">What you get</dt>
                  <dd className="mt-1 text-muted-foreground">{p.get}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wider text-[11px] text-teal">Best when</dt>
                  <dd className="mt-1 text-muted-foreground">{p.best}</dd>
                </div>
              </dl>
              <Link
                to="/contact"
                search={{ pkg: p.code }}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-teal hover:text-teal"
              >
                Discuss this package <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-border bg-card p-8 shadow-sm">
          <h3 className="text-xl font-bold">How engagements scale</h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Most clients begin with an <strong className="text-foreground">Audit</strong> (HSI-001),
            move into a <strong className="text-foreground">Sprint</strong> (HSI-002 through HSI-006)
            to implement the highest-priority fix, then move onto a{" "}
            <strong className="text-foreground">Retainer</strong> for ongoing architecture review,
            change advisory, and evidence support.
          </p>
          <p className="mt-4 inline-flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" />
            All work is authorized and scoped under a written Statement of Work.
          </p>
        </div>
      </section>

      <CTABand title="Not sure which package fits?" subtitle="A 30-minute intro call is the fastest way to find out." />
    </>
  );
}