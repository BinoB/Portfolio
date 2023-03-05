import React from 'react'
import "./main.css"
import frontimg from "../assets/front.png"
import resume from "../assets/resume.pdf"
import Project from './Project'
import Skills from './Skills'
import Education from './Education'
import Contact from './Contact'

const Home = () => {
  return (
    <div><section className='section'>
    <div className='d-flex justify-content-between align-items-center p-5
'>
    
      <div>
        <h1>About</h1>
        <p className='h2 text'>"Hello", my name is Binoni,  I am a full-stack web developer with a focus on creating dynamic and innovative web applications. I have experience in front-end development with React and back-end development with Node.js and Express.</p>
        <div className='button d-flex justify-content-end'>
  <a href={resume} download>
    <button className='btn btn-light me-4 rounded-pill px-4 py-2'>
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
    <Project/>
    <Skills/>
    <Education/>
    <Contact/>
    </div>
  )
}

export default Home;