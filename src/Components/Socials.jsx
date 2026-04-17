import React from "react";
import "./Socials.css";
import bannerImg from "../assets/5.jpg"; // ✅ place your image in /src/assets

export default function Socials() {
  const whatsappLink = "https://wa.me/2349060644639"; // replace with your number

  const socialAccounts = [
    { id: 1, name: "Facebook Account" },
    { id: 2, name: "Instagram Account" },
    { id: 3, name: "TikTok Account" },
    { id: 4, name: "X.com Account" },
    { id: 5, name: "Reddit Account" },
  ];

  const vpnServices = [
    { id: 6, name: "NordVPN" },
    { id: 7, name: "ExpressVPN" },
    { id: 8, name: "Surfshark" },
    { id: 9, name: "IPVanish" },
    { id: 10, name: "HMA VPN" },
  ];

  const esimNumbers = [
    { id: 11, name: "USA eSIM Number" },
    { id: 12, name: "Yankee eSIM" },
    { id: 13, name: "UK eSIM Number" },
  ];

  const Section = ({ title, items }) => (
    <div className="socials-section">
      <h2 className="section-title">{title}</h2>
      <div className="socials-grid">
        {items.map((item) => (
          <div key={item.id} className="social-card">
            <h4>{item.name}</h4>
            <a
              href={`${whatsappLink}?text=I am interested in ${item.name} and would like to know more about the country and price.`}
              target="_blank"
              rel="noopener noreferrer"
              className="cart-btn"
            >
              🛒 Contact via WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="socials-container">
      {/* ✅ Banner Section */}
      <div className="socials-banner">
        <div className="banner-text">
          <h1>Socials Marketplace</h1>
          <p>Buy accounts, VPNs, and eSIM numbers — connect instantly via WhatsApp.</p>
        </div>
        <div className="banner-image">
          <img src={bannerImg} alt="Socials Banner" />
        </div>
      </div>

      {/* Sections */}
      <Section title="Social Media Accounts" items={socialAccounts} />
      <Section title="VPN Services" items={vpnServices} />
      <Section title="eSIM Numbers" items={esimNumbers} />
    </div>
  );
}