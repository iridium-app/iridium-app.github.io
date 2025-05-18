import { DexInfo } from "../data/Dex";
import MonMultiView from "./MonMultiView";

interface MultiViewProps {
  selectedMon: DexInfo;
  rightPanelOpen: boolean;
  onClose: () => void;
}

function MultiView({ selectedMon, rightPanelOpen, onClose }: MultiViewProps) {
  return (
    <div className="multi-view">
      <div className="search">Lorem Ipsum</div>
      <MonMultiView selectedMon={selectedMon} />
    </div>
  );
}

export default MultiView;
