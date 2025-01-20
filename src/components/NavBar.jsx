import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" activeClassName="active-link">
        About Me
      </NavLink>
      <NavLink to="/portfolio" className="nav-link" activeClassName="active-link">
        Portfolio
      </NavLink>
      <NavLink to="/contact" className="nav-link" activeClassName="active-link">
        Contact
      </NavLink>
      <NavLink to="/resume" className="nav-link" activeClassName="active-link">
        Resume
      </NavLink>
    </nav>
  );
};

export default NavBar;
