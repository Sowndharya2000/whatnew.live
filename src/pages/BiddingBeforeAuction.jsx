import React from "react";
import "./Bidding.css";

import Header1 from "../components/Header1"; 

export default function Bidding() {
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
          <h1>Bidding On An Item Before It Goes Up For Auction
</h1>
          <p>Whatnew Support June 11, 2025 at 5:07 AM.</p>
        </div>
      </div>

      {/* ===== Pre-Bidding Section ===== */}
<div className="prebid-section">
  <div className="prebid-content">

    <p>
      You can bid on an item listed in a seller’s product list anytime before the auction starts,
      as long as the seller has pre-bidding turned on for that item.
    </p>

    <p>
      When you bid on an item before it goes up for auction, you’ll set a maximum bid amount
      that you’re willing to spend on that item. This does not mean you will spend that amount
      if you win the bid.
    </p>

    <p>
      Instead, the app will automatically bid for you with minimum bidding increments until:
    </p>

    <ul>
      <li>You win the auction at or below your max bid amount</li>
      <li>
        Someone else outbids your max bid, at which point you can bid again
        or allow the other bidder to win the auction
      </li>
    </ul>

    <p>
      To learn more about how bidding amounts are determined, visit
      <strong> Bidding Overview</strong>.
    </p>

    <h3>Bidding on an Item Before It’s Auctioned</h3>

    <ol>
      <li>Open a livestream on your mobile device</li>
      <li>Tap on the <strong>Store</strong> icon in the bottom right corner</li>
      <li>Go to the <strong>Auctions</strong> tab</li>
      <li>Tap the <strong>Bid Now</strong> button under any item</li>
      <li>
        Enter the max bid amount you’re willing to pay by:
        <ul>
          <li>Tapping <strong>Show Keypad</strong> and typing the bid amount</li>
          <li>Using the plus or minus buttons to adjust the bid amount</li>
        </ul>
      </li>
      <li>Tap <strong>Submit</strong></li>
    </ol>

    <p>
      If you’re the highest pre-bidder, the item will display
      <strong> “Winning”</strong> next to the bid count on the listing.
    </p>

    <h3>Frequently Asked Questions</h3>

    <ul>
      <li>
        <strong>If I pre-bid on an item, do I need to be present for the live auction?</strong>
        <p>
          No. If someone outbids you, you’ll receive a notification allowing you to
          jump back into the stream and update your bid.
        </p>
      </li>

      <li>
        <strong>Are pre-bids binding?</strong>
        <p>
          Yes. If you’re the highest bidder when the live auction finishes,
          the item is yours and payment is processed immediately using
          your card on file.
        </p>
      </li>

      <li>
        <strong>Is there a minimum or maximum pre-bid amount?</strong>
        <p>
          Pre-bids start at the seller’s starting price. If the seller starts
          the auction at a higher price than your pre-bid, your pre-bid is voided.
          There is no maximum bid limit.
        </p>
      </li>

      <li>
        <strong>What if the auction never happens?</strong>
        <p>
          If the item is never auctioned, your pre-bid will not apply and
          you will not be charged.
        </p>
      </li>

      <li>
        <strong>Can I cancel a pre-bid?</strong>
        <p>
          At this time, pre-bids cannot be canceled once submitted.
        </p>
      </li>

      <li>
        <strong>If an item has multiple quantities, does my pre-bid apply to all?</strong>
        <p>
          No. Pre-bids only apply to the first available item that goes up
          for auction after the pre-bid is placed.
        </p>
      </li>
    </ul>

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
