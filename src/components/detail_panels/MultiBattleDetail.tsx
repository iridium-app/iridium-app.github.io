import React from "react";
import { Battle, MultiBattle } from "../../data/MastersheetData";
import { DexInfo } from "../../data/Dex";
import styles from "../../styles/components/detail_panels/MultiBattleDetail.module.css";
import TrainerData, { TrainerInfo } from "../../data/TrainerData";
import BattleDetailMon from "../common/BattleDetailMon";

interface MultiBattleDetailProps {
  battle: Battle;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

const MultiBattleDetail: React.FC<MultiBattleDetailProps> = ({
  battle,
  setSelectedMon,
}) => {
  const multiBattle = battle as MultiBattle;
  const ally = TrainerData.Dict[battle.battleId];
  const enemies = multiBattle.enemyIds.map((id) => TrainerData.Dict[id]);

  return (
    <div className={styles.multiBattleDetail}>
      <div className={styles.allySection}>
        <h2 className={styles.sectionTitle}>Ally</h2>
        <div className={styles.partyContainer}>
          {ally.party.map((mon, index) => (
            <BattleDetailMon
              key={`ally-${mon.monWithForm.name}-${index}`}
              mon={mon}
              index={index}
              setSelectedMon={setSelectedMon}
            />
          ))}
        </div>
      </div>

      <div className={styles.enemiesSection}>
        {enemies.map((enemy: TrainerInfo, enemyIndex: number) => (
          <div key={`enemy-${enemyIndex}`} className={styles.enemyParty}>
            <h2 className={styles.sectionTitle}>Enemy {enemyIndex + 1}</h2>
            <div className={styles.partyContainer}>
              {enemy.party.map((mon, monIndex) => (
                <BattleDetailMon
                  key={`enemy-${enemyIndex}-${mon.monWithForm.name}-${monIndex}`}
                  mon={mon}
                  index={monIndex}
                  setSelectedMon={setSelectedMon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiBattleDetail;
