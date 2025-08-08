import { Utility } from "../../utils";

interface MonImageProps {
  formName: string;
  size: number;
  backgroundColor?: string;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * Reusable component for displaying Pokémon sprites
 */
function MonImage({
  formName,
  size,
  backgroundColor = "",
  style = {},
  className,
}: MonImageProps) {
  return (
    <img
      className={`mon-sprite ${className || ""}`}
      style={
        {
          width: `${size}px`,
          backgroundColor,
          filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))",
          ...style,
        } as React.CSSProperties
      }
      title={Utility.getNiceName(formName)}
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
