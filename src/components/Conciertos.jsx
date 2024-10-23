import React from 'react';
import conciertosImage from "../assets/conciertos-image.jpg"; // Replace with actual image from PDF

const Conciertos = () => {
  return (
    <div id="conciertos" className="py-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Conciertos
      </h2>
      <img 
        src={conciertosImage} 
        alt="Conciertos" 
        className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
      />
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-600 mb-6">
          Disfrute de actuaciones excepcionales de guitarristas de renombre mundial en diversos géneros, desde clásico hasta flamenco, jazz y más.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Programa de Conciertos</h3>
        <ul className="list-none space-y-2 text-gray-600">
          <li>Día 1: Concierto de apertura con [Nombre del Artista]</li>
          <li>Día 2: Noche de guitarra clásica con [Nombre del Artista]</li>
          <li>Día 3: Fusión de flamenco y jazz con [Nombre del Artista]</li>
          {/* Add more concert details from the PDF */}
        </ul>
      </div>
    </div>
  );
};

export default Conciertos;
