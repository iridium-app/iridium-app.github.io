import Dex, { DexInfo } from "../data/Dex";
import { EncounterInfo } from "../data/EncounterData";
import EncounterData from "../data/EncounterData";
import FormTable from "../data/FormTable";
import MonImage from "./MonImage";

function EncounterPanel({
  encounterInfo,
  setSelectedMon,
}: {
  encounterInfo: EncounterInfo;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}) {
  return (
    <div className="encounter-panel">
      <div className="encounter-panel__header">{encounterInfo.name}</div>
      {encounterInfo.methods.map((method) => (
        <div
          className="encounter-method"
          key={"encounter-method-" + method.type}
        >
          <div className="encoutner-method__header">
            {EncounterData.GetMethodNiceName(method.type)}
          </div>
          {method.encounters.map((encounter, index) => (
            <div
              className="encounter-method__encounter"
              key={"encounter-method__encounter-" + index}
            >
              <button onClick={() => setSelectedMon(Dex.GetDexInfo(encounter))}>
                <MonImage formName={FormTable.GetFormName(encounter)} />
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default EncounterPanel;