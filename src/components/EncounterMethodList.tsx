import { ReactNode } from "react";
import EncounterData, { EncounterMethod } from "../data/EncounterData";
import EncounterEntry from "./EncounterEntry";
import { DexInfo } from "../data/Dex";

function EncounterMethodList({
  method,
  encounterId,
  setSelectedMon,
}: {
  method: EncounterMethod;
  encounterId: string;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
      className="encounter-method-list"
    >
      <div className="encounter-method-list__header">
        {MethodImageFromString(method.type)}
      </div>
      <div
        className="encounter-method-list__encounter-list"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {EncounterData.GetFinalizedArray(method).map((encounter) => (
          <EncounterEntry
            key={encounter.encounter.name}
            encounter={encounter}
            method={method}
            encounterId={encounterId}
            setSelectedMon={setSelectedMon}
          />
        ))}
      </div>
    </div>
  );
}

function MethodImageFromString(type: string): ReactNode {
  const imageStyle = {
    width: "60px",
    height: "60px",
    objectFit: "contain" as const,
  };

  switch (type.toLowerCase()) {
    case "grass":
      return <img src="/ui/grass.png" style={imageStyle} />;
    case "oldrod":
      return <img src="/ui/fishing-mark.png" style={imageStyle} />;
    default:
      return null;
  }
}

export default EncounterMethodList;
