import React from "react";
import "./Resume.css";
import resumeimg from "./assets/ResumeScreenshot.jpg";
import resume from "./assets/GriessResume2022.pdf";

function Resume() {
  return (
    <div className="container fade-in-top resume">
      <h1>Resume</h1>
      <img src={resumeimg} className="resume" />
      <a href={resume} download>
        <button className="btn btn-outline-light">Click to Download</button>
      </a>
    </div>
  );
}

export default Resume;
