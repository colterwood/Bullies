# Blocky & Co. — Launch Checklist

## Phase 1: Shopify Store Foundation (Day 1)

### Store Settings
- [ ] Store name: **Blocky & Co.**
- [ ] Store email: hello@blockyandco.com
- [ ] Timezone: Set to your local timezone
- [ ] Currency: USD
- [ ] Unit system: Imperial (lbs, inches)
- [ ] Weight unit: Pounds

### Theme Setup
- [ ] Install **Dawn theme** (free, from Shopify Theme Store)
- [ ] Apply color settings from `theme/theme-settings.json`
- [ ] Upload brand logo (text-based: "Blocky & Co." in Playfair Display)
- [ ] Set favicon (small paw/blocky head icon)
- [ ] Enable announcement bar: "Free shipping on orders over $50 🐾 | 30-day returns"
- [ ] Configure homepage sections per `theme/homepage-copy.md`

### Policies
- [ ] Shipping Policy: 7–14 business days (US), free over $50
- [ ] Return Policy: 30-day returns, buyer pays return shipping
- [ ] Privacy Policy: Generate in Shopify Admin (Settings > Policies)
- [ ] Terms of Service: Generate in Shopify Admin (Settings > Policies)

---

## Phase 2: Products & Collections (Day 1-2)

### Collections (create in this order)
- [ ] Bully Essentials
- [ ] Walking & Training
- [ ] Toys & Enrichment
- [ ] Comfort & Cooling
- [ ] Grooming
- [ ] Style & Accessories

### Products (use data from `scripts/shopify-setup.js`)
- [ ] Blockhead No-Pull Harness — 8 variants (4 sizes × 2 colors)
- [ ] Beast Chewer Indestructible Toy — 2 variants (M, L)
- [ ] Chill Pad Cooling Mat — 3 variants (M, L, XL)
- [ ] Shedmaster Grooming Glove — 1 variant (one size)
- [ ] Blocky & Co. Signature Bandana — 4 variants (2 sizes × 2 colors)

### For each product:
- [ ] Description HTML from product catalog
- [ ] Compare-at price set (shows "sale" badge)
- [ ] Tags applied
- [ ] Product type set
- [ ] Added to correct collections
- [ ] Images sourced from supplier listings

### Pages
- [ ] About Blocky & Co. (`/pages/about`)
- [ ] Bully Owner Resources (`/pages/bully-resources`)
- [ ] Contact page (enable via theme settings)

---

## Phase 3: Supplier Integration (Day 2-3)

### DSers (AliExpress dropshipping — free)
- [ ] Install DSers from Shopify App Store
- [ ] Connect AliExpress account
- [ ] Search for each product using supplier search terms from catalog
- [ ] Select top-rated supplier with 4.5+ stars and 100+ orders
- [ ] Map product variants to DSers SKUs
- [ ] Enable auto-order: DSers Settings > Automation > Auto-place orders
- [ ] Test order flow with a $0.01 test (or order one item for yourself)

### Zendrop (US suppliers — faster shipping)
- [ ] Install Zendrop from Shopify App Store
- [ ] Sign up for free account
- [ ] Import equivalent products for harness, cooling mat, chew toy
- [ ] Compare pricing — use Zendrop when price difference < $3 (faster shipping)

### Printify (branded bandana)
- [ ] Install Printify from Shopify App Store
- [ ] Create account
- [ ] Upload Blocky & Co. logo
- [ ] Design bandana product (front print, logo placement)
- [ ] Connect to the Blocky Bandana Shopify product
- [ ] Order a sample ($15–20) to verify quality before selling

---

## Phase 4: Email Marketing (Day 2-3)

### Klaviyo Setup
- [ ] Install Klaviyo from Shopify App Store
- [ ] Create free account at klaviyo.com
- [ ] Connect to Shopify store (OAuth integration)
- [ ] Create "Blocky Family" list
- [ ] Import welcome series emails from `email/klaviyo-flows.md`
- [ ] Create exit-intent popup form (10% off, WELCOME10 code)
- [ ] Create timed popup for mobile (8-second trigger)
- [ ] Add footer signup bar to theme

