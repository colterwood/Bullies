#!/usr/bin/env node
/**
 * Blocky & Co. — Automated Store Builder
 * Runs the full OAuth flow and builds the entire Shopify store.
 *
 * Usage: node build-store.js
 */

const http = require('http');
const https = require('https');
const { exec } = require('child_process');
const readline = require('readline');
const crypto = require('crypto');

// ─── CONFIG ───────────────────────────────────────────────────────────────────

const SHOP         = 'ecpg10-n8.myshopify.com';
const CLIENT_ID    = 'b4b5e8a72a28f4e68d4089d445b9782b';
const REDIRECT_URI = 'http://localhost:3000/callback';
const PORT         = 3000;
const API          = '2024-10';
const SCOPES       = [
  'write_products', 'read_products',
  'write_content', 'read_content',
  'write_price_rules', 'read_price_rules',
].join(',');

// ─── STORE DATA ───────────────────────────────────────────────────────────────

const COLLECTIONS = [
  {
    title: 'Bully Essentials',
    body_html: 'The five things every bully owner eventually buys. Curated for blocky breeds.',
    handle: 'bully-essentials',
    sort_order: 'best-selling',
  },
  {
    title: 'Walking & Training',
    body_html: 'Gear for the pulls, the lunges, and the dramatic sits-down-mid-walk.',
    handle: 'walking-training',
    sort_order: 'best-selling',
  },
  {
    title: 'Toys & Enrichment',
    body_html: 'Built to survive contact with the most enthusiastic chewers on the planet.',
    handle: 'toys-enrichment',
    sort_order: 'best-selling',
  },
  {
    title: 'Comfort & Cooling',
    body_html: "Because brachycephalic breeds and summer heat don't mix.",
    handle: 'comfort-cooling',
    sort_order: 'best-selling',
  },
  {
    title: 'Grooming',
    body_html: 'Short coats, surprisingly infinite shedding. We got you.',
    handle: 'grooming',
    sort_order: 'best-selling',
  },
  {
    title: 'Style & Accessories',
    body_html: 'Because your dog is basically an influencer at this point.',
    handle: 'style-accessories',
    sort_order: 'best-selling',
  },
];

