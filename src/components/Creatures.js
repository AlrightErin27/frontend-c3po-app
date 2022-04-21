import Creature from "./Creature";

function Creatures({ creatures }) {
  const renderCreatures = creatures.map((creature) => {
    return <Creature creature={creature} key={creature.id} />;
  });

  return <div id="creatures_container">{renderCreatures}</div>;
}

export default Creatures;
