import React from "react";
import "./Hero.css";
import { Star, ChevronRight, Bitcoin, ArrowUpRight, ArrowDownRight } from "lucide-react";
import RotatingImages from "./RotatingImages";
import useCryptoPrices from "./useCryptoPrices"; // ✅ NEW LIVE PRICES HOOK

function Hero({ onShopClick, setActiveTab }) {
  // ✅ Get live crypto prices
  const prices = useCryptoPrices();
  const btc = prices?.find((rate) => rate.symbol === "BTC");
  const usdt = prices?.find((rate) => rate.symbol === "USDT");

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="badge">
            <Star size={14} />
            Premium Tech Solutions
          </div>
          <h1>
            Your Trusted Partner in{" "}
            <span className="highlight">Digital Assets</span> & Tech.
          </h1>
          <p>
            From the latest smartphones to seamless crypto exchanges to shipping
            and swapping, S.M.B Enterprise provides premium services for the modern
            digital era.
          </p>
          <div className="hero-buttons">
            <button onClick={onShopClick} className="btn-primary">
              Shop Now <ChevronRight size={20} />
            </button>
            <button
              className="btn-secondary"
              onClick={() => setActiveTab("swap")}
            >
              Swap Phone
            </button>
          </div>
          <div className="stats">
            <div>
              <div className="stat-number">10k+</div>
              <div className="stat-label">Customers</div>
            </div>
            <div className="divider" />
            <div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
            <div className="divider" />
            <div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Secure</div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <RotatingImages />
          <div className="floating-card">
            <div className="card-header">
              <div className="crypto-info">
                <div className="crypto-icon">
                  <Bitcoin size={24} />
                </div>
                <div>
                  <div className="crypto-title">BTC/USDT</div>
                  <div className="crypto-change">
                    {!btc ? (
                      "Loading..."
                    ) : btc.change24h >= 0 ? (
                      <>
                        <ArrowUpRight size={12} /> +{btc.change24h.toFixed(2)}%
                      </>
                    ) : (
                      <>
                        <ArrowDownRight size={12} /> {btc.change24h.toFixed(2)}%
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="crypto-rate">
                <div className="rate">
                  {!btc ? "$0.00" : `$${btc.price.toLocaleString()}`}
                </div>
                <div className="rate-label">Live Rate</div>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
