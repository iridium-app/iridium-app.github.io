import { useContext } from "react";
import MonImage from "../MonImage";
import { UserContext } from "../../App";
import FormTable from "../../data/FormTable";
import EncounterData from "../../data/EncounterData";
import styles from "../../styles/components/detail_panels/StarterLabDetail.module.css";
import GiftEncounterEntry from "../GiftEncounterEntry";
import { DexInfo } from "../../data/Dex";

interface StarterLabDetailProps {
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

// Define starter generations based on their order in the data
const STARTER_GENERATIONS = [
  {
    generation: 1,
    starters: ["SPECIES_BULBASAUR", "SPECIES_CHARMANDER", "SPECIES_SQUIRTLE"],
  },
  {
    generation: 2,
    starters: ["SPECIES_CHIKORITA", "SPECIES_CYNDAQUIL", "SPECIES_TOTODILE"],
  },
  {
    generation: 3,
    starters: ["SPECIES_TREECKO", "SPECIES_TORCHIC", "SPECIES_MUDKIP"],
  },
  {
    generation: 4,
    starters: ["SPECIES_TURTWIG", "SPECIES_CHIMCHAR", "SPECIES_PIPLUP"],
  },
  {
    generation: 5,
    starters: ["SPECIES_SNIVY", "SPECIES_TEPIG", "SPECIES_OSHAWOTT"],
  },
  {
    generation: 6,
    starters: ["SPECIES_CHESPIN", "SPECIES_FENNEKIN", "SPECIES_FROAKIE"],
  },
  {
    generation: 7,
    starters: ["SPECIES_ROWLET", "SPECIES_LITTEN", "SPECIES_POPPLIO"],
  },
  {
    generation: 8,
    starters: ["SPECIES_GROOKEY", "SPECIES_SCORBUNNY", "SPECIES_SOBBLE"],
  },
  {
    generation: 9,
    starters: ["SPECIES_SPRIGATITO", "SPECIES_FUECOCO", "SPECIES_QUAXLY"],
  },
];

function StarterLabDetail({ setSelectedMon }: StarterLabDetailProps) {
  const { encounterList, setEncounterList } = useContext(UserContext);
  const starterChoices = EncounterData.GetGiftInfo("g1").choices;
  const caught = encounterList.Encounters.find((e) => e.id === "starter");

  const handleUndo = () => {
    setEncounterList({
      ...encounterList,
      Encounters: encounterList.Encounters.filter((e) => e.id !== "starter"),
    });
  };

  // Group starters by generation
  const groupedStarters = STARTER_GENERATIONS.map((gen) => ({
    generation: gen.generation,
    starters: starterChoices.filter((starter) =>
      gen.starters.includes(starter.name)
    ),
  }));

  return (
    <div className={styles.starterDetailPanel}>
      {caught ? (
        <div className={styles.caughtContainer}>
          <MonImage
            formName={caught.monWithForm.name}
            size={80}
            style={{
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.65))",
            }}
          />
          <button onClick={handleUndo} className={styles.undoButton}>
            Undo Starter Choice
          </button>
        </div>
      ) : (
        <div className={styles.starterChoices}>
          {groupedStarters.map((genGroup) => (
            <div key={genGroup.generation} className={styles.generationGroup}>
              <h3 className={styles.generationHeader}>
                Generation {genGroup.generation}
              </h3>
              <div className={styles.generationStarters}>
                {genGroup.starters.map((starter) => (
                  <GiftEncounterEntry
                    key={starter.name}
                    encounter={starter}
                    encounterId="starter"
                    setSelectedMon={setSelectedMon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StarterLabDetail;
