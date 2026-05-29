import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, UserCheck, RotateCcw, FileCheck2, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBadges } from "@/components/TrustBadges";
import { Kicker } from "@/components/Kicker";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Herman Stone INC" },
      { name: "description", content: "Led by Stone Azefor. 18+ years senior network engineering across Cisco and Palo Alto, serving healthcare, enterprise, and public-sector clients in Southern California." },
      { property: "og:title", content: "About — Herman Stone INC" },
      { property: "og:description", content: "Senior-only delivery, rigorous change control, audit-ready documentation." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const principles = [
  { icon: UserCheck, title: "Senior expertise only", desc: "Principal-level engineering on every engagement — no juniors learning on your network." },
  { icon: RotateCcw, title: "Safety and rollback", desc: "Every change is staged, peer-reviewed, and reversible. We plan the back-out before the cut." },
  { icon: FileCheck2, title: "Documentation as deliverable", desc: "Diagrams, SOPs, and evidence you can hand to an auditor or enterprise customer." },
  { icon: MessageSquare, title: "Clear, direct communication", desc: "Plain English, written summaries after every working session, no jargon walls." },
];

function About() {
  return (
    <>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24">
          <Kicker index="//" label="About" />
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1] tracking-tight sm:text-6xl">
            A senior network practice,{" "}
            <span className="text-gradient-brand">built for work that has to be right.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-muted-foreground sm:text-lg">
            Herman Stone INC is a California corporation founded in 2024. Senior network
            engineering and security consulting for healthcare, enterprise, and public-sector
            teams across Southern California.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr]">
          <div className="relative aspect-square border border-[var(--line)] bg-ink-800">
            <div className="absolute inset-0 grid place-items-center font-mono-label text-[10px] text-muted-foreground">
              FOUNDER · PORTRAIT
            </div>
            <span className="tick-bl" />
            <span className="tick-br" />
            <div
              className="absolute inset-0 opacity-30"
              style={{ background: "radial-gradient(circle at 50% 40%, rgba(31,182,196,0.3), transparent 60%)" }}
            />
          </div>
          <div>
            <Kicker index="01" label="Founder" />
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">Stone Azefor</h2>
            <p className="mt-2 font-mono-label text-[11px] text-teal-lit">PRINCIPAL · NETWORK ENGINEER</p>
            <p className="mt-6 text-muted-foreground">
              18+ years senior network engineering across Cisco — SD-WAN, ISE, Catalyst Center,
              campus switching — and Palo Alto — Panorama, PA-series, Prisma SD-WAN — with deep
              healthcare, enterprise, and public-sector experience in Southern California.
            </p>
            <p className="mt-4 text-muted-foreground">
              Engagements are senior-only. Rigorous change control and audit-ready documentation
              are defaults, not upsells.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
              {[
                ["YRS", "18+"],
                ["STACK", "Cisco · PAN"],
                ["REGION", "SoCal"],
              ].map(([k, v]) => (
                <div key={k} className="bg-ink-900 p-4">
                  <dt className="font-mono-label text-[10px] text-muted-foreground">{k}</dt>
                  <dd className="mt-2 text-lg font-bold text-text" style={{ fontFamily: "var(--font-display)" }}>
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-ink-800/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading index="02" eyebrow="Company" title="Ready for federal and public-sector engagements." />
          <p className="mt-5 max-w-3xl text-muted-foreground">
            Herman Stone INC is SAM.gov-registered (NPI 1043191950) and structured for
            corp-to-corp and enterprise contracts.
          </p>
          <TrustBadges className="mt-10 justify-start" />
        </div>
      </section>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading index="03" eyebrow="Operating principles" title="Four invariants, on every engagement." />
          <div className="mt-14 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="bg-ink-900 p-7">
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-teal-lit" strokeWidth={1.5} />
                  <span className="font-mono-label text-[10px] text-muted-foreground">P-{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 text-base font-bold">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/contact" className="btn-primary">
              Let's talk <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}