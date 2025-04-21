import React from "react";
import "./Costume.css";


const Costume = () => {
  const petCostumeEntries = [
    {
      petName: "Buddy",
      costumeDescription: "Superdog with a cape and goggles!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRMJHDRuo6e-yyCyYjHAKDgDMnxV0qDCtDw&s",
      votes: 25,
      comments: [
        { username: "PetLover123", text: "Buddy looks amazing!" },
        { username: "CutePets", text: "This costume is so creative!" }
      ],
      sharedOn: ["Facebook", "Twitter"]
    },
    {
      petName: "Whiskers",
      costumeDescription: "The Pirate Cat—complete with an eyepatch and tiny sword!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxMZJ6C3-nA3CkP_MFKqWX5pTrcJta1sk2A&s",
      votes: 40,
      comments: [
        { username: "CatFanatic", text: "Arrr! Whiskers is stealing the show!" },
        { username: "PawsAndClaws", text: "Adorable and fierce at the same time!" }
      ],
      sharedOn: ["Twitter"]
    },
    {
      petName: "Charlie",
      costumeDescription: "Hotdog costume with mustard details. Yum!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsc1bOWAkUw2FHxjKQL3JyWK7mG3mUmMLiw&s",
      votes: 15,
      comments: [
        { username: "FoodiePets", text: "Charlie looks deliciously cute!" },
        { username: "PetCostumeFan", text: "Love this! So funny!" }
      ],
      sharedOn: ["Facebook"]
    },
    {
      petName: "Bella",
      costumeDescription: "Princess Bella with a tiara and a flowing gown.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUMmoYT2OqLBlYapz_MxPCVpXiMvurOvjbSQ&s",
      votes: 32,
      comments: [
        { username: "RoyalPets", text: "Bella is royalty for sure!" },
        { username: "PetQueen", text: "What a gorgeous costume!" }
      ],
      sharedOn: ["Facebook", "Twitter"]
    },
    {
      petName: "Max",
      costumeDescription: "Sherlock Holmes with a detective hat and magnifying glass.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxeEP4gmS0VTHDO8fV0b0nwV7kxd1AE4VXA&s",
      votes: 20,
      comments: [
        { username: "MysteryLover", text: "Max is solving mysteries and hearts!" },
        { username: "DetectivePets", text: "Perfect costume for a curious pet!" }
      ],
    }
  ];

  return (
    <div>
      {petCostumeEntries.map((entry, index) => (
        <div key={index} className="costumecard">
          <img src={entry.image} alt={`${entry.petName}'s costume`} />
          <h2>{entry.petName}</h2>
          <p>{entry.costumeDescription}</p>
          <p>Votes: {entry.votes}</p>
          <div>
            <h4>Comments:</h4>
            {entry.comments.map((comment, commentIndex) => (
              <p key={commentIndex}>
                <strong>{comment.username}:</strong> {comment.text}
              </p>
            ))}
          </div>
          <hr />
        </div>
      ))}
      
    </div>
  );
};

export default Costume;