import { ReactNode, useContext } from "react";
import Dex, { DexInfo } from "../../data/Dex";
import EncounterData from "../../data/EncounterData";
import FormTable from "../../data/FormTable";
import MonImage from "../MonImage";
import { UserContext } from "../../App";

function StarterLabPanel({
  setSelectedMon,
}: {
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}) {
  const { encounterList, setEncounterList } = useContext(UserContext);
  const caught = encounterList.Encounters.find((e) => e.subtype === "starter");

  return (
    <div className="entry-panel__starter-list">
      {caught ? (
        <div className="entry-panel__starter">
          <MonImage formName={caught.monWithForm.name} size={80} />
          <button
            onClick={() =>
              setEncounterList({
                ...encounterList,
                Encounters: encounterList.Encounters.filter(
                  (e) => e.subtype !== "starter"
                ),
              })
            }
          >
            Undo
          </button>
        </div>
      ) : (
        [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          GenerationRender(i, setSelectedMon)
        ))
        // EncounterData.GetStarters().map((starter) => (
        //   <div key={"starter-list-" + starter.name} className="entry-panel__starter">
        //     <button
        //       onClick={() => setSelectedMon(Dex.GetDexInfo(starter))}
        //     >
        //       <MonImage formName={FormTable.GetFormName(starter)} size={50} />
        //     </button>
        //     <button
        //       onClick={() =>
        //         setEncounterList({
        //           ...encounterList,
        //           Encounters: encounterList.Encounters.concat([
        //             {
        //               subtype: "starter",
        //               id: 1,
        //               monWithForm: starter,
        //             },
        //           ]),
        //         })
        //       }
        //     >
        //       Choose
        //     </button>
        //   </div>
        // ))
      )}
    </div>
  );
}

function GenerationRender(genNum: number, setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>): ReactNode {
  const { encounterList, setEncounterList } = useContext(UserContext);
  return (
    <div className="generation">
      <div>Generation {genNum + 1}</div>
      {[0, 1, 2].map((i) => (
        <div key={"starter-list-" + EncounterData.GetStarters()[genNum * 3 + i].name} className="entry-panel__starter">
            <button
              onClick={() => setSelectedMon(Dex.GetDexInfo(EncounterData.GetStarters()[genNum * 3 + i]))}
            >
              <MonImage formName={FormTable.GetFormName(EncounterData.GetStarters()[genNum * 3 + i])} size={50} />
            </button>
            <button
              onClick={() =>
                setEncounterList({
                  ...encounterList,
                  Encounters: encounterList.Encounters.concat([
                    {
                      subtype: "starter",
                      id: 1,
                      monWithForm: EncounterData.GetStarters()[genNum * 3 + i],
                    },
                  ]),
                })
              }
            >
              Choose
            </button>
        </div>
      ))}
    </div>
  )
}

export default StarterLabPanel;
