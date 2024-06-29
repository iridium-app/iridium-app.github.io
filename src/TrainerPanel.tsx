import { useState } from "react";
import { DexInfo } from "./Dex";
import Dex from "./Dex";
import MoveData from "./MoveData";
import TrainerData from "./TrainerData";
import ItemData from "./ItemData";
import Utility from "./Utility";

function TrainerPanel({
  trainerId,
  setSelectedMon,
}: {
  trainerId: number;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}) {
  const [selectedMove, setSelectedMove] = useState("MOVE_NONE");
  const trainer = TrainerData.Dict[trainerId];

  const moveBtnOnClick = (move: string) => {
    if (selectedMove === move) setSelectedMove("MOVE_NONE");
    else setSelectedMove(move);
  };
  return (
    <div
      className="trainer-panel"
      style={{ "--numMons": trainer.numMons } as React.CSSProperties}
    >
      <div className="trainer-panel__header">{trainer.name}</div>
      <div className="trainer-panel__headers">
        <div>&nbsp;</div>
        <div>Name</div>
        <div>Level</div>
        <div>Item</div>
        <div>Move One</div>
        <div>Move Two</div>
        <div>Move Three</div>
        <div>Move Four</div>
      </div>
      {trainer.party.map((mon) => (
        <div key={mon.name} className="trainer-panel__mon">
          <img src={"/sprites/pokemon/" + mon.name.replace("SPECIES_", "").toLowerCase() + ".png"}/>
          <button onClick={() => setSelectedMon(Dex.Dict[mon.name])}>
            {Dex.Dict[mon.name].name}
          </button>
          <div>{mon.level}</div>
          <div><img src={"/sprites/items/" + mon.item + ".png"} title={ItemData.Dict[mon.item]?.name}/></div>
          {mon.moveset.map((move, i) => (
            <button
              key={"move_" + i + "_" + move}
              onClick={() => moveBtnOnClick(move)}
            >
              {MoveData.Dict[move].name}
            </button>
          ))}
        </div>
      ))}
      <div
        className="trainer_panel__move"
        style={
          {
            "--display": selectedMove === "MOVE_NONE" ? "none" : "grid",
          } as React.CSSProperties
        }
      >
        <div>{MoveData.Dict[selectedMove].name}</div>
        <div>{Utility.GetNiceTypeName(MoveData.Dict[selectedMove].type)}</div>
        <div>
          {MoveData.Dict[selectedMove].damageCategory === "SPLIT_STATUS"
            ? "Status"
            : MoveData.Dict[selectedMove].basePower}
        </div>
        <div style={{ gridColumn: "1 / span 3" }}>
          {MoveData.Dict[selectedMove].description}
        </div>
      </div>
    </div>
  );
}

export default TrainerPanel;
