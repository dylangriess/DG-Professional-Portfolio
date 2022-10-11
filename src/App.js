import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./components/Pages/Project/Project.js";
import Footer from "./components/Footer/Footer.js";
import AboutMe from "./components/Pages/AboutMe/AboutMe.js";
import Contact from "./components/Pages/Contact/Contact.js";
import Landing from "./components/Pages/Landing/Landing.js";
import Resume from "./components/Pages/Resume/Resume.js";
import Header from "./components/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="flex-column min-100-vh text-light">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Projects" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
