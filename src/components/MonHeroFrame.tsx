import { DexInfo } from "../data/Dex";
import { MonImage, TypeImage } from "../shared/components/ui";
import styles from "../styles/components/MonHeroFrame.module.css";

interface MonHeroFrameProps {
  mon: DexInfo;
}

function MonHeroFrame({ mon }: MonHeroFrameProps) {
  return (
    <div className={styles.monHeroFrame}>
      <div className={styles.topContainer}>
        <MonImage formName={mon.name} size={96} />
        <div className={styles.rightContainer}>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://bulbapedia.bulbagarden.net/wiki/" + mon.name}
          >
            <img src="/ui/bulbapedia.png" alt="Bulbapedia Link" />
          </a>
          <div className={styles.typeIndicators}>
            {mon.types.map((type) => (
              <TypeImage key={mon.name + "-" + type} type={type} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.nameContainer}>{mon.name}</div>
    </div>
  );
}

export default MonHeroFrame;
