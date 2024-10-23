import React from 'react';
import festivalImage from "../assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center py-20">
      <h1 className="text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide font-bold italic">
        Festival Mundial de La Guitarra 2025
      </h1>
      <p className="mt-10 text-lg text-center text-gray-600 max-w-4xl">
        Únase a nosotros para una experiencia inolvidable de maestría en guitarra, con artistas de renombre mundial, talleres y actuaciones en todos los géneros de guitarra.
      </p>
      <img src={festivalImage} alt="Festival de Guitarra" className="w-full max-w-md rounded-lg shadow-lg mt-10" />
    </div>
  );
};

export default HeroSection;
