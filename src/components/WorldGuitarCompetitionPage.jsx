'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import competitionImage from "../assets/competition-image.jpg";
import juryImage1 from "../assets/jury-image.png";
import juryImage2 from "../assets/jury-image-2.png";
import juryImage3 from "../assets/jury-image-3.png";
import joseAntonioLopezImage from "../assets/jose-antonio-lopez.png";
import joseAntonioLopezHeroImage from "../assets/fest copy.png"; // Make sure to add this image to your assets
import StarfieldBackground from './StarfieldBackground';
import ParticleAnimation from './ParticleAnimation';
import festLogo from "../assets/fest copy.png";

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

// Add or update the styles in your component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically on smaller screens
    padding: '20px',
    maxWidth: '100%',
    gap: '20px',
  },
  
  competitionInfo: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
  },

  textContent: {
    fontSize: '1rem', // Use relative units
    lineHeight: '1.5',
    wordWrap: 'break-word', // Ensure text wraps properly
    overflow: 'hidden',
  },

  heading: {
    fontSize: '1.5rem',
    marginBottom: '15px',
    wordWrap: 'break-word',
  },

  // Add media query for larger screens if needed
  '@media (min-width: 768px)': {
    container: {
      flexDirection: 'row', // Switch to horizontal layout on larger screens
    },
    competitionInfo: {
      maxWidth: '50%', // Limit width on larger screens
    }
  }
};

