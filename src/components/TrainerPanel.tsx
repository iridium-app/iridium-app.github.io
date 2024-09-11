import { TrainerInfo } from "../data/TrainerData";
import TrainerMonPanel from "./TrainerMonPanel";

function TrainerPanel({
  trainer,
  hide,
  showName,
}: {
  trainer: TrainerInfo;
  hide: boolean;
  showName: boolean;
}) {
  return (
    <div
      id={"trainer_" + trainer.name}
      className={"trainer-panel" + (hide ? " trainer-panel-hidden" : "")}
      style={{ "--numMons": trainer.numMons } as React.CSSProperties}
    >
      <div className="trainer-panel__header">
        {showName ? trainer.name : ""}
      </div>
      {trainer.battleType === "DOUBLE_BATTLE" ? (
        <div className="trainer-panel__header">(Double)</div>
      ) : (
        ""
      )}
      {trainer.party.map((mon, i) => (
        <TrainerMonPanel
          key={
            "trainer-mon-panel-" +
            trainer.name +
            "-" +
            mon.monWithForm.name +
            "-" +
            mon.monWithForm.form
          }
          mon={mon}
          column={i % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}

export default TrainerPanel;
