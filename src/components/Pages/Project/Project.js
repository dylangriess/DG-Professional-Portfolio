import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Project.css";
import Middlewhere from "./images/middlewhere.png";
import SpaceInvaders from "./images/SpaceInvaders.jpg";
import SocialNetwork from "./images/SocialNetwork.png";
import EmployeeTracker from "./images/EmployeeTracker.png";

function Project() {
  return (
    <div className="container fade-in-top">
      <h1 className="header">My Projects</h1>
      <div className="projectCards">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div className="card">
              <img
                class="card-img-top"
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
          <Col xs={12} md={6}>
            <div className="card">
              <img
                class="card-img-top"
                src={SpaceInvaders}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Social Space Invaders</h5>
                <p className="card-text">
                  A calendar-based app to share fun events in your area,
                  including sporting events, concerts, and breweries.
                </p>
                <a
                  href="https://github.com/dylangriess/Project1-Social-Calendar"
                  target="_blank"
                  className="card-link"
                >
                  Github
                </a>
                <a
                  href="https://dylangriess.github.io/Project1-Social-Calendar"
                  target="_blank"
                  className="card-link"
                >
                  Deploy
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div className="card">
              <img
                class="card-img-top"
                src={SocialNetwork}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Social Network API</h5>
                <p className="card-text">
                  A backend social network app where users can share their
                  thoughts and react to friend's posts.
                </p>
                <a
                  href="https://github.com/dylangriess/social-network-api"
                  target="_blank"
                  className="card-link"
                >
                  Github
                </a>
                <a
                  href="https://drive.google.com/file/d/1B0ofnLeZI2rNRZDEYNPKlTHUvPuWT-xA/view"
                  target="_blank"
                  className="card-link"
                >
                  Walkthrough
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="card">
              <img
                class="card-img-top"
                src={EmployeeTracker}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Employee Tracker</h5>
                <p className="card-text">
                  A backend app that allows users to read and input information
                  from an employee database regarding job description, salary,
                  department, and roles.
                </p>
                <a
                  href="https://github.com/dylangriess/employee-tracker"
                  target="_blank"
                  className="card-link"
                >
                  Github
                </a>
                <a
                  href="https://drive.google.com/file/d/1f32BpdGDvvXkjHnePeggpWddAI1_C7py/view"
                  target="_blank"
                  className="card-link"
                >
                  Walkthrough
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Project;
