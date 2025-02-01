import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white"
    >
      <h2 className="text-4xl font-bold mb-4">Modernize your business with Zedexel</h2>
      <p className="text-lg mb-6">
        We help businesses optimize and scale their operations with custom software solutions
      </p>
      <a href="#services">
        <button className="bg-white text-purple-600 px-6 py-3 rounded-md font-semibold">
          Learn more
        </button>
      </a>
    </section>
  );
};

export default Hero;