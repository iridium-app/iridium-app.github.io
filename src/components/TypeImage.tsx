import { MoveInfo } from "../data/MoveData";
import Utility from "../Utility";

function TypeImage({ type }: { type: string }) {
  return (
    <img
      src={"/sprites/misc/" + type + ".png"}
      title={Utility.GetNiceName(type)}
    />
  );
}

export default TypeImage;
