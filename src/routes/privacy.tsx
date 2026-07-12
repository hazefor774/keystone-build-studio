import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "@/components/Kicker";
import { firm } from "@/lib/firm-config";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Herman Stone INC" },
      {
        name: "description",
        content:
          "How Herman Stone INC handles contact form data, analytics, and consent. No third-party trackers, no cross-site profiling.",
      },
      { property: "og:title", content: "Privacy — Herman Stone INC" },
      { property: "og:description", content: "How we handle data on this site." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-5 sm:px-8 pb-16 sm:pb-24 pt-24 sm:pt-28">
        <Kicker index="—" label="Privacy" />
        <h1
          className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Privacy at Herman Stone INC.
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-ink-soft">
          We keep this short on purpose. This site collects the minimum amount of information
          required to respond to inquiries and to understand which pages are useful.
        </p>

        <Block title="Contact form">
          When you submit the contact form, we receive the name, company, email, optional phone,
          engagement of interest, and message you provide. We use that information only to reply
          and to scope your engagement. We do not sell, share, or use it for marketing.
        </Block>

        <Block title="Analytics">
          When configured, we use a privacy-respecting analytics service (Plausible) that does
          not set cookies and does not collect personal data. Analytics load only after explicit
          consent via the banner. Declining the banner blocks the script entirely.
        </Block>

        <Block title="No third-party trackers">
          No advertising pixels, no cross-site profiling, no social-network embeds that load
          user-tracking scripts.
        </Block>

        <Block title="Retention">
          Contact submissions are retained for the duration of the engagement conversation and
          for a reasonable period afterward for reference. You can request deletion at any time.
        </Block>

        <Block title="Requests">
          To request access, correction, or deletion of any data we hold about you, email{" "}
          <a href={`mailto:${firm.email}`} className="link-underline">
            {firm.email}
          </a>
          .
        </Block>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-12 border-t border-[var(--hair)] pt-8">
      <p className="font-mono-label text-[10px] text-ink-soft">{title}</p>
      <div className="mt-4 text-base leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}