import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../logo.svg";

const sections = ["home", "services", "products", "team", "contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Handle direct hash navigation
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
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
          }, 100);
        }
      }
    };

    // Handle scroll for navbar background and section highlighting
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find which section is currently most visible
      let currentSection = "home";
      let maxVisibility = 0;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          const windowHeight = window.innerHeight;
          
          // Calculate how much of the section is visible
          const visibleTop = Math.max(0, Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0));
          const visibility = visibleTop / Math.min(element.offsetHeight, windowHeight);
          
          if (visibility > maxVisibility && elementTop < windowHeight * 0.5) {
            maxVisibility = visibility;
            currentSection = section;
          }
        }
      });
      
      if (activeLink !== currentSection) {
        setActiveLink(currentSection);
      }
    };

    handleHashScroll(); // Handle hash on initial load
    window.addEventListener("hashchange", handleHashScroll);

    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // Adjust margins to trigger earlier
      threshold: 0.3, // Lower threshold for better detection
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveLink(id);
          }
        }
      });
    }, observerOptions);

    // Observe each section with better error handling
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      } else {
        console.warn("Section not found:", id); // Debug log
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [activeLink]);

  const getLinkStyles = (link: string) => {
    const base = "cursor-pointer font-semibold transition-all duration-300 text-sm md:text-base";
    const scrolled = isScrolled ? "text-white" : "text-white";
    const active =
      activeLink === link ? "text-aqua-400" : "text-white/70 hover:text-aqua-400";
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
  };

  return (
    <nav className={getNavStyles()}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#home" className="flex items-center space-x-2">
          <Logo className={getLogoStyles()} />
          <h1 className="text-lg md:text-xl font-bold font-logo">Zedexel</h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 lg:space-x-10">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={getLinkStyles(section)}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
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
        } overflow-hidden bg-white/5 backdrop-blur-md border border-white/10`}
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
