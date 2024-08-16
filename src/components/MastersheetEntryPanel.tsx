import { ReactNode } from "react";
import {
  MastersheetEntryType,
  MastersheetEntry,
  Encounter,
  Trainer,
} from "../data/MastersheetData";
import TrainerPanel from "./TrainerPanel";
import EncounterPanel from "./EncounterPanel";
import EncounterData from "../data/EncounterData";
import Dex, { DexInfo } from "../data/Dex";
import MonImage from "./MonImage";
import FormTable from "../data/FormTable";

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
          <div className="entry-panel__header">{entry.name}</div>
          {trainers.length > 0 ? (
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
          {encounters.length > 0 ? (
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
          ) : (
            ""
          )}
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
  encounterFilter,
  trainerFilter,
}: {
  entry: MastersheetEntry;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
  encounterFilter: boolean;
  trainerFilter: boolean;
}) {
  const encounters = encounterFilter ? [] : entry.encounters;
  const trainers = trainerFilter ? [] : entry.trainers;

  return (
    <div id={"entry_" + entry.id} className="entry-panel">
      {(encounters.length === 0 && trainers.length === 0) ||
      (encounterFilter && entry.type === MastersheetEntryType.starterLab)
        ? ""
        : renderSwitch(entry, setSelectedMon, encounters, trainers)}
    </div>
  );
}

export default MastersheetEntryPanel;
