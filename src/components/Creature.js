import React, { useEffect } from "react";

function Creature({ creature }) {
  function handleSave() {
    console.log(`Hey there fellow Jedi. You saved ${creature.creature_id}`);
  }

  useEffect(() => {
    fetch("http://localhost:9292/pet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ creature_id: creature.id, user_id: null }),
    })
      .then((response) => response.json())
      .catch((err) => console.log("🔥", err));
  }, [handleSave]);

  return (
    <div className="creature">
      {creature.creature_type}
      <div>
        <img
          className="creature-img"
          src={creature.image_url}
          alt={creature.creature_type}
        />
      </div>
      <p>First film appearance: {creature.film}</p>
      <button onClick={handleSave} className="form-submit">
        Save {creature.creature_type}
      </button>
    </div>
  );
}

export default Creature;
