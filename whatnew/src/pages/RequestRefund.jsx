import React from "react";
import "./Request.css";

import Header1 from "../components/Header1"; 

export default function Request() {
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
          <h1>Request a refund for an order issue
</h1>
          <p>WhatNew Support August 13, 2025 at 2:32 AM.</p>
        </div>
      </div>


{/* request */}
<div className="request-service-session">
  <div className="request-service-content">

    <p className="note">
      <strong>Beta notice:</strong> This process is currently in beta and only available
      from specific sellers. During the beta, we’re gathering feedback and improving
      the experience. We appreciate your patience as we work to make this feature
      available to everyone.
    </p>

    <h3>Customer Service for Buyers</h3>

    <p>
      We know it’s frustrating when something goes wrong with a purchase. Whether your package didn’t arrive or an item showed up damaged, we’re here to help.
    </p>

    <p>
      You can report an issue and request a refund directly through WhatNew. We’ll review your request under our Buyer Protection Policy and work with you through next steps.
    </p>

    <p>
      Want to cancel before the seller ships? You can ask the seller to cancel your order before they create a shipping label. Cancellation isn’t guaranteed, but it’s usually the fastest way to fix an issue early. <a href="/learn-how-to-cancel">Learn how to cancel your order</a>.
    </p>

    <h3>On this page</h3>
    <ul>
      <li>What’s covered under Buyer Protection</li>
      <li>Refund request timelines</li>
      <li>How to request a refund</li>
      <li>Return your item</li>
      <li>Receive your refund</li>
      <li>How we prevent refund misuse</li>
    </ul>

    <h3>What’s covered under Buyer Protection</h3>
    <p>
      Problems like late shipments, missing items, or damage are often covered by Buyer Protection.
    </p>

    <h4>Examples include:</h4>
    <p><strong>Before delivery –</strong></p>
    <ul>
      <li>Your order hasn’t shipped and is taking longer than expected</li>
      <li>Your package has shipped but it’s delayed or stuck in transit</li>
    </ul>

    <p><strong>After delivery –</strong></p>
    <ul>
      <li>The item was damaged during shipping</li>
      <li>Something is missing from your order</li>
      <li>You received the wrong item</li>
      <li>It doesn’t match the listing (description, condition, size, color, photos)</li>
      <li>It’s defective, expired, or not working</li>
      <li>It’s counterfeit or fake</li>
    </ul>

    <p><strong>Not covered –</strong></p>
    <ul>
      <li>You changed your mind after buying</li>
      <li>It doesn’t fit your style, preference, or size</li>
      <li>The item had flaws that were shared before purchase</li>
    </ul>

    <p>Not sure if your issue’s covered? Check our Buyer Protection Policy for full details.</p>

    <h3>Refund request timelines</h3>
    <p>
      Request a refund within your item’s window to stay protected by Buyer Protection. The deadline is based on delivery date or 30 days from purchase (whichever comes first). All categories: Within 2 days of delivery. Extensions may apply in some cases.
    </p>

    <h3>How to request a refund</h3>
    <p>
      Start by reporting an issue with your order:
    </p>
    <ul>
      <li>Open the app or go to WhatNew</li>
      <li>Go to Activity &gt; Purchases</li>
      <li>Select the order with the issue</li>
      <li>Tap or click <strong>Get help with this purchase</strong></li>
      <li>Select the option that matches your issue</li>
      <li>Describe the situation and upload any supporting evidence (like photos)</li>
      <li>Submit your request</li>
    </ul>

    <p>
      After you submit a request, some requests are shared with the seller first (if they’re part of our Customer Service program), others go directly to WhatNew Support. Either way, we’ll keep you updated as your request is reviewed. We’ll let you know if a refund is approved and if a return is needed.
    </p>

    <h3>Return your item</h3>
    <p>
      In some cases, you’ll need to return the item so we can review the issue and process your request. If a return is required:
    </p>
    <ul>
      <li>We’ll provide a prepaid label and instructions</li>
      <li>You’ll have 5 business days to ship the item</li>
      <li>The item must be in the same condition it arrived to you</li>
      <li>Include your order number if asked</li>
    </ul>

    <p>We’ll process your refund request as soon as we receive and review the return.</p>

    <h3>Receive your refund</h3>
    <p>
      If approved, you’ll see the refund as credit on your statement or the original charge may be removed. It can take 3–5 business days for your bank or payment provider to process the refund.
    </p>

    <h3>How we prevent refund misuse</h3>
    <p>
      We monitor refund activity to keep Buyer Protection fair and secure for everyone.
    </p>

  </div>
</div>


{/* ===== Returns Section ===== */}
<div className="returns-container-26">
  <h2 className="returns-title-26">Articles in this section</h2>

  <div className="returns-card-26">
    <div className="returns-links-20">
        <a href="/buyer-protection" className="returns-link-26">
        Whatnew Buyer Protection Policy
      </a>

      <a href="/cancel-order" className="returns-link-26">
        Cancel your order
      </a>
      <a href="/customer-service" className="returns-link-26">
        Customer Service for Buyers
      </a>

      <a href="/request-refund" className="returns-link-26">
        Request A Refund For An Order Issue
      </a>
    </div>
  </div>
</div>



</div>




     
 
  );
}
