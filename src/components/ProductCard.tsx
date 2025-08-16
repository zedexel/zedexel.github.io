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
    <div className="card rounded-2xl p-10 transition-all duration-500 hover:scale-105 animate-fade-in-up group">
      <h3 className="text-4xl font-bold text-dark-50 mb-6 group-hover:text-primary-400 transition-colors duration-300">{title}</h3>
      <p className="text-dark-300 mb-8 text-lg leading-relaxed">{description}</p>
      {isComingSoon ? (
        <div className="glass-effect rounded-xl p-8 text-center">
          <p className="text-2xl font-semibold text-dark-100">Coming Soon</p>
          <p className="text-dark-400 mt-2">Stay tuned for updates!</p>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default ProductCard;
