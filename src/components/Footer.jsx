import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <i className="fab fa-instagram"></i>
      </a>
    </footer>
  );
};

export default Footer;
