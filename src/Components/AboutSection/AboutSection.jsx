import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutMeImage from './../../assets/Img/Hero Section memo.png';
import './AboutSection.css'

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const aboutSection = document.getElementById('about-section');
      // Added safety check in case element isn't found
      if (aboutSection) {
        const offsetTop = aboutSection.offsetTop;
        if (scrollTop > offsetTop - window.innerHeight / 2) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="about-section" 
      // UPDATED: Added the radial gradient background
      className="min-h-screen flex items-center bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-400 via-gray-500 to-black relative text-white py-[230px]"
    >
      <div id="Contain" className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left px-4 md:px-8 lg:px-32 ">
        
        {/* Left Side: Text */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <motion.h1 
            // UPDATED: Changed text-black to text-white for the main container
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white self-center" 
            initial={{ opacity: 0, scale: 0.8, translateY: 30 }} 
            animate={{ opacity: 1, scale: 1, translateY: 0, transition: { duration: 1, delay: 0.5 } }}
          >
            <motion.span 
              // UPDATED: Brightened red slightly for better contrast on dark bg
              className="text-yellow-500" 
              initial={{ opacity: 0, scale: 0.8, translateY: 30 }} 
              animate={{ opacity: 1, scale: 1, translateY: 0, transition: { duration: 1, delay:0.5 } }}
            >
              About
            </motion.span>
            <motion.span 
              // UPDATED: Changed "Me" from text-black to text-white
              className="text-white"
              initial={{ opacity: 0, scale: 0.8, translateY: 30 }} 
              animate={{ opacity: 1, scale: 1, translateY: 0, transition: { duration: 1, delay: 0.6 } }}
            >
              &nbsp;Me
            </motion.span>
          </motion.h1>

          <motion.p 
            id="pTag" 
            // UPDATED: 
            // 1. Changed background to semi-transparent black (bg-black/50) with backdrop-blur for a "Glassmorphism" look.
            // 2. Added a subtle border (border-white/10).
            className="z-30 sm:text-xl hover:transition-all hover:duration-700 hover:shadow-2xl shadow-xl self-center md:text-2xl max-w-2xl font-Josefin p-7 rounded-[30px] bg-black/50 backdrop-blur-md border border-white/10 text-gray-100" 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50, transition: { duration: 1, delay: 0.6 }}}
          >
            {/* UPDATED: Inserted the "Impact-Focused" version of your bio */}
            I build web experiences that bridge the gap between complex engineering and intuitive design. With a background spanning sleek UI development to scalable backend architecture, I don't just write code—I build digital products that solve problems. Driven by a restless curiosity, I’m constantly exploring new frameworks to ensure the systems I architect are as robust as they are beautiful.
          </motion.p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
          <motion.img 
            src={AboutMeImage} 
            alt="Profile" 
            // UPDATED: shadow-red-500 will glow nicely on the dark background
            className="w-[70%] md:[65%] lg:[50%] drop-shadow-2xl rounded-b shadow-red-500" 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, transition: { duration: 1, delay: 0.6 } }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;