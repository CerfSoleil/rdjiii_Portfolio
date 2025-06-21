import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
  <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
    About Me
  </NavLink>

  <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
    Portfolio
  </NavLink>

  <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
    Contact
  </NavLink>

  <NavLink to="/resume" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
    Resume
  </NavLink>
</nav>
  );
};

export default NavBar;
