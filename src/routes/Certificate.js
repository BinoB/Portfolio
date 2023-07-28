import React from 'react';
import react from "../assets/react.png";
import "./main.css";
import "./Certificate.css";
import javascript from "../assets/javascript.png";
import nodejs from "../assets/nodejs.png";
import mern from "../assets/mern.png";
import aws from "../assets/aws.png";


const Certificate = () => {
  const certificates = [
    {
      title: "Full Stack Development",
      description: "Certificate for completing Full Stack Development course",
      link: "https://www.guvi.in/certificate?id=iDk066W48H95v8V011&download=false",
      logo: mern, 
    },
    {
      title: "React.js",
      description: "Certificate for completing React.js course",
      link: "https://www.guvi.in/certificate?id=564I8F1S8Hd5w9600W&download=false",
      logo: react, 
    },
    {
      title: "AWS",
      description: "Certificate for completing AWS course",
      link: "https://www.guvi.in/certificate?id=kf0y08m66151908oa4&download=false",
      logo: aws, 
    },
    {
      title: "Node.js",
      description: "Certificate for completing Node.js course",
      link: "https://www.guvi.in/certificate?id=7095a8I1690T4O8CY6&download=false",
      logo: nodejs, 
    },
    {
      title: "JavaScript",
      description: "Certificate for completing JavaScript course",
      link: "https://www.guvi.in/certificate?id=0U8s549Ei8x66C0n1G&download=false",
      logo: javascript, 
    },
  ];

  return (
    <div className="container mt-2 my-5 certificate-page">
      <h2 className='my-5'>Certificates</h2>
      <div className='row'>
        {certificates.map((certificate, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className='card certificate-card'>
              <img src={certificate.logo} alt={certificate.title} className="certificate-logo mt-3 " />
              <div className='card-body'>
                <div className='title'>{certificate.title}</div>
                <div>{certificate.description}</div>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light me-4 rounded-pill px-4 py-2 my-3"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
