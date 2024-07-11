import { MonWithForm } from "./Dex";
import encounterData from "./encounters.json";
let x: unknown = encounterData;
interface IDictionary {
  [index: number]: EncounterInfo;
}
export type EncounterInfo = {
  id: number;
  name: string;
  methods: EncounterMethod[];
};

export type EncounterMethod = {
  type: string;
  encounters: MonWithForm[];
};

class EncounterData {
  private static Dict: IDictionary = x as { string: EncounterInfo };

  static GetInfo(id: number) {
    return this.Dict[id];
  }

  static GetMethodNiceName(type: string) {
    switch (type) {
      case "morning":
        return "Morning";
      case "day":
        return "Day";
      case "night":
        return "Night";
      case "surf":
        return "Surf";
      case "oldRod":
        return "Old Rod";
      default:
        throw new Error("Unexpected Method Name");
    }
  }
}

export default EncounterData;
