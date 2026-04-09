import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import ProfileImage from "./../../assets/Img/New Image.png"; 
// import Pdf from "./../../assets/pdf/Ojasvi resume.pdf"; 

import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaInstagram, FaGithub, FaCode } from "react-icons/fa"; 

const HeroSection = () => {
  const texts = useMemo(
    () => ["I'm Ojasvi Bakshi", "I'm a Full Stack Developer"],
    []
  );

  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // --- UPDATED SOCIAL LINKS ---
  // Increased size to 38 and added brand colors
  const socialLinks = [
    { name: "LeetCode", icon: <SiLeetcode size={38} color="#FFA116" />, url: "https://leetcode.com/u/OjasviBakshi/" },
    { name: "Codolio", icon: <FaCode size={38} color="#38bdf8" />, url: "https://codolio.com/profile/OjasviBakshi" },
    { name: "GeeksforGeeks", icon: <SiGeeksforgeeks size={38} color="#2F8D46" />, url: "https://www.geeksforgeeks.org/profile/ojasvib07f0" },
    { name: "GitHub", icon: <FaGithub size={38} color="#ffffff" />, url: "https://github.com/Ojasvix20" },
    { name: "Instagram", icon: <FaInstagram size={38} color="#E1306C" />, url: "https://instagram.com/ojasvi.bakshi" },
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex === 0) {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        } else {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          if (charIndex === currentText.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        }
      },
      isDeleting ? 50 : 120
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTextIndex, texts]);

  const handleDownloadCV = () => {
    /* const link = document.createElement("a");
    link.href = Pdf;
    link.download = "Ojasvi_Bakshi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
    */
    console.log("Download triggered");
  };

  const handleContactInfo = () => {
    window.location.href = "mailto:ojasvi.bakshi@gmail.com";
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black text-white relative"
    >
      {/* --- SIDEBAR CODE --- */}
      <motion.div
        className="mx-2 bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:left-8 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-50 flex flex-row md:flex-col gap-6 bg-white/5 md:bg-transparent px-6 py-3 md:p-0 rounded-full md:rounded-none backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-none"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            // Removed text-gray-400 and hover:text-yellow-400 so true colors show
            // Swapped to a subtle hover opacity shift and added a drop-shadow
            className="hover:opacity-80 transition-opacity duration-300 flex items-center justify-center drop-shadow-md"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            title={link.name}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 pl-0 md:pl-16">
        {/* IMAGE */}
        <div className="md:w-1/2 flex justify-center perspective-[1000px] pointer-events-none">
          <motion.img
            src={ProfileImage}
            // src="https://via.placeholder.com/400"
            alt="Profile"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover pointer-events-auto"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            whileHover={{
              rotateX: 0,
              rotateY: 0,
              scale: 1.1,
              boxShadow: "0 0 100px rgba(255, 225, 0, 0.5)",
            }}
            transition={{
              type: "spring",
              stiffness: 10,
              damping: 15,
            }}
            style={{
              boxShadow: "0 0 80px rgba(255,255,255,0.18)",
            }}
          />
        </div>

        {/* TEXT + BUTTONS */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0 z-20">
          <motion.h1
            className="text-[30px] sm:text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hey!
            <span className="text-red-600">(</span>
            <span className="text-yellow-400 ml-1">{displayedText}</span>
            <span className="text-red-600">)</span>
          </motion.h1>

          {/* BUTTONS */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* DOWNLOAD CV */}
            <motion.button
              onClick={handleDownloadCV}
              className="w-[220px] h-[56px] bg-white text-black rounded-2xl flex items-center justify-center gap-2 font-semibold cursor-pointer shadow-lg hover:bg-black hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                <path d="M216 0h80v192h80L256 352 136 192h80z" />
              </svg>
            </motion.button>

            {/* EMAIL ME */}
            <motion.button
              onClick={handleContactInfo}
              className="w-[220px] h-[56px] border border-white text-white rounded-2xl flex items-center justify-center gap-2 font-semibold cursor-pointer shadow-lg hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Me
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                <path d="M64 112h384v288H64z" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;