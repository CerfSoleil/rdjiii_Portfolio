// CodingGallery.jsx
import React, { useState, useRef } from "react";
import "../styles/CodingGallery.css";

const CodingGallery = ({ images, video }) => {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const content = video ? [video, ...images] : images;
  const isVideo = (index) => video && index === 0;

  const next = () => setCurrent((current + 1) % content.length);
  const prev = () => setCurrent((current - 1 + content.length) % content.length);

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
          {isVideo(current) ? (
            <video src={video} width="300" controls muted />
          ) : (
            <img src={content[current]} alt={`Preview ${current}`} />
          )}
        </div>

        <button onClick={next}>&gt;</button>

        <div className="dots">
          {content.map((_, i) => (
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
            {isVideo(current) ? (
              <video src={video} className="modal-video" controls autoPlay />
            ) : (
              <img src={content[current]} alt={`Modal ${current}`} className="modal-img" />
            )}
          </div>

          <button className="modal-nav right" onClick={next}>&gt;</button>

          <div className="modal-dots">
            {content.map((_, i) => (
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
