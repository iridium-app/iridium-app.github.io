import { EncounterInfo } from "../data/EncounterData";

function EncounterPanel({ encounterInfo }: { encounterInfo: EncounterInfo }) {
  return (
    <div className="encounter-panel">
      {/* <div className="encounter-panel__header">{encounterInfo.name}</div>
      <div className="encounter-panel__methods">
        {encounterInfo.methods.map((method) => (
          <div>{method.type}</div>
        ))}
      </div> */}
    </div>
  );
}

export default EncounterPanel;
