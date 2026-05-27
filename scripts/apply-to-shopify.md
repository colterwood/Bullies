# How to Apply This to Your Shopify Store

Once the Shopify MCP connection is re-authorized, run the following sequence
using the MCP tools. Each section maps to a tool call.

## Step 1: Get Shop Info
Confirm which store we're connected to.

## Step 2: Create Collections (in order)
Use create-collection for each entry in COLLECTIONS array.
Collections must exist before products are assigned to them.

## Step 3: Create All 5 Products
Use create-product with full descriptionHtml, variants, and options.
Assign to collection IDs obtained in Step 2.

## Step 4: Create Discount Codes
Use create-discount for WELCOME10 (10%) and CART15 (15%).

## Step 5: Create Pages
Use graphql_mutation to create pages (About, Bully Resources).

## Step 6: Update Store Metafields / Branding
Set store name, tagline, and social media URLs via graphql_mutation.

## Status: READY TO EXECUTE
All data is defined in scripts/shopify-setup.js.
Reconnect Shopify MCP and we'll run the full sequence automatically.
