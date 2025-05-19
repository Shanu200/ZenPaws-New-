import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import { ItemDetails } from "../Items/ItemDetails";
import d1 from "../../assets/Categorie Assest/Dogs/d1.jpg";
import f1 from "../../assets/Categorie Assest/Fishes/f1.webp";
import d2 from "../../assets/Categorie Assest/Dogs/d2.jpg";
import c2 from "../../assets/Categorie Assest/Cats/c2.jpeg";
import c3 from "../../assets/Categorie Assest/Cats/c3.jpg";
import r5 from "../../assets/Categorie Assest/Rabbits/r5.png";
import h5 from "../../assets/Categorie Assest/Hamsters/h5.jpg";
import f6 from "../../assets/Categorie Assest/Fishes/f6.jpg";
import r1 from "../../assets/Categorie Assest/Rabbits/r1.jpg";
import d3 from "../../assets/Categorie Assest/Dogs/d3.jpg";
import f3 from "../../assets/Categorie Assest/Fishes/f3.avif";
import d4 from "../../assets/Categorie Assest/Dogs/d4.jpg";
import c1 from "../../assets/Categorie Assest/Cats/c1.jpg";
import h1 from "../../assets/Categorie Assest/Hamsters/h1.avif";
import r2 from "../../assets/Categorie Assest/Rabbits/r2.jpg";
import h2 from "../../assets/Categorie Assest/Hamsters/h2.jpg";
import c4 from "../../assets/Categorie Assest/Cats/c4.jpg";
import r3 from "../../assets/Categorie Assest/Rabbits/r3.jpg";
import f2 from "../../assets/Categorie Assest/Fishes/f2.avif";
import d5 from "../../assets/Categorie Assest/Dogs/d5.avif";
import h4 from "../../assets/Categorie Assest/Hamsters/h4.jpg";
import d6 from "../../assets/Categorie Assest/Dogs/d6.jpeg";
import c5 from "../../assets/Categorie Assest/Cats/c5.jpg";
import f4 from "../../assets/Categorie Assest/Fishes/f4.jpg";
import r4 from "../../assets/Categorie Assest/Rabbits/r4.jpg";
import h3 from "../../assets/Categorie Assest/Hamsters/h3.jpg";

