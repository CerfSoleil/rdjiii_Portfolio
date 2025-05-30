import React from "react";

import { repositories } from "../components/CodingRepositories";
import CodingGallery from "../components/CodingGallery";

import "../styles/CodingPortfolio.css";

const CodingPortfolio = () => {
  return (
    <div className="coding-portfolio">
      {repositories.map((repo, index) => (
        <div key={index} className="coding-tile">
          <CodingGallery images={repo.images} video={repo.video} />
          <h3>{repo.title}</h3>
          <p className="repo-descript">{repo.description}</p>
          <p>Currently Worked On: {repo.activeDev ? "Yes" : "No"}</p>
          <div className="coding-links">
            <a href={repo.repo} target="_blank" rel="noopener noreferrer">Repository</a>
            {" | "}
            {repo.deploy ? (
              <a href={repo.deploy} target="_blank" rel="noopener noreferrer">Deploy Link</a>
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
