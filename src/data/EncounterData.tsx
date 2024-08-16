import Dex, { MonWithForm } from "./Dex";
import encounterData from "./encounters.json";
import giftEncounterData from "./giftEncounters.json";

let x: unknown = encounterData;
interface IDictionaryStandard {
  [index: number]: EncounterInfo;
}

let y: unknown = giftEncounterData;
interface IDictionaryGift {
  [index: number]: GiftInfo;
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

export type GiftInfo = {
  id: number;
  name: string;
  choices: MonWithForm[];
};

const EncounterRateMappings: { [key: string]: number[] } = {
  grass: [10, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5],
  // day: [10, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5],
  // night: [10, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5],
  oldRod: [40, 20, 20, 10, 10],
  surf: [40, 20, 20, 10, 10],
};

class EncounterData {
  private static Dict: IDictionaryStandard = x as { string: EncounterInfo };
  private static GiftDict: IDictionaryGift = y as { string: GiftInfo };

  static GetInfo(id: number) {
    return this.Dict[id];
  }

  static GetStarters() {
    return this.GiftDict[1].choices;
  }

  static GetMethodNiceName(type: string) {
    switch (type) {
      case "grass":
        return "Grass";
      // case "day":
      //   return "Day";
      // case "night":
      //   return "Night";
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
