# Core Web Vitals Performance Tracking

## Test Record

- Baseline date: 2026-06-11
- Baseline commit: `aa023e9`
- Production origin: `https://phoenixwaterfilters.fr`
- Theme store: `07neys-f1.myshopify.com`
- Shopify development theme ID: `146812141621`
- Lighthouse runner: Lighthouse CLI through `npx`
- Browser: Headless Chrome
- Test state: Production storefront, cold navigation, no theme optimization changes made

## Pages Under Test

| Page type | URL |
| --- | --- |
| Home | `https://phoenixwaterfilters.fr/` |
| Product | `https://phoenixwaterfilters.fr/products/the-phoenix-gravity-filtre-a-eau` |
| Collection | `https://phoenixwaterfilters.fr/collections/all-products` |

The product URL redirects to a selected subscription and variant query string during navigation. Keep using the clean URL above for future runs so Shopify applies the same storefront behavior.

## Core Web Vitals Thresholds

| Metric | Good | Needs improvement | Poor |
| --- | ---: | ---: | ---: |
| LCP | `<= 2.5 s` | `2.5-4.0 s` | `> 4.0 s` |
| INP | `<= 200 ms` | `200-500 ms` | `> 500 ms` |
| CLS | `<= 0.10` | `0.10-0.25` | `> 0.25` |

Core Web Vitals pass only when LCP, INP, and CLS are all in the "Good" range at the 75th percentile.

## Real-User Core Web Vitals

These values are Chrome UX Report p75 field data returned by Chrome DevTools on 2026-06-11. Field data is the source of truth for Core Web Vitals. `N/A` means the URL did not have enough CrUX data.

| Page | Device context | Baseline LCP | Baseline INP | Baseline CLS | Baseline result | Updated LCP | Updated INP | Updated CLS | Updated result |
| --- | --- | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- |
| Home | Mobile | `2.201 s` | `144 ms` | `0.00` | Pass | TBD | TBD | TBD | TBD |
| Home | Desktop | `1.901 s` | `66 ms` | `0.00` | Pass | TBD | TBD | TBD | TBD |
| Product | Mobile | N/A | N/A | N/A | Insufficient field data | TBD | TBD | TBD | TBD |
| Product | Desktop | N/A | N/A | N/A | Insufficient field data | TBD | TBD | TBD | TBD |
| Collection | Mobile | `0.874 s` | `112 ms` | `0.00` | Pass | TBD | TBD | TBD | TBD |
| Collection | Desktop | Not captured | Not captured | Not captured | Pending | TBD | TBD | TBD | TBD |

## Lighthouse Lab Baseline

Lighthouse values are controlled diagnostics, not real-user Core Web Vitals. INP is not listed because a navigation-only Lighthouse run does not reproduce representative user interactions. Use CrUX or production real-user monitoring for INP.

| Page | Profile | Performance | FCP | LCP | TBT | CLS | Speed Index | TTI |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Home | Mobile | `28` | `7.783 s` | `20.412 s` | `1,486 ms` | `0.090` | `11.347 s` | `33.300 s` |
| Home | Desktop | `82` | `0.847 s` | `1.997 s` | `39 ms` | `0.007` | `3.487 s` | `7.094 s` |
| Product | Mobile | `48` | `2.367 s` | `3.883 s` | `1,574 ms` | `0.073` | `20.100 s` | `63.330 s` |
| Product | Desktop | `81` | `0.653 s` | `0.924 s` | `94 ms` | `0.164` | `5.979 s` | `12.071 s` |
| Collection | Mobile | `41` | `2.133 s` | `5.469 s` | `1,050 ms` | `0.155` | `7.746 s` | `28.560 s` |
| Collection | Desktop | `90` | `0.628 s` | `1.371 s` | `42 ms` | `0.006` | `2.561 s` | `6.246 s` |

## Updated Lighthouse Results

Fill this table after optimization using the same URLs and Lighthouse profiles.

