import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import festLogo from "../assets/fest copy.png";
import posterImage1 from "../assets/festmg3.jpeg";
import posterImage2 from "../assets/festmg4.jpeg";
import bannerImage from "../assets/conc23.jpg";
import simposioImage1 from "../assets/festmg6.jpeg";
import simposioImage2 from "../assets/festmg7.jpeg";
import simposioImage3 from "../assets/festmg8.jpeg";
import simposioImage4 from "../assets/festmg9.jpeg";
import concursoImage1 from "../assets/conc1.jpg";
import concursoImage2 from "../assets/conc2.jpg";
import leonelaImage from "../assets/festmg13.jpeg";
import ivanImage from "../assets/festmg12.jpeg";
import trioGalantesImage from "../assets/festmg11.jpeg";
import calendarioImage from "../assets/festmg1.jpeg";
import bannerA from "../assets/Concurso Nacional de Guitarra 2025 (ROLL UP BANNER A).jpg";
import bannerB from "../assets/Concurso Nacional de Guitarra 2025 (ROLL UP BANNER B).jpg";
import tacchiImage from "../assets/image002.png";
import oldigesImage from "../assets/image003.png";
import martinezImage from "../assets/image004.jpg";
import escobedoImage from "../assets/image005.jpg";
import postigoImage from "../assets/image006.jpg";
import concursoImage from "../assets/image007.jpg";

const AnimateOnScroll = ({ children, animation }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={animation}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 }
};

