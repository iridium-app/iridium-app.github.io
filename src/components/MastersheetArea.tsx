import { ReactNode } from "react";
import {
  Area,
  MastersheetEntry,
  Encounter,
  Battle,
} from "../data/MastersheetData";
import MastersheetEncounter from "./MastersheetEncounter";
import MastersheetBattle from "./MastersheetBattle";

interface Props {
  area: Area;
  setSelectedEntry: React.Dispatch<React.SetStateAction<MastersheetEntry>>;
  selectedEntry: MastersheetEntry;
}

function renderEntry(
  entry: MastersheetEntry,
  setSelectedEntry: React.Dispatch<React.SetStateAction<MastersheetEntry>>,
  selectedEntry: MastersheetEntry
): ReactNode {
  switch (entry.type) {
    case "encounter":
      return (
        <MastersheetEncounter
          encounter={entry as Encounter}
          setSelectedEntry={setSelectedEntry}
          selectedEntry={selectedEntry}
        />
      );
    case "battle":
      return (
        <MastersheetBattle
          battle={entry as Battle}
          setSelectedEntry={setSelectedEntry}
          selectedEntry={selectedEntry}
        />
      );
  }
}

function MastersheetArea({ area, setSelectedEntry, selectedEntry }: Props) {
  return (
    <div className="mastersheet-area">
      <div className="mastersheet-area__header">{area.name}</div>
      {area.entries.map((entry) => (
        <div key={entry.entryId}>
          {renderEntry(entry, setSelectedEntry, selectedEntry)}
        </div>
      ))}
    </div>
  );
}

export default MastersheetArea;
