'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import competitionImage from "../assets/competition-image.jpg";
import juryImage1 from "../assets/jury-image.png";
import juryImage2 from "../assets/jury-image-2.png";
import juryImage3 from "../assets/jury-image-3.png";
import joseAntonioLopezImage from "../assets/jose-antonio-lopez.png";
import festLogo from "../assets/fest copy.png";
import competitionPoster from "../assets/competition_poster_new.jpeg";
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
    <div className="min-h-screen font-manrope-regular relative text-white text-base bg-[rgb(115,208,235)]" data-navbar-title="World Guitar Competition">
      {/* Background decorative images */}
      <div 
        className="fixed top-0 left-0 w-1/4 h-screen opacity-10 bg-contain bg-left bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${competitionPoster})` }}
      />
      <div 
        className="fixed top-0 right-0 w-1/4 h-screen opacity-10 bg-contain bg-right bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${competitionPoster})` }}
      />

      <div className="max-w-6xl mx-auto py-24 px-6 space-y-24 relative z-10">
        {/* Hero Section - Full width and centered */}
        <AnimateOnScroll animation={fadeInUp}>
          <section className="text-center bg-[rgb(115,208,235)]/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl section-padding transform hover:scale-[1.01] transition-all duration-200 max-w-2xl mx-auto" id="hero">
            <motion.div 
              className="max-w-xl mx-auto"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={competitionPoster}
                alt="World Guitar Competition Poster"
                className="w-3/4 mx-auto rounded-xl shadow-xl"
              />
            </motion.div>
          </section>
        </AnimateOnScroll>

        {/* Description Section */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section 
            id="description" 
            className="mx-auto max-w-4xl backdrop-blur-xl px-8 py-6 rounded-[2rem_0.5rem] shadow-2xl section-padding relative overflow-hidden transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-500 ease-in-out"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(56, 188, 212, 0.95), rgba(14, 149, 173, 0.95))`,
            }}
          >
            <div className="flex flex-col items-center gap-0 mb-6 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-64 h-64 object-contain -mt-24 -mb-8" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Welcome</h2>
            </div>
            <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The primary objective of the <span className="font-bold italic">José Antonio López World Guitar Competition</span> is to celebrate and reward 
              artistic expression and musicality in classical guitar performance.
            </p>
            <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              With $16,000 in prizes, the competition aims to inspire guitarists worldwide to revive the lyricism and tonal richness
              that define classical guitar. It also seeks to rekindle the interpretative styles popularized by legendary figures such 
              as Julian Bream (England), Alirio Díaz (Venezuela), and Leonardo Egúrbida (Puerto Rico).
            </p>
            <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The competition will take place as part of the <span className="font-bold"> Festival Mundial de la Guitarra</span>, 
              a global event celebrating the art of guitar, featuring some of the world's most renowned luthiers. 
              For the 2025 edition, participants will include Andrea Tacchi (Italy), Gerhard Oldiges (Germany), Gerardo Escobedo (Mexico), 
              Alberto Martínez from <span className="italic">Orfeo Magazine</span> (Uruguay/Paris), and the distinguished collector José Luis Postigo (Seville, Spain).
            </p>
            <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The festival's featured concerts will include a performance by GFA winner Leonela Alejandro (Puerto Rico). Additionally, 
              two <span className="italic">Café Concerts</span> titled "<span className="italic">Guitar Tasting</span>" will be presented, featuring virtuoso guitarists Iván Rijos (Puerto Rico) and 
              Marcus Toscano (Brazil). To further enrich this grand international gathering, a series of masterclasses conducted by guest artists 
              will also be offered.
            </p>
          </section>
        </AnimateOnScroll>

        {/* Location Section */}
        <AnimateOnScroll animation={fadeInRight}>
          <section 
            id="location" 
            className="mx-auto max-w-4xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(42, 198, 222, 0.95), rgba(18, 153, 173, 0.95))`,
            }}
          >
            <div className="flex flex-col items-center gap-0 mb-6 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-64 h-64 object-contain -mt-24 -mb-8" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Location</h2>
            </div>
            <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The <span className="font-bold italic">José Antonio López World Guitar Competition</span> will be held in Mayagüez, Puerto Rico.
            </p>
            <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
              <strong className="font-space-grotesk [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Date: </strong> 
              <span className="font-bold">Thurdsay, May 1, 2025.</span>
            </p>
          </section>
        </AnimateOnScroll>

        {/* Prizes Section */}
        <AnimateOnScroll animation={scaleIn}>
          <section 
            id="prizes" 
            className="mx-auto max-w-4xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform"
            style={{
              backgroundImage: `linear-gradient(165deg, rgba(38, 183, 207, 0.95), rgba(24, 159, 183, 0.95))`,
            }}
          >
            <div className="flex flex-col items-center gap-0 mb-6 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-64 h-64 object-contain -mt-24 -mb-8" />
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
                  <span className="text-xl md:text-2xl font-[700] text-white">$5,000</span>
                </div>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-[600] text-white mr-2 
                    font-['Inter'] tracking-wider
                    [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]">2nd Place</span>
                  <span className="text-xl md:text-2xl font-[700] text-white">$2,000</span>
                </div>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-[600] text-white mr-2 
                    font-['Inter'] tracking-wider
                    [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]">3rd Place</span>
                  <span className="text-xl md:text-2xl font-[700] text-white">$1,000</span>
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
              <p className="text-lg md:text-2xl mb-4 font-[500] [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] mix-blend-luminosity">
              This prize will be awarded for the best performance of the required piece, "<span className="italic">Guitarra Poética</span>," composed by José Antonio López. 
              The award consists of a "Replica of Antonio de Torres" concert guitar, valued at $5,000, crafted by the world-renowned luthier 
              Gerardo Escobedo from Paracho, Mexico.
              </p>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Required Piece Section - Slightly to the right */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section 
            id="required-piece" 
            className="mx-auto max-w-3xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(-60deg, rgba(32, 178, 198, 0.95), rgba(14, 149, 173, 0.95))`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col items-center gap-0 mb-6 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-64 h-64 object-contain -mt-24 -mb-8" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Set Piece</h2>
            </div>
            <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The competition requires each contestant to perform the piece "<span className="italic">Guitarra Poética</span>" (Homage to Manuel Bellido) 
              composed by Puerto Rican composer José Antonio López. The PDF score, audio samples, and several YouTube videos 
              will be available for download on the event's official website.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/HMYLFJv0Jbs" 
                  title="Guitarra Poética (Homenaje a Manuel Bellido)" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/6Xq3ue1-w2w" 
                  title="José Antonio López en vivo desde Granada, España." 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <a 
                href="/GuitarraPoética.pdf" 
                download="GuitarraPoética.pdf"
                className="inline-block bg-[#498FC6] text-white py-3 px-6 rounded-full hover:bg-[#3A7CAE] transition-colors text-center font-[700] text-lg shadow-md hover:shadow-lg"
              >
                Download Score (PDF)
              </a>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Age Section - Slightly to the left */}
        <AnimateOnScroll animation={fadeInRight}>
          <section 
            id="age" 
            className="mx-auto max-w-3xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform"
            style={{
              backgroundImage: `linear-gradient(195deg, rgba(56, 188, 212, 0.95), rgba(18, 153, 173, 0.95))`,
            }}
          >
            <div className="flex flex-col items-center gap-0 mb-6 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-64 h-64 object-contain -mt-24 -mb-8" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Age</h2>
            </div>
            <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The <span className="font-bold italic">José Antonio López World Guitar Competition</span> is an open category event with no age restrictions for participation.
            </p>
          </section>
        </AnimateOnScroll>

        {/* Preliminary Round Section */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section 
            id="preliminary-round" 
            className="mx-auto max-w-4xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform"
            style={{
              backgroundImage: `linear-gradient(-120deg, rgba(42, 198, 222, 0.95), rgba(24, 159, 183, 0.95))`,
            }}
          >
            <div className="flex flex-col items-center gap-0 mb-6 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-64 h-64 object-contain -mt-24 -mb-8" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Preliminary Round</h2>
            </div>
            <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The <span className="font-bold italic">José Antonio López World Guitar Competition </span>begins with an initial elimination phase, 
              which requires contestants to perform the mandatory piece titled "<span className="italic">Guitarra Poética</span>" This performance must be submitted as a 
              YouTube video no later than March 30, 2025.
              <br>
              </br>
              <br>
              </br>
              In the video, each contestant must include a brief personal introduction before the performance, stating their full name, 
              country of origin, the name of the competition, and the title of the piece.
              Additionally, participants must submit the registration form, which can be downloaded from the official website, 
              along with the video link. Both the video link and the registration form should be sent to the following email address:{' '}
              <a 
                href="mailto:jalworldguitarcompetition@gmail.com" 
                className="text-white hover:text-[#498FC6] underline transition-colors duration-200"
              >
                jalworldguitarcompetition@gmail.com
              </a>
            </p>
          </section>
        </AnimateOnScroll>

        {/* Final Stage Section */}
        <AnimateOnScroll animation={fadeInRight}>
          <section 
            id="final-stage" 
            className="mx-auto max-w-4xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform"
            style={{
              backgroundImage: `linear-gradient(150deg, rgba(38, 183, 207, 0.95), rgba(14, 149, 173, 0.95))`,
            }}
          >
            <div className="flex flex-col items-center gap-0 mb-6 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-64 h-64 object-contain -mt-24 -mb-8" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Final Stage</h2>
            </div>
            <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The final stage of the <span className="font-bold italic">José Antonio López World Guitar Competition</span> will take place in person on <span className="font-bold">May 3, 2025</span>, in <span className="font-bold">Puerto Rico</span>.
              <br>
              </br>
              <br>
              </br>
              During the first round of the final stage, the three finalists, selected in alphabetical order, will perform the required piece,
               "<span className="italic">Guitarra Poética</span>" by José Antonio López. In the second round, the finalists will present a free-choice repertoire with a maximum duration 
               of 20 minutes. The repertoire selection and interpretative approach must align with the competition's guidelines.
            </p>
          </section>
        </AnimateOnScroll>

        {/* Stipend Section */}
        <AnimateOnScroll animation={fadeInLeft}>
          <section 
            id="stipend" 
            className="mx-auto max-w-4xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform"
            style={{
              backgroundImage: `linear-gradient(150deg, rgba(38, 183, 207, 0.95), rgba(14, 149, 173, 0.95))`,
            }}
          >
            <div className="flex flex-col items-center gap-0 mb-6 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-64 h-64 object-contain -mt-24 -mb-8" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">Stipend for Finalists</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-[600] text-white mb-4 
              font-['Inter'] tracking-wider
              [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Flights</h3>
            <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The three selected finalists will each receive a $500 stipend to assist with their flight expenses. 
              (Please note that, as Puerto Rico is a U.S. territory, each contestant must ensure they meet the necessary visa 
              requirements for entry into the United States.) When booking airline tickets, it is recommended to fly into San Juan Airport.
            </p>
            <h3 className="text-3xl md:text-4xl font-[600] text-white mb-4 
              font-['Inter'] tracking-wider
              [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Hotel and Transportation</h3>
            <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The <span className="font-bold italic">José Antonio López World Guitar Competition</span> will provide three nights of accommodation for the three finalists, 
              along with internal transportation. Additionally, the day after the competition, we will organize a trip to the beautiful 
              beaches of Puerto Rico (as the one in the poster) for all participants of the World Guitar Festival. Please note that Puerto Rico 
              enjoys a single season throughout the year: summer!
            </p>
          </section>
        </AnimateOnScroll>

        {/* Jury Section - Grid layout with hover effects */}
        <AnimateOnScroll animation={fadeInRight}>
          <section 
            id="jury" 
            className="mx-auto max-w-4xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform"
            style={{
              backgroundImage: `linear-gradient(-75deg, rgba(56, 188, 212, 0.95), rgba(18, 153, 173, 0.95))`,
            }}
          >
            <div className="flex flex-col items-center gap-0 mb-6 w-full">
              <img src={festLogo} alt="Festival Logo" className="w-64 h-64 object-contain -mt-24 -mb-8" />
              <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                font-['Inter'] tracking-[0.2em] leading-relaxed
                [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                border-b-2 border-white/30 pb-2 uppercase w-full">International Jury</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-9">
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
            <p className="text-lg md:text-2xl mt-8 mb-4 font-[500] whitespace-normal break-words
              [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
              The <span className="font-bold italic">José Antonio López World Guitar Competition</span> has appointed renowned artists from the international music scene 
              as members of the jury. The distinguished panel includes Pablo Martos (violinist) and Alberto Martos (cellist) from Spain, 
              Alfredo Minetti (pianist) from Uruguay, and Richard Scofano (composer and bandoneonist) from Argentina.
              <br>
              </br>
              <br>
              </br>
              (It is important to note that the jury members will follow the competition from their respective countries via a live broadcast on YouTube.)
            </p>
          </section>
        </AnimateOnScroll>

        {/* José Antonio López Section - Special layout */}
        <AnimateOnScroll animation={scaleIn}>
          <section 
            id="jose-antonio-lopez" 
            className="mx-auto max-w-4xl backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl section-padding relative overflow-hidden transform"
            style={{
              backgroundImage: `linear-gradient(-75deg, rgba(56, 188, 212, 0.95), rgba(18, 153, 173, 0.95))`,
            }}
          >
            <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex flex-col items-center gap-0 mb-6 w-full">
                  <img src={festLogo} alt="Festival Logo" className="w-64 h-64 object-contain -mt-24 -mb-8" />
                  <h2 className="text-2xl md:text-3xl font-[600] text-white text-center
                    font-['Inter'] tracking-[0.2em] leading-relaxed
                    [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]
                    border-b-2 border-white/30 pb-2 uppercase w-full">José Antonio López</h2>
                </div>
                <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
                  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                  Retired concert guitarist José Antonio López holds a 
                  Doctorate from the prestigious Indiana University School of Music, a 
                  Master's degree from Arizona State University, and a 
                  Bachelor's degree from the Conservatory of Music of Puerto Rico.
                </p>
                <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
                  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                  With a distinguished career spanning more than 30 years as a guitar soloist, he is recognized for his performances with major symphony orchestras throughout the Americas. Through his <span className="font-bold ">Centro de Estudios Guitarrísticos</span> in Puerto Rico, he has mentored an entire generation of virtuoso guitarists who now dominate the contemporary Puerto Rican guitar scene.
                </p>
                <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
                  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                  As a professor and researcher at the University of Puerto Rico at Mayagüez, he has made significant contributions to the field, including an extensive discography and numerous publications on concert guitar and the bolero genre. His most ambitious project to date is an encyclopedia on Juan Neri and the trio <span className="italic">Los Tres Ases</span>, which will also feature an accompanying documentary film.
                </p>
                <p className="text-lg md:text-2xl mb-4 font-[500] whitespace-normal break-words
                  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_30%)] mix-blend-luminosity">
                  Currently retired from performing and teaching, he devotes his time entirely to composition and traveling the world in search of his dream guitar. In 2020, he published <span className="italic">Opus 1, No.1</span>, a collection of 36 concert works for solo guitar.
                </p>
              </div>
              <motion.div 
                className="order-1 md:order-2 flex items-center"
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
