import React from "react";
import FilteredCreatures from "./FilteredCreatures";

function Pet({ pet, creatures }) {
  const imgArr = [],
    nameArr = [];

  creatures.map((creature) => {
    if (creature.id === pet.creature_id) {
      imgArr.push(creature.image_url);
      nameArr.push(creature.creature_type);
    }
    return imgArr && nameArr;
  });

  return (
    <div>
      <FilteredCreatures imgArr={imgArr[0]} nameArr={nameArr[0]} pet={pet} />
    </div>
  );
}

export default Pet;
