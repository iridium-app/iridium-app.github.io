import { Battle, MastersheetEntry } from "../data/MastersheetData";
import MonImage from "./MonImage";
import TrainerData from "../data/TrainerData";
import Utility from "../Utility";

interface Props {
  battle: Battle;
  setSelectedEntry: React.Dispatch<React.SetStateAction<MastersheetEntry>>;
}

function MastersheetBattle({ battle, setSelectedEntry }: Props) {
  const trainerInfo = TrainerData.Dict[battle.battleId];

  return (
    <div
      onClick={() => setSelectedEntry(battle)}
      className="mastersheet-entry mastersheet-battle"
    >
      <img src={Utility.GetTrainerImage(trainerInfo)} />
      <div className="mastersheet-battle__mon-list">
        {trainerInfo.party.map((mon) => (
          <MonImage
            key={mon.monWithForm.name}
            formName={mon.monWithForm.name}
            size={50}
          />
        ))}
      </div>
    </div>
  );
}

export default MastersheetBattle;
