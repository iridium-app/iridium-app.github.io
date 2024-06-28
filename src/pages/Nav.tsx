import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

function Nav() {
  const { difficulty, setDifficulty } = useContext(UserContext);

  const onToggleButtonClick = () => {
    if (difficulty === "casual")
      setDifficulty("elite");
    else
      setDifficulty("casual");
  }

  return (
    <div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="mastersheet">Mastersheet</Link>
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
