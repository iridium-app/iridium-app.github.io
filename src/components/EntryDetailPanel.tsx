import { ReactNode } from "react";
import {
  Encounter,
  EncounterType,
  MastersheetEntry,
  MastersheetEntryType,
  Battle,
  MultiBattle,
} from "../data/MastersheetData";
import EncounterData from "../data/EncounterData";
import StandardEncounterDetail from "./detail_panels/StandardEncounterDetail";
import StarterLabDetail from "./detail_panels/StarterLabDetail";
import { DexInfo } from "../data/Dex";
import StandardBattleDetail from "./detail_panels/StandardBattleDetail";

function encounterRenderSwitch(
  encounter: Encounter,
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>
): ReactNode {
  switch (encounter.encounterType) {
    case EncounterType.standard:
      return (
        <StandardEncounterDetail
          encounter={EncounterData.GetInfo(encounter.encounterId)}
          setSelectedMon={setSelectedMon}
        />
      );
    case EncounterType.gift:
      return <StarterLabDetail />;
  }
}

function battleRenderSwitch(
  battle: Battle,
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>
): ReactNode {
  switch (battle.battleType) {
    case "standard":
    case "double":
    case "boss":
    case "multi":
      return (
        <StandardBattleDetail battle={battle} setSelectedMon={setSelectedMon} />
      );
  }
}

function renderSwitch(
  entry: MastersheetEntry,
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>
): ReactNode {
  switch (entry.type) {
    case MastersheetEntryType.encounter: {
      return encounterRenderSwitch(entry as Encounter, setSelectedMon);
    }
    case MastersheetEntryType.battle: {
      return battleRenderSwitch(entry as Battle, setSelectedMon);
    }
    default:
      return <div>Unknown entry type: {entry.type}</div>;
  }
}

function EntryDetailPanel({
  entry,
  setSelectedMon,
}: {
  entry: MastersheetEntry;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}) {
  return (
    <div className="entry-detail-panel">
      {renderSwitch(entry, setSelectedMon)}
    </div>
  );
}

export default EntryDetailPanel;
