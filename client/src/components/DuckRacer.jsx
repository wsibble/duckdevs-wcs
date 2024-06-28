import React, { useState } from "react";
import "./css/duckracer.css";
import duckLogo from "../assets/img/duck_devs_transparent.png";
import DuckRacerHelp from "./DuckRacerHelp";
import DuckRacerBoard from "./DuckRacerBoard";

const DuckRacer = (props) => {
  // Possible gameStates = "mainMenu", "leaderboard", "help", "active"
  const [gameState, setGameState] = useState("mainMenu");

  const startGame = () => {
    setGameState("active");
  };

  const viewLeaderboard = () => {
    setGameState("leaderboard");
  };

  const viewHelp = () => {
    setGameState("help");
  };

  const viewMain = () => {
    setGameState("mainMenu");
  };

  return (
    <>
      <div className="duckrace__game">
        <div
          className={`game__window ${
            gameState === "active" ? "window__bg__green" : "window__bg__black"
          }`}
        >
          <div className="game__header">
            <h1>{`${
              gameState === "mainMenu"
                ? "DUCK RACER"
                : gameState === "leaderboard"
                ? "LEADERBOARD"
                : gameState === "help"
                ? "INSTRUCTIONS"
                : "ACTIVE"
            }`}</h1>
          </div>
          {gameState === "mainMenu" && (
            <>
              <div className="image__container">
                <img src={duckLogo} alt="Duck Devs Logo" id="logo" />
              </div>
            </>
          )}
          {gameState === "help" && (
            <>
              <DuckRacerHelp />
            </>
          )}
          {gameState === "leaderboard" && (
            <>
              <DuckRacerBoard />
            </>
          )}
          <div className="game__info">
            {gameState === "mainMenu" && (
              <>
                <div
                  className="game__button"
                  id="start__button"
                  onClick={startGame}
                >
                  START GAME
                </div>
                <div
                  className="game__button"
                  id="leaderboard__button"
                  onClick={viewLeaderboard}
                >
                  LEADERBOARD
                </div>
                <div
                  className="game__button"
                  id="help__button"
                  onClick={viewHelp}
                >
                  HOW TO PLAY
                </div>
              </>
            )}
            {(gameState === "leaderboard" || gameState === "help") && (
              <>
                <div
                  className="game__button"
                  id="main__button"
                  onClick={viewMain}
                >
                  MAIN MENU
                </div>
              </>
            )}
            {gameState === "active" && (
              <>
                <span className="game__stats" id="lap__counter"></span>

                <span className="game__stats" id="timer"></span>

                <span className="game__stats" id="best__time"></span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DuckRacer;
