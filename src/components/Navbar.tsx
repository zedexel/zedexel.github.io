import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../logo.svg";

const sections = ["home", "services", "team", "contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust this to control when a section is considered active
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
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const getLinkStyles = (link: string) => {
    const base = "cursor-pointer font-semibold";
    const scrolled = isScrolled ? "text-white" : "text-black";
    const active = activeLink === link ? "opacity-100" : "opacity-50 hover:opacity-100";
    return `${base} ${scrolled} ${active} transition-opacity duration-300`;
  };

  const getNavStyles = () => {
    return `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "py-0 bg-gray-800 text-white" : "py-4 bg-transparent text-black"
    }`;
  };

  const getWhatsappButtonStyles = () => {
    return `flex items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-xs sm:text-sm font-bold leading-normal ${
      isScrolled ? "bg-white text-black" : "bg-slate-700 text-white"
    }`;
  };

  const getLogoStyles = () => {
    return `h-14 w-auto ${isScrolled ? "fill-white" : "fill-black"}`;
  };

  return (
    <nav className={getNavStyles()}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <Logo className={getLogoStyles()} />
          <h1 className="text-xl font-bold font-logo">Zedexel</h1>
        </div>
        <ul className="hidden md:flex space-x-10">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={getLinkStyles(section)}
                onClick={() => setActiveLink(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/971509156095?text=Hello%20I%20am%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
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
    </nav>
  );
};

export default Navbar;