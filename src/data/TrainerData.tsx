import trainers from "./trainers.json";
let x: unknown = trainers;
interface IDictionary {
  [index: string]: TrainerInfo;
}
export type TrainerInfo = {
  name: string;
  class: string;
  numMons: number;
  battleType: string;
  party: {
    level: number;
    monWithForm: {
      name: string;
      form: number;
    };
    item: string;
    ability: string;
    moveset: string[];
  }[];
};

export class TrainerData {
  static Dict: IDictionary = x as { string: TrainerInfo };
}

export default TrainerData;
