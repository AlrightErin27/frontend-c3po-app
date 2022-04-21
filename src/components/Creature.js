import React from "react";

function Creature({ creature }) {
  // console.log("  👹  ", creature.image_url);

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
    </div>
  );
}

export default Creature;
