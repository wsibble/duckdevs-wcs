import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import People from "./components/People";
import people_data from "./assets/data/duck_devs_info.json";
import Leaderboard from "./components/Leaderboard";
import DuckArmy from "./components/DuckArmy";
import DuckPond from "./components/DuckPond.jsx";
import DuckSweeper from "./components/DuckSweeper";
import DuckRacer from "./components/DuckRacer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/people" element={<People data={people_data} />} />
          <Route exact path="/projects/leaderboard" element={<Leaderboard />} />
          <Route exact path="/projects/duckarmy" element={<DuckArmy />} />
          <Route exact path="/projects/duckpond" element={<DuckPond />} />
          <Route exact path="/projects/ducksweeper" element={<DuckSweeper />} />
          <Route exact path="/projects/duckracer" element={<DuckRacer />} />
        </Routes>
      </Router>
    </>
  );
}

function DuckPond(props) {
  return (
    <div style={{ width: '300px', height: '300px', border: '1px solid blue' }}>
      Welcome to the duck pond<div>{props.children}</div>
    </div>
  );
}

function Duck() {
  return 'quack';
}
export default App;
