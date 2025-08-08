import { useContext } from "react";
import MonImage from "./MonImage";
import FormTable from "../data/FormTable";
import Utility from "../shared/utils/utility";
import Dex, { DexInfo } from "../data/Dex";
import { UserContext } from "../App";
import styles from "../styles/components/GiftEncounterEntry.module.css";

interface GiftEncounterEntryProps {
  encounter: {
    name: string;
    form: number;
  };
  encounterId: string;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

function GiftEncounterEntry({
  encounter,
  encounterId,
  setSelectedMon,
}: GiftEncounterEntryProps) {
  const { encounterList, setEncounterList } = useContext(UserContext);

  const handleCatch = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEncounterList({
      ...encounterList,
      Encounters: encounterList.Encounters.concat([
        {
          type: "gift",
          id: encounterId,
          monWithForm: encounter,
        },
      ]),
    });
  };

  return (
    <div
      className={styles.giftEntry}
      onClick={() => setSelectedMon(Dex.GetDexInfo(encounter))}
    >
      <div>
        <MonImage
          formName={FormTable.GetFormName(encounter)}
          size={50}
          style={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.65))",
          }}
        />
      </div>
      <button onClick={handleCatch} className={styles.catchButton}>
        <img
          src="/sprites/items/ITEM_POKE_BALL.png"
          alt="Catch"
          title="Receive this Pokémon"
          className={styles.catchImage}
        />
      </button>
    </div>
  );
}

export default GiftEncounterEntry;
