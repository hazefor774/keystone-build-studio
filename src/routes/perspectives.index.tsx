import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Kicker } from "@/components/Kicker";
import { perspectives, formatPerspectiveDate } from "@/lib/perspectives";
import { firm } from "@/lib/firm-config";

export const Route = createFileRoute("/perspectives/")({
  head: () => ({
    meta: [
      { title: "Perspectives — Herman Stone INC" },
      {
        name: "description",
        content:
          "Field notes on Cisco SD-WAN cutovers, ISE upgrades, Palo Alto HA deployments, and network automation — written from real engagements.",
      },
      { property: "og:title", content: "Perspectives — Herman Stone INC" },
      {
        property: "og:description",
        content: "Senior network engineering essays from the production-cutover side of the work.",
      },
      { property: "og:url", content: "/perspectives" },
    ],
    links: [{ rel: "canonical", href: "/perspectives" }],
  }),
  component: PerspectivesIndex,
});

function PerspectivesIndex() {
  const [featured, ...rest] = perspectives;

  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-8 pb-20 pt-28">
          <Kicker index="—" label="Perspectives" />
          <h1
            className="mt-6 max-w-[22ch] text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.02] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lessons from the{" "}
            <span className="italic text-teal-deep">production-cutover side</span> of the network.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            A senior point of view on the work — specific, written from real engagements, free of
            vendor cheerleading.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="border-y border-[var(--hair)] bg-paper">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <Link
            to="/perspectives/$slug"
            params={{ slug: featured.slug }}
            className="group grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20"
          >
            <div>
              <div className="flex items-center gap-5 font-mono-label text-[10px] text-ink-soft">
                <span>Featured</span>
                <span>·</span>
                <span>{featured.tag}</span>
                <span>·</span>
                <span>{formatPerspectiveDate(featured.date)}</span>
                <span>·</span>
                <span>{featured.readingTime}</span>
              </div>
              <h2
                className="mt-8 text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {featured.title}
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-ink-soft">{featured.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-ink transition group-hover:gap-3">
                Read the perspective <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* List */}
      <section>
        <div className="mx-auto max-w-7xl px-8 py-20">
          <Kicker index="—" label="More perspectives" />
          <ul className="mt-10">
            {rest.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/perspectives/$slug"
                  params={{ slug: p.slug }}
                  className="group grid items-baseline gap-6 border-b border-[var(--hair)] py-10 lg:grid-cols-[140px_1fr_220px_auto] lg:gap-12"
                >
                  <span className="font-mono-label text-[10px] text-ink-soft">{p.tag}</span>
                  <h3
                    className="text-2xl font-medium leading-tight tracking-tight sm:text-[1.75rem]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.title}
                  </h3>
                  <span className="font-mono-label text-[10px] text-ink-soft">
                    {formatPerspectiveDate(p.date)}
                  </span>
                  <ArrowRight className="h-4 w-4 text-ink-soft transition group-hover:translate-x-1 group-hover:text-ink" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-16 text-center text-sm text-ink-soft">
            More perspectives in the pipeline. Topic suggestions →{" "}
            <a href={`mailto:${firm.email}`} className="link-underline">
              {firm.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}