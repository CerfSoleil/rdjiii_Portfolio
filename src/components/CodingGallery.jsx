// CodingGallery.jsx
import React, { useState } from "react";
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

  return (
    <>
      <div className="gallery-preview">
        <button onClick={prev}>&lt;</button>

        <div onClick={openModal}>
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

          {isVideo(current) ? (
            <video src={video} className="modal-video" controls autoPlay />
          ) : (
            <img src={content[current]} alt={`Modal ${current}`} className="modal-img" />
          )}

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
