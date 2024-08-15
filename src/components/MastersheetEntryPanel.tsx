import { ReactNode } from "react";
import {
  MastersheetEntryType,
  MastersheetEntry,
} from "../data/MastersheetData";
import TrainerPanel from "./TrainerPanel";
import EncounterPanel from "./EncounterPanel";
import EncounterData from "../data/EncounterData";

function renderSwitch(entry: MastersheetEntry): ReactNode {
  switch (entry.type) {
    case MastersheetEntryType.standardArea:
      return (
        <>
          <div className="entry-panel__trainers">
            {entry.trainers.map((trainer) => (
              <TrainerPanel
                key={"trainer_" + trainer.id}
                trainerId={trainer.id}
              />
            ))}
          </div>
          <div className="entry-panel__encounters">
            {entry.encounters.map((encounter) => (
              <EncounterPanel
                key={"encounter_" + encounter.id}
                setSelectedMon={() => null}
                encounterInfo={EncounterData.GetInfo(encounter.id)}
                encounterId={encounter.id}
              />
            ))}
          </div>
        </>
      );
  }
}

function MastersheetEntryPanel({ entry }: { entry: MastersheetEntry }) {
  return (
    <div id={"entry_" + entry.id} className="entry-panel">
      <div className="entry-panel__header">{entry.name}</div>
      {renderSwitch(entry)}
    </div>
  );
}

export default MastersheetEntryPanel;
