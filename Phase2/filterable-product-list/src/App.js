import React, { useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList";

const App = () => {
  // Sample product data
  const products = [
    { name: "Laptop", category: "Electronics", price: 999 },
    { name: "Smartphone", category: "Electronics", price: 499 },
    { name: "Headphones", category: "Electronics", price: 199 },
    { name: "T-shirt", category: "Clothing", price: 29 },
    { name: "Jeans", category: "Clothing", price: 59 },
    { name: "Sweater", category: "Clothing", price: 39 },
    { name: "Coffee Maker", category: "Home", price: 79 },
    { name: "Blender", category: "Home", price: 49 },
    { name: "Table Lamp", category: "Home", price: 39 },
  ];

  // State to manage active filter
  const [activeFilter, setActiveFilter] = useState("all");

  // Function to handle filter change
  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  // Filter products based on active filter
  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="filter-section">
        <button onClick={() => handleFilterChange("all")}>All</button>
        <button onClick={() => handleFilterChange("Electronics")}>
          Electronics
        </button>
        <button onClick={() => handleFilterChange("Clothing")}>Clothing</button>
        <button onClick={() => handleFilterChange("Home")}>Home</button>
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
