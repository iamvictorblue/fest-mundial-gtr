import React from 'react';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/guitar-festival-logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80; // Adjust this value based on your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#E17055] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" onClick={(e) => scrollToSection(e, '#home')}>
            <img
              src={logo}
              alt="Festival Internacional de Guitarra Álvaro Pierri"
              className="w-32 my-2"
            />
          </a>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} onClick={(e) => scrollToSection(e, item.href)} className="text-white hover:text-gray-200">{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#competition" className="bg-gradient-to-r from-gray-800 to-black text-white py-2 px-3 rounded-md hover:from-black hover:to-gray-800 transition-all duration-300">
              World Guitar Competition
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-0 z-20 bg-[#E17055] w-full h-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href} onClick={(e) => scrollToSection(e, item.href)} className="text-white hover:text-gray-200">{item.label}</a>
                </li>
              ))}
            </ul>
            <a href="#competition" className="bg-gradient-to-r from-gray-800 to-black text-white py-2 px-3 rounded-md mt-4 hover:from-black hover:to-gray-800 transition-all duration-300" onClick={toggleNavbar}>
              World Guitar Competition
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
