import mastersheet from "../data/mastersheet.json";
import EncounterData from "./EncounterData";
import TrainerData from "./TrainerData";

type MastersheetJson = {
  casual: Panel[];
  elite: Panel[];
};

export type Panel = {
  type: string;
  id: number;
};

class MastersheetData {
  private static Dict = mastersheet as MastersheetJson;

  static GetPanels(difficulty: string) {
    return difficulty === "casual" ? this.Dict.casual : this.Dict.elite;
  }

  static GetName(panel: Panel) {
    switch (panel.type) {
      case "trainer":
        return TrainerData.Dict[panel.id].name;
      case "encounter":
        return EncounterData.GetInfo(panel.id).name;
    }
  }
}

export default MastersheetData;