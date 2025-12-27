import React from "react";
import "./Buying.css";
import Header1 from "./Header1";
const Account = () => {
  return (
    <>
    <Header1 />
      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">Whatnew</a> / <span>Buying</span>
          </nav>
          <h1>Buying</h1>
         
        </div>
      </div>

      {/* ===== Top Articles Section ===== */}
<div className="top-articles-container">
  <h2 className="top-articles-title">Top Articles</h2>

  <div className="top-articles-card">
    <div className="top-articles-links">
      <a href="/buy-now-pay-later" className="top-articles-link">
        Pay over time with Buy Now, Pay Later
      </a>

      <a href="/verified-buyer" className="top-articles-link">
        How to become a Verified Buyer
      </a>

      <a href="/bidding-before-auction" className="top-articles-link">
        Bidding on an Item Before It Goes Up For Auction
      </a>

      <a href="/buyer-protection" className="top-articles-link">
        Whatnew Buyer Protection Policy
      </a>

      <a href="/cancel-order" className="top-articles-link">
        Cancel your order
      </a>
    </div>
  </div>
</div>

    </>
  );
};

export default Account;
