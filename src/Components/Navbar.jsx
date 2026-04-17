import React, { useState } from "react";
import "./Navbar.css";
import { Zap, ShoppingBag, ArrowLeftRight, Bitcoin, Menu, X, Truck, Users } from "lucide-react"; 
import logo from "../assets/smb logo.png";

function Navbar({ activeTab, setActiveTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: <Zap size={18} /> },
    { id: "shop", label: "Shop", icon: <ShoppingBag size={18} /> },
    { id: "swap", label: "Swap", icon: <ArrowLeftRight size={18} /> },
    { id: "crypto", label: "Crypto", icon: <Bitcoin size={18} /> },
    { id: "shipment", label: "Shipment", icon: <Truck size={18} /> },
    { id: "socials", label: "Socials", icon: <Users size={18} /> } // ✅ new Socials tab
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => setActiveTab("home")}>
          <img src={logo} alt="S.M.B Enterprise Logo" className="logo-img" />
          <span className="logo-text">S.M.B Enterprise</span>
        </div>

        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/2349060644639"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            Contact Us
          </a>
        </div>

        <div className="menu-toggle">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-btn">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMenuOpen(false);
              }}
              className={`mobile-item ${activeTab === item.id ? "active" : ""}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;