import React from "react";

function Creature({ creature, toSaveCreature }) {

  function handleSave(){
    toSaveCreature(creature.creature_type, creature.image_url)
  }

  return (
    <div className="creature">
      {creature.creature_type}
      <div>
        <img 
          src={creature.image_url}
          alt={creature.creature_type}
        />
      </div>
      <p>First film appearance: {creature.film}</p>
      <button onClick={handleSave}>Save {creature.creature_type}</button>
    </div>
  );
}

export default Creature;
