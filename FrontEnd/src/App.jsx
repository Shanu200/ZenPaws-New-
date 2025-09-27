import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/About-Us/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import SignForm from "./Pages/SignForm/SignForm";
import Categories from "./Pages/Categories/Categories";
import { Profile } from "./Pages/Profile/Profile";
import { Contact } from "./Pages/Contact-Us/Contact";
import { ItemDetails } from "./Pages/Items/ItemDetails";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<SignForm />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          {/* ItemDetails is shown in popup via Categories,
              but you can keep this route if needed */}
          <Route path="/item" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
