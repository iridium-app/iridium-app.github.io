import { ReactNode } from "react";
import {
  Area,
  MastersheetEntry,
  Encounter,
  Battle,
} from "../../../data/MastersheetData";
import MastersheetEncounter from "./MastersheetEncounter";
import MastersheetBattle from "./MastersheetBattle";
import styles from "../../../styles/components/Mastersheet.module.css";

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

/**
 * Component for rendering a mastersheet area with its entries
 */
function MastersheetArea({ area, setSelectedEntry, selectedEntry }: Props) {
  return (
    <div className={styles.mastersheetArea}>
      <div className={styles.mastersheetAreaHeader}>{area.name}</div>
      {area.entries.map((entry) => (
        <div key={entry.entryId}>
          {renderEntry(entry, setSelectedEntry, selectedEntry)}
        </div>
      ))}
    </div>
  );
}

export default MastersheetArea;
