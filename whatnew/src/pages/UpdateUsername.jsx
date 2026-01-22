import React from "react";
import "./update.css";

import Header1 from "../components/Header1"; 

export default function update() {
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
          <h1>Updating Your Whatnew Username
</h1>
          <p>Whatnew Support June 7, 2025 at 12:52 AM.</p>
        </div>
      </div>

{/* ===== Username Update Section ===== */}
<div className="username-update-section-22">
  <div className="username-update-content-22">

    <p className="note">
      <strong>Note:</strong> If you have pending orders, you will not be able to
      update your username.
    </p>

    <h3>How to update your username on the WhatNew mobile app</h3>
    <ul>
      <li>
        Visit your profile by selecting the <strong>profile icon</strong> on the
        bottom right of the screen
      </li>
      <li>
        Tap <strong>View Profile</strong> at the top of the screen next to your
        username
      </li>
      <li>Tap <strong>Edit Profile</strong></li>
      <li>
        Tap the <strong>Username</strong> field and type in your new username
      </li>
      <li>
        Tap <strong>Save</strong> at the top right of the screen to save your new
        username
      </li>
    </ul>

    <h3>How to update your username on web</h3>
    <ul>
      <li>Access your profile from the top right corner</li>
      <li>Click <strong>Account Settings</strong></li>
      <li>
        Click <strong>View Profile</strong> in the left-hand column
      </li>
      <li>
        Click <strong>Edit Profile</strong> in the top right
      </li>
      <li>
        Tap into the <strong>Username</strong> field and enter your new username
      </li>
      <li>
        Click <strong>Save Changes</strong> to save your new username
      </li>
    </ul>

    <p className="note">
      <strong>Important:</strong> The name in the <strong>Name</strong> field is
      displayed on your profile home page. If you’d like to change your name and
      keep it private, please contact our support team.
    </p>

    <p className="note">
      <strong>Note:</strong> We encourage you to keep your account active. Long
      periods of inactivity may lead to an automatic username change or account
      deactivation.
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
