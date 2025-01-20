import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <a
        href="/placeholder-resume.pdf"
        download="Resume.pdf"
        className="resume-download"
      >
        Download My Resume
      </a>
      <div className="resume-lists">
        <div className="resume-section">
          <h2>List 1</h2>
          <ul>
            <li>Tier 1</li>
            <ul>
              <li>Tier 2</li>
              <ul>
                <li>Tier 3</li>
              </ul>
            </ul>
          </ul>
        </div>
        <div className="resume-section">
          <h2>List 2</h2>
          <ul>
            <li>Tier 1</li>
            <ul>
              <li>Tier 2</li>
              <ul>
                <li>Tier 3</li>
              </ul>
            </ul>
          </ul>
        </div>
        <div className="resume-section">
          <h2>List 3</h2>
          <ul>
            <li>Tier 1</li>
            <ul>
              <li>Tier 2</li>
              <ul>
                <li>Tier 3</li>
              </ul>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
