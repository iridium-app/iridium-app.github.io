import Utility from "../Utility";

function MonImage({
  formName,
  size,
  style = {},
  className,
}: {
  formName: string;
  size: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <img
      className={`mon-sprite ${className}`}
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
