import React, { useState, useEffect } from "react";
import axios from "axios";


const EntityList = () => {
  const [entities, setEntities] = useState([])

  const fetchEntities = async () => {
    try {
      const response = await axios.get("http://localhost:3000/costume/pets");
      console.log(response.data)
      setEntities(response.data.pets);
    } catch (error) {
      console.error("Error fetching entities:", error);
    } 
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  return (
    <div>
      {entities.map((entity,index) => (
        <div key={index} className="costumecard">
          <h2><strong>PetName:</strong>{entity.pet_name}</h2>
          <h3><strong>OwnerName:</strong>{entity.owner_name}</h3>
          <h3><strong>Costume:</strong>{entity.costume}</h3>
          <h3><strong>Category:</strong>{entity.category}</h3>
          <h3><strong>Age:</strong>{entity.age}</h3>
          <h3><strong>Species:</strong>{entity.species}</h3>
          <h3><strong>Breed:</strong>{entity.breed}</h3>

        </div>
      ))}
      
    </div>
  );
};

export default EntityList;