import React from "react";
import "./Return.css";
import Header1 from "./Header1";

const Returns = () => {
  return (
    <>
      <Header1 />

      {/* Banner Section */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">Whatnew</a> / <span>General</span>
          </nav>
          <h1>Whatnew Buyer Protection Policy</h1>
          <p>Whatnew Support May 16, 2025 at 7:02 PM.</p>
        </div>
      </div>

   {/* Buyer Protection Section */}
<div className="help-section">
  <div className="help-content">

    <h3>When buyers are entitled to a refund</h3>
    <p>
      Our buyer protection policy covers the following issues, provided you submit your request within the specified timelines, 
      and the request isn’t excluded under the “exclusions to whatnew buyer protection” section:
    </p>

    <ul>
      <li>Incomplete or incorrect items: One or more items are missing or incorrect.</li>
      <li>Item not as described or inauthentic: Items received are damaged, expired, defective, counterfeit, or do not match the condition description.</li>
      <li>Package not received: Items are lost, delayed in transit, not shipped, misdelivered, or not received after being marked “delivered” by the carrier.</li>
      <li>Full list of covered issues under additional details below.</li>
    </ul>

    <p>
      You must submit your request by the earlier of 30 days from purchase or 14 days from delivery for your request to be eligible under whatnew buyer protection. Certain categories have specific deadlines:
    </p>

    <ul>
      <li>
        <strong>Coins & money, sports cards, sneakers & streetwear, trading card games, luxury goods:</strong> Submit your request by the earlier of 7 days of delivery or 30 days from purchase.
      </li>
      <li>
        <strong>Plants:</strong> Submit your request by the earlier of 2 days of delivery or 30 days from purchase.
      </li>
    </ul>

  </div>
</div>
</>
  );
};

export default Returns;
