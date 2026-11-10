# Phase 0 Technical Baseline

Status: Complete with deferrals

This document records the starting point before implementation. The repository's committed `out.zip` was inspected because a fresh build is currently blocked by unavailable npm network access.

## Environment

- Node: `v24.18.0`
- npm: `11.16.0`
- Branch at start: `main`
- Starting commit: `187a9f0058679f63ae5e8e54f432f2c23632382c`
- Package lock: npm lockfile version 3
- Tracked source files at initial security review: 238

## Dependency installation status

`npm ci` was attempted on 6 November 2026. It could not complete because this execution environment is restricted to cached npm packages and `zod@3.23.8` is not cached.

Reported failure:

```text
npm error code ENOTCACHED
npm error request to https://registry.npmjs.org/zod/-/zod-3.23.8.tgz failed:
cache mode is 'only-if-cached' but no cached response is available.
```

The failed install created an incomplete ignored `node_modules` directory. It must not be used for building or testing. Automated removal was blocked by the managed filesystem policy; a successful future `npm ci` should replace it, or it can be removed manually before retrying.

## Security prerequisite

Before installation was attempted, the repository received:

- A Microsoft Defender custom scan with no threats found.
- Static inspection of project scripts and package lifecycle scripts.
- Archive traversal and executable-signature checks.
- Review of package sources and integrity metadata.

No project code or package lifecycle script was executed during the malware review.

## Committed-build inventory

The committed `out.zip` contains:

- 671 generated HTML routes.
- 666 routes with titles.
- 666 routes with meta descriptions.
- 594 routes with canonicals.
- 313 `noindex` routes, including the 404 page.
- 589 routes with Open Graph titles and descriptions.
- 0 routes with `og:image`.

The current source and committed build are not fully synchronized. For example, the source noindex registry contains more towns than the committed build applies. All measurements must be regenerated after a successful clean build.

## Sitemap inventory

`public/sitemap.xml` currently contains:

- 661 total unique URLs.
- 560 service-by-area URLs.
- 13 top-level service URLs.
- 71 area-detail URLs.
- 0 blog-article URLs.

Comparison with the committed build found:

- 11 sitemap paths absent from the build.
- 20 build paths absent from the sitemap.
- Redirected and `noindex` URLs included in the sitemap.
- Eastleigh and inquiry-form path mismatches.

## Metadata and canonical findings

- All 13 top-level service pages use canonicals that omit `/services`.
- All generated radiator/heating area pages miss their intended metadata configuration because the page requests the wrong service key.
- `/inquiry-form`, `/location-page`, `/servicesList` and `/testimonials` have no page metadata.
- `/inquiry-form/Enquiry-Form` has incomplete metadata and a casing/path mismatch in the sitemap.
- The committed build has 77 routes without canonicals.
- The existing 1200×630 `public/og-image.png` is not used as Open Graph metadata.

## Route and internal-link findings

- The committed build contains 125 unique internal target paths that do not resolve to a generated page.
- `/areas-we-cover/southampton` is linked but not generated.
- The current Eastleigh redirects point to a target absent from the build.
- Some generated paths contain an invalid space, such as `new forest`.
- Numerous neighbourhood links are generated for locations that do not have registered routes.
- Multiple service route families compete for the same intent.

## Rendering findings

`HomePageContent.tsx` disables server rendering for nine important sections. The committed homepage HTML does not contain several key headings from services, About, testimonials and contact content. This must be corrected before Search Console rendering verification.

## Trust and content findings

- `AreaReviews.tsx` contains 93 hardcoded review records.
- Generic fallback reviews are labelled as Google reviews.
- The LocalBusiness schema contains two additional hardcoded reviews and self-serving rating markup.
- Batch 1 local content contains visible photo placeholders.
- Business claims and response-time promises are duplicated and inconsistent.

## Performance and accessibility starting observations

- 36 raw `<img>` usages and no Next Image usage.
- A 4.49 MB video and multiple images above 1 MB.
- TypeScript and ESLint build failures are currently ignored in `next.config.ts`.
- No skip-to-content link was found.
- Repeated generic image alt text is present.
- Non-essential Google scripts load without a visible consent implementation.

## Deferred prerequisites

The user instructed work to continue without waiting for these external prerequisites. They remain mandatory at the points below:

1. A clean dependency installation and production build must run before Phase 1 receives final build verification and before release.
2. The essential business facts in `docs/business-inputs.md` must be confirmed before Phases 3–4 publish trust claims or business content.
3. Fresh route, SEO, performance and accessibility measurements must be recorded when a runnable build is available.

The committed-build and source baseline is sufficient to begin deterministic route, canonical, sitemap and internal-link corrections in Phase 1. It is not a substitute for final build verification.

