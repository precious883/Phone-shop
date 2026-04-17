import React from "react";
import "./Footer.css";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, MessageCircle } from "lucide-react";
import logo from "../assets/smb logo.png";
import tiktokLogo from "../assets/Tiktok.png"; // ✅ your TikTok image


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src={logo} alt="Shalo-Money Logo" className="logo-img" />
            <span className="logo-text">S.M.B Enterprise</span>
          </div>
          <p className="about">
            Premium phone store and crypto exchange hub. We provide the best deals on smartphones,
            accessories, and digital assets.
          </p>
          <div className="socials">
            <a href="https://www.instagram.com/shalo_money07?igsh=MWl2ZzNzMXBoNmNkaA==" className="social-btn"><Instagram size={18} /></a>
            <a
              href="https://wa.me/2349060644639"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="https://tiktok.com/@shalo_money07?_t=ZS-8wTuYJ2D88g&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <img src={tiktokLogo} alt="TikTok" className="social-icon" />
            </a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Shop Phones</li>
            <li>Accessories</li>
            <li>Crypto Rates</li>
            <li>Swap Program</li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Help Center</li>
            <li>Contact Support</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <MapPin size={16} /> 1 Apepele street, suite 48 Computer Village Ikeja Lagos, Nigeria
            </li>
            <li>
              <Phone size={16} /> <a href="tel:+2349060644639">+234 906 064 4639</a>
            </li>
            <li>
              <Mail size={16} /> shalokpeo@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2024 S.M.B Enterprise. All Rights Reserved.</div>
        <div className="footer-tags">
          <span>Designed for Excellence</span>
          <span>Secure Payments</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;