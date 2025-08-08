import React from "react";
import { TrainerInfoMon } from "../../data/TrainerData";
import Dex, { DexInfo } from "../../data/Dex";
import MonHeroFrame from "../MonHeroFrame";
import { ItemImage } from "../../shared/components/ui";
import styles from "../../styles/components/common/BattleDetailMon.module.css";

interface BattleDetailMonProps {
  mon: TrainerInfoMon;
  index: number;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

const BattleDetailMon: React.FC<BattleDetailMonProps> = ({
  mon,
  index,
  setSelectedMon,
}) => {
  const onPokemonInfoClick = () => {
    setSelectedMon(Dex.GetDexInfo(mon.monWithForm));
  };

  return (
    <div
      className={styles.pokemonInfo}
      onClick={onPokemonInfoClick}
      key={mon.monWithForm.name + "-pokemon-info-" + index}
    >
      <div className={styles.header}>
        <MonHeroFrame mon={Dex.GetDexInfo(mon.monWithForm)} />
      </div>

      <div className={styles.attributes}>
        <div className={styles.ability}>{Dex.GetNiceName(mon.ability)}</div>
        <div className={styles.heldItem}>
          <ItemImage itemName={mon.item} />
        </div>
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
  );
};

export default BattleDetailMon;
