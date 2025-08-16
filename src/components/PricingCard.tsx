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
    <div className="card rounded-xl p-8 transition-all duration-500 hover:scale-105 animate-fade-in-up flex flex-col h-full group hover:border-primary-500/50">
      <h3 className="text-2xl font-bold text-dark-50 mb-6 group-hover:text-primary-400 transition-colors duration-300">{title}</h3>
      <div className="mb-8">
        <span className="text-5xl font-bold text-primary-400">{price}</span>
        {!isEnterprise && <span className="text-dark-400 ml-2 text-lg">/month</span>}
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-dark-300">
            <svg
              className="w-6 h-6 text-primary-400 mr-3 flex-shrink-0"
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
        <button className="w-full flex items-center justify-center bg-primary-600 text-white py-4 px-6 rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-5 h-5 mr-2"
          />
          <span className="font-semibold">{isEnterprise ? "Contact Sales" : "Get Started"}</span>
        </button>
      </a>
    </div>
  );
};

export default PricingCard;
