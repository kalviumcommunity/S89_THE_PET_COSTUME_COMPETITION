import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EntityList = ({ setSelectedEntity }) => {
  const [entities, setEntities] = useState([]);
  const navigate = useNavigate();

  const fetchEntities = async () => {
    try {
      const response = await axios.get("http://localhost:3000/costume/pets");
      setEntities(response.data.pets);
    } catch (error) {
      console.error("Error fetching entities:", error);
    }
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/costume/pets/${id}`);
      fetchEntities();
      alert("Entity deleted successfully!");
    } catch (error) {
      console.error("Error deleting entity:", error);
    }
  };

  return (
    <div>
      {entities.map((entity, index) => (
        <div key={index} className="costumecard">
          <h2><strong>Pet Name:</strong> {entity.pet_name}</h2>
          <h3><strong>Owner Name:</strong> {entity.owner_name}</h3>
          <h3><strong>Costume:</strong> {entity.costume}</h3>
          <h3><strong>Category:</strong> {entity.category}</h3>
          <h3><strong>Age:</strong> {entity.age}</h3>
          <h3><strong>Species:</strong> {entity.species}</h3>
          <h3><strong>Breed:</strong> {entity.breed}</h3>

          <button onClick={() => { setSelectedEntity(entity); navigate("/addcostume"); }}>Update</button>
          <button onClick={() => handleDelete(entity._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EntityList;