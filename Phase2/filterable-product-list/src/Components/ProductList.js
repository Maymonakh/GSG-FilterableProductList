import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
