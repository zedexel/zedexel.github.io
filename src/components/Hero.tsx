import React, { useState, useEffect } from "react";

const Hero = () => {
  const words = [
    "Modernize",
    "Optimize",
    "Transform",
    "Accelerate",
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
      className="min-h-[85vh] pt-20 md:pt-24 pb-12 md:pb-16 flex flex-col justify-center items-center text-center gradient-bg relative overflow-hidden"
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
        <div className="mb-4 md:mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight tracking-tight text-dark-50">
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
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-100 mb-2 md:mb-3">
            with Zedexel
          </h2>
        </div>

        <p className="text-sm md:text-base lg:text-lg text-dark-300 mb-6 md:mb-8 leading-relaxed font-light max-w-2xl mx-auto px-4">
          We help businesses optimize and scale with AI-powered custom software
          solutions
        </p>

        {/* ZedChat Ad Banner */}
        <div className="mb-4 md:mb-8 px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Background glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-aqua-500/20 via-aqua-400/30 to-aqua-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Main ad card */}
              <div className="relative aqua-card p-4 sm:p-6 md:p-8 transform transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02] hover:shadow-2xl">
                {/* Beta badge */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-aqua-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg">
                  BETA
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-3 mb-3">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold aqua-glow">
                        🤖 ZedChat
                      </h3>
                      <span className="text-xs sm:text-sm bg-white/10 px-2 py-1 rounded-full text-dark-200">
                        Now Live!
                      </span>
                    </div>

                    <p className="text-dark-200 text-sm sm:text-base md:text-base leading-relaxed mb-4 max-w-md sm:max-w-none mx-auto md:mx-0">
                      AI-powered customer support agent working{" "}
                      <span className="font-semibold text-aqua-400">24/7</span>{" "}
                      on your website. Captures leads, answers questions, and
                      summarizes conversations directly in your inbox.
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2 mb-4">
                      <span className="text-xs sm:text-xs bg-aqua-500/20 text-aqua-300 px-2 sm:px-2.5 py-1 rounded-full border border-aqua-500/30 whitespace-nowrap">
                        ⚡ Instant Response
                      </span>
                      <span className="text-xs sm:text-xs bg-aqua-500/20 text-aqua-300 px-2 sm:px-2.5 py-1 rounded-full border border-aqua-500/30 whitespace-nowrap">
                        📧 Lead Capture
                      </span>
                      <span className="text-xs sm:text-xs bg-aqua-500/20 text-aqua-300 px-2 sm:px-2.5 py-1 rounded-full border border-aqua-500/30 whitespace-nowrap">
                        📊 Summary
                      </span>
                    </div>

                    {/* Pricing */}
                    <div className="text-center md:text-left">
                      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-1 sm:gap-2">
                        <span className="text-base sm:text-lg md:text-xl font-bold text-dark-50">
                          Starting at{" "}
                          <span className="aqua-glow">50 AED/month</span>
                        </span>
                        <span className="text-xs sm:text-sm text-dark-300">
                          • 500 conversations
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex-shrink-0 mt-3 md:mt-0">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      {/* Try Demo Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.dispatchEvent(new Event("openZedChat"));
                        }}
                        className="aqua-button px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
                      >
                        🚀 Try Demo
                      </button>

                      {/* View Pricing Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          document
                            .getElementById("products")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="aqua-border bg-transparent text-aqua-400 hover:text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 hover:bg-aqua-500/10 aqua-border-hover whitespace-nowrap"
                      >
                        💰 View Pricing
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom action text */}
                <div className="text-center mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10">
                  <span className="text-xs sm:text-sm text-dark-300">
                    🚀 Try our live demo or explore pricing options
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hide below buttons during Ad Space period */}
        {/* <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
          <a href="#products" className="w-full sm:w-auto">
            <button className="aqua-button px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
              Explore Products
            </button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <button className="aqua-border bg-transparent text-dark-100 hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/5 aqua-border-hover w-full sm:w-auto">
              Get Started
            </button>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
