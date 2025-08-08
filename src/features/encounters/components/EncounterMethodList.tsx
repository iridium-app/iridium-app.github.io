import { ReactNode } from "react";
import EncounterData, { EncounterMethod } from "../../../data/EncounterData";
import EncounterEntry from "./EncounterEntry";
import { DexInfo } from "../../../data/Dex";
import styles from "../../../styles/components/EncounterMethodList.module.css";

interface EncounterMethodListProps {
  method: EncounterMethod;
  encounterId: string;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

/**
 * Component for displaying encounter methods for a location
 */
function EncounterMethodList({
  method,
  encounterId,
  setSelectedMon,
}: EncounterMethodListProps) {
  return (
    <div className={styles.methodList}>
      <div className={styles.header}>{MethodImageFromString(method.type)}</div>
      <div className={styles.encounterList}>
        {EncounterData.GetFinalizedArray(method).map((encounter) => (
          <EncounterEntry
            key={encounter.encounter.name}
            encounter={encounter}
            method={method}
            encounterId={encounterId}
            setSelectedMon={setSelectedMon}
          />
        ))}
      </div>
    </div>
  );
}

function MethodImageFromString(type: string): ReactNode {
  switch (type.toLowerCase()) {
    case "grass":
      return <img src="/ui/grass.png" className={styles.methodImage} />;
    case "oldrod":
      return <img src="/ui/fishing-mark.png" className={styles.methodImage} />;
    default:
      return <span className={styles.methodText}>{type}</span>;
  }
}

export default EncounterMethodList;
