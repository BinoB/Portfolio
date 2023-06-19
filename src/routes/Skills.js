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
import "./main.css";

const Skills = () => {
  return (
    <div className="skill">
      <h1 className=" text-center my-5">My Skills</h1>
      <div class="row">
        <h3 className="text-center">Frontend Development</h3>

        <div class="col-12 d-flex justify-content-center my-3">
          <img src={html} alt="HTML" class="skill-logo me-3" data-mdb-toggle="popover"
            data-mdb-placement="top"
            data-mdb-trigger="hover"
            title="HTML"
            ata-mdb-custom-class="no-border"/>
          <img src={css} alt="CSS" class="skill-logo me-3" data-mdb-toggle="popover"
            data-mdb-placement="top"
            data-mdb-trigger="hover"
            title="CSS"
            ata-mdb-custom-class="no-border"/>
          <img src={javascript} alt="JavaScript" class="skill-logo me-3" data-mdb-toggle="popover"
            data-mdb-placement="top"
            data-mdb-trigger="hover"
            title="JavaScript"
            ata-mdb-custom-class="no-border"/>
          <img src={sass} alt="sass" class="skill-logo me-3"data-mdb-toggle="popover"
            data-mdb-placement="top"
            data-mdb-trigger="hover"
            title="SCSS"
            ata-mdb-custom-class="no-border" />
          <img src={bootstrap} alt="Bootstrap" class="skill-logo me-3"data-mdb-toggle="popover"
            data-mdb-placement="top"
            data-mdb-trigger="hover"
            title="Bootstrap"
            ata-mdb-custom-class="no-border" />
          <img src={react} alt="Reactjs" class="skill-logo me-3" data-mdb-toggle="popover"
            data-mdb-placement="top"
            data-mdb-trigger="hover"
            title="React"
            ata-mdb-custom-class="no-border"/>
        </div>
      </div>
      <div class="row">
        <h3 className="text-center">Backend Development</h3>

        <div class="col-12 d-flex justify-content-center my-3">
          <img src={nodejs} alt="nodejs" class="skill-logo me-3" data-mdb-toggle="popover"
            data-mdb-placement="top"
            data-mdb-trigger="hover"
            title="Node.js"
            ata-mdb-custom-class="no-border"/>
          <img src={express} alt="express" class="skill-logo me-3" data-mdb-toggle="popover"
            data-mdb-placement="top"
            data-mdb-trigger="hover"
            title="Express.js"
            ata-mdb-custom-class="no-border"/>
          <img src={mongodb} alt="mongodb" class="skill-logo me-3" data-mdb-toggle="popover"
            data-mdb-placement="top"
            data-mdb-trigger="hover"
            title="MongoDB"
            ata-mdb-custom-class="no-border"/>
        </div>
      </div>
      <div class="row">
        <h3 className="text-center">Other Skills</h3>

        <div class="col-12 d-flex justify-content-center my-3">
          <img src={linux} alt="linux" class="skill-logo me-3" data-mdb-toggle="popover"
            data-mdb-placement="top"
            data-mdb-trigger="hover"
            title="Linux"
            ata-mdb-custom-class="no-border"/>
          <img src={inkscape} alt="inkscape" class="skill-logo me-3" data-mdb-toggle="popover"
            data-mdb-placement="top"
            data-mdb-trigger="hover"
            title="Inkscape"
            ata-mdb-custom-class="no-border"/>
          <img src={gimp} alt="gimp" class="skill-logo me-3" data-mdb-toggle="popover"
            data-mdb-placement="top"
            data-mdb-trigger="hover"
            title="GIMP"
            ata-mdb-custom-class="no-border"/>
          <img src={figma} alt="figma" class="skill-logo me-3"
          data-mdb-toggle="popover"
          data-mdb-placement="top"
          data-mdb-trigger="hover"
          title="Figma"
          ata-mdb-custom-class="no-border" />

          <img
            src={msoffice}
            alt="msoffice"
            class="skill-logo me-3"
            data-mdb-container="body"
            data-mdb-toggle="popover"
            data-mdb-placement="top"
            data-mdb-trigger="hover"
            title="Microsoft Office"
            ata-mdb-custom-class="no-border"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
