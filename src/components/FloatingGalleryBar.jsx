// Plans here to create a floating gallery bar that sticks to the top of the viewport under the /photography route.
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const GalleryBar = () => {
  return (
    <div>
        <nav className="navbar floating-gallery-bar">
        <NavLink to="/portfolio" className="nav-link" activeClassName="active-link">
        Back to Portfolio
      </NavLink>
        <NavLink to="/photography/angels-airwaves" className="nav-link" activeClassName="active-link">
            Angels & Airwaves Collection
        </NavLink>
        <NavLink to="/photography/sunset-cement" className="nav-link" activeClassName="active-link">
            Sunset on Cement Collection
        </NavLink>
    </nav>
    </div>
  );
};

export default GalleryBar;
