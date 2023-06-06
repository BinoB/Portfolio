import React from 'react'
import {NavLink} from 'react-router-dom'
import b from "../assets/b.png"
import "../routes/main.css";









const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
      <div className='container-fluid'>
      <div>
        <img src={b} alt="logo" className='main-logo'/>
      </div>
      <NavLink className="navbar-brand" to="/"></NavLink>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-l">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" to="/project">Project</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" to="/skills">Skills</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" to="/education">Education</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" to="/contact">Contact</NavLink>
        </li>
        
       
      
      </ul>
      
    </div>
      </div>
</nav>
    </div>
  )
}

export default Navbar