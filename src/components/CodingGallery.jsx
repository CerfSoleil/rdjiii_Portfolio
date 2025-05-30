import React, { useState } from "react";
import "../styles/CodingGallery.css";

const CodingGallery = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="gallery-preview">
        <button onClick={prev}>&lt;</button>
        <img src={images[current]} alt={`Preview ${current}`} onClick={openModal} />
        <button onClick={next}>&gt;</button>
        <div className="dots">
          {images.map((_, i) => (
            <span key={i} className={`dot ${i === current ? "active" : ""}`} />
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="gallery-modal">
          <span className="close" onClick={closeModal}>×</span>
          <button className="modal-nav left" onClick={prev}>&lt;</button>
          <img src={images[current]} alt={`Modal ${current}`} className="modal-img" />
          <button className="modal-nav right" onClick={next}>&gt;</button>
          <div className="modal-dots">
            {images.map((_, i) => (
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
