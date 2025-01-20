import React, { useState } from "react";
import "../styles/Portfolio.css";
import CodingPortfolio from "./CodingPortfolio";
import PhotographyPortfolio from "./PhotographyPortfolio";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("coding");

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="portfolio">
      <div className="sub-navbar">
        <button
          className={`tab-button ${activeTab === "coding" ? "active" : ""}`}
          onClick={() => switchTab("coding")}
        >
          Coding
        </button>
        <button
          className={`tab-button ${activeTab === "photography" ? "active" : ""}`}
          onClick={() => switchTab("photography")}
        >
          Photography
        </button>
      </div>
      <div className={`portfolio-content ${activeTab}`}>
        {activeTab === "coding" && <CodingPortfolio />}
        {activeTab === "photography" && <PhotographyPortfolio />}
      </div>
    </div>
  );
};

export default Portfolio;
