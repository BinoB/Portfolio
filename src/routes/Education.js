import React from "react";
import "./main.css";
import srm from "../assets/srm.png";
import msptc from "../assets/msptc.png";
import guvi from "../assets/guvi.png";

const Education = () => {
  return (
    <div>
      <h2 className="text-center mb-5 my-5">Education</h2>
      <section id="education" className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src={srm} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    {" "}
                    B-Tech Mechanical Engineering{" "}
                  </h5>
                  <br />
                  <p className="card-text">SRM university chennai</p>
                  <span>
                    <p className="card-text">
                      <small className="text-muted">
                        Graduated: December 2022
                      </small>
                    </p>
                     
                    <div className="button d-flex justify-content-end">
                      <a
                        href="https://www.srmist.edu.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-light me-4 rounded-pill px-4 py-2">
                          Visit Website
                        </button>
                      </a>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={msptc} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Diploma in Mechanical Engineering
                  </h5>
                  <br />
                  <p className="card-text">
                    Morning Star Polytechnic collage Nagercoil
                  </p>

                  <span>
                  <p className="card-text">
                    <small className="text-muted">Completed: Apirl 2016</small>
                  </p>
                  <div className="button d-flex justify-content-end">
                      <a
                        href="https://www.morningstarpoly.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-light me-4 rounded-pill px-4 py-2">
                          Visit Website
                        </button>
                      </a>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={guvi} className="card-img-top" alt="..." />
                <br />
                <div className="card-body">
                  <h5 className="card-title">
                    Certification in Full Stack Web Developement - BootCamp
                  </h5>
                  <p className="card-text">GUVI GEEK NETWORK PRIVATE LIMITED</p>
                  <span>
                  <p className="card-text">
                    <small className="text-muted">Completed: 2022</small>
                  </p>
                  <div className="button d-flex justify-content-end">
                      <a
                        href="https://www.guvi.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-light me-4 rounded-pill px-4 py-2">
                          Visit Website
                        </button>
                      </a>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
