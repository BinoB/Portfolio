import React from "react";
import "./main.css";
import frontimg from "../assets/front.png";
import Project from "./Project";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import Certificate from "./Certificate";

const Home = () => {
  return (
    <div>
      <section className="section">
        <div
          className="d-flex justify-content-between align-items-center p-5
"
        >
          <div>
            <h1>About</h1>
            <p className="h5 text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Hello", My name is Binoni, I am a full-stack web developer with a
              focus on creating dynamic and innovative web applications. I have
              experience in front-end development with React and back-end
              development with Node.js and Express.
            </p>
            <div className="button d-flex justify-content-end">
              <a href="https://drive.google.com/file/d/1bSV_v-vzRnukv3-Y4_Usa5Ae4bm8vE0S/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
                <button className="btn btn-light me-4 rounded-pill px-4 py-2 download-link">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
          <div>
            <img src={frontimg} alt="Home" />
          </div>
        </div>
      </section>
      <Skills />
      <Project />
      <Certificate />

      <Education />
      <Contact />
    </div>
  );
};

export default Home;
