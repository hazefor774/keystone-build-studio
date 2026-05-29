import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Network,
  ShieldCheck,
  Workflow,
  Cpu,
  Building2,
  Rocket,
  Banknote,
  HeartPulse,
  Factory,
  Cloud,
  UserCheck,
  RotateCcw,
  FileCheck2,
  CheckCircle2,
} from "lucide-react";
import { TrustBadges } from "@/components/TrustBadges";
import { CTABand } from "@/components/CTABand";
import { SectionHeading } from "@/components/SectionHeading";
import { ArchBackdrop } from "@/components/ArchBackdrop";

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
  { icon: Network, title: "Cisco SD-WAN", desc: "Catalyst SD-WAN design, branch cutovers, Cloud onRamp to Azure." },
  { icon: UserCheck, title: "Cisco ISE & Identity", desc: "Cluster design, 802.1X, posture and profiling rollouts." },
  { icon: ShieldCheck, title: "Palo Alto Networks", desc: "Panorama, PA-series HA, Prisma SD-WAN, segmentation." },
  { icon: Workflow, title: "Network Automation", desc: "Python/Ansible across IOS-XE, NX-OS, FTD with rollback." },
];

const industries = [
  { icon: Building2, title: "MSPs", desc: "Senior network-security capacity you can white-label." },
  { icon: Rocket, title: "SaaS / AI Startups", desc: "Pass enterprise security reviews faster." },
  { icon: Banknote, title: "Fintech", desc: "Access control, segmentation, logging, and evidence." },
  { icon: HeartPulse, title: "Healthcare", desc: "Protect systems that touch patient data; admin-access hardening." },
  { icon: Factory, title: "Manufacturing / OT", desc: "Careful IT-to-OT segmentation without risking uptime." },
  { icon: Cloud, title: "Cloud-first firms", desc: "Validate route tables, SG/NSG rules, and flow logs post-migration." },
];

const values = [
  { icon: UserCheck, title: "Senior engineer on every engagement", desc: "No juniors learning on your network." },
  { icon: RotateCcw, title: "Change-control and rollback built in", desc: "Every change is staged, reversible, and reviewed." },
  { icon: FileCheck2, title: "Documentation as a deliverable", desc: "Evidence you can hand to an auditor or enterprise customer." },
];

const proofs = [
  { title: "Zero-downtime PA-450 HA branch cutover", tag: "Palo Alto · HA" },
  { title: "Multi-node ISE cluster upgrade, validated end-to-end", tag: "Cisco ISE" },
  { title: "59-branch SD-WAN to Azure", tag: "SD-WAN · Cloud" },
  { title: "Firewall rule cleanup: 1,200 → 180 rules", tag: "Segmentation" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <ArchBackdrop />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-teal shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5" />
              Senior network & security consulting · Southern California
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
              Enterprise networks,
              <br />
              <span className="text-gradient-brand">engineered to hold under pressure.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Herman Stone INC delivers senior-level Cisco, Palo Alto, and network automation
              expertise to healthcare, enterprise, and public-sector teams across Southern
              California — as fixed-scope audits, sprints, and retainers.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="gradient-brand inline-flex items-center gap-2 rounded-md px-6 py-3 font-semibold text-white shadow-md transition hover:opacity-95"
              >
                Book a Call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/packages"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 font-semibold text-foreground transition hover:border-teal hover:text-teal"
              >
                See our packages
              </Link>
            </div>
          </div>
          <TrustBadges className="mt-14" />
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="What we do"
            title="Four capabilities. Senior delivery on every one."
            center
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <Link
                key={title}
                to="/services"
                className="group rounded-lg border border-border bg-background p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal hover:shadow-md"
              >
                <div className="gradient-brand inline-flex h-11 w-11 items-center justify-center rounded-md text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal opacity-0 transition group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="How we work"
            title="A productized model: Audit → Sprint → Retainer."
            subtitle="Start with a fixed-scope audit; scale into implementation and ongoing advisory as trust grows."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", title: "Audit", desc: "Map risk, find urgent fixes, deliver a prioritized 90-day roadmap." },
              { n: "02", title: "Sprint", desc: "Implement the fix — segmentation, access, logging, cloud, AI guardrails." },
              { n: "03", title: "Retainer", desc: "Ongoing architecture review, change advisory, and evidence support." },
            ].map((s) => (
              <div key={s.n} className="rounded-lg border border-border bg-card p-7 shadow-sm">
                <span className="font-display text-sm font-bold text-teal">{s.n}</span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Who we help" title="Built for teams that can't afford a bad cutover." center />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-lg border border-border bg-background p-6 shadow-sm">
                <Icon className="h-6 w-6 text-teal" />
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HSI */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Why HSI" title="Three things you can count on." center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-lg border border-border bg-card p-7 shadow-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-teal/10 text-teal">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Recent work" title="Outcomes, not hours." center />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {proofs.map((p) => (
              <div key={p.title} className="rounded-lg border border-border bg-background p-6 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-green" />
                <p className="mt-4 text-sm font-semibold text-foreground">{p.title}</p>
                <span className="mt-3 inline-block rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                  {p.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Not sure where the risk is?"
        subtitle="Start with a readiness audit. Fixed scope, fixed price, 10 business days."
      />
    </>
  );
}
