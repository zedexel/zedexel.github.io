import React from "react";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  features: PricingFeature[];
  isEnterprise?: boolean;
  contactInfo?: {
    phone: string;
    email: string;
  };
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isEnterprise = false,
  contactInfo,
}) => {
    return (
    <div className="elevated-card rounded-xl p-8 transition-all duration-500 animate-fade-in-up flex flex-col h-full group relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-dark-50 mb-6 group-hover:aqua-glow transition-all duration-300">{title}</h3>
        <div className="mb-8">
          <span className="text-5xl font-bold aqua-glow">{price}</span>
          {!isEnterprise && <span className="text-dark-400 ml-2 text-lg">/month</span>}
        </div>
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-dark-300">
              <svg
                className="w-6 h-6 text-white mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature.text}
            </li>
          ))}
        </ul>
        <a
          href={`https://wa.me/971509156095?text=Hello%20I%20am%20interested%20in%20the%20${title}%20plan%20for%20ZedChat`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full mt-auto"
        >
          <button className="w-full flex items-center justify-center bg-aqua-500/20 hover:bg-aqua-500/30 text-white py-4 px-6 rounded-xl border border-aqua-500/30 hover:border-aqua-500/50 transition-all duration-300 transform hover:scale-105">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-5 h-5 mr-2"
            />
            <span className="font-semibold">{isEnterprise ? "Contact Sales" : "Get Started"}</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