const WorldGuitarCompetitionPage = () => {
  return (
    <div className="min-h-screen font-inter relative text-white">
      <ParticleAnimation />
      <StarfieldBackground />
      <div className="max-w-7xl mx-auto py-24 px-6 space-y-24 relative z-10">
        {/* Hero Section - Full width and centered */}
        <AnimateOnScroll animation={fadeInUp}>
          <section className="text-center bg-[rgb(115,208,235)]/40 backdrop-blur-xl p-12 rounded-2xl shadow-2xl section-padding transform hover:scale-[1.02] transition-all duration-300" id="hero">
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={competitionImage}
                alt="World Guitar Competition Poster"
                className="w-full rounded-xl shadow-xl"
              />
            </motion.div>
          </section>
        </AnimateOnScroll>

        {/* Description Section - Offset to the right */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section id="description" className="ml-auto mr-0 max-w-3xl bg-[rgb(183,218,214)]/40 backdrop-blur-xl p-10 rounded-l-2xl shadow-2xl section-padding">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
              <img src={festLogo} alt="Festival Logo" className="w-24 h-24 object-contain" />
              <h2 className="text-4xl font-bold text-[rgb(52,121,150)] font-satisfy text-center md:text-left 
                [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] tracking-wide">Description</h2>
            </div>
            <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The aim of the <span className="font-space-grotesk font-semibold">José Antonio López World Guitar Competition</span> is to reward 
              <span className="font-inter italic"> artistic expression</span> and
              <span className="font-chunky"> musicality</span> in classical guitar performance.
            </p>
            <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              With $18,000 in prizes, the competition invites guitarists from around the world to revive the
              interpretative styles evoked by legendary figures such as Julian Bream (England), Alirio Díaz
              (Venezuela), and Leonardo Egúrbida (Puerto Rico). This competition encourages guitarists
              worldwide to bring back the lyricism and tonal colors that make classical guitar unique.
            </p>
            <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The competition will be held as part of the World Guitar Festival, an event dedicated to the guitar,
              featuring the most important luthiers in the world. Participants will include Andrea Tacchi (Italy),
              Gerhard Oldiges (Germany), Gerardo Escobedo (Mexico), Alberto Martínez from Orfeo Magazine
              (Uruguay/Paris), and the collector José Luis Postigo (Seville, Spain).
            </p>
            <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The featured concerts will be performed by Yamandú Costa (Croatia) and Leonela Alejandro
              (Puerto Rico). In addition, two Café Concerts, titled "Guitar Tasting," will be offered, featuring
              virtuosos Iván Rijos (Puerto Rico) and Marcus Toscano (Brazil).
            </p>
            <p className="text-lg font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The event will conclude with the Gustavo and Beatriz Arvelo National Guitar Competition, where
              the audience will enjoy the most talented young Puerto Rican guitarists between the ages of 10
              and 18. A series of masterclasses by guest artists will complement this grand international
              gathering dedicated to the guitar.
            </p>
          </section>
        </AnimateOnScroll>

        {/* Location Section - Offset to the left */}
        <AnimateOnScroll animation={fadeInRight}>
          <section id="location" className="mr-auto ml-0 max-w-3xl bg-[rgb(115,208,235)]/40 backdrop-blur-xl p-10 rounded-r-2xl shadow-2xl section-padding">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
              <img src={festLogo} alt="Festival Logo" className="w-24 h-24 object-contain" />
              <h2 className="text-4xl font-bold text-[rgb(52,121,150)] font-satisfy text-center md:text-left 
                [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] tracking-wide">Location</h2>
            </div>
            <p className="text-lg font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The José Antonio López World Guitar Competition will be held at the Symphonic Hall, San Juan,
              Puerto Rico.
            </p>
            <p className="text-lg mt-4 font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
              <strong className="font-space-grotesk [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Date:</strong> 
              <span className="font-inter">Sunday, May 4, 2025.</span>
            </p>
          </section>
        </AnimateOnScroll>

        {/* Prizes Section - Centered with special styling */}
        <AnimateOnScroll animation={scaleIn}>
          <section id="prizes" className="mx-auto max-w-4xl bg-[rgb(183,218,214)]/40 backdrop-blur-xl p-10 rounded-2xl shadow-2xl section-padding transform hover:rotate-1 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <img src={festLogo} alt="Festival Logo" className="w-24 h-24 object-contain" />
              <h2 className="text-4xl font-bold text-[#498FC6] font-satisfy 
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]">Prizes</h2>
            </div>
            <ul className="space-y-4 text-lg font-work-sans">
              <li className="flex items-center">
                <span className="text-3xl font-bold text-yellow-500 mr-4 
                  [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)] font-space-grotesk">1st Place</span>
                <span>$7,000</span>
              </li>
              <li className="flex items-center">
                <span className="text-3xl font-bold text-gray-400 mr-4 
                  [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)] font-space-grotesk">2nd Place</span>
                <span>$2,000</span>
              </li>
              <li className="flex items-center">
                <span className="text-3xl font-bold text-orange-500 mr-4 
                  [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)] font-space-grotesk">3rd Place</span>
                <span>$1,000</span>
              </li>
              <li className="flex flex-col">
                <br></br>
                <span className="text-2xl font-bold text-[#498FC6] mb-4 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_25%)] font-chunky tracking-wide">
                  Audience Award
                </span>
                <span className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] mix-blend-luminosity">
                  This will be awarded for the best performance of the required piece, "Guitarra
                  Poética," by composer José Antonio López. The prize will consist of a "Replica of Antonio de
                  Torres" concert guitar, valued at $5,000, built by the world-renowned luthier Gerardo Escobedo
                  from Paracho, Mexico.
                </span>
              </li>
            </ul>
          </section>
        </AnimateOnScroll>

        {/* Required Piece Section - Diagonal layout */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section id="required-piece" className="relative ml-auto mr-0 max-w-3xl bg-[rgb(115,208,235)]/40 backdrop-blur-xl p-10 rounded-2xl shadow-2xl section-padding transform -rotate-2">
            <div className="flex items-center gap-4 mb-6">
              <img src={festLogo} alt="Festival Logo" className="w-24 h-24 object-contain" />
              <h2 className="text-4xl font-bold text-[#498FC6] font-satisfy 
                [text-shadow:_2px_2px_2px_rgb(0_0_0_/_25%)] tracking-wide">Set Piece</h2>
            </div>
            <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The competition requires each contestant to perform the piece &quot;Guitarra Poética&quot; (Homage to
              Manuel Bellido) by Puerto Rican composer José Antonio López. The PDF score, audio sample,
              and several YouTube videos are available for download below.
            </p>

            <form
              name="score-download"
              method="POST"
              data-netlify="true"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: new URLSearchParams(new FormData(form)).toString(),
                })
                  .then(() => alert("Form submitted successfully!"))
                  .catch((error) => alert(error));
              }}
            >
              <div className="max-w-lg mx-auto mb-8 space-y-6 bg-black/20 p-6 rounded-lg">
                <input type="hidden" name="form-name" value="score-download" />
                
                <p className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-lg font-semibold font-space-grotesk 
                    [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]">
                    Full Name:
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#498FC6]"
                    />
                  </label>
                </p>

                <p className="flex flex-col space-y-2">
                  <label htmlFor="age" className="text-lg font-semibold font-space-grotesk 
                    [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]">
                    Age:
                    <input
                      type="number"
                      id="age"
                      name="age"
                      required
                      min="1"
                      max="120"
                      className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#498FC6]"
                    />
                  </label>
                </p>

                <p className="flex flex-col space-y-2">
                  <label htmlFor="country" className="text-lg font-semibold font-space-grotesk 
                    [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]">
                    Country of Residence:
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#498FC6]"
                    />
                  </label>
                </p>

                <p className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-lg font-semibold font-space-grotesk 
                    [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]">
                    Email:
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#498FC6]"
                    />
                  </label>
                </p>

                <div className="flex justify-center gap-4 mt-6">
                  <button 
                    type="submit"
                    className="inline-block bg-[#498FC6] text-white py-3 px-6 rounded-full hover:bg-[#3A7CAE] transition-colors text-center font-semibold shadow-md hover:shadow-lg"
                  >
                    Download Score (PDF)
                  </button>
                  <button 
                    type="submit"
                    className="inline-block bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition-colors text-center font-semibold shadow-md hover:shadow-lg"
                  >
                    Download Audio (MP3)
                  </button>
                </div>
              </div>
            </form>
          </section>
        </AnimateOnScroll>

        {/* Age Section - With updated styling */}
        <AnimateOnScroll animation={fadeInRight}>
          <section id="age" className="ml-auto mr-0 max-w-3xl bg-[rgb(115,208,235)]/40 backdrop-blur-xl p-10 rounded-l-2xl shadow-2xl section-padding transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <img src={festLogo} alt="Festival Logo" className="w-24 h-24 object-contain" />
              <h2 className="text-4xl font-bold text-[rgb(52,121,150)] font-satisfy 
                [text-shadow:_2px_2px_2px_rgb(0_0_0_/_25%)] tracking-wide">Age</h2>
            </div>
            <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The José Antonio López World Guitar Competition is an open category event with no age limit for
              participation.
            </p>
          </section>
        </AnimateOnScroll>

        {/* Preliminary Round Section */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section id="preliminary-round" className="mr-auto ml-0 max-w-3xl bg-[rgb(183,218,214)]/40 backdrop-blur-xl p-10 rounded-r-2xl shadow-2xl section-padding transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <img src={festLogo} alt="Festival Logo" className="w-24 h-24 object-contain" />
              <h2 className="text-4xl font-bold text-[rgb(52,121,150)] font-satisfy 
                [text-shadow:_2px_2px_2px_rgb(0_0_0_/_25%)] tracking-wide">Preliminary Round</h2>
            </div>
            <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The José Antonio López World Guitar Competition requires an initial elimination phase, which
              will consist of the performance of the required piece titled "Guitarra Poética." This performance
              must be submitted via a YouTube video no later than March 30, 2025.
            </p>
            <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              In the video, each contestant must include a personal introduction before the performance, stating
              their full name, country of origin, the name of the competition, and the title of the piece.
            </p>
            <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              Along with the video, participants must submit the registration form, which can be downloaded
              from our website, accompanied by the video link. Both, the video link and the registration form
              should be sent to the following email address: jalwgc@gmail.com
            </p>
            <a href="#" className="text-[#498FC6] hover:underline 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]">Registration form: Click Here</a>
          </section>
        </AnimateOnScroll>

        {/* Final Stage Section */}
        <AnimateOnScroll animation={fadeInRight}>
          <section id="final-stage" className="ml-auto mr-0 max-w-3xl bg-[rgb(115,208,235)]/40 backdrop-blur-xl p-10 rounded-l-2xl shadow-2xl section-padding transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <img src={festLogo} alt="Festival Logo" className="w-24 h-24 object-contain" />
              <h2 className="text-4xl font-bold text-[rgb(52,121,150)] font-satisfy 
                [text-shadow:_2px_2px_2px_rgb(0_0_0_/_25%)] tracking-wide">Final Stage</h2>
            </div>
            <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The final stage of the José Antonio López World Guitar Competition will be held in person on May
              4, 2025, at Pablo Casals Symphony Hall of the Centro de Bellas Artes de Santurce in San Juan, Puerto Rico.
            </p>
            <p className="text-lg font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              In the first round of the final stage, the three finalists, selected in alphabetical order, will perform
              the required piece, "Guitarra Poética" by José Antonio López. In the second round, the finalists
              will present a free repertoire with a duration of 20 minutes. (The selection of the repertoire and the
              approach to interpretation must align with the competition&apos;s description).
            </p>
          </section>
        </AnimateOnScroll>

        {/* Stipend Section */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section id="stipend" className="mr-auto ml-0 max-w-3xl bg-[rgb(183,218,214)]/40 backdrop-blur-xl p-10 rounded-r-2xl shadow-2xl section-padding transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <img src={festLogo} alt="Festival Logo" className="w-24 h-24 object-contain" />
              <h2 className="text-4xl font-bold text-[#498FC6] font-satisfy 
                [text-shadow:_2px_2px_2px_rgb(0_0_0_/_25%)] tracking-wide">Stipend for Finalists</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-4 
              [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Flights</h3>
            <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The three selected finalists will receive a $500 stipend to help cover their flight expenses. It is
              important to note that, as Puerto Rico is a U.S. territory, each contestant must ensure they meet the
              necessary visa requirements to enter U.S. territory.
            </p>
            <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              When purchasing airline tickets, we recommend flying into either San Juan Airport or Aguadilla
              Airport. San Juan Airport is two and a half hours from Mayagüez, while Aguadilla Airport is 45
              minutes from the city. San Juan receives daily flights from various parts of the U.S. and also direct
              flights from Europe. Aguadilla offers direct flights from New York and Orlando, Florida.
            </p>
            <h3 className="text-2xl font-semibold mb-4 
              [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Hotel and Transportation</h3>
            <p className="text-lg font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The José Antonio López World Guitar Competition will provide three nights of accommodation
              for the three finalists, as well as internal transportation. Additionally, the day after the competition,
              we will organize a trip to the beautiful beaches of Puerto Rico for all participants of the World
              Guitar Festival. Remember, in Puerto Rico, we enjoy only one season all year long: Summer!
            </p>
          </section>
        </AnimateOnScroll>

        {/* Jury Section - Grid layout with hover effects */}
        <AnimateOnScroll animation={fadeInRight}>
          <section id="jury" className="mx-auto max-w-6xl bg-[rgb(140,149,77)]/40 backdrop-blur-xl p-10 rounded-2xl shadow-2xl section-padding">
            <div className="flex items-center gap-4 mb-8">
              <img src={festLogo} alt="Festival Logo" className="w-24 h-24 object-contain" />
              <h2 className="text-4xl font-bold text-[rgb(52,121,150)] font-satisfy 
                [text-shadow:_2px_2px_2px_rgb(0_0_0_/_25%)] tracking-wide">International Jury</h2>
            </div>
            
            {/* Add decorative elements */}
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 opacity-30">
              <motion.div 
                className="w-32 h-32 rounded-full bg-[rgb(115,208,235)]/20 backdrop-blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
            <div className="absolute -right-20 top-1/3 transform -translate-y-1/2 opacity-30">
              <motion.div 
                className="w-24 h-24 rounded-full bg-[rgb(183,218,214)]/20 backdrop-blur-sm"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="w-full aspect-square overflow-hidden rounded-lg shadow-lg mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={juryImage1} 
                      alt="Sergio Assad" 
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-center font-space-grotesk 
                    [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Composer Sergio Assad</h3>
                  <p className="text-center text-gray-300">President of the Jury</p>
                </div>
              </motion.div>
              <motion.div 
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="w-full aspect-square overflow-hidden rounded-lg shadow-lg mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={juryImage2} 
                      alt="Alberto and Pablo Martos" 
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-center font-space-grotesk 
                    [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Alfredo Minetti and Richard Scofano</h3>
                  <p className="text-center text-gray-300">Cellist and Violinist (Spain)</p>
                </div>
              </motion.div>
              <motion.div 
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="w-full aspect-square overflow-hidden rounded-lg shadow-lg mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={juryImage3} 
                      alt="Alfredo Minetti and Richard Scofano" 
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-center font-space-grotesk 
                    [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Alberto and Pablo Martos</h3>
                  <p className="text-center text-gray-300">Pianist (Uruguay) and Composer/Bandoneonist (Argentina)</p>
                </div>
              </motion.div>
            </div>
            <p className="text-lg mt-8 font-work-sans whitespace-normal break-words 
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The José Antonio López World Guitar Competition has selected renowned artists from the
              international music scene as members of the jury. These distinguished jury members lend prestige
              to the competition and will be following the performances from their respective countries via live broadcast on YouTube.
            </p>
          </section>
        </AnimateOnScroll>

        {/* José Antonio López Section - Special layout */}
        <AnimateOnScroll animation={scaleIn}>
          <section id="jose-antonio-lopez" className="mx-auto max-w-5xl bg-[rgb(52,121,150)]/40 backdrop-blur-xl p-12 rounded-2xl shadow-2xl section-padding">
            <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-start">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <img src={festLogo} alt="Festival Logo" className="w-24 h-24 object-contain" />
                  <h2 className="text-4xl font-bold text-[#498FC6] font-satisfy 
                    [text-shadow:_2px_2px_2px_rgb(0_0_0_/_25%)] tracking-wide">José Antonio López</h2>
                </div>
                <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
                  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                  Retired guitarist and composer <span className="font-space-grotesk font-semibold">José Antonio López</span> holds a 
                  <span className="font-inter italic">doctorate from the prestigious Indiana University School of Music</span>, a 
                  <span className="font-chunky">Master's degree</span> from Arizona State University, and a 
                  <span className="font-space-grotesk">Bachelor's degree</span> from the Conservatory of Music of Puerto Rico.
                </p>
                <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
                  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                  With a successful career spanning more than 30 years as a guitar soloist,
                  his performances with major symphony orchestras across the
                  hemisphere stand out. Through his Centro de Estudios Guitarrísticos in
                  Puerto Rico, he has trained an entire generation of virtuoso guitarists
                  who now dominate the contemporary Puerto Rican guitar scene.
                </p>
                <p className="text-lg mb-4 font-work-sans whitespace-normal break-words 
                  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                  Moreover, as a professor and researcher at the University of Puerto Rico
                  at Mayagüez, he has contributed to an extensive discography and
                  numerous publications focused on concert guitar and the bolero genre,
                  including his most ambitious project: an encyclopedia on Juan Neri and
                  the trio Los Tres Ases, which will be accompanied by a documentary
                  film.
                </p>
                <p className="text-lg font-work-sans whitespace-normal break-words 
                  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                  He is currently enjoying his retirement from performing and teaching,
                  dedicating his time entirely to composition and traveling the world in
                  search of his dream guitar.
                </p>
              </div>
              <motion.div 
                className="order-1 md:order-2"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <img 
                  src={joseAntonioLopezImage} 
                  alt="José Antonio López" 
                  className="w-full rounded-xl shadow-xl"
                />
              </motion.div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Add decorative elements to other sections */}
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
          {/* Guitar Pick */}
          <motion.div 
            className="absolute left-10 top-1/4 w-16 h-20 bg-[rgb(115,208,235)]/10 backdrop-blur-sm"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
            }}
            animate={{
              y: [0, 50, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Wave */}
          <motion.div 
            className="absolute right-10 top-1/3 w-32 h-12 bg-[rgb(183,218,214)]/10 backdrop-blur-sm rounded-full"
            style={{
              borderRadius: "50% 50% 0 0 / 100% 100% 0 0"
            }}
            animate={{
              y: [0, 20, 0],
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Guitar Sound Hole */}
          <motion.div 
            className="absolute left-20 top-2/3"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-24 h-24 rounded-full bg-[rgb(52,121,150)]/10 backdrop-blur-sm border-2 border-[rgb(52,121,150)]/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[rgb(52,121,150)]/05 backdrop-blur-sm" />
          </motion.div>

          {/* Musical Note */}
          <motion.div 
            className="absolute right-20 bottom-1/4 w-8 h-16 bg-[rgb(115,208,235)]/10 backdrop-blur-sm"
            style={{
              clipPath: "path('M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14Z')"
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Bubble Group */}
          <div className="absolute left-1/4 bottom-1/4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[rgb(183,218,214)]/10 backdrop-blur-sm"
                style={{
                  width: `${20 - i * 4}px`,
                  height: `${20 - i * 4}px`,
                }}
                animate={{
                  y: [-50 - i * 20, -100 - i * 20],
                  x: [0, i % 2 === 0 ? 20 : -20, 0],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldGuitarCompetitionPage;
