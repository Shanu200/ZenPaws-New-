import React, { useState, useEffect } from "react";
import { ItemDetails } from "../Items/ItemDetails";
import "./Categories.css";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: "All", price: "All" });
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch pets from backend
  useEffect(() => {
    fetch("http://localhost:8081/api/pets")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch pets:", err));
  }, []);

  const handleFilterChange = (type, value) => {
    setFilters({ ...filters, [type]: value });
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      filters.category === "All" || product.type === filters.category;
    const price = product.price;
    const matchesPrice =
      filters.price === "All" ||
      (filters.price === "Rs.100 - Rs.200" && price <= 200) ||
      (filters.price === "Rs.200 - Rs.300" && price > 200 && price <= 300) ||
      (filters.price === "Rs.300 - Rs.400" && price > 300 && price <= 400) ||
      (filters.price === "Over Rs.400" && price > 400);

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
              <div
                key={product.id}
                className="product-card animated-card"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={`http://localhost:8081${product.imageUrl}`}
                  alt={product.name}
                  className="product-image"
                />
                <h3 className="product-name">{product.name}</h3>
                <div className="card-bottom">
                  <p className="product-price">Rs {product.price}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
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
