import React from "react";
import "./Access.css";

import Header1 from "../components/Header1"; 

export default function Access() {
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
          <h1>Accessibility and Live Stream Captioning
</h1>
          <p>Whatnew Support February 10, 2025 at 8:46 PM.</p>
        </div>
      </div>

{/* ===== Accessibility & Live Captioning Section ===== */}
<div className="accessibility-section-23">
  <div className="accessibility-content-23">

    <p>
      Inclusivity and accessibility are critical to <strong>WhatNew</strong>’s
      ethos and mission as a company. We are deeply committed to fostering an
      inclusive community and app by building products and tools that provide
      accessibility support natively or work with accessibility tools already
      available on your device or browser.
    </p>

    <p>
      Below, you’ll find information on how to enable <strong>live captioning</strong>
      in WhatNew streams, whether you’re using a mobile device or accessing
      WhatNew from a computer browser.
    </p>

    <h3>If you access WhatNew from your mobile device</h3>

    <ul>
      <li>
        <strong>iOS:</strong>{" "}
       
          Enable Live Captions on iPhone
    
      </li>
      <li>
        <strong>Android:</strong>{" "}
       
          Enable Live Caption on Android
   
      </li>
    </ul>

    <h3>If you access WhatNew from your computer browser</h3>

    <ul>
      <li>
        <strong>Mac:</strong>{" "}
      
          Use Live Captions on macOS
    
      </li>
      <li>
        <strong>PC (Windows 11, version 22H2 or later):</strong>{" "}
      
          Use Live Captions on Windows
    
      </li>
    </ul>

    <p className="note">
      <strong>Note:</strong> In addition to these options, your browser (for
      example, Chrome) may offer built-in live captioning functionality that can
      be enabled in browser settings.
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
