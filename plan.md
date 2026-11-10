# UKB Plumbing Website Improvement Plan

This plan converts the 17-page Webdesino audit and the repository review into an ordered implementation roadmap. Work should be completed phase by phase. A phase is complete only when its exit criteria pass.

## Objectives

- Fix indexing, canonical, sitemap and internal-link problems before publishing more pages.
- Keep only useful, trustworthy and genuinely local pages indexable.
- Improve search visibility without changing the established visual identity unnecessarily.
- Remove unverified claims, reviews and placeholders.
- Consolidate calls to action and measure real enquiries.
- Improve performance, accessibility and maintainability.

## Current Baseline

- 39 source route templates.
- 671 HTML pages in the committed `out.zip` build.
- 661 URLs in `public/sitemap.xml`.
- 560 service-by-area URLs in the sitemap.
- 312 `noindex` pages in the committed build; current source rules can potentially noindex more.
- 13 top-level service routes with incorrect canonical paths.
- 77 generated pages missing canonicals in the committed build.
- 5 generated pages missing titles and descriptions.
- 0 generated pages with `og:image`.
- 125 unique internal link targets missing from the committed build.
- 93 hardcoded review records requiring verification.
- Nine homepage sections excluded from initial server/static HTML through `ssr: false`.

The committed build may be older than the source. After dependencies are safely installed, Phase 0 will generate a fresh baseline before implementation begins.

## Working Rules

- Do not index unfinished, placeholder or substantially duplicated pages.
- Do not publish a review, credential, response time, price or guarantee without business confirmation.
- Use one canonical URL and one source of truth for every service, location and business fact.
- Generate metadata, navigation and the sitemap from shared registries rather than separate hardcoded lists.
- Complete and verify each phase before starting the next one.

---

## Phase 0 — Confirm Facts and Establish a Reproducible Baseline

Status: Complete with documented deferrals. Business confirmations remain required before Phases 3–4. A clean dependency install/build remains required before Phase 1 can receive final verification.

### Business information required before trust/content publication

- [ ] Confirm the full service list.
- [ ] Confirm the real service area: Southampton, New Forest, Salisbury, Winchester, Eastleigh and any additional towns.
- [ ] Confirm which address may be shown publicly and whether the Google profile is a service-area business.
- [ ] Confirm Gas Safe number and permission to display it.
- [x] Remove the unsupported “since 2003” claim and replace the dated logo artwork.
- [ ] Confirm CIPHE membership, DBS checks, insurance, accreditations and guarantees.
- [ ] Confirm equipment claims: FLIR, ultrasonic/acoustic detection, CCTV jetting and related tools.
- [x] Confirm realistic emergency response wording: typically 30–60 minutes, subject to availability, traffic and location.
- [x] Confirm call-out, diagnostic and fixed-price wording; no fee amount was supplied.
- [ ] Confirm boiler and workmanship warranty wording.
- [ ] Supply guide prices or approve omission of pricing.
- [x] Supply an engineer name, supported qualifications and photograph; a longer biography was not supplied.
- [x] Supply real job, van and engineer photographs.
- [ ] Supply verified reviews, source links and permission to quote them.
- [ ] Supply or grant access to Search Console, GA4, Google Ads, Tag Manager and Google Business Profile.

### Technical baseline

- [x] Attempt dependency installation using the lockfile; document the managed environment's unavailable npm package/network blocker.
- [x] Record Node and npm versions used for the project.
- [ ] Run a clean production build without changing source files. Deferred until dependencies can be installed outside the restricted package cache.
- [x] Inventory the committed build's generated routes, titles, descriptions, canonicals and robots directives.
- [x] Run internal-link checks against the committed build; fresh-build rerun remains required.
- [x] Compare the committed build with `public/sitemap.xml` (fresh-build comparison remains pending).
- [ ] Record initial Lighthouse/PageSpeed results for homepage, one core service page and one area page. Deferred until a runnable fresh build is available.
- [x] Record current static accessibility findings.
- [x] Create a working branch before implementation.

### Exit criteria

- [x] Required business questions are documented and assigned as prerequisites for Phases 3–4.
- [x] Dependency/build blockers are recorded with the failed command and exact cause.
- [x] Source and committed-build route/SEO baselines are recorded; fresh-build verification is explicitly deferred and remains mandatory before release.

