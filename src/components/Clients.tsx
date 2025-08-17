import React from "react";

const Clients = () => {
  const clientLogos = [
    { src: "clients/monaco.png", href: "https://www.monaco.ae", invert: true },
    {
      src: "clients/bigtrader.png",
      href: "https://www.bigtrader.biz",
      invert: true,
    },
    { src: "clients/iprocure.png", href: "https://iprocure.ai", invert: true },
    {
      src: "clients/sbc.png",
      href: "https://sbcexpresscargo.com/",
      invert: false,
    },
  ];

  const repeatedLogos = Array(4).fill(clientLogos).flat();

  return (
    <div className="max-w-4xl mx-auto py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-dark-50 text-center mb-12">
          Brands That Trust Us
        </h3>
        <div className="overflow-hidden relative group">
          <div className="flex w-max animate-marquee-slow group-hover:[animation-play-state:paused]">
            {repeatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/logo"
                >
                  <img
                    src={logo.src}
                    alt={`Client ${index + 1}`}
                    className={`h-16 w-auto max-w-[140px] object-contain opacity-60 hover:opacity-100 transition-all duration-300 ${
                      logo.invert ? "invert brightness-0" : ""
                    }`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
