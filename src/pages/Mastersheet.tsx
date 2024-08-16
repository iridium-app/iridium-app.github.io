import { useContext, useState } from "react";
import { UserContext } from "../App";

import Dex from "../data/Dex";
import MoveData from "../data/MoveData";
import Utility from "../Utility";

import "../App.css";
import TypeImage from "../components/TypeImage";
import TableOfContents from "../components/TableOfContents";
import MastersheetData from "../data/MastersheetData";
import MastersheetEntryPanel from "../components/MastersheetEntryPanel";

function Mastersheet() {
  const { difficulty } = useContext(UserContext);
  const [selectedMon, setSelectedMon] = useState(Dex.GetNone());
  const [trainerFilter, setTrainerFilter] = useState(false);
  const [encounterFilter, setEncounterFilter] = useState(false);

  var mastersheetData = MastersheetData.GetMastersheetEntries(difficulty);
  // if (trainerFilter)
  //   mastersheetData = mastersheetData.filter((element) => {
  //     return element.type !== "trainer";
  //   });
  // if (encounterFilter)
  //   mastersheetData = mastersheetData.filter((element) => {
  //     return element.type !== "encounter";
  //   });

  // const [searchList, setSearchList] = useState(Dex.Dict);
  var rightPanelOpen = selectedMon !== Dex.GetNone();

  const closeBtnOnClick = () => {
    setSelectedMon(Dex.GetNone());
  };

  const encounterFilterBtnClick = () => {
    setEncounterFilter(!encounterFilter);
  };

  return (
    <div className="mastersheet">
      <div className="left-panel">
        <div>Filters</div>
        <button
          className={encounterFilter ? "filter-btn pressed" : "filter-btn"}
          onClick={encounterFilterBtnClick}
        >
          Hide Encounters
        </button>
        <button
          className={trainerFilter ? "filter-btn pressed" : "filter-btn"}
          onClick={() => setTrainerFilter(!trainerFilter)}
        >
          Hide Trainers
        </button>
        <TableOfContents filteredMastersheet={mastersheetData} />
      </div>
      <div
        className="middle-panel"
        style={
          {
            "--middle-panel-span": rightPanelOpen ? "6" : "8",
          } as React.CSSProperties
        }
      >
        <div className="middle-panel__gutter">
          {mastersheetData.map((entry) => (
            <MastersheetEntryPanel
              key={"entry-panel_" + entry.id}
              entry={entry}
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
                <TypeImage type={MoveData.Dict[move.name].type} />
              </div>
              <div className="move-row__power">
                <img
                  src={Utility.GetDamageCategoryPath(
                    MoveData.Dict[move.name].damageCategory
                  )}
                  alt={MoveData.Dict[move.name].damageCategory + "_image"}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mastersheet;
