import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Network,
  ShieldCheck,
  Workflow,
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
import { Kicker, StatusDot } from "@/components/Kicker";
import { TopologyHero } from "@/components/TopologyHero";

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
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 sm:pt-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <div className="reveal reveal-1">
              <StatusDot label="Accepting Q3 engagements · Southern California" />
            </div>
            <h1 className="reveal reveal-2 mt-6 max-w-2xl text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold leading-[0.96] tracking-tight">
              Enterprise networks,{" "}
              <span className="text-gradient-brand">engineered to hold under pressure.</span>
            </h1>
            <p className="reveal reveal-3 mt-7 max-w-xl text-base text-muted-foreground sm:text-lg">
              Senior-level Cisco, Palo Alto, and network automation expertise — delivered as
              fixed-scope audits, sprints, and retainers. No juniors learning on your network.
            </p>
            <div className="reveal reveal-4 mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Book a Call <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link to="/packages" className="btn-ghost">
                See our packages
              </Link>
            </div>
            <div className="reveal reveal-5 mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-[var(--line)] pt-6 font-mono-label text-[10px] text-muted-foreground">
              <div>
                <p className="text-2xl font-bold text-text" style={{ fontFamily: "var(--font-display)" }}>18+</p>
                <p className="mt-1">Years senior delivery</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-text" style={{ fontFamily: "var(--font-display)" }}>59</p>
                <p className="mt-1">Branch cutovers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-text" style={{ fontFamily: "var(--font-display)" }}>0</p>
                <p className="mt-1">Unplanned outages</p>
              </div>
            </div>
          </div>

          <div className="reveal reveal-3 relative h-[420px] -mr-12 lg:h-[480px] lg:-mr-24">
            <div className="absolute inset-0 border border-[var(--line)] bg-ink-800/40">
              <TopologyHero />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-[var(--line)] bg-ink-800/60">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <TrustBadges />
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              index="01"
              eyebrow="Capabilities"
              title="Four disciplines. Senior delivery on every one."
            />
            <Link to="/services" className="font-mono-label text-[11px] text-teal-lit hover:underline">
              View all services →
            </Link>
          </div>
          <div className="mt-14 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, desc }, i) => (
              <Link
                key={title}
                to="/services"
                className="group relative bg-ink-900 p-7 transition hover:bg-ink-800"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-6 w-6 text-teal-lit" strokeWidth={1.5} />
                  <span className="font-mono-label text-[10px] text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-10 text-lg font-bold leading-tight">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
                <span className="mt-6 inline-flex items-center gap-1 font-mono-label text-[10px] text-teal-lit opacity-60 transition group-hover:opacity-100">
                  Trace path <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-b border-[var(--line)] bg-ink-800/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            index="02"
            eyebrow="Engagement Model"
            title="Audit → Sprint → Retainer."
            subtitle="Fixed scope first. Implementation next. Ongoing advisory as trust compounds."
          />
          <div className="mt-14 grid gap-px bg-[var(--line)] md:grid-cols-3">
            {[
              { n: "01", title: "Audit", desc: "Map risk. Find urgent fixes. Deliver a prioritized 90-day roadmap.", meta: "10 BUSINESS DAYS" },
              { n: "02", title: "Sprint", desc: "Implement the fix — segmentation, access, logging, cloud, AI guardrails.", meta: "4-8 WEEKS" },
              { n: "03", title: "Retainer", desc: "Architecture review, change advisory, and audit-grade evidence support.", meta: "MONTHLY" },
            ].map((s) => (
              <div key={s.n} className="relative bg-ink-900 p-9">
                <div className="flex items-center justify-between">
                  <span
                    className="text-5xl font-extrabold text-teal-lit/80"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.n}
                  </span>
                  <span className="font-mono-label text-[10px] text-muted-foreground">{s.meta}</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            index="03"
            eyebrow="Client profile"
            title="Built for teams that can't afford a bad cutover."
          />
          <div className="mt-14 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-ink-900 p-7">
                <Icon className="h-5 w-5 text-teal-lit" strokeWidth={1.5} />
                <h3 className="mt-5 text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HSI */}
      <section className="border-b border-[var(--line)] bg-ink-800/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading index="04" eyebrow="Operating principles" title="Three things you can count on." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="tech-card p-8">
                <span className="tick-bl" />
                <span className="tick-br" />
                <Icon className="h-6 w-6 text-teal-lit" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading index="05" eyebrow="Recent operations" title="Outcomes, not hours." />
          <div className="mt-14 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {proofs.map((p, i) => (
              <div key={p.title} className="bg-ink-900 p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono-label text-[10px] text-teal-lit">CASE-{String(i + 1).padStart(3, "0")}</span>
                  <CheckCircle2 className="h-4 w-4 text-green" strokeWidth={1.5} />
                </div>
                <p className="mt-8 text-sm font-semibold text-text leading-snug">{p.title}</p>
                <span className="mt-5 inline-block border border-[var(--line)] px-2 py-1 font-mono-label text-[10px] text-muted-foreground">
                  {p.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        kicker="Engage"
        title="Not sure where the risk is?"
        subtitle="Start with a readiness audit. Fixed scope, fixed price, ten business days."
      />
    </>
  );
}