const FestivalPage = () => {
  return (
    <div className="min-h-screen bg-[rgb(227,163,83)] text-black pt-16 relative overflow-hidden" data-navbar-title="Festival Mundial de la Guitarra">
      {/* Decorative banner images */}
      <div className="fixed top-26 left-0 h-[90vh] w-1/4 flex items-center justify-start pointer-events-none z-0">
        <img 
          src={bannerA}
          alt="Festival Banner Left"
          className="h-[90vh] w-auto object-contain opacity-30"
        />
      </div>
      <div className="fixed top-26 right-0 h-[90vh] w-1/4 flex items-center justify-end pointer-events-none z-0">
        <img 
          src={bannerB}
          alt="Festival Banner Right"
          className="h-[90vh] w-auto object-contain opacity-30"
        />
      </div>

      <div className="max-w-[95vw] mx-auto pt-16 px-4 space-y-32 relative z-10">
        {/* Festival Mundial 2025 Section - Centered */}
        <AnimateOnScroll animation={fadeInUp}>
          <section id="festival-2025" 
            className="max-w-6xl mx-auto backdrop-blur-xl px-6 py-8 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-500 ease-in-out scroll-mt-20"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 127, 80, 0.9), rgba(255, 127, 80, 0.9))',
            }}
          >
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col justify-center items-center gap-6">
                {/* Mobile view - show the two original posters */}
                <div className="flex flex-col md:hidden justify-center items-center gap-4 w-full">
                  <img 
                    src={posterImage1}
                    alt="Festival Mundial de la Guitarra 2025 Poster 1"
                    className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src={posterImage2}
                    alt="Festival Mundial de la Guitarra 2025 Poster 2"
                    className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Desktop view - show the banner */}
                <div className="hidden md:block w-full">
                  <img 
                    src={bannerImage}
                    alt="Festival Mundial de la Guitarra 2025 Banner"
                    className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Simposio Section - Slightly to the right */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section id="simposio" 
            className="mx-auto max-w-6xl backdrop-blur-xl px-6 py-8 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-500 ease-in-out"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            }}
          >
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col items-center gap-4 mb-6 w-full">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#FF7F50] border-b-2 border-[#FF7F50]/20 pb-2 text-center">
                  Simposio Internacional sobre la construcción de la Guitarra
                </h2>
              </div>
              <div className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <img 
                    src={simposioImage1}
                    alt="Simposio Internacional 1"
                    className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src={simposioImage2}
                    alt="Simposio Internacional 2"
                    className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src={simposioImage3}
                    alt="Simposio Internacional 3"
                    className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src={simposioImage4}
                    alt="Simposio Internacional 4"
                    className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-gray-700 mt-4 text-left space-y-4">
                  <p className="text-lg md:text-2xl font-[400] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                    El Festival Mundial de la Guitarra, Mayagüez 2025 promete ser un evento sin precedentes en 
                    Puerto Rico, consolidando a la ciudad de Mayagüez en un punto clave para el arte y la cultura a nivel 
                    internacional. Este festival único en su clase se distingue por ofrecer una experiencia integral que combina 
                    música, pedagogía y el conocimiento artesanal detrás de la guitarra clásica.
                  </p>
                  <p className="text-lg md:text-2xl font-[200] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                    El evento contará con una serie de conciertos protagonizados por virtuosos de renombre 
                    mundial, un Simposio Internacional sobre la construcción de la guitarra clásica, y clases 
                    magistrales dirigidas a los estudiantes de la Escuela Libre de Música de Mayagüez.
                  </p>
                  <p className="text-lg md:text-2xl font-[150] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                    En la parte musical, los conciertos incluirán la participación de intérpretes de talla mundial como 
                    Leonela Alejandro, ganadora del prestigioso GFA 2024, el brasileño Marcus Toscano, y el 
                    reconocido virtuoso puertorriqueño Iván Rijos, cuya maestría es ampliamente aclamadas en los 
                    escenarios internacionales.
                  </p>
                  <p className="text-lg md:text-2xl font-[100] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                    El Festival Mundial de la Guitarra, Mayagüez 2025 se proyecta como un evento que trascenderá 
                    fronteras, posicionando a Puerto Rico como un referente cultural y artístico en el mundo de la guitarra 
                    clásica.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Concurso Nacional Section - Slightly to the left */}
        <AnimateOnScroll animation={fadeInRight}>
          <section id="concurso-nacional" 
            className="mx-auto max-w-6xl backdrop-blur-xl px-6 py-8 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FF7F50] text-center border-b-2 border-[#FF7F50]/20 pb-2">
                Concurso Nacional de Guitarra de Puerto Rico
              </h2>
              <p className="text-xl md:text-2xl mb-6 font-[500] whitespace-normal break-words [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                (Para jóvenes guitarristas de 10 a 18 años)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <img 
                  src={concursoImage1}
                  alt="Concurso Nacional 1"
                  className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src={concursoImage2}
                  alt="Concurso Nacional 2"
                  className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-6 text-gray-800">
                <div>
                  <div className="mb-6">
                    <p className="text-xl font-semibold">Fecha: Sábado, 3 de mayo de 2025</p>
                    <p className="text-xl font-semibold">Lugar: Teatro Balboa, Mayagüez</p>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-semibold mb-4">
                    Bases del Concurso
                  </h4>
                  <p className="text-lg mb-4">
                    El concurso se divide en dos categorias:
                  </p>

                  <div className="mb-6">
                    <h5 className="text-xl font-semibold mb-2">
                      Categoría 12-15 años:
                    </h5>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-lg">Cada participante deberá interpretar una pieza con un máximo de 3 minutos.</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-xl font-semibold mb-2">
                      Categoría 16-18 años:
                    </h5>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-lg">Primera Fase: cada participante deberá interpretar una pieza con un máximo de 5 minutos. El jurado seleccionará a tres finalistas.</li>
                      <li className="text-lg">Concierto de Finalistas: Los seleccionados deberán interpretar un repertorio de 10 minutos de duración.</li>
                    </ul>
                  </div>
                  
                  <p className="text-lg italic mb-6">
                    Nota: En ambas categorías, todas las piezas deben ser interpretadas de memoria.
                  </p>

                  <h4 className="text-2xl md:text-3xl font-semibold mb-4">
                    Proceso de Inscripción
                  </h4>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="text-lg">Fechas de inscripción: Del 1 al 15 de abril de 2025</li>
                  </ul>
                  
                  <p className="text-lg mb-2">Los participantes deberan:</p>
                  <ol className="list-decimal pl-6 mb-6">
                    <li className="text-lg">Completar el formulario disponible en nuestra página web: www.festivalmundialdelaguitarra.com</li>
                    <li className="text-lg">Adjuntar una fotografía en alta resolución que se proyectara en el escenario durante su participación.</li>
                  </ol>

                  <h4 className="text-xl font-semibold mb-2">
                    Importante:
                  </h4>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="text-lg">El horario especifico de cada participante será publicado en la página web antes del evento.</li>
                    <li className="text-lg">El orden de participación se determinará por el nivel de dificultad del repertorio. En el Concierto de Finalistas, el orden será alfabético por apellido.</li>
                    <li className="text-lg">No se aceptarán inscripciones después del 15 de abril de 2025, ya que se elaborará un programa impreso para el evento.</li>
                    <li className="text-lg">Ganadores del Primer lugar en ediciones anteriores no podrán participar.</li>
                  </ul>

                  <p className="text-lg mb-2">
                    Para consultas o dudas, contáctenos en: www.festivalmundialdelaguitarra.com
                  </p>
                  
                  <div className="mt-8 text-right">
                    <p className="text-lg font-semibold">Dr. Hermelindo Ruiz Mestre</p>
                    <p className="text-lg">Presidente,</p>
                    <p className="text-lg">Concurso Nacional de Guitarra de Puerto Rico</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Conciertos Section - Centered */}
        <AnimateOnScroll animation={fadeInUp}>
          <section id="conciertos" 
            className="mx-auto max-w-6xl backdrop-blur-xl px-6 py-8 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FF7F50] border-b-2 border-[#FF7F50]/20 pb-2 text-center">
                Conciertos
              </h2>
              
              {/* Degustación de Guitarras (formerly Café Conciertos) */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#FF7F50] mb-4 text-center">Degustación de Guitarras</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <img 
                      src={ivanImage}
                      alt="Iván Rijos"
                      className="w-full rounded-lg shadow-lg mb-4"
                    />
                    <p className="font-bold">Iván Rijos</p>
                    <p className="text-lg md:text-xl text-gray-700">Puerto Rico</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src={trioGalantesImage}
                      alt="Trío Galantes"
                      className="w-full rounded-lg shadow-lg mb-4"
                    />
                    <p className="font-bold">Trío Galantes</p>
                    <p className="text-lg md:text-xl text-gray-700">Amsterdam, Holanda</p>
                  </div>
                </div>
              </div>

              {/* Concierto de Clausura (formerly Concierto de apertura) */}
              <div>
                <h3 className="text-2xl font-bold text-[#FF7F50] mb-4 text-center">Concierto de Clausura</h3>
                <div className="text-center">
                  <img 
                    src={leonelaImage}
                    alt="Leonela Alejandro"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-4"
                  />
                  <div className="space-y-1">
                    <p className="font-bold">Leonela Alejandro (Puerto Rico)</p>
                    <p className="text-lg md:text-xl text-gray-700">"1er Premio, GFA 2024"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Calendario De Eventos Section */}
        <AnimateOnScroll animation={fadeInUp}>
          <section id="calendario" 
            className="mx-auto max-w-6xl backdrop-blur-xl px-6 py-8 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-500 ease-in-out"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FF7F50] border-b-2 border-[#FF7F50]/20 pb-2 text-center">
                Calendario De Eventos
              </h2>
              <div className="text-center">
                <img 
                  src={calendarioImage}
                  alt="Calendario De Eventos"
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Festival Mundial 2024 Section - Centered */}
        <AnimateOnScroll animation={fadeInUp}>
          <section id="festival-2024" 
            className="mx-auto max-w-6xl backdrop-blur-xl px-6 py-8 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform hover:scale-[1.01] transition-all duration-300"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FF7F50] border-b-2 border-[#FF7F50]/20 pb-2 text-center">
                Festival Mundial de la Guitarra 2024
              </h2>
              <div className="text-center space-y-8">
                <img 
                  src={concursoImage}
                  alt="Festival Mundial 2024"
                  className="w-full max-w-xl mx-auto rounded-lg shadow-lg mb-4"
                />
                <div className="text-gray-800 text-xl md:text-2xl font-[500]">
                  <p>Primer Festival Mundial de la Guitarra</p>
                  <p>Mayagüez, Puerto Rico</p>
                  <p>4-7 de mayo de 2024</p>
                </div>
                {/* YouTube Embeds */}
                <div className="space-y-8">
                  {/* Concierto de Finalistas Video */}
                  <div className="relative pt-[56.32%] w-full">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                      src="https://www.youtube.com/embed/4ys2KLiY574"
                      title="Concierto de Finalistas, Concurso Nacional Gustavo y Beatriz Arvelo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  
                  {/* Simposio Video */}
                  <div className="relative pt-[56.25%] w-full max-w-[400px] mx-auto">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                      src="https://www.youtube.com/embed/mODYpFhwHEA"
                      title='Simposio- "Festival Mundial de la Guitarra"'
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default FestivalPage; 