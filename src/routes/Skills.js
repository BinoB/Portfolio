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
import aws from "../assets/aws.png";

import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { src: html, alt: "HTML", name: "HTML" },
        { src: css, alt: "CSS", name: "CSS" },
        { src: javascript, alt: "JavaScript", name: "JavaScript" },
        { src: sass, alt: "SCSS", name: "SCSS" },
        { src: bootstrap, alt: "Bootstrap", name: "Bootstrap" },
        { src: react, alt: "React", name: "React" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { src: nodejs, alt: "Node.js", name: "Node.js" },
        { src: express, alt: "Express.js", name: "Express.js" },
        { src: mongodb, alt: "MongoDB", name: "MongoDB" },
        {src:aws, alt:"aws", name: "AWS"}
      ],
    },
    {
      category: "Tools & Methods",
      skills: [
        { src: git, alt: "Git", name: "Git" },
        { src: github, alt: "GitHub", name: "GitHub" },
        { src: vercel, alt: "Vercel", name: "Vercel" },
        { src: netlify, alt: "Netlify", name: "Netlify" },
        { src: chrome, alt: "Chrome Dev", name: "Chrome Dev" },
      ],
    },
    {
      category: "Other Skills",
      skills: [
        { src: linux, alt: "Linux", name: "Linux" },
        { src: inkscape, alt: "Inkscape", name: "Inkscape" },
        { src: gimp, alt: "GIMP", name: "GIMP" },
        { src: figma, alt: "Figma", name: "Figma" },
        { src: msoffice, alt: "Microsoft Office", name: "Microsoft Office" },
      ],
    },
  ];

  return (
    <div className="skills-container">
      <h1 className="text-center">My Skills</h1>
      {skillsData.map((section, index) => (
        <div key={index} className="skills-section">
          <h3 className="section-title">{section.category}</h3>
          <div className="skills-grid">
            {section.skills.map((skill, idx) => (
              <div key={idx} className="skills-item">
                <img src={skill.src} alt={skill.alt} className="skills-img" />
                <p className="skills-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
