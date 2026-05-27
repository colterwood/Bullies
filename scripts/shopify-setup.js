/**
 * Blocky & Co. — Shopify Store Setup Script
 *
 * This script defines all the data needed to set up the store via the
 * Shopify Admin API / MCP tools. Run via the MCP agent or Shopify CLI.
 *
 * Order of operations:
 * 1. Create collections
 * 2. Create products (with variants, descriptions, and collection assignment)
 * 3. Configure navigation menus
 * 4. Create pages (About, Bully Resources, Contact)
 * 5. Set up discount codes
 */

const STORE_CONFIG = {
  name: "Blocky & Co.",
  tagline: "Built for blocky heads. Made for big hearts.",
  currency: "USD",
  email: "hello@blockyandco.com",
};

// ─── COLLECTIONS ──────────────────────────────────────────────────────────────

const COLLECTIONS = [
  {
    title: "All Products",
    handle: "all",
    description: "Everything we make for bully breeds.",
    sortOrder: "BEST_SELLING",
    isSmartCollection: false,
  },
  {
    title: "Bully Essentials",
    handle: "bully-essentials",
    description: "The five things every bully owner eventually buys. Curated for blocky breeds.",
    sortOrder: "BEST_SELLING",
    isSmartCollection: false,
  },
  {
    title: "Walking & Training",
    handle: "walking-training",
    description: "Gear for the pulls, the lunges, and the dramatic sits-down-mid-walk.",
    sortOrder: "BEST_SELLING",
    isSmartCollection: false,
  },
  {
    title: "Toys & Enrichment",
    handle: "toys-enrichment",
    description: "Built to survive contact with the most enthusiastic chewers on the planet.",
    sortOrder: "BEST_SELLING",
    isSmartCollection: false,
  },
  {
    title: "Comfort & Cooling",
    handle: "comfort-cooling",
    description: "Because brachycephalic breeds and summer heat don't mix.",
    sortOrder: "BEST_SELLING",
    isSmartCollection: false,
  },
  {
    title: "Grooming",
    handle: "grooming",
    description: "Short coats, surprisingly infinite shedding. We got you.",
    sortOrder: "BEST_SELLING",
    isSmartCollection: false,
  },
  {
    title: "Style & Accessories",
    handle: "style-accessories",
    description: "Because your dog is basically an influencer at this point.",
    sortOrder: "BEST_SELLING",
    isSmartCollection: false,
  },
];

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    title: "Blockhead No-Pull Harness",
    handle: "blockhead-no-pull-harness",
    productType: "Harness",
    vendor: "Blocky & Co.",
    tags: ["harness", "no-pull", "training", "walking", "bully-essential"],
    status: "ACTIVE",
    collections: ["bully-essentials", "walking-training"],
    options: ["Size", "Color"],
    variants: [
      { size: "S", color: "Black", price: "34.99", compareAtPrice: "49.99", sku: "BNH-S-BLK" },
      { size: "M", color: "Black", price: "34.99", compareAtPrice: "49.99", sku: "BNH-M-BLK" },
      { size: "L", color: "Black", price: "34.99", compareAtPrice: "49.99", sku: "BNH-L-BLK" },
      { size: "XL", color: "Black", price: "34.99", compareAtPrice: "49.99", sku: "BNH-XL-BLK" },
      { size: "S", color: "Olive", price: "34.99", compareAtPrice: "49.99", sku: "BNH-S-OLV" },
      { size: "M", color: "Olive", price: "34.99", compareAtPrice: "49.99", sku: "BNH-M-OLV" },
      { size: "L", color: "Olive", price: "34.99", compareAtPrice: "49.99", sku: "BNH-L-OLV" },
      { size: "XL", color: "Olive", price: "34.99", compareAtPrice: "49.99", sku: "BNH-XL-OLV" },
    ],
    descriptionHtml: `
<h2>Finally. A harness built for the strongest dog in the room.</h2>
<p>Bull breeds don't pull because they're bad — they pull because they're excited about <em>everything</em>. This front-clip harness redirects that energy so walks become something you both actually enjoy.</p>
<h3>Built for blocky bodies:</h3>
<ul>
  <li><strong>Front-clip chest ring</strong> — stops pulling without choking</li>
  <li><strong>Wide padded chest strap</strong> — designed for deep bully chests</li>
  <li><strong>Reflective stitching</strong> — visible on evening walks</li>
  <li><strong>4 adjustment points</strong> — fits the barrel-chested bully build</li>
  <li><strong>Breathable mesh lining</strong> — helps brachycephalic breeds stay cool</li>
  <li><strong>2 leash attachment points</strong> — front for training, back for casual walks</li>
</ul>
<h3>Size Guide</h3>
<ul>
  <li><strong>S</strong>: Chest 16–20" | Neck 12–16" | Up to 25 lbs</li>
  <li><strong>M</strong>: Chest 20–26" | Neck 15–19" | 25–55 lbs</li>
  <li><strong>L</strong>: Chest 24–30" | Neck 18–23" | 55–80 lbs</li>
  <li><strong>XL</strong>: Chest 28–36" | Neck 22–28" | 80–110+ lbs</li>
</ul>
<p><em>Most American Pit Bull Terriers and American Bulldogs wear L. Most English Bulldogs wear M–L. Most Frenchies wear S–M.</em></p>
<p>🐾 <strong>Bully Tip:</strong> Start all walks with the front clip. Once your dog has a solid loose-leash skill, you can switch to the back for more freedom.</p>
    `.trim(),
  },
  {
    title: "Beast Chewer Indestructible Rubber Toy",
    handle: "beast-chewer-indestructible-toy",
    productType: "Toy",
    vendor: "Blocky & Co.",
    tags: ["toy", "chew", "indestructible", "aggressive-chewer", "bully-essential"],
    status: "ACTIVE",
    collections: ["bully-essentials", "toys-enrichment"],
    options: ["Size"],
    variants: [
      { size: "M", price: "19.99", compareAtPrice: "29.99", sku: "BCT-M" },
      { size: "L", price: "19.99", compareAtPrice: "29.99", sku: "BCT-L" },
    ],
    descriptionHtml: `
<h2>The toy that actually lasts. (We know. Shocking.)</h2>
<p>If your bully has a toy graveyard in the corner of your living room, you know the pain. The Beast Chewer ends that.</p>
<h3>Built to survive your bully:</h3>
<ul>
  <li><strong>Ultra-dense natural rubber</strong> — rated for aggressive chewers</li>
  <li><strong>Beef-infused scent</strong> — keeps them engaged for hours</li>
  <li><strong>Hollow center</strong> — stuff with peanut butter for extra enrichment</li>
  <li><strong>Non-toxic, BPA-free</strong> — totally safe even in beast mode</li>
  <li><strong>Top-rack dishwasher safe</strong> — easy to clean</li>
</ul>
<h3>Pro tip:</h3>
<p>Stuff the hollow center with xylitol-free peanut butter and freeze overnight. A frozen stuffed Beast Chewer = 30+ minutes of quiet bliss.</p>
<h3>Size Guide</h3>
<ul>
  <li><strong>M</strong> — for dogs under 50 lbs (Frenchies, Staffies, smaller Pitties)</li>
  <li><strong>L</strong> — for dogs 50 lbs+ (American Bulldogs, larger Pitties, Bullmastiffs)</li>
</ul>
    `.trim(),
  },
  {
    title: "Chill Pad Pressure-Activated Cooling Mat",
    handle: "chill-pad-cooling-mat",
    productType: "Cooling Mat",
    vendor: "Blocky & Co.",
    tags: ["cooling", "summer", "brachycephalic", "comfort", "bully-essential"],
    status: "ACTIVE",
    collections: ["bully-essentials", "comfort-cooling"],
    options: ["Size"],
    variants: [
      { size: "M (24\"×20\")", price: "29.99", compareAtPrice: "44.99", sku: "CPM-M" },
      { size: "L (32\"×24\")", price: "34.99", compareAtPrice: "49.99", sku: "CPM-L" },
      { size: "XL (40\"×28\")", price: "39.99", compareAtPrice: "54.99", sku: "CPM-XL" },
    ],
    descriptionHtml: `
<h2>Because blocky-headed dogs and summer are a complicated relationship.</h2>
<p>Brachycephalic breeds (flat-faced dogs) overheat faster than other dogs. The Chill Pad activates with pressure — no water, no freezer, no electricity. Your dog lies down. It gets cold. Done.</p>
<h3>Why bully owners love it:</h3>
<ul>
  <li><strong>Pressure-activated gel</strong> — no water, no freezer, no electricity needed</li>
  <li><strong>Self-recharging</strong> — ready again 15–20 minutes after use</li>
  <li><strong>Foldable and portable</strong> — perfect for crates, cars, travel</li>
  <li><strong>Non-toxic gel</strong> — safe even if they chew an edge</li>
  <li><strong>Wipe-clean cover</strong> — easy maintenance</li>
  <li><strong>Stays cool up to 3 hours per session</strong></li>
</ul>
<h3>Especially important for:</h3>
<p>English Bulldogs • French Bulldogs • American Bulldogs • Any flat-faced bully in summer</p>
<h3>Size Guide</h3>
<ul>
  <li><strong>M (24"×20")</strong> — Frenchies, English Bulldogs, smaller Staffies</li>
  <li><strong>L (32"×24")</strong> — American Pit Bull Terriers, most Staffies</li>
  <li><strong>XL (40"×28")</strong> — American Bulldogs, Bullmastiffs, the big boys</li>
</ul>
    `.trim(),
  },
  {
    title: "Shedmaster Deshedding Grooming Glove",
    handle: "shedmaster-grooming-glove",
    productType: "Grooming",
    vendor: "Blocky & Co.",
    tags: ["grooming", "shedding", "brushing", "coat", "bully-essential"],
    status: "ACTIVE",
    collections: ["bully-essentials", "grooming"],
    options: ["Title"],
    variants: [
      { title: "One Size Fits Most", price: "16.99", compareAtPrice: "24.99", sku: "SDG-OSM" },
    ],
    descriptionHtml: `
<h2>The grooming session your bully will actually beg for.</h2>
<p>Bull breeds have short coats that produce infinite loose hair. Regular brushes skip over it. The Shedmaster works with short fur, captures hair on rubber tips, and feels like a full-body massage — which means your dog will actually sit still.</p>
<h3>Why it works for bull breed coats:</h3>
<ul>
  <li><strong>255 rubber tips</strong> — designed specifically for short, dense coats</li>
  <li><strong>Works both directions</strong> — with or against the grain</li>
  <li><strong>Doubles as a massage</strong> — increases circulation, dogs love it</li>
  <li><strong>Hair peels right off the glove</strong> — oddly satisfying</li>
  <li><strong>Adjustable velcro wrist</strong> — fits most hand sizes</li>
  <li><strong>Works wet or dry</strong> — use as a shampoo applicator in the bath too</li>
</ul>
<p>🐾 <strong>Bully Tip:</strong> Use the fingertips to gently clean between skin folds during your grooming session. Keeps wrinkles clean and infection-free.</p>
    `.trim(),
  },
  {
    title: "Blocky & Co. Signature Bandana",
    handle: "blocky-co-signature-bandana",
    productType: "Accessory",
    vendor: "Blocky & Co.",
    tags: ["bandana", "accessory", "branded", "style", "gift", "bully-style"],
    status: "ACTIVE",
    collections: ["bully-essentials", "style-accessories"],
    options: ["Size", "Color"],
    variants: [
      { size: "S/M", color: "Classic Black", price: "14.99", compareAtPrice: "19.99", sku: "BDB-SM-BLK" },
      { size: "L/XL", color: "Classic Black", price: "14.99", compareAtPrice: "19.99", sku: "BDB-LXL-BLK" },
      { size: "S/M", color: "Desert Sand", price: "14.99", compareAtPrice: "19.99", sku: "BDB-SM-SND" },
      { size: "L/XL", color: "Desert Sand", price: "14.99", compareAtPrice: "19.99", sku: "BDB-LXL-SND" },
    ],
    descriptionHtml: `
<h2>Because your blocky deserves to look the part.</h2>
<p>The official Blocky & Co. signature bandana. Soft, adjustable, snap-close — made for bully necks that are roughly the size of a small tree trunk. Your dog will wear this with the energy of someone who absolutely knows they look good.</p>
<h3>Details:</h3>
<ul>
  <li><strong>100% cotton</strong> — soft and breathable</li>
  <li><strong>Snap-close closure</strong> — no tying, no choking risk</li>
  <li><strong>Blocky & Co. logo</strong> — represent the community</li>
  <li><strong>Machine washable</strong> — because muddy dogs happen</li>
  <li><strong>Adjustable fit</strong> — designed for thick bully necks</li>
</ul>
<h3>Size Guide</h3>
<ul>
  <li><strong>S/M</strong> — neck 10–16" (Frenchies, English Bulldogs)</li>
  <li><strong>L/XL</strong> — neck 15–24" (American Pit Bulls, American Bulldogs)</li>
</ul>
<p>📸 <strong>Tag us @blockyandco</strong> when your pup is rocking their bandana. Best photos get featured on our page.</p>
    `.trim(),
  },
];

