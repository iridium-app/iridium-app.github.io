import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="mastersheet">Mastersheet</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Nav;
