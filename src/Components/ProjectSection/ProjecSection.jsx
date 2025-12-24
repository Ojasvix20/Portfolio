import { motion } from "framer-motion";
import { GitHub, AttachFile } from "@mui/icons-material";
import "./ProjectSection.css";

import KisaanMitrImage from "./../../assets/Img/kisaanMitr.png";
import MuseumProject from "./../../assets/Img/museumProject.png";

// tech icons
import html from "./../../assets/Img/Html.png";
import css from "../../assets/Img/Css.png";
import react from "../../assets/Img/reactBasic.png";
import tailwind from "../../assets/Img/Tailwind.png";
import js from "../../assets/Img/JavaScript.png";
import firebase from "./../../assets/Img/firebase1.png";
import nodejs from "./../../assets/Img/BackendIcons/Node.png";
import expressJs from "./../../assets/Img/BackendIcons/db.png";
import mongoDb from "./../../assets/Img/BackendIcons/Node.png";
import framer from "./../../assets/Img/BackendIcons/framer.png";
import Jwt from "./../../assets/Img/BackendIcons/jwt.png";
import googleTranslate from "./../../assets/Img/google_translate.png";
import TFLogo from "./../../assets/Img/tflogo.png";


const projects = [
  {
    title: "Museum Ticket Booking ChatBot",
    description:
      "A smart museum chatbot ticketing system built using modern web technologies that enables visitors to inquire about exhibits, timings, and book tickets through conversational interaction. The system automates ticket booking, improves user engagement, and reduces manual workload, serving as a foundation for a scalable and intelligent visitor management platform.",
    link: "https://github.com/Ojasvix20/ChatBot-Ticketing-System",
    image: MuseumProject,
    goLive: "https://ojasvix20.github.io/ChatBot-Ticketing-System/",
    tech: [html, css, js, react, tailwind, nodejs, googleTranslate],
  },
  {
    title: "Kisaan Mitr - Farmer's Friend ",
    description:
      "Kisaan Mitr is a farmer-centric smart application designed to assist farmers with crop guidance, weather updates, and agricultural insights through a simple and accessible interface. The platform aims to bridge the technology gap in agriculture by providing timely information and decision support, serving as a foundation for a scalable digital farming assistant.",
    link: "https://github.com/Ojasvix20/Kisaan-Mitr-Website",
    image: KisaanMitrImage,
    goLive: "https://ojasvix20.github.io/Kisaan-Mitr-Website/",
    tech: [react, tailwind, nodejs, html, css, googleTranslate, TFLogo],
  },
  
];
const ProjectSection = () => {
  return (
    <section
      className="bg-[#f8fafc] dark:bg-slate-300 py-20 px-4 md:px-10"
      id="project-section"
    >
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            My Featured Projects
          </h2>
          <p className="text-md md:text-lg text-black mt-4">
            A selection of projects showcasing my full-stack development skills.
          </p>
        </motion.div>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row gap-8 items-start bg-white dark:bg-black rounded-2xl shadow-xl p-6 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full max-h-[400px]"
              />
            </div>

            {/* Details */}
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>
              <p
                className="text-sm text-gray-700 dark:text-gray-300 mb-5 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-white/10 backdrop-blur-sm shadow-sm transition hover:scale-105 hover:shadow-md"
                  >
                    <img src={tech} alt="tech" className="w-5 h-5" />
                  </div>
                ))}
              </div>

              {/* Links */}
               <div className="flex relative gap-4 mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white border border-neutral-700 rounded-full transition-all duration-300 hover:bg-neutral-800 hover:shadow-md shadow-black/40"
              >
                <GitHub className="text-yellow-400" /> GitHub
              </a>
              <a
                href={project.goLive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white border border-neutral-700 rounded-full transition-all duration-300 hover:bg-neutral-800 hover:shadow-md shadow-black/40"
              >
                <AttachFile className="text-white" /> Live Demo
              </a>
            </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
