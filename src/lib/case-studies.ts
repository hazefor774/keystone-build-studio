/**
 * Anonymized case studies — sector + size only, no client names.
 * Structure: situation → constraint → action → outcome.
 *
 * Numeric outcomes are tagged TODO(hsi-v5): confirm metric. They must be
 * verified true before publish; otherwise soften to a defensible phrasing.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  date: string;
  excerpt: string;
  situation: string;
  constraint: string;
  action: string[];
  outcome: { metric: string; label: string; confirmed: boolean }[];
  closing: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "regional-healthcare-sd-wan-migration",
    title: "59-branch SD-WAN migration, no user-visible downtime",
    sector: "Regional healthcare network · ~60 sites",
    date: "2025-04-18",
    excerpt:
      "A regional healthcare operator migrated 59 branches from MPLS to Catalyst SD-WAN with cloud onRamp to Azure. We led the cutover plan and ran every change against a lab pair before touching production.",
    situation:
      "A regional healthcare network operating ~60 ambulatory sites across two states needed to retire a legacy MPLS WAN and stand up Catalyst SD-WAN with cloud onRamp to Azure. Clinical applications could not absorb user-visible downtime.",
    constraint:
      "Maintenance windows were limited to a four-hour overnight envelope. Two sites carried 24/7 imaging traffic that could not tolerate a hard cut. Change-control required a peer-reviewed back-out plan signed before each window.",
    action: [
      "Built a lab pair on matching IOS-XE trains and exported configuration with hostnames stripped.",
      "Staged branch cutovers in waves of 6–8 sites, each rehearsed against the lab the prior week.",
      "Designed dual-circuit branches with a clean failover path and out-of-band console as the back-out.",
      "Validated routing tables, session counts, and a representative trace from each site after every cut.",
    ],
    outcome: [
      { metric: "59", label: "Branches migrated", confirmed: true },
      { metric: "0", label: "User-visible production outages", confirmed: false }, // TODO(hsi-v5): confirm metric
      { metric: "100%", label: "Cuts completed inside the change window", confirmed: false }, // TODO(hsi-v5): confirm metric
    ],
    closing:
      "Programme closed inside the original maintenance schedule with a signed run-book and a documented back-out tested at every wave.",
  },
  {
    slug: "ise-cluster-upgrade-without-outage",
    title: "Multi-node ISE cluster upgrade with no auth interruption",
    sector: "Enterprise IT · ~9,000 endpoints",
    date: "2025-02-02",
    excerpt:
      "An enterprise on a trailing ISE train needed to land a multi-node upgrade across PSNs and PANs without breaking 802.1X authentication for a single client.",
    situation:
      "A multi-site enterprise running an aging ISE cluster needed to upgrade across primary, secondary, and several Policy Service Nodes. The environment authenticated ~9,000 endpoints across wired, wireless, and VPN access.",
    constraint:
      "Authentication interruption was not acceptable — clinical, manufacturing, and remote-worker auth all depended on the cluster. There was no second maintenance window if the first one failed.",
    action: [
      "Lab-validated the full upgrade path against the production configuration export.",
      "Sequenced PSN upgrades so that auth load could be drained and re-balanced node-by-node.",
      "Pre-staged the PAN failover so a regression at the primary would not leave the cluster headless.",
      "Captured a 24-hour baseline of auth rates and held the post-cut validation against it.",
    ],
    outcome: [
      { metric: "0", label: "Authentication outage minutes", confirmed: false }, // TODO(hsi-v5): confirm metric
      { metric: "~9k", label: "Endpoints under continuous auth during the cut", confirmed: true },
      { metric: "1", label: "Maintenance window used", confirmed: true },
    ],
    closing:
      "Upgrade completed end-to-end inside a single window. Post-cut auth rates matched the 24-hour baseline within instrumentation noise.",
  },
  {
    slug: "panorama-rule-base-cleanup",
    title: "Panorama rule-base hygiene and segmentation sprint",
    sector: "Public-sector agency · ~120 sites",
    date: "2024-11-20",
    excerpt:
      "Years of accumulated firewall rules had eroded least-privilege. We rebuilt the rule base around documented business flows and brought logging into a usable shape.",
    situation:
      "A public-sector agency operating ~120 sites had inherited a Panorama-managed rule base with years of accumulated allow rules, overlapping objects, and no clear blast-radius story for incident response.",
    constraint:
      "The agency could not tolerate a service interruption to its constituent-facing applications. Auditors required documented zone boundaries and an evidence trail before the next quarterly review.",
    action: [
      "Inventoried allowed flows from logs, then mapped them to documented business owners.",
      "Redesigned zones around least-privilege and rebuilt object groups against the new model.",
      "Staged the cutover Panorama-template by Panorama-template, with each batch reviewed before push.",
      "Stood up a logging baseline and a small set of high-signal detections the team could actually action.",
    ],
    outcome: [
      { metric: "~70%", label: "Reduction in active any-any allow rules", confirmed: false }, // TODO(hsi-v5): confirm metric
      { metric: "0", label: "Service interruptions during cutover", confirmed: false }, // TODO(hsi-v5): confirm metric
      { metric: "Audit-ready", label: "Evidence pack delivered to compliance team", confirmed: true },
    ],
    closing:
      "Agency entered its next audit with a documented zone model, a smaller rule surface, and a logging pipeline its own team can run.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}