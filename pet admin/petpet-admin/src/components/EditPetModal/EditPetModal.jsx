import React, { useState } from "react";
import "./EditPetModal.css";

const EditPetModal = ({ pet, onClose, onSave }) => {
  const [editedPet, setEditedPet] = useState({ ...pet });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      setImageFile(files[0]);
      setEditedPet((prev) => ({ ...prev })); // Keep rest of data
    } else {
      setEditedPet((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", editedPet.name);
    formData.append("type", editedPet.type);
    formData.append("description", editedPet.description);
    formData.append("price", parseFloat(editedPet.price));
    formData.append("quantity", parseInt(editedPet.quantity));
    if (imageFile) formData.append("image", imageFile);

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        `http://localhost:8081/api/pets/${pet._id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        const updatedPet = await response.json();
        onSave(updatedPet); // Update in parent component
        setMessage("✅ Pet updated successfully!");
        onClose();
      } else {
        const errorText = await response.text();
        setMessage("❌ Error: " + errorText);
      }
    } catch (error) {
      setMessage("❌ Update failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Edit Pet</h3>
        {message && <p className="message">{message}</p>}
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
          <input type="file" name="image" onChange={handleChange} />
          {imageFile ? (
            <img
              src={URL.createObjectURL(imageFile)}
              alt="preview"
              height={100}
            />
          ) : (
            <img
              src={`http://localhost:8081${pet.imageUrl}`}
              alt="preview"
              height={100}
            />
          )}
          <div className="modal-buttons">
            <button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPetModal;
