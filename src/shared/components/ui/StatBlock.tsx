import { DexInfo } from "../../../data/Dex";
import MoveList from "./MoveList";
import styles from "../../../styles/components/StatBlock.module.css";

interface StatBlockProps {
  dexInfo: DexInfo;
}

/**
 * Component for displaying a Pokémon's stats and moves
 */
function StatBlock({ dexInfo }: StatBlockProps) {
  return (
    <div className={styles.statBlock}>
      <div className={styles.stats}>
        <div className={styles.statRow}>
          <div className={styles.statLabel}>HP</div>
          <div className={styles.statValue}>{dexInfo.baseStats.hp}</div>
        </div>
        <div className={styles.statRow}>
          <div className={styles.statLabel}>Attack</div>
          <div className={styles.statValue}>{dexInfo.baseStats.attack}</div>
        </div>
        <div className={styles.statRow}>
          <div className={styles.statLabel}>Defense</div>
          <div className={styles.statValue}>{dexInfo.baseStats.defense}</div>
        </div>
        <div className={styles.statRow}>
          <div className={styles.statLabel}>Sp. Atk</div>
          <div className={styles.statValue}>
            {dexInfo.baseStats.specialAttack}
          </div>
        </div>
        <div className={styles.statRow}>
          <div className={styles.statLabel}>Sp. Def</div>
          <div className={styles.statValue}>
            {dexInfo.baseStats.specialDefense}
          </div>
        </div>
        <div className={styles.statRow}>
          <div className={styles.statLabel}>Speed</div>
          <div className={styles.statValue}>{dexInfo.baseStats.speed}</div>
        </div>
      </div>
      <div className={styles.moves}>
        <h3>Level Up Moves</h3>
        <MoveList levelUpLearnset={dexInfo.levelUpLearnset} />
      </div>
    </div>
  );
}

export default StatBlock;
