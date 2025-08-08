import { Dispatch, SetStateAction } from "react";
import { Area, MastersheetEntry } from "../../../data/MastersheetData";
import MastersheetArea from "./MastersheetArea";
import styles from "../../../styles/components/MastersheetView.module.css";

interface MastersheetViewProps {
  mastersheetData: Area[];
  selectedEntry: MastersheetEntry;
  setSelectedEntry: Dispatch<SetStateAction<MastersheetEntry>>;
}

/**
 * Main view component for the mastersheet feature
 */
function MastersheetView({
  mastersheetData,
  selectedEntry,
  setSelectedEntry,
}: MastersheetViewProps) {
  return (
    <div className={styles.mastersheetView}>
      {mastersheetData.map((area) => (
        <MastersheetArea
          key={area.name}
          area={area}
          selectedEntry={selectedEntry}
          setSelectedEntry={setSelectedEntry}
        />
      ))}
    </div>
  );
}

export default MastersheetView;
