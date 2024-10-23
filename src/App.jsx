import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Conciertos from "./components/Conciertos";
import Simposios from "./components/Simposios";
import ConciertoCierre from "./components/ConciertoCierre";
import WorldGuitarCompetition from "./components/WorldGuitarCompetition";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection";

const App = () => {
  return (
    <div className="font-playfair">
      <Navbar />
      <AnimatedSection id="home" className="bg-gradient-to-r from-yellow-100 to-orange-100">
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection id="conciertos" className="bg-gradient-to-r from-blue-100 to-green-100">
        <Conciertos />
      </AnimatedSection>
      <AnimatedSection id="simposios" className="bg-gradient-to-r from-purple-100 to-pink-100">
        <Simposios />
      </AnimatedSection>
      <AnimatedSection id="cierre" className="bg-gradient-to-r from-green-100 to-blue-100">
        <ConciertoCierre />
      </AnimatedSection>
      <AnimatedSection id="competition" className="bg-gradient-to-r from-red-100 to-yellow-100">
        <WorldGuitarCompetition />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default App;
