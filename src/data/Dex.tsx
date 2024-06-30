import dex from "./dex.json";
let x: unknown = dex;
interface IDictionary {
  [index: string]: DexInfo;
}
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
  static Dict: IDictionary = x as { string: DexInfo };

  static MatchString(matchString: string) {
    return Object.keys(Dex.Dict).reduce(function (filtered: IDictionary, key) {
      if (Dex.Dict[key].name?.toLowerCase().includes(matchString.toLowerCase()))
        filtered[key] = Dex.Dict[key];
      return filtered;
    }, {});
  }
}

export default Dex;
