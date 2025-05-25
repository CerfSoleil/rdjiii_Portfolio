import React, { useState } from "react";
import "../styles/PortfolioGallery.css";

import Gallery from "../components/Gallery";

const images = [
  { title: "Arrivals", src: "/images/photography_galleries/sunsets-cement/Arrivals_3.jpg", description: "Houston, TX Northbound on-ramp to Beltway 8 from IAH airport\nDate: 2018" },
  { title: "Rolling In", src: "/images/photography_galleries/sunsets-cement/IMG_2563 Rolling In.jpg", description: "Houston, TX\nDate: 3/5/24" },
  { title: "Sun's Departure", src: "/images/photography_galleries/sunsets-cement/IMG_2569 Sun's Departure.jpg", description: "Houston, TX over IAH airport\nDate: 4/30/24" },
  { title: "The Sunway", src: "/images/photography_galleries/sunsets-cement/IMG_2836 The Sunway.jpg", description: "Houston, TX over IAH airport\nDate: 4/30/24" },
  { title: "Red Eye", src: "/images/photography_galleries/sunsets-cement/IMG_2905 Red Eye.jpg", description: "Houston, TX over IAH airport/nDate: 6/30/24" },
  { title: "Fried Chicken", src: "/images/photography_galleries/sunsets-cement/IMG_2943 Fried Chicken.jpg", description: "Houston, TX\nDate: 7/11/24" },
  { title: "Logistic Rise", src: "/images/photography_galleries/sunsets-cement/IMG_3045 Logistic Rise.jpg", description: "Somewhere in North Carolina\nDate: 7/14/24" },
  { title: "Backseat Burn", src: "/images/photography_galleries/sunsets-cement/IMG_3052 Backseat Burn.jpg", description: "Somewhere in North Carolina\nDate: 7/14/24" },
  { title: "Trash Day", src: "/images/photography_galleries/sunsets-cement/IMG_3085 Trash Day.jpg", description: "Norfolk, VA\nDate: 7/16/24" },
  { title: "What is Home", src: "/images/photography_galleries/sunsets-cement/IMG_3132 What is Home.jpg", description: "Houston, TX\nDate: 7/26/24" },
  { title: "Sun Window", src: "/images/photography_galleries/sunsets-cement/IMG_3419 Sun Window.jpg", description: "On the road through Missouri or Illinois\nDate: 12/4/24" },
  { title: "Road Blind", src: "/images/photography_galleries/sunsets-cement/IMG_3471 Road Blind.jpg", description: "Somewhere in Northern Ohio\nDate: 12/10/24" },
  { title: "Under the Bridge", src: "/images/photography_galleries/sunsets-cement/IMG_3660 Under the Bridge.jpg", description: "Somewhere in Northern New York State\nDate:12/14/24" },
  { title: "It's Over Isn't It", src: "/images/photography_galleries/sunsets-cement/IMG_3841 It's Over Isn't It on Brick.jpg", description: "Dallas, TX behind a school\nDate: 12/31/24" },
];

const SunsetCement = () => {
  return <Gallery title="Sunset on Cement Collection" images={images} />;
};

export default SunsetCement;