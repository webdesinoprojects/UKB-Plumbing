# Phase 8 — Final QA, Deployment and Measurement

## Local QA completed

- The clean production build compiles, runs TypeScript and ESLint, generates all static/SSG routes and completes the export.
- Sitemap generation produces 99 canonical, indexable URLs.
- Sitemap validation confirms parity between the export, self-canonicals, robots directives and redirects, with no redirect chains.
- Internal-link validation crawls 669 exported HTML files and reports no missing or redirected internal targets.
- Added `scripts/validate-exported-seo.js` and the `npm run validate-seo` command so metadata and structured-data checks remain repeatable on every build.
- Exported SEO validation checks every non-redirect page for a title, description and canonical.
- Every sitemap URL is checked for a self-canonical, exactly one H1, indexability, Open Graph title/description/image and `summary_large_image` Twitter metadata.
- Every exported route outside the sitemap is required to declare `noindex`.
- All JSON-LD blocks are parsed; the validator rejects invalid JSON-LD, `aggregateRating` and self-serving `review` schema.
- The current export passes with 99 indexable routes and 516 valid JSON-LD blocks.
- Representative HTTP checks return 200 for the homepage, Boiler Repair, canonical Chandler's Ford area page, a unique blog article and the quote form.
- Phase 7's final build fixed the Next.js 15 dynamic `params` signature and all 17 links that previously used the redirected Southampton version of Chandler's Ford.

## Repeatable validation commands

```text
npm run lint
npx tsc --noEmit --incremental false --pretty false
npm run build
npm run validate-seo
git diff --check
```

The production build now runs sitemap generation, sitemap validation, internal-link validation and exported SEO validation in sequence. Any failure stops the build.

## Checks requiring a browser or deployed preview

The in-app browser was unavailable in this session, and no standalone browser or Lighthouse executable is installed. No package was installed to work around that constraint. These audit items therefore remain open:

- automated accessibility testing and a manual keyboard pass;
- desktop and mobile visual/layout checks;
- colour-contrast and per-template heading review;
- Lighthouse/PageSpeed and real Core Web Vitals;
- runtime verification of phone, WhatsApp, form-start and form-submit events;
- runtime consent grant, denial and withdrawal checks.

## External work requiring approval or account access

- Deploy to staging/preview, obtain stakeholder approval and then deploy production.
- Submit and inspect the sitemap in Search Console.
- Confirm the production GA4, Google Ads and Tag Manager identifiers and verify events in their account debuggers.
- Confirm Google Business Profile settings and reporting.
- Request indexing only for complete priority pages after real photographs, reviews and local proof are supplied.

## 30/60/90-day measurement

Impressions, clicks, rankings, indexed/excluded reasons, calls, WhatsApp clicks, forms, GBP activity, review trends and field Core Web Vitals require a live deployment plus elapsed data. They cannot be truthfully marked complete during implementation. The measurements remain listed in `plan.md` for the post-launch review.
