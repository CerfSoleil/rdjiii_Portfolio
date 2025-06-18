import React from "react";
import "../styles/PhotographyPortfolio.css";

const collections = [
  { title: "Angels & Airwaves", imageSrc: "/images/photography_galleries/angels-airwaves/IMG_3839%20Virtue.png", path: "/photography/angels-airwaves" },
  { title: "Sunset on Cement", imageSrc: "/images/photography_galleries/sunsets-cement/IMG_3052%20Backseat%20Burn.jpg", path: "/photography/sunset-cement" },
];

const PhotographyPortfolio = () => {
  return (
    <div className="photography-portfolio">
      {collections.map((collections, index) => (
        <div className="tile-wrapper">
          <a key={index} href={collections.path} className="photo-tile" style={{ backgroundImage: `url(${collections.imageSrc})` }}>
            <div className="photo-overlay">
              <h3 className="photo-title">{collections.title}</h3>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}; 

export default PhotographyPortfolio;
