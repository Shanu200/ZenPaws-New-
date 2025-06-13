import React, { useState } from "react";
import "./AddPetForm.css";

const AddPetForm = () => {
  const [pets, setPets] = useState(JSON.parse(localStorage.getItem("pets")) || []);
  const [pet, setPet] = useState({
    name: "",
    type: "",
    description: "",
    price: "",
    quantity: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setPet((prev) => ({
      ...prev,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPets = [...pets, { ...pet, id: Date.now() }];
    setPets(newPets);
    localStorage.setItem("pets", JSON.stringify(newPets));
    setPet({
      name: "",
      type: "",
      description: "",
      price: "",
      quantity: "",
      image: null,
    });
    alert("Pet added!");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add New Pet</h2>

      {/* Pet Name */}
      <input
        name="name"
        placeholder="Pet Name"
        onChange={handleChange}
        value={pet.name}
        required
      />

      {/* Pet Type */}
      <input
        name="type"
        placeholder="Pet Type"
        onChange={handleChange}
        value={pet.type}
        required
      />

      {/* Description */}
      <textarea
        name="description"
        placeholder="Description of the Pet"
        onChange={handleChange}
        value={pet.description}
        rows="4"
      />

      {/* Price */}
      <input
        name="price"
        type="number"
        placeholder="Price"
        onChange={handleChange}
        value={pet.price}
        required
      />

      {/* Quantity */}
      <input
        name="quantity"
        type="number"
        placeholder="Quantity Available"
        onChange={handleChange}
        value={pet.quantity}
        required
      />

      {/* Image Upload */}
      <input type="file" name="image" onChange={handleChange} required />
      {pet.image && <img src={pet.image} alt="preview" height={100} />}

      <button type="submit">Add Pet</button>
    </form>
  );
};

export default AddPetForm;