import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ItemDetails.css";

export const ItemDetails = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState(""); // For success message
  const { addToCart } = useCart();

  if (!product) return null;

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(
      {
        id: product._id,
        name: product.name,
        img: `http://localhost:8081${product.imageUrl}`,
        price: product.price,
      },
      quantity
    );

    setMessage(`${product.name} added to cart! ✅`);

    // Reset quantity if you want
    setQuantity(1);

    // Optionally close popup after 1.5s
    setTimeout(() => {
      setMessage("");
      onClose();
    }, 1500);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="itemproduct-container flex flex-col justify-between lg:flex-row lg:items-center">
          {/* Product Image */}
          <div>
            <img
              src={`http://localhost:8081${product.imageUrl}`}
              alt={product.name}
              style={{ width: "300px", height: "auto" }}
            />
          </div>

          {/* Product Details */}
          <div className="product-details">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p>
              <strong>Category:</strong> {product.type}
            </p>
            <p>
              <strong>Availability:</strong>{" "}
              {product.quantity > 0 ? (
                <span className="in-stock-text">In Stock</span>
              ) : (
                <span className="out-of-stock-text">Out of Stock</span>
              )}
            </p>
            <p>{product.description}</p>

            <div className="price-container">
              <span className="original-price">Rs {product.price}.00</span>
            </div>

            {/* Quantity Controls */}
            <div className="quantity-container flex items-center gap-2 mt-2">
              <label className="mr-2 font-bold">Quantity:</label>
              <button
                className="py-1 px-3 rounded-md text-violet-400 text-xl transition-all duration-300 hover:bg-orange-500 hover:text-white"
                onClick={decrementQuantity}
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                className="py-1 px-3 rounded-md text-violet-400 text-xl transition-all duration-300 hover:bg-orange-500 hover:text-white"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>

            <p className="mt-2">
              <strong>Subtotal:</strong> Rs {product.price * quantity}.00
            </p>

            {/* Action Buttons */}
            <div className="button-group flex gap-4 mt-4">
              <button
                className="booking-now bg-violet-500 text-white font-semibold py-3 px-5 rounded-xl transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>

            {/* Success Message */}
            {message && <p className="success-message">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
