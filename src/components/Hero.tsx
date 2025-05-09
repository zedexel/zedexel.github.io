import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-transparent text-gray-900 pb-40"
    >
      <h2 className="text-5xl font-bold mb-4">Modernize your business with Zedexel</h2>
      <p className="text-lg mb-6 font-medium">
        We help businesses optimize and scale their operations with custom software solutions
      </p>
      <a href="#services">
        <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-md font-semibold">
          Learn more
        </button>
      </a>
    </section>
  );
};

export default Hero;