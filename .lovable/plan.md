
# Herman Stone v5 — Definitive Build Plan

This is a large spec. I'll execute it in 7 batches so each one is reviewable and the site stays shippable between steps. TODOs will be explicit comments tagged `TODO(hsi-v5):` with the exact env var or fact to fill.

## Batch 1 — Brand coherence (one mark, on-palette)
- Rebuild `src/components/Logo.tsx` as a crisp **inline SVG** of the real A-arch lockup (teal `#0E8A94` left stroke, green `#3AAE5F` right stroke, ink wordmark, small "INC"). Horizontal lockup for nav, stacked for footer/hero.
- Retire `KeystoneMonogram.tsx`, `ArchBackdrop.tsx`, `TopologyHero.tsx` (dead code).
- Add an `<ArchMark>` primitive (just the two strokes) reused as: oversized low-opacity watermark on deep-teal anchor sections, section-divider glyph, favicon source.
- Remove powder-blue `#A7D9DE` / `#A7F3D0` mint accents — replace with bone or light teal tint.
- Regenerate `public/favicon.png` + `public/apple-touch-icon.png` from the new SVG mark.

## Batch 2 — Tech debt + token cleanup
- `src/styles.css`: delete `.dark` block, legacy `--ink-900/800/700/600`, `--console*`, `--mint`, any unused tokens. Keep only the active editorial palette.
- Remove Fraunces references if any. Verify only Newsreader / Hanken Grotesk / Spline Sans Mono / Space Grotesk load.
- Delete `TopologyHero.tsx`, `ArchBackdrop.tsx`, `KeystoneMonogram.tsx` and any imports.

## Batch 3 — Trust architecture (reusable)
- New `<TrustStrip>` component: California Corporation (est. 2024) · SAM.gov Registered · NPI 1043191950 · UEI/CAGE `TODO(hsi-v5): SAM_UEI / SAM_CAGE`.
- New `<MethodologyBlock>` component: senior-only delivery, written SOW, change-control + rehearsed rollback, ISO-9001-style documentation, evidence pack as deliverable.
- Audit existing copy: replace absolute claims ("0 outages", "100%") with defensible phrasings ("zero unplanned outages across documented cutovers") or tag `TODO(hsi-v5): confirm metric`.
- Vendor depth band: Cisco · Palo Alto Networks · Prisma · Certifications `TODO(hsi-v5): list real certs or remove line`.

## Batch 4 — Case studies (new `/work` route)
- `src/lib/case-studies.ts` — seed 3 anonymized studies, structured Situation → Constraint → What we did → Outcome. Each numeric outcome tagged `TODO(hsi-v5): confirm metric`. Sectors only (e.g. "Regional healthcare network, ~60 sites").
- `src/routes/work.tsx` — index with editorial list layout matching Perspectives.
- `src/routes/work.$slug.tsx` — single case study layout, per-route head() + Article JSON-LD.
- Add featured case-study teaser to Home; add `Work` to nav and footer; add to sitemap.

## Batch 5 — Conversion (real form + booking)
- `src/routes/api/contact.ts` — TanStack server route POST handler.
  - Server-side `zod` validation mirroring client.
  - Honeypot field (`company_website`) + time-to-submit check (reject < 1500ms).
  - Delivery: Lovable Emails via the email queue if available, else Formspree fallback. Endpoint/API key as env var: `TODO(hsi-v5): set CONTACT_FORM_ENDPOINT or enable Lovable Emails`.
  - Rate-limit by IP (in-memory LRU; mark as best-effort in comment).
  - Returns JSON `{ ok: true }` or `{ ok: false, errors }`.
- `src/routes/contact.tsx`: wire form to the server route; add honeypot + timestamp; success state shows next step + Calendly link.
- Calendly: replace hardcoded URL with `import.meta.env.VITE_CALENDLY_URL`; render "Book via email" fallback if unset.
- "Accepting Q3 engagements" → read from `src/lib/firm-config.ts` single source of truth so it can't silently rot.

## Batch 6 — Pages: About, Capabilities, Privacy, Perspectives expansion
- `/about`: anonymous principal + corporate facts (Cal Corp, SAM, NPI), operating principles, methodology block. No photos.
- `/capabilities` — new one-pager Capabilities Statement: company snapshot, NAICS codes `TODO(hsi-v5)`, UEI/CAGE `TODO(hsi-v5)`, core competencies, differentiators, past-performance summary (anonymized), POC.
- `/privacy` — real Privacy Policy: form data handling, analytics + consent, no third-party PII leakage, retention, contact for requests.
- Perspectives: add 2 more outline posts (`TODO(hsi-v5): draft body`) so the section shows depth.
- Home: add case-study teaser section; ensure single primary CTA "Book a scoping call" everywhere; secondary "Request a scoped proposal".

## Batch 7 — Motion, SEO, A11y, Analytics, Perf
- Convert load-only reveals to scroll-triggered (IntersectionObserver hook `useInViewOnce`, honor `prefers-reduced-motion`).
- Proof numbers count-up on view; link underlines wipe in; arch mark draws once on hero load.
- SEO: verify per-route title/description/canonical/OG (incl. new Work / Capabilities / Privacy). Add `public/robots.txt`. Add JSON-LD `Organization` + `ProfessionalService` (areaServed: Southern California; sameAs `TODO(hsi-v5): company LinkedIn URL`) at root.
- A11y: audit teal-deep section contrast (no pale tints on teal); ensure body text ≥ 4.5:1; visible focus rings; mobile menu focus trap; all interactive elements labeled.
- Analytics + consent: lightweight Plausible script behind `VITE_PLAUSIBLE_DOMAIN` env var + consent banner (`<ConsentBanner>`); default to no tracking until accepted. Document in `/privacy`.
- Performance: preconnect Google Fonts; lazy-load below-fold sections; ensure no CLS on hero.

## Technical notes
- All env vars are surfaced via `import.meta.env.VITE_*` for client / `process.env.*` for server, with `TODO(hsi-v5):` comments naming each one.
- No personal photos or AI-generated people anywhere. OG images stay abstract/brand.
- Every new route added to `src/routes/sitemap[.]xml.ts`.
- I will NOT delete `src/routeTree.gen.ts` rows; the TanStack Router Vite plugin regenerates it.

After your approval I'll execute batches 1 → 7. Each batch ends in a shippable state.
