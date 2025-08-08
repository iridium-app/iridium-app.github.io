import { TrainerInfoMon } from "../../../data/TrainerData";
import Dex, { DexInfo } from "../../../data/Dex";
import MonHeroFrame from "../../../shared/components/MonHeroFrame";
import { ItemImage } from "../../../shared/components/ui";
import styles from "../../../styles/components/common/BattleDetailMon.module.css";

interface BattleDetailMonProps {
  mon: TrainerInfoMon;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

/**
 * Component for displaying a trainer's Pokémon in battle detail view
 */
function BattleDetailMon({ mon, setSelectedMon }: BattleDetailMonProps) {
  const dexInfo = Dex.GetDexInfo(mon.monWithForm);

  return (
    <div
      className={styles.battleDetailMon}
      onClick={() => setSelectedMon(dexInfo)}
    >
      <MonHeroFrame
        dexInfo={dexInfo}
        level={mon.level}
        item={mon.item}
        setSelectedMon={setSelectedMon}
      />
      <div className={styles.itemContainer}>
        <ItemImage itemName={mon.item} />
      </div>
    </div>
  );
}

export default BattleDetailMon;
