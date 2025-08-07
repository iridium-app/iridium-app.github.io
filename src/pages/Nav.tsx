import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";
import { Difficulty } from "../data/UserData";

function Nav() {
  const { difficulty, setDifficulty } = useContext(UserContext);

  const onToggleButtonClick = () => {
    if (difficulty === Difficulty.CASUAL) setDifficulty(Difficulty.ELITE);
    else setDifficulty(Difficulty.CASUAL);
  };

  return (
    <div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="mastersheet">Mastersheet</Link>
        <Link to="dev">Dev</Link>
        <div className={"difficulty-toggle"}>
          <div>{difficulty.toUpperCase()}</div>
          <button onClick={onToggleButtonClick}>Toggle Difficulty</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Nav;
