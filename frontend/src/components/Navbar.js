import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">
        TafutaKazi <i className="fas fa-briefcase"></i>
      </h2>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/job-seeker">
            <i className="fas fa-user"></i> Job Seeker
          </Link>
        </li>
        <li>
          <Link to="/employer">
            <i className="fas fa-building"></i> Employer
          </Link>
        </li>
        <li>
          <Link to="/admin">
            <i className="fas fa-shield-alt"></i> Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
