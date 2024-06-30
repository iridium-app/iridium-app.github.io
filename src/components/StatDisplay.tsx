import { DexInfo } from "../data/Dex";

function StatDisplay({ mon }: { mon: DexInfo }) {
  return (
    <div className="stat-display">
      <div className="stat-row">
        <div className="stat-row__name">HP:</div>
        <div className="stat-row__number">{mon.baseStats.hp}</div>
        <div
          className="stat-row__bar"
          style={
            {
              "--progress": mon.baseStats.hp / 2.55,
              width: mon.baseStats.hp / 2.55 + "%",
            } as React.CSSProperties
          }
        />
      </div>
      <div className="stat-row">
        <div className="stat-row__name">Attack:</div>
        <div className="stat-row__number">{mon.baseStats.attack}</div>
        <div
          className="stat-row__bar"
          style={
            {
              "--progress": mon.baseStats.attack / 1.7,
              width: mon.baseStats.attack / 1.7 + "%",
            } as React.CSSProperties
          }
        />
      </div>
      <div className="stat-row">
        <div className="stat-row__name">Defense:</div>
        <div className="stat-row__number">{mon.baseStats.defense}</div>
        <div
          className="stat-row__bar"
          style={
            {
              "--progress": mon.baseStats.defense / 2.5,
              width: mon.baseStats.defense / 2.5 + "%",
            } as React.CSSProperties
          }
        ></div>
      </div>
      <div className="stat-row">
        <div className="stat-row__name">Sp. Atk:</div>
        <div className="stat-row__number">
          {mon.baseStats.specialAttack}
        </div>
        <div
          className="stat-row__bar"
          style={
            {
              "--progress": mon.baseStats.specialAttack / 1.94,
              width: mon.baseStats.specialAttack / 1.94 + "%",
            } as React.CSSProperties
          }
        />
      </div>
      <div className="stat-row">
        <div className="stat-row__name">Sp. Def:</div>
        <div className="stat-row__number">
          {mon.baseStats.specialDefense}
        </div>
        <div
          className="stat-row__bar"
          style={
            {
              "--progress": mon.baseStats.specialDefense / 2.5,
              width: mon.baseStats.specialDefense / 2.5 + "%",
            } as React.CSSProperties
          }
        />
      </div>
      <div className="stat-row">
        <div className="stat-row__name">Speed:</div>
        <div className="stat-row__number">{mon.baseStats.speed}</div>
        <div
          className="stat-row__bar"
          style={
            {
              "--progress": mon.baseStats.speed / 1.45,
              width: mon.baseStats.speed / 1.45 + "%",
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
}

export default StatDisplay;