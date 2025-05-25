import React, { useState } from "react";
import "../styles/PortfolioGallery.css";

import Gallery from "../components/Gallery";

const images = [
  { title: "Throne", src: "/images/photography_galleries/angels-airwaves/IMG_3521 Throne.png", description: "Description of image 2" },
  { title: "Seraphim", src: "/images/photography_galleries/angels-airwaves/IMG_3535 Seraphim.png", description: "Description of image 2" },
  { title: "Behind the Gates", src: "/images/photography_galleries/angels-airwaves/IMG_3579 Behind the Gates.png", description: "Description of image 2" },
  { title: "Powers", src: "/images/photography_galleries/angels-airwaves/IMG_3598 Powers.png", description: "Description of image 2" },
  { title: "Cherubim", src: "/images/photography_galleries/angels-airwaves/IMG_3714 Cherubim.png", description: "Description of image 2" },
  { title: "Virtue", src: "/images/photography_galleries/angels-airwaves/IMG_3839 Virtue.png", description: "Description of image 2" },
];

const AngelsAirwaves = () => {
  return <Gallery title="Angels & Airwaves Collection" images={images} />;
};

export default AngelsAirwaves;
