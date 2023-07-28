import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import linux from "../assets/linux.png";
import inkscape from "../assets/inkscape.png";
import gimp from "../assets/gimp.png";
import figma from "../assets/figma.png";
import msoffice from "../assets/msoffice.png";
import sass from "../assets/sass.png";
import git from "../assets/Git.png";
import github from "../assets/github.png";
import vercel from "../assets/vercel.png";
import netlify from "../assets/netlify.png";
import chrome from "../assets/chrome.png";
import "./main.css";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skill">
      <h1 className="text-center">My Skills</h1>
      <div className="row">
        <h3 className="text-center my-4">Frontend Development</h3>

        <div className="col-12 d-flex justify-content-center my-3">
          <div className="skill-logo">
            <img src={html} alt="HTML" />
            <p className="logo-name">HTML</p>
          </div>
          <div className="skill-logo">
            <img src={css} alt="CSS" />
            <p className="logo-name">CSS</p>
          </div>
          <div className="skill-logo">
            <img src={javascript} alt="JavaScript" />
            <p className="logo-name">JavaScript</p>
          </div>
          <div className="skill-logo">
            <img src={sass} alt="sass" />
            <p className="logo-name">SCSS</p>
          </div>
          <div className="skill-logo">
            <img src={bootstrap} alt="Bootstrap" />
            <p className="logo-name">Bootstrap</p>
          </div>
          <div className="skill-logo">
            <img src={react} alt="Reactjs" />
            <p className="logo-name">React</p>
          </div>
        </div>
      </div>
      <div className="row p-5">
        <h3 className="text-center">Backend Development</h3>

        <div className="col-12 d-flex justify-content-center my-3">
          <div className="skill-logo">
            <img src={nodejs} alt="nodejs" />
            <p className="logo-name">Node.js</p>
          </div>
          <div className="skill-logo">
            <img src={express} alt="express" />
            <p className="logo-name">Express.js</p>
          </div>
          <div className="skill-logo">
            <img src={mongodb} alt="mongodb" />
            <p className="logo-name">MongoDB</p>
          </div>
        </div>
      </div>
      <div className="row">
        <h3 className="text-center">Tools & Methods</h3>

        <div className="col-12 d-flex justify-content-center my-3">
          <div className="skill-logo">
            <img src={git} alt="linux" />
            <p className="logo-name">Git</p>
          </div>
          <div className="skill-logo">
            <img src={github} alt="inkscape" />
            <p className="logo-name">Github</p>
          </div>
          <div className="skill-logo ">
            <img src={vercel} alt="gimp" />
            <p className="logo-name my-3">Versal</p>
          </div>
          <div className="skill-logo">
            <img src={netlify} alt="figma" />
            <p className="logo-name">Netlify</p>
          </div>
          <div className="skill-logo">
            <img src={chrome} alt="msoffice" />
            <p className="logo-name">Chrome Dev</p>
          </div>
        </div>
      </div>
      <div className="row p-5">
        <h3 className="text-center">Other Skills</h3>

        <div className="col-12 d-flex justify-content-center my-3">
          <div className="skill-logo">
            <img src={linux} alt="linux" />
            <p className="logo-name">Linux</p>
          </div>
          <div className="skill-logo">
            <img src={inkscape} alt="inkscape" />
            <p className="logo-name">Inkscape</p>
          </div>
          <div className="skill-logo">
            <img src={gimp} alt="gimp" />
            <p className="logo-name">GIMP</p>
          </div>
          <div className="skill-logo">
            <img src={figma} alt="figma" />

            <p className="logo-name">Figma</p>
          </div>
          <div className="skill-logo">
            <img src={msoffice} alt="msoffice" />
            <p className="logo-name">Microsoft Office</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
