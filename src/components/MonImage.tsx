import Utility from "../Utility";

function MonImage({
  formName,
  size,
  backgroundColor = "",
  style = {},
  className,
}: {
  formName: string;
  size: number;
  backgroundColor?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <img
      className={`mon-sprite ${className}`}
      style={
        {
          width: size + "px",
          backgroundColor,
          filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))",
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
