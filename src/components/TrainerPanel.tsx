import { Trainer } from "../data/MastersheetData";
import TrainerData from "../data/TrainerData";
import TrainerMonPanel from "./TrainerMonPanel";

function TrainerPanel({ mastersheetTrainer }: { mastersheetTrainer: Trainer }) {
  const trainer = TrainerData.Dict[mastersheetTrainer.id];

  return (
    <div
      id={"trainer_" + mastersheetTrainer.id}
      className="trainer-panel"
      style={{ "--numMons": trainer.numMons } as React.CSSProperties}
    >
      <div className="trainer-panel__header">{trainer.name.toUpperCase()}</div>
      {trainer.battleType === "DOUBLE_BATTLE" ? <div className="trainer-panel__header">(Double)</div> : ""}
      {mastersheetTrainer.mandatory ? "" : <div className="trainer-panel__header">(Optional)</div>}
      {trainer.party.map((mon, i) => (
        <TrainerMonPanel
          key={"trainer-mon-panel-" + trainer.name + "-" + mon.monWithForm.name}
          mon={mon}
          column={i % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}

export default TrainerPanel;
