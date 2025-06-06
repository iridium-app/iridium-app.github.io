import { Link, Outlet } from "react-router-dom";
import {
  ComputerDesktopIcon,
  BookOpenIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import styles from "../styles/components/NavBar.module.css";

function NavBar() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navTop}>
          <Link className={styles.navItem} to="mastersheet">
            <BookOpenIcon className={styles.navIcon} />
            <div className={styles.heading}>Mastersheet</div>
          </Link>
          <div className={styles.navItem}>
            <MagnifyingGlassIcon className={styles.navIcon} />
            <div className={styles.heading}>Search</div>
          </div>
          <div className={styles.navItem}>
            <ComputerDesktopIcon className={styles.navIcon} />
            <div className={styles.heading}>PC</div>
          </div>
        </div>
        <div className={styles.navBottom}>
          <div className={styles.splitSection}>
            <img
              src="/sprites/trainers/gardenia.png"
              alt="Gardenia"
              className={styles.splitTrainer}
            />
            <div className={styles.splitHeading}>Gardenia Split</div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
