import React from "react";
import "./contact1.css";

import Header1 from "../components/Header1";

export default function contact1() {
  return (
    <div>
      <Header1 />

      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">Whatnew</a> /
          <span>General</span>
          </nav>
          <h1>Contact Whatnew Support</h1>
          <p>Whatnew Support July 17, 2025 at 7:24 PM</p>
        </div>
      </div>

      {/* ===== Support Help Section ===== */}
     <div className="support-help-section">
  <div className="support-help-content">

    <h2 className="support-help-title">Need more help?</h2>
    <p className="support-help-intro">
      If you didn’t find what you need in the help center, here’s how to
      get support from our team.
    </p>

    <h3>On this page:</h3>
    <ul className="support-help-list">
      <li>Buyers: get help with an order</li>
      <li>Sellers: get quick help or support with an order</li>
      <li>Get help with your account or other issues</li>
      <li>After you contact us</li>
    </ul>

    {/* ===== Buyers section ===== */}
    <h2 className="support-subtitle">Buyers: get help with an order</h2>
    <p>
      If something’s wrong with your order, you can request help through
      the app or website.
    </p>

    <h3>In the whatnew app:</h3>
    <ol>
      <li>Tap <strong>Activity</strong> at the bottom of the screen.</li>
      <li>Go to <strong>Purchases</strong>.</li>
      <li>Tap the order you need help with.</li>
      <li>Choose <strong>Get help with this purchase</strong>.</li>
      <li>Select the option that best matches your issue.</li>
    </ol>

    <h3>On whatnew.com:</h3>
    <ol>
      <li>Sign in to <strong>Whatnew.com</strong>.</li>
      <li>Click the <strong>Activity</strong> icon in the top right.</li>
      <li>Click the <strong>Purchases</strong> tab.</li>
      <li>Find and click the order you need help with.</li>
      <li>
        Scroll down and select <strong>Get help with this purchase</strong>.
      </li>
      <li>Select the option that best matches your issue.</li>
    </ol>

    <p>
      Sharing clear evidence helps resolve things more quickly. If you’re
      looking for a refund, start by following the steps above. We’ll
      review your request and update you soon.
    </p>

    {/* ===== Sellers section ===== */}
    <h2 className="support-subtitle">
      Sellers: get quick help or support with an order
    </h2>
    <p>You can get help in two ways:</p>

    <h3>Option 1: chat with whatnew</h3>
    <p>
      Whatnew is our 24/7 messaging assistant on whatnew.com. It can
      answer quick questions or connect you to the support team if needed.
    </p>
    <ol>
      <li>Sign in to <strong>Whatnew.com</strong>.</li>
      <li>Click your account icon in the top right.</li>
      <li>From the <strong>Selling</strong> tab, open your seller hub.</li>
      <li>Click <strong>Support chat</strong> from the left menu.</li>
    </ol>

    <p className="note">
      <strong>Note:</strong> Whatnew is a support tool, not a live agent.
      It can’t make decisions or commitments on behalf of whatnew.
    </p>

    <h3>Option 2: get help with an order</h3>
    <ol>
      <li>Open the whatnew app.</li>
      <li>Tap <strong>Seller hub</strong> at the bottom of the screen.</li>
      <li>Tap the menu icon (☰) in the top right.</li>
      <li>Select <strong>Orders</strong>.</li>
      <li>Choose the order you need help with.</li>
      <li>Tap <strong>Get help with this order</strong>.</li>
      <li>Select the option that best matches your issue.</li>
    </ol>

    {/* ===== Account help section ===== */}
    <h2 className="support-subtitle">
      Get help with your account or other issues
    </h2>
    <ol>
      <li>Open the whatnew app.</li>
      <li>Tap the <strong>Account</strong> icon at the bottom.</li>
      <li>Scroll down and tap <strong>Contact us</strong>.</li>
      <li>Select the option that best matches your issue.</li>
    </ol>

    {/* ===== After contact section ===== */}
    <h2 className="support-subtitle">After you contact us</h2>
    <ul>
      <li>
        A team member will reach out to help, usually within{" "}
        <strong>48 hours</strong>.
      </li>
      <li>
        You’ll get a confirmation email with your ticket number — search
        your inbox for <strong>“Whatnew support”</strong> if you don’t see
        it.
      </li>
    </ul>

  </div>
</div>

    </div>
  );
}
