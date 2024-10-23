import React from 'react';
import competitionImage from "../assets/competition-image.jpg"; // Replace with actual image from PDF

const WorldGuitarCompetition = () => {
  return (
    <div id="competition" className="py-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        World Guitar Competition
      </h2>
      <img 
        src={competitionImage} 
        alt="World Guitar Competition" 
        className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
      />
      <div className="max-w-2xl mx-auto text-center">
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Pieza Requerida</h3>
          <p className="text-gray-600 mb-4">
            Todos los participantes deben interpretar la pieza requerida. La partitura para esta pieza está disponible para descargar a continuación.
          </p>
          <a href="#" className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
            Descargar Partitura
          </a>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-4">Reglas de la Competencia</h3>
          <ul className="list-none space-y-2 text-gray-600">
            <li>La competencia está abierta a guitarristas de todas las nacionalidades</li>
            <li>Los participantes deben tener entre 18 y 35 años de edad</li>
            <li>La ronda preliminar consistirá en una audición grabada en video</li>
            <li>Los finalistas serán invitados a actuar en vivo durante el festival</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default WorldGuitarCompetition;
