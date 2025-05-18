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
}

function renderEntry(
  entry: MastersheetEntry,
  setSelectedEntry: React.Dispatch<React.SetStateAction<MastersheetEntry>>
): ReactNode {
  switch (entry.type) {
    case "encounter":
      return (
        <MastersheetEncounter
          encounter={entry as Encounter}
          setSelectedEntry={setSelectedEntry}
        />
      );
    case "battle":
      return (
        <MastersheetBattle
          battle={entry as Battle}
          setSelectedEntry={setSelectedEntry}
        />
      );
  }
}

function MastersheetArea({ area, setSelectedEntry }: Props) {
  return (
    <div className="mastersheet-area">
      <div className="mastersheet-area__header">{area.name}</div>
      {area.entries.map((entry) => (
        <div key={entry.entryId}>{renderEntry(entry, setSelectedEntry)}</div>
      ))}
    </div>
  );
}

export default MastersheetArea;
