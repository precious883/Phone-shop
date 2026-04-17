import React, { useState, useEffect } from "react";
import "./RotatingImages.css";

// Import images directly
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/m44.jpeg";

const images = [img2, img3, img4, img5, img6, img7, img8, img9, img10];


function RotatingImages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rotating-images">
      <img src={images[currentIndex]} alt="Promo" className="rotating-img" />
    </div>
  );
}


export default RotatingImages;