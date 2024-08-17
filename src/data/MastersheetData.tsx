import mastersheet from "../data/mastersheet.json";

type MastersheetJson = {
  casual: MastersheetEntry[];
  elite: MastersheetEntry[];
};

export type Encounter = {
  id: number;
  subtype: string;
}

export type Trainer = {
  id: number;
  subtype: string;
  mandatory: boolean
}

export type MastersheetEntry = {
  id: number;
  name: string;
  type: MastersheetEntryType;
  encounters: Encounter[];
  trainers: Trainer[];
  items: number[];
};

export enum MastersheetEntryType {
  standardArea = 1,
  starterLab = 2
}

class MastersheetData {
  private static Dict = mastersheet as MastersheetJson;

  static GetMastersheetEntries(difficulty: string) {
    return difficulty === "casual" ? this.Dict.casual : this.Dict.elite;
  }

  // static GetName(panel: MastersheetEntry) {
  //   switch (panel.type) {
  //     case "trainer":
  //       return TrainerData.Dict[panel.id].name;
  //     case "encounter":
  //       return EncounterData.GetInfo(panel.id).name;
  //   }
  // }
}

export default MastersheetData;