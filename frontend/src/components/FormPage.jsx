import React, { useState, useEffect } from "react";
import axios from "axios";

const FormPage = ({ selectedEntity, setSelectedEntity, refreshEntities }) => {
  const [formData, setFormData] = useState({
    pet_name: "",
    owner_name: "",
    costume: "",
    category: "",
    age: "",
    species: "",
    breed: "",
    prize: "",
  });

  useEffect(() => {
    if (selectedEntity) {
      setFormData(selectedEntity);
    }
  }, [selectedEntity]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedEntity) {
        await axios.put(`http://localhost:3000/costume/pets/${selectedEntity._id}`, formData);
        alert("Data updated successfully!");
      } else {
        await axios.post("http://localhost:3000/costume/pets", formData);
        alert("Data submitted successfully!");
      }
      setSelectedEntity(null);
      refreshEntities(); // Refresh the list after update
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{selectedEntity ? "Update Costume" : "Add New Costume"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Pet Name:</label>
        <input type="text" name="pet_name" value={formData.pet_name} onChange={handleChange} required />

        <label>Owner Name:</label>
        <input type="text" name="owner_name" value={formData.owner_name} onChange={handleChange} required />

        <label>Costume:</label>
        <input type="text" name="costume" value={formData.costume} onChange={handleChange} required />

        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} required />

        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />

        <label>Species:</label>
        <input type="text" name="species" value={formData.species} onChange={handleChange} required />

        <label>Breed:</label>
        <input type="text" name="breed" value={formData.breed} onChange={handleChange} required />

        <label>Prize:</label>
        <input type="text" name="prize" value={formData.prize} onChange={handleChange} required />

        <button type="submit">{selectedEntity ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
};

export default FormPage;