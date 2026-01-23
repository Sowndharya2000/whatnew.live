import React from "react";
import "./Custom.css";

import Header1 from "../components/Header1"; 

export default function Custom() {
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
          <h1>Customer Service for Buyers
</h1>
          <p>WhatNew Support June 11, 2025 at 5:08 AM.</p>
        </div>
      </div>


{/* ===== Customer Service for Buyers Section ===== */}
<div className="custom-service-session">
  <div className="custom-service-content">

    <p className="note">
      <strong>Beta notice:</strong> This process is currently in beta and only available
      from specific sellers. During the beta, we’re gathering feedback and improving
      the experience. We appreciate your patience as we work to make this feature
      available to everyone.
    </p>

    <h3>Customer Service for Buyers</h3>

    <p>
      Sellers handle specific request types from buyers who are having an issue with
      their order. When buyers submit requests through the app, the request is sent
      directly to the seller to respond.
    </p>

    <p>
      <strong>WhatNew</strong> is committed to ensuring a trustworthy buying experience
      for everyone. WhatNew Support remains available when buyers and sellers are
      unable to reach a resolution.
    </p>

    <h3>How Customer Service Works</h3>

    <p>
      All timeframes listed are based on business hours and business days and exclude
      weekends.
    </p>

    <h3>WhatNew Buyer Protection Coverage</h3>

    <p>
      When buyers request help with an order, the request is sent to the seller to
      resolve the issue for the following refund-related concerns:
    </p>

    <ul>
      <li>The item is substantially delayed in shipping</li>
      <li>An item is missing*</li>
      <li>An item is incorrect, or the correct item but the wrong size or color*</li>
      <li>The item does not match the description, condition, or photos listed</li>
      <li>The item is defective, doesn’t work, or is expired</li>
      <li>Buyer received a Postage Due notice</li>
      <li>The item was returned to sender</li>
      <li>The item was damaged in transit</li>
    </ul>

    <p className="note">
      <strong>*Exclusions:</strong> Consumable products such as Breaks, Surprise Products,
      and any product that can be opened (for example, beauty or cosmetics) are excluded.
      Missing or incorrect item requests for consumable products, as well as issues not
      listed above, will be handled directly by WhatNew Support.
    </p>

    <h3>Buyer FAQ</h3>

    <p>
      <strong>How do I submit a refund request?</strong><br />
      Follow the in-app “Get help with this purchase” flow. Navigate to
      Activity &gt; Purchases &gt; select the order &gt; tap
      <strong> Get help with this purchase</strong>.
    </p>

    <p>
      Refund requests must be submitted within our Refund Request Time Frames to be
      eligible. Sellers may choose whether to accept requests submitted outside
      these timeframes.
    </p>

    <p>
      This feature is currently available only in the WhatNew app on Android and iOS.
    </p>

    <p>
      <strong>What happens if a seller doesn’t respond?</strong><br />
      If the seller does not respond within 48 business hours (2 weekdays), the request
      is automatically escalated to WhatNew Support to determine eligibility under the
      Buyer Protection Policy.
    </p>

    <p>
      When WhatNew reviews a request, a return to the seller or to WhatNew may be
      required before a refund is issued.
    </p>

    <p>
      <strong>My request is covered, but the seller rejected it. What can I do?</strong><br />
      You have 48 business hours (2 weekdays) to escalate the request to WhatNew Support.
      Navigate to the order, tap <strong>Get help with this purchase</strong>, and provide
      any additional required information.
    </p>

    <p>
      When WhatNew handles a request, returned items may be required before the refund
      is processed.
    </p>

    <p>
      <strong>How can I check the status of my refund request?</strong><br />
      You can find the status under Order Details in the app. Navigate to
      Activity &gt; Purchases, select the order, or use the
      <strong> Refunds</strong> filter to view all refund requests.
    </p>

    <p>
      <strong>How do I return my item?</strong><br />
      If a return is required, drop off your item within 5 business days of approval.
      Failure to do so will result in cancellation of the request.
    </p>

    <p>
      Return labels are provided via email and can also be accessed from Order Details
      in the WhatNew app.
    </p>

    <p>
      Returned items must be delivered in the exact condition they were received.
      Improper returns may result in rejection and future refund ineligibility.
    </p>

    <h3>When will I receive my refund?</h3>

    <p>
      Once processed, refunds typically appear on your original payment method within
      3–5 business days.
    </p>

    <ul>
      <li>
        <strong>Full refund without return:</strong> Processed the same day the seller
        accepts the request
      </li>
      <li>
        <strong>Full refund with return:</strong> Processed once the return is verified
        or 48 business hours after delivery
      </li>
      <li>
        <strong>Partial refund:</strong> Processed once the buyer accepts the offer
      </li>
    </ul>

    <p className="note">
      Buyers who exhibit indications of refund fraud may be denied refunds or face
      account action.
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
