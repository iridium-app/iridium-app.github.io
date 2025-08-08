import { DexInfo } from "../../data/Dex";
import { MonImage, TypeImage } from "./ui";
import styles from "../../styles/components/MonHeroFrame.module.css";

interface MonHeroFrameProps {
  dexInfo: DexInfo;
  level: number;
  item: string;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

/**
 * Component for displaying a Pokémon with its stats and information
 */
function MonHeroFrame({
  dexInfo,
  level,
  item,
  setSelectedMon,
}: MonHeroFrameProps) {
  return (
    <div
      className={styles.monHeroFrame}
      onClick={() => setSelectedMon(dexInfo)}
    >
      <div className={styles.monImage}>
        <MonImage formName={dexInfo.name} size={80} />
      </div>
      <div className={styles.monInfo}>
        <div className={styles.monName}>{dexInfo.name}</div>
        <div className={styles.monLevel}>Lv. {level}</div>
        <div className={styles.monTypes}>
          {dexInfo.types.map((type) => (
            <TypeImage key={type} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MonHeroFrame;
