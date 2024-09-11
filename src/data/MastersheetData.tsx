import mastersheet from "../data/mastersheet.json";

type MastersheetJson = {
  casual: MastersheetEntry[];
  elite: MastersheetEntry[];
};

export type Encounter = {
  id: number;
  subtype: string;
};

export class Battle {
  constructor(
    public id: number,
    public subtype: string,
    public mandatory: boolean
  ) {
    this.id = id;
    this.subtype = subtype;
    this.mandatory = mandatory;
  }
}

export class MultiBattle extends Battle {
  constructor(
    public id: number,
    public subtype: string,
    public mandatory: boolean,
    public name: string,
    public enemyIds: number[]
  ) {
    super(id, subtype, mandatory);
    this.name = name;
    this.enemyIds = enemyIds;
  }
}

export type MastersheetEntry = {
  id: number;
  name: string;
  type: MastersheetEntryType;
  areaEffect: string;
  encounters: Encounter[];
  battles: Battle[];
  items: number[];
};

export enum MastersheetEntryType {
  standardArea = 1,
  starterLab = 2,
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
