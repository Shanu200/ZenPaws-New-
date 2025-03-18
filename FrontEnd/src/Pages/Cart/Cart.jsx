import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialCart = [
  {
    id: 1,
    name: "This is Car4",
    price: 60,
    quantity: 4,
    img: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "This is Car8",
    price: 50,
    quantity: 3,
    img: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "This is Car3",
    price: 50,
    quantity: 1,
    img: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    name: "This is Car7",
    price: 50,
    quantity: 3,
    img: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    name: "This is Car6",
    price: 60,
    quantity: 2,
    img: "https://via.placeholder.com/50",
  },
  {
    id: 6,
    name: "This is Car1",
    price: 10,
    quantity: 4,
    img: "https://via.placeholder.com/50",
  },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);
  const navigate = useNavigate();

  const handleQuantityChange = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto mt-10 p-6 bg-white shadow-md rounded-lg w-3/4">
      <h2 className="text-2xl font-bold text-center mb-4">Your Cart</h2>

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Small Cars</th>
            <th className="p-3">Name of Car</th>
            <th className="p-3">Price</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Remove</th>
            <th className="p-3">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="border">
              <td className="p-3 text-center">
                <img src={item.img} alt={item.name} className="w-12 mx-auto" />
              </td>
              <td className="p-3">{item.name}</td>
              <td className="p-3">${item.price}</td>
              <td className="p-3 text-center">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="px-2 py-1 bg-gray-300 rounded-l"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="px-2 py-1 bg-gray-300 rounded-r"
                >
                  +
                </button>
              </td>
              <td className="p-3 text-center">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded"
                >
                  Remove
                </button>
              </td>
              <td className="p-3">${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right text-xl font-bold mt-4">
        Total: <span className="text-orange-600">${totalAmount}</span>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/categories")}
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Back to Categories
        </button>
        <button className="bg-green-500 text-white px-6 py-2 rounded">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
