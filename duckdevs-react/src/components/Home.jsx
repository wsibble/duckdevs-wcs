import React from "react";
import DuckMessage from "./DuckMessage";
import GetDuckButton from "./GetDuckButton";
import HomePageDuckRace from "./HomePageDuckRace";

const Home = (props) => {
  return (
    <>
      <DuckMessage />
      <GetDuckButton />
      <HomePageDuckRace />
    </>
  );
};

export default Home;
