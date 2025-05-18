import React, { useState } from "react";
import "./EditPetModal.css";

const EditPetModal = ({ pet, onClose, onSave }) => {
  const [editedPet, setEditedPet] = useState({ ...pet });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setEditedPet((prev) => ({
      ...prev,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedPet);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Edit Pet</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={editedPet.name}
            onChange={handleChange}
            placeholder="Pet Name"
            required
          />
          <input
            name="type"
            value={editedPet.type}
            onChange={handleChange}
            placeholder="Pet Type"
            required
          />
          <input
            name="description"
            value={editedPet.description}
            onChange={handleChange}
            placeholder="Pet Description"
            required
          />
          <input
            name="price"
            value={editedPet.price}
            onChange={handleChange}
            type="number"
            placeholder="Price"
            required
          />
          <input
            name="quantity"
            value={editedPet.quantity}
            onChange={handleChange}
            type="number"
            placeholder="Quantity"
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleChange}
          />
          {editedPet.image && <img src={editedPet.image} alt="preview" height={100} />}
          <div className="modal-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPetModal;
