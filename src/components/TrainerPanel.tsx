import { useState } from "react";
import TrainerData from "../data/TrainerData";
import TrainerMonPanel from "./TrainerMonPanel";

function TrainerPanel({ trainerId }: { trainerId: number }) {
  const trainer = TrainerData.Dict[trainerId];
  
  return (
    <div
      className="trainer-panel"
      style={{ "--numMons": trainer.numMons } as React.CSSProperties}
    >
      <div className="trainer-panel__header">{trainer.name.toUpperCase()}</div>
      {trainer.party.map((mon, i) => (
        <TrainerMonPanel
          key={"trainer-mon-panel-" + trainer.name + "-" + mon.monWithForm.name}
          mon={mon}
          column={i % 2 == 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}

export default TrainerPanel;
