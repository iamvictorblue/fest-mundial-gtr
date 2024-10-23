import React from 'react';
import simposiosImage from "../assets/simposios-image.jpg"; // Replace with actual image from PDF

const Simposios = () => {
  return (
    <div id="simposios" className="py-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Simposios
      </h2>
      <img 
        src={simposiosImage} 
        alt="Simposios" 
        className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
      />
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-600 mb-6">
          Participe en simposios esclarecedores dirigidos por expertos en guitarra, que cubren temas desde técnica hasta historia de la música.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Programa de Simposios</h3>
        <ul className="list-none space-y-2 text-gray-600">
          <li>&quot;Evolución de la Guitarra Clásica&quot; por [Nombre del Experto]</li>
          <li>&quot;Técnicas Avanzadas de Fingerpicking&quot; por [Nombre del Experto]</li>
          <li>&quot;La Influencia del Flamenco en la Música Moderna&quot; por [Nombre del Experto]</li>
          {/* Add more symposium details from the PDF */}
        </ul>
      </div>
    </div>
  );
};

export default Simposios;
