import { useContext, useState, createContext } from "react";
import { UserContext } from "../App";
import Dex from "../data/Dex";
import "../App.css";
import MastersheetData, {
  Battle,
  MastersheetEntry,
  MastersheetEntryType,
} from "../data/MastersheetData";
import EntryDetailPanel from "../components/EntryDetailPanel";
import MultiView from "../components/MultiView";
import TrainerData from "../data/TrainerData";
import MastersheetView from "../components/MastersheetView";

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
  const [selectedMon, setSelectedMon] = useState(Dex.GetNone());
  const [selectedEntry, setSelectedEntry] = useState<MastersheetEntry>(
    new MastersheetEntry()
  );

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