const PRODUCTS = [
  {
    data: {
      title: 'Blockhead No-Pull Harness',
      body_html: `<h2>Finally. A harness built for the strongest dog in the room.</h2>
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
<p><em>Most American Pit Bull Terriers and American Bulldogs wear L. Most English Bulldogs wear M–L. Most Frenchies wear S–M.</em></p>`,
      vendor: 'Blocky & Co.',
      product_type: 'Harness',
      tags: 'harness, no-pull, training, walking, bully-essential',
      status: 'active',
      options: [{ name: 'Size' }, { name: 'Color' }],
      variants: [
        { option1: 'S',  option2: 'Black', price: '34.99', compare_at_price: '49.99', sku: 'BNH-S-BLK',  inventory_management: 'shopify', inventory_policy: 'continue' },
        { option1: 'M',  option2: 'Black', price: '34.99', compare_at_price: '49.99', sku: 'BNH-M-BLK',  inventory_management: 'shopify', inventory_policy: 'continue' },
        { option1: 'L',  option2: 'Black', price: '34.99', compare_at_price: '49.99', sku: 'BNH-L-BLK',  inventory_management: 'shopify', inventory_policy: 'continue' },
        { option1: 'XL', option2: 'Black', price: '34.99', compare_at_price: '49.99', sku: 'BNH-XL-BLK', inventory_management: 'shopify', inventory_policy: 'continue' },
        { option1: 'S',  option2: 'Olive', price: '34.99', compare_at_price: '49.99', sku: 'BNH-S-OLV',  inventory_management: 'shopify', inventory_policy: 'continue' },
        { option1: 'M',  option2: 'Olive', price: '34.99', compare_at_price: '49.99', sku: 'BNH-M-OLV',  inventory_management: 'shopify', inventory_policy: 'continue' },
        { option1: 'L',  option2: 'Olive', price: '34.99', compare_at_price: '49.99', sku: 'BNH-L-OLV',  inventory_management: 'shopify', inventory_policy: 'continue' },
        { option1: 'XL', option2: 'Olive', price: '34.99', compare_at_price: '49.99', sku: 'BNH-XL-OLV', inventory_management: 'shopify', inventory_policy: 'continue' },
      ],
    },
    collections: ['bully-essentials', 'walking-training'],
  },
  {
    data: {
      title: 'Beast Chewer Indestructible Rubber Toy',
      body_html: `<h2>The toy that actually lasts. (We know. Shocking.)</h2>
<p>If your bully has a toy graveyard in the corner of your living room, you know the pain. The Beast Chewer ends that.</p>
<h3>Built to survive your bully:</h3>
<ul>
  <li><strong>Ultra-dense natural rubber</strong> — rated for aggressive chewers</li>
  <li><strong>Beef-infused scent</strong> — keeps them engaged for hours</li>
  <li><strong>Hollow center</strong> — stuff with peanut butter for extra enrichment</li>
  <li><strong>Non-toxic, BPA-free</strong> — totally safe even in beast mode</li>
  <li><strong>Top-rack dishwasher safe</strong> — easy to clean</li>
</ul>
<h3>The frozen peanut butter trick</h3>
<p>Stuff the hollow center with xylitol-free peanut butter and freeze overnight. 30+ minutes of quiet bliss. You're welcome.</p>
<h3>Size Guide</h3>
<ul>
  <li><strong>M</strong> — for dogs under 50 lbs (Frenchies, Staffies, smaller Pitties)</li>
  <li><strong>L</strong> — for dogs 50 lbs+ (American Bulldogs, larger Pitties, Bullmastiffs)</li>
</ul>`,
      vendor: 'Blocky & Co.',
      product_type: 'Toy',
      tags: 'toy, chew, indestructible, aggressive-chewer, bully-essential',
      status: 'active',
      options: [{ name: 'Size' }],
      variants: [
        { option1: 'M', price: '19.99', compare_at_price: '29.99', sku: 'BCT-M', inventory_management: 'shopify', inventory_policy: 'continue' },
        { option1: 'L', price: '19.99', compare_at_price: '29.99', sku: 'BCT-L', inventory_management: 'shopify', inventory_policy: 'continue' },
      ],
    },
    collections: ['bully-essentials', 'toys-enrichment'],
  },
  {
    data: {
      title: 'Chill Pad Pressure-Activated Cooling Mat',
      body_html: `<h2>Because blocky-headed dogs and summer are a complicated relationship.</h2>
<p>Brachycephalic breeds overheat faster than other dogs. The Chill Pad activates with pressure — no water, no freezer, no electricity. Your dog lies down. It gets cold. Done.</p>
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
</ul>`,
      vendor: 'Blocky & Co.',
      product_type: 'Cooling Mat',
      tags: 'cooling, summer, brachycephalic, comfort, bully-essential',
      status: 'active',
      options: [{ name: 'Size' }],
      variants: [
        { option1: 'M (24"×20")', price: '29.99', compare_at_price: '44.99', sku: 'CPM-M', inventory_management: 'shopify', inventory_policy: 'continue' },
        { option1: 'L (32"×24")', price: '34.99', compare_at_price: '49.99', sku: 'CPM-L', inventory_management: 'shopify', inventory_policy: 'continue' },
        { option1: 'XL (40"×28")', price: '39.99', compare_at_price: '54.99', sku: 'CPM-XL', inventory_management: 'shopify', inventory_policy: 'continue' },
      ],
    },
    collections: ['bully-essentials', 'comfort-cooling'],
  },
  {
    data: {
      title: 'Shedmaster Deshedding Grooming Glove',
      body_html: `<h2>The grooming session your bully will actually beg for.</h2>
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
<p>🐾 <strong>Bully Tip:</strong> Use the fingertips to gently clean between skin folds during your grooming session. Keeps wrinkles clean and infection-free.</p>`,
      vendor: 'Blocky & Co.',
      product_type: 'Grooming',
      tags: 'grooming, shedding, brushing, coat, bully-essential',
      status: 'active',
      options: [{ name: 'Title' }],
      variants: [
        { option1: 'One Size Fits Most', price: '16.99', compare_at_price: '24.99', sku: 'SDG-OSM', inventory_management: 'shopify', inventory_policy: 'continue' },
      ],
    },
    collections: ['bully-essentials', 'grooming'],
  },
  {
    data: {
      title: 'Blocky & Co. Signature Bandana',
      body_html: `<h2>Because your blocky deserves to look the part.</h2>
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
<p>📸 <strong>Tag us @blockyandco</strong> when your pup is rocking their bandana. Best photos get featured on our page.</p>`,
      vendor: 'Blocky & Co.',
      product_type: 'Accessory',
      tags: 'bandana, accessory, branded, style, gift, bully-style',
      status: 'active',
      options: [{ name: 'Size' }, { name: 'Color' }],
      variants: [
        { option1: 'S/M',  option2: 'Classic Black', price: '14.99', compare_at_price: '19.99', sku: 'BDB-SM-BLK',  inventory_management: 'shopify', inventory_policy: 'continue' },
        { option1: 'L/XL', option2: 'Classic Black', price: '14.99', compare_at_price: '19.99', sku: 'BDB-LXL-BLK', inventory_management: 'shopify', inventory_policy: 'continue' },
        { option1: 'S/M',  option2: 'Desert Sand',   price: '14.99', compare_at_price: '19.99', sku: 'BDB-SM-SND',  inventory_management: 'shopify', inventory_policy: 'continue' },
        { option1: 'L/XL', option2: 'Desert Sand',   price: '14.99', compare_at_price: '19.99', sku: 'BDB-LXL-SND', inventory_management: 'shopify', inventory_policy: 'continue' },
      ],
    },
    collections: ['bully-essentials', 'style-accessories'],
  },
];

