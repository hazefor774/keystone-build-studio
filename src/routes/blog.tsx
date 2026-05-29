import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";

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
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Insights</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">
            Field notes from the production-cutover side of the network.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground sm:text-lg">
            Short, specific, lessons-learned from real engagements. No vendor cheerleading.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col rounded-lg border border-border bg-card p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-teal hover:shadow-md"
            >
              <span className="inline-block w-fit rounded-full bg-teal/10 px-2.5 py-1 text-[11px] font-semibold text-teal">
                {p.tag}
              </span>
              <h2 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(p.date + "T00:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}
                </span>
                <span className="inline-flex items-center gap-1 font-medium text-teal opacity-0 transition group-hover:opacity-100">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          More posts coming soon. Want a specific topic covered?{" "}
          <a href="mailto:hello@hermanstone.com" className="text-teal hover:underline">
            Let us know.
          </a>
        </p>
      </section>
    </>
  );
}