import { DexInfo } from "../data/Dex";
import MonHeroFrame from "./MonHeroFrame";
import StatBlock from "./StatBlock";
import MoveList from "./MoveList";

interface MonMultiViewProps {
  selectedMon: DexInfo;
}

function MonMultiView({ selectedMon }: MonMultiViewProps) {
  return (
    <>
      <div className="mon-multi-view__hero-frame">
        <MonHeroFrame mon={selectedMon} />
        <StatBlock baseStats={selectedMon.baseStats} />
      </div>
      <div className="mon-multi-view__move-list">
        <MoveList levelUpLearnset={selectedMon.levelUpLearnset} />
      </div>
    </>
  );
}

export default MonMultiView;
