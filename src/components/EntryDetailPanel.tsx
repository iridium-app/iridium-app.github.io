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
import styles from "../styles/components/EntryDetailPanel.module.css";

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
      return <StarterLabDetail setSelectedMon={setSelectedMon} />;
  }
}

function battleRenderSwitch(
  battle: Battle,
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>
): ReactNode {
  return (
    <StandardBattleDetail battle={battle} setSelectedMon={setSelectedMon} />
  );
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
  const panelClass =
    entry.type === MastersheetEntryType.battle
      ? styles.battlePanel
      : styles.encounterPanel;

  return (
    <div className={`${styles.entryDetailPanel} ${panelClass}`}>
      {renderSwitch(entry, setSelectedMon)}
    </div>
  );
}

export default EntryDetailPanel;
