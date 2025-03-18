import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import d1 from "../../assets/Categorie Assest/Dogs/d1.jpg";
import f1 from "../../assets/Categorie Assest/Fishes/f1.webp";
import d2 from "../../assets/Categorie Assest/Dogs/d2.jpg";
import c2 from "../../assets/Categorie Assest/Cats/c2.jpeg";
import c3 from "../../assets/Categorie Assest/Cats/c3.jpg";

const initialCart = [
  {
    id: 1,
    name: "Golden Retriever",
    price: 60,
    quantity: 4,
    img: d1,  // Correct image reference
  },
  {
    id: 2,
    name: "Fish Type 1",
    price: 50,
    quantity: 3,
    img: f1,
  },
  {
    id: 3,
    name: "Labrador",
    price: 50,
    quantity: 1,
    img: d2,
  },
  {
    id: 4,
    name: "Persian Cat",
    price: 50,
    quantity: 3,
    img: c2,
  },
  {
    id: 5,
    name: "Siamese Cat",
    price: 60,
    quantity: 2,
    img: c3,
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
      <table className="w-full border-collapse text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Image</th>
            <th className="p-3">Pet Name</th>
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
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover mx-auto rounded-md"
                />
              </td>
              <td className="p-3">{item.name}</td>
              <td className="p-3">Rs.{item.price}</td>
              <td className="p-3 text-center">
                <button1
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="px-3 py-1 bg-gray-300 rounded-l cursor-pointer"
                >
                  -
                </button1>
                <span className="px-4">{item.quantity}</span>
                <button1
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="px-3 py-1 bg-gray-300 rounded-r cursor-pointer"
                >
                  +
                </button1>
              </td>
              <td className="p-3 text-center">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-orange-700 text-white px-4 py-1 rounded"
                >
                  Remove
                </button>
              </td>
              <td className="p-3">Rs. {item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right text-xl font-bold mt-4">
        Total: <span className="text-orange-700">Rs. {totalAmount}</span>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/categories")}
          className="bg-orange-700 text-white px-6 py-2 rounded"
        >
          Back to Categories
        </button>
        <button className="bg-orange-700 text-white px-6 py-2 rounded">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
