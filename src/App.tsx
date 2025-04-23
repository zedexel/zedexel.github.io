import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
// import SingleServicePage from "./components/SingleServicePage"; // import your single service page
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";

const App = () => {
  return (
    <Router>
      <Navbar/>
      {/* Routes handles page routing */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* Define the route for the single service page */}
        <Route path="/single" element={<Project />} />

        {/* Define other routes for other sections */}
        <Route path="/services" element={<Services />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
        <Footer />
    </Router>
  );
};

export default App;
