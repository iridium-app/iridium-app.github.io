import FormTable from "./FormTable";
import nameMapping from "./nameMapping.json";
import dex from "./dex.json";
let x: unknown = dex;
interface IDictionary {
  [index: string]: DexInfo;
}
export type MonWithForm = {
  name: string;
  form: number;
};

export type DexInfo = {
  name: string;
  types: string[];
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  abilities: string[];
  levelUpLearnset: {
    name: string;
    level: number;
  }[];
};

class Dex {
  private static Dict: IDictionary = x as { string: DexInfo };

  static GetDexInfo(monWithForm: MonWithForm): DexInfo {
    if (monWithForm.form > 0) {
      const formName = FormTable.GetFormName(monWithForm);
      return this.Dict[formName];
    } else {
      return this.Dict[monWithForm.name];
    }
  }

  static GetHgeName(niceName: string): string {
    const mapping = nameMapping.find(
      (mapping) => mapping.niceName === niceName
    );
    if (mapping !== undefined) {
      return mapping.hgeName;
    }
    return "";
  }

  static GetAbilityHgeName(niceName: string): string {
    const mapping = nameMapping.find(
      (mapping) => mapping.niceName === niceName
    );
    if (mapping !== undefined) {
      return mapping.hgeName;
    }
    return "";
  }

  static GetNone(): DexInfo {
    return this.Dict["SPECIES_NONE"];
  }

  static MatchString(matchString: string) {
    return Object.keys(Dex.Dict).reduce(function (filtered: IDictionary, key) {
      if (Dex.Dict[key].name?.toLowerCase().includes(matchString.toLowerCase()))
        filtered[key] = Dex.Dict[key];
      return filtered;
    }, {});
  }

  static Equals(a: MonWithForm, b: MonWithForm): boolean {
    if (a.name === b.name && a.form === b.form)
      return true;
    return false;
  }
}

export default Dex;
