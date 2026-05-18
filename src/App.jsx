import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ProductGrid from "./Components/ProductGrid";
import SwapSection from "./Components/SwapSection";
import CryptoSection from "./Components/CryptoSection";
import Shipment from "./Components/Shipment";
import Socials from "./Components/Socials";
import Footer from "./Components/Footer";
import useCryptoPrices from "./Components/useCryptoPrices"; // ✅ NEW LIVE PRICES HOOK
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  // ✅ Live crypto prices
  const prices = useCryptoPrices();

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <Hero setActiveTab={setActiveTab} />
            <section className="section">
              <div className="section-header center">
                <h2>Live Crypto Rates</h2>
                <p>Real-time market data for your digital assets.</p>
              </div>

              <div className="crypto-preview">
                {!prices ? (
                  <p>Loading...</p>
                ) : (
                  prices.map((rate) => (
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
                        {rate.change24h.toFixed(2)}%
                      </div>
                    </div>
                  ))
                )}
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

            <section className="section">
              <div className="section-header center">
                <h2>Featured Products</h2>
                <p>Top deals on premium smartphones and accessories.</p>
              </div>
              <ProductGrid limit={6} />
              <div className="center">
                <button
                  onClick={() => setActiveTab("shop")}
                  className="btn-secondary"
                >
                  View All Products
                </button>
              </div>
            </section>
          </>
        );

      case "shop":
        return <ProductGrid />;

      case "swap":
        return <SwapSection />;

      case "crypto":
        return <CryptoSection />;

      case "shipment":
        return <Shipment />;

      case "socials":
        return <Socials />;

      default:
        return <Hero setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
