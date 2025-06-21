import React, { useState, useRef, useEffect } from "react";
import GalleryBar from "./FloatingGalleryBar";
import "../styles/PortfolioGallery.css";

const Gallery = ({ title, images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [slideDirection, setSlideDirection] = useState(""); // ←→ for animation
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;

  const openImagePreview = (index) => {
    setSelectedIndex(index);
    setSlideDirection("");
  };

  const closeImagePreview = () => {
    setSelectedIndex(null);
    setSlideDirection("");
  };

  const nextImage = () => {
    setSlideDirection("left");
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSlideDirection("right");
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
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

    if (distance > minSwipeDistance) nextImage();
    else if (distance < -minSwipeDistance) prevImage();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeImagePreview();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <div className="portfolio-gallery">
      <GalleryBar />
      <h1>{title}</h1>
      <div className="image-gallery">
        {[...images].reverse().map((image, index) => (
          <div
            key={index}
            className="image-tile"
            onClick={() => openImagePreview(images.length - 1 - index)}
          >
            <img src={image.src} alt={image.title} className="gallery-image" />
            <div className="image-title">{image.title}</div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-preview">
          <div className="preview-overlay" onClick={closeImagePreview}></div>

          {/* Desktop arrows */}
          <button className="preview-arrow left" onClick={prevImage}>&lt;</button>
          <button className="preview-arrow right" onClick={nextImage}>&gt;</button>

          <div
          key={`${selectedIndex}-${slideDirection}`}
            className={`preview-content slide-${slideDirection}`}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="expanded-image"
            />
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