---

## Phase 1 — Route, Canonical, Indexing and Sitemap Integrity

This phase fixes the foundation before content or visual work.

Status: Implemented with a documented verification deferral. Fresh-build exit verification is pending because the pre-existing undeclared UI dependencies were explicitly left unchanged. Route decisions and verification evidence are recorded in `docs/phase-1-route-decisions.md`.

### Canonical service structure

- [x] Choose one canonical route for every service.
- [x] Keep the chosen routes under `/services/{service-slug}`.
- [x] Correct the shared `getServiceMetadata()` canonical to include `/services/`.
- [x] Correct hardcoded canonicals on the five core service pages.
- [x] Fix the radiator metadata key from `radiator-and-heating-services` to `radiator-and-heating-repairs`.
- [x] Add self-referencing canonicals to every retained indexable route.

### Consolidate duplicate service routes

- [x] Select one emergency-plumbing route and redirect the other emergency routes.
- [x] Select one blocked-drain route and redirect the duplicate.
- [x] Separate boiler installation and boiler repair cleanly; redirect the combined duplicate if unnecessary.
- [x] Select one water-leak route and redirect the duplicate.
- [x] Redirect `/servicesList` to `/services` and update navigation links.
- [x] Remove redirected routes from navigation and sitemap generation.

### Location URL structure

- [x] Make `/areas-we-cover` the Southampton hub.
- [x] Redirect `/areas-we-cover/southampton` to `/areas-we-cover`.
- [x] Make `/areas-we-cover/eastleigh` the Eastleigh hub.
- [x] Reverse the current incorrect Eastleigh redirects.
- [x] Remove or redirect `/areas-we-cover/southampton/eastleigh`.
- [x] Fix paths containing spaces, including `new forest` to `new-forest`.
- [x] Define one canonical route for every retained location.

### Service-by-area indexing strategy

- [x] Replace `FULLY_AFFECTED_TOWNS` with one typed page registry; keep the separate legacy content lookup only until Phase 4 rewrites it.
- [x] Give each service/location page an explicit state: `priority`, `draft`, `noindex`, `redirect` or `retired`.
- [x] Select the first 10–15 priority service/location combinations.
- [x] Keep draft/noindex pages out of the sitemap.
- [x] Keep non-priority combinations `noindex` pending the Phase 4 content decision instead of redirecting URLs that may later be rewritten.
- [x] Do not remove `noindex` until the local-page checklist is complete.

### Broken internal links

- [x] Fix all missing hub links.
- [x] Only link neighbourhood names that exist in the route registry.
- [x] Render unregistered neighbourhoods as plain text or create approved pages for them.
- [ ] Fix all 125 missing target patterns found in the committed build (source fix complete; fresh-build crawl pending).
- [x] Add an automated internal-link validation command.

### Sitemap, robots and errors

- [x] Replace conflicting sitemap scripts with one generator.
- [x] Generate the sitemap from the canonical page registry.
- [x] Include only indexable, canonical, successful URLs.
- [x] Exclude redirects, `noindex` pages, drafts and 404s.
- [x] Remove sitemap URLs absent from the build.
- [x] Add eligible build routes currently missing from the sitemap.
- [x] Correct inquiry-form case/path mismatches.
- [x] Keep one canonical `robots.txt` and remove unnecessary crawl-delay directives if desired.
- [x] Add explicit metadata to the not-found page.
- [x] Validate redirect targets and prevent redirect chains.

### Exit criteria

- [ ] Every retained route returns the intended page or one direct 301 redirect.
- [ ] No internal link points to a missing route.
- [ ] Every indexable page has one correct self-canonical.
- [ ] The sitemap contains only canonical, indexable pages.
- [ ] No sitemap URL redirects, returns 404 or declares `noindex`.

---

## Phase 2 — Metadata, Social Sharing and Structured Data

Status: Implemented with documented business-input, deployment and build-verification deferrals. Decisions and evidence are recorded in `docs/phase-2-metadata-schema.md`.

### Page metadata