// ─── PAGES ────────────────────────────────────────────────────────────────────

const PAGES = [
  {
    title: "About Blocky & Co.",
    handle: "about",
    bodyHtml: `
<h1>We're bully people. This store was made by us, for us.</h1>
<p>Blocky & Co. was born out of frustration. Not with our dogs — never with our dogs — but with every generic pet store that clearly had no idea what bully breeds actually need.</p>
<p>The harnesses that didn't fit their chest. The "indestructible" toys that lasted 40 minutes. The cooling products that required constant maintenance in the middle of a Texas July when your English Bulldog is dramatically dying on the kitchen floor.</p>
<p>We decided to do it properly. Every product we carry was chosen because it works for <em>these specific dogs</em>: the pullers, the chewers, the overheaters, the velcro dogs who follow you to the bathroom and stare into your soul.</p>
<h2>Our dogs</h2>
<p>The founder of Blocky & Co. has a [breed] named [name]. This store started because of them, and every product decision gets run past the very demanding standards of their couch-stealing, sock-hoarding, world's-biggest-baby energy.</p>
<h2>Our values</h2>
<ul>
  <li>We only sell things we'd actually use on our own dogs</li>
  <li>We believe in the breed — unconditionally</li>
  <li>We don't do the aggressive dog stereotype. Our dogs are lovers.</li>
  <li>We're building a community, not just a store</li>
</ul>
<p>Have a question, a product suggestion, or just want to show us a photo of your dog? Email us at hello@blockyandco.com — we read everything.</p>
    `.trim(),
  },
  {
    title: "Bully Owner Resources",
    handle: "bully-resources",
    bodyHtml: `
<h1>Resources for Bull Breed Owners</h1>
<p>We're building this section out with real, useful content for bully people. Check back often.</p>
<h2>Heat Safety for Brachycephalic Breeds</h2>
<p>Dogs with flat faces (English Bulldogs, French Bulldogs, and many Pit Bull types) cannot pant as effectively as long-muzzled dogs. This means they overheat faster and can reach dangerous temperatures more quickly.</p>
<p><strong>Warning signs of overheating:</strong></p>
<ul>
  <li>Excessive, rapid panting</li>
  <li>Drooling more than usual</li>
  <li>Bright red or pale gums</li>
  <li>Stumbling or loss of coordination</li>
  <li>Vomiting or diarrhea</li>
</ul>
<p><strong>If you suspect heatstroke:</strong> Move to a cool area immediately, apply cool (not cold) water, and get to a vet.</p>
<h2>Harness vs. Collar: What's Better for Bully Breeds?</h2>
<p>For bull breeds, harnesses are almost always the better choice:</p>
<ul>
  <li>No pressure on the trachea or spine</li>
  <li>Better control for strong pullers</li>
  <li>Front-clip harnesses discourage pulling naturally</li>
  <li>Safer for brachycephalic breeds who already have breathing challenges</li>
</ul>
<h2>Recommended Organizations</h2>
<ul>
  <li><a href="https://www.badrap.org" target="_blank">BAD RAP</a> — Bull breed advocacy and education</li>
  <li><a href="https://www.pitbulladvocates.org" target="_blank">Pit Bull Advocates of America</a></li>
  <li>Your local bully breed rescue — support them if you can</li>
</ul>
    `.trim(),
  },
];

