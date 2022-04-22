import Creature from "./Creature";

function Creatures({ creatures }) {
  const renderCreatures = creatures.map((creature) => {
    return <Creature creature={creature} key={creature.id} />;
  });

  return (
    <div className="creatures-holder">
      <h1 id="creatures-title">Library of Creatures</h1>
      <div>{renderCreatures}</div>
    </div>
  );
}

export default Creatures;
