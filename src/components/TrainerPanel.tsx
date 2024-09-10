import { useContext } from "react";
import { Battle, MultiBattle } from "../data/MastersheetData";
import TrainerData from "../data/TrainerData";
import TrainerMonPanel from "./TrainerMonPanel";
import { UserContext } from "../App";

function TrainerPanel({ battle: battle }: { battle: Battle }) {
  const trainer = TrainerData.Dict[battle.id];
  const trainerName = battle.subtype === "multi" ? (battle as MultiBattle).name.toUpperCase() : trainer.name.toUpperCase();
  const { completedTrainerList, setCompletedTrainerList } =
    useContext(UserContext);
  const hide = completedTrainerList.includes(battle.id);

  function CompleteToggleOnClick(hide: boolean, id: number) {
    if (hide) {
      setCompletedTrainerList(completedTrainerList.filter((x) => x !== id));
    } else {
      setCompletedTrainerList(completedTrainerList.concat(id));
    }
  }

  return (
    <div
      id={"trainer_" + battle.id}
      className={"trainer-panel" + (hide ? " trainer-panel-hidden" : "")}
      style={{ "--numMons": trainer.numMons } as React.CSSProperties}
    >
      <div className="trainer-panel__header">
        {trainerName}
        <button
          className="trainer-panel__complete-button"
          onClick={() => CompleteToggleOnClick(hide, battle.id)}
        >
          {hide ? "Undo" : "Mark Completed"}
        </button>
      </div>
      {trainer.battleType === "DOUBLE_BATTLE" ? (
        <div className="trainer-panel__header">(Double)</div>
      ) : (
        ""
      )}
      {battle.mandatory ? (
        ""
      ) : (
        <div className="trainer-panel__header">(Optional)</div>
      )}
      {battle.subtype === "multi" ? (
        <div className="trainer-panel__header">(Ally)</div>
      ) : (
        ""
      )}
      {trainer.party.map((mon, i) => (
        <TrainerMonPanel
          key={"trainer-mon-panel-" + trainer.name + "-" + mon.monWithForm.name + "-" + mon.monWithForm.form}
          mon={mon}
          column={i % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}

export default TrainerPanel;
