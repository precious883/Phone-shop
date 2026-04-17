import React, { useState } from "react";
import "./SwapSection.css";
import { ChevronRight } from "lucide-react";

function SwapSection() {
  const [formData, setFormData] = useState({
    currentPhone: "",
    condition: "Like New",
    targetPhone: "",
    contact: "",
  });

  const handleSwapSubmit = (e) => {
    e.preventDefault();
    const message = `Hello S.M.B Enterprise! I'd like to request a phone swap quote.%0A%0A📱 *Current Phone:* ${formData.currentPhone}%0A✨ *Condition:* ${formData.condition}%0A🎯 *Target Phone:* ${formData.targetPhone}%0A📞 *Contact:* ${formData.contact}`;
    window.open(`https://wa.me/2349060644639?text=${message}`, "_blank");
  };

  return (
    <div className="swap-container">
      <div className="swap-header">
        <h2>Phone Swap Service</h2>
        <p>Upgrade your lifestyle. Bring your old phone and walk away with a brand new one.</p>
      </div>

      <div className="swap-grid">
        <div className="swap-steps">
          <h3>How it works</h3>
          {[
            { step: "01", title: "Bring Your Device", desc: "Visit our shop or fill the form with your current phone details." },
            { step: "02", title: "Get Valuation", desc: "Our experts will assess your phone and give you the best market value." },
            { step: "03", title: "Pick Your Upgrade", desc: "Choose from our wide range of latest smartphones." },
            { step: "04", title: "Pay the Balance", desc: "Pay the difference and enjoy your new device instantly." },
          ].map((item) => (
            <div key={item.step} className="step">
              <div className="step-number">{item.step}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="swap-form">
          <h3>Request a Swap Quote</h3>
          <form onSubmit={handleSwapSubmit}>
            <label>Current Phone Model</label>
            <input
              type="text"
              required
              value={formData.currentPhone}
              onChange={(e) => setFormData({ ...formData, currentPhone: e.target.value })}
              placeholder="e.g. iPhone 12 Pro"
            />

            <label>Condition</label>
            <select
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
            >
              <option>Like New</option>
              <option>Good</option>
              <option>Fair (Scratches)</option>
              <option>Broken Screen</option>
            </select>

            <label>Target Phone</label>
            <input
              type="text"
              required
              value={formData.targetPhone}
              onChange={(e) => setFormData({ ...formData, targetPhone: e.target.value })}
              placeholder="e.g. iPhone 15 Pro"
            />

            <label>WhatsApp / Phone Number</label>
            <input
              type="tel"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              placeholder="+234 906 064 4639"
            />

            <button type="submit" className="swap-btn">
              Get Estimate on WhatsApp <ChevronRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SwapSection;