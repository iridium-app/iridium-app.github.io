import { ReactNode, useContext } from "react";
import { UserContext } from "../App";
import { Battle, MultiBattle } from "../data/MastersheetData";
import TrainerData from "../data/TrainerData";
import TrainerPanel from "./TrainerPanel";

function renderSwitch(battle: Battle, hide: boolean): ReactNode {
  const mainTrainer = TrainerData.Dict[battle.id];

  switch (battle.subtype) {
    case "boss":
    case "standard":
      return (
        <>
          <TrainerPanel trainer={mainTrainer} hide={hide} showName={false} />
        </>
      );
    case "multi":
      return (
        <>
          <TrainerPanel trainer={mainTrainer} hide={hide} showName={true} />
          {(battle as MultiBattle).enemyIds.map((id) => (
            <TrainerPanel
              key={id}
              trainer={TrainerData.Dict[id]}
              hide={hide}
              showName={true}
            />
          ))}
        </>
      );
  }
}

function GetBattleName(battle: Battle): string {
  return battle.subtype === "multi"
    ? (battle as MultiBattle).name.toUpperCase()
    : TrainerData.Dict[battle.id].name.toUpperCase();
}

function BattlePanel({ battle }: { battle: Battle }) {
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
      id={"battle" + battle.id}
      className={"battle-panel" + (hide ? " battle-panel-hidden" : "")}
    >
      <div className="battle-panel__header">
        {GetBattleName(battle)}
        <button
          className="trainer-panel__complete-button"
          onClick={() => CompleteToggleOnClick(hide, battle.id)}
        >
          {hide ? "Undo" : "Mark Completed"}
        </button>
      </div>
      {battle.mandatory ? (
        ""
      ) : (
        <div className="trainer-panel__header">(Optional)</div>
      )}
      {renderSwitch(battle, hide)}
    </div>
  );
}

export default BattlePanel;
