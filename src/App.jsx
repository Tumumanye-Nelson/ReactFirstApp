import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import NavBar from "./navBar/NavBar";
import { Routes, Route } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import Tours from "./Tours";
import Experiences from "./Experiences";
import Blogs from "./Blogs";
import Destination from "./Destination";
function App() {


  return (
    <div className="H">
      <NavBar />
    
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Service" element={<Service />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Blogs" element={<Blogs/>}/>
        <Route path="Destination" element={<Destination/>}/>
        <Route path="Experiences" element={<Experiences/>}/>
        <Route path="Tours" element={<Tours/>}/>
      </Routes>
    </div>
  );
}

export default App;
