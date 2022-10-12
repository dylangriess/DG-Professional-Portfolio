import React from "react";
import "./Resume.css";
import resume from "./images/Resume.pdf";

function Resume() {
  return (
    <div className="container fade-in-top resume">
      <h1>Resume</h1>

      <a href={resume} download>
        <button className="btn btn-outline-light">Click to Download</button>
      </a>
    </div>
  );
}

export default Resume;
