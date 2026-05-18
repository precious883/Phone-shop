import React, { useState } from "react";
import "./CryptoSection.css";
import {
  ArrowUpRight,
  ArrowDownRight,
  ArrowLeftRight,
  ShieldCheck,
  Zap,
  Phone,
} from "lucide-react";
import useCryptoPrices from "./useCryptoPrices"; // ✅ LIVE PRICES

function CryptoSection() {
  const [quantity, setQuantity] = useState(1);
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");
  const [currency, setCurrency] = useState("USD");

  // ✅ Fetch live crypto prices
  const prices = useCryptoPrices();

  // Find selected crypto
  const crypto = prices?.find((rate) => rate.symbol === selectedCrypto);

  const conversionRates = {
    USD: 1,
    EUR: 0.9,
    NGN: 1500,
  };

  const totalUSD = crypto ? crypto.price * quantity : 0;
  const convertedTotal = totalUSD * conversionRates[currency];

  const handleExchange = () => {
    const message = `Hello, I want to initiate a crypto exchange.
Crypto: ${selectedCrypto}
Quantity: ${quantity}
Estimated Value: ${convertedTotal.toLocaleString()} ${currency}`;

    const whatsappUrl = `https://wa.me/2349060644639?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="crypto-section">
      {/* =======================
          LIVE CRYPTO GRID
      ======================== */}
      <div className="crypto-grid">
        {!prices ? (
          <p>Loading live prices...</p>
        ) : (
          prices.map((rate) => (
            <div key={rate.symbol} className="crypto-card">
              <div className="crypto-header">
                <div className="crypto-icon">{rate.icon}</div>
                <div
                  className={`crypto-change ${
                    rate.change24h >= 0 ? "positive" : "negative"
                  }`}
                >
                  {rate.change24h >= 0 ? (
                    <ArrowUpRight size={14} />
                  ) : (
                    <ArrowDownRight size={14} />
                  )}
                  {Math.abs(rate.change24h).toFixed(2)}%
                </div>
              </div>

              <div className="crypto-name">{rate.name}</div>
              <div className="crypto-price">
                ${rate.price.toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>

      {/* =======================
          EXCHANGE CARD
      ======================== */}
      <div className="exchange-card">
        <div className="exchange-header">
          <h2>Instant Crypto Exchange</h2>
          <p>
            Fast, secure, and reliable crypto-to-cash or cash-to-crypto
            services. Best rates guaranteed.
          </p>
        </div>

        <div className="exchange-grid">
          <div className="exchange-form">
            {/* SEND SECTION */}
            <div className="form-box">
              <label>You Send</label>
              <div className="form-row">
                <input
                  type="number"
                  min="0"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />

                <select
                  value={selectedCrypto}
                  onChange={(e) => setSelectedCrypto(e.target.value)}
                >
                  {!prices ? (
                    <option>Loading...</option>
                  ) : (
                    prices.map((rate) => (
                      <option key={rate.symbol} value={rate.symbol}>
                        {rate.symbol}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>

            <div className="swap-icon">
              <ArrowLeftRight size={20} />
            </div>

            {/* RECEIVE SECTION */}
            <div className="form-box">
              <label>You Receive (Estimated)</label>
              <div className="form-row">
                <input
                  type="text"
                  readOnly
                  value={
                    crypto
                      ? convertedTotal.toLocaleString()
                      : "0"
                  }
                />

                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="NGN">NGN</option>
                </select>
              </div>
            </div>

            <button className="exchange-btn" onClick={handleExchange}>
              Initiate Exchange
            </button>
          </div>

          {/* FEATURES */}
          <div className="exchange-features">
            <div className="feature">
              <div className="feature-icon">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4>Secure Transactions</h4>
                <p>
                  All exchanges are protected by industry-standard encryption and
                  security protocols.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <Zap size={24} />
              </div>
              <div>
                <h4>Instant Payouts</h4>
                <p>Receive your funds within minutes of confirmation.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <Phone size={24} />
              </div>
              <div>
                <h4>24/7 Support</h4>
                <p>
                  Our dedicated team is always available to assist you with your
                  exchange.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoSection;
