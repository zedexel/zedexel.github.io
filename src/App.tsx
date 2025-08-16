import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

const App = () => {
  return (
    <>
      <div className="bg-[url('hero-bg.svg')] bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Team />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  );
};

export default App;
