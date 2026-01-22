import React from "react";
import "./Address.css";

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
          <h1>Add or update your shipping address
</h1>
          <p>WhatNew Support June 27, 2025 at 10:11 PM.</p>
        </div>
      </div>

{/* ===== Shipping Address Section ===== */}
<div className="shipping-address-section-21">
  <div className="shipping-address-content-21">

    <p>
      Make sure your shipping address is correct before you buy on <strong>WhatNew</strong>.
      You can change your default shipping address at any time before you buy.
    </p>

    <p>
      For some orders, you can also update your address after purchase,
      if the seller hasn’t created a shipping label yet.
    </p>

    <h3>Add or edit your default shipping address</h3>

    <p>
      You can edit your shipping address anytime and set a default for future
      shows and orders.
    </p>

    <h4>Add or edit on the app</h4>
    <ul>
      <li>Tap <strong>Account</strong></li>
      <li>Scroll down and tap <strong>Addresses</strong></li>
      <li>
        Tap the <strong>+</strong> icon, or choose a saved address to edit or delete
      </li>
    </ul>

    <h4>Add or edit on WhatNew.com</h4>
    <ul>
      <li>Click your account icon in the top right</li>
      <li>Under the <strong>Buying</strong> tab, select <strong>Account Settings</strong></li>
      <li>Click <strong>Addresses</strong> on the left</li>
      <li>
        Click <strong>Add</strong>, or use the <strong>⋯</strong> icon next to an
        address to edit or delete
      </li>
    </ul>

    <p className="note">
      <strong>Tip:</strong> Watching a show? Tap the <strong>Wallet</strong> icon,
      then go to <strong>Shipping</strong> to quickly make changes to your address.
      Updates apply to future orders.
    </p>

    <h3>Update your shipping address after purchase</h3>

    <p>
      If the seller hasn’t created a shipping label yet, you may be able to update
      the shipping address for your order.
    </p>

    <p className="note">
      <strong>Note:</strong> This option is currently only available for buyers in
      the US, and not all orders are eligible.
    </p>

    <h4>Update on the app</h4>
    <ul>
      <li>Tap <strong>Activity</strong></li>
      <li>Open the order you want to update</li>
      <li>Tap the <strong>Shipping to</strong> section</li>
      <li>Choose a saved address or add a new one</li>
      <li>Tap <strong>Update</strong></li>
    </ul>

    <h4>Update on WhatNew.com</h4>
    <ul>
      <li>Click the <strong>Activity</strong> icon in the top right</li>
      <li>Under <strong>Purchases</strong>, open the order</li>
      <li>Under <strong>Shipment Details</strong>, click <strong>Edit</strong></li>
      <li>Edit the address, choose a saved one, or add a new address</li>
      <li>Save your changes</li>
    </ul>

    <p>
      The updated address will be applied automatically and used when the seller
      creates your shipping label. If the order is part of a bundle, all items will
      be shipped to the new address.
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
