import { useContext } from "react";
import { Trainer } from "../data/MastersheetData";
import TrainerData from "../data/TrainerData";
import TrainerMonPanel from "./TrainerMonPanel";
import { UserContext } from "../App";

function TrainerPanel({ mastersheetTrainer }: { mastersheetTrainer: Trainer }) {
  const trainer = TrainerData.Dict[mastersheetTrainer.id];
  const { completedTrainerList, setCompletedTrainerList } =
    useContext(UserContext);
  const hide = completedTrainerList.includes(mastersheetTrainer.id);

  function CompleteToggleOnClick(hide: boolean, id: number) {
    if (hide) {
      setCompletedTrainerList(completedTrainerList.filter((x) => x !== id));
    } else {
      setCompletedTrainerList(completedTrainerList.concat(id));
    }
  }

  return (
    <div
      id={"trainer_" + mastersheetTrainer.id}
      className={"trainer-panel" + (hide ? " trainer-panel-hidden" : "")}
      style={{ "--numMons": trainer.numMons } as React.CSSProperties}
    >
      <div className="trainer-panel__header">
        {trainer.name.toUpperCase()}
        <button
          onClick={() => CompleteToggleOnClick(hide, mastersheetTrainer.id)}
        >
          {hide ? "Undo" : "Mark Completed"}
        </button>
      </div>
      {trainer.battleType === "DOUBLE_BATTLE" ? (
        <div className="trainer-panel__header">(Double)</div>
      ) : (
        ""
      )}
      {mastersheetTrainer.mandatory ? (
        ""
      ) : (
        <div className="trainer-panel__header">(Optional)</div>
      )}
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
