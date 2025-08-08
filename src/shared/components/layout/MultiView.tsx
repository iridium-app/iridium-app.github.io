import { DexInfo } from "../../../data/Dex";
import MonMultiView from "./MonMultiView";
import styles from "../../../styles/components/MultiView.module.css";

interface MultiViewProps {
  selectedMon: DexInfo;
  rightPanelOpen: boolean;
  onClose: () => void;
}

/**
 * Component for displaying multiple views of a Pokémon
 */
function MultiView({ selectedMon, rightPanelOpen, onClose }: MultiViewProps) {
  if (!rightPanelOpen) {
    return null;
  }

  return (
    <div className={styles.multiView}>
      <button onClick={onClose} className={styles.closeButton}>
        ×
      </button>
      <MonMultiView selectedMon={selectedMon} />
    </div>
  );
}

export default MultiView;