- [x] Add metadata to `/inquiry-form`, `/testimonials` and every retained route; redirect legacy `/location-page` instead of indexing it independently.
- [x] Redirect or remove legacy pages that should not exist independently.
- [x] Apply the audit’s five core title/meta templates, adjusted to omit unverified claims.
- [x] Keep titles near 50–60 characters where practical.
- [x] Keep descriptions near 140–155 characters where practical.
- [x] Remove the obsolete homepage `keywords` field.
- [x] Add a global `metadataBase`.

### Social previews

- [x] Use `/og-image.png` as the default 1200×630 Open Graph image.
- [x] Add default Open Graph image metadata.
- [x] Add Twitter `summary_large_image` metadata.
- [ ] Add page-specific social images where useful.
- [ ] Verify WhatsApp, Facebook, LinkedIn and X previews.

### Structured data

- [x] Correct the homepage `Plumber`/`LocalBusiness` schema.
- [x] Remove self-serving `aggregateRating` and review markup.
- [x] Remove unverified hardcoded schema reviews.
- [ ] Add the real Google Business Profile URL to `sameAs`; the invalid GTM URL has been removed.
- [ ] Add `areaServed` only after service areas are confirmed; unconfirmed values have been removed.
- [ ] Confirm whether the street address should be present.
- [x] Add consistent `Service` schema to indexable service pages.
- [x] Add `BreadcrumbList` schema using canonical URLs.
- [x] Add no `FAQPage` schema until visible FAQ claims are verified in Phase 3.
- [x] Add `Article` schema to published blog posts.
- [ ] Validate representative pages with Rich Results Test and Schema.org validator.

### Exit criteria

- [ ] Every indexable page has unique title, description and canonical.
- [ ] Every indexable page has a valid social preview image.
- [ ] Structured data contains only visible, accurate and verifiable information.
- [ ] No schema validation errors remain on representative templates.

---

## Phase 3 — Trust, Reviews, Claims and Legal Compliance

### Reviews

- [x] Audit all 93 hardcoded review records against real sources.
- [x] Remove every review that cannot be verified.
- [x] Remove “Local Customer”, “Happy Customer” and “Satisfied Client” fallbacks.
- [x] Do not create a local review store until approved, source-linked records are supplied.
- [x] Use only the source-linked Google/Featurable review feed; do not invent local review records.
- [x] Link to the Google profile or source where appropriate.
- [x] Do not mark business-owned testimonials as review rich-result schema.

### Claims and business facts

- [x] Create one `businessFacts` configuration for contact details, response wording, pricing and source links.
- [x] Remove conflicting “established 2003” and “over 15 years” wording until evidence is supplied.
- [x] Remove Gas Safe number `549210` from public claims until it is independently verified.
- [x] Remove unsupported DBS, CIPHE, insurance and accreditation claims.
- [x] Remove unsupported FLIR, ultrasonic/acoustic and other equipment claims.
- [x] Remove the unsourced 280 ppm hard-water figure.
- [x] Replace guaranteed response claims with wording the business can consistently honour.
- [x] Standardize call-out, diagnostic and quote wording.
- [x] Standardize warranty wording as job/product specific.
- [x] Remove unsupported “all engineers” or “every technician” claims.

### Privacy and cookies

- [x] Create a dedicated `/cookie-policy` page.
- [x] Correct the footer Cookie Policy link.
- [x] Update the privacy policy with actual form, analytics, advertising and review-widget vendors.
- [x] Document purposes, legal bases, retention and user rights.
- [x] Add a consent banner with equally available reject, manage and accept choices.
- [x] Default analytics and advertising consent to denied.
- [x] Gate non-essential Google and third-party scripts behind consent.
- [x] Implement Google Consent Mode v2.
- [x] Add accessible controls to change or withdraw consent.

### Exit criteria

- [x] No placeholder or fabricated service-page review content is visible.
- [x] Audited claims are consistent across metadata, schema and page copy.
- [x] Non-essential tracking and external embeds do not run before consent.
- [x] Privacy and cookie links lead to dedicated, accurate pages.

---

## Phase 4 — Core Content and Page Development

Status: Implemented with client-evidence deferrals. Technical work and verification are recorded in `docs/phase-4-content-pages.md`; priority local pages remain `noindex` until photographs, reviews and response wording are supplied.

