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

    // Handle scroll for navbar background
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleHashScroll(); // Handle hash on initial load
    window.addEventListener("hashchange", handleHashScroll);

    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Lower threshold for better section detection
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) setActiveLink(id);
        }
      });
    }, observerOptions);

    // Observe each section
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const getLinkStyles = (link: string) => {
    const base = "cursor-pointer font-semibold";
    const scrolled = isScrolled ? "text-white" : "text-black";
    const active =
      activeLink === link ? "opacity-100" : "opacity-50 hover:opacity-100";
    return `${base} ${scrolled} ${active} transition-opacity duration-300`;
  };

  const getNavStyles = () => {
    return `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? "py-2 bg-gray-800 text-white"
        : "py-4 bg-transparent text-black"
    }`;
  };

  const getWhatsappButtonStyles = () => {
    return `flex items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-xs sm:text-sm
      font-bold leading-normal hover:shadow-md hover:shadow-gray-400 ${
        isScrolled ? "bg-white text-black" : "bg-slate-700 text-white"
      }`;
  };

  const getLogoStyles = () => {
    return `h-4 w-auto ${isScrolled ? "fill-white" : "fill-black"}`;
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
          <h1 className="text-xl font-bold font-logo">Zedexel</h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
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
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className={`w-6 h-6 ${isScrolled ? "text-white" : "text-black"}`}
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
              className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
            />
            <span>Get In Touch</span>
          </button>
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden ${isScrolled ? "bg-gray-800" : "bg-white"}`}
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
                  className="w-4 h-4 mr-2"
                />
                <span>Get In Touch</span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
