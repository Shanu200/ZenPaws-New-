import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SiPetsathome } from "react-icons/si";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/aboutus" },
  { id: 3, title: "Categories", link: "/categories" },
  { id: 4, title: "Contact", link: "/contact" },
  { id: 5, title: "Login", link: "login" },
 
];

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".profile-menu") === null) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white shadow-md">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="container flex justify-between items-center py-4 md:py-4  "
      >
        {/* Logo and Title */}
        <div className="text-4xl ml-5 flex items-center font-bold uppercase">
          <p className="text-orange-600 font-bold text-lg">Pet</p>
          <p className="text-orange-600 font-bold text-lg mx-1">Therapy</p>
          <p className="text-orange-600 font-bold text-lg">Shop</p>
          <SiPetsathome className="text-gray-500 ml-2" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-5 text-gray-600">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="text-xl">
                <Link
                  to={menu.link}
                  className="inline-block py-1 px-3 hover:shadow-[0_3px_0-1px_#ef4444] font-semibold"
                >
                  {menu.title}
                </Link>
              </li>
            ))}

            <Link
              to="/cart"
              className="text-2xl hover:bg-orange-600 hover:text-white rounded-full p-2 duration-200"
            >
              <MdOutlineShoppingCart />
            </Link>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <MdMenu
            className="text-4xl cursor-pointer"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>

        {/* Search Input */}
        <div className="flex items-center gap-x-5">
          <div className="relative md:w-64 mr-6">
            <span className="absolute inset-y-0 left-2 flex items-center">
              <button1 className="p-1 focus:outline-none text-gray-500">
                <FaSearch />
              </button1>
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 shadow-sm hidden md:block"
            />
          </div>

          {/* Profile Menu */}
          <div className="relative profile-menu">
            <button3
              className="mr-5 text-black flex items-center focus:outline-none group"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <FaUserCircle className="w-8 h-8 text-gray-500" />
            </button3>
            {isDropdownOpen && (
              <div className="z-10 absolute bg-white rounded-lg shadow-lg w-40 mt-2 top-full right-0 border border-gray-200">
                <ul className="py-2 text-sm text-gray-950">
                  <li>
                    <a
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <ul className="flex flex-col gap-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className="text-lg font-semibold hover:bg-gray-600 px-4 py-2 block"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
            <div className="flex justify-between items-center mt-4">
              <button className="text-xl">
                <MdOutlineShoppingCart />
              </button>
              <div className="relative">
                <button
                  className="text-white flex items-center focus:outline-none"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                  <FaUserCircle className="w-8 h-8" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute bg-white text-gray-800 rounded-lg shadow-lg w-40 mt-2 right-0 border border-gray-200">
                    <ul className="py-2 text-sm">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        >
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
