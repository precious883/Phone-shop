import React from "react";
import "./Hero.css";
import { Star, ChevronRight, Bitcoin, ArrowUpRight } from "lucide-react";
import RotatingImages from "./RotatingImages";



function Hero({ onShopClick, setActiveTab }) {
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
            {/* ✅ Swap Phone button now works */}
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
                    <ArrowUpRight size={12} /> +2.45%
                  </div>
                </div>
              </div>
              <div className="crypto-rate">
                <div className="rate">$65,432.10</div>
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