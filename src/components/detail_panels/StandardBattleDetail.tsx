import React from "react";
import { Battle } from "../../data/MastersheetData";
import TrainerData, { TrainerInfoMon } from "../../data/TrainerData";
import Dex, { DexInfo } from "../../data/Dex";
import MonHeroFrame from "../MonHeroFrame";
import styles from "../../styles/components/detail_panels/StandardBattleDetail.module.css";

interface StandardBattleDetailProps {
  battle: Battle;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

const StandardBattleDetail: React.FC<StandardBattleDetailProps> = ({
  battle,
  setSelectedMon,
}) => {
  const party = TrainerData.Dict[battle.battleId].party;

  const onPokemonInfoClick = (mon: TrainerInfoMon) => {
    setSelectedMon(Dex.GetDexInfo(mon.monWithForm));
  };

  return (
    <div className={styles.standardBattleDetail}>
      {party.map((mon, index) => (
        <div
          className={styles.pokemonInfo}
          onClick={() => onPokemonInfoClick(mon)}
          key={mon.monWithForm.name + "-pokemon-info-" + index}
        >
          <div className={styles.header}>
            <MonHeroFrame mon={Dex.GetDexInfo(mon.monWithForm)} />
          </div>

          <div className={styles.attributes}>
            <div className={styles.ability}>{Dex.GetNiceName(mon.ability)}</div>
            <div className={styles.heldItem}>{Dex.GetNiceName(mon.item)}</div>
          </div>

          <div className={styles.movesList}>
            {mon.moveset.map((move, index) => (
              <div
                key={mon.monWithForm.name + "-move-" + move + "-" + index}
                className={styles.move}
              >
                {Dex.GetNiceName(move)}
              </div>
            )) || (
              <>
                <div className={styles.move}>Stomp</div>
                <div className={styles.move}>Tackle</div>
                <div className={styles.move}>Bulldoze</div>
                <div className={styles.move}>Leech Seed</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StandardBattleDetail;
