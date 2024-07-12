import Dex, { MonWithForm } from "./Dex";
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

export type EncounterWithRate = {
  rate: number;
  encounter: MonWithForm;
};

const EncounterRateMappings: { [key: string]: number[] } = {
  morning: [20, 20, 10, 10, 10, 10, 5, 5, 4, 4, 1, 1],
  day: [20, 20, 10, 10, 10, 10, 5, 5, 4, 4, 1, 1],
  night: [20, 20, 10, 10, 10, 10, 5, 5, 4, 4, 1, 1],
  oldRod: [60, 30, 5, 4, 1],
  surf: [60, 30, 5, 4, 1],
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

  static GetFinalizedArray(encounterMethod: EncounterMethod) {
    var array: EncounterWithRate[] = [];
    const mapping = EncounterRateMappings[encounterMethod.type];
    encounterMethod.encounters.forEach((mon, index) => {
      const find = array.find((element) => Dex.Equals(element.encounter, mon));
      if (find !== undefined) {
        find.rate += mapping[index];
      } else {
        array.push({
          rate: mapping[index],
          encounter: mon,
        });
      }
    });
    return array.sort((a, b) => {
        if (a.rate > b.rate)
            return -1;
        else if (a.rate < b.rate)
            return 1;
        return 0
    });
  }
}

export default EncounterData;
