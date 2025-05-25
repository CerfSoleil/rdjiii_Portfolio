import React, { useState } from "react";
import "../styles/PortfolioGallery.css";

import Gallery from "../components/Gallery";

const images = [
  { title: "Arrivals", src: "/images/photography_galleries/sunsets-cement/Arrivals_3.jpg", description: "Description of image 1" },
  { title: "Rolling In", src: "/images/photography_galleries/sunsets-cement/IMG_2563 Rolling In.jpg", description: "Description of image 2" },
  { title: "Sun's Departure", src: "/images/photography_galleries/sunsets-cement/IMG_2569 Sun's Departure.jpg", description: "Description of image 3" },
  { title: "The Sunway", src: "/images/photography_galleries/sunsets-cement/IMG_2836 The Sunway.jpg", description: "Description of image 4" },
  { title: "Red Eye", src: "/images/photography_galleries/sunsets-cement/IMG_2905 Red Eye.jpg", description: "Description of image 5" },
  { title: "Fried Chicken", src: "/images/photography_galleries/sunsets-cement/IMG_2943 Fried Chicken.jpg", description: "Description of image 5" },
  { title: "Logistic Rise", src: "/images/photography_galleries/sunsets-cement/IMG_3045 Logistic Rise.jpg", description: "Description of image 5" },
  { title: "Backseat Burn", src: "/images/photography_galleries/sunsets-cement/IMG_3052 Backseat Burn.jpg", description: "Description of image 5" },
  { title: "Trash Day", src: "/images/photography_galleries/sunsets-cement/IMG_3085 Trash Day.jpg", description: "Description of image 5" },
  { title: "What is Home", src: "/images/photography_galleries/sunsets-cement/IMG_3132 What is Home.jpg", description: "Description of image 5" },
  { title: "Sun Window", src: "/images/photography_galleries/sunsets-cement/IMG_3419 Sun Window.jpg", description: "Description of image 5" },
  { title: "Road Blind", src: "/images/photography_galleries/sunsets-cement/IMG_3471 Road Blind.jpg", description: "Description of image 5" },
  { title: "Under the Bridge", src: "/images/photography_galleries/sunsets-cement/IMG_3660 Under the Bridge.jpg", description: "Description of image 5" },
  { title: "It's Over Isn't It", src: "/images/photography_galleries/sunsets-cement/IMG_3841 It's Over Isn't It on Brick.jpg", description: "Description of image 5" },
];

const SunsetCement = () => {
  return <Gallery title="Sunset on Cement Collection" images={images} />;
};

export default SunsetCement;