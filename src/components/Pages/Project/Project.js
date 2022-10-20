import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Project.css";
import MiddlewhereImage from "./images/middlewhere.png";
import SpaceInvadersImage from "./images/SpaceInvaders.jpg";
import SocialNetworkImage from "./images/SocialNetwork.png";
import EmployeeTrackerImage from "./images/EmployeeTracker.png";
import RegistryImage from "./images/theRegistry.jpg";

function Project() {
  const projects = [
    {
      img: MiddlewhereImage,
      title: "Middlewhere",
      description:
        "A social app utilizing Google API to help groups find their centralized geolocation to meet up with friends or colleagues.",
      repo: "https://github.com/l1keafox/middleWhere",
      livelink: "https://limitless-temple-38712.herokuapp.com/",
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
      <div className="projectCards">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div className="card">
              <img
                className="card-img-top"
                src={Middlewhere}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">MiddleWhere</h5>
                <p className="card-text">
                  A social app that will help groups find their centralized
                  geolocation to meet up with friends or colleages.
                </p>
                <a
                  href="https://github.com/l1keafox/middleWhere"
                  target="_blank"
                  className="card-link"
                >
                  Github
                </a>
                <a
                  href="https://limitless-temple-38712.herokuapp.com/"
                  target="_blank"
                  className="card-link"
                >
                  Deploy
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
