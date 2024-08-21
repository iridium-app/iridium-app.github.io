import { MonWithForm } from "./Dex";

export type UserDataContext = {
  difficulty: string;
  setDifficulty: (d: string) => void;
  encounterList: EncounterList;
  setEncounterList: (encounterList: EncounterList) => void;
};

export type Encounter = {
  subtype: string;
  id: number;
  monWithForm: MonWithForm;
};

class EncounterList {
    public Encounters: Encounter[];

    constructor(encounters: Encounter[]) {
        this.Encounters = encounters;
    }
}

export default EncounterList;