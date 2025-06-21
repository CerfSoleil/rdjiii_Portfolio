import React, { useState, useRef, useEffect } from "react"; // ⬅️ add useEffect
import "../styles/Portfolio.css";
import CodingPortfolio from "./CodingPortfolio";
import PhotographyPortfolio from "./PhotographyPortfolio";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("coding");
  const [slideDirection, setSlideDirection] = useState("");
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;

  const switchTab = (tab, direction) => {
    if (tab !== activeTab) {
      setSlideDirection(direction);
      setActiveTab(tab);
    }
  };

  const onTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > minSwipeDistance && activeTab === "coding") {
      switchTab("photography", "left");
    } else if (distance < -minSwipeDistance && activeTab === "photography") {
      switchTab("coding", "right");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" && activeTab === "coding") {
        e.preventDefault();
        switchTab("photography", "left");
      } else if (e.key === "ArrowLeft" && activeTab === "photography") {
        switchTab("coding", "right");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab]); // activeTab ensures effect updates when tab changes

  return (
    <div className="portfolio">
      <div className="sub-navbar">
        <button
          className={`tab-button ${activeTab === "coding" ? "active" : ""}`}
          onClick={() => switchTab("coding", "right")}
        >
          Coding
        </button>
        <button
          className={`tab-button ${activeTab === "photography" ? "active" : ""}`}
          onClick={() => switchTab("photography", "left")}
        >
          Photography
        </button>
      </div>

      <div
        className={`portfolio-content slide-${slideDirection}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {activeTab === "coding" && <CodingPortfolio />}
        {activeTab === "photography" && <PhotographyPortfolio />}
      </div>
    </div>
  );
};

export default Portfolio;