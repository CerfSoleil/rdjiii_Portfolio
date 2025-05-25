import React, { useState } from "react";
import "../styles/PortfolioGallery.css";

import Gallery from "../components/Gallery";

const images = [
  { title: "Throne", src: "/images/photography_galleries/angels-airwaves/IMG_3521 Throne.png", description: "Roxborough, PA Tower Farm | Taken from the freeway in the early morning rush.\nDate: 12/13/24" },
  { title: "Seraphim", src: "/images/photography_galleries/angels-airwaves/IMG_3535 Seraphim.png", description: "Wyndmoor, PA | Wyndmoor Tower\nDate: 12/13/24" },
  { title: "Behind the Gates", src: "/images/photography_galleries/angels-airwaves/IMG_3579 Behind the Gates.png", description: "Closter, New Jersey | Near a pretty cliff overlook of New York\nDate: 12/13/24" },
  { title: "Powers", src: "/images/photography_galleries/angels-airwaves/IMG_3598 Powers.png", description: "Merrimack, NH | WFEA Tower on a clear, pretty day.\nDate: 12/14/24" },
  { title: "Cherubim", src: "/images/photography_galleries/angels-airwaves/IMG_3714 Cherubim.png", description: "Batavia, NY\nDate: 12/15/24" },
  { title: "Virtue", src: "/images/photography_galleries/angels-airwaves/IMG_3839 Virtue.png", description: "Mesquite, TX | Mesquite Tower, the prettiest angel I've seen yet.\nDate: 12/31/24" },
];

const AngelsAirwaves = () => {
  return <Gallery title="Angels & Airwaves Collection" images={images} />;
};

export default AngelsAirwaves;
