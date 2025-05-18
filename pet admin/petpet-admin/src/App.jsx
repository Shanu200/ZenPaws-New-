import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AddPetForm from "./components/AddPetForm/AddPetForm";
import UpdatePets from "./components/UpdatePets/UpdatePets";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddPetForm />} />
        <Route path="/update" element={<UpdatePets />} />
      </Routes>
    </Router>
  );
}

export default App;