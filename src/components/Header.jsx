import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-element">
        <img className="header-image" src="../images/photography_galleries/IMG_0781s.jpg" alt="Header" />
      </div>
      <h1 className="header-title">Robert Duncan Jones III</h1>
    </header>
  );
};

export default Header;
