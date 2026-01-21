import React from "react";
import "./Production.css";

import Header1 from "../components/Header1"; 

export default function BuyerProduction() {
  return (
    <div>
        <Header1 />
    
     {/* Banner Section */}
      <div className="banner-section">
        <div className="overlay">
           <nav className="breadcrumb">
           <a href="/Faq">Whatnew</a> /
      <a href="/buying">Buying</a> /{"General "}
          </nav>
          <h1>Whatnew Buyer Protection Policy
</h1>
          <p>Whatnew Support May 16, 2025 at 7:02 PM.</p>
        </div>
      </div>
{/* ===== Buyer Protection Policy Section ===== */}
<div className="buyer-protection-section">
  <div className="buyer-protection-content">

    <p>
      <strong>Shop with confidence on WhatNew.</strong>
    </p>

    <p>
      At <strong>WhatNew</strong>, we’re committed to providing a trustworthy buying experience
      for everyone. In the rare event that something goes wrong with your purchase,
      you can rest assured knowing we’ve got you covered.
    </p>

    <p>
      Below, you’ll find details about our <strong>Buyer Protection Policy</strong>,
      including when you’re eligible for a refund and how to get one.
    </p>

    <h3>How to get help with a purchase</h3>
    <p>
      If you experience an issue with your purchase, submit a request directly through
      the WhatNew app.
    </p>
    <p>
      If your issue is covered under our Buyer Protection Policy, you’ll be eligible
      for a refund once your request is reviewed and approved.
    </p>

    <h3>When buyers are entitled to a refund</h3>
    <p>
      Our Buyer Protection Policy covers the issues listed below, provided your request
      is submitted within the required timelines and is not excluded under the
      <strong> Exclusions to WhatNew Buyer Protection</strong>.
    </p>

    <ul>
      <li>
        <strong>Incomplete or incorrect items:</strong> One or more items are missing or incorrect
      </li>
      <li>
        <strong>Item not as described or inauthentic:</strong> Items are damaged, expired,
        defective, counterfeit, fake, or do not match the condition described
      </li>
      <li>
        <strong>Package not received:</strong> Items are lost or delayed in transit,
        not shipped, misdelivered, or not received after being marked “delivered”
        by the carrier
      </li>
      <li>
        Full list of covered issues can be found under <strong>Additional Details</strong>
      </li>
    </ul>

    <h3>Request timelines</h3>
    <p>
      To qualify for Buyer Protection, you must submit your request by the
      <strong> earlier of 30 days from purchase or 14 days from delivery</strong>.
    </p>

    <p>Certain categories have specific deadlines:</p>

    <ul>
      <li>
        <strong>Coins & Money, Sports Cards, Sneakers & Streetwear, Trading Card Games,
        Luxury Goods:</strong> Submit your request by the earlier of
        <strong> 7 days from delivery or 30 days from purchase</strong>
      </li>
      <li>
        <strong>Plants:</strong> Submit your request by the earlier of
        <strong> 2 days from delivery or 30 days from purchase</strong>
      </li>
    </ul>

    <h3>Returns and refunds</h3>
    <p>
      WhatNew may require you to return the item before issuing a refund.
      If a return is required, the item must be sent back in the same condition
      as received.
    </p>

    <p>
      Opening a product, removing tags, or altering the item may disqualify your order
      from a refund or reduce the refund amount.
    </p>

    <p>
      <strong>Note:</strong> Buyers returning orders from Germany are responsible for
      return shipping costs. These costs will be deducted from the refund.
    </p>

  </div>
</div>


<div className="top-articles-container">
  <h2 className="article-15">Top Articles</h2>
      <div className="top-articles-15-card">
  <div className="top-articles6-links">


    <a href="/buy-now-pay-later" className="top-articles-15-link">
      Pay over time with Buy Now, Pay Later
    </a>

    <a href="/verified-buyer" className="top-articles-15-link">
      How to become a Verified Buyer
    </a>

    <a href="/bidding-before-auction" className="top-articles-15-link">
      Bidding on an Item Before It Goes Up For Auction
    </a>

    <a href="/buyer-protection" className="top-articles-15-link">
      Whatnew Buyer Protection Policy
    </a>

    <a href="/cancel-order" className="top-articles-15-link">
      Cancel your order
    </a>

  </div>
</div>
</div>




</div>




     
 
  );
}
