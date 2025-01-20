import React, { useState } from "react";
import "../styles/AngelsAirwaves.css";

const images = [
  { title: "Image 1", src: "/images/angels-airwaves1.jpg", description: "Description of image 1" },
  { title: "Image 2", src: "/images/angels-airwaves2.jpg", description: "Description of image 2" },
  { title: "Image 3", src: "/images/angels-airwaves3.jpg", description: "Description of image 3" },
  { title: "Image 4", src: "/images/angels-airwaves4.jpg", description: "Description of image 4" },
  { title: "Image 5", src: "/images/angels-airwaves5.jpg", description: "Description of image 5" },
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
    <div className="angels-airwaves">
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