const Categories = () => {
  const products = [
    {
      id: 1,
      name: "Golden Retriever",
      price: "Rs.500",
      category: "Dogs",
      img: d6,
      reviews: 5.0,
      reviewCount: 523,
    },
    {
      id: 2,
      name: "Betta Fish",
      price: "Rs.350",
      category: "Fishes",
      img: f1,
      reviews: 5.0,
      reviewCount: 300,
    },
    {
      id: 3,
      name: "Chihuahua",
      price: "Rs.250",
      category: "Dogs",
      img: d2,
      reviews: 4.8,
      reviewCount: 220,
    },
    {
      id: 4,
      name: "Siberian",
      price: "Rs.150",
      category: "Cats",
      img: c2,
      reviews: 4.5,
      reviewCount: 145,
    },
    {
      id: 5,
      name: "Harlequin",
      price: "Rs.450",
      category: "Rabbits",
      img: r5,
      reviews: 5.6,
      reviewCount: 250,
    },
    {
      id: 6,
      name: "Persian",
      price: "Rs.250",
      category: "Cats",
      img: c3,
      reviews: 4.5,
      reviewCount: 160,
    },
    {
      id: 7,
      name: "Golden Hamster",
      price: "Rs.350",
      category: "Hamsters",
      img: h5,
      reviews: 4.8,
      reviewCount: 140,
    },
    {
      id: 8,
      name: "Koi Fish",
      price: "Rs.250",
      category: "Fishes",
      img: f6,
      reviews: 5.8,
      reviewCount: 200,
    },
    {
      id: 9,
      name: "American Fuzzy Lop",
      price: "Rs.350",
      category: "Rabbits",
      img: r1,
      reviews: 4.6,
      reviewCount: 150,
    },
    {
      id: 10,
      name: "Shih Tzu",
      price: "Rs.450",
      category: "Dogs",
      img: d3,
      reviews: 5.6,
      reviewCount: 250,
    },
    {
      id: 11,
      name: "Neon Testras",
      price: "Rs.220",
      category: "Fishes",
      img: f3,
      reviews: 4.6,
      reviewCount: 150,
    },
    {
      id: 12,
      name: "Yorkshire Terrier",
      price: "Rs.150",
      category: "Dogs",
      img: d4,
      reviews: 4.6,
      reviewCount: 186,
    },
    {
      id: 13,
      name: "Birman",
      price: "Rs.350",
      category: "Cats",
      img: c1,
      reviews: 4.6,
      reviewCount: 176,
    },
    {
      id: 14,
      name: "Syrian",
      price: "Rs.150",
      category: "Hamsters",
      img: h1,
      reviews: 4.6,
      reviewCount: 196,
    },
    {
      id: 15,
      name: "Mini Rex",
      price: "Rs.150",
      category: "Rabbits",
      img: r2,
      reviews: 4.6,
      reviewCount: 206,
    },
    {
      id: 16,
      name: "Roborovski",
      price: "Rs.120",
      category: "Hamsters",
      img: h2,
      reviews: 3.6,
      reviewCount: 110,
    },
    {
      id: 17,
      name: "Ragdoll",
      price: "Rs.220",
      category: "Cats",
      img: c4,
      reviews: 5.6,
      reviewCount: 250,
    },
    {
      id: 18,
      name: "Netherland Dwarf",
      price: "Rs.500",
      category: "Rabbits",
      img: r3,
      reviews: 5.6,
      reviewCount: 350,
    },
    {
      id: 19,
      name: "Goldfish",
      price: "Rs.450",
      category: "Fishes",
      img: f2,
      reviews: 4.6,
      reviewCount: 250,
    },
    {
      id: 20,
      name: "Cavalier",
      price: "Rs.320",
      category: "Dogs",
      img: d5,
      reviews: 5.6,
      reviewCount: 286,
    },
    {
      id: 21,
      name: "Chinese",
      price: "Rs.500",
      category: "Hamsters",
      img: h4,
      reviews: 3.6,
      reviewCount: 186,
    },
    {
      id: 22,
      name: "Pomeranian",
      price: "Rs.220",
      category: "Dogs",
      img: d1,
      reviews: 5.0,
      reviewCount: 323,
    },
    {
      id: 23,
      name: "Scottish",
      price: "Rs.350",
      category: "Cats",
      img: c5,
      reviews: 5.0,
      reviewCount: 353,
    },
    {
      id: 24,
      name: "Guppies",
      price: "Rs.120",
      category: "Fishes",
      img: f4,
      reviews: 5.0,
      reviewCount: 153,
    },
    {
      id: 25,
      name: "Lionhead",
      price: "Rs.350",
      category: "Rabbits",
      img: r4,
      reviews: 5.7,
      reviewCount: 553,
    },
    {
      id: 26,
      name: "Winter white Dwarf",
      price: "Rs.250",
      category: "Hamsters",
      img: h3,
      reviews: 4.7,
      reviewCount: 353,
    },
  ];

  const [filters, setFilters] = useState({
    category: "All",
    price: "All",
  });

const [selectedProduct, setSelectedProduct] = useState(null);


  const handleFilterChange = (type, value) => {
    setFilters({ ...filters, [type]: value });
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      filters.category === "All" || product.category === filters.category;
    const matchesPrice =
      filters.price === "All" ||
      (filters.price === "Rs.100 - Rs.200" &&
        parseInt(product.price.slice(3)) <= 200) ||
      (filters.price === "Rs.200 - Rs.300" &&
        parseInt(product.price.slice(3)) > 200 &&
        parseInt(product.price.slice(3)) <= 300) ||
      (filters.price === "Rs.300 - Rs.400" &&
        parseInt(product.price.slice(3)) > 300 &&
        parseInt(product.price.slice(3)) <= 400) ||
      (filters.price === "Over Rs.400" &&
        parseInt(product.price.slice(3)) > 400);
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="app">
      <div className="content">
        <aside className="sidebar">
          <h3>Category</h3>
          <ul>
            {["All", "Dogs", "Cats", "Fishes", "Hamsters", "Rabbits"].map(
              (cat) => (
                <li key={cat}>
                  <label>
                    <input
                      type="radio"
                      name="category"
                      checked={filters.category === cat}
                      onChange={() => handleFilterChange("category", cat)}
                    />
                    {cat}
                  </label>
                </li>
              )
            )}
          </ul>

          <h3>Price</h3>
          <ul>
            {[
              "All",
              "Rs.100 - Rs.200",
              "Rs.200 - Rs.300",
              "Rs.300 - Rs.400",
              "Over Rs.400",
            ].map((price) => (
              <li key={price}>
                <label>
                  <input
                    type="radio"
                    name="price"
                    checked={filters.price === price}
                    onChange={() => handleFilterChange("price", price)}
                  />
                  {price}
                </label>
              </li>
            ))}
          </ul>
        </aside>

        <main className="main-content">
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card animated-card"
              
               style={{ cursor: "pointer" }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="product-image"
                />
                <h3 className="product-name">{product.name}</h3>
                <div className="reviews">
                  {"★".repeat(Math.floor(product.reviews))}{" "}
                  {"☆".repeat(5 - Math.floor(product.reviews))}
                  <span>({product.reviewCount} reviews)</span>
                </div>
                <div className="card-bottom">
                  <p className="product-price">{product.price}</p>
                 <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent bubbling (if needed)
                    setSelectedProduct(product); // Open popup only when clicking button
                  }}
                >
                  Select
                </button>
                </div>
              </div>
            ))}
          </div>
          {selectedProduct && (
            <ItemDetails
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Categories;
