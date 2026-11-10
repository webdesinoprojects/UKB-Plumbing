# Phase 2 Metadata, Social and Schema Decisions

Date: 7 November 2026

## Metadata

- Added a global `metadataBase` for `https://ukbplumbing.co.uk`.
- Added complete title, description and canonical metadata to the retained inquiry and testimonials routes. The legacy `/location-page` route redirects to `/inquiry-form` and therefore does not receive independent metadata.
- Rewrote the five core service titles and descriptions to the audit's target ranges without using unconfirmed Gas Safe, response-time, call-out-fee, warranty or pricing claims.
- Removed the obsolete homepage keywords field and removed unsupported claims from homepage, services, booking, blog and portfolio metadata.
- Added the default social image and `summary_large_image` Twitter card metadata.

## Social image

The previous `public/og-image.png` was a 1200×629 Lovable product screenshot unrelated to UKB Plumbing. It was replaced with a 1200×630 UKB Plumbing social card using the existing logo as the brand reference. The final card contains only:

- UKB Plumbing branding;
- “Plumbing & Heating Services in Southampton”;
- phone number `07359 605766`.

The first generated draft was rejected because it repeated the unverified “EST 2003” claim. The final asset contains no founding-year, rating, accreditation, response-time, price or guarantee claim.

## Structured data

- The homepage `Plumber` entity now contains only the business name, website, telephone, email, image and social profiles already linked from the site.
- Removed `aggregateRating`, two hardcoded reviews, the unconfirmed street address, unconfirmed opening hours, unconfirmed service areas and the invalid Google Tag Manager `sameAs` URL.
- Added consistent `Service` and canonical `BreadcrumbList` JSON-LD to all eight canonical top-level service pages.
- No FAQ schema was added. Existing visible FAQs contain business claims that require Phase 3 verification.
- There are no article detail routes yet, so Article schema remains a future requirement.

## Verification

Passed:

- The final social image is exactly 1200×630.
- All nine shared metadata-helper Open Graph blocks include the default image.
- The five core descriptions are 143–154 characters, and their revised titles are close to the audit's 50–60-character target.
- No `aggregateRating`, hardcoded schema review, schema street address, schema `areaServed`, or Tag Manager `sameAs` value remains in `LocalBusinessSchema.tsx`.
- All eight canonical top-level service pages render the shared service/breadcrumb schema component.
- TypeScript reported no errors in any Phase 2 file; the repository still has 51 pre-existing errors, primarily from the undeclared UI packages that were left unchanged.

Deferred before production:

- Add the real Google Business Profile URL when supplied.
- Confirm public address, service areas and opening hours before adding them to structured data.
- Verify social previews on WhatsApp, Facebook, LinkedIn and X after deployment.
- Run Rich Results Test and Schema.org validation against deployed representative pages.
- Complete fresh generated-HTML validation after the existing dependency/build blocker is resolved.
