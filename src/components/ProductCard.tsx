import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  isComingSoon?: boolean;
  children?: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  isComingSoon = false,
  children,
}) => {
  return (
    <div className="elevated-card rounded-2xl p-6 md:p-10 transition-all duration-500 animate-fade-in-up group relative overflow-hidden">
      <div className="absolute inset-0 line-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-50 mb-4 md:mb-6 group-hover:aqua-glow transition-all duration-300">{title}</h3>
        <p className="text-dark-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">{description}</p>
        {isComingSoon ? (
          <div className="subtle-border bg-white/5 rounded-xl p-6 md:p-8 text-center">
            <p className="text-xl md:text-2xl font-semibold text-dark-100">Coming Soon</p>
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
