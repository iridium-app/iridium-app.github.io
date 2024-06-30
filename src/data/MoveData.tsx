import moves from "./moves.json";
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
}

export default MoveData;
