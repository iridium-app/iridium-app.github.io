import Utility from "../Utility";
import styles from "../styles/components/TypeImage.module.css";

function TypeImage({ type }: { type: string }) {
  return (
    <img
      className={styles.typeImage}
      alt={Utility.GetNiceName(type)}
      src={"/sprites/misc/" + type + ".png"}
      title={Utility.GetNiceName(type)}
    />
  );
}

export default TypeImage;
