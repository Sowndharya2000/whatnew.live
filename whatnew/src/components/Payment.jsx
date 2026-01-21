// BannerSection.jsx
import React from "react";
import "./Payment.css";
import Header1 from "./Header1";

const Payment = () => {
  return (
    <>
      {/* ====== Header Section ====== */}
      <Header1 />

      {/* Banner Section */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">Whatnew</a> / <span>General</span>
          </nav>
          <h1>Pay over time with Buy Now, Pay Later</h1>
          <p>Whatnew Support June 19, 2025 at 7:33 AM.</p>
        </div>
      </div>
{/* BNPL Section */}
<div className="bnpl-section">
  <div className="bnpl-content">

    <p>
      <strong>Need help with payment options or issues?</strong>
    </p>
    <p>Try managing payment methods or fixing a payment error.</p>

    <h3>When buy now, pay later is available</h3>
    <ul>
      <li>You're using the whatnew app (ios or android)</li>
      <li>You're purchasing a buy it now (bin) item</li>
      <li>
        The item meets the minimum price:
        <ul>
          <li>Klarna: ₹10 or more</li>
          <li>Affirm: ₹50 or more </li>
        </ul>
      </li>
      <li>
        The item isn’t in a restricted category:
        <ul>
          <li>Klarna: not available for knives & hunting</li>
          <li>
            Affirm: not available for coins & money, coins & bullion,
            paper money & currency, or knives & hunting
          </li>
        </ul>
      </li>
      <li>
        You're located in a supported region:
        <ul>
        <li>Klarna: currently available for users in india only</li>
        <li>Affirm: currently not supported in india</li>


        </ul>
      </li>
    </ul>

    <p><strong>Note:</strong> bnpl isn’t available for purchases made on whatnew.com.</p>

    <h3>How to use buy now, pay later</h3>
    <ol>
      <li>Tap buy now on an eligible item in the whatnew app</li>
      <li>Go to the payment section and expand if collapsed</li>
      <li>Under “pay for this item over time”, choose klarna or affirm</li>
      <li>Tap continue with klarna / affirm</li>
      <li>If prompted, enter your payment information</li>
      <li>Tap pay [amount] to continue to klarna or affirm</li>
      <li>Enter your klarna or affirm account info</li>
      <li>Choose a payment plan</li>
      <li>Review your plan details and confirm your purchase</li>
    </ol>

    <p>
      After checkout, you can view your order details in the
      <strong> purchases </strong>tab on whatnew.
    </p>

    <h3>Refunds</h3>
    <p>
      If your order qualifies for a refund under our
      <strong> buyer protection policy</strong>, and your request is approved,
      klarna or affirm will update your payment schedule and/or issue a refund
      based on how much you’ve already paid.
    </p>

    <h3>Faqs</h3>
    <ul>
      <li>
        <strong>Why don’t i see bnpl as an option?</strong> Your purchase may not be eligible.
      </li>
      <li>
        <strong>Why am i seeing a recurring charge from whatnew?</strong>
        If you used klarna or affirm, it might be an installment payment.
        You can view your payment plan from your klarna or affirm account.
      </li>
      <li>
        <strong>Will bnpl affect my credit score?</strong>
        It depends on the provider and the payment plan.
        Visit klarna or affirm to learn more.
      </li>
      <li>
        <strong>Can i change the payment method i used for bnpl?</strong>
        No. You cannot change the payment method on whatnew once confirmed.
      </li>
      <li>
        <strong>Need more help?</strong>
        Contact whatnew support, klarna customer service, or affirm customer care.
      </li>
    </ul>

  </div>
</div>
</>

     
  );
};

export default Payment;
