import React from "react";

function FilteredCreatures({ imgArr, nameArr, pet }) {
  function handleDelete() {
    console.log(`Hi there! You've deleted ${nameArr}`);
    console.log("😡", pet);

    fetch(`http://localhost:9292/pet/${pet.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((err) => console.log("🔥", err));
  }

  return (
    <div className="creature">
      <p>{nameArr}</p>
      <img src={imgArr} alt={nameArr} />
      <button onClick={handleDelete}>Remove {nameArr} from Collection</button>
    </div>
  );
}

export default FilteredCreatures;
