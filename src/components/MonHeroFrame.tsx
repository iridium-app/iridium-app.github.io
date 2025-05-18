import { DexInfo } from "../data/Dex";
import MonImage from "./MonImage";
import TypeImage from "./TypeImage";

interface MonHeroFrameProps {
  mon: DexInfo;
}

function MonHeroFrame({ mon }: MonHeroFrameProps) {
  return (
    <div className="mon-hero-frame">
      <div className="mon-hero-frame__top-container">
        <MonImage formName={mon.name} size={96} />
        <div className="mon-hero-frame__right-container">
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://bulbapedia.bulbagarden.net/wiki/" + mon.name}
          >
            <img src="/ui/bulbapedia.png" alt="Bulbapedia Link" />
          </a>
          <div className="type-indicators">
            {mon.types.map((type) => (
              <TypeImage key={type} type={type} />
            ))}
          </div>
        </div>
      </div>

      <div className="name-container">{mon.name}</div>
    </div>
  );
}

export default MonHeroFrame;
