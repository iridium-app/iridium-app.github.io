import Dex, { DexInfo } from "../data/Dex";
import { EncounterInfo } from "../data/EncounterData";
import EncounterData from "../data/EncounterData";
import FormTable from "../data/FormTable";
import MonImage from "./MonImage";

function EncounterPanel({
  encounterInfo,
  setSelectedMon,
  encounterId,
}: {
  encounterInfo: EncounterInfo;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
  encounterId: number;
}) {
  return (
    <div className="encounter-panel" id={"encounter_" + encounterId}>
      {encounterInfo.methods.map((method) => (
        <div
          className="encounter-method"
          key={"encounter-method-" + method.type}
        >
          <div className="encounter-method__header">
            {EncounterData.GetMethodNiceName(method.type)}
          </div>
          <div className="encounter-method__encounters-list">
            {EncounterData.GetFinalizedArray(method).map(
              (encounterWithRate, index) => (
                <div
                  className="encounter-method__encounter"
                  key={"encounter-method__encounter-" + index}
                >
                  <button
                    onClick={() =>
                      setSelectedMon(
                        Dex.GetDexInfo(encounterWithRate.encounter)
                      )
                    }
                  >
                    <MonImage
                      formName={FormTable.GetFormName(
                        encounterWithRate.encounter
                      )}
                      size={50}
                    />
                  </button>
                  <div>{encounterWithRate.rate}%</div>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EncounterPanel;
