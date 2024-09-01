import { ReactNode, useState } from "react";
import {
  MastersheetEntryType,
  MastersheetEntry,
  Encounter,
  Trainer,
} from "../data/MastersheetData";
import TrainerPanel from "./TrainerPanel";
import EncounterPanel from "./EncounterPanel";
import EncounterData from "../data/EncounterData";
import { DexInfo } from "../data/Dex";
import StarterLabPanel from "./specialPanels/StarterLabPanel";

function renderSwitch(
  entry: MastersheetEntry,
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>,
  encounters: Encounter[],
  trainers: Trainer[]
): ReactNode {
  switch (entry.type) {
    case MastersheetEntryType.standardArea:
      return (
        <>
          {trainers.length > 0 ? (
            <div className="entry-panel__trainers">
              <div className="trainer-panel__header">Trainers</div>
              {entry.trainers.map((trainer) => (
                <TrainerPanel
                  key={"trainer_" + trainer.id}
                  mastersheetTrainer={trainer}
                />
              ))}
            </div>
          ) : (
            ""
          )}
          {encounters.length > 0 ? (
            <div className="entry-panel__encounters">
              <div className="encounter-panel__header">Encounter</div>
              {entry.encounters.map((encounter) => (
                <EncounterPanel
                  key={"encounter_" + encounter.id}
                  setSelectedMon={setSelectedMon}
                  encounterInfo={EncounterData.GetInfo(encounter.id)}
                  encounter={encounter}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </>
      );
    case MastersheetEntryType.starterLab:
      return <StarterLabPanel setSelectedMon={setSelectedMon} />;
  }
}

function MastersheetEntryPanel({
  entry,
  setSelectedMon,
  encounterFilter,
  trainerFilter,
}: {
  entry: MastersheetEntry;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
  encounterFilter: boolean;
  trainerFilter: boolean;
}) {
  const [hidden, setHidden] = useState(false);
  const encounters = encounterFilter ? [] : entry.encounters;
  const trainers = trainerFilter ? [] : entry.trainers;

  return (
    <div
      id={"entry_" + entry.id}
      className={hidden ? "entry-panel entry-panel-hidden" : "entry-panel"}
    >
      <div className="entry-panel__header">
        <div className="entry-panel__header-text">{entry.name}</div>
        <button
          className="entry-panel__hide-button"
          onClick={() => {
            setHidden(!hidden);
            // if (hidden) {
            //   document.querySelector("#entry_" + entry.id)?.scrollIntoView();
            // }
          }}
        >
          <img
            className="minimize-sprite"
            alt="minimize-button"
            src={hidden ? "/ui/maximize.png" : "/ui/minimize.png"}
          />
        </button>
      </div>
      {(encounters.length === 0 && trainers.length === 0) ||
      (encounterFilter && entry.type === MastersheetEntryType.starterLab)
        ? ""
        : renderSwitch(entry, setSelectedMon, encounters, trainers)}
    </div>
  );
}

export default MastersheetEntryPanel;
