import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker } from "@/components/Kicker";
import { TrustStrip } from "@/components/TrustStrip";
import { firm } from "@/lib/firm-config";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities Statement — Herman Stone INC" },
      {
        name: "description",
        content:
          "One-page capabilities statement for public-sector and enterprise buyers — company snapshot, NAICS codes, core competencies, differentiators, and POC.",
      },
      { property: "og:title", content: "Capabilities Statement — Herman Stone INC" },
      { property: "og:description", content: "Senior network engineering, productized for procurement." },
      { property: "og:url", content: "/capabilities" },
    ],
    links: [{ rel: "canonical", href: "/capabilities" }],
  }),
  component: Capabilities,
});

function Capabilities() {
  return (
    <section>
      <div className="mx-auto max-w-4xl px-5 sm:px-8 pb-16 sm:pb-24 pt-24 sm:pt-28">
        <Kicker index="—" label="Capabilities Statement" />
        <h1
          className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Herman Stone INC
        </h1>
        <p className="mt-3 font-mono-label text-[10px] text-ink-soft">
          {firm.entity} · est. {firm.foundedYear} · {firm.region}
        </p>

        <div className="mt-12">
          <TrustStrip />
        </div>

        <Block title="Company snapshot">
          A boutique advisory practice in senior network engineering and security. Senior-only
          delivery on every engagement. All work performed under written SOW with documented
          change control and an audit-grade evidence pack as a deliverable.
        </Block>

        <Block title="Core competencies">
          <ul className="mt-4 grid gap-2 text-base leading-relaxed text-ink-soft sm:grid-cols-2">
            <li>· Cisco SD-WAN, Catalyst, ISE, ACI</li>
            <li>· Palo Alto Networks, Panorama, Prisma SD-WAN</li>
            <li>· Network segmentation and access hardening</li>
            <li>· Hybrid cloud network security (Azure, AWS)</li>
            <li>· SIEM and detection pipeline starter</li>
            <li>· Network automation (Python, Ansible)</li>
          </ul>
        </Block>

        <Block title="Differentiators">
          Principal-led delivery, no juniors learning on production. Lab-rehearsed cutovers with
          documented back-out. Documentation as a first-class deliverable, not an afterthought.
        </Block>

        <Block title="Past performance (anonymized)">
          See <Link to="/work" className="link-underline">case studies</Link> for sector-level
          summaries of recent engagements in healthcare, enterprise IT, and public sector.
        </Block>

        <Block title="Corporate identifiers">
          <ul className="mt-4 space-y-2 font-mono-label text-[11px] text-ink-soft">
            <li>Entity · {firm.entity}</li>
            <li>NPI · {firm.npi}</li>
            <li>UEI · {firm.uei ?? "TODO(hsi-v5): SAM_UEI"}</li>
            <li>CAGE · {firm.cage ?? "TODO(hsi-v5): SAM_CAGE"}</li>
            <li>
              NAICS · {firm.naics.length ? firm.naics.join(", ") : "TODO(hsi-v5): list primary NAICS codes"}
            </li>
          </ul>
        </Block>

        <Block title="Point of contact">
          <a href={`mailto:${firm.email}`} className="link-underline">
            {firm.email}
          </a>
        </Block>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-14 border-t border-[var(--hair)] pt-10">
      <p className="font-mono-label text-[10px] text-ink-soft">{title}</p>
      <div className="mt-4 text-lg leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}