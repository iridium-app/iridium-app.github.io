import Utility from "../Utility";

function MonImage({
  formName,
  size,
  style = {},
}: {
  formName: string;
  size: number;
  style?: React.CSSProperties;
}) {
  return (
    <img
      className="mon-sprite"
      style={
        {
          width: size + "px",
          ...style,
        } as React.CSSProperties
      }
      title={Utility.GetNiceName(formName)}
      alt={formName}
      src={
        "/sprites/pokemon/" +
        formName.replace("SPECIES_", "").toLowerCase() +
        ".png"
      }
    />
  );
}

export default MonImage;
