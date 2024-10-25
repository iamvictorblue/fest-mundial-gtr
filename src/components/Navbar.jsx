import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../assets/guitar-festival-logo.png";
import competitionLogo from "../assets/competition-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isCompetitionPage = location.pathname === '/world-guitar-competition';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = isCompetitionPage
    ? [
        { href: "#description", label: "Description" },
        { href: "#location", label: "Location" },
        { href: "#prizes", label: "Prizes" },
        { href: "#preliminary-round", label: "Preliminary" },
        { href: "#final-stage", label: "Final" },
        { href: "#stipend", label: "Stipend" },
        { href: "#jury", label: "Jury" },
        { href: "#jose-antonio-lopez", label: "José A. López" },
      ]
    : [
        { href: "#home", label: "Inicio" },
        { href: "#conciertos", label: "Conciertos" },
        { href: "#simposios", label: "Simposios" },
        { href: "#cierre", label: "Concierto de Cierre" },
      ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 ${isCompetitionPage ? 'bg-[#498FC6]' : 'bg-[#E17055]'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <motion.img
                  className="h-12 w-auto"
                  src={isCompetitionPage ? competitionLogo : logo}
                  alt={isCompetitionPage ? "World Guitar Competition" : "Festival Mundial de La Guitarra"}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href.slice(1))}
                  className="text-white hover:bg-opacity-75 px-2 py-1 rounded-md text-sm font-medium transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
              {isCompetitionPage ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/"
                    className="bg-white text-[#498FC6] py-1 px-3 rounded-md hover:bg-gray-100 transition-all duration-300 text-sm font-bold shadow-md"
                  >
                    Back to Festival
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/world-guitar-competition"
                    className="bg-white text-[#E17055] py-1 px-3 rounded-md hover:bg-gray-100 transition-all duration-300 text-sm font-bold shadow-md"
                  >
                    World Guitar Competition
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href.slice(1))}
                className="text-white hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
            {isCompetitionPage ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/"
                  className="bg-white text-[#498FC6] block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Back to Festival
                </Link>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/world-guitar-competition"
                  className="bg-white text-[#E17055] block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  World Guitar Competition
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
