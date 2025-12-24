import React, { useState, useRef } from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { motion, useInView } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import ImageFooter from "../assets/Img/FormfooterImage.png";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSending(true);

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName || " ",
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_rewdq7h", 
        "template_i8e99ng",
        templateParams,
        "w8H3cnXs2fH4-qcfT" 
      )
      .then(
        () => {
          alert("Your message has been sent successfully 🚀");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const handleBack = () => window.history.back();

  return (
    <section
      ref={sectionRef}
      className="overflow-x-hidden min-h-screen bg-[#0f121a] relative flex flex-col"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-[#1a1f2e] -z-10"></div>
      
      {/* Decorative Blur Orb behind form */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2 z-0"></div>

      <nav className="fixed top-0 left-0 w-full py-6 px-6 md:px-12 z-50">
        <button
          onClick={handleBack}
          className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300"
          aria-label="Go Back"
        >
          <ArrowBackIcon className="text-lg group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </nav>

      <div className="container mx-auto mt-28 mb-12 px-4 md:px-8 max-w-7xl flex-grow flex flex-col justify-center">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative z-10"
        >
          <Typography
            variant="h5"
            className="text-pink-500 font-bold uppercase tracking-widest text-sm md:text-base mb-3 font-Josefin"
          >
            Let’s Work Together
          </Typography>
          <Typography
            variant="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-Josefin leading-tight"
          >
            Contact Me for Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
               Next Project
            </span>
          </Typography>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Looking for a passionate developer to bring your ideas to life?
            Whether it's frontend, backend, or full-stack work — I’m here to
            help you build something great.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Column: Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
             <div className="relative">
                {/* Image Glow */}
                <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>
                <img
                  src={ImageFooter}
                  alt="Contact illustration"
                  className="relative z-10 w-full max-w-[450px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
             </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-Josefin">Send a Message</h3>
              
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <Input
                      color="white"
                      size="lg"
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="!text-white focus:!border-blue-500 font-sans"
                      containerProps={{ className: "min-w-[100px]" }}
                      labelProps={{ className: "text-gray-400 peer-placeholder-shown:text-gray-400" }}
                      required
                    />
                  </div>
                  
                  {/* Last Name */}
                  <div>
                    <Input
                      color="white"
                      size="lg"
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="!text-white focus:!border-blue-500 font-sans"
                      labelProps={{ className: "text-gray-400 peer-placeholder-shown:text-gray-400" }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Input
                    color="white"
                    size="lg"
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="!text-white focus:!border-blue-500 font-sans"
                    labelProps={{ className: "text-gray-400 peer-placeholder-shown:text-gray-400" }}
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <Textarea
                    color="white"
                    size="lg"
                    label="Your Message"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="!text-white focus:!border-blue-500 font-sans"
                    labelProps={{ className: "text-gray-400 peer-placeholder-shown:text-gray-400" }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSending}
                    className={`w-full py-4 text-base capitalize flex items-center justify-center gap-2 rounded-xl shadow-lg transition-all duration-300 font-Josefin tracking-wide ${
                      isSending
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-blue-500/20"
                    }`}
                  >
                    {isSending ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <SendIcon fontSize="small" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;