import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Project.css";
import MiddlewhereImage from "./images/middlewhere.png";
import Middlewhere2 from "./images/MiddleWhere2.0.jpg";
import SpaceInvadersImage from "./images/SpaceInvaders.jpg";
import SocialNetworkImage from "./images/SocialNetwork.png";
import EmployeeTrackerImage from "./images/EmployeeTracker.png";
import RegistryImage from "./images/theRegistry.jpg";
import ATGScreenshot from "./images/ATGScreenshot.png";

function Project() {
  const projects = [
    // {
    //   img: ATGScreenshot,
    //   title: "ATG Workouts",
    //   description: (
    //     <span style={{ color: "red" }}>
    //       IN PROGRESS! A React app to promote a friend on his journey to become
    //       a certified personal trainer while showcasing my ability to create an
    //       independent front end application using React and Material UI.
    //     </span>
    //   ),
    //   repo: "https://github.com/dylangriess/ATG-Workout",
    //   livelink: "https://dylangriess.github.io/ATG-Workout/",
    // },/
    {
      img: Middlewhere2,
      title: "Middlewhere 2.0",
      description:
        "A completely revamped application using MERN stack based on a previous bootcamp project. A social app to meet with friends!",
      repo: "https://github.com/l1keafox/reMiddleWhere",
      livelink: "https://mymiddlewhere.herokuapp.com/",
    },
    {
      img: RegistryImage,
      title: "The Registry",
      description:
        "The Registry is a full stack application that allows friends and family members access to a gift registry for new parents, a recent graduate, or newlyweds.",
      repo: "https://github.com/dylangriess/The-Registry",
      livelink: "https://whispering-coast-62095.herokuapp.com/",
    },
    {
      img: MiddlewhereImage,
      title: "Middlewhere",
      description:
        "A social app utilizing Google API to help groups find their centralized geolocation to meet up with friends or colleagues.",
      repo: "https://github.com/l1keafox/middleWhere",
      livelink: "https://limitless-temple-38712.herokuapp.com/",
    },
    {
      img: SpaceInvadersImage,
      title: "Social Space Invaders",
      description:
        "A calendar-based frontend app to share fun events in your area, including sporting events, concerts and breweries.",
      repo: "https://github.com/dylangriess/Project1-Social-Calendar",
      livelink: "https://dylangriess.github.io/Project1-Social-Calendar.com/",
    },
    {
      img: SocialNetworkImage,
      title: "Social Network API",
      description:
        "A backend social network app where users can share their thoughts and react to friends' posts.",
      repo: "https://github.com/dylangriess/social-network-api",
      livelink:
        "https://drive.google.com/file/d/1B0ofnLeZI2rNRZDEYNPKlTHUvPuWT-xA/view",
    },
    {
      img: EmployeeTrackerImage,
      title: "Employee Tracker",
      description:
        "A backend app that allows users to read and input information from an employee database regarding job description, salary, department, and roles.",
      repo: "https://github.com/dylangriess/employee-tracker",
      livelink:
        "https://drive.google.com/file/d/1f32BpdGDvvXkjHnePeggpWddAI1_C7py/view",
    },
  ];

  return (
    <div className="container fade-in-top">
      <h1 className="projectHeader">My Projects</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          {projects.map((projects) => (
            <div className="projectCards">
              <div className="card">
                <img
                  className="card-img-top"
                  src={projects.img}
                  alt="Project screenshot"
                />
                <div className="card-body">
                  <h5 className="card-title">{projects.title}</h5>
                  <p className="card-text">{projects.description}</p>
                  <a href={projects.repo} target="_blank" className="card-link">
                    Github
                  </a>
                  <a
                    href={projects.livelink}
                    target="_blank"
                    className="card-link"
                  >
                    Deploy
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default Project;
