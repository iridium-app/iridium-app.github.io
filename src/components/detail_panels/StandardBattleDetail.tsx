import React from "react";
import { Battle } from "../../data/MastersheetData";
import TrainerData from "../../data/TrainerData";
import { DexInfo } from "../../data/Dex";
import styles from "../../styles/components/detail_panels/StandardBattleDetail.module.css";
import BattleDetailMon from "../common/BattleDetailMon";

interface StandardBattleDetailProps {
  battle: Battle;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

const StandardBattleDetail: React.FC<StandardBattleDetailProps> = ({
  battle,
  setSelectedMon,
}) => {
  const party = TrainerData.Dict[battle.battleId].party;

  return (
    <div className={styles.standardBattleDetail}>
      {party.map((mon, index) => (
        <BattleDetailMon
          key={mon.monWithForm.name + "-pokemon-info-" + index}
          mon={mon}
          index={index}
          setSelectedMon={setSelectedMon}
        />
      ))}
    </div>
  );
};

export default StandardBattleDetail;
