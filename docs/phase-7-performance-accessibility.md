# Phase 7 — Rendering, Performance, Images and Accessibility

## Completed

- Removed all nine `ssr: false` homepage imports. Services, areas, About, trust, contact, calls to action, brands, reviews and the footer now use the normal Next.js server/static render path.
- Replaced the client-side brand carousel with a static, responsive brand grid and removed unsupported accreditation wording.
- Removed the route-change auto-scroll component and its client-side refresh behaviour.
- Removed unused legacy UI, demo-route, hook and helper files after confirming that no active application import referenced them.
- Re-enabled TypeScript and ESLint as real build checks by removing `ignoreBuildErrors` and `ignoreDuringBuilds`.
- Added a repository lint command and limited the TypeScript entry graph to the active Next.js application while retaining transitive checking of imported code.
- Added a skip link, stable `main-content` target, global keyboard focus styling and reduced-motion behaviour.
- Added accessible mobile-menu dialog semantics, expanded-state relationships, initial focus, Tab trapping, Escape-to-close and focus return.
- Kept the Fillout iframe title and accessible loading, failure, consent and contact fallback states established in Phase 5.
- Added explicit width and height attributes to every raw image element.
- Marked hidden duplicate hero images as decorative and retained descriptive text for meaningful service and portfolio images.
- Replaced repeated hard-coded `4.9` and `122 Google reviews` claims with direct Google and Gas Safe profile links because no approved rating/count evidence exists in the business facts.
- Consolidated the repeated review/Gas Safe badge into one reusable component.

## Image and media results

- Inventoried `public/lovable-uploads` against every TypeScript, TSX and CSS source reference.
- Removed 24 unreferenced image assets, the unused claim-heavy promotional banner asset and the unused 4.49 MB video. All are recoverable from Git history.
- Found five HEIF files and one WebP file incorrectly labelled as `.jpg`; converted those and all remaining JPEG photographs into correctly named WebP files.
- Renamed generic service, hero, portfolio and before/after filenames to descriptive WebP names.
- Compressed the 1.46 MB before/after PNG to a 99,822-byte WebP while retaining its 1280×720 dimensions.
- Confirmed all 31 remaining `lovable-uploads` files are referenced by source and all 31 source references resolve to existing files.
- Added hero WebP preload metadata and retained lazy loading for below-the-fold images.
- Real team, van, engineer and job photography still requires approved client assets; the audit requirement must not be satisfied with invented photographs.

## Source verification

- `npx tsc --noEmit --incremental false --pretty false`: passes.
- `npm run lint`: passes.
- `git diff --check`: passes; Git only reports informational line-ending notices.
- Raw `<img>` scan: no image is missing explicit width and height attributes.
- Asset-reference scan: 31 references, zero missing files and zero unreferenced files.
- Production build: compiled, type-checked, linted and exported 671 static/SSG routes successfully.
- Generated-HTML check: homepage content for Emergency Plumbing, Boiler Repair, About UKB Plumbing, Areas We Cover and Request a Quote is present in `out/index.html` without browser JavaScript.
- Sitemap validation: 99 canonical indexable URLs, with no redirect chains.
- Internal-link validation: passes across 669 exported HTML files.

## Runtime checks still required

- Run automated accessibility testing and a full manual keyboard pass across representative templates.
- Check heading hierarchy and colour contrast on every template.
- Run Lighthouse/PageSpeed and measure mobile Core Web Vitals on a deployed preview.
- Replace the generic team background with approved real business photography when supplied.

During the first build attempt, Next.js exposed a legacy dynamic-route signature that allowed non-Promise `params`. That route now uses the required Next.js 15 Promise signature. The first successful export then exposed 17 links to the redirected Southampton version of Chandler's Ford; the city registry and area lookup now point directly to its canonical Eastleigh route. The final build and all repository validators pass.
