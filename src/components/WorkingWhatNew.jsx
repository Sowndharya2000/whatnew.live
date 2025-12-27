import React, { useState, useEffect } from "react";
import "./Working.css";

import Header2 from "../components/Header2";

export default function AboutUs() {
  return (
    <div>
      <Header2 />
      <div className="Working">
        <h1>Where passion meets persistence.</h1>
        <p>Build alongside the best as we help our community make a living doing what they love.</p>
      </div>

      {/* ---------------------- SECTION 2: CULTURE & QUOTES ---------------------- */}
      <section className="working-section">
        <h2>Set a new pace at Whatnew.</h2>
        <p>
          Do the best work of your career as we redefine commerce, expand into
          new markets, and set a pace others can’t match.
        </p>

        <div className="working-quotes">
          <blockquote>
            <p>
              “I love the passion and risk taking that happens here. When I’m
              here I feel like I’m constantly discovering what’s actually possible.”
            </p>
            <footer>— Laura Rothman, Senior Engineering Manager</footer>
          </blockquote>

          <blockquote>
            <p>
              “You have to possess a strong work ethic and a ton of humility 
              to thrive here.”
            </p>
            <footer>— Pierre Tettart, General Manager</footer>
          </blockquote>

          <blockquote>
            <p>
              “Because of Whatnew I’ve never been more comfortable being
              uncomfortable. I have total faith that whatever the task is,
              I'll figure it out.”
            </p>
            <footer>— Elisha Fronda, Influencer Marketing</footer>
          </blockquote>
        </div>
      </section>

<div className="wn-cards-container">
  <section className="wn-section">
    <h2>Hit the ground running</h2>
    <p>
      Ramping up doesn’t mean spinning your wheels. When you join Whatnew,
      you’ll immediately contribute to important work that impacts our
      community directly. Every member is focused on pushing the envelope
      and improving our customers’ experience.
    </p>

  </section>

  <section className="wn-section">
    <h2>Aim higher</h2>
    <p>
      Interning at Whatnew, you’ll work on practical, impactful challenges
      that help you sharpen your skills and set a higher trajectory for your
      career. You’re not just working alongside an exceptional team. You are
      part of an exceptional team.
    </p>
   
  </section>

  <section className="wn-section">
    <h2>Join the team</h2>
    <p>
      We’re laser-focused on pushing Whatnew forward and serving our
      community. Whatnew welcomes all ages, ethnicities, backgrounds, and
      orientations to our platform and our team.
    </p>
  </section>
</div>


    </div>
  );
}