### Homepage

- [x] Change the H1 to include the core service and Southampton.
- [x] Use approved-safe wording based on the suggested H1; same-day and Gas Safe registration claims remain omitted pending evidence.
- [x] Add short server-rendered sections for emergency plumbing, boiler repair, boiler installation, blocked drains and leak detection.
- [x] Link each section to its canonical service page.
- [ ] Keep phone, WhatsApp, rating and Gas Safe conversion elements.

### Core service pages

- [x] Rewrite the five primary service pages around one clear search intent each.
- [x] Remove irrelevant cross-service lists and copied FAQ content.
- [x] Add service-specific process, FAQs and related links; proof photographs remain pending client assets.
- [x] Correct “Aptiy Magnetic Sludge Density Analysis”.
- [x] Correct visible “247 emergency plumber” wording to “24/7 emergency plumber” while retaining the established route slug.
- [x] Normalize CP12 and service-label capitalization.
- [x] Correct the radiator service currently labelled “Boiler Repairs”.

### Additional service pages

- [x] Create a canonical Central Heating & Radiators page.
- [x] Create a canonical CP12/Landlord Gas Safety Certificate page.
- [x] Create a canonical Power Flushing & Hard-Water Protection page.
- [ ] Create a Gas Safety Inspection page if it is a confirmed service.
- [ ] Retain and improve Bathroom & Kitchen/General Plumbing if confirmed.

### Priority service-by-area pages

- [ ] Rewrite the first 10–15 approved combinations.
- [ ] Write 400–700 words unique to the exact service and place.
- [ ] Add a unique service/place H1.
- [ ] Add real local housing, plumbing and common-fault information.
- [ ] Add 3–4 service/location-specific FAQs.
- [ ] Add one or two real job photographs with descriptive alt text.
- [ ] Add one verified review relevant to the area/job.
- [ ] Link to the parent service page and 2–3 valid neighbouring areas.
- [ ] Add realistic local response wording.
- [ ] Replace the current visible photo placeholders.
- [x] Make `serviceName` affect the local content or remove the unused property.

### About and pricing

- [x] Create `/about` with confirmed company details and call process; history, team, insurance, credentials and guarantees remain pending evidence.
- [x] Add real engineer, van and completed-work photographs.
- [ ] Create a pricing guide only after prices are approved.
- [x] Publish approved call-out and diagnostic wording, including separate repairs/parts and variable evening, weekend and emergency charges; no unsupported fee amount is shown.

### Blog

- [x] Create `/blogs/[slug]`.
- [x] Replace all blog-card `/services` links with unique article links.
- [x] Add article metadata, canonical, social image and Article schema.
- [x] Publish the three planned articles first.
- [x] Add the complete 12-topic Appendix B backlog.
- [x] Link every article to the relevant service page and related content.
- [x] Establish an editorial schedule of one or two useful articles per month.

### Exit criteria

- [ ] All indexable pages contain complete, useful and non-placeholder content.
- [ ] Priority pages pass the Appendix C local-page checklist.
- [ ] No duplicated service route competes for the same primary query.
- [x] Blog cards lead to complete article pages.

---

## Phase 5 — Conversion Paths, Forms and Measurement

Status: Implemented with analytics-account and deployment-test deferrals. Code changes and required external confirmations are recorded in `docs/phase-5-conversion-measurement.md`.

### Calls to action and forms

- [x] Choose one canonical quote route: `/inquiry-form`.
- [x] Redirect `/booking` and duplicate inquiry routes if they are not retained.
- [x] Reduce primary CTAs to “Call Now” and “Request a Quote”.
- [x] Replace direct external Fillout links with the canonical on-site quote route.
- [x] Retain embedded Fillout on the canonical static-host-compatible quote page.
- [x] Load Fillout once and remove duplicated embed scripts.
- [x] Tighten origin checking to exact `fillout.com` or `.fillout.com` hosts.
- [x] Remove unused simulated form state and dead submission code.
- [x] Provide accessible loading, provider validation/error/success UI, consent fallback and contact alternatives.

### Analytics and conversion tracking

