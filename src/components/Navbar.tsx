import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../logo.svg";
import ProductPopupCard from "./ProductPopupCard";

const sections = ["home", "services", "products", "team", "contact"];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasInitialScroll, setHasInitialScroll] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);


  useEffect(() => {
    // Handle direct hash navigation only on initial load
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash && !hasInitialScroll) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Add a small delay to ensure proper scrolling
          setTimeout(() => {
            const navHeight = 80; // Approximate navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - navHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
            setHasInitialScroll(true);
            setActiveLink(id);
          }, 100);
        }
      }
    };

    // Handle scroll for navbar background and section highlighting
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Always update active link based on scroll position
      const navHeight = 100; // Navbar height + some offset
      let currentSection = "home";
      
      // Check each section to see which one is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section top is above the navbar (accounting for navbar height)
          if (rect.top <= navHeight) {
            currentSection = section;
            break;
          }
        }
      }
      
      // Special case: if we're at the very top, always show "home"
      if (window.scrollY < 100) {
        currentSection = "home";
      }
      
      if (activeLink !== currentSection) {
        setActiveLink(currentSection);
      }
    };

    // Handle hash changes only when user clicks navigation links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        setActiveLink(id);
      }
    };

    handleHashScroll(); // Handle hash on initial load only
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    // Initial call to set active link on page load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [activeLink, hasInitialScroll]);

  const getLinkStyles = (link: string, isCurrentRoute: boolean = false) => {
    const base = "cursor-pointer font-semibold transition-all duration-300 text-sm md:text-base";
    const scrolled = isScrolled ? "text-white" : "text-white";
    const active =
      activeLink === link || isCurrentRoute ? "text-aqua-400" : "text-white/70 hover:text-aqua-400";
    return `${base} ${scrolled} ${active}`;
  };

  const getNavStyles = () => {
    return `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? "py-2 md:py-3 glass-effect backdrop-blur-md"
        : "py-3 md:py-4 bg-transparent"
    }`;
  };

  const getWhatsappButtonStyles = () => {
    return `flex items-center justify-center overflow-hidden rounded-xl h-8 md:h-10 px-3 md:px-4 text-xs md:text-sm
      font-bold leading-normal transition-all duration-300 hover:scale-105 ${
        isScrolled ? "bg-aqua-600 text-white hover:bg-aqua-700" : "bg-aqua-600 text-white hover:bg-aqua-700"
      }`;
  };

  const getLogoStyles = () => {
    return `h-3 md:h-4 w-auto ${isScrolled ? "fill-white" : "fill-white"}`;
  };

  const handleLinkClick = (section: string) => {
    setActiveLink(section);
    setIsMobileMenuOpen(false);
    setHasInitialScroll(true); // Mark that user has manually navigated
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(section);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleRouteClick = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className={getNavStyles()}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2"
        >
          <Logo className={getLogoStyles()} />
          <h1 className="text-lg md:text-xl font-bold font-logo">Zedexel</h1>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 lg:space-x-10">
          {sections.map((section) => (
            <li 
              key={section}
              className={section === 'products' ? 'relative' : ''}
              onMouseEnter={() => section === 'products' && setIsProductsHovered(true)}
              onMouseLeave={() => section === 'products' && setIsProductsHovered(false)}
            >
              <a
                href={`#${section}`}
                className={getLinkStyles(section)}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {section === 'products' && (
                  <svg 
                    className="inline-block ml-1 w-3 h-3 transition-transform duration-300"
                    style={{ transform: isProductsHovered ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </a>
              
              {/* Products Dropdown */}
              {section === 'products' && (
                <div 
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 transition-all duration-300 ease-in-out z-50 ${
                    isProductsHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  {/* Arrow pointing up */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-dark-900/95 border-l border-t border-white/20 transform rotate-45 backdrop-blur-xl"></div>
                  </div>
                  
                  {/* Main popup container with enhanced styling */}
                  <div className="relative bg-dark-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-aqua-500/10 via-transparent to-orange-500/10 rounded-2xl"></div>
                    
                    {/* Header section */}
                    <div className="relative border-b border-white/10 p-4 bg-gradient-to-r from-dark-800/50 to-dark-700/50">
                      <p className="text-sm text-dark-200 text-center font-medium">AI-powered solutions for your business</p>
                    </div>
                    
                    {/* Products grid */}
                    <div className="relative p-6">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0 bg-gradient-to-br from-aqua-500/20 via-transparent to-orange-500/20"></div>
                        <div className="w-full h-full" style={{
                          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), 
                                           radial-gradient(circle at 75% 75%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)`
                        }}></div>
                      </div>
                      
                      <div className="relative flex gap-4">
                        <ProductPopupCard
                          title="ZedChat"
                          icon="🤖"
                          description="AI-powered customer support agent working 24/7 on your website"
                          theme="aqua"
                          status="beta"
                          variant="desktop"
                          onClick={() => handleRouteClick('/zedchat')}
                        />
                        
                        <ProductPopupCard
                          title="MailZed"
                          icon="📧"
                          description="Automated email campaign software for bulk emails and progress tracking"
                          theme="orange"
                          status="building"
                          variant="desktop"
                        />
                      </div>
                    </div>
                    

                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-dark-800/50 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-5 md:w-6 h-5 md:h-6 text-dark-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/971509156095?text=Hello%20I%20am%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <button className={getWhatsappButtonStyles()}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5 mr-2"
            />
            <span className="text-xs md:text-sm">Get In Touch</span>
          </button>
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden ${
          isScrolled 
            ? "bg-dark-900/95 backdrop-blur-xl border border-white/20" 
            : "bg-dark-900/90 backdrop-blur-lg border border-white/10"
        }`}
      >
        <ul className="px-4 py-2">
          {sections.map((section) => (
            <li key={section} className="py-2">
              <a
                href={`#${section}`}
                className={`block ${getLinkStyles(section)}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li className="py-2">
            <a
              href="https://wa.me/971509156095?text=Hello%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button
                className={`${getWhatsappButtonStyles()} w-full justify-center`}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-3 md:w-4 h-3 md:h-4 mr-2"
                />
                <span className="text-xs md:text-sm">Get In Touch</span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
