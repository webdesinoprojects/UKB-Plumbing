# Phase 3 — Trust, Reviews, Claims and Legal Compliance

Completed against audit sections D1–D3, E4 and F2.

## Reviews

- Removed all 93 unsourced hardcoded area-service reviews and the three generic fallback identities.
- Area-service pages now link to the original Google Business Profile instead of presenting locally invented review cards.
- The Featurable review feed remains source-linked and loads only after external-services consent.
- No review rich-result schema was added.

## Claims

- Added `src/config/businessFacts.ts` for shared contact, response, pricing and review-source wording.
- Removed conflicting establishment/experience claims until evidence is supplied.
- Removed public use of unverified Gas Safe number `549210`, DBS, CIPHE, insurance, accreditation, FLIR, ultrasonic and 280 ppm claims.
- Replaced guaranteed arrival times with an estimate based on availability, traffic and location.
- Replaced absolute zero-call-out/fixed-price wording with a requirement to explain charges and agree work first.
- Made workmanship and manufacturer warranties specific to the written quote/job rather than universal.
- Replaced blanket “all/every engineer” credential statements with work-specific Gas Safe verification wording.

## Privacy and consent

- Added `/cookie-policy` and corrected footer links.
- Rewrote `/privacy-policy` to identify Fillout, Google and Featurable and document purposes, legal bases, retention and rights.
- Added accessible accept, reject and category controls plus a persistent Cookie settings control.
- Google Consent Mode v2 defaults analytics and advertising storage to denied.
- Google tags, Fillout, Featurable and external iframes are gated until the relevant consent category is enabled.

## Validation

- Production compilation and static export completed for all 674 generated pages.
- Canonical sitemap validation passed with 94 URLs, including `/cookie-policy`.
- Static HTML contains denied Google consent defaults and no pre-consent external Google Tag, Fillout or Featurable script source.
- Claim and placeholder-review scans passed for the audit terms.
- The build then reached the existing internal-link validator, which reports 692 redirect-target links. This is outside the Phase 3 trust/compliance scope and is recorded for the route/internal-link work.
- Full TypeScript checking still reports the repository's pre-existing unused UI/demo dependency errors and one existing dynamic-page type mismatch; no new Phase 3 file was reported.

## Radix build blocker

- Replaced the three direct `@radix-ui/react-slot` imports with a small repository-local Slot implementation.
- This removes the missing-package build blocker without installing or approving additional dependency scripts.
