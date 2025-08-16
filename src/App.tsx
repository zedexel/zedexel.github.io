import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-dark-950">
        <Navbar />
        <Hero />
        <Services />
        <Products />
        <Team />
        <Contact />
        <Footer />
        <ChatBot />
      </div>
    </>
  );
};

export default App;
