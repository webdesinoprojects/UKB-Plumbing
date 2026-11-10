# Phase 1 Route and Indexing Decisions

Date: 6 November 2026

## Canonical service routes

| Canonical route | Redirected aliases |
| --- | --- |
| `/services/emergency-plumber` | `/services/emergency-call-out`, `/services/emergency-plumbing-repairs` |
| `/services/blocked-drains` | `/services/blocked-drain-cleaning` |
| `/services/water-leakage-and-repair` | `/services/water-leak-repairs` |
| `/services/boiler-installation` | `/services/boiler-installation-repair` |
| `/services/boiler-repair` | None |
| `/services/radiator-repairs` | None |
| `/services/pipe-repairs-replacement` | None |
| `/services/bathroom-kitchen-plumbing` | None |

`/servicesList` redirects directly to `/services`. Navigation and service-card data now use only the canonical routes.

## Canonical location routes

- `/areas-we-cover` is the Southampton hub.
- `/areas-we-cover/eastleigh` is the Eastleigh hub.
- `/areas-we-cover/new-forest` is the New Forest hub.
- `/areas-we-cover/salisbury` and `/areas-we-cover/winchester` remain their respective hubs.
- `/areas-we-cover/southampton` redirects to `/areas-we-cover`.
- Old Southampton/Eastleigh paths redirect directly to the Eastleigh hub.
- Chandler's Ford is canonical under Eastleigh; its Southampton duplicate redirects there.
- Encoded `new forest` paths redirect to `/areas-we-cover/new-forest`.

Neighbourhood chips now link only when the destination exists in `cityAreasRegistry`. Unregistered names are rendered as text instead of links to missing pages or a generic map URL.

## Service-by-area indexing decision

All generated service/location pages remain `noindex,follow`. The first 15 pages selected for the future content rewrite are recorded as `priority` in `src/data/pageRegistry.ts`, but priority does not mean indexable. Indexing remains disabled until a page passes the audit's local-page checklist and has approved local content, photographs, review evidence, and business claims.

The selected batch covers emergency plumbing, boiler repair, and blocked drains across Shirley, Bitterne, Portswood, Hedge End, Chandler's Ford, Eastleigh Central, Romsey, and Totton.

## Sitemap and validation rules

- The committed sitemap contains 93 canonical routes and no service/location pages.
- Redirect sources, `noindex` pages, missing files, non-self canonicals, and 404s are excluded by the post-build generator.
- The build now runs sitemap generation, sitemap/redirect validation, and internal-link validation after `next build`.
- Conflicting legacy sitemap generators were removed.
- `robots.txt` points to the canonical sitemap and no longer sets a crawl delay.

## Verification

Passed:

- JavaScript syntax checks for all three sitemap/link scripts.
- Source registry assertions: 93 unique sitemap URLs, 14 direct redirects, 15 valid priority combinations, no redirect sources in the sitemap, no redirect chains, and no service/location URLs in the sitemap.
- `git diff --check` after whitespace cleanup.

Deferred at the user's direction:

- A fresh `next build` and generated-HTML crawl. The existing project still imports undeclared UI packages, starting with `@radix-ui/react-slot`; dependency cleanup was explicitly left out of this phase. The post-build validators must pass before production deployment.
