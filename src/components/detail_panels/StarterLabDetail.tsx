import { useContext } from "react";
import MonImage from "../MonImage";
import { UserContext } from "../../App";
import FormTable from "../../data/FormTable";
import EncounterData from "../../data/EncounterData";
import styles from "../../styles/components/detail_panels/StarterLabDetail.module.css";
import GiftEncounterEntry from "../GiftEncounterEntry";
import { DexInfo } from "../../data/Dex";

interface StarterLabDetailProps {
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

function StarterLabDetail({ setSelectedMon }: StarterLabDetailProps) {
  const { encounterList, setEncounterList } = useContext(UserContext);
  const starterChoices = EncounterData.GetGiftInfo("g1").choices;
  const caught = encounterList.Encounters.find((e) => e.id === "starter");

  const handleUndo = () => {
    setEncounterList({
      ...encounterList,
      Encounters: encounterList.Encounters.filter((e) => e.id !== "starter"),
    });
  };

  return (
    <div className={styles.starterDetailPanel}>
      {caught ? (
        <div className={styles.caughtContainer}>
          <MonImage
            formName={caught.monWithForm.name}
            size={80}
            style={{
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.65))",
            }}
          />
          <button onClick={handleUndo} className={styles.undoButton}>
            Undo Starter Choice
          </button>
        </div>
      ) : (
        <div className={styles.starterChoices}>
          {starterChoices.map((starter) => (
            <GiftEncounterEntry
              key={starter.name}
              encounter={starter}
              encounterId="starter"
              setSelectedMon={setSelectedMon}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default StarterLabDetail;
