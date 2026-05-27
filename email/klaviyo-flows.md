# Blocky & Co. — Klaviyo Email Strategy

## Setup Instructions

### Step 1: Install Klaviyo
1. Go to Shopify App Store
2. Search "Klaviyo: Email Marketing & SMS"
3. Install — free up to 250 contacts and 500 emails/month
4. Connect to your Shopify store (Klaviyo walks you through OAuth)

### Step 2: Create the Blocky & Co. List
- List name: "Blocky Family"
- Default opt-in: Double opt-in OFF for faster list building initially

### Step 3: Configure Signup Forms
See "Email Signup Form" section below.

---

## Email Flows to Set Up

### Flow 1: Welcome Series (PRIORITY — set up at launch)

**Trigger**: Someone subscribes via popup or checkout

#### Email 1 — Sent immediately
**Subject**: You're in the pack now 🐾 (here's your 10% off)
**Preview**: Your discount code is inside.

```
Hi [first_name | default: "Bully Owner"],

Welcome to Blocky & Co.

Here's your 10% discount code:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       WELCOME10
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use it on your first order. No minimums, no games.

We built Blocky & Co. because bully owners deserve a store that
actually gets their dogs — the strength, the stubbornness, the
shedding, and the absolute certainty that they're a lap dog
despite weighing 70 lbs.

Every product we carry was chosen for these specific dogs.
Come see what we mean.

[Shop Now → blockyandco.com]

— The Blocky & Co. Team
(also known as: fellow bully people who love their dogs too much)

P.S. Hit reply and tell us your dog's name. We genuinely love hearing it.
```

#### Email 2 — Sent Day 3 (if no purchase)
**Subject**: Quick question about your bully...
**Preview**: What's their biggest struggle?

```
Hey [first_name | default: "there"],

No sales pitch today — just a question.

What's your dog's biggest thing?

→ The leash pulling situation
→ Destroying every toy within hours
→ Overheating in summer
→ The shedding situation (it's always the shedding)
→ All of the above (relatable)

We ask because everything we sell is built around those exact
problems. If you tell me what yours is, I can point you to
the right thing.

Just hit reply. I actually read these.

[Or browse the whole shop → blockyandco.com/collections/all]

— [Your name], Blocky & Co.
```

#### Email 3 — Sent Day 7 (if no purchase)
**Subject**: The 5 things every bully owner eventually buys
**Preview**: Save yourself some trial and error.

```
[first_name | default: "Hey"],

I've talked to a lot of bully owners. There's a pattern.

Everyone ends up buying the same things eventually — usually
after destroying their wallet on stuff that doesn't work first.

Here's the shortcut:

🦺 A proper harness (front-clip, built for bully chests)
→ The Blockhead Harness — $34.99

🦴 A toy that actually survives
→ The Beast Chewer — $19.99

❄️ A cooling mat (non-negotiable if you have a flat face in the family)
→ The Chill Pad — $29.99

🧤 A grooming glove that works on short coats
→ The Shedmaster Glove — $16.99

📸 Something adorable for their giant head
→ The Blocky Bandana — $14.99

All five: $116.95
Your 10% off code makes it: $105.26

Code: WELCOME10 (still valid!)

[Shop the full collection → blockyandco.com]

Made with love for the best dogs nobody gives enough credit to.

— Blocky & Co.
```

---

### Flow 2: Abandoned Cart (set up Week 2)

**Trigger**: Cart abandoned, 1+ items, email known

#### Email 1 — Sent 1 hour after abandonment
**Subject**: Your [product_name] is waiting (your dog approves)
**Preview**: Still in your cart.

```
Hey [first_name | default: "there"],

Your cart's still here.

[Dynamic cart contents with images]

Your dog would definitely want you to complete this purchase.
We're paraphrasing, but the intent is clear.

[Complete My Order →]

Questions? Reply to this email. We're real humans.

— Blocky & Co.
```

#### Email 2 — Sent 24 hours after abandonment (if no purchase)
**Subject**: Last call for your cart + a tiny nudge
**Preview**: One-time offer inside.

```
[first_name | default: "Hey"],

Your cart's still there. One-time deal to help you decide:

Use CART15 at checkout for 15% off.
Expires in 48 hours.

[Product name(s) + images]

[Claim My 15% Off →]

This code won't appear again. Your dog's counting on you.

— Blocky & Co.
```

---

### Flow 3: Post-Purchase (set up Week 2)

**Trigger**: Order placed

#### Email 1 — Sent immediately
**Subject**: Order confirmed! Your blocky's stuff is on the way.
**Preview**: Here's what happens next.

```
[first_name | default: "Hey"],

Your order is confirmed. High five. 🐾

ORDER SUMMARY:
[Dynamic order contents]

What happens next:
1. We process your order (1–2 business days)
2. Your supplier ships it out
3. You get a tracking email
4. Your dog has no idea what's coming

Estimated delivery: 7–14 business days (US)

While you wait, here's the Beast Chewer peanut butter trick:
Stuff the hollow center with xylitol-free PB and freeze overnight.
30+ minutes of quiet. You're welcome in advance.

[View Your Order →]

Questions? Reply here.

— Blocky & Co.
```

#### Email 2 — Sent Day 14 (Review Request)
**Subject**: How's [product_name] working for [dog's name]?
**Preview**: We'd love to hear.

```
[first_name | default: "Hey"],

Your order should have arrived by now — and we're hoping
your dog is already obsessed with it.

If you have 90 seconds, we'd love a review. It genuinely
helps other bully owners find us.

[Leave a Review →]

Got a photo of your dog with their new gear? Tag us
@blockyandco — we feature the best ones on our page.

Thank you for being part of the Blocky family.

— The Blocky & Co. Team
```

---

## Popup Form Settings

### Exit-Intent Popup (desktop)
**Trigger**: Mouse moves toward browser bar
**Headline**: Wait — your dog needs this.
**Body**: Get 10% off your first order when you join the Blocky family.
**Form**: Email field
**Button**: Claim My 10%
**Success message**: Done! Check your inbox for your code. 🐾

### Timed Popup (mobile)
**Trigger**: 8 seconds on site
**Headline**: Join the bully community. Get 10% off.
**Body**: Tips, new products, and a discount. No spam. Just bully stuff.
**Form**: Email field
**Button**: I'm In
**Success message**: Welcome to the pack! Code is in your inbox.

### Footer Signup Bar (always visible)
**Headline**: Get 10% off your first order
**Subline**: Join 1,000+ bully owners getting tips and deals
**Button**: Subscribe

---

## Email Design Guidelines

### Colors (match brand)
- Background: #FAF4EC (Cream Coat)
- Header bar: #1E2329 (Charcoal Block)
- CTA buttons: #C8722A (Brindle Amber)
- Body text: #1E2329
- Link text: #C8722A

### Typography
- Headlines: Playfair Display or Georgia (web-safe fallback)
- Body: Inter, Arial, sans-serif
- Font size: 16px body, 24–32px headlines

### Template Structure
1. Logo / header bar
2. Hero image (optional but recommended for product emails)
3. Headline
4. Body copy (short paragraphs, never more than 3–4 lines each)
5. CTA button (large, centered, amber)
6. Footer (unsubscribe, address, social links)

### Tone Reminders
- Write like you're texting a friend who also has a bully
- First names always (with sensible defaults)
- One clear CTA per email
- Humor is welcome; never forced
