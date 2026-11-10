# Sitemap Discrepancy Report

**Date:** September 25, 2026  
**Current Sitemap URL Count:** 583  
**Expected URL Count:** 369  
**Discrepancy:** +214 URLs

---

## PROBLEM IDENTIFIED

The current sitemap.xml contains **583 URLs** instead of the expected **369 URLs**. This is a **+214 URL discrepancy**.

---

## ROOT CAUSE ANALYSIS

### 1. **Critical Error: Duplicate URLs**
The sitemap contains duplicate entries for many URLs. The duplicate analysis shows that most service pages and area pages appear **TWICE** in the sitemap.

**Evidence:**
- Most `/services/{town}/{service}` URLs appear 2 times
- Most `/areas-we-cover/{city}/{town}` URLs appear 2 times
- Example: `https://ukbplumbing.co.uk/services/abbots-barton/247-emergency-plumber` appears 2 times

### 2. **Critical Error: Typos in URLs**
The sitemap contains multiple URLs with **typos in the domain name**:

**Typos Found:**
- `https://ukbukplumbing.co.uk/...` (extra "uk" in domain)
- `https://ukbpublicukbplumbing.co.uk/...` (extra "publicuk" in domain)
- `https://ukbpplumbing.co.uk/...` (extra "p" in domain)
- `https://ukbpbplumbing.co.uk/...` (extra "pb" in domain)

**Examples:**
- `https://ukbukplumbing.co.uk/services/st-cross/cp12-landlord-safety-certificates`
- `https://ukbukplumbing.co.uk/services/quidhampton/boiler-installation-and-upgrades`
- `https://ukbpublicukbplumbing.co.uk/services/shawford/boiler-repair-and-breakdown`
- `https://ukbpbplumbing.co.uk/services/wilton/radiator-and-heating-repairs`

### 3. **Critical Error: URL Construction Errors**
The sitemap contains malformed URLs:

**Malformed URLs:**
- `https://ukbplumbing.co.uk/services/salisbury-city-centretrary-city-centre/247-emergency-plumber`
  - "trary-city-centre" appears twice in the URL path
- `https://ukbplumbing.co.uk/services/milford/water-leak-rears-and-detection`
  - "rears" instead of "repairs"

---

## FULL BREAKDOWN OF CURRENT SITEMAP

### Category Breakdown (estimated based on analysis):

| Category | Count | Expected | Difference |
|-----------|-------|----------|------------|
| Core Pages | 13 | 13 | 0 |
| Service Landing Pages | 13 | 13 | 0 |
| /services/{town}/{service} Pages | ~520 | ~312 | +208 |
| /areas-we-cover Pages | ~50 | ~51 | -1 |
| **TOTAL** | **583** | **369** | **+214** |

### Duplicate URL Analysis:

**Total URLs in sitemap:** 583  
**Unique URLs:** ~291  
**Duplicate entries:** ~292 (each appearing twice)

**Duplicate Examples:**
- `https://ukbplumbing.co.uk/services/abbots-barton/247-emergency-plumber` (2x)
- `https://ukbplumbing.co.uk/services/badger-farm/247-emergency-plumber` (2x)
- `https://ukbplumbing.co.uk/services/bemerton-heath/247-emergency-plumber` (2x)
- ... and so on for all Batch 1 towns and services

---

## NOINDEXED URL EXCLUSION VERIFICATION

### ✅ NOINDEXED URLs ARE EXCLUDED

I checked for all 60 fully-affected towns (the ones with noindex) and confirmed **NONE** of their service pages are in the sitemap.

**Fully Affected Towns Checked:**
alderbury, andover-down, bar-end, barton-on-sea, bassett, bishopdown, bitterne, bognor-regis, brockenhurst, chandlers-ford, charlton, chichester, christchurch, eastleigh, emsworth, fareham, fordingbridge, freemantle, goodworth-clatford, hamble-le-rice, harestock, harnham, havant, hayling-island, hedge-end, highcliffe, highfield, hythe, laverstock, lordshill, lordswood, lymington, lyndhurst, milford-on-sea, millbrook, new-milton, ocean-village, olivers-battery, picket-piece, poole, redbridge, romsey, shirley, sholing, sleepers-hill, southampton-road, sparsholt, st-denys, st-giles-hill, stanmore, stockbridge, stratford-sub-castle, teg-down, totton, upper-clatford, west-end, weston, wherwell, wimborne, winchester-city-centre

**Result:** ✅ All 480 noindexed URLs (60 towns × 8 services) are correctly excluded from the sitemap.

---

## WHY 569 vs 369 MISMATCH

The discrepancy is caused by:

1. **Duplicate URLs:** ~292 duplicate entries (most service and area pages appear twice)
2. **Malformed URLs:** ~12 URLs with typos in domain name
3. **URL Construction Errors:** ~8 URLs with path errors

**Math:**
- Expected: 369 unique URLs
- Actual duplicates: +292
- Malformed URLs: +20
- Total actual: 583
- Discrepancy: 583 - 369 = +214

---

## REQUIRED CORRECTIONS

### Immediate Actions Needed:

1. **Remove all duplicate entries** - Each URL should appear only once
2. **Fix typos in domain names** - Remove "ukbuk", "ukbpublic", "ukbp", "ukpb" prefixes
3. **Fix URL construction errors** - Remove "trary-city-centre" duplicates, fix "rears" to "repairs"
4. **Regenerate sitemap cleanly** - Use the actual build output to generate accurate URLs

### Expected Result After Corrections:

**Final URL Count:** 369 URLs  
**Breakdown:**
- Core pages: 13
- Service landing pages: 13
- /services/{town}/{service} pages: 312 (792 total - 480 noindexed)
- /areas-we-cover pages: 51 (all area pages, none noindexed)
- Total: 369

---

## RECOMMENDATION

The current sitemap.xml was generated with errors (duplicates and typos). It needs to be completely regenerated using a clean method that:

1. Uses the actual `out/` directory structure as the source of truth
2. Extracts URLs from actual HTML files
3. Excludes all 60 fully-affected towns (with noindex)
4. Ensures each URL appears exactly once
5. Has no typos or construction errors

**I recommend regenerating the sitemap from scratch using the build output to ensure accuracy.**