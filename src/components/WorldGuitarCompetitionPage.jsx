'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import competitionImage from "../assets/competition-image.jpg";
import juryImage1 from "../assets/jury-image.png";
import juryImage2 from "../assets/jury-image-2.png";
import juryImage3 from "../assets/jury-image-3.png";
import joseAntonioLopezImage from "../assets/jose-antonio-lopez.png";

// AnimateOnScroll component
const AnimateOnScroll = ({ children, animation }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={animation}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const WorldGuitarCompetitionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="max-w-7xl mx-auto py-24 px-6 space-y-24">
        {/* Hero Section */}
        <AnimateOnScroll animation={fadeInUp}>
          <section className="text-center">
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-[#498FC6] font-script"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              José Antonio López
            </motion.h1>
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl mb-12 font-display font-bold tracking-wider"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              WORLD GUITAR COMPETITION
            </motion.h2>
            <motion.h3
              className="text-2xl mb-12 font-sans"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              4 de mayo de 2025 • Puerto Rico
            </motion.h3>
            <motion.div 
              className="flex flex-col md:flex-row gap-8 items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-full md:w-1/2 aspect-w-16 aspect-h-9">
                <iframe 
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/4ys2KLiY574" 
                  title="Concierto de Finalistas, Concurso Nacional Gustavo y Beatriz Arvelo" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src={competitionImage} 
                  alt="World Guitar Competition Poster" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </section>
        </AnimateOnScroll>

        {/* Description Section */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section id="description" className="mb-16 bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-[#498FC6] font-display">Description</h2>
            <p className="text-lg mb-4 font-sans">
              The aim of the José Antonio López World Guitar Competition is to reward artistic expression and
              musicality in classical guitar performance.
            </p>
            <p className="text-lg mb-4 font-sans">
              With $18,000 in prizes, the competition invites guitarists from around the world to revive the
              interpretative styles evoked by legendary figures such as Julian Bream (England), Alirio Díaz
              (Venezuela), and Leonardo Egúrbida (Puerto Rico). This competition encourages guitarists
              worldwide to bring back the lyricism and tonal colors that make classical guitar unique.
            </p>
            <p className="text-lg mb-4 font-sans">
              The competition will be held as part of the World Guitar Festival, an event dedicated to the guitar,
              featuring the most important luthiers in the world. Participants will include Andrea Tacchi (Italy),
              Gerhard Oldiges (Germany), Gerardo Escobedo (Mexico), Alberto Martínez from Orfeo Magazine
              (Uruguay/Paris), and the collector José Luis Postigo (Seville, Spain).
            </p>
            <p className="text-lg mb-4 font-sans">
              The featured concerts will be performed by Yamandú Costa (Croatia) and Leonela Alejandro
              (Puerto Rico). In addition, two Café Concerts, titled "Guitar Tasting," will be offered, featuring
              virtuosos Iván Rijos (Puerto Rico) and Marcus Toscano (Brazil).
            </p>
            <p className="text-lg font-sans">
              The event will conclude with the Gustavo and Beatriz Arvelo National Guitar Competition, where
              the audience will enjoy the most talented young Puerto Rican guitarists between the ages of 10
              and 18. A series of masterclasses by guest artists will complement this grand international
              gathering dedicated to the guitar.
            </p>
          </section>
        </AnimateOnScroll>

        {/* Location Section */}
        <AnimateOnScroll animation={fadeInRight}>
          <section id="location" className="mb-16 bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-[#498FC6] font-display">Location</h2>
            <p className="text-lg font-sans">
              The José Antonio López World Guitar Competition will be held at the Symphonic Hall, San Juan,
              Puerto Rico.
            </p>
            <p className="text-lg mt-4 font-sans">
              <strong>Date:</strong> Sunday, May 4, 2025.
            </p>
          </section>
        </AnimateOnScroll>

        {/* Prizes Section */}
        <AnimateOnScroll animation={scaleIn}>
          <section id="prizes" className="mb-16 bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-[#498FC6] font-display">Prizes</h2>
            <ul className="space-y-4 text-lg font-sans">
              <li className="flex items-center">
                <span className="text-3xl font-bold text-yellow-500 mr-4">1st Place</span>
                <span>$7,000</span>
              </li>
              <li className="flex items-center">
                <span className="text-3xl font-bold text-gray-400 mr-4">2nd Place</span>
                <span>$2,000</span>
              </li>
              <li className="flex items-center">
                <span className="text-3xl font-bold text-orange-500 mr-4">3rd Place</span>
                <span>$1,000</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl font-bold text-[#498FC6] mr-4">Audience Award</span>
                <span>
                  This will be awarded for the best performance of the required piece, "Guitarra
                  Poética," by composer José Antonio López. The prize will consist of a "Replica of Antonio de
                  Torres" concert guitar, valued at $5,000, built by the world-renowned luthier Gerardo Escobedo
                  from Paracho, Mexico.
                </span>
              </li>
            </ul>
          </section>
        </AnimateOnScroll>

        {/* Required Piece Section */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section id="required-piece" className="mb-16 bg-gradient-to-r from-red-100 to-yellow-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-[#498FC6] font-display">Required Piece</h2>
            <p className="text-lg mb-4 font-sans">
              The competition requires each contestant to perform the piece &quot;Guitarra Poética&quot; (Homage to
              Manuel Bellido) by Puerto Rican composer José Antonio López. The PDF score, audio sample,
              and several YouTube videos are available for download below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/path-to-your-score.pdf" 
                download="Guitarra_Poetica_Score.pdf"
                className="inline-block bg-[#498FC6] text-white py-2 px-4 rounded-md hover:bg-[#498FC6] transition-colors text-center"
              >
                Download Score (PDF)
              </a>
              <a 
                href="/path-to-your-audio.mp3" 
                download="Guitarra_Poetica_Audio.mp3"
                className="inline-block bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-center"
              >
                Download Audio Sample (MP3)
              </a>
            </div>
            <div className="mt-4">
              <a 
                href="https://www.youtube.com/watch?v=your-video-id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#498FC6] text-white py-2 px-4 rounded-md hover:bg-[#498FC6] transition-colors text-center"
              >
                Watch on YouTube
              </a>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Age Section */}
        <AnimateOnScroll animation={fadeInRight}>
          <section id="age" className="mb-16 bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-[#498FC6] font-display">Age</h2>
            <p className="text-lg font-sans">
              The José Antonio López World Guitar Competition is an open category event with no age limit for
              participation.
            </p>
          </section>
        </AnimateOnScroll>

        {/* Preliminary Round Section */}
        <AnimateOnScroll animation={fadeInUp}>
          <section id="preliminary-round" className="mb-16 bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-[#498FC6] font-display">Preliminary Round</h2>
            <p className="text-lg mb-4 font-sans">
              The José Antonio López World Guitar Competition requires an initial elimination phase, which
              will consist of the performance of the required piece titled "Guitarra Poética." This performance
              must be submitted via a YouTube video no later than March 30, 2025.
            </p>
            <p className="text-lg mb-4 font-sans">
              In the video, each contestant must include a personal introduction before the performance, stating
              their full name, country of origin, the name of the competition, and the title of the piece.
            </p>
            <p className="text-lg mb-4 font-sans">
              Along with the video, participants must submit the registration form, which can be downloaded
              from our website, accompanied by the video link. Both, the video link and the registration form
              should be sent to the following email address: jalwgc@gmail.com
            </p>
            <a href="#" className="text-[#498FC6] hover:underline">Registration form: Click Here</a>
          </section>
        </AnimateOnScroll>

        {/* Final Stage Section */}
        <AnimateOnScroll animation={scaleIn}>
          <section id="final-stage" className="mb-16 bg-gradient-to-r from-yellow-100 to-green-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-[#498FC6] font-display">Final Stage</h2>
            <p className="text-lg mb-4 font-sans">
              The final stage of the José Antonio López World Guitar Competition will be held in person on May
              4, 2025, at the Symphonic Hall in San Juan, Puerto Rico.
            </p>
            <p className="text-lg font-sans">
              In the first round of the final stage, the three finalists, selected in alphabetical order, will perform
              the required piece, "Guitarra Poética" by José Antonio López. In the second round, the finalists
              will present a free repertoire with a duration of 20 minutes. (The selection of the repertoire and the
              approach to interpretation must align with the competition&apos;s description).
            </p>
          </section>
        </AnimateOnScroll>

        {/* Stipend Section */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section id="stipend" className="mb-16 bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-[#498FC6] font-display">Stipend for Finalists</h2>
            <h3 className="text-2xl font-semibold mb-4">Flights</h3>
            <p className="text-lg mb-4 font-sans">
              The three selected finalists will receive a $500 stipend to help cover their flight expenses. It is
              important to note that, as Puerto Rico is a U.S. territory, each contestant must ensure they meet the
              necessary visa requirements to enter U.S. territory.
            </p>
            <p className="text-lg mb-4 font-sans">
              When purchasing airline tickets, we recommend flying into either San Juan Airport or Aguadilla
              Airport. San Juan Airport is two and a half hours from Mayagüez, while Aguadilla Airport is 45
              minutes from the city. San Juan receives daily flights from various parts of the U.S. and also direct
              flights from Europe. Aguadilla offers direct flights from New York and Orlando, Florida.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Hotel and Transportation</h3>
            <p className="text-lg font-sans">
              The José Antonio López World Guitar Competition will provide three nights of accommodation
              for the three finalists, as well as internal transportation. Additionally, the day after the competition,
              we will organize a trip to the beautiful beaches of Puerto Rico for all participants of the World
              Guitar Festival. Remember, in Puerto Rico, we enjoy only one season all year long: Summer!
            </p>
          </section>
        </AnimateOnScroll>

        {/* Jury Section */}
        <AnimateOnScroll animation={fadeInRight}>
          <section id="jury" className="mb-16 bg-gradient-to-r from-blue-100 to-indigo-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-[#498FC6] font-display">International Jury</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <motion.img 
                src={juryImage1} 
                alt="International Jury 1" 
                className="w-full rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={juryImage2} 
                alt="International Jury 2" 
                className="w-full rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={juryImage3} 
                alt="International Jury 3" 
                className="w-full rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-lg mb-4 font-sans">
              The José Antonio López World Guitar Competition has selected renowned artists from the
              international music scene as members of the jury. The distinguished jury members lending prestige
              to the competition are: Sergio Assad (Brazil), Pablo and Alberto Martos Lozano (Spain), Alfredo
              Minetti (Uruguay), and Richard Scofano (Argentina). It is important to note that they will be
              following the competition from their respective countries via the live broadcast on YouTube.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-lg font-sans">
              <li>Composer Sergio Assad, president of the Jury.</li>
              <li>Cellist Alberto Martos and violinist Pablo Martos (Spain)</li>
              <li>Alfredo Minetti, pianist (Uruguay), and composer and bandoneonist Richard Scofano
              (Argentina).</li>
            </ul>
          </section>
        </AnimateOnScroll>

        {/* José Antonio López Section */}
        <AnimateOnScroll animation={scaleIn}>
          <section id="jose-antonio-lopez" className="mb-16 bg-gradient-to-r from-green-100 to-yellow-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-[#498FC6] font-display">José Antonio López</h2>
            <div className="float-right ml-6 mb-6">
              <motion.img 
                src={joseAntonioLopezImage} 
                alt="José Antonio López" 
                className="w-64 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-lg mb-4 font-sans">
              Retired guitarist and composer José Antonio López holds a doctorate
              from the prestigious Indiana University School of Music, a Master&apos;s
              degree from Arizona State University, and a Bachelor&apos;s degree from the
              Conservatory of Music of Puerto Rico.
            </p>
            <p className="text-lg mb-4 font-sans">
              With a successful career spanning more than 30 years as a guitar soloist,
              his performances with major symphony orchestras across the
              hemisphere stand out. Through his Centro de Estudios Guitarrísticos in
              Puerto Rico, he has trained an entire generation of virtuoso guitarists
              who now dominate the contemporary Puerto Rican guitar scene.
            </p>
            <p className="text-lg mb-4 font-sans">
              Moreover, as a professor and researcher at the University of Puerto Rico
              at Mayagüez, he has contributed to an extensive discography and
              numerous publications focused on concert guitar and the bolero genre,
              including his most ambitious project: an encyclopedia on Juan Neri and
              the trio Los Tres Ases, which will be accompanied by a documentary
              film.
            </p>
            <p className="text-lg font-sans">
              He is currently enjoying his retirement from performing and teaching,
              dedicating his time entirely to composition and traveling the world in
              search of his dream guitar.
            </p>
          </section>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default WorldGuitarCompetitionPage;
