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
        <DuckPond>
          <Duck />
          <Duck />
          <Duck />
          <Duck />
          <Duck />
        </DuckPond>
      </header>
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
