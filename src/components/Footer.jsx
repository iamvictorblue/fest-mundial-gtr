import React from 'react';
import festLogo from "../assets/fest copy.png";

const Footer = () => {
  return (
    <footer className="mt-20 py-6 bg-[rgb(95,188,215)]">
      <div className="container mx-auto px-4 flex justify-center">
        <img 
          src={festLogo} 
          alt="Festival Logo" 
          className="h-16 object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
    </footer>
  );
};

export default Footer;
