// CodingGallery.jsx
import React, { useState, useRef } from "react";
import "../styles/CodingGallery.css";

const CodingGallery = ({ images, video }) => {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const modalContent = video ? [video, ...images] : images;
  const previewContent = video ? [...images, video] : images;

  const next = () => {
    setCurrent((prev) => (prev + 1) % modalContent.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + modalContent.length) % modalContent.length);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

// Touch swipe functionality
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchEndX.current - touchStartX.current;

    if(distance > minSwipeDistance) next(); // Swipe right
    else if(distance < -minSwipeDistance) prev(); // Swipe left
  };

  return (
    <>
      <div className="gallery-preview">
        <button onClick={prev}>&lt;</button>

        <div
          onClick={openModal}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{ flex: 1 }}
        >
          {isVideoPreview(current) ? (
            <video src={video} width="300" controls muted />
          ) : (
            <img src={previewContent[current]} alt={`Preview ${current}`} />
          )}
        </div>

        <button onClick={next}>&gt;</button>

        <div className="dots">
          {previewContent.map((_, i) => (
            <span key={i} className={`dot ${i === current ? "active" : ""}`} />
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="gallery-modal">
        <span className="close" onClick={closeModal}>×</span>
        <button className="modal-nav left" onClick={prev}>&lt;</button>
    
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {isVideoModal(current) ? (
            <video src={video} className="modal-video" controls autoPlay />
          ) : (
            <img
              src={modalContent[current]}
              alt={`Modal ${current}`}
              className="modal-img"
            />
          )}
        </div>    

          <button className="modal-nav right" onClick={next}>&gt;</button>

          <div className="modal-dots">
            {modalContent.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};


export default CodingGallery;
