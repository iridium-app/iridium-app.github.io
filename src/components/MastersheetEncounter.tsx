import {
  Encounter,
  MastersheetEntry,
  EncounterType,
} from "../data/MastersheetData";
import EncounterData from "../data/EncounterData";
import styles from "../styles/components/MastersheetEntry.module.css";

interface Props {
  encounter: Encounter;
  setSelectedEntry: React.Dispatch<React.SetStateAction<MastersheetEntry>>;
  selectedEntry: MastersheetEntry;
}

function MastersheetEncounter({
  encounter,
  setSelectedEntry,
  selectedEntry,
}: Props) {
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
      <img src="/sprites/items/ITEM_POKE_BALL.png" alt="Pokeball" />
    </div>
  );
}

export default MastersheetEncounter;
