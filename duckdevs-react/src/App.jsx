import "./App.css";
import DuckDevsLogo from "./components/DuckDevsLogo";
import NavBar from "./components/NavBar";
import DuckMessage from "./components/DuckMessage";
import GetDuckButton from "./components/GetDuckButton";
import HomePageDuckRace from "./components/HomePageDuckRace";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <DuckMessage />
        <GetDuckButton />
        <HomePageDuckRace />
      </header>
    </>
  );
}

export default App;