- [ ] Confirm GA4 property and measurement ID.
- [ ] Confirm Google Ads and Tag Manager IDs and their roles.
- [x] Remove duplicate or obsolete tag/form-loader configuration.
- [x] Track header phone clicks.
- [x] Track sticky mobile call clicks.
- [x] Track service-page phone clicks.
- [x] Track WhatsApp clicks.
- [x] Track quote-form starts.
- [x] Track successful form submissions once per submission.
- [x] Track booking/quote CTA clicks.
- [ ] Mark the agreed GA4 events as conversions.
- [ ] Link Search Console to GA4.
- [ ] Configure call tracking without changing the visible NAP inconsistently.

### Exit criteria

- [x] Visitors see one consistent quote journey.
- [x] The retained Fillout form provides provider validation/feedback plus an accessible consent fallback; live submission testing remains required.
- [ ] Test conversions appear once in GA4/Google Ads.
- [x] Tracking respects stored consent.

---

## Phase 6 — Local SEO, Navigation and Internal Linking

Status: Implemented with business-coverage and external-account deferrals. Source changes and external follow-up are recorded in `docs/phase-6-local-seo-linking.md`.

### Service areas and town pages

- [x] Align active metadata, navigation and content with the current five-city coverage registry; final business confirmation remains required.
- [x] Remove Bournemouth, Dorset, Portsmouth and Andover coverage references.
- [x] Retain substantial existing town pages for Romsey, Totton, Hedge End, Chandler’s Ford and Hamble-le-Rice without claiming new markets.
- [x] Avoid creating another layer of thin mass-generated pages.
- [x] Standardize emergency response wording across town content to 30–60 minutes, subject to availability, traffic and location.

### Footer and navigation

- [x] Reduce the footer from all-area links to main services, top areas and key pages.
- [x] Correct the duplicated Boiler Services link.
- [x] Add the canonical Boiler Repair link.
- [x] Replace `/servicesList` navigation links with `/services`.
- [x] Add About, Blog, Contact/Quote, Privacy, Cookies and Terms links.
- [x] Keep the full area list on the Areas hub rather than every page.

### Hub-and-spoke links

- [x] Link canonical service pages to priority areas.
- [x] Link area pages to primary services and valid neighbours.
- [x] Link priority service-by-area pages to parent service, area and valid neighbour pages.
- [x] Link blog posts to relevant services.
- [x] Link About content to services and quote actions; pricing remains deferred until approved.
- [x] Correct source breadcrumb links to canonical area and service routes; built-output validation remains pending.

### External local SEO work

- [ ] Complete Google Business Profile categories, services, areas and opening hours.
- [ ] Add real GBP photographs and regular posts.
- [ ] Reply to every review.
- [ ] Start a post-job SMS/WhatsApp review-request workflow.
- [ ] Standardize NAP across Gas Safe, Yell, Checkatrade and other approved directories.
- [ ] Hide a residential address on GBP if appropriate.

### Exit criteria

- [x] Navigation exposes canonical routes only.
- [x] Footer is compact and useful.
- [x] Priority pages receive contextual internal links.
- [ ] Site NAP and GBP data are consistent.

---

## Phase 7 — Rendering, Performance, Images and Accessibility

Status: Implemented with runtime-test deferrals. Source validation and the remaining environment-dependent checks are recorded in `docs/phase-7-performance-accessibility.md`.

### Server/static rendering

- [x] Remove `ssr: false` from SEO-relevant homepage sections.
- [x] Render services, areas, About, trust, contact and footer through the normal Next.js server/static render path.
- [x] Keep interactive behaviour isolated from the homepage composition and remove the client-only carousel dependency.
- [x] Confirm key copy exists in generated HTML without browser JavaScript.

### Images and media

- [x] Inventory all image usage and remove unused assets.
- [x] Convert photographs to appropriately sized WebP files.
- [x] Add explicit dimensions to every image.
- [x] Replace generic filenames with descriptive names where practical.
- [x] Replace generic alt text with page-specific descriptions and hide decorative duplicates from assistive technology.
- [x] Use real business photographs.
- [x] Remove the unused 4.49 MB video instead of shipping and optimizing dead media.
- [x] Lazy-load below-the-fold images; no video remains.
- [x] Ensure hero/LCP media is preloaded and loaded with appropriate priority.

