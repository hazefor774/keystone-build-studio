import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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
    n: "I.",
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
    n: "II.",
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
    n: "III.",
    title: "Palo Alto Networks Security",
    overview:
      "Panorama-managed PA-series environments, HA pair deployments, template and device-group strategy, plus Prisma SD-WAN and policy hygiene.",
    deliverables: [
      "Panorama design: templates and device groups",
      "PA-series HA pair deployment and cutover",
      "Prisma SD-WAN architecture and migration",
      "Segmentation and rule-base cleanup",
    ],
    example: "Example: Palo Alto HA pair branch cutover with zero downtime.",
  },
  {
    id: "automation",
    n: "IV.",
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
      <section>
        <div className="mx-auto max-w-7xl px-8 pb-20 pt-28">
          <Kicker index="—" label="Services" />
          <h1
            className="mt-6 max-w-[20ch] text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.02] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Four disciplines.{" "}
            <span className="italic text-teal-deep">Delivered by a principal.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Every engagement runs against a written SOW. Change control, peer review, and a
            tested rollback are defaults — not upsells.
          </p>
          <nav className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-[var(--hair)] pt-6">
            {services.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-center gap-3 text-sm text-ink-soft hover:text-ink"
              >
                <span className="font-mono-label text-[10px] text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                <span className="link-underline">{s.title.split(" & ")[0]}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-8">
        {services.map(({ id, n, title, overview, deliverables, example }, i) => (
          <section
            key={id}
            id={id}
            className="scroll-mt-24 grid gap-12 border-t border-[var(--hair)] py-24 lg:grid-cols-[1fr_1.6fr] lg:gap-20"
          >
            <div>
              <span
                className="text-2xl italic text-ink-soft"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {n}
              </span>
              <h2
                className="mt-6 text-[clamp(1.875rem,3vw,2.75rem)] font-medium leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h2>
              <p className="mt-7 max-w-md text-base leading-relaxed text-ink-soft">{overview}</p>
            </div>
            <div>
              <p className="font-mono-label text-[10px] text-ink-soft">Deliverables</p>
              <ul className="mt-6 divide-y divide-[var(--hair)] border-t border-[var(--hair)]">
                {deliverables.map((d) => (
                  <li key={d} className="grid grid-cols-[auto_1fr] gap-6 py-5">
                    <span className="font-mono-label text-[10px] text-ink-soft">—</span>
                    <span className="text-lg leading-snug text-ink">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 border-l-2 border-teal-deep pl-6">
                <p className="font-mono-label text-[10px] text-ink-soft">Case</p>
                <p
                  className="mt-2 text-lg italic leading-snug text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {example.replace(/^Example:\s*/, "")}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-[var(--hair)] bg-paper">
        <div className="mx-auto max-w-4xl px-8 py-24 text-center">
          <Kicker index="—" label="Most engagements start here" className="justify-center inline-flex" />
          <p
            className="mt-6 text-3xl font-medium tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Fixed-scope engagements, productized.
          </p>
          <Link to="/packages" className="btn-ghost mt-10 inline-flex">
            View our engagements <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <CTABand
        kicker="Scope"
        title="Ready to scope your project?"
        subtitle="A 30-minute scoping call is the fastest path to clarity."
        ctaLabel="Request a scoped proposal"
      />
    </>
  );
}