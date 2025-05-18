import { EncounterInfo } from "../../data/EncounterData";
import EncounterMethodList from "../EncounterMethodList";
import { useContext } from "react";
import { UserContext } from "../../App";
import MonImage from "../MonImage";
import { DexInfo } from "../../data/Dex";

function StandardEncounterDetail({
  encounter,
  setSelectedMon,
}: {
  encounter: EncounterInfo;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}) {
  const { encounterList, setEncounterList } = useContext(UserContext);
  const caught = encounterList.Encounters.find((e) => e.id === encounter.id);

  const handleUndo = () => {
    setEncounterList({
      ...encounterList,
      Encounters: encounterList.Encounters.filter((e) => e.id !== encounter.id),
    });
  };

  if (caught) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <MonImage
          formName={caught.monWithForm.name}
          size={80}
          style={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.65))",
          }}
        />
        <button
          onClick={handleUndo}
          style={{
            background: "none",
            border: "2px solid #FF4444",
            borderRadius: "4px",
            color: "#FF4444",
            cursor: "pointer",
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          Undo Catch
        </button>
      </div>
    );
  }

  return (
    <div>
      {encounter.methods.map((method) => (
        <EncounterMethodList
          key={method.type}
          method={method}
          encounterId={encounter.id}
          setSelectedMon={setSelectedMon}
        />
      ))}
    </div>
  );
}

export default StandardEncounterDetail;
