# Phase 4 — Core Content and Page Development

## Completed

- Updated the homepage H1 to name the core service and Southampton without adding unverified same-day or registration claims.
- Added server-rendered homepage summaries and canonical links for emergency plumbing, boiler repair, boiler installation, blocked drains and water leaks.
- Rewrote the five main service pages around one intent each, with service-specific process, safety guidance, FAQs and related-service links.
- Added canonical pages for Central Heating & Radiators, Landlord Gas Safety Certificates and Power Flushing & Hard-Water Protection.
- Corrected the audit’s named “Aptiy”, “247”, CP12/service-label and swapped boiler-footer wording issues in visible content.
- Added an About page with the enquiry process, company details and careful Gas Safe verification guidance.
- Added three complete blog articles, each with its own URL, metadata, canonical, social preview, Article schema, relevant-service link and enquiry action.
- Removed the shared `/services` destination and the external Soro embed from the blog index.
- Added the complete Appendix B editorial backlog and the recommended one-to-two-articles-per-month cadence.
- Made the local-content component use both the area and service, removed visible photo placeholders, and retained priority pages as `noindex` until the full local-page checklist passes.
- Removed unsourced “recent jobs” quotes from area pages.

## Deliberately deferred pending business evidence

The audit explicitly asks the client to supply the following. Publishing substitutes would create the same trust problem the audit identifies.

- Real job, van, team and engineer photographs with permission and descriptive alt text.
- Named engineer biographies and roles.
- Verified local reviews with source links and permission to quote.
- Confirmed Gas Safe number, registration scope and permission to display it.
- Approved company history, insurance, accreditations and guarantee wording.
- Approved guide prices, VAT treatment, diagnostic/call-out wording and price caveats.
- Confirmed service list before adding a separate Gas Safety Inspection page or expanding bathroom/general-plumbing claims.

## Priority local pages

The 15 URLs selected in `src/data/pageRegistry.ts` now receive service-aware local content using existing area information. They remain `noindex` because real job photographs, an approved local review, verified response wording and individually reviewed service/place FAQs are still unavailable. This follows Appendix C: a page must not be made indexable before every checklist item is complete.

## Verification

- The three article source blocks are approximately 936–966 words each, within the audit’s 800–1,200 word target.
- TypeScript reports only the repository’s already documented missing, unused UI/demo dependencies and pre-existing `areaContentHelpers.ts` type mismatch; none of the Phase 4 files appears in the error list.
- `git diff --check` passes; line-ending notices are informational.
- Two production-build attempts stopped before compilation because Windows denied creation of the Next.js worker process: `spawn EPERM`. A single-worker retry produced the same environment-level error, so the export, generated sitemap and built-output link crawl must be rerun in an environment that permits child processes.
