import React from "react";

function Pet({ pet, creatures }) {
  // console.log("🐸", pet);
  // console.log("🪲", creatures);

  const imgArr = [],
    nameArr = [];

  const mapAndFilter = creatures.map((creature) => {
    if (creature.id === pet.creature_id) {
      imgArr.push(creature.image_url);
      nameArr.push(creature.creature_type);
      // console.log(imgArr);
      return (
        <div className="creature" key={nameArr}>
          <p>{nameArr}</p>
          <img src={imgArr} alt={nameArr} />
        </div>
      );
    }
    // else {
    //   console.log("No matches found in collection");
    // }
  });

  return <div>{mapAndFilter}</div>;
}

export default Pet;
