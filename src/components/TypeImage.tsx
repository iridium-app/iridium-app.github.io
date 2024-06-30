import { MoveInfo } from "../data/MoveData";
import Utility from "../Utility";

function TypeImage({ move }: { move: MoveInfo }) {
  return (
    <img
      src={"/sprites/misc/" + move.type + ".png"}
      title={Utility.GetNiceTypeName(move.type)}
    />
  );
}

export default TypeImage;
