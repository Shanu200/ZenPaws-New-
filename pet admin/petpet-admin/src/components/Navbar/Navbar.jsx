import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Add</Link>
    <Link to="/update">Update</Link>
  </nav>
);

export default Navbar;