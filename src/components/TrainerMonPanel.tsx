import Utility from "../Utility";
import Dex from "../data/Dex";
import MoveData from "../data/MoveData";
import ItemImage from "./ItemImage";
import MoveDisplay from "./MoveDisplay";
import StatDisplay from "./StatDisplay";
import TypeImage from "./TypeImage";

function TrainerMonPanel({
  mon,
  column,
}: {
  mon: {
    level: number;
    name: string;
    item: string;
    ability: string;
    moveset: string[];
  };
  column: string;
}) {
  const dexInfo = Dex.Dict[mon.name];

  return (
    <div className="trainer-mon-panel" id={column + "-column"}>
      <div className="trainer-mon-panel__box">
        <div className="trainer-mon-panel__box__images">
          <img
            src={
              "/sprites/pokemon/" +
              mon.name.replace("SPECIES_", "").toLowerCase() +
              ".png"
            }
          />
          <div style={{ position: "sticky" }}>
            <ItemImage itemName={mon.item} />
          </div>
        </div>
        <div className="trainer-mon-panel__box__level">
          <div style={{ fontSize: "large" }}>Lvl</div>
          <div style={{ fontSize: "xx-large" }}>{mon.level}</div>
        </div>
        <div className="trainer-mon-panel__box__types">
          {dexInfo.types.map((type) => (
            <TypeImage
              key={"type-image-" + mon.name + "-" + type}
              type={type}
            />
          ))}
        </div>
        <div className="trainer-mon-panel__box__ability">{mon.ability ? Utility.GetNiceName(mon.ability) : Utility.GetNiceName(dexInfo.abilities[0])}</div>
      </div>
      <div className="trainer-mon-panel__stats">
        <StatDisplay mon={dexInfo} />
      </div>
      <div className="trainer-mon-panel__moves">
        {mon.moveset.map((move) => (
          <MoveDisplay key={"move-display-" + move} moveName={move} />
        ))}
      </div>
    </div>
  );
}

export default TrainerMonPanel;
