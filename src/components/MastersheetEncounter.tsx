import { Encounter, MastersheetEntry } from "../data/MastersheetData";
import EncounterData from "../data/EncounterData";

interface Props {
  encounter: Encounter;
  setSelectedEntry: React.Dispatch<React.SetStateAction<MastersheetEntry>>;
}

function MastersheetEncounter({ encounter, setSelectedEntry }: Props) {
  const encounterInfo = EncounterData.GetInfo(encounter.entryId);

  return (
    <div
      onClick={() => setSelectedEntry(encounter)}
      className="mastersheet-entry mastersheet-encounter"
    >
      <div>{encounterInfo.name}</div>
      <img src="/sprites/items/ITEM_POKE_BALL.png" />
    </div>
  );
}

export default MastersheetEncounter;
