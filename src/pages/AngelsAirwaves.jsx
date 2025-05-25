import React, { useState } from "react";
import "../styles/PortfolioGallery.css";

const images = [
  { title: "Throne", src: "/images/photography_galleries/angels-airwaves/IMG_3521 Throne.png", description: "Description of image 2" },
  { title: "Seraphim", src: "/images/photography_galleries/angels-airwaves/IMG_3535 Seraphim.png", description: "Description of image 2" },
  { title: "Behind the Gates", src: "/images/photography_galleries/angels-airwaves/IMG_3579 Behind the Gates.png", description: "Description of image 2" },
  { title: "Powers", src: "/images/photography_galleries/angels-airwaves/IMG_3598 Powers.png", description: "Description of image 2" },
  { title: "Cherubim", src: "/images/photography_galleries/angels-airwaves/IMG_3714 Cherubim.png", description: "Description of image 2" },
  { title: "Virtue", src: "/images/photography_galleries/angels-airwaves/IMG_3839 Virtue.png", description: "Description of image 2" },
];

const AngelsAirwaves = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePreview = (image) => {
    setSelectedImage(image);
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
  };

  return (
    <div className="portfolio-gallery">
      <h1>Angels & Airwaves Collection</h1>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-tile" onClick={() => openImagePreview(image)}>
            <img src={image.src} alt={image.title} className="gallery-image" />
            <div className="image-title">{image.title}</div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-preview">
          <div className="preview-overlay" onClick={closeImagePreview}></div>
          <div className="preview-content">
            <img src={selectedImage.src} alt={selectedImage.title} className="expanded-image" />
            <div className="image-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <button className="close-btn" onClick={closeImagePreview}>X</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AngelsAirwaves;