const PAGES = [
  {
    title: 'About Blocky & Co.',
    handle: 'about',
    body_html: `<h1>We're bully people. This store was made by us, for us.</h1>
<p>Blocky & Co. was born out of frustration. Not with our dogs — never with our dogs — but with every generic pet store that clearly had no idea what bully breeds actually need.</p>
<p>The harnesses that didn't fit their chest. The "indestructible" toys that lasted 40 minutes. The cooling products that required constant maintenance in the middle of a summer heatwave when your English Bulldog is dramatically dying on the kitchen floor.</p>
<p>We decided to do it properly. Every product we carry was chosen because it works for <em>these specific dogs</em>: the pullers, the chewers, the overheaters, the velcro dogs who follow you to the bathroom and stare into your soul.</p>
<h2>Our values</h2>
<ul>
  <li>We only sell things we'd actually use on our own dogs</li>
  <li>We believe in the breed — unconditionally</li>
  <li>We don't do the aggressive dog stereotype. Our dogs are lovers.</li>
  <li>We're building a community, not just a store</li>
</ul>
<p>Have a question, a product suggestion, or just want to show us a photo of your dog? Email us at hello@blockyandco.com — we read everything.</p>`,
  },
  {
    title: 'Bully Owner Resources',
    handle: 'bully-resources',
    body_html: `<h1>Resources for Bull Breed Owners</h1>
<h2>Heat Safety for Brachycephalic Breeds</h2>
<p>Dogs with flat faces (English Bulldogs, French Bulldogs, and many Pit Bull types) cannot pant as effectively as long-muzzled dogs. This means they overheat faster and can reach dangerous temperatures more quickly.</p>
<h3>Warning signs of overheating:</h3>
<ul>
  <li>Excessive, rapid panting</li>
  <li>Drooling more than usual</li>
  <li>Bright red or pale gums</li>
  <li>Stumbling or loss of coordination</li>
  <li>Vomiting or diarrhea</li>
</ul>
<p><strong>If you suspect heatstroke:</strong> Move to a cool area immediately, apply cool (not cold) water, and get to a vet.</p>
<h2>Harness vs. Collar for Bully Breeds</h2>
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
  <li>Your local bully breed rescue — support them if you can</li>
</ul>`,
  },
];

