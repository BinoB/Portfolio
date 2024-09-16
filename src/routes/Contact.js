import React from "react";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import phone from "../assets/telephone.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container my-5">
      <h2 className="text-center">Contact</h2>
      <div className="row justify-content-center my-3">
        <div className="col-md-2 col-sm-6 mb-4">
          <div className="contact-card">
            <div className="contact-card-header text-center">
              <img src={mail} alt="Email Icon" className="contact-card-logo" />
              <h4 className="contact-card-title">Email</h4>
            </div>
            <div className="contact-card-body">
              <p className="contact-card-text text-center">binob831@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 mb-4">
          <div className="contact-card">
            <div className="contact-card-header text-center">
              <img src={location} alt="Location Icon" className="contact-card-logo" />
              <h4 className="contact-card-title">Location</h4>
            </div>
            <div className="contact-card-body">
              <p className="contact-card-text text-center">Chennai</p>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6">
          <div className="contact-card">
            <div className="contact-card-header text-center">
              <img src={phone} alt="Phone Icon" className="contact-card-logo" />
              <h4 className="contact-card-title">Phone</h4>
            </div>
            <div className="contact-card-body">
              <p className="contact-card-text text-center">+91 9751925690</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
