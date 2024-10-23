import React, { useEffect, useRef } from 'react';

const AnimatedSection = ({ children, className, id }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`opacity-0 transition-opacity duration-1000 ease-in-out pt-24 ${className}`}>
      {children}
    </section>
  );
};

export default AnimatedSection;
