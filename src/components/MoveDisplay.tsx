import { useState } from "react";
import MoveData from "../data/MoveData";
import DamageCategoryImage from "./DamageCategoryImage";
import TypeImage from "./TypeImage";

function MoveDisplay({ moveName }: { moveName: string }) {
  const move = MoveData.Dict[moveName];
  const [showFooter, setShowFooter] = useState(false);

  const onClick = () => {
    setShowFooter(!showFooter);
  };

  return (
    <div onClick={onClick} className="move-display">
      <div className="move-display__header">
        {move.name}
      </div>
      <TypeImage type={move.type} />
      <DamageCategoryImage damageCategory={move.damageCategory} />
      <div>{move.pp} PP</div>
      <div>{move.basePower} BP</div>
      <div className={showFooter ? "move-display__footer" : "hidden"}>
        {move.description}
      </div>
    </div>
  );
}

export default MoveDisplay;
