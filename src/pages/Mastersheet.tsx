import { useContext, useState } from "react";
import { UserContext } from "../App";

import Dex from "../data/Dex";
import MoveData from "../data/MoveData";
import Utility from "../Utility";

import "../App.css";
import TypeImage from "../components/TypeImage";
import TableOfContents from "../components/TableOfContents";
import MastersheetData, { MastersheetEntry } from "../data/MastersheetData";
import MastersheetEntryPanel from "../components/MastersheetEntryPanel";
import EncounterList from "../data/UserData";
import EntryDetailPanel from "../components/EntryDetailPanel";
import StatDisplay from "../components/StatDisplay";
import TrainerMonPanel from "../components/TrainerMonPanel";
import MultiView from "../components/MultiView";
import MastersheetArea from "../components/MastersheetArea";

function Mastersheet() {
  const { difficulty } = useContext(UserContext);
  const [selectedMon, setSelectedMon] = useState(Dex.GetNone());
  const [trainerFilter, setTrainerFilter] = useState(false);
  const [encounterFilter, setEncounterFilter] = useState(false);
  const { setEncounterList } = useContext(UserContext);
  const { setCompletedTrainerList } = useContext(UserContext);
  const [selectedEntry, setSelectedEntry] = useState(new MastersheetEntry());

  var mastersheetData = MastersheetData.GetMastersheetEntries(difficulty);

  // const [searchList, setSearchList] = useState(Dex.Dict);
  var rightPanelOpen = selectedMon !== Dex.GetNone();

  const closeBtnOnClick = () => {
    setSelectedMon(Dex.GetNone());
  };

  const encounterFilterOnClick = () => {
    setEncounterFilter(!encounterFilter);
  };

  const clearDataOnClick = () => {
    setEncounterList(new EncounterList([]));
    setCompletedTrainerList([]);
  };

  return (
    <>
      <div className="mastersheet-view">
        {mastersheetData.map((area) => (
          <MastersheetArea
            key={area.name}
            area={area}
            setSelectedEntry={setSelectedEntry}
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
