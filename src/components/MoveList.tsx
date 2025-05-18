import MoveData from "../data/MoveData";
import TypeImage from "./TypeImage";
import Utility from "../Utility";
import { DexInfo } from "../data/Dex";

interface MoveListProps {
  levelUpLearnset: {
    name: string;
    level: number;
  }[];
}

function MoveList({ levelUpLearnset }: MoveListProps) {
  return (
    <div className="move-block">
      {levelUpLearnset.map((move) => (
        <div
          key={"move-row_" + move.name + "_" + move.level}
          className="move-row"
        >
          <div className="move-row__level">Lvl {move.level}</div>
          <div className="move-row__name">{MoveData.Dict[move.name].name}</div>
          <div className="move-row__type">
            <TypeImage type={MoveData.Dict[move.name].type} />
          </div>
          <div className="move-row__power">
            <img
              src={Utility.GetDamageCategoryPath(
                MoveData.Dict[move.name].damageCategory
              )}
              alt={MoveData.Dict[move.name].damageCategory + "_image"}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoveList;
