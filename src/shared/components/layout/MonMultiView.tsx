import { DexInfo } from "../../../data/Dex";
import { MonImage, TypeImage } from "../ui";
import { StatBlock } from "../ui";
import styles from "../../../styles/components/MonMultiView.module.css";

interface MonMultiViewProps {
  selectedMon: DexInfo;
}

/**
 * Component for displaying detailed Pokémon information in multi-view
 */
function MonMultiView({ selectedMon }: MonMultiViewProps) {
  return (
    <div className={styles.monMultiView}>
      <div className={styles.monHeader}>
        <MonImage formName={selectedMon.name} size={120} />
        <div className={styles.monInfo}>
          <h2>{selectedMon.name}</h2>
          <div className={styles.monTypes}>
            {selectedMon.types.map((type) => (
              <TypeImage key={type} type={type} />
            ))}
          </div>
        </div>
      </div>
      <StatBlock dexInfo={selectedMon} />
    </div>
  );
}

export default MonMultiView;
