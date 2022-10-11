import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMongodb,
  DiReact,
  DiBootstrap,
  DiMysql,
  DiVisualstudio,
} from "react-icons/di";
import { SiExpress, SiHandlebarsdotjs, SiGraphql } from "react-icons/si";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="container fade-in-top">
      <div className="header">About Me</div>
      <div className="aboutBio">
        <p>
          Hello, and welcome! My name is Dylan, and I am a full-stack web
          developer.
        </p>
        <p>
          About me! Over the last four years, I worked as an Occupational
          Therapist primarily in settings such as an inpatient acute hospital,
          an assisted living facility, and a dementia care unit. Fast forward, I
          decided to make a significant career transition from the healthcare
          industry to Denver University's Coding Bootcamp. This allowed me to
          connect my interpersonal skills with my interests in technology,
          innovation, building and creating.
        </p>
        <p>
          Outside of work, you can find me making the most of every season here
          in Colorado: skiing, running, hockey, camping, and most recently,
          biking. I am always open to collaborating with others on projects.
          Feel free to reach out to connect on any platform!
        </p>
      </div>
      <div className="aboutIcons">
        <div className="iconList">
          <DiHtml5 className="icons" />
          HTML 5
        </div>
        <div className="iconList">
          <DiCss3 className="icons" />
          CSS 3
        </div>
        <div className="iconList">
          <DiJsBadge className="icons" />
          Javascript
        </div>
        <div className="iconList">
          <DiVisualstudio className="icons" />
          Visual Studio
        </div>
        <div className="iconList">
          <DiNodejsSmall className="icons" />
          NodeJS
        </div>
        <div className="iconList">
          <SiExpress className="icons" />
          Express
        </div>
        <div className="iconList">
          <DiMysql className="icons" />
          MySQL
        </div>
        <div className="iconList">
          <SiHandlebarsdotjs className="icons" />
          Handlebars
        </div>
        <div className="iconList">
          <DiBootstrap className="icons" />
          Bootstrap
        </div>
        <div className="iconList">
          <DiMongodb className="icons" />
          MongoDB
        </div>
        <div className="iconList">
          <DiReact className="icons" />
          React
        </div>
        <div className="iconList">
          <SiGraphql className="icons" />
          GraphQL
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
