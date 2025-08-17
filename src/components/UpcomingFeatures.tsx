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
    <div className="mt-6 md:mt-8 elevated-card rounded-2xl p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-5"></div>
      <div className="relative z-10">
        <h4 className="text-xl md:text-2xl font-bold text-dark-50 mb-6 md:mb-8 flex items-center">
          <span className="text-2xl md:text-3xl mr-2 md:mr-3">🚀</span>
          Upcoming Features
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card rounded-xl p-4 md:p-6 hover:scale-105 transition-all duration-300 group"
            >
              <h5 className="text-base md:text-lg font-semibold text-dark-50 mb-2 md:mb-3 group-hover:aqua-glow transition-all duration-300">
                {feature.title}
              </h5>
              <p className="text-dark-300 text-xs md:text-sm mb-2 md:mb-3 leading-relaxed">{feature.description}</p>
              {feature.eta && (
                <p className="text-xs md:text-sm text-aqua-400 font-medium">
                  Expected: <span className="text-aqua-300">{feature.eta}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingFeatures;
