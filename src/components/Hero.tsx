import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const words = [
    "Modernize",
    "Optimize",
    "Transform",
    "Streamline",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 1500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center gradient-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hero Background SVG */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.svg"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl px-6">
        {/* ZedChat Ad Banner */}
        <div className="mb-8 md:mb-12">
                     <Link to="/zedchat" className="block w-fit mx-auto">
            <div className="bg-gradient-to-r from-aqua-500/15 to-aqua-400/15 border border-aqua-400/25 rounded-xl p-3 backdrop-blur-sm hover:bg-gradient-to-r hover:from-aqua-500/25 hover:to-aqua-400/25 transition-all duration-300 transform hover:scale-102 cursor-pointer group">
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="text-xl aqua-glow" style={{
                      background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 0 8px rgba(20, 184, 166, 0.6))'
                    }}>🤖</div>
                  </div>
                  <span className="text-base font-semibold aqua-glow group-hover:text-aqua-100 transition-colors">
                    ZedChat
                  </span>
                  <span className="bg-aqua-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                </div>
                <span className="text-sm text-aqua-300 hidden sm:inline">•</span>
                <span className="text-sm text-white group-hover:text-gray-100 transition-colors hidden sm:inline">
                  AI Customer Support
                </span>
                <svg className="w-4 h-4 text-aqua-400 group-hover:text-aqua-300 transform group-hover:translate-x-1 transition-all" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        <div className="mb-6 md:mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-dark-50">
            <div className="block md:inline">
              <span className="inline-block min-w-[200px] md:min-w-[280px]">
                <span
                  className={`inline-block aqua-glow transition-all duration-500 ease-in-out ${
                    isAnimating
                      ? "opacity-0 transform translate-y-2"
                      : "opacity-100 transform translate-y-0"
                  }`}
                  style={{
                    textShadow: isAnimating
                      ? "0 0 0px rgba(0, 255, 255, 0)"
                      : "0 0 12px rgba(0, 255, 255, 0.6), 0 0 24px rgba(0, 255, 255, 0.3)",
                  }}
                >
                  {words[currentWordIndex]}
                </span>
              </span>
            </div>
            <div className="block md:inline"> your business</div>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-dark-100 mb-3 md:mb-4">
            with Zedexel
          </h2>
        </div>

        <p className="text-base md:text-lg lg:text-xl text-dark-300 mb-8 md:mb-12 leading-relaxed font-light max-w-2xl mx-auto px-4">
          We help businesses optimize and scale with AI-powered custom software
          solutions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
          <a href="#services" className="w-full sm:w-auto">
            <button className="aqua-button px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
              Explore Services
            </button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <button className="aqua-border bg-transparent text-dark-100 hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/5 aqua-border-hover w-full sm:w-auto">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
