import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-950 border-t border-dark-800/50 text-dark-400 py-8 md:py-12 text-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 md:w-96 h-48 md:h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        
        {/* Full-size Zedexel background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[16vw] md:text-[15vw] lg:text-[12vw] font-black text-dark-900/50 select-none leading-none">
            ZEDEXEL
          </span>
        </div>
      </div>
      
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6 md:mb-8">
            <p className="text-dark-400 max-w-2xl mx-auto mb-4 md:mb-6 text-sm md:text-base px-4">
              Empowering businesses for the AI era
            </p>
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-4 md:space-x-6 mb-4 md:mb-6">
              <a
                href="https://www.linkedin.com/company/zedexel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-aqua-400 transition-colors duration-300 group"
              >
                <div className="w-10 md:w-12 h-10 md:h-12 bg-dark-800/50 rounded-full flex items-center justify-center group-hover:bg-aqua-500/20 group-hover:scale-110 transition-all duration-300">
                  {(FaLinkedin as any)({ size: 16, className: "md:text-xl text-dark-300 group-hover:text-aqua-400" })}
                </div>
              </a>
              
              <a
                href="https://www.instagram.com/zedexeluae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-aqua-400 transition-colors duration-300 group"
              >
                <div className="w-10 md:w-12 h-10 md:h-12 bg-dark-800/50 rounded-full flex items-center justify-center group-hover:bg-aqua-500/20 group-hover:scale-110 transition-all duration-300">
                  {(FaInstagram as any)({ size: 16, className: "md:text-xl text-dark-300 group-hover:text-aqua-400" })}
                </div>
              </a>
            </div>
          </div>
          
          <div className="border-t border-dark-800/50 pt-6 md:pt-8">
            <p className="text-dark-500 mb-2 text-sm md:text-base">&copy; 2025 Zedexel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;