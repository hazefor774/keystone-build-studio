export interface Perspective {
  slug: string;
  title: string;
  date: string;
  tag: string;
  readingTime: string;
  excerpt: string;
  /** Paragraphs and headings rendered in order on the essay page. */
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "pull"; text: string }
    | { type: "list"; items: string[] }
  >;
}

export const perspectives: Perspective[] = [
  {
    slug: "firewall-ha-branch-cutover",
    title: "Designing a zero-downtime firewall HA branch cutover",
    date: "2025-09-12",
    tag: "Palo Alto",
    readingTime: "8 min read",
    excerpt:
      "Why HA-pair cutovers fail in practice, and the staged plan we use to land a clean failover with no user-visible impact.",
    body: [
      {
        type: "p",
        text: "Most firewall HA cutovers do not fail at the firewall. They fail at the seams — the upstream switch that never re-learned the MAC, the route-map that quietly drops a /24 during convergence, the management VLAN that loses its default gateway for ninety seconds while nobody is watching the right dashboard.",
      },
      {
        type: "p",
        text: "We treat the cutover as an exercise in pre-staging and rehearsal, not heroics. By the time we touch the production pair, every command has been run against a lab pair built from the same PAN-OS train, the same content release, and an exported configuration with hostnames stripped.",
      },
      { type: "h2", text: "The staged plan" },
      {
        type: "list",
        items: [
          "T-14 days: lab build with exported config, content parity, and a written rollback runbook keyed to the maintenance window.",
          "T-7 days: peer review with the client's senior engineer, dry-run of the failover, and a signed change record.",
          "T-0: out-of-band console access verified, monitoring baselines captured, traffic shifted to the secondary, primary upgraded and re-introduced.",
          "T+1 hour: structured validation — routing tables, session counts, ISE auth rates, and a tracert from a representative client subnet.",
        ],
      },
      {
        type: "pull",
        text: "The cheapest insurance in a branch cutover is the engineer who has already done it once, in a lab, with the lights on.",
      },
      { type: "h2", text: "What we measure" },
      {
        type: "p",
        text: "Cutover success is not the absence of tickets the next morning. It is a measured failover under load, a clean HA sync log, and a config diff that matches the change record line for line. Anything else is a near-miss waiting to be reclassified.",
      },
    ],
  },
  {
    slug: "ise-cluster-upgrades",
    title: "ISE cluster upgrades without the 2 a.m. surprises",
    date: "2025-08-04",
    tag: "Cisco ISE",
    readingTime: "10 min read",
    excerpt:
      "A pre-flight checklist, validation lab patterns, and the small details that make ISE upgrades feel boring — in a good way.",
    body: [
      {
        type: "p",
        text: "An ISE upgrade should feel like a non-event. When it doesn't, the cause is almost always something that could have been caught a week earlier: a stale certificate, a deprecated authorization condition, a PSN that was quietly out of sync with the primary admin node.",
      },
      { type: "h2", text: "Pre-flight" },
      {
        type: "list",
        items: [
          "Full backup of the primary admin node, restored into a lab cluster on the target version.",
          "Certificate inventory with expiry dates, chain validation, and EAP-TLS trust paths verified end-to-end.",
          "Policy export diffed against the previous quarter — unused conditions retired before, not during, the upgrade.",
          "Sponsor and guest portals smoke-tested against the lab cluster with real client devices.",
        ],
      },
      {
        type: "pull",
        text: "If the lab cluster surprises you, the production cluster will surprise you louder.",
      },
      { type: "h2", text: "The night of" },
      {
        type: "p",
        text: "Upgrades run node by node, with auth rates and live session counts on a visible dashboard. We do not advance to the next PSN until the previous one has cleared a 30-minute soak under real authentication traffic. The boring cadence is the point.",
      },
    ],
  },
  {
    slug: "sd-wan-rollback",
    title: "Why your SD-WAN migration needs a rollback plan before a single command",
    date: "2025-07-15",
    tag: "SD-WAN",
    readingTime: "7 min read",
    excerpt:
      "The cheapest insurance in network engineering: a tested, written rollback that any engineer on call can execute under pressure.",
    body: [
      {
        type: "p",
        text: "Rollback is not a slide in the change record. It is a tested sequence of commands, with timing, decision points, and a named owner who can execute it without a second opinion at three in the morning.",
      },
      {
        type: "p",
        text: "On SD-WAN migrations we write the rollback first, then the forward plan. If we cannot describe — in plain prose — how the site returns to its prior state within fifteen minutes, the migration is not ready, regardless of how elegant the overlay design looks.",
      },
      { type: "h2", text: "What a real rollback contains" },
      {
        type: "list",
        items: [
          "The exact configuration archive the site is rolling back to, with a checksum and a known-good restore date.",
          "The named engineer on call, their out-of-band path, and a secondary contact.",
          "The decision criteria — what specifically triggers rollback, with thresholds, not vibes.",
          "The communication plan: who is told, when, and through which channel.",
        ],
      },
      {
        type: "pull",
        text: "A migration without a tested rollback is not a migration. It is a hope.",
      },
    ],
  },
];

export function getPerspective(slug: string) {
  return perspectives.find((p) => p.slug === slug);
}

export function formatPerspectiveDate(d: string) {
  return new Date(d + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}