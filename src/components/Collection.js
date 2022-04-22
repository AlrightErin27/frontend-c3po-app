import React from "react";
import Pet from "./Pet";
import Specie from "./Specie";

function Collection({ pets, creatures, user, species }) {
  const renderPets = pets.map((pet) => {
    return <Pet pet={pet} key={pet.id} creatures={creatures} />;
  });

  const renderSpecies = species.map((specie) => {
    return (
      <Specie specie={specie} key={specie.id} removeSpecie={removeSpecie} />
    );
  });
  function removeSpecie(specie) {
    fetch(`http://localhost:9292/species/${specie.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((err) => console.log("🔥", err));
  }

  return (
    <div className="collection-container">
      <p>{user}'s Saved Collection</p>
      <h3 className="collections-title">Created Species</h3>
      <div className="section-of-collection">{renderSpecies}</div>
      <h3 className="collections-title">Collected Creatures</h3>
      <div>{renderPets}</div>
    </div>
  );
}

export default Collection;
