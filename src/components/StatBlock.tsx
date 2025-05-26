import { DexInfo } from "../data/Dex";
import styles from "../styles/components/StatBlock.module.css";

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
    <div className={styles.statBlock}>
      <div className={styles.statRow}>
        <div className={styles.name}>HP:</div>
        <div className={styles.number}>{baseStats.hp}</div>
        <div
          className={styles.bar}
          style={
            {
              "--progress": baseStats.hp / 2.55,
              width: baseStats.hp / 2.55 + "%",
            } as React.CSSProperties
          }
        />
      </div>
      <div className={styles.statRow}>
        <div className={styles.name}>Defense:</div>
        <div className={styles.number}>{baseStats.defense}</div>
        <div
          className={styles.bar}
          style={
            {
              "--progress": baseStats.defense / 2.5,
              width: baseStats.defense / 2.5 + "%",
            } as React.CSSProperties
          }
        />
      </div>
      <div className={styles.statRow}>
        <div className={styles.name}>Sp. Def:</div>
        <div className={styles.number}>{baseStats.specialDefense}</div>
        <div
          className={styles.bar}
          style={
            {
              "--progress": baseStats.specialDefense / 2.5,
              width: baseStats.specialDefense / 2.5 + "%",
            } as React.CSSProperties
          }
        />
      </div>
      <br />
      <div className={styles.statRow}>
        <div className={styles.name}>Attack:</div>
        <div className={styles.number}>{baseStats.attack}</div>
        <div
          className={styles.bar}
          style={
            {
              "--progress": baseStats.attack / 1.7,
              width: baseStats.attack / 1.7 + "%",
            } as React.CSSProperties
          }
        />
      </div>
      <div className={styles.statRow}>
        <div className={styles.name}>Sp. Atk:</div>
        <div className={styles.number}>{baseStats.specialAttack}</div>
        <div
          className={styles.bar}
          style={
            {
              "--progress": baseStats.specialAttack / 1.94,
              width: baseStats.specialAttack / 1.94 + "%",
            } as React.CSSProperties
          }
        />
      </div>
      <div className={styles.statRow}>
        <div className={styles.name}>Speed:</div>
        <div className={styles.number}>{baseStats.speed}</div>
        <div
          className={styles.bar}
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
