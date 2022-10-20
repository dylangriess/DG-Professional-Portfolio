import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navbar">
      <Link to="/DG-Professional-Portfolio">
        <button className="btn btn-outline-light button" type="button">
          Home
        </button>
      </Link>
      <Link to="/AboutMe">
        <button className="btn btn-outline-light button" type="button">
          About
        </button>
      </Link>
      <Link to="/Projects">
        <button className="btn btn-outline-light button" type="button">
          Projects
        </button>
      </Link>
      <Link to="/Contact">
        <button className="btn btn-outline-light button" type="button">
          Contact
        </button>
      </Link>
      <Link to="/Resume">
        <button className="btn btn-outline-light button" type="button">
          Resume
        </button>
      </Link>
    </div>
  );
}

export default Navigation;
