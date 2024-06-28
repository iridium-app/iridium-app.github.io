import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Mastersheet from "./pages/Mastersheet";
import Nav from "./pages/Nav";

function App() {
  // const onSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  // };

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   var filtered = Dex.MatchString(event.target.value);
  //   setSearchList(filtered);
  // };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="mastersheet" element={<Mastersheet />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <header className="app-header"></header>
    </div>
  );
}

export default App;
