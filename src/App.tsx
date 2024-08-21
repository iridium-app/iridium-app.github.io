import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Mastersheet from "./pages/Mastersheet";
import Nav from "./pages/Nav";
import usePersistedState from "use-persisted-state-hook";
import Dev from "./pages/Dev";
import EncounterList, { UserDataContext } from "./data/UserData";

export const UserContext = React.createContext<UserDataContext>({
  difficulty: "casual",
  setDifficulty: () => {},
  encounterList: new EncounterList([]),
  setEncounterList: () => {}
});

function App() {
  const [difficulty, setDifficulty] = usePersistedState("difficulty", "casual");
  const [encounterList, setEncounterList] = usePersistedState("encounterList", new EncounterList([]));
  // const onSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  // };

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   var filtered = Dex.MatchString(event.target.value);
  //   setSearchList(filtered);
  // };

  return (
    <div className="app">
      <HashRouter>
        <UserContext.Provider
          value={{ difficulty: difficulty, setDifficulty: setDifficulty, encounterList: encounterList, setEncounterList: setEncounterList }}
        >
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route index element={<Home />} />
              <Route path="/mastersheet" element={<Mastersheet />} />
              <Route path="/dev" element={<Dev />} />
            </Route>
          </Routes>
        </UserContext.Provider>
      </HashRouter>
      <header className="app-header"></header>
    </div>
  );
}

export default App;
