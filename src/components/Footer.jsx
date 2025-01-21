import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
      <img className="footer-icon" src="/images/icons/githubLogo.png" alt="GitHub" />
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
        <img className="footer-icon" src="/images/icons/linkedinLogo.png" alt="LinkedIn" />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
      <img className="footer-icon" src="/images/icons/instagramLogo.png" alt="Instagram" />
      </a>
    </footer>
  );
};

export default Footer;
