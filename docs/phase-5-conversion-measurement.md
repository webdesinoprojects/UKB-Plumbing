# Phase 5 — Conversion Paths, Forms and Measurement

## Completed

- Selected `/inquiry-form` as the one canonical online quote route.
- Added a permanent deployed redirect from `/booking` and retained the two case-variant enquiry redirects.
- Changed primary action wording to “Call Now” and “Request a Quote”.
- Replaced every direct `ukbplumbing.fillout.com` link with the canonical on-site route.
- Retained Fillout only on `/inquiry-form`; all other repeated embeds are now internal quote prompts.
- Reduced the Fillout loader to one instance on the canonical quote page.
- Restricted submission messages to `fillout.com` or a true `.fillout.com` subdomain.
- Removed simulated submission state from legacy booking/contact components.
- Added a consent-aware form fallback, cookie-settings action, loading status, phone/email alternative and clear appointment/price caveat.
- Added consent-aware events for header and page phone clicks, the sticky mobile call bar, WhatsApp, quote CTA clicks, quote-form start and successful form submission.
- Deduplicated successful Fillout submissions by submission UUID/embed ID before sending analytics or advertising events.
- Added source-level tracking-location labels for the desktop header, mobile header/menu, sticky mobile bar, service hero and floating WhatsApp action.
- Removed `/booking` from the checked-in sitemap and added the new Phase 4 canonical pages while the Windows build worker remains unavailable.

## Consent behaviour

- Fillout loads only when `externalMedia` consent is granted.
- Analytics events are sent only when analytics consent is granted.
- The Google Ads conversion event is sent only when advertising consent is granted.
- No queued click event is added before analytics or advertising consent, preventing later replay of a pre-consent click.

## External confirmations still required

The source contains existing Google identifiers `AW-16916032947`, `GT-TB7RCZJR` and the existing Ads conversion destination. Account access is required to confirm ownership, purpose and current status. No GA4 measurement ID was invented.

Before release, an authorised account user must:

- Confirm the GA4 property/measurement ID and whether the current Google tag routes data to it.
- Confirm the Google Ads conversion destination and mark the agreed events as conversions.
- Submit a test enquiry with analytics/advertising accepted and verify exactly one conversion in GA4/Google Ads.
- Submit with optional consent rejected and confirm that neither Google nor Fillout loads.
- Link Search Console to the confirmed GA4 property if desired.
- Decide whether third-party call tracking is required; it must not change the visible NAP inconsistently.

## Verification

- Static searches confirm one Fillout embed, one Fillout loader and no direct external Fillout CTA URL.
- Static searches confirm `/booking` appears only as a redirect source.
- TypeScript reports only the repository’s pre-existing missing unused UI/demo dependencies and `areaContentHelpers.ts` mismatch; no Phase 5 file appears in the error list.
- `git diff --check` passes; line-ending notices are informational.
- The production build stopped before compilation because Windows denied creation of the Next.js worker process (`spawn EPERM`). The generated sitemap and built-output link crawl therefore still require a rerun in an environment that permits child processes.
