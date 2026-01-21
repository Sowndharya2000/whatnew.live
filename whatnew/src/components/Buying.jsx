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
{/* ===== Getting Started Section ===== */}
<div className="getting-started-container-20">
  <h2 className="getting-started-title-20">Getting Started</h2>

  <div className="getting-started-card-20">
    <div className="getting-started-links-20">
      <a href="/add-manage-payment-methods" className="getting-started-link-20">
        Add and manage payment methods
      </a>

      <a href="/shipping-address" className="getting-started-link-20">
        Add or update your shipping address
      </a>

      <a href="/update-username" className="getting-started-link-20">
        Updating Your Whatnew Username
      </a>

      <a href="/accessibility-captioning" className="getting-started-link-20">
        Accessibility and Live Stream Captioning
      </a>
    </div>
  </div>
</div>

    </>
  );
};

export default Account;
