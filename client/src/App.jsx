import './App.css';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import People from './components/People.jsx';
import people_data from './assets/data/duck_devs_info.json';
import Leaderboard from './components/Leaderboard.jsx';
import DuckArmy from './components/DuckArmy.jsx';
import DuckPond from './components/DuckPond.jsx';
import DuckSweeper from './components/DuckSweeper.jsx';
import DuckRacer from './components/DuckRacer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/people" element={<People data={people_data} />} />
          <Route path="/people/:pid" element={<People data={people_data} />} />

          <Route exact path="/projects/leaderboard" element={<Leaderboard />} />
          <Route exact path="/projects/duckarmy" element={<DuckArmy />} />
          <Route exact path="/projects/duckpond" element={<DuckPond />} />
          <Route exact path="/projects/ducksweeper" element={<DuckSweeper />} />
          <Route exact path="/projects/duckracer" element={<DuckRacer />} />
        </Routes>
        <footer className="footer">
          <a href="https://duckdevs.online/duckdevs-js">
            Go to the original vanilla JavaScript version!
          </a>
        </footer>
      </Router>
    </>
  );
}

export default App;
