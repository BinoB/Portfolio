import React from "react";
/* import { Link } from "react-router-dom"; */
import home from "../assets/homepage.png";
import dashboard from "../assets/dashboard.png";
import chart from "../assets/chart.png";
import profile from "../assets/profile.png";

const Project = () => {
  return (
    <div className="project">
      <div className=" text-center">
        <h1>My Project</h1>
        <h2>Pettycash Manager</h2>
        <span>
          <p className="h3">
            A petty cash manager is responsible for overseeing and maintaining
            accurate records of a small fund used for everyday expenses,
            ensuring proper authorization and documentation of all transactions.
          </p>
          <div className="button d-flex justify-content-center">
            <a
              href="https://pettycash-manager.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-light me-4 rounded-pill px-4 py-2">
                Visit My Project
              </button>
            </a>
          </div>
        </span>
      </div>
      <div className="container">
        <div className="image-container">
          <img src={home} alt="home" className="image" />
        </div>
        <div className="image-container">
          <img src={dashboard} alt="dashboard" className="image" />
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img src={chart} alt="chart" className="image" />
        </div>
        <div className="image-container">
          <img src={profile} alt="profile" className="image" />
        </div>
      </div>
    </div>

  );
};

export default Project;
