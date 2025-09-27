import React from "react";
import { useCart } from "../../context/CartContext";
import "./Cart.css"; // Optional: Add your custom styling

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <h2 className="empty-cart">Your cart is empty 🛒</h2>;
  }

  const total = cart.reduce(
    (sum, item) => sum + parseInt(item.price) * item.quantity,
    0
  );

  const incrementQuantity = (item) => {
    addToCart(item, item.quantity + 1); // Update quantity in context
  };

  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      addToCart(item, item.quantity - 1); // Update quantity
    } else {
      removeFromCart(item.id); // Remove if quantity reaches 0
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item flex items-center gap-4">
          <img src={item.img} alt={item.name} width={80} />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <div className="quantity-controls flex gap-2 mt-1">
              <button onClick={() => decrementQuantity(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementQuantity(item)}>+</button>
            </div>
            <p>Price: Rs {item.price}.00</p>
            <p>Subtotal: Rs {item.price * item.quantity}.00</p>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <h3 className="cart-total">Total: Rs {total}.00</h3>
      <div className="cart-actions flex gap-4 mt-4">
        <button onClick={clearCart} className="clear-cart-btn">
          Clear Cart
        </button>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
