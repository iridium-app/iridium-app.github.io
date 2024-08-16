import Utility from "../Utility";

function TypeImage({ type }: { type: string }) {
  return (
    <img
      alt={Utility.GetNiceName(type)}
      src={"/sprites/misc/" + type + ".png"}
      title={Utility.GetNiceName(type)}
    />
  );
}

export default TypeImage;
