import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TrustBadges } from "@/components/TrustBadges";
import { Kicker } from "@/components/Kicker";
import { KeystoneMonogram } from "@/components/KeystoneMonogram";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Herman Stone INC" },
      { name: "description", content: "A boutique advisory practice in senior network engineering — 18+ years across Cisco and Palo Alto, serving healthcare, enterprise, and public-sector clients in Southern California." },
      { property: "og:title", content: "About — Herman Stone INC" },
      { property: "og:description", content: "Senior-only delivery, rigorous change control, audit-ready documentation." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const principles = [
  { n: "I.", title: "Senior expertise only", desc: "Principal-level engineering on every engagement — no juniors learning on your network." },
  { n: "II.", title: "Safety and rollback", desc: "Every change is staged, peer-reviewed, and reversible. The back-out plan exists before the cut." },
  { n: "III.", title: "Documentation as deliverable", desc: "Diagrams, SOPs, and evidence you can hand to an auditor or enterprise customer." },
  { n: "IV.", title: "Clear, direct communication", desc: "Plain English. Written summaries after every working session. No jargon walls." },
];

function About() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-8 pb-12 pt-28">
          <Kicker index="—" label="About" />
          <h1
            className="mt-6 max-w-[20ch] text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.02] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A senior network practice,{" "}
            <span className="italic text-teal-deep">built for work that has to be right.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Herman Stone INC is a California corporation founded in 2024 — a boutique advisory
            practice in senior network engineering and security, serving healthcare, enterprise,
            and public-sector teams across Southern California.
          </p>
        </div>
      </section>

      {/* Principal — anonymous editorial spread, monogram instead of portrait */}
      <section className="border-t border-[var(--hair)]">
        <div className="mx-auto grid max-w-7xl gap-16 px-8 py-24 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <div>
            <div className="aspect-[4/5] flex items-center justify-center border border-[var(--hair)] bg-paper-2 p-10">
              <KeystoneMonogram className="h-auto w-full max-w-[320px] text-teal-deep" strokeWidth={1.1} />
            </div>
            <p className="mt-5 font-mono-label text-[10px] text-ink-soft">
              The keystone — our recurring mark
            </p>
          </div>
          <div>
            <Kicker index="01" label="The principal" />
            <h2
              className="mt-5 text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Principal Engineer
            </h2>
            <p className="mt-3 font-mono-label text-[11px] text-ink-soft">
              Anonymous by design · Senior on every engagement
            </p>
            <p
              className="mt-10 text-2xl leading-snug text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Eighteen-plus years of senior network engineering — Cisco SD-WAN, ISE, Catalyst
              Center, and campus switching alongside Palo Alto Panorama, PA-series, and Prisma
              SD-WAN. Deep healthcare, enterprise, and public-sector experience across
              Southern California.
            </p>
            <p className="mt-7 max-w-[60ch] text-base leading-relaxed text-ink-soft">
              We work anonymously and let the substance speak. Every engagement is senior-only.
              Rigorous change control, peer-reviewed cuts, and audit-ready documentation are
              defaults, not upsells — because the work has to be right the first time.
            </p>

            <dl className="mt-12 grid gap-px border-y border-[var(--hair)] bg-[var(--hair)] sm:grid-cols-3">
              {[
                ["Years", "18+"],
                ["Stack", "Cisco · PAN"],
                ["Region", "SoCal"],
              ].map(([k, v]) => (
                <div key={k} className="bg-paper py-6 px-6">
                  <dt className="font-mono-label text-[10px] text-ink-soft">{k}</dt>
                  <dd
                    className="mt-2 text-3xl font-medium text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Company / SAM.gov */}
      <section className="border-t border-[var(--hair)] bg-paper">
        <div className="mx-auto grid max-w-7xl gap-16 px-8 py-24 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Kicker index="02" label="The firm" />
            <h2
              className="mt-5 text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready for federal and public-sector engagements.
            </h2>
          </div>
          <div>
            <p className="max-w-[60ch] text-lg leading-relaxed text-ink-soft">
              Herman Stone INC is SAM.gov-registered (NPI 1043191950), structured for
              corp-to-corp work and enterprise contracts. Insured, written SOWs, clean change
              control, and evidence-grade documentation.
            </p>
            <div className="mt-10 border-t border-[var(--hair)] pt-8">
              <TrustBadges />
            </div>
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="border-t border-[var(--hair)]">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <Kicker index="03" label="Operating principles" />
          <h2
            className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Four invariants, on every engagement.
          </h2>
          <ul className="mt-14 grid gap-px bg-[var(--hair)] sm:grid-cols-2">
            {principles.map((p) => (
              <li key={p.n} className="bg-paper p-10">
                <span
                  className="text-2xl italic text-ink-soft"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.n}
                </span>
                <h3
                  className="mt-5 text-2xl font-medium tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">{p.desc}</p>
              </li>
            ))}
          </ul>
          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-primary">
              Request a scoped proposal <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}