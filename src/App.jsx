import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Resume from "./pages/Resume.jsx";
import AngelsAirwaves from "./pages/AngelsAirwaves.jsx";
import SunsetCement from "./pages/SunsetCement.jsx";


const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/photography/angels-airwaves" element={<AngelsAirwaves />} />
            <Route path="/photography/sunset-cement" element={<SunsetCement />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
