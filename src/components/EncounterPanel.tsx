import Dex, { DexInfo } from "../data/Dex";
import { EncounterInfo } from "../data/EncounterData";
import EncounterData from "../data/EncounterData";
import FormTable from "../data/FormTable";
import MonImage from "./MonImage";
import { UserContext } from "../App";
import { useContext } from "react";
import { Encounter } from "../data/MastersheetData";

function EncounterPanel({
  encounterInfo,
  setSelectedMon,
  encounter,
}: {
  encounterInfo: EncounterInfo;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
  encounter: Encounter;
}) {
  const { encounterList, setEncounterList } = useContext(UserContext);
  const caught = encounterList.Encounters.find((e) => e.id === encounter.id);

  return (
    <div className="encounter-panel" id={"encounter_" + encounter.id}>
      {caught === undefined ? (
        encounterInfo.methods.map((method) => (
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
                    <button
                      onClick={() =>
                        setEncounterList({
                          ...encounterList,
                          Encounters: encounterList.Encounters.concat([
                            {
                              subtype: encounter.subtype,
                              id: encounter.id,
                              monWithForm: encounterWithRate.encounter,
                            },
                          ]),
                        })
                      }
                    >
                      Catch
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="encounter-panel__caught">
          <MonImage formName={caught.monWithForm.name} size={80} />
          <button
            onClick={() =>
              setEncounterList({
                ...encounterList,
                Encounters: encounterList.Encounters.filter(
                  (e) => e.id !== encounter.id
                ),
              })
            }
          >
            Undo
          </button>
        </div>
      )}
    </div>
  );
}

export default EncounterPanel;
