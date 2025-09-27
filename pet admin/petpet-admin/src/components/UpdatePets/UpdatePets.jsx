import React, { useEffect, useState } from "react";
import EditPetModal from "../EditPetModal/EditPetModal";
import "./UpdatePets.css";

const UpdatePets = () => {
  const [pets, setPets] = useState([]);
  const [editingPet, setEditingPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Fetch pets from backend
  const fetchPets = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8081/api/pets");
      if (response.ok) {
        const data = await response.json();
        setPets(data);
      } else {
        setMessage("Failed to fetch pets.");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8081/api/pets/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setPets((prev) => prev.filter((pet) => pet._id !== id));
        setMessage("✅ Pet deleted successfully!");
      } else {
        setMessage("❌ Failed to delete pet.");
      }
    } catch (error) {
      setMessage("❌ Error: " + error.message);
    }
  };

  const handleEdit = (pet) => {
    setEditingPet(pet);
  };

  const updatePet = (updatedPet) => {
    setPets((prev) =>
      prev.map((pet) => (pet._id === updatedPet._id ? updatedPet : pet))
    );
    setEditingPet(null);
  };

  if (loading) return <p>Loading pets...</p>;

  return (
    <div className="update-container">
      <h2>Manage Pets</h2>
      {message && <p className="message">{message}</p>}

      {pets.length === 0 ? (
        <p>No pets available.</p>
      ) : (
        pets.map((pet) => (
          <div key={pet._id} className="pet-card">
            <p>
              <strong>{pet.name}</strong> - {pet.type}
            </p>
            <p>{pet.description}</p>
            <p>Price: Rs.{pet.price}</p>
            <p>Quantity: {pet.quantity}</p>
            <img
              src={`http://localhost:8081${pet.imageUrl}`}
              alt={pet.name}
              height={80}
            />
            <button onClick={() => handleEdit(pet)}>Edit</button>
            <button onClick={() => handleDelete(pet._id)}>Delete</button>
          </div>
        ))
      )}

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
