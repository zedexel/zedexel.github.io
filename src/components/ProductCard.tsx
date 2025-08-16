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
    <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in-up">
      <h3 className="text-3xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {isComingSoon ? (
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <p className="text-2xl font-semibold text-gray-700">Coming Soon</p>
          <p className="text-gray-500 mt-2">Stay tuned for updates!</p>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default ProductCard;