const DISCOUNTS = [
  {
    rule: {
      title: 'WELCOME10',
      target_type: 'line_item',
      target_selection: 'all',
      allocation_method: 'across',
      value_type: 'percentage',
      value: '-10.0',
      customer_selection: 'all',
      once_per_customer: true,
      usage_limit: null,
      starts_at: new Date().toISOString(),
    },
    code: 'WELCOME10',
  },
  {
    rule: {
      title: 'CART15',
      target_type: 'line_item',
      target_selection: 'all',
      allocation_method: 'across',
      value_type: 'percentage',
      value: '-15.0',
      customer_selection: 'all',
      once_per_customer: true,
      usage_limit: null,
      starts_at: new Date().toISOString(),
    },
    code: 'CART15',
  },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function shopifyRequest(method, path, token, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null;
    const options = {
      hostname: SHOP,
      path: `/admin/api/${API}${path}`,
      method,
      headers: {
        'X-Shopify-Access-Token': token,
        'Content-Type': 'application/json',
        ...(payload && { 'Content-Length': Buffer.byteLength(payload) }),
      },
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch { resolve(data); }
      });
    });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function openBrowser(url) {
  const p = process.platform;
  if (p === 'darwin') exec(`open "${url}"`);
  else if (p === 'win32') exec(`start "" "${url}"`);
  else exec(`xdg-open "${url}"`);
}

function log(msg) { process.stdout.write(msg + '\n'); }
function ok(msg)  { log(`  ✅ ${msg}`); }
function err(msg) { log(`  ❌ ${msg}`); }

// ─── OAUTH FLOW ───────────────────────────────────────────────────────────────

