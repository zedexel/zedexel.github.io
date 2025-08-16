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
    <div className="bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:from-white hover:to-blue-100 animate-fade-in-up flex flex-col h-full border border-blue-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-blue-600">{price}</span>
        {!isEnterprise && <span className="text-gray-500 ml-2">/month</span>}
      </div>
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 text-blue-500 mr-2"
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
        className="block w-full"
      >
        <button className="w-full flex items-center justify-center bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-5 h-5 mr-2"
          />
          <span>{isEnterprise ? "Contact Sales" : "Get Started"}</span>
        </button>
      </a>
    </div>
  );
};

export default PricingCard;
