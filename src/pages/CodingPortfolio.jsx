import React from "react";

import { repositories } from "../components/CodingRepositories";
import CodingGallery from "../components/CodingGallery";

import "../styles/CodingPortfolio.css";

// Change the layout to have links for both the deploy and the live demo as well as a scrolling preview of a few pages.
// Include AutoScout (used-car-dealer.onrender.com) & (github.com/andrewPelfrey/used-car-dealer). To be changed when I resume work on it.
// Include WordéMon (wordemon.onrender.com) & (github.com/nolangrossi/Wordemon). To be changed wehn I resume work on it.
  // Also try to get Wordemon simultaneously running on the website.



const CodingPortfolio = () => {
  return (
    <div className="coding-portfolio">
      {repositories.map((repo, index) => (
        <div key={index} className="coding-tile">
          <CodingGallery images={repo.images} />
          <h3>{repo.title}</h3>
          <p>{repo.description}</p>
          <div className="coding-links">
            <a href={repo.repo} target="_blank" rel="noopener noreferrer">Repo</a>
            {" | "}
            {repo.deploy ? (
              <a href={repo.deploy} target="_blank" rel="noopener noreferrer">Deploy</a>
            ) : (
              <span>[App not Currently Deployed]</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CodingPortfolio;
