import React from "react";
import "./css/NavBar.css";
import duckLogo from "../assets/img/duck_devs_transparent.png";

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="index.html" id="navbar__logo">
          DUCK DEVS
          <img src={duckLogo} alt="Duck Devs Logo" />
        </a>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="index.html" className="navbar__links">
              HOME
            </a>
          </li>
          <li className="navbar__item" id="dropdown__head">
            <a className="navbar__links">PROJECTS</a>
            <ul className="dropdown__content">
              <li>
                <a href="leaderboard.html" className="Leaderboard">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="duckarmy.html">Duck Army</a>
              </li>
              <li>
                <a href="duckpond.html">Duck Pond</a>
              </li>
              <li>
                <a href="ducksweeper.html">DuckSweeper</a>
              </li>
              <li>
                <a href="duckracer.html">Duck Racer</a>
              </li>
            </ul>
          </li>
          <li className="navbar__item">
            <a href="people.html" className="navbar__links">
              TEAM MEMBERS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
