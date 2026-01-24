import React from "react";
import "./Shipping.css";
import Header1 from "./Header1";

export default function AboutUs() {
  return (
    <>
          <Header1 />
   
  <div className="banner-section">
    <div className="overlay">
      <nav className="breadcrumb">
        <a href="/Faq">Whatnew</a> / <span>General</span>
      </nav>
      <h1>Track your order</h1>
      <p>Whatnew support july 12, 2025 at 2:53 am.</p>
    </div>
  </div>



   



    <div className="shipping-section">
  <div className="shipping-content">

    <p>
      This article is aimed at educating our buyers on how shipping works on whatnew.
      We understand these can be complicated and users want clarity,
      so we wanted to provide some examples on how you will be charged for shipping
      on your orders.
    </p>

    <h2>Shipping rates overview</h2>
    <ul>
      <li>
        <strong>Lighter packages (less than 1 lb):</strong>
        whatnew charges commercial usps ground advantage package service rates.
      </li>

      <li>
        <strong>Usps first-class mail letter service rates:</strong>
        <ul>
          <li>Weighs less than 3 ounces</li>
          <li>Total value is less than ₹20</li>
          <li>Only sports cards, tcg, or stickers (max 5 cards)</li>
          <li>Ships from a us address to another us address</li>
        </ul>
        <p>Learn more about usps first-class mail letter shipping</p>
      </li>

      <li>
        <strong>Packages 1–5 lbs:</strong>
        ₹9.21 (₹8.77 + fees)* via usps priority mail within the us
        (excluding hawaii, alaska, u.s. territories, and military bases).
      </li>

      <li>
        <strong>Packages 5–70 lbs:</strong>
        shipped via usps priority mail by default, or usps ground advantage if opted in.
        pricing starts at ₹8.91 based on weight, distance, and dimensions.
      </li>
    </ul>

    <h2>Example: shipping costs in a livestream</h2>
    <p>
      Suppose a buyer in los angeles, ca, purchases a pack of sports cards
      from a seller in boston, ma.
    </p>

    <ul>
      <li>Zone 8 shipment (cross-country)</li>
      <li>4 oz package → ₹4.13 to ship via usps ground advantage</li>
      <li>Second 4 oz pack → additional ₹0.31 (₹4.44 total)</li>
      <li>Adding sneakers (2 lbs) → extra ₹3.91 (total ₹9.21)</li>
      <li>Up to 5 lbs: no extra shipping beyond ₹9.21</li>
      <li>Beyond 5 lbs: usps priority mail rates apply</li>
    </ul>

    <p>
      Bundling logic also applies to marketplace orders.
      Orders are bundled until the seller prints the label.
      Marketplace and livestream purchases are not bundled together.
    </p>

    <h2>Livestream shipping nuances</h2>
    <ul>
      <li>
        Sellers can offer <strong>Free or reduced shipping</strong> to buyers.
      </li>
      <li>
        For shipments over 5 lbs, sellers may use
        <strong> flat-rate (₹9.21)</strong> or
        <strong> ground advantage (from ₹8.91)</strong>.
      </li>
      <li>
        <strong>Whatnew smart bundling™</strong> automatically combines or splits
        shipments to minimize cost.
      </li>
      <li>
        Large items over 1 cubic foot are charged by
        <strong> dimensional weight</strong>.
      </li>
    </ul>

  </div>
</div>
</>

  );
}
