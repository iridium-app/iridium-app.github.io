import MoveData from "../data/MoveData";
import DamageCategoryImage from "./DamageCategoryImage";
import TypeImage from "./TypeImage";

function MoveDisplay({ moveName }: { moveName: string }) {
  const move = MoveData.Dict[moveName];
  return (
    <div className="move-display">
      <div className="move-display__header">{move.name}</div>
      <TypeImage type={move.type} />
      <DamageCategoryImage damageCategory={move.damageCategory} />
      <div>{move.pp} PP</div>
      <div>{move.basePower} BP</div>
    </div>
  );
}

export default MoveDisplay;
