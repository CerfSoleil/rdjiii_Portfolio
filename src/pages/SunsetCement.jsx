import React, { useState } from "react";
import "../styles/PortfolioGallery.css";

const images = [
  { title: "Image 1", src: "/images/IMG_3538.jpg", description: "Description of image 1" },
  { title: "Image 2", src: "/images/sunset-cement2.jpg", description: "Description of image 2" },
  { title: "Image 3", src: "/images/sunset-cement3.jpg", description: "Description of image 3" },
  { title: "Image 4", src: "/images/sunset-cement4.jpg", description: "Description of image 4" },
  { title: "Image 5", src: "/images/sunset-cement5.jpg", description: "Description of image 5" },
];

const SunsetCement = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePreview = (image) => {
    setSelectedImage(image);
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
  };

  return (
    <div className="portfolio-gallery">
      <h1>Sunset on Cement Collection</h1>
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

export default SunsetCement;
