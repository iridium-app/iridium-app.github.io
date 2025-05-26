import { DexInfo } from "../data/Dex";
import MonMultiView from "./MonMultiView";
import styles from "../styles/components/MultiView.module.css";
import { useContext } from "react";
import { MastersheetContext } from "../pages/Mastersheet";

interface MultiViewProps {
  selectedMon: DexInfo;
  rightPanelOpen: boolean;
  onClose: () => void;
}

function MultiView({ selectedMon, rightPanelOpen, onClose }: MultiViewProps) {
  const { selectedEntry } = useContext(MastersheetContext);

  const viewClass =
    selectedEntry.type === "battle" ? styles.battleView : styles.encounterView;

  return (
    <div className={`${styles.multiView} ${viewClass}`}>
      <div className={styles.search}>Lorem Ipsum</div>
      <MonMultiView selectedMon={selectedMon} />
    </div>
  );
}

export default MultiView;
