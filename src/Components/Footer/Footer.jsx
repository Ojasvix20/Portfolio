import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send"; // 2. Import Icon for button

// Make sure this path matches where your image is actually stored!
import ProfileImage from "./../../assets/Img/Wink Emoji GIF - Wink Emoji Apple - Discover & Share GIFs.gif"; 
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate(); // 3. Initialize navigation

  const handleContactClick = () => {
    navigate("/Contactme"); // 4. Define click handler
  };

  return (
    <footer className="bg-[#171c28] text-white pt-16 pb-4 font-sans">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        
        {/* Top Section: Flex Container for Info and Image */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          {/* Left Side: Contact Info */}
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-Josefin">Reach Out to me!</h2>
            
            <p className="text-gray-400 uppercase tracking-wider text-sm mb-6 font-semibold">
              Discuss a project or just want to say hi, my inbox is open for all.
            </p>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              "Pursuing B.Tech CSE 🎓 | Software Developer 🧑‍💻 | Programer 💻 | Open Source Contributor 👾 | Video Editor 🎥 | Tech Writer ✍️"
            </p>

            {/* Contact Details List */}
            <div className="flex flex-col gap-3 mb-8 items-center md:items-start">
              <div className="flex items-center gap-3">
                 <PhoneIcon className="text-pink-500" />
                 <span className="font-medium">+91 8368066548</span>
              </div>
              <div className="flex items-center gap-3">
                 <EmailIcon className="text-pink-500" />
                 <a href="mailto:ojasvi.bakshi@gmail.com" className="hover:text-pink-400 transition-colors">ojasvi.bakshi@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                 <LocationOnIcon className="text-pink-500" />
                 <span>Delhi, India</span>
              </div>
            </div>

            <div className="mb-6 font-medium">
              Open for opportunities: <span className="text-green-400 font-bold">YES</span>
            </div>

            {/* NEW CONTACT BUTTON ADDED HERE */}
            <div className="mb-8">
                <button
                    onClick={handleContactClick}
                    className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-pink-500 rounded-full shadow-md group"
                >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-500 group-hover:translate-x-0 ease">
                        <SendIcon fontSize="small" />
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-pink-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                        Contact Me
                    </span>
                    <span className="relative invisible">Contact Me</span>
                </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <SocialIcon href="https://github.com/Ojasvix20" icon={<GitHubIcon />} color="bg-gray-800" />
              <SocialIcon href="https://www.instagram.com/ojasvi.bakshi" icon={<InstagramIcon />} color="bg-pink-600" />
              <SocialIcon href="https://twitter.com/bakshiojasvi" icon={<TwitterIcon />} color="bg-blue-400" />
              <SocialIcon href="https://www.linkedin.com/in/OjasviBakshi" icon={<LinkedInIcon />} color="bg-blue-700" />
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
              <img 
                src={ProfileImage} 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="mt-4 pt-4 border-t border-gray-800 text-center text-gray-500 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-4 md:px-10">
          <div className="font-bold text-lg text-gray-300">Ojasvi Bakshi</div>
          <div className="mt-2 md:mt-0">Copyright © 2025 Ojasvi-Portfolio.com</div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for Social Icons to keep code clean
const SocialIcon = ({ href, icon, color }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} w-10 h-10 flex items-center justify-center rounded-full text-white hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer z-50`}
    >
      {icon}
    </a>
  );
};

export default Footer;