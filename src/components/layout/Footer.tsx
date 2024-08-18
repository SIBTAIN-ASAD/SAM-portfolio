import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-r from-gray-900 to-black text-white py-12"
    >
      <div className="container mx-auto px-6">
        {/* Work & Services Links */}
        <div className="flex justify-center gap-8 mb-8 border-b border-gray-600 pb-4">
          <a href="#about" className="text-md font-medium hover:text-gray-400 transition-colors">
            About Me
          </a>
          <a href="#work" className="text-md font-medium hover:text-gray-400 transition-colors">
            Work
          </a>
          <a href="#feedback" className="text-md font-medium hover:text-gray-400 transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-md font-medium hover:text-gray-400 transition-colors">
            Contact
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
          {/* Left Side: Icons */}
          <div className="flex flex-col items-center md:items-start border-r border-gray-600 pr-6">
            <p className="text-lg mb-2 flex items-center">
              <FaEnvelope className="mr-2" /> sibtainasad50@gmail.com
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/sibtain-asad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://github.com/SIBTAIN-ASAD/" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
              </a>
              <a href="https://twitter.com/sibtainasad" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://www.instagram.com/sibtain__malik/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-red-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Side: Address & Phone */}
          <div className="flex flex-col items-center md:items-end pl-6">
            <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
            <p className="text-md mb-1">Lahore, Pakistan</p>
            <p className="text-md mb-1">Phone: +92 341 6010353</p>
            <p className="text-md">Email: sibtainasad50@gmail.com</p>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="mt-6 border-t border-gray-600"></div>

        <div className="text-center mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sibtain Malik. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
