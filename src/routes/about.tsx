import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, UserCheck, RotateCcw, FileCheck2, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBadges } from "@/components/TrustBadges";

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
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">About</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">
            A senior network practice, built for work that has to be right.
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground sm:text-lg">
            Herman Stone INC is a California corporation founded in 2024. We deliver senior
            network engineering and security consulting to healthcare, enterprise, and
            public-sector teams across Southern California.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-teal/15 to-green/15 text-sm text-muted-foreground">
            Founder headshot
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Founder</p>
            <h2 className="mt-2 text-3xl font-bold">Led by Stone Azefor</h2>
            <p className="mt-5 text-muted-foreground">
              18+ years senior network engineering across Cisco — SD-WAN, ISE, Catalyst Center,
              and campus switching — and Palo Alto — Panorama, PA-series, and Prisma SD-WAN —
              with deep healthcare, enterprise, and public-sector experience in Southern
              California.
            </p>
            <p className="mt-4 text-muted-foreground">
              Engagements are senior-only, with rigorous change control and audit-ready
              documentation as a default — not an upsell.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Company" title="Ready for federal and public-sector engagements." />
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Herman Stone INC is SAM.gov-registered (NPI 1043191950) and structured for
            corp-to-corp and enterprise contracts.
          </p>
          <TrustBadges className="mt-10 justify-start" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="How we work" title="Four principles, on every engagement." center />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {principles.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border border-border bg-card p-7 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-teal/10 text-teal">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="gradient-brand inline-flex items-center gap-2 rounded-md px-6 py-3 font-semibold text-white shadow-md hover:opacity-95"
          >
            Let's talk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}