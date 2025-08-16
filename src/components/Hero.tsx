import React, { useState, useEffect } from "react";

const Hero = () => {
  const words = ["Modernize", "Optimize", "Transform", "Accelerate", "Streamline"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center gradient-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto max-w-5xl px-6">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-dark-50">
            <span className="inline-block min-w-[280px]">
              <span
                className={`inline-block text-primary-400 transition-all duration-500 ease-in-out ${
                  isAnimating
                    ? "opacity-0 transform translate-y-2 scale-95"
                    : "opacity-100 transform translate-y-0 scale-100"
                }`}
              >
                {words[currentWordIndex]}
              </span>
            </span>{" "}
            your business
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-dark-100 mb-4">
            with Zedexel
          </h2>
        </div>
        
        <p className="text-lg md:text-xl lg:text-2xl text-dark-300 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
          We help businesses optimize and scale their operations with custom software solutions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#services">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Services
            </button>
          </a>
          <a href="#contact">
            <button className="glass-effect text-dark-100 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-primary-500/30 hover:border-primary-400/50">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;