import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Network, UserCheck, ShieldCheck, Workflow } from "lucide-react";
import { CTABand } from "@/components/CTABand";
import { Kicker } from "@/components/Kicker";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Herman Stone INC" },
      { name: "description", content: "Cisco SD-WAN, Cisco ISE, Palo Alto Networks, and network automation — senior delivery across four core capabilities." },
      { property: "og:title", content: "Services — Herman Stone INC" },
      { property: "og:description", content: "Senior network engineering across Cisco, Palo Alto, and automation." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    id: "sd-wan",
    icon: Network,
    title: "Cisco SD-WAN & WAN Modernization",
    overview:
      "Catalyst SD-WAN (vManage/cEdge) design and migration for multi-site enterprises, with careful branch cutovers and validated cloud onramps.",
    deliverables: [
      "Catalyst SD-WAN design and migration",
      "Multi-circuit branch cutovers with rollback",
      "Cloud onRamp to Azure (and AWS/GCP on request)",
      "Redundancy, QoS, and runbooks",
    ],
    example: "Example: 59-branch SD-WAN migration to Azure with zero unplanned downtime.",
  },
  {
    id: "ise",
    icon: UserCheck,
    title: "Cisco ISE & Network Access Control",
    overview:
      "ISE cluster design, upgrades, and rollouts of 802.1X across wired and wireless — with lab validation before any production cutover.",
    deliverables: [
      "ISE cluster design, upgrades, patching",
      "802.1X wired/wireless with posture and profiling",
      "SOP-driven rollout plans",
      "Lab validation and pilot waves",
    ],
    example: "Example: multi-node ISE cluster upgrade, validated end-to-end without an outage.",
  },
  {
    id: "palo-alto",
    icon: ShieldCheck,
    title: "Palo Alto Networks Security",
    overview:
      "Panorama-managed PA-series environments, HA pair deployments, template and device-group strategy, plus Prisma SD-WAN and policy hygiene.",
    deliverables: [
      "Panorama design: templates and device groups",
      "PA-series HA pair deployment and cutover",
      "Prisma SD-WAN architecture and migration",
      "Segmentation and rule-base cleanup",
    ],
    example: "Example: PA-450 HA pair branch cutover with zero downtime.",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Network Automation & Engineering Standards",
    overview:
      "Python and Ansible automation across IOS-XE, NX-OS, FTD, and SD-WAN — with SSH-safe migration scripting, rollback, and ISO-9001-style documentation.",
    deliverables: [
      "Python/Ansible across IOS-XE, NX-OS, FTD, SD-WAN",
      "SSH-safe migration scripting with rollback",
      "ISO-9001-style documentation and SOPs",
      "Engineering standards and change-control templates",
    ],
    example: "Example: scripted, reversible config rollouts across hundreds of devices.",
  },
];

function Services() {
  return (
    <>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24">
          <Kicker index="//" label="Services" />
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold leading-[1] tracking-tight sm:text-6xl">
            Four disciplines. <span className="text-gradient-brand">Delivered by a principal.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground sm:text-lg">
            Every engagement runs against a written SOW. Change control and rollback are built in,
            not added later.
          </p>
          <nav className="mt-10 flex flex-wrap gap-2">
            {services.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="border border-[var(--line)] bg-ink-800 px-3 py-2 font-mono-label text-[10px] text-muted-foreground transition hover:border-teal-lit hover:text-teal-lit"
              >
                <span className="text-teal-lit">0{i + 1}</span>
                <span className="mx-2 text-ink-600">/</span>
                {s.title.split(" ").slice(0, 2).join(" ").toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-px bg-[var(--line)] px-0 py-px sm:px-6 sm:py-20">
        {services.map(({ id, icon: Icon, title, overview, deliverables, example }, i) => (
          <section
            key={id}
            id={id}
            className="scroll-mt-24 grid gap-px bg-[var(--line)] bg-ink-900 md:grid-cols-[1fr_1.5fr]"
          >
            <div className="bg-ink-900 p-8 sm:p-10">
              <span className="font-mono-label text-[10px] text-teal-lit">SVC-{String(i + 1).padStart(3, "0")}</span>
              <Icon className="mt-6 h-8 w-8 text-teal-lit" strokeWidth={1.25} />
              <h2 className="mt-6 text-3xl font-bold leading-tight">{title}</h2>
              <p className="mt-5 text-muted-foreground">{overview}</p>
            </div>
            <div className="relative bg-ink-800 p-8 sm:p-10">
              <p className="font-mono-label text-[11px] text-teal-lit">// Deliverables</p>
              <ul className="mt-6 divide-y divide-[var(--line)]">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 py-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" strokeWidth={2} />
                    <span className="text-text/90">{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-[var(--line)] pt-5 text-sm text-muted-foreground">
                <span className="font-mono-label text-[10px] text-teal-lit">CASE&nbsp;·&nbsp;</span>
                {example.replace(/^Example:\s*/, "")}
              </p>
            </div>
          </section>
        ))}
      </div>

      <section className="border-y border-[var(--line)] bg-ink-800/40">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <p className="font-mono-label text-[11px] text-teal-lit">// Most engagements start here</p>
          <p className="mt-4 text-2xl font-bold">Fixed-scope packages, productized.</p>
          <Link to="/packages" className="btn-ghost mt-7 inline-flex">
            See our packages <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <CTABand
        kicker="Scope"
        title="Ready to scope your project?"
        subtitle="A 30-minute intro call is the fastest path to clarity."
      />
    </>
  );
}