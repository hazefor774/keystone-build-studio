import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Network, UserCheck, ShieldCheck, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";

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
      <section className="relative border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">
            Four capabilities, delivered by a senior engineer.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground sm:text-lg">
            Every engagement runs against a written SOW with change-control and rollback built in.
            We don't put juniors on your network.
          </p>
          <nav className="mt-8 flex flex-wrap gap-2">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80 transition hover:border-teal hover:text-teal"
              >
                {s.title.split(" ").slice(0, 3).join(" ")}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-6 py-20">
        {services.map(({ id, icon: Icon, title, overview, deliverables, example }) => (
          <section key={id} id={id} className="scroll-mt-24 grid gap-8 md:grid-cols-[1fr_1.5fr]">
            <div>
              <div className="gradient-brand inline-flex h-12 w-12 items-center justify-center rounded-md text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-bold sm:text-3xl">{title}</h2>
              <p className="mt-4 text-muted-foreground">{overview}</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-teal">
                What we deliver
              </p>
              <ul className="mt-4 space-y-3">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-border pt-4 text-sm italic text-muted-foreground">
                {example}
              </p>
            </div>
          </section>
        ))}

        <div className="rounded-lg border border-border bg-card p-8 text-center shadow-sm">
          <p className="text-lg font-semibold">
            Most engagements start as a fixed-scope package.
          </p>
          <Link
            to="/packages"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-teal hover:text-green"
          >
            See our packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <CTABand title="Ready to scope your project?" subtitle="A 30-minute intro call is the fastest path to clarity." />
    </>
  );
}