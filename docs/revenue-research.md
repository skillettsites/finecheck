# FineCheck - Revenue & Monetisation Research
## Compiled April 2026

---

# PART 1: CORE REVENUE MODEL

## Primary: Paid Appeal Letters

The core product: user enters fine details, gets a free assessment ("should I appeal?"), pays for a personalised appeal letter.

### Pricing Tiers

| Product | Price | What's Included | Margin |
|---------|-------|----------------|--------|
| **Quick Assessment** | Free | Council vs private detection, basic rights info, success probability estimate, deadline calculator | N/A (lead gen) |
| **Standard Appeal Letter** | £5.99 | AI-generated personalised letter using correct legal grounds, formatted for submission, deadline tracker | ~95% (Claude API cost ~£0.05-0.10) |
| **Premium Appeal Pack** | £9.99 | Standard letter + evidence checklist + template for escalation if rejected + operator-specific strategy guide | ~95% |
| **Court Defence Pack** | £29.99 | Full witness statement, legal arguments for County Court small claims, step-by-step court guide, what to say on the day | ~90% |
| **"We Pay" Guarantee** | £14.99 | Standard letter + if appeal fails, FineCheck refunds the letter fee | ~80% (accounting for 40-50% loss rate) |

### Why These Prices Work

- PCN Appeal Assistant proves £4.99 converts
- PCN Beater proves £6.99 converts
- GoLitigo proves £9.99 converts
- ParkingFines.org.uk proved £18 converts (before ceasing trade)
- The fine itself is £60-160, so £5.99-14.99 is 4-10% of the cost at risk
- 40% of people think their fine is unfair but don't appeal; the barrier is effort, not price
- A solicitor charges £99-200 for the same service

### Conversion Funnel

```
Monthly visitors:        100,000
Enter fine details:       40,000 (40% of visitors)
See free assessment:      35,000 (87.5% completion)
Shown "should appeal":   25,000 (71% of assessments)
Click "Get letter":       5,000 (20% of positives)
Complete payment:         2,500 (50% checkout completion)
= 2.5% overall conversion
```

### Revenue Projections

| Traffic | Conversion | Letters/Month | Avg Price | Monthly Revenue | Annual Revenue |
|---------|-----------|---------------|-----------|----------------|----------------|
| 10,000/mo | 2.5% | 250 | £7.50 | £1,875 | £22,500 |
| 25,000/mo | 2.5% | 625 | £7.50 | £4,688 | £56,250 |
| 50,000/mo | 2.5% | 1,250 | £7.50 | £9,375 | £112,500 |
| 100,000/mo | 2.5% | 2,500 | £7.50 | £18,750 | £225,000 |
| 250,000/mo | 3.0% | 7,500 | £7.50 | £56,250 | £675,000 |

Cost per letter (Claude API): ~£0.05-0.10
**Gross margin: 95%+**

---

# PART 2: SECONDARY REVENUE STREAMS

## A. Subscription Model

| Plan | Price | Includes | Target |
|------|-------|---------|--------|
| **Pay As You Go** | £5.99-29.99/letter | Single appeal | Most users |
| **Driver Shield Monthly** | £3.99/mo | 1 appeal/month + deadline alerts + legal updates | Frequent parkers (city drivers) |
| **Driver Shield Annual** | £29.99/yr | 2 appeals/year + all above + priority support | Urban commuters |
| **Fleet Plan** | £9.99/mo per 10 vehicles | Bulk appeals + dashboard + analytics | Small businesses, delivery drivers |

### Subscription Revenue Estimate

| Subscribers | ARPU | Monthly Revenue |
|------------|------|----------------|
| 500 | £4.99 | £2,495 |
| 2,000 | £4.99 | £9,980 |
| 5,000 | £4.99 | £24,950 |

---

## B. Affiliate Revenue

### Insurance Affiliates

| Partner | Commission | Cookie | Fit |
|---------|-----------|--------|-----|
| GoCompare (car insurance) | £5-15/quote | 30 days | HIGH: "While you're here, compare car insurance" |
| Confused.com | £5-15/quote | 30 days | HIGH: same angle |
| CompareTheMarket | £5-15/quote | 30 days | HIGH: same angle |
| Aviva/Direct Line | £10-30/sale | varies | MEDIUM: direct insurer |

**Rationale:** Every person checking a parking fine is a car owner/driver. Car insurance comparison is a natural contextual fit.

### Dashcam Affiliates

| Partner | Commission | Fit |
|---------|-----------|-----|
| Amazon Associates (dashcams) | 4.5% (~£3-8/sale) | HIGH: "Protect yourself with evidence" |
| Nextbase (direct) | Contact for terms | HIGH: UK market leader |
| Halfords | Contact for terms | MEDIUM |

**Rationale:** Dashcam footage is evidence for appeals. Natural upsell: "A dashcam could have proven your case."

### Legal Services

| Partner | Commission | Fit |
|---------|-----------|-----|
| LegalShield/similar | £10-30/signup | MEDIUM: ongoing legal protection |
| Motoring solicitors | Referral fee | HIGH: for court cases |
| RAC/AA membership | £5-15/signup | HIGH: breakdown + legal cover |

### Motor Services

| Partner | Commission | Fit |
|---------|-----------|-----|
| BookMyGarage (MOT/service) | CPA varies | MEDIUM: "While you're here" |
| National Parking (pre-book parking) | CPA varies | HIGH: "Avoid fines, pre-book parking" |
| JustPark / ParkBee | CPA varies | HIGH: "Never get a fine again" |
| RingGo / PayByPhone | CPA varies | MEDIUM: parking apps |

