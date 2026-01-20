import React from "react";
import "./Cancel.css";

import Header1 from "../components/Header1"; 

export default function Cancel() {
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
          <h1>Cancel your order
</h1>
          <p>Whatnew Support July 15, 2025 at 1:40 PM.</p>
        </div>
      </div>

{/* ===== Cancel Order Policy Section ===== */}
<div className="buyer-protection-section-19">
  <div className="buyer-protection-content-19">

    <p>
      <strong>Want to cancel a recent purchase?</strong>
    </p>

    <p>
      You may be able to request a cancellation before the item ships, but approval
      is up to the seller. If the seller approves your request, you’ll receive a refund
      and the item will not ship.
    </p>

    <p>
      Keep in mind that bids on <strong>WhatNew</strong> are binding. If you win an auction,
      you’re expected to complete the purchase. You can still request a cancellation if
      something went wrong, but seller approval isn’t guaranteed.
    </p>

    <p>
      Review our <strong>Community Guidelines</strong> for more details.
    </p>

    <h3>When you can request to cancel</h3>
    <p>
      You can request to cancel your order if the seller hasn’t created the shipping
      label yet.
    </p>

    <p>
      You can’t cancel an order after it ships.
    </p>

    <p className="note">
      <strong>Note:</strong> Trust in the selling experience allows communities to thrive
      on WhatNew. Frequent cancellations may lead to account action. Learn more in our
      Community Guidelines and What Actions We Take.
    </p>

    <h3>Seller approval and response time</h3>
    <p>
      Sellers have full discretion to approve or deny cancellation requests.
    </p>

    <ul>
      <li>
        If the seller accepts, the order is canceled and refunded
      </li>
      <li>
        If the seller declines or doesn’t respond within 48 hours, the order is final
        and will be fulfilled
      </li>
    </ul>

    <h3>Exceptions to final sale</h3>
    <p>
      In certain situations, <strong>WhatNew</strong> may make an exception and review
      cancellation requests:
    </p>

    <ul>
      <li>
        <strong>Bidding error (auction purchases only):</strong> If there was a technical
        issue during bidding, contact Support within 2 hours and include any screenshots
      </li>
      <li>
        <strong>One-time exception:</strong> If the shipping label hasn’t been created and
        you haven’t received an exception before, WhatNew may approve a one-time cancellation.
        This does not apply to Breaks or items that can be used or consumed on-screen
      </li>
      <li>
        <strong>EU or UK buyers:</strong> You may have a legal right to cancel under local
        consumer laws. Review our Buyer Protection Policy for EU/UK Right of Withdrawal
      </li>
    </ul>

    <p>
      <strong>Note:</strong> WhatNew reserves the right to deny any cancellation request.
      We don’t offer cancellations or refunds for buyer’s remorse.
    </p>

    <h3>How to request cancellation</h3>
    <p>
      You can request to cancel individual items you’ve purchased on WhatNew.
    </p>

    <p>
      If an item is part of a bundle and your request is approved, only that item will
      be canceled. You’ll be refunded the shipping cost paid for that specific item.
      The rest of the bundle will remain unless those items are also approved for cancellation.
    </p>

    <p>After you submit a cancellation request:</p>

    <ul>
      <li>The order status changes to <strong>Pending Cancellation</strong></li>
      <li>The seller is notified and has 48 hours to respond</li>
      <li>You’ll be notified when the seller responds</li>
      <li>You can review the status from the order details page</li>
    </ul>

    <h3>Common questions about cancellation</h3>

    <p>
      <strong>I accidentally bid on something and won. Can I cancel?</strong><br />
      Yes. You may request cancellation from the seller, but approval isn’t guaranteed.
    </p>

    <p>
      <strong>Can I cancel my pre-bid on an item?</strong><br />
      No. Pre-bids can’t be canceled or edited. If you win the auction, you can explain
      the situation and request cancellation from the seller.
    </p>

    <p>
      <strong>Can I cancel an order if my package is delayed?</strong><br />
      No. Orders can’t be canceled after shipping. Learn what to do if your package
      is delayed.
    </p>

    <p>
      <strong>How long does a refund take after cancellation?</strong><br />
      Once approved, refunds typically appear within 3–5 business days on your original
      payment method. You may see a statement credit or the original charge removed.
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
