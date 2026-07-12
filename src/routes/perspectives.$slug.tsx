import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Kicker } from "@/components/Kicker";
import { ArchMark } from "@/components/Logo";
import { getRequestOrigin } from "@/lib/origin.functions";
import {
  getPerspective,
  perspectives,
  formatPerspectiveDate,
  type Perspective,
} from "@/lib/perspectives";

export const Route = createFileRoute("/perspectives/$slug")({
  loader: async ({ params }) => {
    const post = getPerspective(params.slug);
    if (!post) throw notFound();
    const origin = await getRequestOrigin();
    return { post, origin };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    const origin = loaderData?.origin ?? "";
    const title = post
      ? `${post.title} — Perspectives`
      : "Perspective — Herman Stone INC";
    const description =
      post?.excerpt ?? "A senior network engineering perspective.";
    const ogImage = origin
      ? `${origin}/og-perspectives.jpg`
      : "/og-perspectives.jpg";
    const pageUrl = post
      ? `${origin}/perspectives/${post.slug}`
      : `${origin}/perspectives`;

    const jsonLd = post
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: {
            "@type": "Organization",
            name: "Herman Stone INC",
          },
          publisher: {
            "@type": "Organization",
            name: "Herman Stone INC",
          },
          url: pageUrl,
          image: ogImage,
        }
      : null;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: pageUrl },
        ...(origin ? [{ property: "og:image", content: ogImage }] : []),
      ],
      links: [
        {
          rel: "canonical",
          href: post ? `/perspectives/${post.slug}` : "/perspectives",
        },
      ],
      scripts: jsonLd
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify(jsonLd),
            },
          ]
        : [],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16 lg:py-20 sm:py-16 sm:py-14 sm:py-12 sm:py-16 lg:py-20 lg:py-24 lg:py-28 lg:py-32">
      <p className="font-mono-label text-[11px] text-ink-soft">Error</p>
      <h1 className="mt-6 text-4xl">Something went wrong loading this perspective.</h1>
      <p className="mt-4 text-ink-soft">{error.message}</p>
      <button onClick={reset} className="btn-primary mt-8">Try again</button>
    </div>
  ),
  component: PerspectiveDetail,
});

function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16 lg:py-20 sm:py-16 sm:py-14 sm:py-12 sm:py-16 lg:py-20 lg:py-24 lg:py-28 lg:py-32">
      <Kicker index="—" label="404" />
      <h1
        className="mt-6 text-5xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        That perspective isn't here.
      </h1>
      <p className="mt-6 text-ink-soft">
        The essay may have moved or been retired. Browse the full set of perspectives below.
      </p>
      <Link to="/perspectives" className="btn-primary mt-10">
        All perspectives <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

function PerspectiveDetail() {
  const { post } = Route.useLoaderData() as { post: Perspective };
  const idx = perspectives.findIndex((p) => p.slug === post.slug);
  const next = perspectives[(idx + 1) % perspectives.length];

  return (
    <article>
      {/* Header */}
      <header className="border-b border-[var(--hair)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 pb-16 pt-24">
          <Link
            to="/perspectives"
            className="inline-flex items-center gap-2 font-mono-label text-[10px] text-ink-soft hover:text-ink"
          >
            <ArrowLeft className="h-3 w-3" /> All perspectives
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-4 font-mono-label text-[10px] text-ink-soft">
            <span>{post.tag}</span>
            <span>·</span>
            <span>{formatPerspectiveDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1
            className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.title}
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-ink-soft">{post.excerpt}</p>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16 lg:py-20">
        <div className="space-y-8">
          {post.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="pt-6 text-2xl font-medium tracking-tight sm:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "pull") {
              return (
                <blockquote
                  key={i}
                  className="my-4 border-l border-teal-deep pl-6 text-2xl italic leading-snug text-ink sm:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  "{block.text}"
                </blockquote>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="space-y-3 text-lg leading-relaxed text-ink-soft">
                  {block.items.map((it, j) => (
                    <li key={j} className="grid grid-cols-[auto_1fr] gap-4">
                      <span className="mt-2 h-px w-5 bg-ink/40" aria-hidden="true" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-lg leading-relaxed text-ink-soft">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Sign-off */}
        <div className="mt-20 flex items-center justify-center opacity-60">
          <ArchMark className="h-6 w-auto" />
        </div>
      </div>

      {/* Up next */}
      <section className="border-t border-[var(--hair)] bg-paper-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-16 lg:py-20">
          <Kicker index="—" label="Read next" />
          <Link
            to="/perspectives/$slug"
            params={{ slug: next.slug }}
            className="group mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <div>
              <div className="flex items-center gap-4 font-mono-label text-[10px] text-ink-soft">
                <span>{next.tag}</span>
                <span>·</span>
                <span>{formatPerspectiveDate(next.date)}</span>
              </div>
              <h3
                className="mt-4 max-w-[24ch] text-3xl font-medium leading-tight tracking-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {next.title}
              </h3>
            </div>
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-ink transition group-hover:gap-3">
              Continue <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </section>
    </article>
  );
}