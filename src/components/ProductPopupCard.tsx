import React from "react";

interface ProductPopupCardProps {
  title: string;
  icon: string;
  description: string;
  theme: "aqua" | "orange";
  status: "beta" | "building";
  variant?: "desktop" | "mobile";
  onClick?: () => void;
}

const ProductPopupCard: React.FC<ProductPopupCardProps> = ({
  title,
  icon,
  description,
  theme,
  status,
  variant = "desktop",
  onClick,
}) => {
  const getThemeClasses = () => {
    const baseClasses = {
      aqua: {
        glow: `from-aqua-500/20 via-aqua-400/30 to-aqua-500/20`,
        border: `border-aqua-500/20 hover:border-aqua-500/40`,
        text: `aqua-glow`,
        badge: `bg-aqua-500`,
      },
      orange: {
        glow: `from-orange-500/20 via-orange-400/30 to-orange-500/20`,
        border: `border-orange-500/20 hover:border-orange-500/40`,
        text: `orange-glow`,
        badge: `bg-orange-500`,
      },
    };
    return baseClasses[theme];
  };

  const getStatusText = () => {
    return status === "beta" ? "BETA" : "BUILDING";
  };

  const themeClasses = getThemeClasses();
  const isDesktop = variant === "desktop";

  return (
    <div className={`relative group ${isDesktop ? "w-48" : ""}`}>
      {/* Glow effect */}
      <div 
        className={`absolute -inset-1 bg-gradient-to-r ${themeClasses.glow} rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300`}
      ></div>
      
      <div 
        className={`relative bg-dark-800/50 rounded-lg border ${themeClasses.border} cursor-pointer text-center transition-all duration-300 ${
          isDesktop ? "p-4 h-full" : "p-3"
        }`}
        onClick={onClick}
      >
        <div className={`text-${isDesktop ? "2xl" : "xl"} mb-2 ${themeClasses.text}`}>{icon}</div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <h3 className={`text-sm font-bold ${themeClasses.text}`}>{title}</h3>
          <span className={`${themeClasses.badge} text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-lg`}>
            {getStatusText()}
          </span>
        </div>
        <p className="text-dark-200 text-xs leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductPopupCard;
