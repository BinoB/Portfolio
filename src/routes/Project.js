import React from "react";
import cash from "../assets/pettyCash.jpg";
import ticket from "../assets/ticket.jpg";
import blog from "../assets/blog.jpg";
import shop from "../assets/shop.png";
import "./main.css";

const Project = () => {
  const projects = [
    {
      title: "Pettycash Manager",
      description:
        "A petty cash manager is responsible for overseeing and maintaining accurate records of a small fund used for everyday expenses.",
      image: cash,
      link: "https://pettycash-manager.vercel.app/",
      githubLinkFrontend: "https://github.com/BinoB/Pettycash-manager--frontend",
      githubLinkBackend: "https://github.com/BinoB/Pettycash-manager-server",
    },
    {
      title: "Movie Ticket Booking",
      description:
        "A Movie Ticket Booking web application allows users to purchase movie tickets online for convenient and hassle-free cinema experiences.",
      image: ticket,
      link: "https://guvi-hackathon2-frontend-ibd2.vercel.app/",
      githubLinkFrontend: "https://github.com/BinoB/guvi-hackathon2-frontend",
      githubLinkBackend: "https://github.com/BinoB/guvi-hackathon2-backend",
    },
    {
      title: "Blog App",
      description:
        "A blog app that allows users to create, publish, and share articles or posts on various topics",
      image: blog,
      link: "https://heroic-axolotl-3f0ac5.netlify.app",
      githubLinkFrontend: "https://github.com/BinoB/Blog_App-Frontend",
      githubLinkBackend: "https://github.com/BinoB/Blog_App_Backend",
    },
    {
      title: "Shop",
      description:
        "Retail store management system with features like tracking sales transactions, and payment processing for seamless operations in stores",
      image: shop,
      link: "https://fantastic-halva-5e3300.netlify.app",
      githubLinkFrontend: "https://github.com/BinoB/Shop_Frontend",
      githubLinkBackend: "https://github.com/BinoB/Shop_Backend",
    },
  ];

  return (
    <div className="project-page">
      <h1 className="text-center my-0 ">My Projects</h1>

      <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-center">
          {projects.map((project, index) => (
            <div className="col" key={index}>
              <div className="card h-100 project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top portfolio-image"
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark me-4 rounded-pill px-4 py-2"
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubLinkFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-light  rounded-pill px-4 py-2"
                  >
                    Frontend Code
                  </a>
                  <a
                    href={project.githubLinkBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-light  rounded-pill px-4 py-2"
                  >
                    Backend Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
