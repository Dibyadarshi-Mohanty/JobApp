import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import custom CSS for dropdown hover behavior

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-light navbar-cont fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h2>TalentConnect</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li> */}

            {/* Dropdown Menu */}
            <li className="nav-item dropdown">
              {/* <a
                className="nav-link dropdown-toggle"
                href="#"
                id="resourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a> */}
               <Link className="nav-link" to="/support">
                Product
              </Link>
            
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Employer Login
              </Link>
            </li>

            <li>
              <button className="navbar-button">
                <Link to="/candidate-login" className="text-decoration-none">
                  Candidate Login
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
