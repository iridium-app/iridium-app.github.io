import Utility from "../Utility";
import Dex, { DexInfo } from "../data/Dex";
import FormTable from "../data/FormTable";
import ItemImage from "./ItemImage";
import MonImage from "./MonImage";
import MoveDisplay from "./MoveDisplay";
import StatDisplay from "./StatDisplay";
import TypeImage from "./TypeImage";

function TrainerMonPanel({
  mon,
  column,
}: {
  mon: {
    level: number;
    monWithForm: {
      name: string;
      form: number;
    };
    item: string;
    ability: string;
    moveset: string[];
  };
  column: string;
}) {
  const dexInfo: DexInfo = Dex.GetDexInfo(mon.monWithForm);
  const formName: string = FormTable.GetFormName(mon.monWithForm);

  return (
    <div className="trainer-mon-panel" id={column + "-column"}>
      <div className="trainer-mon-panel__box">
        <div className="trainer-mon-panel__box__images">
          <MonImage formName={formName} size={80} />
          <div style={{ position: "sticky" }}>
            <ItemImage itemName={mon.item} />
          </div>
        </div>
        <div className="trainer-mon-panel__box__level">
          <div style={{ fontSize: "large" }}>Lvl</div>
          <div style={{ fontSize: "xx-large" }}>{mon.level}</div>
        </div>
        <div className="trainer-mon-panel__box__types">
          {dexInfo.types?.map((type) => (
            <TypeImage
              key={"type-image-" + mon.monWithForm.name + "-" + type}
              type={type}
            />
          ))}
        </div>
        <div className="trainer-mon-panel__box__ability">
          {/* {mon?.ability
            ? Utility.GetNiceName(mon?.ability)
            : Utility.GetNiceName(dexInfo?.abilities[0])} */}
        </div>
      </div>
      <div className="trainer-mon-panel__stats">
        <StatDisplay mon={dexInfo} />
      </div>
      <div className="trainer-mon-panel__moves">
        {mon.moveset.map((move, index) => (
          <MoveDisplay
            key={"move-display-" + index + "-" + move}
            moveName={move}
          />
        ))}
      </div>
    </div>
  );
}

export default TrainerMonPanel;
