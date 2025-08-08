import { Battle } from "../../../../data/MastersheetData";
import { DexInfo } from "../../../../data/Dex";
import { BattleDetailMon } from "../../../battles/components";
import TrainerData from "../../../../data/TrainerData";
import styles from "../../../../styles/components/detail_panels/StandardBattleDetail.module.css";

interface StandardBattleDetailProps {
  battle: Battle;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

/**
 * Detail panel for standard battle entries
 */
function StandardBattleDetail({
  battle,
  setSelectedMon,
}: StandardBattleDetailProps) {
  const trainerInfo = TrainerData.Dict[battle.battleId];

  return (
    <div className={styles.standardBattleDetail}>
      <div className={styles.battleHeader}>
        <h3>{trainerInfo.name}</h3>
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
    </div>
  );
}

export default StandardBattleDetail;
