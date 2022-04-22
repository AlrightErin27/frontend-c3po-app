import React from "react";

function Specie({ specie, removeSpecie }) {
  //   console.log(specie, "✅");
  function handleDeleteSpecie() {
    console.log("You are deleting:", specie.species_name);
    removeSpecie(specie);
  }

  return (
    <div className="specie_container">
      <h1 className="species_name">{specie.species_name}</h1>
      <h3>{specie.description}</h3>
      <button onClick={handleDeleteSpecie} className="form-submit">
        Delete {specie.species_name}
      </button>
    </div>
  );
}

export default Specie;