| Page | Profile | Performance | FCP | LCP | TBT | CLS | Speed Index | TTI | Change summary |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Home | Mobile | `37` | `3.078 s` | `8.181 s` | `1,307 ms` | `0.001` | `9.295 s` | `29.584 s` | Development theme pass 1: deferred hero video, Wistia, GTM, and carousel media |
| Home | Desktop | `81` | `0.820 s` | `2.061 s` | `42 ms` | `0.002` | `3.463 s` | `5.463 s` | Development theme pass 1: payload and script deferral improvements |
| Product | Mobile | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| Product | Desktop | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| Collection | Mobile | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| Collection | Desktop | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |

The updated homepage values were measured on development theme `146812141621` before production deployment. Production CrUX values must not be updated until the changes are deployed and a new field-data window is available.

### Homepage Pass 1 Comparison

| Profile | Metric | Baseline | Development theme | Change |
| --- | --- | ---: | ---: | ---: |
| Mobile | Transfer size | `12.96 MB` | `4.65 MB` | `-64%` |
| Mobile | Requests | `362` | `327` | `-35` |
| Mobile | FCP | `7.783 s` | `3.078 s` | `-60%` |
| Mobile | LCP | `20.412 s` | `8.181 s` | `-60%` |
| Mobile | TBT | `1,486 ms` | `1,307 ms` | `-12%` |
| Mobile | CLS | `0.090` | `0.001` | `-99%` |
| Desktop | Transfer size | `22.76 MB` | `11.89 MB` | `-48%` |
| Desktop | Requests | `366` | `326` | `-40` |
| Desktop | TTI | `7.094 s` | `5.463 s` | `-23%` |

Raw updated reports:

- `performance-reports/optimized/home-mobile-pass-3/`
- `performance-reports/optimized/home-desktop-pass-3/`

### Homepage Hero Migration

On 2026-06-11, the active generated custom-code hero was disabled and replaced in `templates/index.json` with `sections/custom-hero-banner.liquid`.

The section keeps the same headline, price, rating, CTA, assurances, poster image, and background video while applying these performance controls:

- The poster image is rendered immediately with explicit dimensions and `fetchpriority="high"` so it can become the initial LCP candidate.
- Video sources use `data-src`, `preload="none"`, and are attached after page load or idle time instead of competing with initial rendering.
- Background video is disabled on mobile by default, avoiding the large MP4 transfer on constrained devices.
- The hero has fixed desktop and mobile heights to reserve layout space and reduce CLS risk.
- The old custom-code hero remains disabled in the template for rollback.

The existing development-theme Lighthouse results above predate this section migration. Fresh results are pending because the Shopify CLI store session returned HTTP `401` during preview validation.

## Initial Findings

1. Mobile is the primary lab-performance risk across all three templates.
2. Home mobile has the weakest Lighthouse result: performance `28`, LCP `20.412 s`, and TBT `1,486 ms`.
3. Collection mobile fails the lab LCP and CLS targets at `5.469 s` and `0.155`.
4. Product mobile is close to poor LCP at `3.883 s` and has high TBT at `1,574 ms`.
5. Product desktop CLS is not acceptable at `0.164`, despite fast LCP.
6. All templates repeatedly surfaced large DOM, third-party code, forced reflow, caching, and network dependency findings in Chrome traces.
7. Current CrUX data passes for the home and collection URLs where data is available. Lab regressions still matter because they expose risks that may reach field data after traffic or content changes.

## Raw Baseline Artifacts

Each Lighthouse folder contains `lighthouse.report.html` and `lighthouse.report.json`. Chrome trace files preserve deeper LCP, layout shift, network, third-party, and main-thread evidence.

- `performance-reports/baseline/home-mobile/`
- `performance-reports/baseline/home-desktop/`
- `performance-reports/baseline/product-mobile/`
- `performance-reports/baseline/product-desktop/`
- `performance-reports/baseline/collection-mobile/`
- `performance-reports/baseline/collection-desktop/`

## Comparison Rules

1. Test the production URL after deployment, not only a local theme preview.
2. Use the same clean URLs listed above.
3. Run mobile and desktop separately and never run Lighthouse jobs in parallel.
4. Use a cold navigation and avoid interacting with the page during the run.
5. Run Lighthouse three times per page/profile for final validation and record the median.
6. Compare CrUX over a full 28-day collection window after production changes.
7. Do not treat TBT as INP. TBT is a lab diagnostic; INP requires real user or representative interaction data.
