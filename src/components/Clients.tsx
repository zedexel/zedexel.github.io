import React from "react";

const Clients = () => {
  const clientLogos = [
    { src: 'clients/monaco.png', href: 'https://www.monaco.ae' },
    { src: 'clients/bigtrader.png', href: 'https://www.bigtrader.biz' },
  ];

  const repeatedLogos = Array(4).fill(clientLogos).flat();

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Brands That Trust Us</h3>
      <div className="overflow-hidden relative group">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {repeatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-6">
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={logo.src}
                  alt={`Client ${index + 1}`}
                  className="h-16 w-auto max-w-[150px] object-contain invert opacity-50 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;