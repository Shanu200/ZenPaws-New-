import React, { useEffect, useState } from "react";
import EditPetModal from "../EditPetModal/EditPetModal";
import "./UpdatePets.css";

const UpdatePets = () => {
  const [pets, setPets] = useState([]);
  const [editingPet, setEditingPet] = useState(null);

  useEffect(() => {
    const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
    setPets(savedPets);
  }, []);

  const handleDelete = (id) => {
    const updatedPets = pets.filter((pet) => pet.id !== id);
    setPets(updatedPets);
    localStorage.setItem("pets", JSON.stringify(updatedPets));
  };

  const handleEdit = (pet) => {
    setEditingPet(pet);
  };

  const updatePet = (updatedPet) => {
    const updatedPets = pets.map((pet) =>
      pet.id === updatedPet.id ? updatedPet : pet
    );
    setPets(updatedPets);
    localStorage.setItem("pets", JSON.stringify(updatedPets));
    setEditingPet(null);
  };

  return (
    <div className="update-container">
      <h2>Manage Your Pets</h2>
      <div className="cards-wrapper">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <span className="badge type">{pet.type}</span>
            <p className="description">{pet.description}</p>
            <div className="info-row">
              <span className="badge price">Rs. {pet.price}</span>
              <span className="badge quantity">{pet.quantity} pcs</span>
            </div>
            <div className="card-buttons">
              <button className="edit-btn" onClick={() => handleEdit(pet)}>✏️ Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(pet.id)}>🗑️ Delete</button>
            </div>
          </div>
        ))}
      </div>

      {editingPet && (
        <EditPetModal
          pet={editingPet}
          onClose={() => setEditingPet(null)}
          onSave={updatePet}
        />
      )}
    </div>
  );
};

export default UpdatePets;
