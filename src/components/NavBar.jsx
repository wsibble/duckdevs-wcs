import React from "react";
import "./css/NavBar.css";
import duckLogo from "../assets/img/duck_devs_transparent.png";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" id="navbar__logo">
          DUCK DEVS
          <img src={duckLogo} alt="Duck Devs Logo" />
        </Link>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/" className="navbar__links">
              HOME
            </Link>
          </li>
          <li className="navbar__item" id="dropdown__head">
            <a className="navbar__links">PROJECTS</a>
            <ul className="dropdown__content">
              <li>
                <Link to="/projects/leaderboard">Leaderboard</Link>
              </li>
              <li>
                <Link to="/projects/duckarmy">Duck Army</Link>
              </li>
              <li>
                <Link to="/projects/duckpond">Duck Pond</Link>
              </li>
              <li>
                <Link to="/projects/ducksweeper">DuckSweeper</Link>
              </li>
              <li>
                <Link to="/projects/duckracer">Duck Racer</Link>
              </li>
            </ul>
          </li>
          <li className="navbar__item">
            <Link to="/people" className="navbar__links">
              TEAM MEMBERS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
