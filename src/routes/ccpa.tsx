import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "@/components/Kicker";
import { firm } from "@/lib/firm-config";

export const Route = createFileRoute("/ccpa")({
  head: () => ({
    meta: [
      { title: "CCPA Notice — Herman Stone INC" },
      {
        name: "description",
        content:
          "California Consumer Privacy Act (CCPA/CPRA) disclosures for Herman Stone INC — categories collected, rights to know, delete, correct, and opt out of sale or sharing.",
      },
      { property: "og:title", content: "CCPA Notice — Herman Stone INC" },
      {
        property: "og:description",
        content: "CCPA/CPRA disclosures and how to exercise your consumer rights.",
      },
      { property: "og:url", content: "https://keystone-build-studio.lovable.app/ccpa" },
    ],
    links: [{ rel: "canonical", href: "https://keystone-build-studio.lovable.app/ccpa" }],
  }),
  component: CCPA,
});

const lastUpdated = "November 2026";

function CCPA() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-5 sm:px-8 pb-16 sm:pb-24 pt-24 sm:pt-28">
        <Kicker index="—" label="California privacy" />
        <h1
          className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your California privacy rights.
        </h1>
        <p className="mt-6 font-mono-label text-[10px] text-ink-soft">
          Last updated · {lastUpdated}
        </p>
        <p className="mt-8 text-lg leading-relaxed text-ink-soft">
          This notice is maintained by {firm.legalName} to describe how we collect and use
          personal information about California residents under the California Consumer Privacy
          Act of 2018, as amended by the California Privacy Rights Act ("CCPA"), and how you can
          exercise your rights. It supplements our general{" "}
          <a href="/privacy" className="link-underline">Privacy notice</a>.
        </p>

        <Block title="Scope">
          {firm.legalName} is a {firm.entity} providing senior network engineering and security
          consulting to business clients. This notice applies to California residents who visit
          this website or contact us about an engagement. It does not apply to personnel or
          contractor data, or to personal information we process on behalf of a client under a
          services agreement (where the client is the business responsible under the CCPA).
        </Block>

        <Block title="Categories of personal information we collect">
          In the past 12 months we have collected the following categories of personal
          information, as defined by the CCPA:
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              <span className="text-ink">Identifiers</span> — name, business email, business
              phone, and company name submitted through the contact form.
            </li>
            <li>
              <span className="text-ink">Commercial information</span> — the engagement or
              service you express interest in and related correspondence.
            </li>
            <li>
              <span className="text-ink">Internet or network activity</span> — aggregated,
              cookie-less page-view metrics (when analytics is enabled and you consent).
            </li>
            <li>
              <span className="text-ink">Professional information</span> — role, employer, or
              other context you voluntarily share about your engagement.
            </li>
          </ul>
          We do <span className="text-ink">not</span> collect sensitive personal information,
          precise geolocation, biometric data, or information about children under 16.
        </Block>

        <Block title="Sources">
          Directly from you (contact form, email, phone, scoping calls) and, where you consent,
          from privacy-respecting analytics tooling that does not set cookies or build
          cross-site profiles.
        </Block>

        <Block title="Purposes for use">
          To respond to inquiries and scope engagements; to deliver contracted services and
          maintain related records; to comply with legal, tax, and audit obligations; to secure
          this website against abuse; and to improve the clarity and structure of our public
          content.
        </Block>

        <Block title="Disclosure to service providers">
          We disclose limited personal information to vetted service providers who process it on
          our behalf under written contracts that prohibit any other use — including our email
          host, our form-submission processor (Formspree), and, when enabled, our
          privacy-respecting analytics provider (Plausible). Each acts as a "service provider"
          under the CCPA.
        </Block>

        <Block title="No sale or sharing of personal information">
          {firm.legalName} does <span className="text-ink">not</span> sell personal information
          and does <span className="text-ink">not</span> share personal information for
          cross-context behavioral advertising, as those terms are defined by the CCPA. We have
          not sold or shared personal information in the preceding 12 months, and we do not
          knowingly sell or share personal information of consumers under 16.
        </Block>

        <Block title="Retention">
          We retain contact submissions and engagement correspondence for the duration of the
          relationship and for a reasonable period afterward for reference, audit, and legal
          compliance. Aggregated analytics data is retained per the analytics provider's default
          retention policy. You can request deletion at any time (subject to legal-hold
          exceptions below).
        </Block>

        <Block title="Your rights">
          California residents have the right to:
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Know what personal information we have collected about you and how it is used.</li>
            <li>Request a copy of that information, in a portable format where feasible.</li>
            <li>Request deletion of personal information we have collected from you.</li>
            <li>Request correction of inaccurate personal information.</li>
            <li>
              Opt out of the sale or sharing of personal information. (We do not sell or share
              — see above — but you may still submit a request on the record.)
            </li>
            <li>Not receive discriminatory treatment for exercising any of these rights.</li>
          </ul>
        </Block>

        <Block title="How to submit a request">
          Submit a verifiable consumer request by email to{" "}
          <a href={`mailto:${firm.email}`} className="link-underline">
            {firm.email}
          </a>{" "}
          with the subject line <span className="text-ink">"CCPA Request"</span>, or by phone at{" "}
          <a href={`tel:+12132929002`} className="link-underline">
            {firm.phone}
          </a>
          . To protect you, we will ask for information sufficient to verify that the request
          comes from you (or from an authorized agent with written permission). We will respond
          within 45 days as required by the CCPA, and will extend once by 45 days if reasonably
          necessary — we will notify you if we need the extension.
        </Block>

        <Block title="Authorized agents">
          You may designate an authorized agent to submit a request on your behalf. The agent
          must provide written, signed authorization, and we will separately verify your
          identity as the consumer.
        </Block>

        <Block title="Legal-hold and record-keeping exceptions">
          We may retain information necessary to complete a transaction, comply with a legal
          obligation, defend against legal claims, or maintain audit-grade engagement records
          for our clients — as permitted by the CCPA.
        </Block>

        <Block title="Contact">
          Questions or complaints about this notice or our privacy practices:
          <div className="mt-4 space-y-1 text-ink">
            <p>{firm.legalName}</p>
            <p>Attn: Privacy</p>
            <p>{firm.address}</p>
            <p>
              Email:{" "}
              <a href={`mailto:${firm.email}`} className="link-underline">
                {firm.email}
              </a>
            </p>
            <p>Phone: {firm.phone}</p>
          </div>
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