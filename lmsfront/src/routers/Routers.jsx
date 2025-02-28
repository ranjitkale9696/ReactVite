import React from 'react';
import Home from "../components/Home";
import Contactus from "../components/Contactus";
import { Routes, Route } from "react-router-dom";
const Routers = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact-us" element={<Contactus />} />
    </Routes>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contactus />} />
        </Routes>
    </Router> */}
    </>
  )
}

export default Routers
