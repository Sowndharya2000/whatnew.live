// BannerSection.jsx
import React from "react";
import "./Verified.css";
import Header1 from "../components/Header1"; 

const Payment = () => {
  return (
    <>
    {/* ====== Header Section ====== */}
      <Header1 />

      {/* Banner Section */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
           <a href="/Faq">WhatNew</a> /
      <a href="/buying">Buying</a> /{"General "}
          </nav>
          <h1>How to become a Verified Buyer
</h1>
          <p>WhatNew Support June 26, 2025 at 8:03 AM.</p>
        </div>
      </div>

     {/* Verified Buyer Section */}
<div className="verified-section">

  <p className="verified-intro">
    Some sellers require buyers to be verified before placing bids or entering giveaways during their show.
    This helps prevent fake bids and keeps auctions fair.
  </p>

  <p className="verified-subtext">
    If a seller has turned this on, you may be asked to confirm your payment method before bidding,
    or complete verification in advance.
  </p>

  <h3 className="verified-heading">On this page:</h3>
  <ul className="verified-list">
    <li>How buyer verification works</li>
    <li>How to become a Verified Buyer</li>
    <li>About the ₹10 payment hold</li>
    <li>Check your buyer verification status</li>
  </ul>

  <h3 className="verified-heading">How buyer verification works</h3>
  <p>You can become a Verified Buyer in a couple ways:</p>

  <ul className="verified-list">
    <li><strong>Automatically:</strong> If you’ve already made successful purchases, you may already be verified.</li>
    <li><strong>Asked to verify:</strong> New users or unverified buyers may be prompted during a show or from settings.</li>
  </ul>

  <p className="verified-note">
    Note: During large shows, you may be asked to re-verify your payment method even if you verified before.
  </p>

  <h3 className="verified-heading">How to become a Verified Buyer</h3>

  <h4 className="verified-subheading">Verify during a show</h4>
  <ol className="verified-steps">
    <li>Join the show</li>
    <li>Swipe to bid (your bid won’t go through yet)</li>
    <li>You’ll see a prompt to verify</li>
    <li>Tap <strong>Get Verified</strong></li>
    <li>(Optional) Update your payment method</li>
    <li>Tap <strong>Authorize</strong> to approve the temporary hold</li>
    <li>Close the prompt and place your bid</li>
  </ol>

  <h4 className="verified-subheading">Verify from account settings</h4>
  <ol className="verified-steps">
    <li>Open the WhatNew app</li>
    <li>Tap <strong>Account</strong></li>
    <li>Tap <strong>Verified Buyer</strong></li>
    <li>Upload your ID and complete verification</li>
  </ol>

  <h3 className="verified-heading">About the ₹10 payment hold</h3>
 <p className="verified-intro">
    WhatNew may place a temporary ₹10 hold to confirm your payment method.
  </p>
  <ul className="verified-list">
    <li>It's not a charge — appears as “pending”.</li>
    <li>Released within 24 hours (some banks take longer).</li>
    <li>In rare cases, may be finalized if a buyer places fake or misleading bids.</li>
  </ul>

  <h3 className="verified-heading">Check your verification status</h3>
  <ol className="verified-steps">
    <li>Open the WhatNew app</li>
    <li>Tap <strong>Account</strong></li>
    <li>Tap <strong>Verified Buyer</strong></li>
    <li>View your current status</li>
  </ol>

</div>
<div className="top-articles-container">
  <h2 className="article-1">Top Articles</h2>
      <div className="top-articles-1-card">
  <div className="top-articles6-links">


    <a href="/buy-now-pay-later" className="top-articles-1-link">
      Pay over time with Buy Now, Pay Later
    </a>

    <a href="/verified-buyer" className="top-articles-1-link">
      How to become a Verified Buyer
    </a>

    <a href="/bidding-before-auction" className="top-articles-1-link">
      Bidding on an Item Before It Goes Up For Auction
    </a>

    <a href="/buyer-protection" className="top-articles-1-link">
      WhatNew Buyer Protection Policy
    </a>

    <a href="/cancel-order" className="top-articles-1-link">
      Cancel your order
    </a>

  </div>
</div>
</div>

    </>
  );
};

export default Payment;