// ─── DISCOUNT CODES ───────────────────────────────────────────────────────────

const DISCOUNT_CODES = [
  {
    title: "WELCOME10",
    code: "WELCOME10",
    type: "percentage",
    value: 10,
    usageLimit: null, // unlimited
    oncePerCustomer: true,
    appliesTo: "all",
    startsAt: new Date().toISOString(),
  },
  {
    title: "CART15",
    code: "CART15",
    type: "percentage",
    value: 15,
    usageLimit: null,
    oncePerCustomer: true,
    appliesTo: "all",
    startsAt: new Date().toISOString(),
  },
];

// ─── NAVIGATION MENUS ─────────────────────────────────────────────────────────

const NAVIGATION = {
  main_menu: {
    title: "Main Menu",
    items: [
      { title: "Shop All", url: "/collections/all" },
      {
        title: "Collections",
        url: "#",
        children: [
          { title: "Bully Essentials", url: "/collections/bully-essentials" },
          { title: "Walking & Training", url: "/collections/walking-training" },
          { title: "Toys & Enrichment", url: "/collections/toys-enrichment" },
          { title: "Comfort & Cooling", url: "/collections/comfort-cooling" },
          { title: "Grooming", url: "/collections/grooming" },
          { title: "Style & Accessories", url: "/collections/style-accessories" },
        ],
      },
      { title: "About", url: "/pages/about" },
      { title: "Bully Resources", url: "/pages/bully-resources" },
    ],
  },
  footer_menu: {
    title: "Footer Menu",
    items: [
      { title: "Shop All", url: "/collections/all" },
      { title: "About Us", url: "/pages/about" },
      { title: "Bully Resources", url: "/pages/bully-resources" },
      { title: "Shipping & Returns", url: "/policies/shipping-policy" },
      { title: "Privacy Policy", url: "/policies/privacy-policy" },
      { title: "Terms of Service", url: "/policies/terms-of-service" },
      { title: "Contact", url: "/pages/contact" },
    ],
  },
};

module.exports = { STORE_CONFIG, COLLECTIONS, PRODUCTS, PAGES, DISCOUNT_CODES, NAVIGATION };
