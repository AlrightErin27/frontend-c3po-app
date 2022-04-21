import React from "react";
import Pet from "./Pet";

function Collection({ pets, creatures, user }) {
  const renderPets = pets.map((pet) => {
    return <Pet pet={pet} key={pet.id} creatures={creatures} />;
  });
  return (
    <>
      <p>{user}'s Saved Collection</p>
      <h3>{renderPets}</h3>
    </>
  );
}

export default Collection;
