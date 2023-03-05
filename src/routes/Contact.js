import React from "react";
import location from "../assets/location.png";
import "./main.css";
import mail from "../assets/mail.png";
import phone from "../assets/telephone.png";

const Contact = () => {
  return (
    <div className="container-lg my-5">
      <h2 className="text-center mb-5">Contact</h2>
      <div className="row justify-content-center">
        <div className="col-md-2">
          <div className="card">
            <div className="card-header text-center">
              <img src={mail} alt="Logo 1" className="card-logo" />
              <h4 className="card-title">Email</h4>
            </div>
            <div className="card-body">
              <p className="card-text text-center">binob831@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">
            <div className="card-header text-center">
              <img src={location} alt="Logo 2" className="card-logo" />
              <h4 className="card-title">Location</h4>
            </div>
            <div className="card-body">
              <p className="card-text text-center">Chennai</p>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">
            <div className="card-header text-center">
              <img src={phone} alt="Logo 3" className="card-logo" />
              <h4 className="card-title">Phone</h4>
            </div>
            <div className="card-body">
              <p className="card-text text-center">+91 9751925690</p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default Contact;
