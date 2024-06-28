import { useCallback, useContext, useState } from "react";
import { UserContext } from "../App";

import Dex from "../Dex";
import MoveData from "../MoveData";
import TrainerPanel from "../TrainerPanel";
import Utility from "../Utility";
import mastersheet from "../data/mastersheet.json";

import "../App.css";

function Mastersheet() {
  const { difficulty } = useContext(UserContext);
  const [selectedMon, setSelectedMon] = useState(Dex.Dict["SPECIES_NONE"]);
  const mastersheetData = difficulty === "casual" ? mastersheet.casual : mastersheet.elite;
  // const [searchList, setSearchList] = useState(Dex.Dict);
  var rightPanelOpen = selectedMon !== Dex.Dict["SPECIES_NONE"];

  const closeBtnOnClick = () => {
    setSelectedMon(Dex.Dict["SPECIES_NONE"]);
  };

  return (
    <div className="mastersheet">
      <div
        className="left-panel"
        style={
          {
            "--grid": rightPanelOpen ? "1 / 1 / 1 / 9" : "1 / 1 / 1 / 13",
          } as React.CSSProperties
        }
      >
        {mastersheetData.map((trainer) => (
          <TrainerPanel
            key={"trainer_" + trainer.id}
            trainerId={trainer.id}
            setSelectedMon={setSelectedMon}
          />
        ))}
        {/*{" "}
        <form onSubmit={onSubmit}>
          <label>
            Search
            <input type="text" onChange={onChange} />
          </label>
        </form>
        {Object.keys(searchList).map((key) => (
          <button
            key={"button_" + key}
            onClick={() => setSelectedMon(Dex.Dict[key])}
          >
            {Dex.Dict[key].name}
          </button>
        ))}{" "}
        */}
      </div>
      <div
        className="right-panel"
        style={
          {
            "--display": rightPanelOpen ? "flex" : "none",
          } as React.CSSProperties
        }
      >
        <button className="right-panel__close-btn" onClick={closeBtnOnClick}>
          CLOSE
        </button>
        <div className="">{selectedMon.name}</div>
        <div className="stat-block">
          <div className="stat-row">
            <div className="stat-row__name">HP:</div>
            <div className="stat-row__number">{selectedMon.baseStats.hp}</div>
            <div
              className="stat-row__bar"
              style={
                {
                  "--progress": selectedMon.baseStats.hp / 2.55,
                  width: selectedMon.baseStats.hp / 2.55 + "%",
                } as React.CSSProperties
              }
            />
          </div>
          <div className="stat-row">
            <div className="stat-row__name">Attack:</div>
            <div className="stat-row__number">
              {selectedMon.baseStats.attack}
            </div>
            <div
              className="stat-row__bar"
              style={
                {
                  "--progress": selectedMon.baseStats.attack / 1.7,
                  width: selectedMon.baseStats.attack / 1.7 + "%",
                } as React.CSSProperties
              }
            />
          </div>
          <div className="stat-row">
            <div className="stat-row__name">Defense:</div>
            <div className="stat-row__number">
              {selectedMon.baseStats.defense}
            </div>
            <div
              className="stat-row__bar"
              style={
                {
                  "--progress": selectedMon.baseStats.defense / 2.5,
                  width: selectedMon.baseStats.defense / 2.5 + "%",
                } as React.CSSProperties
              }
            ></div>
          </div>
          <div className="stat-row">
            <div className="stat-row__name">Sp. Atk:</div>
            <div className="stat-row__number">
              {selectedMon.baseStats.specialAttack}
            </div>
            <div
              className="stat-row__bar"
              style={
                {
                  "--progress": selectedMon.baseStats.specialAttack / 1.94,
                  width: selectedMon.baseStats.specialAttack / 1.94 + "%",
                } as React.CSSProperties
              }
            />
          </div>
          <div className="stat-row">
            <div className="stat-row__name">Sp. Def:</div>
            <div className="stat-row__number">
              {selectedMon.baseStats.specialDefense}
            </div>
            <div
              className="stat-row__bar"
              style={
                {
                  "--progress": selectedMon.baseStats.specialDefense / 2.5,
                  width: selectedMon.baseStats.specialDefense / 2.5 + "%",
                } as React.CSSProperties
              }
            />
          </div>
          <div className="stat-row">
            <div className="stat-row__name">Speed:</div>
            <div className="stat-row__number">
              {selectedMon.baseStats.speed}
            </div>
            <div
              className="stat-row__bar"
              style={
                {
                  "--progress": selectedMon.baseStats.speed / 1.45,
                  width: selectedMon.baseStats.speed / 1.45 + "%",
                } as React.CSSProperties
              }
            />
          </div>
        </div>
        <div className="move-block">
          {selectedMon.levelUpLearnset.map((move) => (
            <div
              key={"move-row_" + move.name + "_" + move.level}
              className="move-row"
            >
              <div className="move-row__level">Lvl {move.level}</div>
              <div className="move-row__name">
                {MoveData.Dict[move.name].name}
              </div>
              <div className="move-row__type">
                {Utility.GetNiceTypeName(MoveData.Dict[move.name].type)}
              </div>
              <div className="move-row__power">
                {MoveData.Dict[move.name].damageCategory === "SPLIT_STATUS"
                  ? "Status"
                  : MoveData.Dict[move.name].basePower}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mastersheet;
