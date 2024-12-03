'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import competitionImage from "../assets/competition-image.jpg";
import juryImage1 from "../assets/jury-image.png";
import juryImage2 from "../assets/jury-image-2.png";
import juryImage3 from "../assets/jury-image-3.png";
import joseAntonioLopezImage from "../assets/jose-antonio-lopez.png";
import StarfieldBackground from './StarfieldBackground';
import festLogo from "../assets/fest copy.png";
import beachImage from "../assets/beach-image.png";
import aerialBeachImage from "../assets/aerial-beach-image.png";

// AnimateOnScroll component
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

// Animation variants
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
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
    <div className="min-h-screen font-manrope-regular relative text-white text-base">
      <StarfieldBackground />
      <div className="max-w-6xl mx-auto py-24 px-6 space-y-24 relative z-10">
        {/* Hero Section - Full width and centered */}
        <AnimateOnScroll animation={fadeInUp}>
          <section className="text-center bg-[rgb(115,208,235)]/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl section-padding transform hover:scale-[1.01] transition-all duration-200 max-w-2xl mx-auto" id="hero">
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

        {/* Description Section - Slightly to the right */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section 
            id="description" 
            className="ml-auto mr-[15%] max-w-3xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform rotate-1"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(183, 218, 214, 0.9), rgba(183, 218, 214, 0.9)), url(${beachImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col items-center gap-4 mb-8 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-36 h-36 object-contain" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Welcome</h2>
            </div>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The aim of the <span className="font-space-grotesk font-semibold">José Antonio López World Guitar Competition</span> is to reward 
              <span className="font-inter italic"> artistic expression</span> and
              <span className="font-chunky"> musicality</span> in classical guitar performance.
            </p>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              With $18,000 in prizes, the competition invites guitarists from around the world to revive the
              interpretative styles evoked by legendary figures such as Julian Bream (England), Alirio Díaz
              (Venezuela), and Leonardo Egúrbida (Puerto Rico). This competition encourages guitarists
              worldwide to bring back the lyricism and tonal colors that make classical guitar unique.
            </p>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The competition will be held as part of the World Guitar Festival, an event dedicated to the guitar,
              featuring the most important luthiers in the world. Participants will include Andrea Tacchi (Italy),
              Gerhard Oldiges (Germany), Gerardo Escobedo (Mexico), Alberto Martínez from Orfeo Magazine
              (Uruguay/Paris), and the collector José Luis Postigo (Seville, Spain).
            </p>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The featured concerts will be performed by Yamandú Costa (Croatia) and Leonela Alejandro
              (Puerto Rico). In addition, two Café Concerts, titled "Guitar Tasting," will be offered, featuring
              virtuosos Iván Rijos (Puerto Rico) and Marcus Toscano (Brazil).
            </p>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words font-bold
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The event will conclude with the Gustavo and Beatriz Arvelo National Guitar Competition, where
              the audience will enjoy the most talented young Puerto Rican guitarists between the ages of 10
              and 18. A series of masterclasses by guest artists will complement this grand international
              gathering dedicated to the guitar.
            </p>
          </section>
        </AnimateOnScroll>

        {/* Location Section - Slightly to the left */}
        <AnimateOnScroll animation={fadeInRight}>
          <section 
            id="location" 
            className="mr-auto ml-[10%] max-w-3xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform -rotate-1"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(115, 208, 235, 0.9), rgba(115, 208, 235, 0.9)), url(${aerialBeachImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col items-center gap-4 mb-8 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-36 h-36 object-contain" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Location</h2>
            </div>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The José Antonio López World Guitar Competition will be held at the Symphonic Hall, San Juan,
              Puerto Rico.
            </p>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
              <strong className="font-space-grotesk [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Date:</strong> 
              <span className="font-inter">Sunday, May 4, 2025.</span>
            </p>
          </section>
        </AnimateOnScroll>

        {/* Prizes Section - Centered with rotation */}
        <AnimateOnScroll animation={scaleIn}>
          <section 
            id="prizes" 
            className="mx-auto max-w-4xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform rotate-1"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(183, 218, 214, 0.9), rgba(183, 218, 214, 0.9)), url(${beachImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col items-center gap-4 mb-8 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-36 h-36 object-contain" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Prizes</h2>
            </div>
            
            {/* Prize amounts in a row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-[600] text-white mr-2 
                    font-['Inter'] tracking-wider
                    [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]">1st Place</span>
                  <span className="text-xl md:text-2xl font-[500] text-white">$7,000</span>
                </div>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-[600] text-white mr-2 
                    font-['Inter'] tracking-wider
                    [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]">2nd Place</span>
                  <span className="text-xl md:text-2xl font-[500] text-[#73D0EB]">$2,000</span>
                </div>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-[600] text-white mr-2 
                    font-['Inter'] tracking-wider
                    [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]">3rd Place</span>
                  <span className="text-xl md:text-2xl font-[500] text-[#498FC6]">$1,000</span>
                </div>
              </div>
            </div>

            {/* Audience Award */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-2xl font-[600] text-white mb-4 
                font-['Inter'] tracking-wider
                [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
                Audience Award
              </h3>
              <p className="text-base md:text-xl mb-4 font-[500] [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] mix-blend-luminosity">
                This will be awarded for the best performance of the required piece, "Guitarra
                Poética," by composer José Antonio López. The prize will consist of a "Replica of Antonio de
                Torres" concert guitar, valued at $5,000, built by the world-renowned luthier Gerardo Escobedo
                from Paracho, Mexico.
              </p>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Required Piece Section - Slightly to the right */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section 
            id="required-piece" 
            className="ml-auto mr-[15%] max-w-3xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform -rotate-2"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(115, 208, 235, 0.9), rgba(115, 208, 235, 0.9)), url(${aerialBeachImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col items-center gap-4 mb-8 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-36 h-36 object-contain" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Set Piece</h2>
            </div>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The competition requires each contestant to perform the piece &quot;Guitarra Poética&quot; (Homage to
              Manuel Bellido) by Puerto Rican composer José Antonio López. The PDF score, audio sample,
              and several YouTube videos are available for download below.
            </p>

            <form 
              name="score-download" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: new URLSearchParams(new FormData(form)).toString()
                })
                  .then(() => {
                    alert("Form submitted successfully! Check your email for the download link.");
                    form.reset();
                  })
                  .catch(error => alert(error));
              }}
              className="max-w-lg mx-auto mb-8 space-y-6 bg-black/20 p-6 rounded-lg"
            >
              <input type="hidden" name="form-name" value="score-download" />
              <input type="hidden" name="bot-field" />
              
              <p>
                <label className="text-xl font-[700] [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]">
                  Full Name:
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 mt-2 rounded bg-white/20 border border-white/30 text-white text-lg font-[400] focus:outline-none focus:border-[#498FC6]"
                  />
                </label>
              </p>

              <p>
                <label className="text-xl font-[700] [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]">
                  Age:
                  <input
                    type="number"
                    name="age"
                    required
                    min="1"
                    max="120"
                    className="w-full px-4 py-3 mt-2 rounded bg-white/20 border border-white/30 text-white text-lg font-[400] focus:outline-none focus:border-[#498FC6]"
                  />
                </label>
              </p>

              <p>
                <label className="text-xl font-[700] [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]">
                  Country of Residence:
                  <input
                    type="text"
                    name="country"
                    required
                    className="w-full px-4 py-3 mt-2 rounded bg-white/20 border border-white/30 text-white text-lg font-[400] focus:outline-none focus:border-[#498FC6]"
                  />
                </label>
              </p>

              <p>
                <label className="text-xl font-[700] [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]">
                  Email:
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 mt-2 rounded bg-white/20 border border-white/30 text-white text-lg font-[400] focus:outline-none focus:border-[#498FC6]"
                  />
                </label>
              </p>

              <div className="flex justify-center gap-4 mt-6">
                <button 
                  type="submit"
                  className="inline-block bg-[#498FC6] text-white py-3 px-6 rounded-full hover:bg-[#3A7CAE] transition-colors text-center font-[700] text-lg shadow-md hover:shadow-lg"
                >
                  Download Score (PDF)
                </button>
                
              </div>
            </form>
          </section>
        </AnimateOnScroll>

        {/* Age Section - Slightly to the left */}
        <AnimateOnScroll animation={fadeInRight}>
          <section 
            id="age" 
            className="mr-auto ml-[10%] max-w-3xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform rotate-1"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(115, 208, 235, 0.9), rgba(115, 208, 235, 0.9)), url(${beachImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col items-center gap-4 mb-8 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-36 h-36 object-contain" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Age</h2>
            </div>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The José Antonio López World Guitar Competition is an open category event with no age limit for
              participation.
            </p>
          </section>
        </AnimateOnScroll>

        {/* Preliminary Round Section */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section 
            id="preliminary-round" 
            className="ml-auto mr-[10%] max-w-3xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform rotate-1"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(140, 149, 77, 0.9), rgba(140, 149, 77, 0.9)), url(${aerialBeachImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col items-center gap-4 mb-8 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-36 h-36 object-contain" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Preliminary Round</h2>
            </div>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The José Antonio López World Guitar Competition requires an initial elimination phase, which
              will consist of the performance of the required piece titled "Guitarra Poética." This performance
              must be submitted via a YouTube video no later than March 30, 2025.
            </p>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              In the video, each contestant must include a personal introduction before the performance, stating
              their full name, country of origin, the name of the competition, and the title of the piece.
            </p>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
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
          <section 
            id="final-stage" 
            className="mr-auto ml-[10%] max-w-3xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform -rotate-1"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(73, 143, 198, 0.9), rgba(73, 143, 198, 0.9)), url(${beachImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col items-center gap-4 mb-8 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-36 h-36 object-contain" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Final Stage</h2>
            </div>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The final stage of the José Antonio López World Guitar Competition will be held in person on May
              4, 2025, at Pablo Casals Symphony Hall of the Centro de Bellas Artes de Santurce in San Juan, Puerto Rico.
            </p>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
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
          <section 
            id="stipend" 
            className="ml-auto mr-[10%] max-w-3xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform rotate-1"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(115, 208, 235, 0.9), rgba(115, 208, 235, 0.9)), url(${aerialBeachImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col items-center gap-4 mb-8 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-36 h-36 object-contain" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Stipend for Finalists</h2>
            </div>
            <h3 className="text-2xl font-[600] text-white mb-4 
              font-['Inter'] tracking-wider
              [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Flights</h3>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The three selected finalists will receive a $500 stipend to help cover their flight expenses. It is
              important to note that, as Puerto Rico is a U.S. territory, each contestant must ensure they meet the
              necessary visa requirements to enter U.S. territory.
            </p>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              When purchasing airline tickets, we recommend flying into either San Juan Airport or Aguadilla
              Airport. San Juan Airport is two and a half hours from Mayagüez, while Aguadilla Airport is 45
              minutes from the city. San Juan receives daily flights from various parts of the U.S. and also direct
              flights from Europe. Aguadilla offers direct flights from New York and Orlando, Florida.
            </p>
            <h3 className="text-2xl font-[600] text-white mb-4 
              font-['Inter'] tracking-wider
              [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Hotel and Transportation</h3>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
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
          <section 
            id="jury" 
            className="mr-auto ml-[10%] max-w-5xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform -rotate-1"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(140, 149, 77, 0.9), rgba(140, 149, 77, 0.9)), url(${beachImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col items-center gap-4 mb-8 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-36 h-36 object-contain" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">International Jury</h2>
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
                  <h3 className="text-xl font-[700] text-center 
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
                      alt="Alfredo Minetti and Richard Scofano" 
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                  <h3 className="text-xl font-[700] text-center 
                    [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Alfredo Minetti and Richard Scofano</h3>
                  <p className="text-center text-gray-300">Pianist (Uruguay) and Composer/Bandoneonist (Argentina)</p>
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
                      alt="Alberto and Pablo Martos" 
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                  <h3 className="text-xl font-[700] text-center 
                    [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Alberto and Pablo Martos</h3>
                  <p className="text-center text-gray-300">Cellist and Violinist (Spain)</p>
                </div>
              </motion.div>
            </div>
            <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The José Antonio López World Guitar Competition has selected renowned artists from the
              international music scene as members of the jury. These distinguished jury members lend prestige
              to the competition and will be following the performances from their respective countries via live broadcast on YouTube.
            </p>
          </section>
        </AnimateOnScroll>

        {/* José Antonio López Section - Special layout */}
        <AnimateOnScroll animation={scaleIn}>
          <section 
            id="jose-antonio-lopez" 
            className="mx-auto max-w-5xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform rotate-1"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(73, 143, 198, 0.9), rgba(73, 143, 198, 0.9)), url(${aerialBeachImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-start">
              <div className="order-2 md:order-1">
                <div className="flex flex-col items-center gap-4 mb-8 w-full">
                  <img src={festLogo} alt="Festival Logo" className="w-36 h-36 object-contain" />
                  <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                    font-['Inter'] tracking-[0.2em] leading-relaxed
                    [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                    border-b-2 border-white/30 pb-2 uppercase w-full">José Antonio López</h2>
                </div>
                <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
                  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                  Retired guitarist and composer <span className="font-space-grotesk font-semibold">José Antonio López</span> holds a 
                  <span className="font-inter italic">doctorate from the prestigious Indiana University School of Music</span>, a 
                  <span className="font-chunky">Master's degree</span> from Arizona State University, and a 
                  <span className="font-space-grotesk">Bachelor's degree</span> from the Conservatory of Music of Puerto Rico.
                </p>
                <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
                  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                  With a successful career spanning more than 30 years as a guitar soloist,
                  his performances with major symphony orchestras across the
                  hemisphere stand out. Through his Centro de Estudios Guitarrísticos in
                  Puerto Rico, he has trained an entire generation of virtuoso guitarists
                  who now dominate the contemporary Puerto Rican guitar scene.
                </p>
                <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
                  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                  Moreover, as a professor and researcher at the University of Puerto Rico
                  at Mayagüez, he has contributed to an extensive discography and
                  numerous publications focused on concert guitar and the bolero genre,
                  including his most ambitious project: an encyclopedia on Juan Neri and
                  the trio Los Tres Ases, which will be accompanied by a documentary
                  film.
                </p>
                <p className="text-base md:text-xl mb-4 font-[500] whitespace-normal break-words
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
      </div>
    </div>
  );
};

export default WorldGuitarCompetitionPage;
