// src/components/Product.js

import React, { useState } from 'react';

const Product = ({ product, onDeleteProduct, onEditProduct }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(product.description);
  const [editedImageFile, setEditedImageFile] = useState(null);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedDescription(product.description);
    setEditedImageFile(null); // Reset edited image file on toggle
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setEditedImageFile(file);
  };

  const handleSaveEdit = () => {
    if (!editedDescription) return;

    // Prepare updated data based on whether image file is provided or not
    const editedData = {
      description: editedDescription,
      imageFile: editedImageFile,
    };

    // Call onEditProduct with product id and updated data
    onEditProduct(product.id, editedData);

    setIsEditing(false); // Exit editing mode
  };

  return (
    <div className="product">
      {isEditing ? (
        <>
          <label>
            Upload New Image:
            <input type="file" onChange={handleFileChange} accept="image/*" />
          </label>
          <label>
            Edit Description:
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </label>
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <>
          <img src={product.imageUrl} alt={product.description} />
          <p>{product.description}</p>
          <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
          <button onClick={handleEditToggle}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Product;
