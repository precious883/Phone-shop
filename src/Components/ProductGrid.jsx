import React, { useState } from "react";
import "./ProductGrid.css";
import { ShoppingBag } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../Constants";

function ProductGrid({ category, limit }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);

  // ✅ Correct filter logic
  let filteredProducts = PRODUCTS.filter((p) => {
    if (selectedSub) {
      return p.subcategory === selectedSub;
    } else if (selectedCategory) {
      return p.category === selectedCategory;
    }
    return true;
  });

  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit);
  }

  // ✅ WhatsApp number (replace with your business number)
  const whatsappNumber = "+2349060644639";

  return (
    <div className="shop-container">
      {/* Categories Section */}
      <div className="categories-bar">
        {CATEGORIES.map((cat) => (
          <div key={cat.name} className="category-block">
            <h3
              className={`category-title ${
                selectedCategory === cat.name ? "active" : ""
              }`}
              onClick={() => {
                setSelectedCategory(cat.name);
                setSelectedSub(null);
              }}
            >
              {cat.name}
            </h3>

            {selectedCategory === cat.name && (
              <div className="subcategory-bar">
                {cat.subcategories.map((sub) => (
                  <button
                    key={sub}
                    className={`subcategory-btn ${
                      selectedSub === sub ? "active" : ""
                    }`}
                    onClick={() => setSelectedSub(sub)}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {(selectedCategory || selectedSub) && (
          <button
            className="clear-btn"
            onClick={() => {
              setSelectedCategory(null);
              setSelectedSub(null);
            }}
          >
            Clear Filter
          </button>
        )}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {product.condition && (
                <div className="condition">{product.condition}</div>
              )}
            </div>
            <div className="product-info">
              <div className="product-header">
                <h3>{product.name}</h3>
              </div>
              <p className="description">{product.description}</p>

              {product.variants && (
                <ul className="variants">
                  {product.variants.map((v) => (
                    <li key={v.id}>
                      {v.name} — ₦{v.price.toLocaleString("en-NG")}
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=Hello, I'm interested in ${v.name} priced at ₦${v.price.toLocaleString("en-NG")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn"
                      >
                        <ShoppingBag size={16} /> Order via WhatsApp
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;