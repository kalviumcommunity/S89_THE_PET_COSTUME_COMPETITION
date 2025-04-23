import React, { useState } from "react";
import axios from "axios";

const FormPage = () => {
  const [formData, setFormData] = useState({
    pet_name: "",
    owner_name: "",
    costume: "",
    category: "",
    age: "",
    species: "",
    breed: "",
    prize: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/costume/pets", formData);
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Costume</h2>
      <form onSubmit={handleSubmit}>
        <label>Pet Name:</label>
        <input type="text" name="pet_name" onChange={handleChange} required />

        <label>Owner Name:</label>
        <input type="text" name="owner_name" onChange={handleChange} required />

        <label>Costume:</label>
        <input type="text" name="costume" onChange={handleChange} required />

        <label>Category:</label>
        <input type="text" name="category" onChange={handleChange} required />

        <label>Age:</label>
        <input type="number" name="age" onChange={handleChange} required />

        <label>Species:</label>
        <input type="text" name="species" onChange={handleChange} required />

        <label>Breed:</label>
        <input type="text" name="breed" onChange={handleChange} required />

        <label>Prize:</label>
        <input type="text" name="prize" onChange={handleChange} required />

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default FormPage;