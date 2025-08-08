import { useContext } from "react";
import { MonImage } from "../../../../shared/components/ui";
import { UserContext } from "../../../../App";
import FormTable from "../../../../data/FormTable";
import Dex, { DexInfo } from "../../../../data/Dex";
import { GiftEncounterEntry } from "../../../encounters/components";
import EncounterData from "../../../../data/EncounterData";
import styles from "../../../../styles/components/detail_panels/StarterLabDetail.module.css";

interface StarterLabDetailProps {
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

/**
 * Detail panel for starter lab encounters
 */
function StarterLabDetail({ setSelectedMon }: StarterLabDetailProps) {
  const { encounterList, setEncounterList } = useContext(UserContext);
  const giftInfo = EncounterData.GetGiftInfo("g1");

  const handleCatch = (choice: { name: string; form: number }) => {
    setEncounterList({
      ...encounterList,
      Encounters: encounterList.Encounters.concat([
        {
          type: "gift",
          id: "g1",
          monWithForm: choice,
        },
      ]),
    });
  };

  const caught = encounterList.Encounters.find((e) => e.id === "g1");

  if (caught) {
    return (
      <div className={styles.caughtContainer}>
        <MonImage
          formName={FormTable.GetFormName(caught.monWithForm)}
          size={80}
          style={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.65))",
          }}
        />
        <button
          onClick={() =>
            setEncounterList({
              ...encounterList,
              Encounters: encounterList.Encounters.filter((e) => e.id !== "g1"),
            })
          }
          className={styles.undoButton}
        >
          Undo Catch
        </button>
      </div>
    );
  }

  return (
    <div className={styles.starterLabDetail}>
      <div className={styles.starterLabHeader}>
        <h3>{giftInfo.name}</h3>
      </div>
      <div className={styles.starterChoices}>
        {giftInfo.choices.map((choice) => (
          <GiftEncounterEntry
            key={choice.name}
            encounter={choice}
            encounterId="g1"
            setSelectedMon={setSelectedMon}
          />
        ))}
      </div>
    </div>
  );
}

export default StarterLabDetail;
