import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../assets/guitar-festival-logo.png";
import competitionLogo from "../assets/competition-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isFestivalPage = location.pathname.includes('festival');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // height of navbar plus some padding
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const festivalNavItems = [
    { href: "#festival-2025", label: "Festival Mundial 2025" },
    { href: "#simposio", label: "Simposio Internacional" },
    { href: "#concurso-nacional", label: "Concurso Nacional" },
    { href: "#conciertos", label: "Conciertos" },
    { href: "#festival-2024", label: "Festival Mundial 2024" },
  ];

  const competitionNavItems = [
    { href: "#description", label: "Welcome" },
    { href: "#location", label: "Location" },
    { href: "#prizes", label: "Prizes" },
    { href: "#required-piece", label: "Set Piece" },
    { href: "#preliminary-round", label: "Preliminary" },
    { href: "#final-stage", label: "Final" },
    { href: "#stipend", label: "Stipend" },
    { href: "#jury", label: "Jury" },
    { href: "#jose-antonio-lopez", label: "José A. López" },
  ];

  const navItems = isFestivalPage ? festivalNavItems : competitionNavItems;

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 w-full z-50 ${isFestivalPage ? 'bg-[#FF7F50]' : 'bg-[rgb(95,188,215)]'}`}
    >
      <div className="max-w-[95vw] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <motion.img
              className="h-12 w-auto cursor-pointer"
              src={isFestivalPage ? logo : competitionLogo}
              alt={isFestivalPage ? "Festival Mundial" : "World Guitar Competition"}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={(e) => scrollToSection(e, "hero")}
            />
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex flex-wrap justify-center gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href.slice(1))}
                  className="text-white hover:bg-white hover:text-[#FF7F50] px-2 py-2 rounded-md text-sm font-[600] transition-all duration-300 ease-in-out whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            {isFestivalPage ? (
              <Link
                to="/"
                className="bg-white text-[rgb(95,188,215)] py-2 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300 text-sm font-[700] shadow-md whitespace-nowrap"
              >
                JAL World Guitar Competition
              </Link>
            ) : (
              <Link
                to="/festival"
                className="bg-white text-[#FF7F50] py-2 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300 text-sm font-[700] shadow-md whitespace-nowrap"
              >
                Festival Mundial de la Guitarra
              </Link>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[rgb(83,153,208)] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with updated styling */}
      {isOpen && (
        <motion.div 
          className={`md:hidden absolute left-0 right-0 ${isFestivalPage ? 'bg-[#FF7F50]' : 'bg-[rgb(95,188,215)]'} px-4 pt-2 pb-4 shadow-lg`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href.slice(1))}
              className={`block px-3 py-2 rounded-md text-base font-[500] ${
                isFestivalPage 
                  ? 'text-white hover:bg-white hover:text-[rgb(95,188,215)]' 
                  : 'text-[#FFD700] hover:bg-[#FFD700] hover:text-black'
              } transition-all duration-200`}
              whileHover={{ x: 10 }}
            >
              {item.label}
            </motion.a>
          ))}
          {isFestivalPage ? (
            <Link
              to="/"
              className="block mt-4 px-3 py-2 rounded-md text-base font-[700] bg-white text-[rgb(95,188,215)]"
              onClick={() => setIsOpen(false)}
            >
              JAL World Guitar Competition
            </Link>
          ) : (
            <Link
              to="/festival"
              className="block mt-4 px-3 py-2 rounded-md text-base font-[700] bg-white text-[#FF7F50]"
              onClick={() => setIsOpen(false)}
            >
              Festival Mundial de la Guitarra
            </Link>
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
