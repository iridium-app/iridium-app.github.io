import { ReactNode, useState } from "react";
import { MastersheetEntry } from "../data/MastersheetData";
import { DexInfo } from "../data/Dex";
import BattlePanel from "./BattlePanel";
import EncounterPanel from "./EncounterPanel";

function MastersheetEntryPanel({
  entry,
  setSelectedMon,
}: {
  entry: MastersheetEntry;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}) {
  const [hidden, setHidden] = useState(false);

  return (
    <div className={hidden ? "entry-panel entry-panel-hidden" : "entry-panel"}>
      <div className="entry-panel__header">
        <div className="entry-panel__header-text">{entry.entryId}</div>
        <button
          className="entry-panel__hide-button"
          onClick={() => setHidden(!hidden)}
        >
          <img
            className="minimize-sprite"
            alt="minimize-button"
            src={hidden ? "/ui/maximize.png" : "/ui/minimize.png"}
          />
        </button>
      </div>
    </div>
  );
}

export default MastersheetEntryPanel;
