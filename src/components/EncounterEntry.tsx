import { ReactNode, useContext, useState } from "react";
import MonImage from "./MonImage";
import FormTable from "../data/FormTable";
import Utility from "../Utility";
import TypeImage from "./TypeImage";
import Dex, { DexInfo } from "../data/Dex";
import { UserContext } from "../App";
import { EncounterMethod } from "../data/EncounterData";
import EncounterMethodList from "./EncounterMethodList";
import StatBlock from "./StatBlock";
import styles from "../styles/components/EncounterEntry.module.css";

interface EncounterEntryProps {
  encounter: {
    rate: number;
    encounter: {
      name: string;
      form: number;
    };
  };
  method: EncounterMethod;
  encounterId: string;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

function EncounterEntry({
  encounter,
  method,
  encounterId,
  setSelectedMon,
}: EncounterEntryProps) {
  const dexInfo = Dex.GetDexInfo(encounter.encounter);
  const { encounterList, setEncounterList } = useContext(UserContext);

  const handleCatch = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEncounterList({
      ...encounterList,
      Encounters: encounterList.Encounters.concat([
        {
          type: method.type,
          id: encounterId,
          monWithForm: encounter.encounter,
        },
      ]),
    });
  };

  return (
    <div
      className={styles.encounterEntry}
      onClick={() => setSelectedMon(Dex.GetDexInfo(encounter.encounter))}
    >
      <div
        style={{
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: "16px",
          color: "#FFFFFF",
        }}
      >
        {encounter.rate}%
      </div>
      <div>
        <MonImage
          formName={FormTable.GetFormName(encounter.encounter)}
          size={50}
          style={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.65))",
          }}
        />
      </div>
      <div
        style={{
          fontFamily: "Inter",
          fontSize: "14px",
          color: "#FFFFFF",
        }}
      >
        {Utility.GetNiceName(encounter.encounter.name)}
      </div>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {dexInfo.types.map((type) => (
          <TypeImage
            key={"type-image-" + encounter.encounter.name + "-" + type}
            type={type}
          />
        ))}
      </div>
      <button
        onClick={handleCatch}
        className={`${styles.catchButton} clear-button`}
      >
        <img
          src="/sprites/items/ITEM_POKE_BALL.png"
          alt="Catch"
          title="Catch this Pokémon"
          style={{
            zIndex: 1,
            width: "32px",
            height: "32px",
            filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5))",
          }}
        />
      </button>
    </div>
  );
}

export default EncounterEntry;