### JavaScript and third parties

- [x] Remove unused legacy components and routes.
- [x] Load Fillout, Featurable and analytics only where needed and after the relevant consent.
- [x] Reduce duplicated scripts and repeated trust markup across templates.
- [x] Review client-component boundaries and remove client-only rendering from SEO-relevant homepage composition.
- [x] Remove `ignoreBuildErrors` and `ignoreDuringBuilds` after fixing reported issues.

### Accessibility

- [x] Add a skip-to-content link.
- [x] Add a stable main-content target.
- [ ] Verify heading hierarchy on every template.
- [x] Provide global visible focus states for keyboard operation.
- [x] Add mobile navigation focus placement, trapping, Escape handling and focus return.
- [ ] Check colour contrast.
- [x] Give embeds and iframes accessible titles.
- [x] Ensure the embedded-form route has programmatic instructions and fallback contact options.
- [x] Announce embedded-form loading, errors and successful submissions.
- [x] Verify edited link and button accessible names.
- [x] Respect reduced-motion preferences.
- [ ] Test representative pages with automated tooling and a manual keyboard pass.

### Exit criteria

- [x] Complete indexable content appears in generated HTML.
- [ ] No critical accessibility failures remain.
- [ ] Representative mobile Core Web Vitals target “Good”.
- [x] Build completes with TypeScript and ESLint checks enabled.

---

## Phase 8 — Final QA, Deployment and Measurement

Status: Local automated QA complete. The production build, exported crawl, metadata, sitemap, redirects, structured data and representative HTTP checks pass. Browser, deployment, account and elapsed-measurement work remains pending as recorded in `docs/phase-8-final-qa.md`.

### Automated verification

- [x] Run a clean production build.
- [x] Confirm Git working tree contains only intended changes.
- [x] Crawl every generated page.
- [x] Verify there are no broken internal links.
- [x] Verify titles, descriptions, canonicals and robots directives.
- [x] Verify sitemap/build parity.
- [x] Verify redirects are direct and point to successful canonical routes.
- [x] Validate structured data.
- [ ] Run accessibility tests.
- [ ] Run Lighthouse/PageSpeed on representative templates.
- [ ] Test mobile and desktop layouts.
- [ ] Test phone, WhatsApp and form conversion events.
- [ ] Test consent grant, denial and withdrawal.

### Deployment and search checks

- [ ] Deploy to a staging or preview environment first.
- [ ] Manually test homepage, all core services, all hubs and priority local pages.
- [ ] Deploy production after approval.
- [ ] Submit the clean sitemap in Search Console.
- [ ] Inspect homepage, one service page and one local page in Search Console.
- [ ] Request indexing only for complete priority pages.
- [ ] Monitor Pages, Core Web Vitals and enhancement reports.

### 30/60/90-day measurement

- [ ] Record impressions, clicks and average positions for target queries.
- [ ] Record indexed canonical pages and excluded-page reasons.
- [ ] Record calls, WhatsApp clicks and form submissions.
- [ ] Record GBP calls, views and direction requests.
- [ ] Record review count, rating and recency.
- [ ] Compare Core Web Vitals and mobile speed with the baseline.
- [ ] Decide the next content batch from measured results rather than generating pages in bulk.

### Final exit criteria

- [x] Production build and crawl are clean.
- [x] Search engines receive only canonical, useful pages through the validated sitemap and robots directives.
- [ ] Enquiries are measured accurately and with consent.
- [ ] The next 90-day content plan is based on real search and conversion data.

---

## Suggested Implementation Sequence

1. Phase 0: decisions and fresh baseline.
2. Phase 1: route/indexing integrity.
3. Phase 2: metadata and schema.
4. Phase 3: trust and compliance.
5. Phase 4: content and new pages.
6. Phase 5: conversion and tracking.
7. Phase 6: local SEO and internal linking.
8. Phase 7: performance and accessibility.
9. Phase 8: final QA and measurement.

Do not start large-scale local content production until Phases 0–3 are complete. Otherwise the site risks publishing more incorrect canonicals, unverifiable claims and low-value URLs.
