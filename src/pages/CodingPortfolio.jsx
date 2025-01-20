import React from "react";
import "../styles/CodingPortfolio.css";

const repositories = [
  { title: "Project 1", description: "Description of Project 1", link: "https://github.com" },
  { title: "Project 2", description: "Description of Project 2", link: "https://github.com" },
  { title: "Project 3", description: "Description of Project 3", link: "https://github.com" },
];

const CodingPortfolio = () => {
  return (
    <div className="coding-portfolio">
      {repositories.map((repo, index) => (
        <a
          key={index}
          href={repo.link}
          target="_blank"
          rel="noopener noreferrer"
          className="coding-tile"
        >
          <h3>{repo.title}</h3>
          <p>{repo.description}</p>
        </a>
      ))}
    </div>
  );
};

export default CodingPortfolio;
