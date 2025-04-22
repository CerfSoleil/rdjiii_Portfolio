import React from "react";
import "../styles/CodingPortfolio.css";

// Change the layout to have links for both the deploy and the live demo as well as a scrolling preview of a few pages.
// Include AutoScout (used-car-dealer.onrender.com) & (github.com/andrewPelfrey/used-car-dealer). To be changed when I resume work on it.
// Include WordéMon (wordemon.onrender.com) & (github.com/nolangrossi/Wordemon). To be changed wehn I resume work on it.
  // Also try to get Wordemon simultaneously running on the website.

const repositories = [
  { title: "AutoScout Car Dealership", description: "A mockup website emulating a used car dealership's page. Includes functionality for customers and employees", link: "https://github.com/andrewPelfrey/used-car-dealer" },
  { title: "WordéMon", description: "An interactive PokéMon fan project.", link: "https://github.com/nolangrossi/Wordemon" },
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
