import { MonWithForm } from "./Dex";

export enum Difficulty {
  ELITE = "elite",
  CASUAL = "casual",
}

export type UserDataContext = {
  difficulty: Difficulty;
  setDifficulty: (d: Difficulty) => void;
  encounterList: EncounterList;
  setEncounterList: (encounterList: EncounterList) => void;
  completedTrainerList: string[];
  setCompletedTrainerList: (completedTrainerList: string[]) => void;
};

export type Encounter = {
  type: string;
  id: string;
  monWithForm: MonWithForm;
};

class EncounterList {
  public Encounters: Encounter[];

  constructor(encounters: Encounter[]) {
    this.Encounters = encounters;
  }
}

export default EncounterList;
