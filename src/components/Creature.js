import React from "react";

function Creature({ creature }) {
  console.log("  👹  ", creature.image_url);

  return (
    <div>
      {creature.creature_type}

      <div>
        <img
          src="https://helios-i.mashable.com/imagery/articles/07bIloVTQJsaHe1Of89WgBs/images-4.fit_lim.size_1400x.v1611692231.jpg"
          alt={creature.creature_type}
        />
      </div>
    </div>
  );
}

export default Creature;
