// src/components/ProductForm.js

import React, { useState } from 'react';

const ProductForm = ({ onSubmit }) => {
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageFile || !description) return;
    onSubmit({ imageFile, description });
    setImageFile(null);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload Image:
        <input type="file" onChange={handleFileChange} accept="image/*" />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
