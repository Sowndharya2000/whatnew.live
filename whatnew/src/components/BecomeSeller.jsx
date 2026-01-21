import React, { useState, useEffect } from "react";
import "./BecomeSeller.css";

// Card data
const cardsData = [
  {
    title: "Your audience awaits",
    description:
      "Reach millions of eager buyers on Whatnew—shoppers as excited to discover your products as you are to sell them.",
  },
  {
    title: "You belong here",
    description:
      "Whether you’re new or seasoned, young or old, tech-savvy or just starting out—there’s a place for you on Whatnew. Our sellers earn an average of ₹25K a year!",
  },
  {
    title: "Sell your way",
    description:
      "On Whatnew, you can sell in real-time through live shows or list products in your store for buyers to shop at their own pace—or do both. The choice is yours!",
  },
];

// FAQ data
const faqs = [
  {
    question: "How do I get paid?",
    answer:
      "You’ll get paid 48–72 hours after your package is delivered. Payments first appear as Whatnew credit in your account, which you can easily cash out to your bank.",
  },
  {
    question: "How does shipping work?",
    answer:
      "We partner with services like USPS and Canada Post to ensure your order is delivered safely and securely. After you complete your sale, we’ll create a prepaid label so you can ship your item hassle-free.",
  },
  {
    question: "What are the fees?",
    answer:
      "8% commission on the item’s sold price. 2.9% + ₹0.30 payment processing fee on the entire transaction.",
  },
  {
    question: "When can I schedule a show?",
    answer:
      "You can schedule your show anytime! Viewership is consistent throughout the week.",
  },
  {
    question: "What can I sell?",
    answer:
      "We currently have 50+ categories – electronics, fashion, collectibles, beauty, live plants, and more.",
  },
  {
    question: "Is it safe?",
    answer:
      "Yes! Whatnew has best-in-class support and tools to ensure a smooth shopping experience.",
  },
];

// Fade-in animation hook
const useFadeIn = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in, .fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const HomePage = () => {
  useFadeIn();

  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div>
      {/* Promo */}
      <div className="promo-container fade-in">
        <div className="promo-content">
          <h1>Make more selling what you love.</h1>
          <p>Show and sell. Go live on Whatnew.</p>
        </div>
      </div>

      {/* Whatnew */}
      <div className="whatnew-container fade-up">
        <div className="whatnew-content">
          <h1>What is Whatnew?</h1>
          <p>
            Whatnew is a shopping experience like no other, where anyone can
            sell what they love.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="card-containers fade-in">
        {cardsData.map((card, i) => (
          <div className="card" key={i}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      {/* Sellers */}
      <div className="sellers-section fade-up">
        <div className="sellers-image">
          <img src="assets/Become1.jpg" alt="Selling on Whatnew" />
        </div>
        <div className="sellers-content">
          <h2>Discover why sellers are choosing Whatnew</h2>
          <h3>Make more selling your way</h3>
          <p>Customers buy 10× more here compared to other peer marketplaces.</p>
          <h3>Reach a huge audience</h3>
          <p>Connect with millions of buyers across the world.</p>
          <h3>We make it easy</h3>
          <p>Payments, shipping & tools — all handled for you.</p>
          <p className="source">
            * Source: Bloomberg Second Measure; March 31, 2023 — March 31, 2024
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="how-it-works-container fade-up">
        <h2>How It Works</h2>
      </div>

      {/* Feature */}
      <div className="feature-section fade-in">
        <div className="feature-left">
          <img src="assets/How.png" alt="Feature" />
        </div>
        <div className="feature-right">
          <h2>Sign up</h2>
          <p>Start your journey as a seller by signing up today.</p>
        </div>
      </div>

      {/* Reverse Section */}
      <div className="reverse-section fade-up">
        <div className="reverse-left">
          <h2>Powerful Features</h2>
          <p>When it comes to selling on Whatnew, you’ve got options.</p>

          <h2>Sell in a live show</h2>
          <ul>
            <li>Host shows and chat live.</li>
            <li>Run auctions, giveaways, or fixed price sales.</li>
          </ul>

          <h2>Sell from your store 24/7</h2>
          <ul>
            <li>List products shoppers can browse anytime.</li>
            <li>Earn even when you’re offline.</li>
          </ul>
        </div>

        <div className="reverse-right">
          <img src="assets/sell.png" alt="Sell Feature" />
        </div>
      </div>

      {/* Ship & Pay */}
      <div className="image-right-section fade-in">
        <div className="text-left">
          <h2>Ship and get paid</h2>
          <p>Use prepaid labels, ship products, get paid 48–72 hours after delivery.</p>
        </div>
        <div className="image-right">
          <img src="assets/ship.jpg" alt="Shipping" />
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-container fade-up">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${activeFAQ === i ? "active" : ""}`}
              onClick={() => toggleFAQ(i)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span>{activeFAQ === i ? "−" : "+"}</span>
              </div>
              {activeFAQ === i && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
