import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/zenpaws.png";
import { SiPetsathome } from "react-icons/si";

const Navbar = () => (
  <nav className="navbar">
 <img src={logo} alt="Logo" className="navbar-logo" />
<span className="navbar-title">Pet Therapy Shop</span>
  
    <Link to="/">Add</Link>
    <Link to="/update">Update</Link>
  </nav>
);

export default Navbar;