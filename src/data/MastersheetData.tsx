import mastersheet from "../data/json/mastersheet.json";

type MastersheetJson = {
  casual: Area[];
  elite: Area[];
};

export class Area {
  name!: string;
  areaEffect: string | undefined;
  entries!: MastersheetEntry[];
}

export class MastersheetEntry {
  entryId!: string;
  type!: MastersheetEntryType;
}

export class Encounter extends MastersheetEntry {
  encounterType!: EncounterType;
  encounterId!: string;
}

export class Battle extends MastersheetEntry {
  mandatory!: boolean;
  battleId!: string;
  battleTags: string[] = [];
}

export class MultiBattle extends Battle {
  enemyIds!: number[];
}

export enum MastersheetEntryType {
  encounter = "encounter",
  battle = "battle",
}

export enum EncounterType {
  standard = "standard",
  gift = "gift",
}

// Tags that can be applied to battles
export const BattleTags = {
  Single: "Single",
  Double: "Double",
  Multi: "Multi",
  Boss: "Boss",
  Mirror: "Mirror",
  RandomLead: "RandomLead",
} as const;

export type BattleTag = (typeof BattleTags)[keyof typeof BattleTags];

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
