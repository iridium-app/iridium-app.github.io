import { useContext, useState } from "react";
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
import MastersheetArea from "../components/MastersheetArea";
import TrainerData from "../data/TrainerData";

function Mastersheet() {
  const { difficulty } = useContext(UserContext);
  const [selectedMon, setSelectedMon] = useState(Dex.GetNone());
  const [selectedEntry, setSelectedEntry] = useState<MastersheetEntry>(
    new MastersheetEntry()
  );

  var mastersheetData = MastersheetData.GetMastersheetEntries(difficulty);

  // const [searchList, setSearchList] = useState(Dex.Dict);
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
    <>
      <div className="mastersheet-view">
        {mastersheetData.map((area) => (
          <MastersheetArea
            key={area.name}
            area={area}
            selectedEntry={selectedEntry}
            setSelectedEntry={updateSelectedEntry}
          />
        ))}
      </div>
      <EntryDetailPanel entry={selectedEntry} setSelectedMon={setSelectedMon} />
      <MultiView
        selectedMon={selectedMon}
        rightPanelOpen={rightPanelOpen}
        onClose={closeBtnOnClick}
      />
    </>
  );
}

export default Mastersheet;
