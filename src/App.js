import React from "react";
import "./index.css";
import "./App.css"
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Project from "./routes/Project";
import Education from "./routes/Education";
import Contact from "./routes/Contact";
import Skills from "./routes/Skills";

const App = () => {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route exact path="*" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </Router>
      
    </>
  );
};

export default App;