### Test Email Flows
- [ ] Subscribe with a test email — confirm welcome email arrives
- [ ] Check WELCOME10 code works
- [ ] Set up abandoned cart flow (Email 1: 1hr, Email 2: 24hr)
- [ ] Set up post-purchase review request (Day 14)

---

## Phase 5: Discount Codes
- [ ] WELCOME10 — 10% off, once per customer (for email signup)
- [ ] CART15 — 15% off, once per customer (for abandoned cart)
- [ ] LAUNCH20 — 20% off, limited quantity 50 (for launch promotion)

---

## Phase 6: Navigation & SEO (Day 3)

### Navigation
- [ ] Update main menu per navigation config in `scripts/shopify-setup.js`
- [ ] Update footer menu with all policy links
- [ ] Add social media links: @blockyandco (IG, TikTok, FB)

### Basic SEO
- [ ] Homepage meta title: "Blocky & Co. | Dog Gear for Bull Breed Owners"
- [ ] Homepage meta description: "Quality harnesses, toys, cooling gear, and accessories made for bull breeds. Built by bully owners, for bully owners. Free shipping over $50."
- [ ] Each product has a unique meta description (pull first paragraph of description)
- [ ] All product images have descriptive alt text

---

## Phase 7: Social Media Setup (Day 3-4)

### Account Creation
- [ ] Instagram: @blockyandco (business account)
- [ ] TikTok: @blockyandco (business account)
- [ ] Facebook Page: Blocky & Co.

### Profile Setup (each platform)
- [ ] Profile photo: Blocky & Co. logo
- [ ] Bio: "Quality gear for bull breed dogs 🐾 | Built by bully people | Shop 👇"
- [ ] Link in bio: blockyandco.com (or Linktree if using multiple links)
- [ ] Pinned post: Brand introduction or first product hero

### First Content
- [ ] Post 1: Brand introduction ("We're new here. Here's why we made this store.")
- [ ] Post 2: Hero product shot (Blockhead Harness or Chill Pad)
- [ ] Use templates from `marketing/social-media-templates.md`

---

## Phase 8: Pre-Launch Testing (Day 4)

### Checkout Flow
- [ ] Complete a test order (use Shopify's Bogus Gateway)
- [ ] Apply WELCOME10 discount code — verify it works
- [ ] Check that order confirmation email sends
- [ ] Verify DSers/Zendrop receives the test order

### Mobile Testing
- [ ] View homepage on iPhone (Safari)
- [ ] View a product page on Android (Chrome)
- [ ] Test checkout on mobile — confirm it works end-to-end
- [ ] Check email popup on mobile

### Speed Check
- [ ] Run Google PageSpeed Insights on homepage
- [ ] Target: 80+ mobile score with Dawn theme (should be easy)

---

## Phase 9: Launch!

### Remove Password
- [ ] Go to Shopify Admin > Online Store > Preferences
- [ ] Disable password page

### Announce
- [ ] Post launch announcement on Instagram and TikTok
- [ ] Send launch email to any existing contacts
- [ ] Share in relevant Facebook groups (bully breed groups, pit bull owners, etc.)

### First Ad (Day 1 post-launch)
- [ ] Facebook/Instagram ad targeting:
  - Age: 22–45
  - Interests: Pit Bull, English Bulldog, French Bulldog, American Bulldog, Staffordshire Bull Terrier, dog training, dog toys
  - Start budget: $10/day
  - Creative: Short video of dog with product (use Beast Chewer or Chill Pad — high visual impact)
  - Objective: Traffic (first week), then conversion

---

## Ongoing (Weekly)

- [ ] 3 social posts per week (use templates)
- [ ] Reply to all comments and DMs
- [ ] Add 1–3 real customer reviews (screenshot and repost)
- [ ] Check DSers for any failed or delayed orders
- [ ] Review Klaviyo open rates and click rates weekly
- [ ] A/B test one thing per week (headline, image, price)
