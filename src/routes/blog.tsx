import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { Kicker } from "@/components/Kicker";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Herman Stone INC" },
      { name: "description", content: "Field notes on Cisco SD-WAN cutovers, ISE upgrades, Palo Alto HA deployments, and network automation." },
      { property: "og:title", content: "Insights — Herman Stone INC" },
      { property: "og:description", content: "Lessons learned from senior network engineering work." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  {
    slug: "pa-450-ha-branch-cutover",
    title: "Designing a zero-downtime PA-450 HA branch cutover",
    date: "2025-09-12",
    tag: "Palo Alto",
    excerpt:
      "Why HA-pair cutovers fail in practice, and the staged plan we use to land a clean failover with no user-visible impact.",
  },
  {
    slug: "ise-cluster-upgrades",
    title: "ISE cluster upgrades without the 2 a.m. surprises",
    date: "2025-08-04",
    tag: "Cisco ISE",
    excerpt:
      "A pre-flight checklist, validation lab patterns, and the small details that make ISE upgrades feel boring — in a good way.",
  },
  {
    slug: "sd-wan-rollback",
    title: "Why your SD-WAN migration needs a rollback plan before a single command",
    date: "2025-07-15",
    tag: "SD-WAN",
    excerpt:
      "The cheapest insurance in network engineering: a tested, written rollback that any engineer on call can execute under pressure.",
  },
];

function Blog() {
  return (
    <>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24">
          <Kicker index="//" label="Field Notes" />
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1] tracking-tight sm:text-6xl">
            Lessons from the{" "}
            <span className="text-gradient-brand">production-cutover side</span> of the network.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground sm:text-lg">
            Short, specific, lessons-learned from real engagements. No vendor cheerleading.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-px bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <article
              key={p.slug}
              className="group flex flex-col bg-ink-900 p-7 transition hover:bg-ink-800"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono-label text-[10px] text-teal-lit">
                  LOG-{String(i + 1).padStart(3, "0")}
                </span>
                <span className="border border-[var(--line)] px-2 py-1 font-mono-label text-[10px] text-muted-foreground">
                  {p.tag}
                </span>
              </div>
              <h2 className="mt-10 text-xl font-bold leading-snug">{p.title}</h2>
              <p className="mt-4 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-8 flex items-center justify-between border-t border-[var(--line)] pt-5 font-mono-label text-[10px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  {new Date(p.date + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric", timeZone: "UTC" }).toUpperCase()}
                </span>
                <span className="inline-flex items-center gap-1 text-teal-lit opacity-60 transition group-hover:opacity-100">
                  READ <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-14 text-center font-mono-label text-[11px] text-muted-foreground">
          // More notes incoming. Topic suggestions →{" "}
          <a href="mailto:hello@hermanstone.com" className="text-teal-lit hover:underline">
            hello@hermanstone.com
          </a>
        </p>
      </section>
    </>
  );
}