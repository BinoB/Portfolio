import React from "react";
import cash from "../assets/pettyCash.jpg";
import ticket from "../assets/ticket.jpg";

const Project = () => {
  const projects = [
    {
      title: "Pettycash Manager",
      description:
        "A petty cash manager is responsible for overseeing and maintaining accurate records of a small fund used for everyday expenses.                                                                  ",
      image: cash,
      link: "https://pettycash-manager.vercel.app/",
    },
    {
      title: "Movie Ticket Booking",
      description:
        "A Movie Ticket Booking web application allows users to purchase movie tickets online for convenient and hassle-free cinema experiences.",
      image: ticket,
      link: "https://guvi-hackathon2-frontend-ibd2.vercel.app/",
    },
  ];

  return (
    <div>
      <h1 className="text-center mt-5 mb-3">My Projects</h1>

      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-center">
          {projects.map((project, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
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
                    className="btn btn-light me-4 rounded-pill px-4 py-2"
                  >
                    View Project
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
