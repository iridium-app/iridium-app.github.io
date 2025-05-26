import { Battle, MastersheetEntry, BattleTags } from "../data/MastersheetData";
import MonImage from "./MonImage";
import TrainerData from "../data/TrainerData";
import Utility from "../Utility";
import styles from "../styles/components/MastersheetEntry.module.css";

interface Props {
  battle: Battle;
  setSelectedEntry: React.Dispatch<React.SetStateAction<MastersheetEntry>>;
  selectedEntry: MastersheetEntry;
}

function MastersheetBattle({ battle, setSelectedEntry, selectedEntry }: Props) {
  const trainerInfo = TrainerData.Dict[battle.battleId];

  const getBattleTagClasses = (tags: string[]) => {
    const classes = [];
    if (tags.includes(BattleTags.Single)) classes.push(styles.singleBattle);
    if (tags.includes(BattleTags.Double)) classes.push(styles.doubleBattle);
    if (tags.includes(BattleTags.Boss)) classes.push(styles.bossBattle);
    if (tags.includes(BattleTags.Multi)) classes.push(styles.multiBattle);
    if (tags.includes(BattleTags.Mirror)) classes.push(styles.mirrorBattle);
    if (tags.includes(BattleTags.RandomLead))
      classes.push(styles.randomLeadBattle);
    return classes.join(" ");
  };

  return (
    <div
      onClick={() => setSelectedEntry(battle)}
      className={`${styles.mastersheetEntry} ${styles.mastersheetBattle} ${
        selectedEntry.entryId == battle.entryId ? styles.selectedEntry : ""
      } ${getBattleTagClasses(battle.battleTags)}`}
    >
      <div className={styles.battleContent}>
        <img
          src={Utility.GetTrainerImage(trainerInfo)}
          alt={trainerInfo.name}
        />
        <div className={styles.monList}>
          {trainerInfo.party.map((mon, index) => (
            <MonImage
              key={trainerInfo.name + "-mon-" + index}
              formName={mon.monWithForm.name}
              size={50}
            />
          ))}
        </div>
      </div>
      <div className={styles.battleTagsContainer}>
        {!battle.mandatory && (
          <span className={styles.optionalTag}>Optional</span>
        )}
        {battle.battleTags.map((tag) => (
          <span key={tag} className={styles.battleTypeTag} data-tag={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MastersheetBattle;
