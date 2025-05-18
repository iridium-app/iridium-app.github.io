import { MonWithForm } from "./Dex";

export type UserDataContext = {
  difficulty: string;
  setDifficulty: (d: string) => void;
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
