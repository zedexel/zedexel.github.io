import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import Clients from "./Clients";

const Products: React.FC = () => {
  const navigate = useNavigate();
  
  const handleZedChatLearnMore = () => {
    navigate('/zedchat');
  };

  const handleMailZedLearnMore = () => {
    // Placeholder for MailZed action
    console.log('MailZed learn more clicked');
  };

  return (
    <section id="products" className="py-12 md:py-24 bg-dark-800/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 mb-4 md:mb-6">
            Our Products
          </h2>
          <p className="text-base md:text-xl text-dark-300 leading-relaxed font-medium max-w-4xl mx-auto px-4">
            Discover our innovative solutions designed to enhance your business
            operations
          </p>
        </div>

        {/* Horizontal Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20 max-w-5xl mx-auto">
          {/* ZedChat Product */}
          <ProductCard
            title="ZedChat"
            description="AI-powered customer support agent working 24/7 on your website. Captures leads, answers questions, and summarizes conversations directly in your inbox."
            isBeta={true}
            variant="minimal"
            onLearnMore={handleZedChatLearnMore}
          />

          {/* MailZed Product */}
          <ProductCard
            title="MailZed"
            description="Automated email campaign software that sends bulk emails and tracks progress. Perfect for digital marketing companies running campaigns across industries."
            isComingSoon={true}
            variant="minimal"
            onLearnMore={handleMailZedLearnMore}
          />
        </div>
        
        {/* Clients Section */}
        <Clients />
      </div>
    </section>
  );
};

export default Products;
