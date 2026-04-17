import React, { useState } from "react";
import "./Shipment.css";
import shipmentImage from "../assets/4.jpg"; // ✅ add an image file in your assets folder

function Shipment() {
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [address, setAddress] = useState("");
  const [product, setProduct] = useState("");

  const sendToWhatsApp = () => {
    const message = `Hello, my name is ${senderName}.
I want to get a shipment estimate.
Receiver: ${receiverName}
Receiver Phone: ${receiverPhone}
Delivery Address: ${address}
Item/Product: ${product}`;

    const whatsappUrl = `https://wa.me/2349060644639?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="shipment">
      <h2>Shipment & Estimate</h2>
      <p>Fill out the form below to get a shipment estimate via WhatsApp.</p>

      <div className="shipment-content">
        {/* Left side form */}
        <div className="shipment-form">
          <input
            type="text"
            placeholder="Your Name"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            className="shipment-input"
          />
          <input
            type="text"
            placeholder="Receiver's Name"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            className="shipment-input"
          />
          <input
            type="text"
            placeholder="Receiver's Phone Number"
            value={receiverPhone}
            onChange={(e) => setReceiverPhone(e.target.value)}
            className="shipment-input"
          />
          <input
            type="text"
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="shipment-input"
          />
          <input
            type="text"
            placeholder="Item / Product to be Sent"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="shipment-input"
          />
          <button className="shipment-btn" onClick={sendToWhatsApp}>
            Send to WhatsApp
          </button>
        </div>

        {/* Right side image */}
        <div className="shipment-image">
          <img src={shipmentImage} alt="Shipment Illustration" />
        </div>
      </div>
    </section>
  );
}

export default Shipment;