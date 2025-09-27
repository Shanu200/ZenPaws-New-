import React, { useState, useRef } from "react";
import "./AddPetForm.css";

const AddPetForm = () => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    description: "",
    price: "",
    quantity: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const imageInputRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setImageFile(files[0]);
    } else {
      setPet((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      setMessage("Please upload an image!");
      return;
    }

    const formData = new FormData();
    formData.append("name", pet.name);
    formData.append("type", pet.type);
    formData.append("description", pet.description);
    formData.append("price", parseFloat(pet.price));
    formData.append("quantity", parseInt(pet.quantity));
    formData.append("image", imageFile);

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("http://localhost:8081/api/pets", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Saved Pet:", data);
        setMessage("✅ Pet added successfully!");
        setPet({
          name: "",
          type: "",
          description: "",
          price: "",
          quantity: "",
        });
        setImageFile(null);
        if (imageInputRef.current) imageInputRef.current.value = "";
      } else {
        const errorText = await response.text();
        setMessage("❌ Error: " + errorText);
      }
    } catch (error) {
      setMessage("❌ Upload failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add New Pet</h2>

      <input
        name="name"
        placeholder="Pet Name"
        onChange={handleChange}
        value={pet.name}
        required
      />

      <select name="type" value={pet.type} onChange={handleChange} required>
        <option value="">Select Pet Type</option>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Bird">Bird</option>
        <option value="Fish">Fish</option>
        <option value="Other">Other</option>
      </select>

      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={pet.description}
        rows="4"
      />

      <input
        name="price"
        type="number"
        placeholder="Price"
        onChange={handleChange}
        value={pet.price}
        required
        min="0"
      />

      <input
        name="quantity"
        type="number"
        placeholder="Quantity Available"
        onChange={handleChange}
        value={pet.quantity}
        required
        min="1"
      />

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        ref={imageInputRef}
        required
      />
      {imageFile && (
        <img src={URL.createObjectURL(imageFile)} alt="preview" height={100} />
      )}

      <button type="submit" disabled={loading}>
        {loading ? "Uploading..." : "Add Pet"}
      </button>

      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default AddPetForm;
