import { MultiBattle } from "../../../../data/MastersheetData";
import { DexInfo } from "../../../../data/Dex";
import { BattleDetailMon } from "../../../battles/components";
import TrainerData from "../../../../data/TrainerData";
import styles from "../../../../styles/components/detail_panels/MultiBattleDetail.module.css";

interface MultiBattleDetailProps {
  battle: MultiBattle;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

/**
 * Detail panel for multi-battle entries
 */
function MultiBattleDetail({ battle, setSelectedMon }: MultiBattleDetailProps) {
  const trainerInfo = TrainerData.Dict[battle.battleId];

  return (
    <div className={styles.multiBattleDetail}>
      <div className={styles.battleHeader}>
        <h3>{trainerInfo.name}</h3>
        <div className={styles.battleType}>Multi Battle</div>
      </div>
      <div className={styles.battleParty}>
        {trainerInfo.party.map((mon, index) => (
          <BattleDetailMon
            key={index}
            mon={mon}
            setSelectedMon={setSelectedMon}
          />
        ))}
      </div>
      <div className={styles.enemyInfo}>
        <h4>Enemy Trainers:</h4>
        {battle.enemyIds.map((enemyId) => {
          const enemyInfo = TrainerData.Dict[enemyId];
          return (
            <div key={enemyId} className={styles.enemyTrainer}>
              {enemyInfo.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MultiBattleDetail;
