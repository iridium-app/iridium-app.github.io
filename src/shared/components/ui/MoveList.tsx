import MoveData from "../../../data/MoveData";
import TypeImage from "./TypeImage";
import { Utility } from "../../utils";
import { DexInfo } from "../../../data/Dex";
import styles from "../../../styles/components/MoveList.module.css";

interface MoveListProps {
  levelUpLearnset: {
    name: string;
    level: number;
  }[];
}

/**
 * Component for displaying a Pokémon's move list
 */
function MoveList({ levelUpLearnset }: MoveListProps) {
  return (
    <div className={styles.moveBlock}>
      {levelUpLearnset.map((move) => (
        <div
          key={"move-row_" + move.name + "_" + move.level}
          className={styles.moveRow}
        >
          <div className={styles.level}>Lvl {move.level}</div>
          <div className={styles.name}>{MoveData.Dict[move.name].name}</div>
          <div className={styles.type}>
            <TypeImage type={MoveData.Dict[move.name].type} />
          </div>
          <div className={styles.power}>
            <img
              src={Utility.getDamageCategoryPath(
                MoveData.Dict[move.name].damageCategory
              )}
              alt={MoveData.Dict[move.name].damageCategory + "_image"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoveList;
