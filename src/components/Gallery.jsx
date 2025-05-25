// components/Gallery.jsx
import React, { useState } from "react";
import "../styles/PortfolioGallery.css";

const Gallery = ({ title, images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePreview = (image) => {
    setSelectedImage(image);
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
  };

  return (
    <div className="portfolio-gallery">
      <h1>{title}</h1>
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

export default Gallery;
