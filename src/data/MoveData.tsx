import moves from "./moves.json";
import nameMapping from "./nameMapping.json";
let x: unknown = moves;
interface IDictionary {
  [index: string]: MoveInfo;
}
export type MoveInfo = {
  name: string;
  damageCategory: string;
  basePower: number;
  type: string;
  pp: string;
  description: string;
};

class MoveData {
  static Dict: IDictionary = x as { string: MoveInfo };

  static GetHgeName(niceName: string): string {
    const mapping = nameMapping.find(
      (mapping) => mapping.niceName === niceName
    );
    if (mapping != undefined) {
      return mapping.hgeName;
    }
    return "";
  }
}

export default MoveData;
