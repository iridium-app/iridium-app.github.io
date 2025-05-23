import trainers from "./json/trainers.json";
let x: unknown = trainers;
interface IDictionary {
  [index: string]: TrainerInfo;
}
export type TrainerInfo = {
  name: string;
  class: string;
  numMons: number;
  battleType: string;
  party: TrainerInfoMon[];
};

export type TrainerInfoMon = {
  level: number;
  monWithForm: {
    name: string;
    form: number;
  };
  item: string;
  ability: string;
  moveset: string[];
};

export class TrainerData {
  static Dict: IDictionary = x as { string: TrainerInfo };

  static GetFirstPartyMon(trainerId: string) {
    const trainer = this.Dict[trainerId];
    if (!trainer || !trainer.party || trainer.party.length === 0) {
      return null;
    }
    return trainer.party[0].monWithForm;
  }
}

export default TrainerData;
