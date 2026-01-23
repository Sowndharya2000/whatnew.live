import React from "react";

import "./UpdateEmailPassword.css";
import Header1 from "../components/Header1"; 
export default function AboutUs() {
  return (
     <div>
   <Header1 />
       {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
           <a href="/Faq">Whatnew</a> /
      <a href="/account">Account</a> /{"Manage Your Account "}
          </nav>
          <h1>Update your Email and Password - Self Service</h1>
          <p>Whatnew Support  June 13, 2025 at 4:54 AM</p>
        </div>
      </div>

 <div className="account-section">
      <div className="account-content">
        <p>
          This article covers how users can update their <strong>email</strong> and <strong>password</strong>. 
          Also: users who created a WhatNew account through the 
          “Login with” <strong>Google / Facebook / Apple</strong> options can set a password 
          which will then allow them to log in with the associated email address 
          & newly created password via the “Login with Email” option.
        </p>

        <h2>How to change your email and password on the Web:</h2>
        <ol>
          <li>Open WhatNew on a web browser and click the profile icon in the top right corner. Or follow this link.</li>
          <li>Open the <strong>Settings</strong> tab.</li>
          <li>Select <strong>“Change Your Email”</strong> and enter your new email address.</li>
          <img
            src="/assets/account1.png"
            alt="Change Email Screenshot"
            className="account-image"
          />
          <li>Select <strong>“Change Your Password”</strong> and enter your updated password.</li>
          <img
             src="/assets/account 2.png"
            alt="Change Password Screenshot"
            className="account-image"
          />
        </ol>

        <p className="note">
          <strong>Note:</strong> Users will be required to enter their current password to update their email 
          or to set a new password. If you do not remember your password, you can follow 
          the password reset steps to regain access.
        </p>

        <h2>How to change your email and password on the App:</h2>
        <ol>
          <li>Open the WhatNew app and click the profile icon in the bottom right corner.</li>
          <img
           src="/assets/account3.png"
            alt="Profile Icon Example"
            className="account-image"
          />
          <li>Select the 2 menu lines in the top right corner.</li>
          <li>Scroll down to the <strong>Account Settings</strong> tab.</li>
          <img
            src="/assets/account4.png"
            alt="Settings Option Mobile"
            className="account-image"
          />
          <li>Scroll to the bottom and view <strong>Account Management</strong>.</li>
          <li>Select <strong>“Change Email”</strong> or <strong>“Change Password”</strong>.</li>
        </ol>

        <h2>How to set a password if you created an account via a Third Party (Google / Facebook / Apple):</h2>
        <p>
          Follow Steps 1 and 2 above, then click the <strong>“Set Password”</strong> option 
          and enter your updated password.
        </p>
 <img
            src="/assets/account5.png"
            alt="Settings Option Mobile"
            className="account-image"
          />

      </div>
 

    </div>
 {/* ===== Account Management Section ===== */}
<div className="section-box-32">
  <h2 className="section-title-32">Manage Your Account</h2>

  <div className="section-cards-32">
    <div className="section-links-32">

      <a href="/mobile-notifications" className="section-link-32">
        Setting up your Mobile App Notification Settings
      </a>

      <a href="/update-email-password" className="section-link-32">
        Update your Email and Password – Self Service
      </a>

      <a href="/multiple-accounts" className="section-link-32">
        Managing Multiple Accounts on Whatnew
      </a>

      <a href="/deleting-form" className="section-link-32">
        Whatnew Deleting Form
      </a>

      <a href="/support-system" className="section-link-32">
        Whatnew Support System
      </a>

    </div>
  </div>
</div>
</div>
  );
}