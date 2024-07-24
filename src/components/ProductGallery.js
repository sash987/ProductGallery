// src/components/ProductGallery.js

import React from 'react';
import Product from './Product';

const ProductGallery = ({ products, onDeleteProduct, onEditProduct }) => {
  return (
    <div className="product-gallery">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onDeleteProduct={onDeleteProduct}
          onEditProduct={onEditProduct} // Pass onEditProduct to Product component
        />
      ))}
    </div>
  );
};

export default ProductGallery;
