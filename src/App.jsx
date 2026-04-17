import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ProductGrid from "./Components/ProductGrid";
import CryptoSection from "./Components/CryptoSection";
import SwapSection from "./Components/SwapSection";
import Footer from "./Components/Footer";
import Shipment from "./Components/Shipment";
import Socials from "./Components/Socials"; // ✅ new import
import { CRYPTO_RATES } from "./Constants";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-content">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* ✅ Pass setActiveTab into Hero */}
              <Hero
                onShopClick={() => setActiveTab("shop")}
                setActiveTab={setActiveTab}
              />

              {/* Featured Section */}
              <section className="section">
                <div className="section-header">
                  <div>
                    <h2>Featured Products</h2>
                    <p>Handpicked premium tech for you.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab("shop")}
                    className="link-btn"
                  >
                    View All <ChevronRight size={18} />
                  </button>
                </div>
                <ProductGrid limit={6} />
              </section>

              {/* Crypto Preview */}
              <section className="section">
                <div className="section-header center">
                  <h2>Live Crypto Rates</h2>
                  <p>Real-time market data for your digital assets.</p>
                </div>
                <div className="crypto-preview">
                  {CRYPTO_RATES.map((rate) => (
                    <div key={rate.symbol} className="crypto-card-preview">
                      <div>
                        <div className="crypto-name">{rate.name}</div>
                        <div className="crypto-price">
                          ${rate.price.toLocaleString()}
                        </div>
                      </div>
                      <div
                        className={`crypto-change ${
                          rate.change24h >= 0 ? "positive" : "negative"
                        }`}
                      >
                        {rate.change24h >= 0 ? "+" : ""}
                        {rate.change24h}%
                      </div>
                    </div>
                  ))}
                </div>
                <div className="center">
                  <button
                    onClick={() => setActiveTab("crypto")}
                    className="btn-secondary"
                  >
                    Go to Exchange
                  </button>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === "shop" && (
            <motion.div
              key="shop"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="section"
            >
              <div className="shop-header">
                <div>
                  <h1>Premium Shop</h1>
                  <p>Explore our New collection of phones and accessories.</p>
                  <span>contact us on whatsapp for UK used phones at affordable prices, SMB got you covered</span>
                </div>
                <div className="shop-filters">
                  <button className="filter active">All</button>
                  <button className="filter">Phones</button>
                  <button className="filter">Accessories</button>
                </div>
              </div>
              <ProductGrid />
            </motion.div>
          )}

          {activeTab === "swap" && (
            <motion.div
              key="swap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="section"
            >
              <SwapSection />
            </motion.div>
          )}

          {activeTab === "crypto" && (
            <motion.div
              key="crypto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="section"
            >
              <CryptoSection />
            </motion.div>
          )}

          {activeTab === "shipment" && (
            <motion.div
              key="shipment"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="section"
            >
              <Shipment />
            </motion.div>
          )}

          {activeTab === "socials" && (
            <motion.div
              key="socials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="section"
            >
              <Socials />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/2349060644639"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="whatsapp-btn"
      >
        <Phone size={28} />
        <span className="ping-dot" />
      </motion.a>
    </div>
  );
}