import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";
import styles from "./styles/App.module.css";
import Home from "./pages/Home";
import Mastersheet from "./pages/Mastersheet";
import NavBar from "./components/NavBar";
import usePersistedState from "use-persisted-state-hook";
import Dev from "./pages/Dev";
import EncounterList, { UserDataContext } from "./data/UserData";

export const UserContext = React.createContext<UserDataContext>({
  difficulty: "casual",
  setDifficulty: () => {},
  encounterList: new EncounterList([]),
  setEncounterList: () => {},
  completedTrainerList: [],
  setCompletedTrainerList: () => [],
});

function App() {
  const [difficulty, setDifficulty] = usePersistedState("difficulty", "casual");
  const [encounterList, setEncounterList] = usePersistedState(
    "encounterList",
    new EncounterList([])
  );
  const [completedTrainerList, setCompletedTrainerList] = usePersistedState(
    "completedTrainerList",
    [] as string[]
  );
  // const onSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  // };

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   var filtered = Dex.MatchString(event.target.value);
  //   setSearchList(filtered);
  // };

  return (
    <div className={styles.app}>
      <HashRouter>
        <UserContext.Provider
          value={{
            difficulty: difficulty,
            setDifficulty: setDifficulty,
            encounterList: encounterList,
            setEncounterList: setEncounterList,
            completedTrainerList: completedTrainerList,
            setCompletedTrainerList: setCompletedTrainerList,
          }}
        >
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="/mastersheet" element={<Mastersheet />} />
              <Route path="/dev" element={<Dev />} />
            </Route>
          </Routes>
        </UserContext.Provider>
      </HashRouter>
      <header className={styles.appHeader}></header>
    </div>
  );
}

export default App;
