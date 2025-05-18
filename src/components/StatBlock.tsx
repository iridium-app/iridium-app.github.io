import { DexInfo } from "../data/Dex";

interface StatBlockProps {
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

function StatBlock({ baseStats }: StatBlockProps) {
  return (
    <div className="stat-block">
      <div className="stat-row">
        <div className="stat-row__name">HP:</div>
        <div className="stat-row__number">{baseStats.hp}</div>
        <div
          className="stat-row__bar"
          style={
            {
              "--progress": baseStats.hp / 2.55,
              width: baseStats.hp / 2.55 + "%",
            } as React.CSSProperties
          }
        />
      </div>
      <div className="stat-row">
        <div className="stat-row__name">Defense:</div>
        <div className="stat-row__number">{baseStats.defense}</div>
        <div
          className="stat-row__bar"
          style={
            {
              "--progress": baseStats.defense / 2.5,
              width: baseStats.defense / 2.5 + "%",
            } as React.CSSProperties
          }
        />
      </div>
      <div className="stat-row">
        <div className="stat-row__name">Sp. Def:</div>
        <div className="stat-row__number">{baseStats.specialDefense}</div>
        <div
          className="stat-row__bar"
          style={
            {
              "--progress": baseStats.specialDefense / 2.5,
              width: baseStats.specialDefense / 2.5 + "%",
            } as React.CSSProperties
          }
        />
      </div>
      <br />
      <div className="stat-row">
        <div className="stat-row__name">Attack:</div>
        <div className="stat-row__number">{baseStats.attack}</div>
        <div
          className="stat-row__bar"
          style={
            {
              "--progress": baseStats.attack / 1.7,
              width: baseStats.attack / 1.7 + "%",
            } as React.CSSProperties
          }
        />
      </div>
      <div className="stat-row">
        <div className="stat-row__name">Sp. Atk:</div>
        <div className="stat-row__number">{baseStats.specialAttack}</div>
        <div
          className="stat-row__bar"
          style={
            {
              "--progress": baseStats.specialAttack / 1.94,
              width: baseStats.specialAttack / 1.94 + "%",
            } as React.CSSProperties
          }
        />
      </div>
      <div className="stat-row">
        <div className="stat-row__name">Speed:</div>
        <div className="stat-row__number">{baseStats.speed}</div>
        <div
          className="stat-row__bar"
          style={
            {
              "--progress": baseStats.speed / 1.45,
              width: baseStats.speed / 1.45 + "%",
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
}

export default StatBlock;
