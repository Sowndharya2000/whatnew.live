import React from "react";
import "./Add.css";

import Header1 from "../components/Header1"; 

export default function Add() {
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
          <h1>Add and manage payment methods
</h1>
          <p>Whatnew Support July 16, 2025 at 7:53 PM.</p>
        </div>
      </div>

{/* ===== Payment Methods Section ===== */}
<div className="payment-methods-section-20">
  <div className="payment-methods-content-20">

    <p>
      <strong>When buying on WhatNew, available payment methods include:</strong>
    </p>

    <ul>
      <li>Payment cards like credit and debit cards</li>
      <li>PayPal</li>
      <li>Apple Pay (iOS)</li>
      <li>Google Pay (Android)</li>
      <li>Venmo</li>
      <li>iDEAL</li>
      <li>Affirm or Klarna (Buy Now, Pay Later)</li>
    </ul>

    <p className="note">
      <strong>Note:</strong> The payment methods available to you may depend on your
      device and location.
    </p>

    <h3>Add or edit your payment method</h3>

    <p>
      When you add or change a payment method, it becomes your default for future
      purchases — not just the current item or show. You can update your payment
      method anytime.
    </p>

    <p className="note">
      <strong>Note:</strong> The iOS and Android apps offer more options, so the steps
      below focus on the app. You can also make changes from the Payments page on
      whatnot.com.
    </p>

    <h3>From your account</h3>
    <ul>
      <li>Open the WhatNew app</li>
      <li>Tap <strong>Account</strong> at the bottom of the screen</li>
      <li>Select <strong>Payments & Shipping</strong></li>
      <li>Tap the pencil icon next to <strong>Add Payment Method</strong></li>
      <li>Choose a payment type</li>
      <li>Add a new method or choose one you’ve already saved</li>
    </ul>

    <h3>From a show</h3>
    <ul>
      <li>Tap the <strong>Wallet</strong> icon in the bottom right</li>
      <li>Tap <strong>Payment</strong></li>
      <li>Choose a payment type</li>
      <li>Add a new method or choose one you’ve already saved</li>
    </ul>

    <h3>From a Buy It Now item</h3>
    <ul>
      <li>Tap <strong>Buy Now</strong> when viewing the item</li>
      <li>Expand the <strong>Payment</strong> section</li>
      <li>Tap the pencil icon</li>
      <li>Choose a payment type</li>
      <li>Add a new method or choose one you’ve already saved</li>
    </ul>

    <h3>Remove a payment method</h3>

    <p>
      You can only remove a payment method if you’ve added more than one.
    </p>

    <ul>
      <li>Open the WhatNew app</li>
      <li>Tap <strong>Account</strong> at the bottom of the screen</li>
      <li>Select <strong>Payments & Shipping</strong></li>
      <li>Tap the pencil icon next to <strong>Add Payment Method</strong></li>
      <li>
        <strong>Credit or debit cards:</strong> Tap Edit, then tap the red X next to
        the card you want to remove
      </li>
      <li>
        <strong>PayPal, Apple Pay, Venmo, Google Pay:</strong> Tap to manage or remove
        the linked account (you may be redirected to the provider)
      </li>
    </ul>

    <p className="note">
      <strong>Trouble removing a payment method?</strong> Contact WhatNew Support.
      We can help remove most payment options, except Apple Pay, which must be
      managed through Apple.
    </p>

    <h3>FAQs</h3>

    <p>
      <strong>Can I change my payment method after purchase?</strong><br />
      No. You can’t change your payment method after a purchase, but you can update
      it for future purchases.
    </p>

    <p>
      <strong>Does WhatNew offer gift cards?</strong><br />
      No. WhatNew doesn’t offer gift cards at this time.
    </p>

    <p>
      <strong>How do I use a coupon to pay?</strong><br />
      Learn how to claim and use a coupon.
    </p>

    <p>
      <strong>What if my payment isn’t going through?</strong><br />
      Learn what to do if you see an error at checkout or your payment fails.
    </p>

  </div>
</div>


{/* ===== Getting Started Section ===== */}
<div className="getting-started-container-29">
  <h2 className="getting-started-title-29">Articles in this section</h2>

  <div className="getting-started-card-29">
    <div className="getting-started-links-29">
      <a href="/add-manage-payment-methods" className="getting-started-link-29">
        Add and manage payment methods
      </a>

      <a href="/shipping-address" className="getting-started-link-29">
        Add or update your shipping address
      </a>

      <a href="/update-username" className="getting-started-link-29">
        Updating Your Whatnew Username
      </a>

      <a href="/accessibility-captioning" className="getting-started-link-29">
        Accessibility and Live Stream Captioning
      </a>
    </div>
  </div>
</div>




</div>




     
 
  );
}
