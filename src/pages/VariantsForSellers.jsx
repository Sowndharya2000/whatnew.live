import React, { useEffect } from "react";
import "./VariantsForSellers.css";

import Header1 from "../components/Header1";

export default function VariantsForSellers() {

  // OPTIONAL — makes ALL <strong> First letter caps, rest lowercase
  useEffect(() => {
    document.querySelectorAll("strong").forEach(el => {
      el.textContent = el.textContent
        .toLowerCase()
        .replace(/\b\w/g, char => char.toUpperCase());
    });
  }, []);

  return (
    <div>
      <Header1 />

      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">WhatNew</a> /{" "}
            <a href="/selling">Selling</a> / Getting Started
          </nav>

          <h1>Variants for Sellers</h1>
          <p>WhatNew Support March 27, 2025 at 4:26 PM</p>
        </div>
      </div>

      <div className="seller-variants-section">
        <div className="seller-variants-content">

          <h2>What are Variants?</h2>

          <p>
            Variants allow sellers on WhatNew to sell multiple options of the same product —
            for example, different sizes or colors — as a Buy It Now or Flash Sale within a live show.
          </p>

          <p>Key functionality of Variants on WhatNew:</p>

          <ul>
            <li>
              Products can have up to 100 variants and up to 1,000 total quantity.
              For instance, a product could have 5 variants of 200 quantity each, or 100 variants of 10 quantity each.
            </li>
            <li>
              Variants are limited to Buy It Now listings (including Flash Sales), and must be reserved for live.
              Additionally, Variants are not eligible to receive Offers.
            </li>
            <li>
              Variants can be purchased by buyers on any platform, and can be created by sellers on
              Web, Seller Hub, iOS, or Android.
            </li>
          </ul>

          <h3>Creating a Variant</h3>

          <h4>On iOS or Android</h4>
          <ul>
            <li>
              Step 1: Within a live, go into your shop and tap the “+” button to create a listing.
              Select “Create Quality Listing.”
            </li>
            <li>
              Step 2: Enter Buy It Now listing details as usual — add a category, title, description,
              price, shipping profile, and images. Ensure Buy It Now is selected as your pricing format.
            </li>
            <li>
              Step 3: Instead of choosing a quantity, tap the row called “Variants” to enter your variants.
              Use the “+” button to add or the trash icon to remove variants (up to 1,000 total quantity across all).
              Press “&lt;” to go back when finished.
            </li>
            <li>
              Step 4: Finish configuring the listing, ensure it’s Reserved for Live, and hit Publish.
              Buyers can now view and purchase your variant-enabled listing.
            </li>
          </ul>

          <h4>On Seller Hub</h4>
          <ul>
            <li>Step 1: From the Inventory page, click the “Create Product” button.</li>
            <li>Step 2: Configure Buy It Now listing details — ensure “Accept Offers” is off and “Reserve for Live” is on.</li>
            <li>Step 3: Scroll down to enable the Variants section below quantity. Add or delete variants as needed.</li>
            <li>Step 4: Hit Publish. You can also save as draft if not ready.</li>
            <li>Step 5: Done! Buyers can now purchase your variant-enabled listing during lives or Flash Sales.</li>
          </ul>

          <h4>On Web Live Show</h4>
          <ul>
            <li>Step 1: Click the “Add” button in your Live Shop and select “Create Temporary Listing.”</li>
            <li>Step 2: Add listing details as usual — title, price, shipping, etc. Quantity will be calculated from your variants.</li>
            <li>Step 3: Scroll down and tap the “Variants” section. Ensure Buy It Now is selected and “Allow offers” is turned off.</li>
            <li>Step 4: Add or remove variants using “+” or the trash icon. Press Confirm when done.</li>
            <li>Step 5: Click Confirm again to publish your listing — and that’s it!</li>
          </ul>

          <h3>FAQs</h3>
          <ul>
            <li>
              How will Variants appear in Sold and Shipping flows?
              <br />
              Purchases will appear as Listing Title [Variant Title] everywhere — for example, “WhatNew Pin [Yellow]”.
            </li>
            <li>
              What if buyers get an error buying a Variant?
              <br />
              Make sure buyers on iOS or Android have updated to the latest version of the WhatNew app.
            </li>
            <li>
              Can I use Flash Sales with Variants?
              <br />
              Yes! Flash Sales work great with Variants — sell multiple sizes or colors in one sale.
            </li>
            <li>
              Can I use Variants with gifting or offers?
           <br/>
              No. Variants do not currently support offers or gifting.
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Seller Listing Section ===== */}
      <div className="seller-listing-section-2">
        <h2 className="seller-listing-title-2">Articles in this section</h2>

        <div className="seller-listing-card-2">
          <div className="seller-listing">
            <a href="/variants-for-sellers" className="seller-listing-link-1">
              Variants for Sellers
            </a>
            <a href="/wholesale-category-policy" className="seller-listing-link-1">
              WhatNew Wholesale Category Policy
            </a>
            <a href="/how-to-list-products" className="seller-listing-link-1">
              How to List Products on WhatNew
            </a>
            <a href="/listing-guidelines" className="seller-listing-link-1">
              WhatNew Listing Guidelines
            </a>
            <a href="/scan-barcode-slab" className="seller-listing-link-1">
              Scan a Barcode or Slab to List Your Item
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
