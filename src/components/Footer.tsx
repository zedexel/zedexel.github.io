import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-950 border-t border-dark-800/50 text-dark-400 py-12 text-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-dark-100 mb-4">Zedexel</h3>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Empowering businesses with innovative software solutions for the digital age
            </p>
          </div>
          
          <div className="border-t border-dark-800/50 pt-8">
            <p className="text-dark-400 mb-2">&copy; 2025 Zedexel. All rights reserved.</p>
            <a
              className="text-xs text-dark-500 hover:text-dark-400 transition-colors duration-300"
              href="https://www.vecteezy.com/free-vector/background"
            >
              Background Vectors by Vecteezy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;