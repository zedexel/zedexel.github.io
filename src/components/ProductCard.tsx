import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  isComingSoon?: boolean;
  isBeta?: boolean;
  children?: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  isComingSoon = false,
  isBeta = false,
  children,
}) => {
  return (
    <div className="elevated-card rounded-2xl p-6 md:p-10 transition-all duration-500 animate-fade-in-up group relative overflow-hidden">
      <div className="absolute inset-0 line-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-50 group-hover:aqua-glow transition-all duration-300">{title}</h3>
          {isBeta && (
            <span className="bg-aqua-500/20 text-aqua-400 px-3 py-1 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider border border-aqua-500/30">
              Beta
            </span>
          )}
          {isComingSoon && (
            <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider border border-orange-500/30">
              Building
            </span>
          )}
        </div>
        <p className="text-dark-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">{description}</p>
        {isComingSoon ? (
          <div className="subtle-border bg-white/5 rounded-xl p-6 md:p-8 text-center">
            <p className="text-xl md:text-2xl font-semibold text-dark-100">Launching Soon</p>
            <p className="text-dark-400 mt-2 text-sm md:text-base">Stay tuned for updates!</p>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default ProductCard;
