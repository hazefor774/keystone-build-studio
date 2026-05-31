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
  email: "hello@hermanstone.com",
  region: "Southern California",
  // TODO(hsi-v5): SAM.gov UEI and CAGE — fill once issued
  uei: null as string | null,
  cage: null as string | null,
  npi: "1043191950",
  // TODO(hsi-v5): NAICS codes for capabilities statement
  naics: [] as string[],
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
  acceptingEngagementsLabel: null as string | null,
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