import { useContext, useState, createContext } from "react";
import { UserContext } from "../App";
import Dex from "../data/Dex";
import "../App.css";
import MastersheetData, {
  Battle,
  MastersheetEntry,
  MastersheetEntryType,
  Encounter,
  EncounterType,
} from "../data/MastersheetData";
import EntryDetailPanel from "../features/mastersheet/components/EntryDetailPanel";
import { MultiView } from "../shared/components";
import TrainerData from "../data/TrainerData";
import { MastersheetView } from "../features/mastersheet/components";
import EncounterData from "../data/EncounterData";

interface MastersheetContextType {
  selectedEntry: MastersheetEntry;
  setSelectedEntry: React.Dispatch<React.SetStateAction<MastersheetEntry>>;
}

export const MastersheetContext = createContext<MastersheetContextType>({
  selectedEntry: new MastersheetEntry(),
  setSelectedEntry: () => {},
});

function Mastersheet() {
  const { difficulty } = useContext(UserContext);

  // Create a starter entry as the default
  const defaultEntry = new Encounter();
  defaultEntry.entryId = "1";
  defaultEntry.type = MastersheetEntryType.encounter;
  defaultEntry.encounterType = EncounterType.gift;
  defaultEntry.encounterId = "g1";

  // Get the first starter from the gift choices
  const firstStarter = EncounterData.GetGiftInfo("g1").choices[0];

  const [selectedMon, setSelectedMon] = useState(Dex.GetDexInfo(firstStarter));
  const [selectedEntry, setSelectedEntry] =
    useState<MastersheetEntry>(defaultEntry);

  var mastersheetData = MastersheetData.GetMastersheetEntries(difficulty);
  var rightPanelOpen = selectedMon !== Dex.GetNone();

  const closeBtnOnClick = () => {
    setSelectedMon(Dex.GetNone());
  };

  const updateSelectedEntry: React.Dispatch<
    React.SetStateAction<MastersheetEntry>
  > = (value) => {
    const entry = typeof value === "function" ? value(selectedEntry) : value;
    setSelectedEntry(entry);
    if (entry.type === MastersheetEntryType.battle) {
      const battle = entry as Battle;
      const firstMon = TrainerData.GetFirstPartyMon(battle.battleId);
      if (firstMon) {
        setSelectedMon(Dex.GetDexInfo(firstMon));
      }
    }
  };

  return (
    <MastersheetContext.Provider
      value={{ selectedEntry, setSelectedEntry: updateSelectedEntry }}
    >
      <MastersheetView
        mastersheetData={mastersheetData}
        selectedEntry={selectedEntry}
        setSelectedEntry={updateSelectedEntry}
      />
      <EntryDetailPanel entry={selectedEntry} setSelectedMon={setSelectedMon} />
      <MultiView
        selectedMon={selectedMon}
        rightPanelOpen={rightPanelOpen}
        onClose={closeBtnOnClick}
      />
    </MastersheetContext.Provider>
  );
}

export default Mastersheet;
