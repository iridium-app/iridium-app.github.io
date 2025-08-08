import Utility from "../shared/utils/utility";
import styles from "../styles/components/TypeImage.module.css";

function TypeImage({ type }: { type: string }) {
  return (
    <img
      className={styles.typeImage}
      alt={Utility.getNiceName(type)}
      src={"/sprites/misc/" + type + ".png"}
      title={Utility.getNiceName(type)}
    />
  );
}

export default TypeImage;
