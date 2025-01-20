import React from "react";
import "../styles/PhotographyPortfolio.css";

const collections = [
  { title: "Angels & Airwaves", imageSrc: "/images/IMG_3538.jpg", path: "/photography/angels-airwaves" },
  { title: "Sunset on Cement", imageSrc: "/images/sunset-cement1.jpg", path: "/photography/sunset-cement" },
];

const PhotographyPortfolio = () => {
  return (
    <div className="photography-portfolio">
      {collections.map((collections, index) => (
        <a key={index} href={collections.path} className="photo-tile" style={{ backgroundImage: `url(${collections.imageSrc})` }}>
          <div className="photo-overlay">
            <h3 className="photo-title">{collections.title}</h3>
          </div>
        </a>
      ))}
    </div>
  );
}; 

export default PhotographyPortfolio;
