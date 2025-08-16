import React from "react";

interface Feature {
  title: string;
  description: string;
  eta?: string;
}

interface UpcomingFeaturesProps {
  features: Feature[];
}

const UpcomingFeatures: React.FC<UpcomingFeaturesProps> = ({ features }) => {
  return (
    <div className="mt-8 bg-gray-100 rounded-xl p-6">
      <h4 className="text-xl font-semibold text-gray-800 mb-6">
        🚀 Upcoming Features
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h5 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h5>
            <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
            {feature.eta && (
              <p className="text-sm text-gray-500">
                Expected: <span className="font-medium">{feature.eta}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingFeatures;
