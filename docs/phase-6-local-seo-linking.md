# Phase 6 — Local SEO, Navigation and Internal Linking

## Completed

- Aligned visible coverage navigation with the current five city registries: Southampton, Eastleigh, New Forest, Salisbury and Winchester.
- Removed Bournemouth, Dorset, Portsmouth and Andover coverage claims from visible content and active metadata.
- Removed the misplaced Highcliffe/Dorset entry from the Winchester registry, redirected its old URL to the Winchester hub and removed it from the checked-in sitemap.
- Replaced claim-heavy custom area descriptions at runtime with safe, consistent area metadata and canonical URLs.
- Retained the existing substantial Romsey, Totton, Hedge End, Chandler’s Ford and Hamble-le-Rice town pages without generating another mass layer of pages.
- Replaced the all-location footer with a compact footer containing main services, top areas, key pages, contact details and legal controls.
- Confirmed the footer contains distinct Boiler Repair and Boiler Installation links and no `/servicesList` link.
- Added contextual links from Emergency Plumbing, Boiler Repair and Blocked Drains pages to their selected priority service-area pages.
- Added parent-service, canonical area-guide and valid neighbouring-area links to priority local content.
- Changed area-page neighbouring towns from unconditional external links to canonical internal links when a registered route exists; unregistered neighbours render as text.
- Corrected the New Forest/Southampton breadcrumb URL builder and linked service-area breadcrumbs back to canonical area pages.
- Added a Services link to About; blog-to-service and quote links were completed in Phase 4.
- Standardised the visible site NAP as UKB Plumbing Ltd, 11 Fuchsia Gardens, Southampton, Hampshire, SO16 6TY, 07359 605766 and info@ukbplumbing.co.uk.

## Client confirmation still required

The five city registries reflect the current site/audit scope, not a new business declaration. UKB Plumbing must still confirm its exact operating boundary and realistic response expectations by town before any additional market is promoted or location-specific time is published.

## External work not performed without account access

- Google Business Profile categories, services, service areas, hours, address visibility, photographs and posts.
- Replies to live Google reviews or a post-job review-request workflow.
- NAP updates on Gas Safe, Yell, Checkatrade or other directories.

These actions require account authority and verified business facts. No external profile or customer message was changed.

## Verification

- Static search finds no active Bournemouth, Dorset, Portsmouth, Andover or Highcliffe coverage content; Highcliffe remains only as a redirect source.
- TypeScript reports only the previously documented missing unused UI/demo dependencies and `areaContentHelpers.ts` mismatch; no Phase 6 file appears in the error list.
- `git diff --check` passes; line-ending notices are informational.
- The production build again stopped before compilation because Windows denied the Next.js worker process (`spawn EPERM`). Fresh exported-HTML breadcrumb and internal-link validation remains required in an environment that permits child processes.
