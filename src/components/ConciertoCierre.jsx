import React from 'react';
import cierreImage from "../assets/cierre-image.jpg"; // Replace with actual image from PDF

const ConciertoCierre = () => {
  return (
    <div id="cierre" className="py-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Concierto de Cierre
      </h2>
      <img 
        src={cierreImage} 
        alt="Concierto de Cierre" 
        className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
      />
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-600 mb-6">
          Únase a nosotros para el gran final con Yamandu Costa, con el anuncio de los ganadores de la competencia durante el intermedio.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Detalles del Evento</h3>
        <ul className="list-none space-y-2 text-gray-600">
          <li>Fecha: [Fecha del Concierto de Cierre]</li>
          <li>Hora: [Hora del Concierto]</li>
          <li>Lugar: [Nombre del Venue]</li>
          <li>Artista Principal: Yamandu Costa</li>
          <li>Intermedio: Anuncio de los ganadores del World Guitar Competition</li>
        </ul>
      </div>
    </div>
  );
};

export default ConciertoCierre;
