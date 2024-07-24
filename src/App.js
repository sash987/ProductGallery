// src/App.js

import React, { useState } from 'react';
import './App.css';
import ProductGallery from './components/ProductGallery';
import ProductForm from './components/ProductForm';

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = ({ imageFile, description }) => {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      const newProduct = {
        id: Date.now(),
        imageUrl: reader.result,
        description,
      };
      setProducts([...products, newProduct]);
    };
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleEditProduct = (productId, { description, imageFile }) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        if (imageFile) {
          const reader = new FileReader();
          reader.readAsDataURL(imageFile);
          reader.onload = () => {
            product.imageUrl = reader.result; // Update imageUrl directly in the product object
            product.description = description; // Update description directly in the product object
            setProducts([...products]); // Update state with new product list
          };
        } else {
          product.description = description; // Update description directly in the product object
          setProducts([...products]); // Update state with new product list
        }
      }
      return product;
    });
  };

  return (
    <div className="App">
      <h1>Product Gallery Website</h1>
      <ProductForm onSubmit={handleAddProduct} />
      <h2>Product Gallery</h2>
      <ProductGallery
        products={products}
        onDeleteProduct={handleDeleteProduct}
        onEditProduct={handleEditProduct}
      />
    </div>
  );
}

export default App;
