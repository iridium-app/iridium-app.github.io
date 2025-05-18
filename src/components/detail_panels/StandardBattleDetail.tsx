import React from "react";
import { Battle } from "../../data/MastersheetData";
import Dex, { DexInfo } from "../../data/Dex";
import TrainerData from "../../data/TrainerData";
import MonImage from "../MonImage";
import TypeImage from "../TypeImage";
import MonHeroFrame from "../MonHeroFrame";

interface StandardBattleDetailProps {
  battle: Battle;
  setSelectedMon: React.Dispatch<React.SetStateAction<DexInfo>>;
}

const StandardBattleDetail: React.FC<StandardBattleDetailProps> = ({
  battle,
  setSelectedMon,
}) => {
  const firstMon = TrainerData.Dict[battle.battleId].party[0];
  const party = TrainerData.Dict[battle.battleId].party;
  const dexInfo: DexInfo = Dex.GetDexInfo(firstMon.monWithForm);

  return (
    <div className="standard-battle-detail">
      {party.map((mon) => (
        <div className="pokemon-info">
          <div className="header">
            <MonHeroFrame mon={Dex.GetDexInfo(mon.monWithForm)} />
          </div>

          <div className="attributes">
            <div className="ability">{Dex.GetNiceName(mon.ability)}</div>
            <div className="held-item">{Dex.GetNiceName(mon.item)}</div>
          </div>

          <div className="moves-list">
            {firstMon.moveset.map((move, index) => (
              <div key={index} className="move">
                {Dex.GetNiceName(move)}
              </div>
            )) || (
              <>
                <div className="move">Stomp</div>
                <div className="move">Tackle</div>
                <div className="move">Bulldoze</div>
                <div className="move">Leech Seed</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StandardBattleDetail;
