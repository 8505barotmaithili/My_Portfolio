import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero">
          MyPortfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="hero" className="nav-link" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                className="nav-link"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="courses"
                className="nav-link"
                smooth={true}
                duration={500}
              >
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="projects"
                className="nav-link"
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                className="nav-link"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="\src\Resume.PDF"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
