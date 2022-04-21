import Creature from "./Creature";

function Creatures({ creatures, toSaveCreature }) {
  const renderCreatures = creatures.map((creature) => {
    return <Creature creature={creature} key={creature.id} toSaveCreature={toSaveCreature} />;
  });

  return (
    <div>
      <h1 id="creatures-title">Library of Creatures</h1>
      <div >{renderCreatures}</div>
    </div>
  )

    
}

export default Creatures;
