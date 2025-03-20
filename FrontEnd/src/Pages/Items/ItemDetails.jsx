import React, { useState } from 'react'
import d6 from "../../assets/Categorie Assest/Dogs/d6.jpeg";
import p1 from "../../assets/logo.png";
import "./ItemDetails.css";
import { Link } from "react-router-dom";

export const ItemDetails = () => {

      const [quantity, setQuantity] =useState(1);
      const price = 500;
      const originalPrice = 900;

      const incrementQuantity = () => {
        setQuantity(quantity + 1);
      };

      const decrementQuantity = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };


  return (
    <div className="itempage-wrapper ">
      <div className="itemproduct-container flex flex-col justify-between lg:flex-row  lg:items-center">
        <div>
          <img
            src={d6}
            alt="Golden Retriever"
            style={{ width: "700px", height: "auto", right: "50px" }}
          />
        </div>

        <div className="product-details">
          <h1 className="text-3xl font-bold ">Golden Retriever</h1>
          <div className="review-summary flex items-center">
            <div className="stars text-yellow-500">
              <span>★★★★★</span>
              <span>☆</span>
            </div>

            <div className="rating-text ml-2">
              <span className="text-lg font-bold">4.7</span>
              <span className="text-lg"> 126 Reviews</span>
            </div>
          </div>

          <p>
            <strong>Availability:</strong>{" "}
            <span className="in-stock-text">in stock</span>
          </p>

          <p>
            <strong>Category:</strong> Dog
          </p>

          <p>Golden Retrievers are friendly, intelligent, and loyal dogs,</p>
          <p>known for their gentle nature and versatility as family </p>
          <p>pets and service animals</p>
          <div className="price-container">
            <span className="original-price">Rs {originalPrice}.00</span>
            <span className="discounted-price">Rs {price}.00</span>
            <span className="savings">
              (You save: Rs {originalPrice - price}.00)
            </span>
          </div>

          <div className="quantity-container">
            <label>
              <strong>Quantity:</strong>
            </label>

            <button
              className=" py-2 px-5 rounded-lg text-violet-400 text-3xl transition-all duration-300 hover:bg-orange-500 hover:text-white"
              onClick={decrementQuantity}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className=" py-2 px-5 rounded-lg text-violet-400 text-3xl transition-all duration-300 hover:bg-orange-500 hover:text-white"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>

          <p>
            <strong>Subtotal:</strong> Rs {price * quantity}.00
          </p>

          <div className="button-group flex gap-4">
            <button className="booking-now bg-violet-500 text-white font-semibold py-4 px-5 rounded-xl h-full transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
              Book now
            </button>
            <Link to ="/Cart">
            <button className="add-to-cart text-white font-semibold py-4 px-5 rounded-xl h-full transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
              Add to Cart
            </button>
            </Link>
          </div>

          <img src={p1} alt="" style={{ width: "250px", height: "auto" }} />
        </div>
      </div>
    </div>
  );
}