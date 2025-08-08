import { EncounterInfo } from "../../../../data/EncounterData";
import { EncounterMethodList } from "../../../encounters/components";
import { useContext } from "react";
import { UserContext } from "../../../../App";
import { MonImage } from "../../../../shared/components/ui";
import { DexInfo } from "../../../../data/Dex";
import styles from "../../../../styles/components/detail_panels/StandardEncounterDetail.module.css";

interface StandardEncounterDetailProps {
  encounter: EncounterInfo;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

/**
 * Detail panel for standard encounter entries
 */
function StandardEncounterDetail({
  encounter,
  setSelectedMon,
}: StandardEncounterDetailProps) {
  const { encounterList, setEncounterList } = useContext(UserContext);
  const caught = encounterList.Encounters.find((e) => e.id === encounter.id);

  const handleUndo = () => {
    setEncounterList({
      ...encounterList,
      Encounters: encounterList.Encounters.filter((e) => e.id !== encounter.id),
    });
  };

  if (caught) {
    return (
      <div className={styles.caughtContainer}>
        <MonImage
          formName={caught.monWithForm.name}
          size={80}
          style={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.65))",
          }}
        />
        <button onClick={handleUndo} className={styles.undoButton}>
          Undo Catch
        </button>
      </div>
    );
  }

  return (
    <div>
      {encounter.methods.map((method) => (
        <EncounterMethodList
          key={method.type}
          method={method}
          encounterId={encounter.id}
          setSelectedMon={setSelectedMon}
        />
      ))}
    </div>
  );
}

export default StandardEncounterDetail;
