/**
 * Single source of truth for firm-wide facts and toggles.
 * Editing this file changes what shows up across the site.
 * Avoid hard-coding the same facts in components.
 */

export const firm = {
  name: "Herman Stone INC",
  legalName: "Herman Stone INC",
  entity: "California Corporation",
  foundedYear: 2024,
  email: "ops@hermanstone.com",
  phone: "(213) 292-9002",
  address: "611 Wilshire Blvd, Suite 900 #1012, Los Angeles, CA 90017",
  region: "Southern California",
  // SAM.gov identifiers — REGISTERED. Pull the exact values from the SAM.gov
  // entity record for HERMAN STONE INC and fill here (renders as verifiable
  // credentials in TrustBadges once set). Leave null until copied verbatim.
  uei: null as string | null,   // <- from SAM.gov "Unique Entity ID"
  cage: null as string | null,  // <- from SAM.gov "CAGE/NCAGE"
  npi: "1043191950",
  // NAICS — standard senior network/security consulting set. Confirm these
  // match the codes on the SAM.gov registration before quoting in a
  // capabilities statement.
  naics: ["541512", "541519", "541690"] as string[],
  // TODO(hsi-v5): public company LinkedIn URL once profile is live
  linkedinUrl: null as string | null,
  // Booking — Calendly URL is configured at build time via env so it can rotate
  // without a code change. TODO(hsi-v5): set VITE_CALENDLY_URL in project env.
  calendlyUrl: (import.meta.env.VITE_CALENDLY_URL as string | undefined) || null,
  // Public analytics domain for Plausible (optional). TODO(hsi-v5): set
  // VITE_PLAUSIBLE_DOMAIN to enable privacy-respecting analytics.
  plausibleDomain: (import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined) || null,
  // Cap-acceptance toggle — read here so we never publish a stale "Q3" line.
  // TODO(hsi-v5): rotate quarterly or set to null to remove.
  acceptingEngagementsLabel: "Accepting new engagements \u00b7 Q3 2026" as string | null,
} as const;

/** Format an ISO date as "Sep 12, 2025". */
export function formatDateLong(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}