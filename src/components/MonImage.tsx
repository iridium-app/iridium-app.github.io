import Utility from "../Utility";

function MonImage({ formName, size }: { formName: string; size: number }) {
  return (
    <img
      className="mon-sprite"
      style={{ width: size + "px" } as React.CSSProperties}
      title={Utility.GetNiceName(formName)}
      src={
        "/sprites/pokemon/" +
        formName.replace("SPECIES_", "").toLowerCase() +
        ".png"
      }
    />
  );
}

export default MonImage;
