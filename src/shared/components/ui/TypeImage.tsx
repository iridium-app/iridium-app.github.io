import { Utility } from "../../utils";
import styles from "../../../styles/components/TypeImage.module.css";

interface TypeImageProps {
  type: string;
}

/**
 * Reusable component for displaying Pokémon type icons
 */
function TypeImage({ type }: TypeImageProps) {
  return (
    <img
      className={styles.typeImage}
      alt={Utility.getNiceName(type)}
      src={`/sprites/misc/${type}.png`}
      title={Utility.getNiceName(type)}
    />
  );
}

export default TypeImage;
