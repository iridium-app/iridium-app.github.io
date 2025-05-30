import {
  Encounter as SheetEncounter,
  MastersheetEntry,
  EncounterType,
} from "../data/MastersheetData";
import EncounterData from "../data/EncounterData";
import styles from "../styles/components/MastersheetEntry.module.css";
import { useContext } from "react";
import { UserContext } from "../App";
import MonImage from "./MonImage";

interface Props {
  encounter: SheetEncounter;
  setSelectedEntry: React.Dispatch<React.SetStateAction<MastersheetEntry>>;
  selectedEntry: MastersheetEntry;
}

function MastersheetEncounter({
  encounter,
  setSelectedEntry,
  selectedEntry,
}: Props) {
  const { encounterList } = useContext(UserContext);
  const isCaught = encounterList.Encounters.some(
    (caught) => caught.id === encounter.encounterId
  );

  const encounterInfo =
    encounter.encounterType == EncounterType.gift
      ? EncounterData.GetGiftInfo(encounter.encounterId)
      : EncounterData.GetInfo(encounter.encounterId);

  return (
    <div
      onClick={() => setSelectedEntry(encounter)}
      className={`${styles.mastersheetEntry} ${styles.mastersheetEncounter} ${
        selectedEntry.entryId == encounter.entryId ? styles.selectedEntry : ""
      }`}
    >
      <div>
        {encounter.encounterType == EncounterType.gift
          ? encounterInfo.name
          : "Encounter"}
      </div>
      {isCaught ? (
        <MonImage
          className={styles.encounterMon}
          formName={
            encounterList.Encounters.find(
              (caught) => caught.id === encounter.encounterId
            )?.monWithForm.name || ""
          }
          size={48}
        />
      ) : (
        <img src="/sprites/items/ITEM_POKE_BALL.png" alt="Pokeball" />
      )}
    </div>
  );
}

export default MastersheetEncounter;
