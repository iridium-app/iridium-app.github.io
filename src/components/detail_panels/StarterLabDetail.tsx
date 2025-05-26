import { useContext } from "react";
import MonImage from "../MonImage";
import { UserContext } from "../../App";
import FormTable from "../../data/FormTable";
import EncounterData from "../../data/EncounterData";
import styles from "../../styles/components/detail_panels/StarterLabDetail.module.css";

function StarterLabDetail() {
  const { encounterList, setEncounterList } = useContext(UserContext);
  const hasStarter = encounterList.Encounters.some((e) => e.type === "starter");
  const starterChoices = EncounterData.GetGiftInfo("g1").choices;

  return (
    <div className={styles.starterDetailPanel}>
      {hasStarter ? (
        <div>
          <div>You already have a starter companion!</div>
          <button
            onClick={() =>
              setEncounterList({ ...encounterList, Encounters: [] })
            }
            className={styles.clearButton}
          >
            Clear All Encounters
          </button>
        </div>
      ) : (
        <div className={styles.starterChoices}>
          {starterChoices.map((starter) => (
            <button
              key={starter.name}
              className={styles.starterChoice}
              onClick={() =>
                setEncounterList({
                  ...encounterList,
                  Encounters: encounterList.Encounters.concat([
                    {
                      type: "starter",
                      id: "starter-1",
                      monWithForm: starter,
                    },
                  ]),
                })
              }
            >
              <MonImage formName={FormTable.GetFormName(starter)} size={64} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default StarterLabDetail;
