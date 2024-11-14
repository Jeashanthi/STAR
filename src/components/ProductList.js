import React, { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      price: 999,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      price: 1999,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      price: 2999,
      image: "https://via.placeholder.com/150",
    },
    // Add more products here...
  ]);

  const handleAddToCart = (product) => {
    // Logic to add product to cart
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