### Affiliate Revenue Estimate

| Traffic | Click Rate | Conversion | Avg Commission | Monthly |
|---------|-----------|-----------|----------------|---------|
| 50,000/mo | 5% | 3% | £8 | £600 |
| 100,000/mo | 5% | 3% | £8 | £1,200 |
| 250,000/mo | 5% | 3% | £8 | £3,000 |

---

## C. Display Advertising

| Network | Requirements | Est. RPM (automotive) |
|---------|-------------|----------------------|
| Google AdSense | None | £3-8 |
| Mediavine | 50K sessions/mo | £15-25 |
| AdThrive/Raptive | 100K pageviews/mo | £20-35 |

### Ad Revenue Estimate

| Traffic | Network | RPM | Monthly |
|---------|---------|-----|---------|
| 50,000/mo | AdSense | £5 | £250 |
| 100,000/mo | Mediavine | £20 | £2,000 |
| 250,000/mo | Raptive | £25 | £6,250 |

---

## D. Data & API

| Product | Price | Target |
|---------|-------|--------|
| Appeal success rate data (by council/operator) | £500-2,000/report | Journalists, researchers |
| API access for solicitors | £49-199/mo | Law firms |
| White-label appeal tool | £500-2,000/mo | Legal tech companies |
| Council benchmarking reports | £1,000-5,000 | Councils, parking companies |

Longer-term opportunity once data accumulates.

---

# PART 3: TOTAL REVENUE PROJECTIONS

## Year 1 (Building Traffic: 10-50K/mo)

| Stream | Monthly | Annual |
|--------|---------|--------|
| Appeal letters | £1,875-4,688 | £22,500-56,250 |
| Subscriptions | £500-2,000 | £6,000-24,000 |
| Affiliates | £200-600 | £2,400-7,200 |
| Display ads | £100-250 | £1,200-3,000 |
| **Total** | **£2,675-7,538** | **£32,100-90,450** |

## Year 2 (Growing: 50-150K/mo)

| Stream | Monthly | Annual |
|--------|---------|--------|
| Appeal letters | £9,375-18,750 | £112,500-225,000 |
| Subscriptions | £5,000-15,000 | £60,000-180,000 |
| Affiliates | £1,200-3,000 | £14,400-36,000 |
| Display ads | £2,000-5,000 | £24,000-60,000 |
| API/data | £500-2,000 | £6,000-24,000 |
| **Total** | **£18,075-43,750** | **£216,900-525,000** |

## Year 3 (Scale: 150-500K/mo)

| Stream | Monthly | Annual |
|--------|---------|--------|
| Appeal letters | £18,750-56,250 | £225,000-675,000 |
| Subscriptions | £15,000-50,000 | £180,000-600,000 |
| Affiliates | £3,000-10,000 | £36,000-120,000 |
| Display ads | £5,000-15,000 | £60,000-180,000 |
| API/data/white-label | £5,000-15,000 | £60,000-180,000 |
| **Total** | **£46,750-146,250** | **£561,000-1,755,000** |

---

# PART 4: COST STRUCTURE

| Cost | Monthly | Notes |
|------|---------|-------|
| Claude API (letter generation) | £5-50 | ~£0.05-0.10 per letter |
| Vercel hosting | £0-20 | Free tier sufficient initially |
| Domain (finecheck.co.uk + .com) | ~£2 | Annual cost ~£25 |
| Stripe fees (2.9% + 20p) | 3-4% of revenue | Per transaction |
| Supabase | £0-25 | Free tier then Pro |
| Resend (emails) | £0-20 | Free tier then paid |
| **Total fixed costs** | **~£30-150/mo** | |
| **Gross margin** | **90-95%** | |

---

# PART 5: KEY METRICS TO TRACK

| Metric | Month 3 Target | Month 12 Target |
|--------|----------------|-----------------|
| Monthly visitors | 5,000 | 50,000 |
| Free assessments completed | 2,000 | 20,000 |
| Paid letters generated | 50 | 1,250 |
| Conversion rate (visit to paid) | 1% | 2.5% |
| Average order value | £6.99 | £7.99 |
| Monthly revenue | £350 | £9,375 |
| Subscribers | 0 | 500 |
| Appeal success rate (tracked) | Track from day 1 | 50%+ |
| Trustpilot score | 4.5+ | 4.5+ |
| Organic search traffic % | 60% | 80% |

---

# PART 6: LAUNCH SEQUENCE

## Week 1-2: MVP
1. Buy finecheck.co.uk + finecheck.com on Cloudflare
2. Next.js + Tailwind + Supabase + Stripe setup
3. Build core flow: enter fine type (council/private) > enter details > free assessment > paid letter
4. Claude API integration for letter generation
5. 5-10 SEO content pages (appeal guides per operator)

## Week 3-4: Content & SEO
6. Build programmatic pages: /appeals/[operator-name] for top 20 operators
7. Build /parking-rules/[council-name] for major councils
8. Blog content: "How to appeal a ParkingEye fine", "Can you ignore a private parking fine in 2026?"
9. Google Search Console + Analytics setup
10. Submit sitemap

## Month 2: Growth
11. Add photo upload flow (ticket + signage + location)
12. Add deadline tracker with email reminders
13. Add subscription plans
14. Affiliate link integration
15. Trustpilot profile setup

## Month 3-6: Scale
16. Court defence pack
17. Fleet plan for businesses
18. Operator-specific AI training from tribunal decisions
19. Success rate tracking and publishing
20. Apply for display ad network
