import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  // A helper function to determine the styles for each link
  const getLinkStyles = (link: string) => {
    const staticStyles = "cursor-pointer font-semibold text-white"
    const conditionalStyles = activeLink === link
      ? ""
      : "text-opacity-50 hover:text-white transition-colors duration-500 ease-in-out";
    return `${staticStyles} ${conditionalStyles}`;
  };

  return (
    <nav
      className={`${
        isScrolled ? "bg-zinc-800" : "bg-gradient-to-r from-purple-600 to-pink-500"
      } text-white py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Zedexel</h1>
        <ul className="hidden md:flex space-x-10">
          <li>
            <a
              href="#home"
              className={`${getLinkStyles("home")} `}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`${getLinkStyles("services")}`}
              onClick={() => handleLinkClick("services")}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#team"
              className={`${getLinkStyles("team")}`}
              onClick={() => handleLinkClick("team")}
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${getLinkStyles("contact")}`}
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
        <a
          href="https://wa.me/971509156095?text=Hello%20I%20am%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="flex items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-white text-black text-xs sm:text-sm font-bold leading-normal"
          >
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