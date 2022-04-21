import React from "react";
import Pet from "./Pet"

function Collection({pets}) {
  const renderPets = pets.map((pet) => {
    return <Pet pet={pet} />;
  });
  return <h3>{renderPets}</h3>;
}

export default Collection;
