import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <Link to="/DG-Professional-Portfolio">
                  <li className="dropdown-item">Home</li>
                </Link>
                <Link to="/AboutMe">
                  <li className="dropdown-item">About</li>
                </Link>
                <Link to="/Projects">
                  <li className="dropdown-item">Projects</li>
                </Link>
                <Link to="/Contact">
                  <li className="dropdown-item">Contact</li>
                </Link>
                <Link to="/Resume">
                  <li className="dropdown-item">Resume</li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// function Navigation() {
//   return (
//     <div className="navbar">
//       <Link to="/DG-Professional-Portfolio">
//         <li className="dropdown-item">
//           Home
//         </li>
//       </Link>
//       <Link to="/AboutMe">
//         <li className="dropdown-item">
//           About
//         </li>
//       </Link>
//       <Link to="/Projects">
//         <li className="dropdown-item">
//           Projects
//         </li>
//       </Link>
//       <Link to="/Contact">
//         <li className="dropdown-item">
//           Contact
//         </li>
//       </Link>
//       <Link to="/Resume">
//         <li className="dropdown-item">
//           Resume
//         </li>
//       </Link>
//     </div>
//   );
// }

export default Navigation;
