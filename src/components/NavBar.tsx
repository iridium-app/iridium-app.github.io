import { Link, Outlet } from "react-router-dom";
import {
  ComputerDesktopIcon,
  BookOpenIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function NavBar() {
  return (
    <>
      <div className="nav">
        <div className="nav-top">
          <Link className="nav-item" to="mastersheet">
            <BookOpenIcon className="nav-icon" />
            <div className="heading">Mastersheet</div>
          </Link>
          <div className="nav-item">
            <MagnifyingGlassIcon className="nav-icon" />
            <div className="heading">Search</div>
          </div>
          <div className="nav-item">
            <ComputerDesktopIcon className="nav-icon" />
            <div className="heading">PC</div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="split-section">
            <img
              src="/sprites/trainers/gardenia.png"
              alt="Gardenia"
              className="split-trainer"
            />
            <div className="heading">Gardenia Split</div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