function authorize(clientSecret) {
  return new Promise((resolve, reject) => {
    const state = crypto.randomBytes(16).toString('hex');

    const server = http.createServer(async (req, res) => {
      const parsed = new URL(req.url, `http://localhost:${PORT}`);
      if (parsed.pathname !== '/callback') { res.end(); return; }

      const code  = parsed.searchParams.get('code');
      const gotState = parsed.searchParams.get('state');

      if (gotState !== state) {
        res.end('State mismatch. Please try again.');
        return reject(new Error('OAuth state mismatch'));
      }
      if (!code) {
        res.end('No authorization code received.');
        return reject(new Error('No authorization code'));
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<html><body style="font-family:sans-serif;text-align:center;padding:80px;background:#FAF4EC">
        <h1 style="color:#C8722A;font-size:48px">✅</h1>
        <h2 style="color:#1E2329">Authorized! Building your store now...</h2>
        <p style="color:#7A6A5A">You can close this tab. Check your terminal for progress.</p>
      </body></html>`);

      server.close();

      // Exchange code for access token
      const body = new URLSearchParams({ client_id: CLIENT_ID, client_secret: clientSecret, code }).toString();
      const tokenRes = await new Promise((res2, rej2) => {
        const r = https.request({
          hostname: SHOP,
          path: '/admin/oauth/access_token',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(body),
          },
        }, (resp) => {
          let d = '';
          resp.on('data', (c) => (d += c));
          resp.on('end', () => res2(JSON.parse(d)));
        });
        r.on('error', rej2);
        r.write(body);
        r.end();
      });

      if (tokenRes.access_token) {
        ok('Access token obtained');
        resolve(tokenRes.access_token);
      } else {
        reject(new Error(`Token error: ${JSON.stringify(tokenRes)}`));
      }
    });

    server.listen(PORT, () => {
      const authUrl = `https://${SHOP}/admin/oauth/authorize?client_id=${CLIENT_ID}&scope=${encodeURIComponent(SCOPES)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=${state}`;
      log('\n🔐 Opening Shopify authorization in your browser...');
      log('   If the browser does not open, visit this URL manually:\n');
      log(`   ${authUrl}\n`);
      openBrowser(authUrl);
    });

    server.on('error', (e) => {
      if (e.code === 'EADDRINUSE') {
        reject(new Error(`Port ${PORT} is already in use. Close whatever is using it and try again.`));
      } else {
        reject(e);
      }
    });
  });
}

// ─── BUILD STORE ─────────────────────────────────────────────────────────────

async function buildStore(token) {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  log('  🐾  Building Blocky & Co. — ecpg10-n8.myshopify.com');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // 1. Collections
  log('📦 Creating collections...');
  const collectionIdMap = {};
  for (const c of COLLECTIONS) {
    await sleep(600);
    const res = await shopifyRequest('POST', '/custom_collections.json', token, { custom_collection: c });
    if (res.custom_collection) {
      collectionIdMap[c.handle] = res.custom_collection.id;
      ok(res.custom_collection.title);
    } else {
      err(`${c.title}: ${JSON.stringify(res.errors || res)}`);
    }
  }

  // 2. Products + collection membership
  log('\n🛍️  Creating products...');
  for (const p of PRODUCTS) {
    await sleep(600);
    const res = await shopifyRequest('POST', '/products.json', token, { product: p.data });
    if (res.product) {
      ok(`${res.product.title} (${res.product.variants.length} variants)`);
      const productId = res.product.id;

      for (const handle of p.collections) {
        await sleep(400);
        if (collectionIdMap[handle]) {
          await shopifyRequest('POST', '/collects.json', token, {
            collect: { product_id: productId, collection_id: collectionIdMap[handle] },
          });
        }
      }
    } else {
      err(`${p.data.title}: ${JSON.stringify(res.errors || res)}`);
    }
  }

  // 3. Pages
  log('\n📄 Creating pages...');
  for (const page of PAGES) {
    await sleep(600);
    const res = await shopifyRequest('POST', '/pages.json', token, { page });
    if (res.page) {
      ok(res.page.title);
    } else {
      err(`${page.title}: ${JSON.stringify(res.errors || res)}`);
    }
  }

  // 4. Discount codes
  log('\n🏷️  Creating discount codes...');
  for (const d of DISCOUNTS) {
    await sleep(600);
    const priceRule = await shopifyRequest('POST', '/price_rules.json', token, { price_rule: d.rule });
    if (priceRule.price_rule) {
      await sleep(400);
      const dc = await shopifyRequest('POST', `/price_rules/${priceRule.price_rule.id}/discount_codes.json`, token, {
        discount_code: { code: d.code },
      });
      if (dc.discount_code) {
        ok(`${dc.discount_code.code} (${Math.abs(parseFloat(d.rule.value))}% off)`);
      } else {
        err(`${d.code}: ${JSON.stringify(dc.errors || dc)}`);
      }
    } else {
      err(`Price rule for ${d.code}: ${JSON.stringify(priceRule.errors || priceRule)}`);
    }
  }

  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  log('  🎉  Done! Your store is built.');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  log('  Next steps:');
  log('  1. Visit https://ecpg10-n8.myshopify.com/admin/products to review products');
  log('  2. Install Dawn theme if not already active');
  log('  3. Install Klaviyo, DSers, and Zendrop from the App Store');
  log('  4. Remove password protection to go live\n');
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = (q) => new Promise((r) => rl.question(q, r));

  log('\n🐾  Blocky & Co. Store Builder');
  log('    Automated setup for ecpg10-n8.myshopify.com\n');
  log('Before continuing, confirm you have:');
  log('  • Added scopes in your Dev Dashboard app → Configuration');
  log('  • Added http://localhost:3000/callback as a Redirect URL');
  log('  • Saved those changes\n');

  const secret = await ask('Paste your Client Secret: ');
  rl.close();

  if (!secret.trim()) {
    log('No secret provided. Exiting.');
    process.exit(1);
  }

  try {
    const token = await authorize(secret.trim());
    await buildStore(token);
  } catch (e) {
    log(`\n❌ Error: ${e.message}`);
    process.exit(1);
  }
}

main();
