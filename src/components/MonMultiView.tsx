import { DexInfo } from "../data/Dex";
import MonHeroFrame from "./MonHeroFrame";
import StatBlock from "./StatBlock";
import MoveList from "./MoveList";
import styles from "../styles/components/MultiView.module.css";

interface MonMultiViewProps {
  selectedMon: DexInfo;
}

function MonMultiView({ selectedMon }: MonMultiViewProps) {
  return (
    <>
      <div className={styles.heroFrame}>
        <MonHeroFrame mon={selectedMon} />
        <StatBlock baseStats={selectedMon.baseStats} />
      </div>
      <div className={styles.moveList}>
        <MoveList levelUpLearnset={selectedMon.levelUpLearnset} />
      </div>
    </>
  );
}

export default MonMultiView;
