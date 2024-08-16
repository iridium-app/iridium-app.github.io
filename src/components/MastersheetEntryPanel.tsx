import { ReactNode } from "react";
import {
  MastersheetEntryType,
  MastersheetEntry,
} from "../data/MastersheetData";
import TrainerPanel from "./TrainerPanel";
import EncounterPanel from "./EncounterPanel";
import EncounterData from "../data/EncounterData";
import Dex, { DexInfo } from "../data/Dex";
import MonImage from "./MonImage";
import FormTable from "../data/FormTable";

function renderSwitch(
  entry: MastersheetEntry,
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>
): ReactNode {
  switch (entry.type) {
    case MastersheetEntryType.standardArea:
      return (
        <>
          <div className="entry-panel__header">{entry.name}</div>
          {entry.trainers.length > 1 ? (
            <div className="entry-panel__trainers">
              <div className="trainer-panel__header">Trainers</div>
              {entry.trainers.map((trainer) => (
                <TrainerPanel
                  key={"trainer_" + trainer.id}
                  trainerId={trainer.id}
                />
              ))}
            </div>
          ) : (
            ""
          )}
          <div className="entry-panel__encounters">
            <div className="encounter-panel__header">Encounter</div>
            {entry.encounters.map((encounter) => (
              <EncounterPanel
                key={"encounter_" + encounter.id}
                setSelectedMon={setSelectedMon}
                encounterInfo={EncounterData.GetInfo(encounter.id)}
                encounterId={encounter.id}
              />
            ))}
          </div>
        </>
      );
    case MastersheetEntryType.starterLab:
      return (
        <>
          <div className="entry-panel__header">{entry.name}</div>
          <div className="entry-panel__starter-list">
            {EncounterData.GetStarters().map((starter) => (
              <button onClick={() => setSelectedMon(Dex.GetDexInfo(starter))}>
                <MonImage formName={FormTable.GetFormName(starter)} size={50} />
              </button>
            ))}
          </div>
        </>
      );
  }
}

function MastersheetEntryPanel({
  entry,
  setSelectedMon,
}: {
  entry: MastersheetEntry;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}) {
  return (
    <div id={"entry_" + entry.id} className="entry-panel">
      {renderSwitch(entry, setSelectedMon)}
    </div>
  );
}

export default MastersheetEntryPanel;
